import random

# Read existing database
with open('COS201_QUESTIONS_DATABASE.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Additional 40 questions to reach 100+
additional_questions = [
    # C Basics & History (7 questions)
    {"question": "C was originally developed for which operating system?", "options": ["Windows", "Unix", "Linux", "DOS"], "correct": 1, "topic": "Introduction to C", "explanation": "C was developed at Bell Labs for Unix operating system development."},
    {"question": "Which of the following is a characteristic of C?", "options": ["Object-oriented", "Procedural", "Functional only", "Declarative"], "correct": 1, "topic": "Introduction to C", "explanation": "C is a procedural programming language."},
    {"question": "The first version of C was known as:", "options": ["C89", "K&R C", "ANSI C", "C99"], "correct": 1, "topic": "Introduction to C", "explanation": "K&R C refers to the original version by Kernighan and Ritchie."},
    {"question": "Which standard introduced the bool type in C?", "options": ["C89", "C95", "C99", "C11"], "correct": 2, "topic": "Introduction to C", "explanation": "C99 standard introduced the _Bool type and stdbool.h header."},
    {"question": "C is considered a middle-level language because:", "options": ["It's difficult to learn", "It combines low-level and high-level features", "It's outdated", "It's only for beginners"], "correct": 1, "topic": "Introduction to C", "explanation": "C provides both low-level memory access and high-level abstractions."},
    {"question": "Which company maintains the GCC compiler?", "options": ["Microsoft", "Apple", "GNU Project", "Oracle"], "correct": 2, "topic": "Development Tools", "explanation": "GCC (GNU Compiler Collection) is maintained by the GNU Project."},
    {"question": "The sizeof operator returns:", "options": ["Value of variable", "Size in bytes", "Memory address", "Data type"], "correct": 1, "topic": "Operators", "explanation": "sizeof returns the size of a data type or variable in bytes."},
    
    # Data Types & Variables (7 questions)
    {"question": "What is the size of char in C?", "options": ["1 byte", "2 bytes", "4 bytes", "Depends on compiler"], "correct": 0, "topic": "Data Types", "explanation": "char is always 1 byte (8 bits) in C."},
    {"question": "Which keyword is used to define constants?", "options": ["constant", "const", "final", "static"], "correct": 1, "topic": "Variables", "explanation": "const keyword declares constant variables in C."},
    {"question": "What is the range of unsigned char?", "options": ["0 to 255", "-128 to 127", "0 to 127", "-255 to 255"], "correct": 0, "topic": "Data Types", "explanation": "unsigned char ranges from 0 to 255 (8 bits)."},
    {"question": "Which storage class has the longest lifetime?", "options": ["auto", "register", "static", "extern"], "correct": 2, "topic": "Variables", "explanation": "static variables persist for the entire program execution."},
    {"question": "The register keyword suggests:", "options": ["Global variable", "Store in CPU register", "Constant value", "Pointer variable"], "correct": 1, "topic": "Variables", "explanation": "register suggests storing the variable in CPU register for faster access."},
    {"question": "What is type casting?", "options": ["Deleting variables", "Converting one data type to another", "Creating new types", "Copying variables"], "correct": 1, "topic": "Data Types", "explanation": "Type casting converts a value from one data type to another."},
    {"question": "Which is the correct way to declare a pointer?", "options": ["int ptr;", "int *ptr;", "int &ptr;", "pointer int ptr;"], "correct": 1, "topic": "Pointers", "explanation": "Pointers are declared using the * symbol."},
    
    # Operators & Expressions (7 questions)
    {"question": "What is the result of 5 / 2 in C?", "options": ["2.5", "2", "3", "2.0"], "correct": 1, "topic": "Operators", "explanation": "Integer division truncates the decimal part, resulting in 2."},
    {"question": "The ++ operator is called:", "options": ["Addition", "Increment", "Concatenation", "Comparison"], "correct": 1, "topic": "Operators", "explanation": "++ is the increment operator that adds 1 to a variable."},
    {"question": "What does the expression x = y = z = 5 do?", "options": ["Syntax error", "Assigns 5 to x, y, and z", "Compares values", "Adds values"], "correct": 1, "topic": "Operators", "explanation": "Assignment is right-associative, so all three get value 5."},
    {"question": "The ternary operator syntax is:", "options": ["condition ? true : false", "if ? then : else", "condition : true ? false", "? condition true false"], "correct": 0, "topic": "Operators", "explanation": "Ternary operator: condition ? value_if_true : value_if_false."},
    {"question": "What is the precedence of * compared to +?", "options": ["Lower", "Higher", "Same", "Undefined"], "correct": 1, "topic": "Operators", "explanation": "Multiplication has higher precedence than addition."},
    {"question": "The comma operator evaluates:", "options": ["First expression only", "Last expression only", "All expressions, returns last", "Average of expressions"], "correct": 2, "topic": "Operators", "explanation": "Comma operator evaluates all expressions and returns the last one."},
    {"question": "What does the expression !0 evaluate to?", "options": ["0", "1", "false", "Error"], "correct": 1, "topic": "Operators", "explanation": "!0 (NOT 0) evaluates to 1 (true) in C."},
    
    # Control Structures (6 questions)
    {"question": "What is the difference between while and do-while?", "options": ["No difference", "do-while executes at least once", "while is faster", "do-while is deprecated"], "correct": 1, "topic": "Loops", "explanation": "do-while checks condition after execution, guaranteeing at least one iteration."},
    {"question": "The continue statement:", "options": ["Exits the loop", "Skips to next iteration", "Restarts the program", "Does nothing"], "correct": 1, "topic": "Loops", "explanation": "continue skips the remaining code in current iteration and moves to next."},
    {"question": "Which is valid for loop syntax?", "options": ["for(;;)", "for()", "for{}", "for[]"], "correct": 0, "topic": "Loops", "explanation": "for(;;) creates an infinite loop with empty expressions."},
    {"question": "The goto statement:", "options": ["Is recommended", "Jumps to a label", "Is not supported in C", "Only works in functions"], "correct": 1, "topic": "Control Flow", "explanation": "goto transfers control to a labeled statement (use sparingly)."},
    {"question": "What happens if no case matches in switch without default?", "options": ["Error", "Program crashes", "Nothing happens", "First case executes"], "correct": 2, "topic": "Control Flow", "explanation": "If no case matches and there's no default, the switch is skipped."},
    {"question": "Can switch work with float values?", "options": ["Yes", "No", "Only in C99", "Only with casting"], "correct": 1, "topic": "Control Flow", "explanation": "switch only works with integer and character types, not float."},
    
    # Functions (6 questions)
    {"question": "What is recursion?", "options": ["Loop", "Function calling itself", "Multiple functions", "Error handling"], "correct": 1, "topic": "Functions", "explanation": "Recursion is when a function calls itself to solve a problem."},
    {"question": "What is the purpose of function parameters?", "options": ["Decoration", "Pass data to function", "Return values", "Create variables"], "correct": 1, "topic": "Functions", "explanation": "Parameters allow passing data into functions."},
    {"question": "What is the difference between call by value and call by reference?", "options": ["No difference", "Value copies data, reference passes address", "Reference is faster", "Value is deprecated"], "correct": 1, "topic": "Functions", "explanation": "Call by value copies data; call by reference passes memory address."},
    {"question": "Can a function return multiple values directly?", "options": ["Yes", "No, but can use pointers or structures", "Only in C99", "Only integers"], "correct": 1, "topic": "Functions", "explanation": "C functions return one value, but can modify multiple values via pointers."},
    {"question": "What is a static function?", "options": ["Fast function", "Function visible only in its file", "Constant function", "Deprecated function"], "correct": 1, "topic": "Functions", "explanation": "static functions have internal linkage, visible only in their source file."},
    {"question": "What is an inline function?", "options": ["Function inside another", "Function expanded at call site", "Recursive function", "External function"], "correct": 1, "topic": "Functions", "explanation": "inline suggests the compiler to expand function code at call site for speed."},
    
    # Arrays & Strings (7 questions)
    {"question": "How do you access the third element of array arr?", "options": ["arr[3]", "arr[2]", "arr(2)", "arr{2}"], "correct": 1, "topic": "Arrays", "explanation": "Arrays are zero-indexed, so third element is at index 2."},
    {"question": "What is the null character in C?", "options": ["\\n", "\\0", "NULL", "0"], "correct": 1, "topic": "Arrays", "explanation": "\\0 is the null terminator for strings in C."},
    {"question": "How is a string stored in C?", "options": ["As string type", "As character array with \\0", "As integer array", "As pointer only"], "correct": 1, "topic": "Arrays", "explanation": "Strings are character arrays terminated with null character \\0."},
    {"question": "What does strlen() return?", "options": ["Array size", "String length excluding \\0", "String length including \\0", "Memory address"], "correct": 1, "topic": "Arrays", "explanation": "strlen() returns the number of characters before \\0."},
    {"question": "How do you declare a 2D array with 3 rows and 4 columns?", "options": ["int arr[4][3]", "int arr[3][4]", "int arr(3,4)", "int arr[3,4]"], "correct": 1, "topic": "Arrays", "explanation": "2D arrays are declared as type name[rows][columns]."},
    {"question": "What is the relationship between arrays and pointers?", "options": ["No relationship", "Array name is a pointer to first element", "Arrays are faster", "Pointers are arrays"], "correct": 1, "topic": "Pointers", "explanation": "Array name acts as a constant pointer to the first element."},
    {"question": "Which function copies strings?", "options": ["strcopy()", "strcpy()", "copy()", "strdup()"], "correct": 1, "topic": "Arrays", "explanation": "strcpy() copies one string to another."}
]

# Randomize correct answers
for q in additional_questions:
    correct_answer = q['options'][q['correct']]
    random.shuffle(q['options'])
    q['correct'] = q['options'].index(correct_answer)

# Generate new database file
output = "const COS201_QUESTIONS = [\n"

# Add existing 60 questions (extract from current file)
import re
existing_pattern = r'\{[^}]*question:[^}]*options:[^}]*correct:[^}]*topic:[^}]*explanation:[^}]*\}'
existing_questions = re.findall(existing_pattern, content, re.DOTALL)

for i, q_str in enumerate(existing_questions):
    output += "    " + q_str.strip()
    output += ",\n"

# Add new 40 questions
for i, q in enumerate(additional_questions):
    output += "    {\n"
    output += f'        question: "{q["question"]}",\n'
    opts = ', '.join([f'"{opt}"' for opt in q['options']])
    output += f'        options: [{opts}],\n'
    output += f'        correct: {q["correct"]},\n'
    output += f'        topic: "{q["topic"]}",\n'
    output += f'        explanation: "{q["explanation"]}"\n'
    output += "    }"
    if i < len(additional_questions) - 1:
        output += ","
    output += "\n"

output += "];\n\n"
output += "// Export for use in exam system\n"
output += "if (typeof module !== 'undefined' && module.exports) {\n"
output += "    module.exports = COS201_QUESTIONS;\n"
output += "}\n"

with open('COS201_QUESTIONS_DATABASE.js', 'w', encoding='utf-8') as f:
    f.write(output)

print(f"Database expanded successfully!")
print(f"Total questions: {len(existing_questions) + len(additional_questions)}")
