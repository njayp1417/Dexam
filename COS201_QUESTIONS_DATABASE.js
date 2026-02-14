const COS201_QUESTIONS = [
    {question: "Who is credited with designing and writing the C programming language?", options: ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Ken Thompson"], correct: 1, topic: "Introduction to C", explanation: "Dennis Ritchie developed C at Bell Labs in 1972."},
    {question: "In what year was the C language developed?", options: ["1969", "1970", "1972", "1985"], correct: 2, topic: "Introduction to C", explanation: "C was developed in 1972 at Bell Labs."},
    {question: "The approach of breaking a large problem into smaller, manageable pieces is known as:", options: ["Bottom-up programming", "Object-oriented programming", "Top-down programming", "Sequential programming"], correct: 2, topic: "Programming Concepts", explanation: "Top-down programming breaks problems into smaller sub-problems."},
    {question: "A series of instructions that enables a computer to perform a designated task is called a:", options: ["Algorithm", "Program", "Compiler", "Hardware"], correct: 1, topic: "Programming Concepts", explanation: "A program is a set of instructions for a computer to execute."},
    {question: "Which of these is a strength of the C language?", options: ["Automatic error checking", "Built-in classes and packages", "Efficiency and Portability", "High-level abstraction that hides memory addresses"], correct: 2, topic: "Introduction to C", explanation: "C is known for its efficiency and portability across platforms."},
    {question: "The method used to solve a specific problem is referred to as the:", options: ["Program", "Syntax", "Algorithm", "Compiler"], correct: 2, topic: "Programming Concepts", explanation: "An algorithm is a step-by-step method to solve a problem."},
    {question: "C is often described as a 'permissive' language because:", options: ["It is easy for beginners to learn", "It assumes the programmer knows what they are doing", "It allows the use of any variable name", "It does not require a compiler"], correct: 1, topic: "Introduction to C", explanation: "C gives programmers freedom but assumes they know what they're doing."},
    {question: "Which component of a computer executes programs stored in RAM?", options: ["SSD", "BUS", "CPU", "Keyboard"], correct: 2, topic: "Computer Basics", explanation: "The CPU (Central Processing Unit) executes program instructions."},
    {question: "Early languages like BASIC and FORTRAN often produced 'spaghetti code' because they relied on:", options: ["Functions", "GOTO statements", "While loops", "Pointers"], correct: 1, topic: "Programming History", explanation: "GOTO statements led to unstructured, hard-to-follow code."},
    {question: "Which of the following is NOT a common use for C?", options: ["Operating Systems", "Language Compilers", "Database management", "High-level web page styling only"], correct: 3, topic: "Introduction to C", explanation: "C is used for systems programming, not web styling."},
    {question: "Which preprocessor command is used to include the standard input-output header file?", options: ["#include <stdlib.h>", "#include <stdio.h>", "#import <stdio.h>", "#define stdio.h"], correct: 1, topic: "C Program Structure", explanation: "stdio.h provides input/output functions like printf and scanf."},
    {question: "The execution of every C program begins at the:", options: ["printf() function", "#include directive", "main() function", "First comment line"], correct: 2, topic: "C Program Structure", explanation: "Program execution always starts at the main() function."},
    {question: "Every statement in C must be terminated with a:", options: ["Period (.)", "Colon (:)", "Semicolon (;)", "Comma (,)"], correct: 2, topic: "C Syntax", explanation: "Semicolons mark the end of statements in C."},
    {question: "What does the \\n character represent in a string?", options: ["Tab", "Null character", "Newline", "Backspace"], correct: 2, topic: "C Syntax", explanation: "\\n is the newline escape sequence."},
    {question: "Which tool converts C source code into machine language (binary)?", options: ["Linker", "Preprocessor", "Compiler", "Editor"], correct: 2, topic: "Compilation Process", explanation: "The compiler translates source code to machine code."},
    {question: "What is the standard file extension for C source files?", options: [".exe", ".obj", ".c", ".txt"], correct: 2, topic: "C Program Structure", explanation: "C source files use the .c extension."},
    {question: "A programmer's comment in C that spans multiple lines starts with /* and ends with:", options: ["*/", "//", "*/", "**"], correct: 0, topic: "C Syntax", explanation: "Multi-line comments use /* */ syntax."},
    {question: "The step where library functions are combined with object code to create an executable is called:", options: ["Preprocessing", "Compiling", "Linking", "Debugging"], correct: 2, topic: "Compilation Process", explanation: "Linking combines object files and libraries into an executable."},
    {question: "An IDE stands for:", options: ["Integrated Development Environment", "Internal Data Engine", "Integrated Design Element", "Intelligent Debugging Editor"], correct: 0, topic: "Development Tools", explanation: "IDE provides tools for writing, compiling, and debugging code."},
    {question: "Which of the following is a free, open-source C IDE mentioned in the text?", options: ["Microsoft Word", "Code::Blocks", "Photoshop", "Excel"], correct: 1, topic: "Development Tools", explanation: "Code::Blocks is a popular free C/C++ IDE."},
    {question: "Which data type is used to store values with decimal places?", options: ["int", "float", "_Bool", "void"], correct: 1, topic: "Data Types", explanation: "Float stores floating-point numbers with decimals."},
    {question: "What is the purpose of the _Bool data type?", options: ["To store large integers", "To store characters", "To indicate a Boolean condition (0 or 1)", "To store memory addresses"], correct: 2, topic: "Data Types", explanation: "_Bool stores true (1) or false (0) values."},
    {question: "The double data type is similar to float but provides:", options: ["Less precision", "Roughly twice the precision", "Only integer values", "Only positive numbers"], correct: 1, topic: "Data Types", explanation: "Double provides double precision for floating-point numbers."},
    {question: "In C, which operator is used for finding the remainder of a division?", options: ["/", "*", "%", "^"], correct: 2, topic: "Operators", explanation: "The modulo operator (%) returns the remainder of division."},
    {question: "Which of the following is an assignment operator?", options: ["==", "!=", "+=", "<"], correct: 2, topic: "Operators", explanation: "+= is a compound assignment operator (add and assign)."},
    {question: "What does the expression count += 10 do?", options: ["Checks if count equals 10", "Adds 10 to the current value of count", "Subtracts 10 from count", "Multiplies count by 10"], correct: 1, topic: "Operators", explanation: "count += 10 is equivalent to count = count + 10."},
    {question: "C is a case-sensitive language. This means:", options: ["Uppercase and lowercase letters are treated as the same", "Uppercase and lowercase letters are distinct", "All commands must be in uppercase", "Variable names cannot have numbers"], correct: 1, topic: "C Syntax", explanation: "In C, 'variable' and 'Variable' are different identifiers."},
    {question: "What is the value of 10 + 2 * 5 in C?", options: ["60", "20", "17", "25"], correct: 1, topic: "Operators", explanation: "Multiplication has higher precedence: 10 + (2*5) = 20."},
    {question: "Which header file must be included to use true and false with Boolean variables?", options: ["<stdio.h>", "<stdbool.h>", "<math.h>", "<stdlib.h>"], correct: 1, topic: "Data Types", explanation: "stdbool.h defines true and false for Boolean operations."},
    {question: "To display an integer value using printf, which format specifier is used?", options: ["%f", "%c", "%i or %d", "%s"], correct: 2, topic: "Input/Output", explanation: "%d or %i are format specifiers for integers."},
    {question: "Which statement is used to make a decision in C?", options: ["for", "while", "if", "do"], correct: 2, topic: "Control Flow", explanation: "The if statement executes code based on a condition."},
    {question: "A loop that repeats forever is called a(n):", options: ["Finite loop", "Infinite loop", "Nested loop", "Logic error"], correct: 1, topic: "Loops", explanation: "An infinite loop has no terminating condition."},
    {question: "The for loop contains three expressions in its header. What is the first one?", options: ["Loop condition", "Loop expression", "Init_expression", "Terminate_expression"], correct: 2, topic: "Loops", explanation: "The first expression initializes the loop counter."},
    {question: "Which loop type always executes its body at least once?", options: ["for", "while", "do-while", "if-else"], correct: 2, topic: "Loops", explanation: "do-while checks condition after executing the body."},
    {question: "The switch statement is often used as an alternative to:", options: ["Single if statements", "Multiple if-else or if-else if chains", "Infinite loops", "Variable declarations"], correct: 1, topic: "Control Flow", explanation: "Switch provides cleaner syntax for multiple conditions."},
    {question: "In a switch statement, what happens if a break is omitted after a case?", options: ["The program crashes", "The compiler generates an error", "Execution 'falls through' to the next case", "The loop terminates immediately"], correct: 2, topic: "Control Flow", explanation: "Without break, execution continues to the next case."},
    {question: "What is the purpose of the default case in a switch statement?", options: ["It is executed if no other case matches", "It is the first case to be checked", "It terminates the switch statement", "It marks the end of the program"], correct: 0, topic: "Control Flow", explanation: "Default handles cases not matched by other cases."},
    {question: "Which operator is used to check for equality?", options: ["=", "==", "!=", "<>"], correct: 1, topic: "Operators", explanation: "== compares two values for equality; = is assignment."},
    {question: "To exit a loop prematurely, which keyword is used?", options: ["continue", "exit", "break", "return"], correct: 2, topic: "Loops", explanation: "Break immediately exits the current loop."},
    {question: "Which loop is better when you know exactly how many times you want to repeat a task?", options: ["while", "do-while", "for", "if"], correct: 2, topic: "Loops", explanation: "For loops are ideal when iteration count is known."},
    {question: "An array is a collection of elements of the:", options: ["Different types", "Same type", "Only integer types", "Only character types"], correct: 1, topic: "Arrays", explanation: "Arrays store multiple elements of the same data type."},
    {question: "Elements of an array are stored in:", options: ["Random memory locations", "Contiguous memory locations", "Different files", "The CPU registers"], correct: 1, topic: "Arrays", explanation: "Array elements occupy consecutive memory addresses."},
    {question: "If an array is declared as int num[5], what is the index of the first element?", options: ["1", "-1", "0", "5"], correct: 2, topic: "Arrays", explanation: "Array indexing in C starts at 0."},
    {question: "What is a 'string' in C?", options: ["A special primitive data type", "An array of characters", "A mathematical expression", "A type of loop"], correct: 1, topic: "Arrays", explanation: "Strings are character arrays terminated with null character."},
    {question: "A two-dimensional array can be thought of as a:", options: ["Linear list", "Matrix (rows and columns)", "Single variable", "Pointer to a single value"], correct: 1, topic: "Arrays", explanation: "2D arrays represent data in rows and columns like a matrix."},
    {question: "What keyword is used to return a value from a function?", options: ["give", "send", "return", "back"], correct: 2, topic: "Functions", explanation: "Return sends a value back to the calling function."},
    {question: "A function that does not return any value should have a return type of:", options: ["int", "float", "void", "null"], correct: 2, topic: "Functions", explanation: "Void indicates no return value."},
    {question: "Which of the following is used to read input from the keyboard?", options: ["printf()", "scanf()", "main()", "include"], correct: 1, topic: "Input/Output", explanation: "scanf() reads formatted input from standard input."},
    {question: "In scanf('%d', &n), the & symbol is the:", options: ["Addition operator", "Address-of operator", "Logical AND operator", "Pointer dereference"], correct: 1, topic: "Pointers", explanation: "& gets the memory address of a variable."},
    {question: "What is a 'function prototype'?", options: ["The body of the function", "A declaration of the function's name, return type, and parameters", "The call to the function", "A library file"], correct: 1, topic: "Functions", explanation: "Prototypes declare function signature before definition."},
    {question: "Which function is used to dynamically allocate memory on the heap?", options: ["free()", "malloc()", "scanf()", "printf()"], correct: 1, topic: "Memory Management", explanation: "malloc() allocates memory dynamically at runtime."},
    {question: "When you are done with heap memory, you should release it using:", options: ["delete()", "remove()", "free()", "return"], correct: 2, topic: "Memory Management", explanation: "free() deallocates memory allocated by malloc()."},
    {question: "The 'terse' nature of C means it was designed to be:", options: ["Very wordy and descriptive", "Brief and concise to minimize typing time", "Easy for non-programmers to read", "Extremely slow to execute"], correct: 1, topic: "Introduction to C", explanation: "C uses concise syntax to reduce typing."},
    {question: "What is one major weakness of C mentioned in the text?", options: ["It is too slow", "It is not portable", "It can be error-prone and hard to understand", "It cannot be used for system programming"], correct: 2, topic: "Introduction to C", explanation: "C's low-level nature can lead to errors and complexity."},
    {question: "The logical 'NOT' operator in C is represented by:", options: ["&&", "||", "!", "~"], correct: 2, topic: "Operators", explanation: "! negates a Boolean expression."},
    {question: "A variable declared inside a function is typically:", options: ["Global", "Local to that function", "Accessible by all programs", "Constant"], correct: 1, topic: "Variables", explanation: "Local variables are only accessible within their function."},
    {question: "Which operating system's kernel is famously scripted using C?", options: ["Windows 95", "Linux", "MS-DOS", "CP/M"], correct: 1, topic: "Introduction to C", explanation: "The Linux kernel is written primarily in C."},
    {question: "Software engineering is concerned with constructing:", options: ["Games only", "Robust and reliable computer programs", "Hardware components", "Internet cables"], correct: 1, topic: "Programming Concepts", explanation: "Software engineering focuses on building quality software."},
    {question: "Which of the following is NOT a basic data type in C?", options: ["int", "char", "string", "float"], correct: 2, topic: "Data Types", explanation: "String is not a primitive type; it's a character array."},
    {question: "Open source software refers to software where:", options: ["The code is hidden from users", "Users can alter or improve the source code", "The software costs a lot of money", "Only the original creator can see the code"], correct: 1, topic: "Programming Concepts", explanation: "Open source allows users to view and modify source code."},
    {
        question: "C was originally developed for which operating system?",
        options: ["Linux", "Unix", "Windows", "DOS"],
        correct: 1,
        topic: "Introduction to C",
        explanation: "C was developed at Bell Labs for Unix operating system development."
    },
    {
        question: "Which of the following is a characteristic of C?",
        options: ["Object-oriented", "Functional only", "Declarative", "Procedural"],
        correct: 3,
        topic: "Introduction to C",
        explanation: "C is a procedural programming language."
    },
    {
        question: "The first version of C was known as:",
        options: ["K&R C", "C89", "C99", "ANSI C"],
        correct: 0,
        topic: "Introduction to C",
        explanation: "K&R C refers to the original version by Kernighan and Ritchie."
    },
    {
        question: "Which standard introduced the bool type in C?",
        options: ["C99", "C89", "C95", "C11"],
        correct: 0,
        topic: "Introduction to C",
        explanation: "C99 standard introduced the _Bool type and stdbool.h header."
    },
    {
        question: "C is considered a middle-level language because:",
        options: ["It's only for beginners", "It's difficult to learn", "It's outdated", "It combines low-level and high-level features"],
        correct: 3,
        topic: "Introduction to C",
        explanation: "C provides both low-level memory access and high-level abstractions."
    },
    {
        question: "Which company maintains the GCC compiler?",
        options: ["Apple", "Oracle", "Microsoft", "GNU Project"],
        correct: 3,
        topic: "Development Tools",
        explanation: "GCC (GNU Compiler Collection) is maintained by the GNU Project."
    },
    {
        question: "The sizeof operator returns:",
        options: ["Data type", "Memory address", "Value of variable", "Size in bytes"],
        correct: 3,
        topic: "Operators",
        explanation: "sizeof returns the size of a data type or variable in bytes."
    },
    {
        question: "What is the size of char in C?",
        options: ["1 byte", "4 bytes", "2 bytes", "Depends on compiler"],
        correct: 0,
        topic: "Data Types",
        explanation: "char is always 1 byte (8 bits) in C."
    },
    {
        question: "Which keyword is used to define constants?",
        options: ["const", "constant", "final", "static"],
        correct: 0,
        topic: "Variables",
        explanation: "const keyword declares constant variables in C."
    },
    {
        question: "What is the range of unsigned char?",
        options: ["-128 to 127", "0 to 255", "0 to 127", "-255 to 255"],
        correct: 1,
        topic: "Data Types",
        explanation: "unsigned char ranges from 0 to 255 (8 bits)."
    },
    {
        question: "Which storage class has the longest lifetime?",
        options: ["auto", "extern", "static", "register"],
        correct: 2,
        topic: "Variables",
        explanation: "static variables persist for the entire program execution."
    },
    {
        question: "The register keyword suggests:",
        options: ["Store in CPU register", "Constant value", "Pointer variable", "Global variable"],
        correct: 0,
        topic: "Variables",
        explanation: "register suggests storing the variable in CPU register for faster access."
    },
    {
        question: "What is type casting?",
        options: ["Converting one data type to another", "Deleting variables", "Copying variables", "Creating new types"],
        correct: 0,
        topic: "Data Types",
        explanation: "Type casting converts a value from one data type to another."
    },
    {
        question: "Which is the correct way to declare a pointer?",
        options: ["int *ptr;", "int ptr;", "int &ptr;", "pointer int ptr;"],
        correct: 0,
        topic: "Pointers",
        explanation: "Pointers are declared using the * symbol."
    },
    {
        question: "What is the result of 5 / 2 in C?",
        options: ["2.0", "2", "3", "2.5"],
        correct: 1,
        topic: "Operators",
        explanation: "Integer division truncates the decimal part, resulting in 2."
    },
    {
        question: "The ++ operator is called:",
        options: ["Concatenation", "Addition", "Increment", "Comparison"],
        correct: 2,
        topic: "Operators",
        explanation: "++ is the increment operator that adds 1 to a variable."
    },
    {
        question: "What does the expression x = y = z = 5 do?",
        options: ["Assigns 5 to x, y, and z", "Adds values", "Syntax error", "Compares values"],
        correct: 0,
        topic: "Operators",
        explanation: "Assignment is right-associative, so all three get value 5."
    },
    {
        question: "The ternary operator syntax is:",
        options: ["? condition true false", "condition ? true : false", "if ? then : else", "condition : true ? false"],
        correct: 1,
        topic: "Operators",
        explanation: "Ternary operator: condition ? value_if_true : value_if_false."
    },
    {
        question: "What is the precedence of * compared to +?",
        options: ["Undefined", "Higher", "Lower", "Same"],
        correct: 1,
        topic: "Operators",
        explanation: "Multiplication has higher precedence than addition."
    },
    {
        question: "The comma operator evaluates:",
        options: ["Average of expressions", "All expressions, returns last", "Last expression only", "First expression only"],
        correct: 1,
        topic: "Operators",
        explanation: "Comma operator evaluates all expressions and returns the last one."
    },
    {
        question: "What does the expression !0 evaluate to?",
        options: ["0", "1", "false", "Error"],
        correct: 1,
        topic: "Operators",
        explanation: "!0 (NOT 0) evaluates to 1 (true) in C."
    },
    {
        question: "What is the difference between while and do-while?",
        options: ["do-while is deprecated", "do-while executes at least once", "while is faster", "No difference"],
        correct: 1,
        topic: "Loops",
        explanation: "do-while checks condition after execution, guaranteeing at least one iteration."
    },
    {
        question: "The continue statement:",
        options: ["Restarts the program", "Does nothing", "Exits the loop", "Skips to next iteration"],
        correct: 3,
        topic: "Loops",
        explanation: "continue skips the remaining code in current iteration and moves to next."
    },
    {
        question: "The goto statement:",
        options: ["Is not supported in C", "Only works in functions", "Jumps to a label", "Is recommended"],
        correct: 2,
        topic: "Control Flow",
        explanation: "goto transfers control to a labeled statement (use sparingly)."
    },
    {
        question: "What happens if no case matches in switch without default?",
        options: ["Program crashes", "Nothing happens", "First case executes", "Error"],
        correct: 1,
        topic: "Control Flow",
        explanation: "If no case matches and there's no default, the switch is skipped."
    },
    {
        question: "Can switch work with float values?",
        options: ["Yes", "No", "Only in C99", "Only with casting"],
        correct: 1,
        topic: "Control Flow",
        explanation: "switch only works with integer and character types, not float."
    },
    {
        question: "What is recursion?",
        options: ["Error handling", "Multiple functions", "Function calling itself", "Loop"],
        correct: 2,
        topic: "Functions",
        explanation: "Recursion is when a function calls itself to solve a problem."
    },
    {
        question: "What is the purpose of function parameters?",
        options: ["Decoration", "Return values", "Pass data to function", "Create variables"],
        correct: 2,
        topic: "Functions",
        explanation: "Parameters allow passing data into functions."
    },
    {
        question: "What is the difference between call by value and call by reference?",
        options: ["No difference", "Reference is faster", "Value copies data, reference passes address", "Value is deprecated"],
        correct: 2,
        topic: "Functions",
        explanation: "Call by value copies data; call by reference passes memory address."
    },
    {
        question: "Can a function return multiple values directly?",
        options: ["Only in C99", "No, but can use pointers or structures", "Yes", "Only integers"],
        correct: 1,
        topic: "Functions",
        explanation: "C functions return one value, but can modify multiple values via pointers."
    },
    {
        question: "What is a static function?",
        options: ["Deprecated function", "Function visible only in its file", "Fast function", "Constant function"],
        correct: 1,
        topic: "Functions",
        explanation: "static functions have internal linkage, visible only in their source file."
    },
    {
        question: "What is an inline function?",
        options: ["Recursive function", "Function expanded at call site", "Function inside another", "External function"],
        correct: 1,
        topic: "Functions",
        explanation: "inline suggests the compiler to expand function code at call site for speed."
    },
    {
        question: "What is the null character in C?",
        options: ["\n", "\0", "0", "NULL"],
        correct: 1,
        topic: "Arrays",
        explanation: "\0 is the null terminator for strings in C."
    },
    {
        question: "How is a string stored in C?",
        options: ["As pointer only", "As character array with \0", "As string type", "As integer array"],
        correct: 1,
        topic: "Arrays",
        explanation: "Strings are character arrays terminated with null character \0."
    },
    {
        question: "What does strlen() return?",
        options: ["String length including \0", "Array size", "Memory address", "String length excluding \0"],
        correct: 3,
        topic: "Arrays",
        explanation: "strlen() returns the number of characters before \0."
    },
    {
        question: "How do you declare a 2D array with 3 rows and 4 columns?",
        options: ["int arr(3,4)", "int arr[3,4]", "int arr[3][4]", "int arr[4][3]"],
        correct: 2,
        topic: "Arrays",
        explanation: "2D arrays are declared as type name[rows][columns]."
    },
    {
        question: "What is the relationship between arrays and pointers?",
        options: ["No relationship", "Array name is a pointer to first element", "Arrays are faster", "Pointers are arrays"],
        correct: 1,
        topic: "Pointers",
        explanation: "Array name acts as a constant pointer to the first element."
    },
    {
        question: "Which function copies strings?",
        options: ["strdup()", "strcopy()", "strcpy()", "copy()"],
        correct: 2,
        topic: "Arrays",
        explanation: "strcpy() copies one string to another."
    },
    {
        question: "Who developed the C programming language?",
        options: ["Dennis Ritchie", "James Gosling", "Ken Thompson", "Bjarne Stroustrup"],
        correct: 0,
        topic: "Introduction to C",
        explanation: "Dennis Ritchie developed C at Bell Labs in 1972."
    },
    {
        question: "Which function is the entry point of a C program?",
        options: ["main()", "program()", "init()", "start()"],
        correct: 0,
        topic: "C Program Structure",
        explanation: "Every C program execution begins at the main() function."
    },
    {
        question: "Which header file is required for printf()?",
        options: ["stdio.h", "math.h", "conio.h", "stdlib.h"],
        correct: 0,
        topic: "C Program Structure",
        explanation: "stdio.h provides standard input/output functions like printf() and scanf()."
    },
    {
        question: "Which data type stores integer values?",
        options: ["int", "float", "double", "char"],
        correct: 0,
        topic: "Data Types",
        explanation: "int is the data type for storing integer values in C."
    },
    {
        question: "What symbol is used for single-line comments?",
        options: ["**", "//", "#", "/* */"],
        correct: 1,
        topic: "C Syntax",
        explanation: "// is used for single-line comments in C99 and later."
    },
    {
        question: "Which loop executes at least once?",
        options: ["for", "if", "while", "do-while"],
        correct: 3,
        topic: "Loops",
        explanation: "do-while loop checks condition after execution, guaranteeing at least one iteration."
    },
    {
        question: "What is the correct format specifier for int?",
        options: ["%c", "%s", "%d", "%f"],
        correct: 2,
        topic: "Input/Output",
        explanation: "%d is the format specifier for integer values in printf() and scanf()."
    },
    {
        question: "Which operator is used for multiplication?",
        options: ["%", "*", "#", "x"],
        correct: 1,
        topic: "Operators",
        explanation: "The asterisk (*) is the multiplication operator in C."
    },
    {
        question: "Which symbol is used for assignment?",
        options: ["=>", ":=", "==", "="],
        correct: 3,
        topic: "Operators",
        explanation: "Single equals (=) is the assignment operator; double equals (==) is for comparison."
    },
    {
        question: "Which keyword is used to exit a loop?",
        options: ["exit", "stop", "return", "break"],
        correct: 3,
        topic: "Control Flow",
        explanation: "break statement immediately exits the current loop."
    }
];

// Export for use in exam system
if (typeof module !== 'undefined' && module.exports) {
    module.exports = COS201_QUESTIONS;
}
