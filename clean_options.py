import re

# Read the generated file
with open('MAT201_QUESTIONS_DATABASE_FULL.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Function to clean option text
def clean_option(opt):
    # Remove patterns like "A. ", "B. ", etc. from the beginning
    cleaned = re.sub(r'^[A-E]\.\s*', '', opt)
    return cleaned

# Process the content
lines = content.split('\n')
new_lines = []

for line in lines:
    if 'options: [' in line:
        # Extract the options array
        match = re.search(r"options: \[(.*?)\],", line)
        if match:
            options_str = match.group(1)
            # Split by ', ' but be careful with quotes
            options = eval('[' + options_str + ']')
            # Clean each option
            cleaned_options = [clean_option(opt) for opt in options]
            # Rebuild the line
            new_line = f"        options: {cleaned_options},"
            new_lines.append(new_line)
        else:
            new_lines.append(line)
    else:
        new_lines.append(line)

# Write cleaned version
with open('MAT201_QUESTIONS_DATABASE.js', 'w', encoding='utf-8') as f:
    f.write('\n'.join(new_lines))

print("Cleaned 150 questions and saved to MAT201_QUESTIONS_DATABASE.js")
