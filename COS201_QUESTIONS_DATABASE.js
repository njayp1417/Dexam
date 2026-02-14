const COS201_QUESTIONS = [
    {
        question: "Who is credited with designing and writing the C programming language?",
        options: ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Ken Thompson"],
        correct: 1,
        topic: "Introduction to C",
        explanation: "Dennis Ritchie created C at Bell Labs between 1969-1973. He designed it to rewrite the Unix operating system, which was originally written in assembly language. C became popular because it combined low-level control with high-level programming features."
    },
    {
        question: "In what year was the C language developed?",
        options: ["1969", "1970", "1972", "1985"],
        correct: 2,
        topic: "Introduction to C",
        explanation: "C was developed in 1972 at Bell Labs. It evolved from the B language and was designed to be portable across different computer architectures while maintaining efficiency."
    },
    {
        question: "The approach of breaking a large problem into smaller, manageable pieces is known as:",
        options: ["Bottom-up programming", "Object-oriented programming", "Top-down programming", "Sequential programming"],
        correct: 2,
        topic: "Programming Concepts",
        explanation: "Top-down programming (also called stepwise refinement) breaks complex problems into smaller sub-problems. You start with the main problem and divide it into manageable functions, making code easier to understand, test, and maintain."
    },
    {
        question: "A series of instructions that enables a computer to perform a designated task is called a:",
        options: ["Algorithm", "Program", "Compiler", "Hardware"],
        correct: 1,
        topic: "Programming Concepts",
        explanation: "A program is a sequence of instructions written in a programming language that tells the computer what operations to perform. It's the implementation of an algorithm in executable form."
    },
    {
        question: "Which of these is a strength of the C language?",
        options: ["Automatic error checking", "Built-in classes and packages", "Efficiency and Portability", "High-level abstraction that hides memory addresses"],
        correct: 2,
        topic: "Introduction to C",
        explanation: "C's main strengths are efficiency (fast execution, minimal overhead) and portability (can run on different platforms with minimal changes). It provides direct memory access while remaining relatively high-level."
    },
    {
        question: "The method used to solve a specific problem is referred to as the:",
        options: ["Program", "Syntax", "Algorithm", "Compiler"],
        correct: 2,
        topic: "Programming Concepts",
        explanation: "An algorithm is a step-by-step procedure or formula for solving a problem. It's language-independent and describes the logic before coding. For example, a sorting algorithm describes how to arrange items in order."
    },
    {
        question: "C is often described as a 'permissive' language because:",
        options: ["It is easy for beginners to learn", "It assumes the programmer knows what they are doing", "It allows the use of any variable name", "It does not require a compiler"],
        correct: 1,
        topic: "Introduction to C",
        explanation: "C gives programmers great freedom and assumes they know what they're doing. It doesn't enforce strict type checking or prevent potentially dangerous operations like pointer arithmetic. This power requires responsibility."
    },
    {
        question: "Which component of a computer executes programs stored in RAM?",
        options: ["SSD", "BUS", "CPU", "Keyboard"],
        correct: 2,
        topic: "Computer Basics",
        explanation: "The CPU (Central Processing Unit) fetches instructions from RAM, decodes them, and executes them. It's the 'brain' of the computer that performs all calculations and logical operations."
    },
    {
        question: "Early languages like BASIC and FORTRAN often produced 'spaghetti code' because they relied on:",
        options: ["Functions", "GOTO statements", "While loops", "Pointers"],
        correct: 1,
        topic: "Programming History",
        explanation: "GOTO statements allow jumping to any line in the program, creating tangled, hard-to-follow code paths. Structured programming with functions and loops replaced GOTO, making code more readable and maintainable."
    },
    {
        question: "Which of the following is NOT a common use for C?",
        options: ["Operating Systems", "Language Compilers", "Database management", "High-level web page styling only"],
        correct: 3,
        topic: "Introduction to C",
        explanation: "C is used for operating systems, compilers, embedded systems, and databases. However, high-level web styling is done with CSS, not C. C is too low-level for simple styling tasks."
    },
    {
        question: "Which preprocessor command is used to include the standard input-output header file?",
        options: ["#include <stdlib.h>", "#include <stdio.h>", "#import <stdio.h>", "#define stdio.h"],
        correct: 1,
        topic: "C Program Structure",
        explanation: "#include <stdio.h> tells the preprocessor to include the standard input/output library before compilation. This header contains declarations for printf(), scanf(), and other I/O functions."
    },
    {
        question: "The execution of every C program begins at the:",
        options: ["printf() function", "#include directive", "main() function", "First comment line"],
        correct: 2,
        topic: "C Program Structure",
        explanation: "main() is the entry point of every C program. When you run a program, the operating system calls main() first. Execution starts at the first statement inside main() and proceeds sequentially."
    },
    {
        question: "Every statement in C must be terminated with a:",
        options: ["Period (.)", "Colon (:)", "Semicolon (;)", "Comma (,)"],
        correct: 2,
        topic: "C Syntax",
        explanation: "The semicolon (;) marks the end of a statement in C. It tells the compiler where one instruction ends and another begins. Forgetting semicolons is a common beginner error."
    },
    {
        question: "What does the \\n character represent in a string?",
        options: ["Tab", "Null character", "Newline", "Backspace"],
        correct: 2,
        topic: "C Syntax",
        explanation: "This is the correct answer for this c syntax question."
    },
    {
        question: "Which tool converts C source code into machine language (binary)?",
        options: ["Linker", "Preprocessor", "Compiler", "Editor"],
        correct: 2,
        topic: "Compilation Process",
        explanation: "The compiler translates human-readable C code into machine code (binary) that the CPU can execute. Popular C compilers include GCC, Clang, and MSVC."
    },
    {
        question: "What is the standard file extension for C source files?",
        options: [".exe", ".obj", ".c", ".txt"],
        correct: 2,
        topic: "C Program Structure",
        explanation: "C source files use the .c extension (e.g., program.c). Header files use .h extension. After compilation, you get object files (.o or .obj) and executables (.exe on Windows)."
    },
    {
        question: "A programmer's comment in C that spans multiple lines starts with /* and ends with:",
        options: ["*/", "//", "*/", "**"],
        correct: 0,
        topic: "C Syntax",
        explanation: "Multi-line comments use /* to start and */ to end. Everything between is ignored by the compiler. Example: /* This is a
multi-line comment */. Single-line comments use //."
    },
    {
        question: "The step where library functions are combined with object code to create an executable is called:",
        options: ["Preprocessing", "Compiling", "Linking", "Debugging"],
        correct: 2,
        topic: "Compilation Process",
        explanation: "Linking combines your compiled object code with library code (like printf from stdio) to create a final executable file. The linker resolves function calls and memory addresses."
    },
    {
        question: "An IDE stands for:",
        options: ["Integrated Development Environment", "Internal Data Engine", "Integrated Design Element", "Intelligent Debugging Editor"],
        correct: 0,
        topic: "Development Tools",
        explanation: "An Integrated Development Environment combines a text editor, compiler, debugger, and other tools in one application. Examples include Code::Blocks, Visual Studio, and CLion. IDEs make programming more efficient."
    },
    {
        question: "Which of the following is a free, open-source C IDE mentioned in the text?",
        options: ["Microsoft Word", "Code::Blocks", "Photoshop", "Excel"],
        correct: 1,
        topic: "Development Tools",
        explanation: "Code::Blocks is a free, cross-platform IDE for C/C++. It includes a compiler (usually GCC), debugger, and code editor. Other free options include Dev-C++ and Eclipse CDT."
    },
    {
        question: "Which data type is used to store values with decimal places?",
        options: ["int", "float", "_Bool", "void"],
        correct: 1,
        topic: "Data Types",
        explanation: "float stores floating-point numbers (decimals) like 3.14 or -0.5. It uses 4 bytes and provides about 6-7 decimal digits of precision. For more precision, use double (8 bytes)."
    },
    {
        question: "What is the purpose of the _Bool data type?",
        options: ["To store large integers", "To store characters", "To indicate a Boolean condition (0 or 1)", "To store memory addresses"],
        correct: 2,
        topic: "Data Types",
        explanation: "_Bool stores Boolean values: 0 (false) or 1 (true). Introduced in C99, it's used for logical conditions. Including <stdbool.h> lets you use 'true' and 'false' keywords instead of 1 and 0."
    },
    {
        question: "The double data type is similar to float but provides:",
        options: ["Less precision", "Roughly twice the precision", "Only integer values", "Only positive numbers"],
        correct: 1,
        topic: "Data Types",
        explanation: "double provides roughly twice the precision of float. It uses 8 bytes (vs float's 4 bytes) and gives about 15-16 decimal digits of precision. Use double when accuracy is critical."
    },
    {
        question: "In C, which operator is used for finding the remainder of a division?",
        options: ["/", "*", "%", "^"],
        correct: 2,
        topic: "Operators",
        explanation: "The modulo operator (%) returns the remainder after division. For example, 10 % 3 = 1 (because 10 ÷ 3 = 3 remainder 1). It only works with integers."
    },
    {
        question: "Which of the following is an assignment operator?",
        options: ["==", "!=", "+=", "<"],
        correct: 2,
        topic: "Operators",
        explanation: "+= is a compound assignment operator. x += 5 means x = x + 5. Other compound operators include -=, *=, /=, and %=. They're shortcuts that modify and assign in one step."
    },
    {
        question: "What does the expression count += 10 do?",
        options: ["Checks if count equals 10", "Adds 10 to the current value of count", "Subtracts 10 from count", "Multiplies count by 10"],
        correct: 1,
        topic: "Operators",
        explanation: "count += 10 adds 10 to count's current value and stores the result back in count. It's equivalent to count = count + 10. This is more concise and often more efficient."
    },
    {
        question: "C is a case-sensitive language. This means:",
        options: ["Uppercase and lowercase letters are treated as the same", "Uppercase and lowercase letters are distinct", "All commands must be in uppercase", "Variable names cannot have numbers"],
        correct: 1,
        topic: "C Syntax",
        explanation: "In C, uppercase and lowercase letters are different. 'Variable', 'variable', and 'VARIABLE' are three distinct identifiers. This applies to keywords too - 'int' works but 'Int' doesn't."
    },
    {
        question: "What is the value of 10 + 2 * 5 in C?",
        options: ["60", "20", "17", "25"],
        correct: 1,
        topic: "Operators",
        explanation: "Following operator precedence, multiplication (*) is performed before addition (+). So: 2 * 5 = 10, then 10 + 10 = 20. Use parentheses to change order: (10 + 2) * 5 = 60."
    },
    {
        question: "Which header file must be included to use true and false with Boolean variables?",
        options: ["<stdio.h>", "<stdbool.h>", "<math.h>", "<stdlib.h>"],
        correct: 1,
        topic: "Data Types",
        explanation: "<stdbool.h> defines 'bool' as a type and 'true'/'false' as keywords. Without it, you must use _Bool type with 1/0 values. This header was added in C99 standard."
    },
    {
        question: "To display an integer value using printf, which format specifier is used?",
        options: ["%f", "%c", "%i or %d", "%s"],
        correct: 2,
        topic: "Input/Output",
        explanation: "%d or %i are format specifiers for integers in printf(). Example: printf('%d', 42); prints 42. Other specifiers: %f (float), %c (char), %s (string), %p (pointer)."
    },
    {
        question: "Which statement is used to make a decision in C?",
        options: ["for", "while", "if", "do"],
        correct: 2,
        topic: "Control Flow",
        explanation: "The if statement executes code conditionally based on a Boolean expression. Syntax: if (condition) { code }. You can add 'else' for alternative code when condition is false."
    },
    {
        question: "A loop that repeats forever is called a(n):",
        options: ["Finite loop", "Infinite loop", "Nested loop", "Logic error"],
        correct: 1,
        topic: "Loops",
        explanation: "An infinite loop runs endlessly because its condition never becomes false. Example: while(1) { }. Infinite loops can be intentional (like in embedded systems) or bugs. Use break to exit."
    },
    {
        question: "The for loop contains three expressions in its header. What is the first one?",
        options: ["Loop condition", "Loop expression", "Init_expression", "Terminate_expression"],
        correct: 2,
        topic: "Loops",
        explanation: "The init_expression initializes the loop counter. Syntax: for(init; condition; increment). Example: for(int i=0; i<10; i++) - here 'int i=0' is the initialization."
    },
    {
        question: "Which loop type always executes its body at least once?",
        options: ["for", "while", "do-while", "if-else"],
        correct: 2,
        topic: "Loops",
        explanation: "do-while checks the condition AFTER executing the loop body, guaranteeing at least one execution. Syntax: do { code } while(condition);. Regular while checks before execution."
    },
    {
        question: "The switch statement is often used as an alternative to:",
        options: ["Single if statements", "Multiple if-else or if-else if chains", "Infinite loops", "Variable declarations"],
        correct: 1,
        topic: "Control Flow",
        explanation: "switch provides cleaner syntax than multiple if-else chains when checking one variable against many values. It's more readable and potentially more efficient than: if(x==1) {} else if(x==2) {} else if(x==3) {}..."
    },
    {
        question: "In a switch statement, what happens if a break is omitted after a case?",
        options: ["The program crashes", "The compiler generates an error", "Execution 'falls through' to the next case", "The loop terminates immediately"],
        correct: 2,
        topic: "Control Flow",
        explanation: "Without break, execution 'falls through' to the next case. This can be intentional (to handle multiple cases with same code) or a bug. Always use break unless you specifically want fall-through."
    },
    {
        question: "What is the purpose of the default case in a switch statement?",
        options: ["It is executed if no other case matches", "It is the first case to be checked", "It terminates the switch statement", "It marks the end of the program"],
        correct: 0,
        topic: "Control Flow",
        explanation: "default handles all values not matched by other cases. It's like the 'else' of switch statements. Example: switch(grade) { case 'A': ...; default: printf('Invalid grade'); }"
    },
    {
        question: "Which operator is used to check for equality?",
        options: ["=", "==", "!=", "<>"],
        correct: 1,
        topic: "Operators",
        explanation: "== (double equals) compares two values for equality and returns true/false. Don't confuse with = (single equals) which assigns values. Common bug: if(x=5) assigns 5 to x instead of comparing."
    },
    {
        question: "To exit a loop prematurely, which keyword is used?",
        options: ["continue", "exit", "break", "return"],
        correct: 2,
        topic: "Loops",
        explanation: "break immediately exits the current loop (or switch). Execution continues after the loop. Example: while(1) { if(done) break; } - exits infinite loop when done is true."
    },
    {
        question: "Which loop is better when you know exactly how many times you want to repeat a task?",
        options: ["while", "do-while", "for", "if"],
        correct: 2,
        topic: "Loops",
        explanation: "for loops are ideal when iteration count is known. They keep initialization, condition, and increment together: for(int i=0; i<10; i++). Use while when iterations depend on runtime conditions."
    },
    {
        question: "An array is a collection of elements of the:",
        options: ["Different types", "Same type", "Only integer types", "Only character types"],
        correct: 1,
        topic: "Arrays",
        explanation: "Arrays store multiple elements of the SAME type in contiguous memory. You can't mix types - int array holds only integers, char array only characters. For mixed types, use structures."
    },
    {
        question: "Elements of an array are stored in:",
        options: ["Random memory locations", "Contiguous memory locations", "Different files", "The CPU registers"],
        correct: 1,
        topic: "Arrays",
        explanation: "Array elements occupy consecutive memory locations. If arr[0] is at address 1000 and each int is 4 bytes, arr[1] is at 1004, arr[2] at 1008, etc. This enables fast index-based access."
    },
    {
        question: "If an array is declared as int num[5], what is the index of the first element?",
        options: ["1", "-1", "0", "5"],
        correct: 2,
        topic: "Arrays",
        explanation: "C arrays are zero-indexed. num[5] creates 5 elements: num[0], num[1], num[2], num[3], num[4]. Accessing num[5] is out of bounds and causes undefined behavior."
    },
    {
        question: "What is a 'string' in C?",
        options: ["A special primitive data type", "An array of characters", "A mathematical expression", "A type of loop"],
        correct: 1,
        topic: "Arrays",
        explanation: "C has no built-in string type. Strings are character arrays ending with null character (\0). Example: char name[] = 'John'; is stored as {'J','o','h','n','\0'}. The \0 marks the end."
    },
    {
        question: "A two-dimensional array can be thought of as a:",
        options: ["Linear list", "Matrix (rows and columns)", "Single variable", "Pointer to a single value"],
        correct: 1,
        topic: "Arrays",
        explanation: "2D arrays represent data in rows and columns like a spreadsheet or matrix. Declaration: int matrix[3][4]; creates 3 rows and 4 columns. Access: matrix[row][col]."
    },
    {
        question: "What keyword is used to return a value from a function?",
        options: ["give", "send", "return", "back"],
        correct: 2,
        topic: "Functions",
        explanation: "return sends a value back to the function caller and exits the function. Example: int add(int a, int b) { return a + b; }. Functions with void return type don't return values."
    },
    {
        question: "A function that does not return any value should have a return type of:",
        options: ["int", "float", "void", "null"],
        correct: 2,
        topic: "Functions",
        explanation: "void indicates no return value. Example: void printHello() { printf('Hello'); }. You can use 'return;' (without value) to exit early, but it's optional at the end."
    },
    {
        question: "Which of the following is used to read input from the keyboard?",
        options: ["printf()", "scanf()", "main()", "include"],
        correct: 1,
        topic: "Input/Output",
        explanation: "scanf() reads formatted input from keyboard. Syntax: scanf('%d', &variable); - the & gets variable's address so scanf can store the value there. Always use & with scanf for variables."
    },
    {
        question: "In scanf('%d', &n), the & symbol is the:",
        options: ["Addition operator", "Address-of operator", "Logical AND operator", "Pointer dereference"],
        correct: 1,
        topic: "Pointers",
        explanation: "& is the address-of operator. It gets the memory address of variable n. scanf needs the address to store the input value directly in memory. Without &, scanf gets the value instead of address."
    },
    {
        question: "What is a 'function prototype'?",
        options: ["The body of the function", "A declaration of the function's name, return type, and parameters", "The call to the function", "A library file"],
        correct: 1,
        topic: "Functions",
        explanation: "A prototype declares a function's signature (name, return type, parameters) before its definition. Example: int add(int, int); tells compiler about add() before you define it. Prototypes enable calling functions before defining them."
    },
    {
        question: "Which function is used to dynamically allocate memory on the heap?",
        options: ["free()", "malloc()", "scanf()", "printf()"],
        correct: 1,
        topic: "Memory Management",
        explanation: "malloc() allocates memory at runtime. Example: int *ptr = (int*)malloc(5 * sizeof(int)); allocates space for 5 integers. Unlike stack variables, heap memory persists until freed."
    },
    {
        question: "When you are done with heap memory, you should release it using:",
        options: ["delete()", "remove()", "free()", "return"],
        correct: 2,
        topic: "Memory Management",
        explanation: "free() deallocates memory allocated by malloc(). Example: free(ptr); Always free allocated memory to prevent memory leaks. After freeing, set pointer to NULL to avoid dangling pointers."
    },
    {
        question: "The 'terse' nature of C means it was designed to be:",
        options: ["Very wordy and descriptive", "Brief and concise to minimize typing time", "Easy for non-programmers to read", "Extremely slow to execute"],
        correct: 1,
        topic: "Introduction to C",
        explanation: "C uses concise syntax to minimize typing. Examples: i++ instead of i=i+1, operators like +=, -=. This brevity can make code harder to read for beginners but faster to write for experts."
    },
    {
        question: "What is one major weakness of C mentioned in the text?",
        options: ["It is too slow", "It is not portable", "It can be error-prone and hard to understand", "It cannot be used for system programming"],
        correct: 2,
        topic: "Introduction to C",
        explanation: "C's low-level features (pointers, manual memory management) make it error-prone. Common issues: buffer overflows, memory leaks, dangling pointers. C assumes programmer competence and doesn't prevent dangerous operations."
    },
    {
        question: "The logical 'NOT' operator in C is represented by:",
        options: ["&&", "||", "!", "~"],
        correct: 2,
        topic: "Operators",
        explanation: "! negates a Boolean value. !true becomes false, !false becomes true. Example: if(!done) means 'if not done'. In C, !0 is 1 (true) and !(non-zero) is 0 (false)."
    },
    {
        question: "A variable declared inside a function is typically:",
        options: ["Global", "Local to that function", "Accessible by all programs", "Constant"],
        correct: 1,
        topic: "Variables",
        explanation: "Local variables exist only within their function. They're created when function is called and destroyed when it returns. They're not accessible from other functions, providing encapsulation."
    },
    {
        question: "Which operating system's kernel is famously scripted using C?",
        options: ["Windows 95", "Linux", "MS-DOS", "CP/M"],
        correct: 1,
        topic: "Introduction to C",
        explanation: "Linux kernel is written primarily in C (with some assembly). C's efficiency and low-level control make it ideal for operating systems. Unix, Windows kernel, and many embedded systems also use C."
    },
    {
        question: "Software engineering is concerned with constructing:",
        options: ["Games only", "Robust and reliable computer programs", "Hardware components", "Internet cables"],
        correct: 1,
        topic: "Programming Concepts",
        explanation: "Software engineering applies engineering principles to create reliable, maintainable, efficient software. It covers design, testing, documentation, and project management - not just coding."
    },
    {
        question: "Which of the following is NOT a basic data type in C?",
        options: ["int", "char", "string", "float"],
        correct: 2,
        topic: "Data Types",
        explanation: "C's basic types are int, char, float, double, and _Bool. 'string' is NOT a primitive type - it's implemented as a char array. C has no built-in string type like other languages."
    },
    {
        question: "Open source software refers to software where:",
        options: ["The code is hidden from users", "Users can alter or improve the source code", "The software costs a lot of money", "Only the original creator can see the code"],
        correct: 1,
        topic: "Programming Concepts",
        explanation: "Open source means source code is publicly available. Users can view, modify, and distribute it. Examples: Linux, GCC, Python. This promotes collaboration, transparency, and community-driven development."
    },
    {
        question: "C was originally developed for which operating system?",
        options: ["Linux", "Unix", "Windows", "DOS"],
        correct: 1,
        topic: "Introduction to C",
        explanation: "C was created to rewrite Unix OS at Bell Labs. Unix was originally in assembly, making it hard to port. C's portability allowed Unix to run on different computers, spreading both C and Unix."
    },
    {
        question: "Which of the following is a characteristic of C?",
        options: ["Object-oriented", "Functional only", "Declarative", "Procedural"],
        correct: 3,
        topic: "Introduction to C",
        explanation: "C is procedural - programs are sequences of procedures (functions) that operate on data. Unlike object-oriented languages, C doesn't have classes or inheritance. It focuses on functions and structured programming."
    },
    {
        question: "The first version of C was known as:",
        options: ["K&R C", "C89", "C99", "ANSI C"],
        correct: 0,
        topic: "Introduction to C",
        explanation: "K&R C refers to the original C described in Kernighan and Ritchie's 1978 book 'The C Programming Language'. It became the de facto standard before ANSI standardization in 1989."
    },
    {
        question: "Which standard introduced the bool type in C?",
        options: ["C99", "C89", "C95", "C11"],
        correct: 0,
        topic: "Introduction to C",
        explanation: "C99 (1999 standard) added _Bool type and <stdbool.h> header. Before C99, programmers used int (0=false, non-zero=true) for Boolean logic. C99 also added // comments and inline functions."
    },
    {
        question: "C is considered a middle-level language because:",
        options: ["It's only for beginners", "It's difficult to learn", "It's outdated", "It combines low-level and high-level features"],
        correct: 3,
        topic: "Introduction to C",
        explanation: "C combines low-level features (pointers, bit manipulation, direct memory access) with high-level features (functions, structures, control flow). It's 'close to hardware' yet more abstract than assembly."
    },
    {
        question: "Which company maintains the GCC compiler?",
        options: ["Apple", "Oracle", "Microsoft", "GNU Project"],
        correct: 3,
        topic: "Development Tools",
        explanation: "GCC (GNU Compiler Collection) is maintained by the GNU Project (Free Software Foundation). It's free, open-source, and supports C, C++, and other languages. It's the default compiler on Linux."
    },
    {
        question: "The sizeof operator returns:",
        options: ["Data type", "Memory address", "Value of variable", "Size in bytes"],
        correct: 3,
        topic: "Operators",
        explanation: "sizeof returns the size in bytes of a type or variable. Example: sizeof(int) typically returns 4. Useful for memory allocation: malloc(n * sizeof(int)). It's evaluated at compile time."
    },
    {
        question: "What is the size of char in C?",
        options: ["1 byte", "4 bytes", "2 bytes", "Depends on compiler"],
        correct: 0,
        topic: "Data Types",
        explanation: "char is always 1 byte (8 bits) by definition. It can store values 0-255 (unsigned) or -128 to 127 (signed). It's used for characters (ASCII) and small integers."
    },
    {
        question: "Which keyword is used to define constants?",
        options: ["const", "constant", "final", "static"],
        correct: 0,
        topic: "Variables",
        explanation: "const declares variables whose values can't be changed after initialization. Example: const int MAX = 100; Attempting to modify MAX causes a compiler error. Use const for values that shouldn't change."
    },
    {
        question: "What is the range of unsigned char?",
        options: ["-128 to 127", "0 to 255", "0 to 127", "-255 to 255"],
        correct: 1,
        topic: "Data Types",
        explanation: "unsigned char stores 0 to 255 (8 bits, all positive). Regular char can be -128 to 127 (signed) or 0-255 (unsigned, implementation-dependent). Use unsigned when you need only positive values."
    },
    {
        question: "Which storage class has the longest lifetime?",
        options: ["auto", "extern", "static", "register"],
        correct: 2,
        topic: "Variables",
        explanation: "static variables persist for the entire program execution. They're initialized once and retain values between function calls. Example: static int count = 0; in a function keeps count across calls."
    },
    {
        question: "The register keyword suggests:",
        options: ["Store in CPU register", "Constant value", "Pointer variable", "Global variable"],
        correct: 0,
        topic: "Variables",
        explanation: "register hints the compiler to store the variable in a CPU register for faster access. Example: register int i; Modern compilers often ignore this and optimize automatically. Can't take address of register variables."
    },
    {
        question: "What is type casting?",
        options: ["Converting one data type to another", "Deleting variables", "Copying variables", "Creating new types"],
        correct: 0,
        topic: "Data Types",
        explanation: "Type casting converts a value from one type to another. Example: (int)3.7 converts float to int, giving 3. Syntax: (target_type)value. Useful for avoiding precision loss warnings and controlling conversions."
    },
    {
        question: "Which is the correct way to declare a pointer?",
        options: ["int *ptr;", "int ptr;", "int &ptr;", "pointer int ptr;"],
        correct: 0,
        topic: "Pointers",
        explanation: "int *ptr; declares a pointer to int. The * indicates it's a pointer. ptr stores a memory address, not a value. Initialize: int *ptr = &variable; to point to variable's address."
    },
    {
        question: "What is the result of 5 / 2 in C?",
        options: ["2.0", "2", "3", "2.5"],
        correct: 1,
        topic: "Operators",
        explanation: "Integer division truncates decimals. 5 / 2 = 2 (not 2.5) because both operands are integers. For decimal result, use: 5.0 / 2 or (float)5 / 2. This is a common source of bugs."
    },
    {
        question: "The ++ operator is called:",
        options: ["Concatenation", "Addition", "Increment", "Comparison"],
        correct: 2,
        topic: "Operators",
        explanation: "++ increments a variable by 1. i++ (post-increment) uses current value then increments. ++i (pre-increment) increments then uses new value. Example: int i=5; printf('%d', i++); prints 5, i becomes 6."
    },
    {
        question: "What does the expression x = y = z = 5 do?",
        options: ["Assigns 5 to x, y, and z", "Adds values", "Syntax error", "Compares values"],
        correct: 0,
        topic: "Operators",
        explanation: "Assignment is right-associative. z=5 executes first, returning 5. Then y=5, returning 5. Finally x=5. Result: all three variables equal 5. This works because assignment returns the assigned value."
    },
    {
        question: "The ternary operator syntax is:",
        options: ["? condition true false", "condition ? true : false", "if ? then : else", "condition : true ? false"],
        correct: 1,
        topic: "Operators",
        explanation: "Ternary operator: condition ? value_if_true : value_if_false. Example: int max = (a > b) ? a : b; assigns larger value to max. It's a compact if-else for simple conditions."
    },
    {
        question: "What is the precedence of * compared to +?",
        options: ["Undefined", "Higher", "Lower", "Same"],
        correct: 1,
        topic: "Operators",
        explanation: "* (multiplication) has higher precedence than + (addition). So 2 + 3 * 4 = 2 + 12 = 14, not 20. Use parentheses to override: (2 + 3) * 4 = 20. Precedence rules prevent ambiguity."
    },
    {
        question: "The comma operator evaluates:",
        options: ["Average of expressions", "All expressions, returns last", "Last expression only", "First expression only"],
        correct: 1,
        topic: "Operators",
        explanation: "Comma operator evaluates expressions left-to-right and returns the last one. Example: x = (a=1, b=2, a+b); sets a=1, b=2, then x=3. Rarely used except in for loops: for(i=0, j=10; i<j; i++, j--)."
    },
    {
        question: "What does the expression !0 evaluate to?",
        options: ["0", "1", "false", "Error"],
        correct: 1,
        topic: "Operators",
        explanation: "In C, 0 is false and any non-zero is true. ! (NOT) negates: !0 = 1 (true), !1 = 0 (false), !42 = 0 (false). Useful in conditions: if(!error) means 'if no error'."
    },
    {
        question: "What is the difference between while and do-while?",
        options: ["do-while is deprecated", "do-while executes at least once", "while is faster", "No difference"],
        correct: 1,
        topic: "Loops",
        explanation: "while checks condition before executing body (may never execute). do-while checks after (always executes at least once). Use do-while when you need to execute code before testing condition, like menu systems."
    },
    {
        question: "The continue statement:",
        options: ["Restarts the program", "Does nothing", "Exits the loop", "Skips to next iteration"],
        correct: 3,
        topic: "Loops",
        explanation: "continue skips remaining code in current iteration and jumps to next iteration. Example: for(i=0; i<10; i++) { if(i==5) continue; printf('%d', i); } skips printing 5. Unlike break, it doesn't exit the loop."
    },
    {
        question: "The goto statement:",
        options: ["Is not supported in C", "Only works in functions", "Jumps to a label", "Is recommended"],
        correct: 2,
        topic: "Control Flow",
        explanation: "goto jumps to a labeled statement. Example: goto error; ... error: cleanup(); While powerful, goto makes code hard to follow ('spaghetti code'). Modern practice: use structured control flow instead."
    },
    {
        question: "What happens if no case matches in switch without default?",
        options: ["Program crashes", "Nothing happens", "First case executes", "Error"],
        correct: 1,
        topic: "Control Flow",
        explanation: "If no case matches and there's no default, the entire switch block is skipped. Execution continues after the switch. This is valid but often unintended - add default to handle unexpected values."
    },
    {
        question: "Can switch work with float values?",
        options: ["Yes", "No", "Only in C99", "Only with casting"],
        correct: 1,
        topic: "Control Flow",
        explanation: "switch only works with integer types (int, char, enum). It can't handle float or double because floating-point comparison is imprecise. For float comparisons, use if-else chains."
    },
    {
        question: "What is recursion?",
        options: ["Error handling", "Multiple functions", "Function calling itself", "Loop"],
        correct: 2,
        topic: "Functions",
        explanation: "Recursion is when a function calls itself. Example: factorial(n) = n * factorial(n-1). Must have base case to stop: if(n==0) return 1; Without base case, infinite recursion causes stack overflow."
    },
    {
        question: "What is the purpose of function parameters?",
        options: ["Decoration", "Return values", "Pass data to function", "Create variables"],
        correct: 2,
        topic: "Functions",
        explanation: "Parameters pass data into functions. Example: int add(int a, int b) - a and b are parameters. When calling add(5, 3), 5 and 3 are arguments copied to parameters. This enables code reuse."
    },
    {
        question: "What is the difference between call by value and call by reference?",
        options: ["No difference", "Reference is faster", "Value copies data, reference passes address", "Value is deprecated"],
        correct: 2,
        topic: "Functions",
        explanation: "Call by value copies argument values to parameters - changes don't affect originals. Call by reference (using pointers) passes addresses - changes affect originals. Example: void swap(int *a, int *b) uses pointers for reference."
    },
    {
        question: "Can a function return multiple values directly?",
        options: ["Only in C99", "No, but can use pointers or structures", "Yes", "Only integers"],
        correct: 1,
        topic: "Functions",
        explanation: "C functions return one value. For multiple values, use: 1) pointers to modify multiple variables, 2) structures to bundle values, or 3) global variables (not recommended). Example: void getMinMax(int arr[], int *min, int *max)."
    },
    {
        question: "What is a static function?",
        options: ["Deprecated function", "Function visible only in its file", "Fast function", "Constant function"],
        correct: 1,
        topic: "Functions",
        explanation: "static functions are visible only in their source file (internal linkage). They can't be called from other files. Useful for helper functions that shouldn't be exposed. Example: static int helper() { }"
    },
    {
        question: "What is an inline function?",
        options: ["Recursive function", "Function expanded at call site", "Function inside another", "External function"],
        correct: 1,
        topic: "Functions",
        explanation: "inline suggests the compiler expand function code at call site instead of calling it. Reduces function call overhead for small functions. Example: inline int square(int x) { return x*x; } Compiler may ignore the hint."
    },
    {
        question: "What is the null character in C?",
        options: ["\n", "\0", "0", "NULL"],
        correct: 1,
        topic: "Arrays",
        explanation: "\0 (null character, ASCII 0) marks string end. Example: 'Hi' is stored as {'H','i','\0'}. String functions like strlen() count characters until \0. Without \0, functions don't know where string ends."
    },
    {
        question: "How is a string stored in C?",
        options: ["As pointer only", "As character array with \0", "As string type", "As integer array"],
        correct: 1,
        topic: "Arrays",
        explanation: "Strings are character arrays ending with \0. Example: char name[] = 'John'; creates {'J','o','h','n','\0'} - 5 bytes for 4 letters. Always allocate space for \0: char str[10]; holds 9 characters + \0."
    },
    {
        question: "What does strlen() return?",
        options: ["String length including \0", "Array size", "Memory address", "String length excluding \0"],
        correct: 3,
        topic: "Arrays",
        explanation: "strlen() counts characters before \0, excluding \0 itself. Example: strlen('Hello') returns 5, not 6. Don't confuse with sizeof: sizeof('Hello') returns 6 (includes \0). strlen() is in <string.h>."
    },
    {
        question: "How do you declare a 2D array with 3 rows and 4 columns?",
        options: ["int arr(3,4)", "int arr[3,4],
        correct: 2,
        topic: "Arrays",
        explanation: "int arr[3][4]; creates 3 rows, 4 columns (12 elements total). Access: arr[row][col]. Memory layout is row-major: arr[0][0], arr[0][1], ..., arr[0][3], arr[1][0], etc."
    },
    {
        question: "What is the relationship between arrays and pointers?",
        options: ["No relationship", "Array name is a pointer to first element", "Arrays are faster", "Pointers are arrays"],
        correct: 1,
        topic: "Pointers",
        explanation: "Array name is a constant pointer to first element. arr is equivalent to &arr[0]. arr[i] is *(arr+i). You can use pointer arithmetic on arrays: *(arr+2) accesses arr[2]."
    },
    {
        question: "Which function copies strings?",
        options: ["strdup()", "strcopy()", "strcpy()", "copy()"],
        correct: 2,
        topic: "Arrays",
        explanation: "strcpy(dest, src) copies src string to dest, including \0. Example: strcpy(name, 'John'); Danger: if dest is too small, buffer overflow occurs. Safer: strncpy(dest, src, n) copies at most n characters."
    },
    {
        question: "Who developed the C programming language?",
        options: ["Dennis Ritchie", "James Gosling", "Ken Thompson", "Bjarne Stroustrup"],
        correct: 0,
        topic: "Introduction to C",
        explanation: "Dennis Ritchie created C at Bell Labs in 1972. He designed it to rewrite Unix, which was in assembly. C revolutionized programming by combining efficiency with portability."
    },
    {
        question: "Which function is the entry point of a C program?",
        options: ["main()", "program()", "init()", "start()"],
        correct: 0,
        topic: "C Program Structure",
        explanation: "main() is where program execution begins. The operating system calls main() when you run the program. It can return int (exit status) to the OS: 0 means success, non-zero means error."
    },
    {
        question: "Which header file is required for printf()?",
        options: ["stdio.h", "math.h", "conio.h", "stdlib.h"],
        correct: 0,
        topic: "C Program Structure",
        explanation: "stdio.h (standard input/output header) declares printf(), scanf(), and file I/O functions. Without including it, the compiler doesn't know about these functions."
    },
    {
        question: "Which data type stores integer values?",
        options: ["int", "float", "double", "char"],
        correct: 0,
        topic: "Data Types",
        explanation: "int stores whole numbers (no decimals). Size is typically 4 bytes (32 bits), storing values from about -2 billion to +2 billion. Use long for larger numbers, short for smaller."
    },
    {
        question: "What symbol is used for single-line comments?",
        options: ["**", "//", "#", "/* */"],
        correct: 1,
        topic: "C Syntax",
        explanation: "// creates single-line comments (C99 onwards). Everything after // on that line is ignored. Example: int x = 5; // initialize x. For multi-line comments, use /* */."
    },
    {
        question: "Which loop executes at least once?",
        options: ["for", "if", "while", "do-while"],
        correct: 3,
        topic: "Loops",
        explanation: "do-while guarantees at least one execution because it checks condition AFTER the loop body. Syntax: do { statements; } while(condition); Useful when you need to execute code before testing condition."
    },
    {
        question: "What is the correct format specifier for int?",
        options: ["%c", "%s", "%d", "%f"],
        correct: 2,
        topic: "Input/Output",
        explanation: "%d (or %i) tells printf/scanf to expect an integer. Example: printf('Age: %d', age); replaces %d with age's value. Other specifiers: %f (float), %c (char), %s (string)."
    },
    {
        question: "Which operator is used for multiplication?",
        options: ["%", "*", "#", "x"],
        correct: 1,
        topic: "Operators",
        explanation: "* performs multiplication. Example: int result = 5 * 3; gives 15. Don't confuse with pointer declaration (int *ptr) - context determines meaning. Multiplication has higher precedence than +/-."
    },
    {
        question: "Which symbol is used for assignment?",
        options: ["=>", ":=", "==", "="],
        correct: 3,
        topic: "Operators",
        explanation: "= assigns values to variables. Example: x = 10; stores 10 in x. Don't confuse with == (equality comparison). Assignment returns the assigned value, enabling chains: x = y = 5;"
    },
    {
        question: "Which keyword is used to exit a loop?",
        options: ["exit", "stop", "return", "break"],
        correct: 3,
        topic: "Control Flow",
        explanation: "break exits the innermost loop or switch immediately. Execution continues after the loop. Example: for(;;) { if(condition) break; } - exits infinite loop when condition is true."
    }
];

// Export for use in exam system
if (typeof module !== 'undefined' && module.exports) {
    module.exports = COS201_QUESTIONS;
}
