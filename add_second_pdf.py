import random

# 10 questions from second PDF
second_pdf_questions = [
    {"question": "Who developed the C programming language?", "options": ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Ken Thompson"], "correct": 1, "topic": "Introduction to C", "explanation": "Dennis Ritchie developed C at Bell Labs in 1972."},
    {"question": "Which function is the entry point of a C program?", "options": ["start()", "program()", "main()", "init()"], "correct": 2, "topic": "C Program Structure", "explanation": "Every C program execution begins at the main() function."},
    {"question": "Which header file is required for printf()?", "options": ["stdlib.h", "conio.h", "stdio.h", "math.h"], "correct": 2, "topic": "C Program Structure", "explanation": "stdio.h provides standard input/output functions like printf() and scanf()."},
    {"question": "Which data type stores integer values?", "options": ["float", "int", "double", "char"], "correct": 1, "topic": "Data Types", "explanation": "int is the data type for storing integer values in C."},
    {"question": "What symbol is used for single-line comments?", "options": ["/* */", "#", "//", "**"], "correct": 2, "topic": "C Syntax", "explanation": "// is used for single-line comments in C99 and later."},
    {"question": "Which loop executes at least once?", "options": ["for", "while", "do-while", "if"], "correct": 2, "topic": "Loops", "explanation": "do-while loop checks condition after execution, guaranteeing at least one iteration."},
    {"question": "What is the correct format specifier for int?", "options": ["%f", "%c", "%d", "%s"], "correct": 2, "topic": "Input/Output", "explanation": "%d is the format specifier for integer values in printf() and scanf()."},
    {"question": "Which operator is used for multiplication?", "options": ["x", "*", "%", "#"], "correct": 1, "topic": "Operators", "explanation": "The asterisk (*) is the multiplication operator in C."},
    {"question": "Which symbol is used for assignment?", "options": ["==", "=", ":=", "=>"], "correct": 1, "topic": "Operators", "explanation": "Single equals (=) is the assignment operator; double equals (==) is for comparison."},
    {"question": "Which keyword is used to exit a loop?", "options": ["stop", "return", "break", "exit"], "correct": 2, "topic": "Control Flow", "explanation": "break statement immediately exits the current loop."}
]

# Randomize answers
for q in second_pdf_questions:
    correct_answer = q['options'][q['correct']]
    random.shuffle(q['options'])
    q['correct'] = q['options'].index(correct_answer)

# Read current database
with open('COS201_QUESTIONS_DATABASE.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Extract existing questions
import re
existing_pattern = r'\{[^}]*question:[^}]*options:[^}]*correct:[^}]*topic:[^}]*explanation:[^}]*\}'
existing_questions = re.findall(existing_pattern, content, re.DOTALL)

print(f"Current questions: {len(existing_questions)}")

# Generate new database
output = "const COS201_QUESTIONS = [\n"

# Add existing questions
for q_str in existing_questions:
    output += "    " + q_str.strip() + ",\n"

# Add 10 new questions from second PDF
for i, q in enumerate(second_pdf_questions):
    output += "    {\n"
    output += f'        question: "{q["question"]}",\n'
    opts = ', '.join([f'"{opt}"' for opt in q['options']])
    output += f'        options: [{opts}],\n'
    output += f'        correct: {q["correct"]},\n'
    output += f'        topic: "{q["topic"]}",\n'
    output += f'        explanation: "{q["explanation"]}"\n'
    output += "    }"
    if i < len(second_pdf_questions) - 1:
        output += ","
    output += "\n"

output += "];\n\n"
output += "// Export for use in exam system\n"
output += "if (typeof module !== 'undefined' && module.exports) {\n"
output += "    module.exports = COS201_QUESTIONS;\n"
output += "}\n"

with open('COS201_QUESTIONS_DATABASE.js', 'w', encoding='utf-8') as f:
    f.write(output)

print(f"Added 10 questions from second PDF")
print(f"Total questions now: {len(existing_questions) + len(second_pdf_questions)}")
