import re

# Read all three parts
questions = []

for part in [1, 2, 3]:
    with open(f'maths/extracted_questions_part{part}.txt', 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Split by question numbers
    pattern = r'\n(\d+)\.\s+'
    parts = re.split(pattern, content)
    
    # Process questions
    for i in range(1, len(parts), 2):
        q_num = int(parts[i])
        q_text = parts[i+1].strip()
        
        # Extract question and options
        lines = q_text.split('\n')
        question_text = lines[0]
        
        options = []
        correct_idx = 0
        
        for line in lines[1:]:
            line = line.strip()
            if not line:
                continue
            
            # Check if it's an option
            if line.startswith('*'):
                # This is the correct answer
                correct_idx = len(options)
                options.append(line[1:].strip())
            elif line[0] in ['A', 'B', 'C', 'D', 'E'] and line[1] == '.':
                options.append(line[3:].strip())
        
        if len(options) >= 4:  # Valid question
            questions.append({
                'id': q_num,
                'question': question_text,
                'options': options[:5],  # Take first 5 options
                'correct': correct_idx,
                'topic': 'Mathematics'
            })

# Generate JavaScript
js_output = "const MAT201_QUESTIONS = [\n"

for q in questions:
    js_output += "    {\n"
    js_output += f"        id: {q['id']},\n"
    js_output += f"        question: \"{q['question']}\",\n"
    js_output += f"        options: {q['options']},\n"
    js_output += f"        correct: {q['correct']},\n"
    js_output += f"        topic: \"{q['topic']}\",\n"
    js_output += f"        explanation: \"Solution for question {q['id']}\"\n"
    js_output += "    },\n"

js_output += "];\n\n"
js_output += "if (typeof module !== 'undefined' && module.exports) {\n"
js_output += "    module.exports = MAT201_QUESTIONS;\n"
js_output += "}\n"

# Write to file
with open('MAT201_QUESTIONS_DATABASE_FULL.js', 'w', encoding='utf-8') as f:
    f.write(js_output)

print(f"Generated {len(questions)} questions")
print(f"Question IDs: {min(q['id'] for q in questions)} to {max(q['id'] for q in questions)}")
