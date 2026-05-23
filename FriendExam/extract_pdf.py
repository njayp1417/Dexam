import os
import re
import json

try:
    import pdfplumber
except ImportError:
    print("Installing pdfplumber...")
    os.system("pip install pdfplumber")
    import pdfplumber

PDF_FOLDER = "pdfs"
OUTPUT_FOLDER = "extracted"

os.makedirs(OUTPUT_FOLDER, exist_ok=True)


def extract_text_from_pdf(pdf_path):
    text = ""
    with pdfplumber.open(pdf_path) as pdf:
        for page in pdf.pages:
            page_text = page.extract_text()
            if page_text:
                text += page_text + "\n"
    return text


def parse_mcq_questions(text):
    questions = []

    text = re.sub(r'\r\n', '\n', text)
    text = re.sub(r'\r', '\n', text)

    # Split on MCQ block markers like *MCQ 1* or MCQ 1
    blocks = re.split(r'\n\*?MCQ\s*\d+\*?\n', text)

    for block in blocks:
        block = block.strip()
        if not block:
            continue

        lines = [l.strip() for l in block.split('\n') if l.strip()]
        if not lines:
            continue

        q_line = None
        options = []
        answer = None

        for line in lines:
            # Match *Q: text* or Q: text
            if q_line is None:
                q_match = re.match(r'^\*?Q:\s*(.+?)\*?$', line)
                if q_match:
                    q_line = q_match.group(1).strip().rstrip('*')
                    continue

            # Match options like: - A. text or - A) text
            opt_match = re.match(r'^-\s*[(\[]?([A-Da-d])[)\].]\s*(.+)', line)
            if opt_match:
                options.append(opt_match.group(2).strip().rstrip('*'))
                continue

            # Match answer: *Answer:* A. text or Answer: A
            ans_match = re.match(r'^\*?(?:Answer|Ans)[:\s\*]*([A-Da-d])[\.\s]', line, re.IGNORECASE)
            if ans_match:
                answer = ans_match.group(1).upper()

        if q_line and len(options) >= 2:
            correct_index = 0
            if answer:
                idx = ord(answer) - ord('A')
                correct_index = idx if idx < len(options) else 0

            questions.append({
                "question": q_line,
                "options": options[:4],
                "correct": correct_index,
                "topic": "General",
                "explanation": ""
            })

    return questions


def save_raw_text(filename, text):
    out_path = os.path.join(OUTPUT_FOLDER, filename.replace(".pdf", ".txt"))
    with open(out_path, "w", encoding="utf-8") as f:
        f.write(text)
    print(f"  Raw text saved -> {out_path}")


def save_questions_json(filename, questions):
    out_path = os.path.join(OUTPUT_FOLDER, filename.replace(".pdf", "_questions.json"))
    with open(out_path, "w", encoding="utf-8") as f:
        json.dump(questions, f, indent=2, ensure_ascii=False)
    print(f"  Questions JSON saved -> {out_path} ({len(questions)} questions)")


def save_questions_js(course_code, questions):
    var_name = f"{course_code}_QUESTIONS"
    out_path = os.path.join(OUTPUT_FOLDER, f"{course_code}_QUESTIONS_DATABASE.js")

    js = f"const {var_name} = [\n"
    for i, q in enumerate(questions):
        opts = ", ".join([f'"{o}"' for o in q["options"]])
        q_text = q["question"].replace('"', "'")
        js += "    {\n"
        js += f'        id: {i + 1},\n'
        js += f'        question: "{q_text}",\n'
        js += f'        options: [{opts}],\n'
        js += f'        correct: {q["correct"]},\n'
        js += f'        topic: "{q["topic"]}",\n'
        js += f'        explanation: "{q["explanation"]}"\n'
        js += "    }"
        if i < len(questions) - 1:
            js += ","
        js += "\n"
    js += "];\n\n"
    js += "if (typeof module !== 'undefined' && module.exports) {\n"
    js += f"    module.exports = {var_name};\n"
    js += "}\n"

    with open(out_path, "w", encoding="utf-8") as f:
        f.write(js)
    print(f"  JS database saved -> {out_path}")


def get_course_code(filename):
    match = re.search(r'([A-Z]{2,4}\s?\d{3})', filename.upper())
    if match:
        return match.group(1).replace(" ", "")
    return "COURSE"


def main():
    pdf_files = [f for f in os.listdir(PDF_FOLDER) if f.lower().endswith(".pdf")]

    if not pdf_files:
        print("No PDF files found in the pdfs/ folder.")
        return

    print(f"Found {len(pdf_files)} PDF(s):\n")

    all_questions = {}

    for pdf_file in pdf_files:
        pdf_path = os.path.join(PDF_FOLDER, pdf_file)
        course_code = get_course_code(pdf_file)

        print(f"Processing: {pdf_file}")
        print(f"  Course code detected: {course_code}")

        try:
            text = extract_text_from_pdf(pdf_path)
            save_raw_text(pdf_file, text)

            questions = parse_mcq_questions(text)
            save_questions_json(pdf_file, questions)

            if course_code not in all_questions:
                all_questions[course_code] = []
            all_questions[course_code].extend(questions)

        except Exception as e:
            print(f"  ERROR: {e}")

        print()

    print("Generating JS databases...\n")
    for course_code, questions in all_questions.items():
        seen = set()
        unique = []
        for q in questions:
            if q["question"] not in seen:
                seen.add(q["question"])
                unique.append(q)

        print(f"{course_code}: {len(unique)} unique questions")
        save_questions_js(course_code, unique)

    print("\nDone! Check the extracted/ folder.")
    print("Next step: copy the .js file into FriendExam/ and update index.html")


if __name__ == "__main__":
    main()
