import PyPDF2
import re

pdf_path = "MAT 201 CBE 2019(1).pdf"

with open(pdf_path, 'rb') as file:
    reader = PyPDF2.PdfReader(file)
    
    # Extract all text
    full_text = ""
    for page in reader.pages:
        full_text += page.extract_text() + "\n"
    
    # Split by question numbers
    questions = []
    lines = full_text.split('\n')
    
    current_q = None
    current_text = ""
    
    for line in lines:
        # Match question number at start
        match = re.match(r'^(\d+)\.\s*(.+)', line)
        if match:
            # Save previous question
            if current_q:
                questions.append((current_q, current_text.strip()))
            current_q = match.group(1)
            current_text = match.group(2)
        else:
            current_text += " " + line
    
    # Add last question
    if current_q:
        questions.append((current_q, current_text.strip()))
    
    # Write formatted output
    with open('maths/MAT201_formatted.txt', 'w', encoding='utf-8') as out:
        out.write(f"Total questions extracted: {len(questions)}\n\n")
        out.write("="*80 + "\n\n")
        
        for num, text in questions[:150]:  # First 150 questions
            # Clean up text
            text = re.sub(r'\s+', ' ', text)  # Remove extra spaces
            
            # Try to identify question and options
            parts = re.split(r'([A-E]\.\s*)', text)
            
            out.write(f"Question {num}:\n")
            out.write(f"{parts[0]}\n\n")
            
            # Write options
            for i in range(1, len(parts), 2):
                if i+1 < len(parts):
                    option = parts[i] + parts[i+1]
                    # Mark correct answer with *
                    if '*' in option or option.startswith('*'):
                        out.write(f"  *{option.replace('*', '').strip()}\n")
                    else:
                        out.write(f"  {option.strip()}\n")
            
            out.write("\n" + "-"*80 + "\n\n")

print(f"Extracted {len(questions)} questions to maths/MAT201_formatted.txt")
