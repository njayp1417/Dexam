import re
import random

# Read current database
with open('COS201_QUESTIONS_DATABASE.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Detailed explanations mapping
explanations = {
    "Who is credited with designing and writing the C programming language?": "Dennis Ritchie created C at Bell Labs between 1969-1973. He designed it to rewrite the Unix operating system, which was originally written in assembly language. C became popular because it combined low-level control with high-level programming features.",
    
    "In what year was the C language developed?": "C was developed in 1972 at Bell Labs. It evolved from the B language and was designed to be portable across different computer architectures while maintaining efficiency.",
    
    "The approach of breaking a large problem into smaller, manageable pieces is known as:": "Top-down programming (also called stepwise refinement) breaks complex problems into smaller sub-problems. You start with the main problem and divide it into manageable functions, making code easier to understand, test, and maintain.",
    
    "A series of instructions that enables a computer to perform a designated task is called a:": "A program is a sequence of instructions written in a programming language that tells the computer what operations to perform. It's the implementation of an algorithm in executable form.",
    
    "Which of these is a strength of the C language?": "C's main strengths are efficiency (fast execution, minimal overhead) and portability (can run on different platforms with minimal changes). It provides direct memory access while remaining relatively high-level.",
    
    "The method used to solve a specific problem is referred to as the:": "An algorithm is a step-by-step procedure or formula for solving a problem. It's language-independent and describes the logic before coding. For example, a sorting algorithm describes how to arrange items in order.",
    
    "C is often described as a 'permissive' language because:": "C gives programmers great freedom and assumes they know what they're doing. It doesn't enforce strict type checking or prevent potentially dangerous operations like pointer arithmetic. This power requires responsibility.",
    
    "Which component of a computer executes programs stored in RAM?": "The CPU (Central Processing Unit) fetches instructions from RAM, decodes them, and executes them. It's the 'brain' of the computer that performs all calculations and logical operations.",
    
    "Early languages like BASIC and FORTRAN often produced 'spaghetti code' because they relied on:": "GOTO statements allow jumping to any line in the program, creating tangled, hard-to-follow code paths. Structured programming with functions and loops replaced GOTO, making code more readable and maintainable.",
    
    "Which of the following is NOT a common use for C?": "C is used for operating systems, compilers, embedded systems, and databases. However, high-level web styling is done with CSS, not C. C is too low-level for simple styling tasks.",
    
    "Which preprocessor command is used to include the standard input-output header file?": "#include <stdio.h> tells the preprocessor to include the standard input/output library before compilation. This header contains declarations for printf(), scanf(), and other I/O functions.",
    
    "The execution of every C program begins at the:": "main() is the entry point of every C program. When you run a program, the operating system calls main() first. Execution starts at the first statement inside main() and proceeds sequentially.",
    
    "Every statement in C must be terminated with a:": "The semicolon (;) marks the end of a statement in C. It tells the compiler where one instruction ends and another begins. Forgetting semicolons is a common beginner error.",
    
    "What does the \\n character represent in a string?": "\\n is an escape sequence representing a newline character. It moves the cursor to the beginning of the next line. For example, printf('Hello\\nWorld'); prints 'Hello' and 'World' on separate lines.",
    
    "Which tool converts C source code into machine language (binary)?": "The compiler translates human-readable C code into machine code (binary) that the CPU can execute. Popular C compilers include GCC, Clang, and MSVC.",
    
    "What is the standard file extension for C source files?": "C source files use the .c extension (e.g., program.c). Header files use .h extension. After compilation, you get object files (.o or .obj) and executables (.exe on Windows).",
    
    "A programmer's comment in C that spans multiple lines starts with /* and ends with:": "Multi-line comments use /* to start and */ to end. Everything between is ignored by the compiler. Example: /* This is a\nmulti-line comment */. Single-line comments use //.",
    
    "The step where library functions are combined with object code to create an executable is called:": "Linking combines your compiled object code with library code (like printf from stdio) to create a final executable file. The linker resolves function calls and memory addresses.",
    
    "An IDE stands for:": "An Integrated Development Environment combines a text editor, compiler, debugger, and other tools in one application. Examples include Code::Blocks, Visual Studio, and CLion. IDEs make programming more efficient.",
    
    "Which of the following is a free, open-source C IDE mentioned in the text?": "Code::Blocks is a free, cross-platform IDE for C/C++. It includes a compiler (usually GCC), debugger, and code editor. Other free options include Dev-C++ and Eclipse CDT.",
    
    "Which data type is used to store values with decimal places?": "float stores floating-point numbers (decimals) like 3.14 or -0.5. It uses 4 bytes and provides about 6-7 decimal digits of precision. For more precision, use double (8 bytes).",
    
    "What is the purpose of the _Bool data type?": "_Bool stores Boolean values: 0 (false) or 1 (true). Introduced in C99, it's used for logical conditions. Including <stdbool.h> lets you use 'true' and 'false' keywords instead of 1 and 0.",
    
    "The double data type is similar to float but provides:": "double provides roughly twice the precision of float. It uses 8 bytes (vs float's 4 bytes) and gives about 15-16 decimal digits of precision. Use double when accuracy is critical.",
    
    "In C, which operator is used for finding the remainder of a division?": "The modulo operator (%) returns the remainder after division. For example, 10 % 3 = 1 (because 10 ÷ 3 = 3 remainder 1). It only works with integers.",
    
    "Which of the following is an assignment operator?": "+= is a compound assignment operator. x += 5 means x = x + 5. Other compound operators include -=, *=, /=, and %=. They're shortcuts that modify and assign in one step.",
    
    "What does the expression count += 10 do?": "count += 10 adds 10 to count's current value and stores the result back in count. It's equivalent to count = count + 10. This is more concise and often more efficient.",
    
    "C is a case-sensitive language. This means:": "In C, uppercase and lowercase letters are different. 'Variable', 'variable', and 'VARIABLE' are three distinct identifiers. This applies to keywords too - 'int' works but 'Int' doesn't.",
    
    "What is the value of 10 + 2 * 5 in C?": "Following operator precedence, multiplication (*) is performed before addition (+). So: 2 * 5 = 10, then 10 + 10 = 20. Use parentheses to change order: (10 + 2) * 5 = 60.",
    
    "Which header file must be included to use true and false with Boolean variables?": "<stdbool.h> defines 'bool' as a type and 'true'/'false' as keywords. Without it, you must use _Bool type with 1/0 values. This header was added in C99 standard.",
    
    "To display an integer value using printf, which format specifier is used?": "%d or %i are format specifiers for integers in printf(). Example: printf('%d', 42); prints 42. Other specifiers: %f (float), %c (char), %s (string), %p (pointer).",
    
    "Which statement is used to make a decision in C?": "The if statement executes code conditionally based on a Boolean expression. Syntax: if (condition) { code }. You can add 'else' for alternative code when condition is false.",
    
    "A loop that repeats forever is called a(n):": "An infinite loop runs endlessly because its condition never becomes false. Example: while(1) { }. Infinite loops can be intentional (like in embedded systems) or bugs. Use break to exit.",
    
    "The for loop contains three expressions in its header. What is the first one?": "The init_expression initializes the loop counter. Syntax: for(init; condition; increment). Example: for(int i=0; i<10; i++) - here 'int i=0' is the initialization.",
    
    "Which loop type always executes its body at least once?": "do-while checks the condition AFTER executing the loop body, guaranteeing at least one execution. Syntax: do { code } while(condition);. Regular while checks before execution.",
    
    "The switch statement is often used as an alternative to:": "switch provides cleaner syntax than multiple if-else chains when checking one variable against many values. It's more readable and potentially more efficient than: if(x==1) {} else if(x==2) {} else if(x==3) {}...",
    
    "In a switch statement, what happens if a break is omitted after a case?": "Without break, execution 'falls through' to the next case. This can be intentional (to handle multiple cases with same code) or a bug. Always use break unless you specifically want fall-through.",
    
    "What is the purpose of the default case in a switch statement?": "default handles all values not matched by other cases. It's like the 'else' of switch statements. Example: switch(grade) { case 'A': ...; default: printf('Invalid grade'); }",
    
    "Which operator is used to check for equality?": "== (double equals) compares two values for equality and returns true/false. Don't confuse with = (single equals) which assigns values. Common bug: if(x=5) assigns 5 to x instead of comparing.",
    
    "To exit a loop prematurely, which keyword is used?": "break immediately exits the current loop (or switch). Execution continues after the loop. Example: while(1) { if(done) break; } - exits infinite loop when done is true.",
    
    "Which loop is better when you know exactly how many times you want to repeat a task?": "for loops are ideal when iteration count is known. They keep initialization, condition, and increment together: for(int i=0; i<10; i++). Use while when iterations depend on runtime conditions.",
    
    "An array is a collection of elements of the:": "Arrays store multiple elements of the SAME type in contiguous memory. You can't mix types - int array holds only integers, char array only characters. For mixed types, use structures.",
    
    "Elements of an array are stored in:": "Array elements occupy consecutive memory locations. If arr[0] is at address 1000 and each int is 4 bytes, arr[1] is at 1004, arr[2] at 1008, etc. This enables fast index-based access.",
    
    "If an array is declared as int num[5], what is the index of the first element?": "C arrays are zero-indexed. num[5] creates 5 elements: num[0], num[1], num[2], num[3], num[4]. Accessing num[5] is out of bounds and causes undefined behavior.",
    
    "What is a 'string' in C?": "C has no built-in string type. Strings are character arrays ending with null character (\\0). Example: char name[] = 'John'; is stored as {'J','o','h','n','\\0'}. The \\0 marks the end.",
    
    "A two-dimensional array can be thought of as a:": "2D arrays represent data in rows and columns like a spreadsheet or matrix. Declaration: int matrix[3][4]; creates 3 rows and 4 columns. Access: matrix[row][col].",
    
    "What keyword is used to return a value from a function?": "return sends a value back to the function caller and exits the function. Example: int add(int a, int b) { return a + b; }. Functions with void return type don't return values.",
    
    "A function that does not return any value should have a return type of:": "void indicates no return value. Example: void printHello() { printf('Hello'); }. You can use 'return;' (without value) to exit early, but it's optional at the end.",
    
    "Which of the following is used to read input from the keyboard?": "scanf() reads formatted input from keyboard. Syntax: scanf('%d', &variable); - the & gets variable's address so scanf can store the value there. Always use & with scanf for variables.",
    
    "In scanf('%d', &n), the & symbol is the:": "& is the address-of operator. It gets the memory address of variable n. scanf needs the address to store the input value directly in memory. Without &, scanf gets the value instead of address.",
    
    "What is a 'function prototype'?": "A prototype declares a function's signature (name, return type, parameters) before its definition. Example: int add(int, int); tells compiler about add() before you define it. Prototypes enable calling functions before defining them.",
    
    "Which function is used to dynamically allocate memory on the heap?": "malloc() allocates memory at runtime. Example: int *ptr = (int*)malloc(5 * sizeof(int)); allocates space for 5 integers. Unlike stack variables, heap memory persists until freed.",
    
    "When you are done with heap memory, you should release it using:": "free() deallocates memory allocated by malloc(). Example: free(ptr); Always free allocated memory to prevent memory leaks. After freeing, set pointer to NULL to avoid dangling pointers.",
    
    "The 'terse' nature of C means it was designed to be:": "C uses concise syntax to minimize typing. Examples: i++ instead of i=i+1, operators like +=, -=. This brevity can make code harder to read for beginners but faster to write for experts.",
    
    "What is one major weakness of C mentioned in the text?": "C's low-level features (pointers, manual memory management) make it error-prone. Common issues: buffer overflows, memory leaks, dangling pointers. C assumes programmer competence and doesn't prevent dangerous operations.",
    
    "The logical 'NOT' operator in C is represented by:": "! negates a Boolean value. !true becomes false, !false becomes true. Example: if(!done) means 'if not done'. In C, !0 is 1 (true) and !(non-zero) is 0 (false).",
    
    "A variable declared inside a function is typically:": "Local variables exist only within their function. They're created when function is called and destroyed when it returns. They're not accessible from other functions, providing encapsulation.",
    
    "Which operating system's kernel is famously scripted using C?": "Linux kernel is written primarily in C (with some assembly). C's efficiency and low-level control make it ideal for operating systems. Unix, Windows kernel, and many embedded systems also use C.",
    
    "Software engineering is concerned with constructing:": "Software engineering applies engineering principles to create reliable, maintainable, efficient software. It covers design, testing, documentation, and project management - not just coding.",
    
    "Which of the following is NOT a basic data type in C?": "C's basic types are int, char, float, double, and _Bool. 'string' is NOT a primitive type - it's implemented as a char array. C has no built-in string type like other languages.",
    
    "Open source software refers to software where:": "Open source means source code is publicly available. Users can view, modify, and distribute it. Examples: Linux, GCC, Python. This promotes collaboration, transparency, and community-driven development.",
    
    "Who developed the C programming language?": "Dennis Ritchie created C at Bell Labs in 1972. He designed it to rewrite Unix, which was in assembly. C revolutionized programming by combining efficiency with portability.",
    
    "Which function is the entry point of a C program?": "main() is where program execution begins. The operating system calls main() when you run the program. It can return int (exit status) to the OS: 0 means success, non-zero means error.",
    
    "Which header file is required for printf()?": "stdio.h (standard input/output header) declares printf(), scanf(), and file I/O functions. Without including it, the compiler doesn't know about these functions.",
    
    "Which data type stores integer values?": "int stores whole numbers (no decimals). Size is typically 4 bytes (32 bits), storing values from about -2 billion to +2 billion. Use long for larger numbers, short for smaller.",
    
    "What symbol is used for single-line comments?": "// creates single-line comments (C99 onwards). Everything after // on that line is ignored. Example: int x = 5; // initialize x. For multi-line comments, use /* */.",
    
    "Which loop executes at least once?": "do-while guarantees at least one execution because it checks condition AFTER the loop body. Syntax: do { statements; } while(condition); Useful when you need to execute code before testing condition.",
    
    "What is the correct format specifier for int?": "%d (or %i) tells printf/scanf to expect an integer. Example: printf('Age: %d', age); replaces %d with age's value. Other specifiers: %f (float), %c (char), %s (string).",
    
    "Which operator is used for multiplication?": "* performs multiplication. Example: int result = 5 * 3; gives 15. Don't confuse with pointer declaration (int *ptr) - context determines meaning. Multiplication has higher precedence than +/-.",
    
    "Which symbol is used for assignment?": "= assigns values to variables. Example: x = 10; stores 10 in x. Don't confuse with == (equality comparison). Assignment returns the assigned value, enabling chains: x = y = 5;",
    
    "Which keyword is used to exit a loop?": "break exits the innermost loop or switch immediately. Execution continues after the loop. Example: for(;;) { if(condition) break; } - exits infinite loop when condition is true.",
    
    "C was originally developed for which operating system?": "C was created to rewrite Unix OS at Bell Labs. Unix was originally in assembly, making it hard to port. C's portability allowed Unix to run on different computers, spreading both C and Unix.",
    
    "Which of the following is a characteristic of C?": "C is procedural - programs are sequences of procedures (functions) that operate on data. Unlike object-oriented languages, C doesn't have classes or inheritance. It focuses on functions and structured programming.",
    
    "The first version of C was known as:": "K&R C refers to the original C described in Kernighan and Ritchie's 1978 book 'The C Programming Language'. It became the de facto standard before ANSI standardization in 1989.",
    
    "Which standard introduced the bool type in C?": "C99 (1999 standard) added _Bool type and <stdbool.h> header. Before C99, programmers used int (0=false, non-zero=true) for Boolean logic. C99 also added // comments and inline functions.",
    
    "C is considered a middle-level language because:": "C combines low-level features (pointers, bit manipulation, direct memory access) with high-level features (functions, structures, control flow). It's 'close to hardware' yet more abstract than assembly.",
    
    "Which company maintains the GCC compiler?": "GCC (GNU Compiler Collection) is maintained by the GNU Project (Free Software Foundation). It's free, open-source, and supports C, C++, and other languages. It's the default compiler on Linux.",
    
    "The sizeof operator returns:": "sizeof returns the size in bytes of a type or variable. Example: sizeof(int) typically returns 4. Useful for memory allocation: malloc(n * sizeof(int)). It's evaluated at compile time.",
    
    "What is the size of char in C?": "char is always 1 byte (8 bits) by definition. It can store values 0-255 (unsigned) or -128 to 127 (signed). It's used for characters (ASCII) and small integers.",
    
    "Which keyword is used to define constants?": "const declares variables whose values can't be changed after initialization. Example: const int MAX = 100; Attempting to modify MAX causes a compiler error. Use const for values that shouldn't change.",
    
    "What is the range of unsigned char?": "unsigned char stores 0 to 255 (8 bits, all positive). Regular char can be -128 to 127 (signed) or 0-255 (unsigned, implementation-dependent). Use unsigned when you need only positive values.",
    
    "Which storage class has the longest lifetime?": "static variables persist for the entire program execution. They're initialized once and retain values between function calls. Example: static int count = 0; in a function keeps count across calls.",
    
    "The register keyword suggests:": "register hints the compiler to store the variable in a CPU register for faster access. Example: register int i; Modern compilers often ignore this and optimize automatically. Can't take address of register variables.",
    
    "What is type casting?": "Type casting converts a value from one type to another. Example: (int)3.7 converts float to int, giving 3. Syntax: (target_type)value. Useful for avoiding precision loss warnings and controlling conversions.",
    
    "Which is the correct way to declare a pointer?": "int *ptr; declares a pointer to int. The * indicates it's a pointer. ptr stores a memory address, not a value. Initialize: int *ptr = &variable; to point to variable's address.",
    
    "What is the result of 5 / 2 in C?": "Integer division truncates decimals. 5 / 2 = 2 (not 2.5) because both operands are integers. For decimal result, use: 5.0 / 2 or (float)5 / 2. This is a common source of bugs.",
    
    "The ++ operator is called:": "++ increments a variable by 1. i++ (post-increment) uses current value then increments. ++i (pre-increment) increments then uses new value. Example: int i=5; printf('%d', i++); prints 5, i becomes 6.",
    
    "What does the expression x = y = z = 5 do?": "Assignment is right-associative. z=5 executes first, returning 5. Then y=5, returning 5. Finally x=5. Result: all three variables equal 5. This works because assignment returns the assigned value.",
    
    "The ternary operator syntax is:": "Ternary operator: condition ? value_if_true : value_if_false. Example: int max = (a > b) ? a : b; assigns larger value to max. It's a compact if-else for simple conditions.",
    
    "What is the precedence of * compared to +?": "* (multiplication) has higher precedence than + (addition). So 2 + 3 * 4 = 2 + 12 = 14, not 20. Use parentheses to override: (2 + 3) * 4 = 20. Precedence rules prevent ambiguity.",
    
    "The comma operator evaluates:": "Comma operator evaluates expressions left-to-right and returns the last one. Example: x = (a=1, b=2, a+b); sets a=1, b=2, then x=3. Rarely used except in for loops: for(i=0, j=10; i<j; i++, j--).",
    
    "What does the expression !0 evaluate to?": "In C, 0 is false and any non-zero is true. ! (NOT) negates: !0 = 1 (true), !1 = 0 (false), !42 = 0 (false). Useful in conditions: if(!error) means 'if no error'.",
    
    "What is the difference between while and do-while?": "while checks condition before executing body (may never execute). do-while checks after (always executes at least once). Use do-while when you need to execute code before testing condition, like menu systems.",
    
    "The continue statement:": "continue skips remaining code in current iteration and jumps to next iteration. Example: for(i=0; i<10; i++) { if(i==5) continue; printf('%d', i); } skips printing 5. Unlike break, it doesn't exit the loop.",
    
    "Which is valid for loop syntax?": "for(;;) creates an infinite loop with empty initialization, condition (defaults to true), and increment. Equivalent to while(1). All three expressions are optional: for(;condition;) is valid too.",
    
    "The goto statement:": "goto jumps to a labeled statement. Example: goto error; ... error: cleanup(); While powerful, goto makes code hard to follow ('spaghetti code'). Modern practice: use structured control flow instead.",
    
    "What happens if no case matches in switch without default?": "If no case matches and there's no default, the entire switch block is skipped. Execution continues after the switch. This is valid but often unintended - add default to handle unexpected values.",
    
    "Can switch work with float values?": "switch only works with integer types (int, char, enum). It can't handle float or double because floating-point comparison is imprecise. For float comparisons, use if-else chains.",
    
    "What is recursion?": "Recursion is when a function calls itself. Example: factorial(n) = n * factorial(n-1). Must have base case to stop: if(n==0) return 1; Without base case, infinite recursion causes stack overflow.",
    
    "What is the purpose of function parameters?": "Parameters pass data into functions. Example: int add(int a, int b) - a and b are parameters. When calling add(5, 3), 5 and 3 are arguments copied to parameters. This enables code reuse.",
    
    "What is the difference between call by value and call by reference?": "Call by value copies argument values to parameters - changes don't affect originals. Call by reference (using pointers) passes addresses - changes affect originals. Example: void swap(int *a, int *b) uses pointers for reference.",
    
    "Can a function return multiple values directly?": "C functions return one value. For multiple values, use: 1) pointers to modify multiple variables, 2) structures to bundle values, or 3) global variables (not recommended). Example: void getMinMax(int arr[], int *min, int *max).",
    
    "What is a static function?": "static functions are visible only in their source file (internal linkage). They can't be called from other files. Useful for helper functions that shouldn't be exposed. Example: static int helper() { }",
    
    "What is an inline function?": "inline suggests the compiler expand function code at call site instead of calling it. Reduces function call overhead for small functions. Example: inline int square(int x) { return x*x; } Compiler may ignore the hint.",
    
    "How do you access the third element of array arr?": "Arrays are zero-indexed: arr[0] is first, arr[1] is second, arr[2] is third. arr[2] accesses the third element. Common mistake: arr[3] is the fourth element, not third.",
    
    "What is the null character in C?": "\\0 (null character, ASCII 0) marks string end. Example: 'Hi' is stored as {'H','i','\\0'}. String functions like strlen() count characters until \\0. Without \\0, functions don't know where string ends.",
    
    "How is a string stored in C?": "Strings are character arrays ending with \\0. Example: char name[] = 'John'; creates {'J','o','h','n','\\0'} - 5 bytes for 4 letters. Always allocate space for \\0: char str[10]; holds 9 characters + \\0.",
    
    "What does strlen() return?": "strlen() counts characters before \\0, excluding \\0 itself. Example: strlen('Hello') returns 5, not 6. Don't confuse with sizeof: sizeof('Hello') returns 6 (includes \\0). strlen() is in <string.h>.",
    
    "How do you declare a 2D array with 3 rows and 4 columns?": "int arr[3][4]; creates 3 rows, 4 columns (12 elements total). Access: arr[row][col]. Memory layout is row-major: arr[0][0], arr[0][1], ..., arr[0][3], arr[1][0], etc.",
    
    "What is the relationship between arrays and pointers?": "Array name is a constant pointer to first element. arr is equivalent to &arr[0]. arr[i] is *(arr+i). You can use pointer arithmetic on arrays: *(arr+2) accesses arr[2].",
    
    "Which function copies strings?": "strcpy(dest, src) copies src string to dest, including \\0. Example: strcpy(name, 'John'); Danger: if dest is too small, buffer overflow occurs. Safer: strncpy(dest, src, n) copies at most n characters."
}

# Read and parse current database
pattern = r'\{[^}]*question:\s*"([^"]*)"[^}]*options:\s*\[([^\]]*)\][^}]*correct:\s*(\d+)[^}]*topic:\s*"([^"]*)"[^}]*\}'
matches = re.findall(pattern, content, re.DOTALL)

output = "const COS201_QUESTIONS = [\n"

for i, (question, options_str, correct, topic) in enumerate(matches):
    # Get explanation
    explanation = explanations.get(question, f"This is the correct answer for this {topic.lower()} question.")
    
    output += "    {\n"
    output += f'        question: "{question}",\n'
    output += f'        options: [{options_str}],\n'
    output += f'        correct: {correct},\n'
    output += f'        topic: "{topic}",\n'
    output += f'        explanation: "{explanation}"\n'
    output += "    }"
    if i < len(matches) - 1:
        output += ","
    output += "\n"

output += "];\n\n"
output += "// Export for use in exam system\n"
output += "if (typeof module !== 'undefined' && module.exports) {\n"
output += "    module.exports = COS201_QUESTIONS;\n"
output += "}\n"

with open('COS201_QUESTIONS_DATABASE.js', 'w', encoding='utf-8') as f:
    f.write(output)

print(f"Updated {len(matches)} questions with detailed explanations!")
