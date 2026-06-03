// COS202 - Object Oriented Programming Questions Database

const COS202_QUESTIONS = [
    {
        id: "cos202_001",
        question: "What is the primary focus of Procedure Oriented Programming (POP) compared to Object-Oriented Programming (OOP)?",
        options: ["Data structures and algorithms", "Objects and their interactions", "Functions and the sequence of tasks", "Reusability and encapsulation"],
        correct: 2,
        topic: "OOP Concepts & Java Fundamentals"
    },
    {
        id: "cos202_002",
        question: "Which of the following is a characteristic of Object-Oriented Programming (OOP)?",
        options: ["Top-down approach", "Focus on functions", "Bottom-up approach", "Global data sharing"],
        correct: 2,
        topic: "OOP Concepts & Java Fundamentals"
    },
    {
        id: "cos202_003",
        question: "In Java, how should a source file be named if it contains a public class named MyClass?",
        options: ["myclass.java", "MyClass.java", "MyClass.class", "my_class.java"],
        correct: 1,
        topic: "OOP Concepts & Java Fundamentals"
    },
    {
        id: "cos202_004",
        question: "Which keyword is used to indicate that a method does not return any value?",
        options: ["null", "static", "void", "main"],
        correct: 2,
        topic: "OOP Concepts & Java Fundamentals"
    },
    {
        id: "cos202_005",
        question: "What are the three categories of Java variables?",
        options: ["Local, Global, and Static", "Local, Instance, and Class/Static", "Public, Private, and Protected", "Primitive, Reference, and String"],
        correct: 1,
        topic: "OOP Concepts & Java Fundamentals"
    },
    {
        id: "cos202_006",
        question: "What is the default value for a variable of type int declared as an instance variable?",
        options: ["null", "false", "1", "0"],
        correct: 3,
        topic: "OOP Concepts & Java Fundamentals"
    },
    {
        id: "cos202_007",
        question: "Which operator is used for object reference variables to check if an object is of a particular type?",
        options: ["checktype", "isInstance", "instanceof", "typeOf"],
        correct: 2,
        topic: "OOP Concepts & Java Fundamentals"
    },
    {
        id: "cos202_008",
        question: "What is \"Encapsulation\" in the context of OOP?",
        options: ["Making all fields public", "Hiding data and controlling access via methods", "Inheriting properties from a superclass", "Creating multiple forms of a function"],
        correct: 1,
        topic: "OOP Concepts & Java Fundamentals"
    },
    {
        id: "cos202_009",
        question: "Why can't an abstract class be instantiated?",
        options: ["Because it contains only static methods", "Because it is designed to be a template for subclasses, not an object itself", "Because it has no access modifiers", "Because it does not contain a constructor"],
        correct: 1,
        topic: "OOP Concepts & Java Fundamentals"
    },
    {
        id: "cos202_010",
        question: "Which statement about Java interfaces is correct?",
        options: ["An interface can contain non-abstract methods.", "Interfaces support multiple inheritance in Java.", "An interface can have a constructor.", "An interface can be instantiated."],
        correct: 1,
        topic: "OOP Concepts & Java Fundamentals"
    },
    {
        id: "cos202_011",
        question: "What is the primary benefit of using an interface in Java?",
        options: ["It provides memory management.", "It allows a class to inherit from multiple classes.", "It enables multiple inheritance of type and defines a contract for implementation.", "It improves the speed of execution."],
        correct: 2,
        topic: "OOP Concepts & Java Fundamentals"
    },
    {
        id: "cos202_012",
        question: "Which of the following is NOT an access modifier in Java?",
        options: ["public", "private", "static", "protected"],
        correct: 2,
        topic: "OOP Concepts & Java Fundamentals"
    },
    {
        id: "cos202_013",
        question: "In the context of exceptions, what is the purpose of the finally block?",
        options: ["To catch specific exceptions.", "To terminate the program immediately.", "To execute code regardless of whether an exception occurred.", "To throw a new exception."],
        correct: 2,
        topic: "OOP Concepts & Java Fundamentals"
    },
    {
        id: "cos202_014",
        question: "What does \"Polymorphism\" literally mean in OOP?",
        options: ["Many forms.", "Data hiding.", "Code reuse.", "Static binding."],
        correct: 0,
        topic: "OOP Concepts & Java Fundamentals"
    },
    {
        id: "cos202_015",
        question: "Which method must be implemented by any class that implements the Runnable interface?",
        options: ["start()", "run()", "main()", "execute()"],
        correct: 1,
        topic: "OOP Concepts & Java Fundamentals"
    },
    {
        id: "cos202_016",
        question: "Which data structure follows the Last-In-First-Out (LIFO) principle?",
        options: ["Queue", "Array", "Stack", "Linked List"],
        correct: 2,
        topic: "OOP Concepts & Java Fundamentals"
    },
    {
        id: "cos202_017",
        question: "What is a \"Constructor\" in Java?",
        options: ["A special method used to initialize objects.", "A method that always returns a boolean.", "A variable that holds the class name.", "A tool used to compile the code."],
        correct: 0,
        topic: "OOP Concepts & Java Fundamentals"
    },
    {
        id: "cos202_018",
        question: "Which of these is a correct way to declare an array in Java?",
        options: ["int arr = new int[5];", "int[] arr = new int[5];", "int arr[] = new int[];", "array arr = new array(5);"],
        correct: 1,
        topic: "OOP Concepts & Java Fundamentals"
    },
    {
        id: "cos202_019",
        question: "What is the superclass of all classes in Java?",
        options: ["java.class", "System", "Object", "Root"],
        correct: 2,
        topic: "OOP Concepts & Java Fundamentals"
    },
    {
        id: "cos202_020",
        question: "What is an abstract method?",
        options: ["A method that has no body.", "A method that is private.", "A method that is always static.", "A method that returns an object."],
        correct: 0,
        topic: "OOP Concepts & Java Fundamentals"
    },
    {
        id: "cos202_021",
        question: "What is the primary purpose of the remainder operator (%) in Java?",
        options: ["To perform division and return the quotient.", "To determine the remainder of a division operation.", "To calculate the percentage of a number.", "To round off floating-point numbers."],
        correct: 1,
        topic: "OOP Concepts & Java Fundamentals"
    },
    {
        id: "cos202_022",
        question: "Which of the following correctly describes a \"one-dimensional array\" in Java?",
        options: ["A collection of objects that can hold different data types.", "A fixed-size structure that holds multiple values of the same data type.", "A dynamic list that automatically resizes when adding elements.", "A class used to manage memory allocation."],
        correct: 1,
        topic: "OOP Concepts & Java Fundamentals"
    },
    {
        id: "cos202_023",
        question: "In an inheritance hierarchy, what is the \"superclass\"?",
        options: ["The class that inherits attributes from others.", "The most specialized class in the hierarchy.", "The class from which other classes derive their properties.", "The class that contains the main method."],
        correct: 2,
        topic: "OOP Concepts & Java Fundamentals"
    },
    {
        id: "cos202_024",
        question: "When defining an inheritance hierarchy for shapes like Rectangle and Square, which class would be the most suitable superclass?",
        options: ["Square", "Point", "Quadrilateral", "Rectangle"],
        correct: 2,
        topic: "OOP Concepts & Java Fundamentals"
    },
    {
        id: "cos202_025",
        question: "What is the main characteristic of an \"Applet\" in Java?",
        options: ["It is a standalone application that runs on the desktop.", "It is a small program designed to run within a web browser.", "It is a server-side script.", "It is used exclusively for database connectivity."],
        correct: 1,
        topic: "OOP Concepts & Java Fundamentals"
    },
    {
        id: "cos202_026",
        question: "What does \"Data Abstraction\" mean in OOP?",
        options: ["Exposing all internal data to the user.", "Reducing the code size by removing comments.", "Hiding implementation details and exposing only essential features.", "Automatically creating getters and setters for all variables."],
        correct: 2,
        topic: "OOP Concepts & Java Fundamentals"
    },
    {
        id: "cos202_027",
        question: "Which of these is a common strategy for handling exceptions in Java?",
        options: ["Using if-else blocks for every possible error.", "Wrapping dangerous code in a try-catch block.", "Ignoring all errors to prevent the program from crashing.", "Using the override keyword on all methods."],
        correct: 1,
        topic: "OOP Concepts & Java Fundamentals"
    },
    {
        id: "cos202_028",
        question: "What is the purpose of the super keyword in a subclass?",
        options: ["To call the constructor or methods of the parent class.", "To create a new instance of the current class.", "To access private variables of a different class.", "To define a new interface."],
        correct: 0,
        topic: "OOP Concepts & Java Fundamentals"
    },
    {
        id: "cos202_029",
        question: "Which of the following is true about Static variables?",
        options: ["They are unique to every object created.", "They are shared by all instances of the class.", "They are destroyed as soon as the object is destroyed.", "They cannot be changed after initialization."],
        correct: 1,
        topic: "OOP Concepts & Java Fundamentals"
    },
    {
        id: "cos202_030",
        question: "What is \"Debugging\" in the context of program development?",
        options: ["The process of writing the code for the first time.", "The process of identifying and removing errors from a program.", "The process of documenting the code for other developers.", "The process of compiling the program into bytecode."],
        correct: 1,
        topic: "OOP Concepts & Java Fundamentals"
    },
    {
        id: "cos202_031",
        question: "What is the primary purpose of a \"Package\" in Java?",
        options: ["To store compiled bytecode files only.", "To provide a namespace for organizing related classes and interfaces.", "To improve the execution speed of the program.", "To define the entry point of the application."],
        correct: 1,
        topic: "Java API & Collections"
    },
    {
        id: "cos202_032",
        question: "What is an \"Iterator\" in the context of the Java API?",
        options: ["A tool used to compile Java source code.", "An object that allows you to traverse elements of a collection one by one.", "A keyword used to define a loop in a class.", "A method used to terminate a program."],
        correct: 1,
        topic: "Java API & Collections"
    },
    {
        id: "cos202_033",
        question: "Which data structure is best described as \"First-In-First-Out\" (FIFO)?",
        options: ["Stack", "List", "Queue", "Array"],
        correct: 2,
        topic: "Java API & Collections"
    },
    {
        id: "cos202_034",
        question: "In recursive programming, what is a \"base case\"?",
        options: ["The point where the method calls itself.", "The condition that stops the recursion from continuing indefinitely.", "The initial value passed to the recursive method.", "The memory allocated to the stack."],
        correct: 1,
        topic: "Java API & Collections"
    },
    {
        id: "cos202_035",
        question: "What happens during \"Event-Driven Programming\"?",
        options: ["The program flow is determined by user actions like mouse clicks or key presses.", "The program executes commands strictly in the order they are written in the main method.", "The program runs on a fixed timer regardless of user input.", "The program only performs mathematical calculations."],
        correct: 0,
        topic: "Java API & Collections"
    },
    {
        id: "cos202_036",
        question: "Which of these is a valid way to create a List in Java?",
        options: ["List<String> list = new List<String>();", "List<String> list = new ArrayList<String>();", "ArrayList<String> list = new List<String>();", "Array list = new List();"],
        correct: 1,
        topic: "Java API & Collections"
    },
    {
        id: "cos202_037",
        question: "What is an \"Event Listener\" in Java GUI programming?",
        options: ["A method that sends an email to the user.", "An interface that defines the methods to handle specific events.", "A variable that stores the user's login credentials.", "A tool used to format the GUI layout."],
        correct: 1,
        topic: "Java API & Collections"
    },
    {
        id: "cos202_038",
        question: "What is the difference between System.out.print and System.out.println?",
        options: ["println is faster than print.", "print adds a new line character after the output, while println does not.", "println adds a new line character after the output, while print does not.", "There is no difference."],
        correct: 2,
        topic: "Java API & Collections"
    },
    {
        id: "cos202_039",
        question: "What is \"Inheritance\" in Java?",
        options: ["A mechanism to copy a file from one folder to another.", "A process where a subclass acquires the properties and behaviors of a parent class.", "A way to create a variable that is shared by all objects.", "A method used to handle errors."],
        correct: 1,
        topic: "Java API & Collections"
    },
    {
        id: "cos202_040",
        question: "Which statement is true regarding \"Static\" methods?",
        options: ["They can be called without creating an instance of the class.", "They can only be used in private classes.", "They require an object to be instantiated before they can be called.", "They cannot be used with integers."],
        correct: 0,
        topic: "Java API & Collections"
    },
    {
        id: "cos202_041",
        question: "Which of the following is the correct way to handle a potential ArithmeticException in Java?",
        options: ["ignore { x = 10 / 0; }", "try { x = 10 / 0; } catch (ArithmeticException e) { // handle error }", "handle { x = 10 / 0; }", "if (10/0 == error) { }"],
        correct: 1,
        topic: "Exception Handling & Advanced OOP"
    },
    {
        id: "cos202_042",
        question: "What is the difference between a Stack and a Queue?",
        options: ["A Stack is FIFO, while a Queue is LIFO.", "A Stack is LIFO, while a Queue is FIFO.", "A Stack can only hold integers, while a Queue can hold any object.", "There is no functional difference."],
        correct: 1,
        topic: "Exception Handling & Advanced OOP"
    },
    {
        id: "cos202_043",
        question: "Which keyword prevents a method from being overridden by a subclass?",
        options: ["static", "abstract", "final", "private"],
        correct: 2,
        topic: "Exception Handling & Advanced OOP"
    },
    {
        id: "cos202_044",
        question: "What is a \"Thread\" in Java?",
        options: ["A separate piece of code that runs independently within a program.", "A variable that is shared between two different programs.", "A tool used to connect to a database.", "A class that handles GUI layouts."],
        correct: 0,
        topic: "Exception Handling & Advanced OOP"
    },
    {
        id: "cos202_045",
        question: "What does the this keyword refer to in a Java class?",
        options: ["The parent class.", "The current instance of the class.", "The main method of the program.", "A global variable."],
        correct: 1,
        topic: "Exception Handling & Advanced OOP"
    },
    {
        id: "cos202_046",
        question: "Which of these is a checked exception in Java?",
        options: ["NullPointerException", "ArrayIndexOutOfBoundsException", "IOException", "ArithmeticException"],
        correct: 2,
        topic: "Exception Handling & Advanced OOP"
    },
    {
        id: "cos202_047",
        question: "What is an \"Interface\" in Java?",
        options: ["A class that cannot be inherited.", "A collection of abstract methods and static constants used to define a contract.", "A built-in graphical component for user input.", "A special type of variable that stores memory addresses."],
        correct: 1,
        topic: "Exception Handling & Advanced OOP"
    },
    {
        id: "cos202_048",
        question: "What is the default value of a boolean instance variable?",
        options: ["true", "null", "0", "false"],
        correct: 3,
        topic: "Exception Handling & Advanced OOP"
    },
    {
        id: "cos202_049",
        question: "Which method is typically used to add an element to the end of an ArrayList?",
        options: ["push()", "add()", "insert()", "append()"],
        correct: 1,
        topic: "Exception Handling & Advanced OOP"
    },
    {
        id: "cos202_050",
        question: "What is the main purpose of \"Overloading\" in Java?",
        options: ["To allow multiple methods to have the same name but different parameters.", "To allow a subclass to change the behavior of a parent class method.", "To reduce the memory consumption of the program.", "To define multiple classes in a single file."],
        correct: 0,
        topic: "Exception Handling & Advanced OOP"
    },
    {
        id: "cos202_051",
        question: "What is the difference between final, finally, and finalize?",
        options: ["All are keywords used for exception handling.", "final is a modifier, finally is a block for exception handling, and finalize is a method for object cleanup.", "final is for variables, finally is for classes, and finalize is for methods.", "They are all synonyms used interchangeably in Java."],
        correct: 1,
        topic: "Exception Handling & Advanced OOP"
    },
    {
        id: "cos202_052",
        question: "What is the effect of the break statement in a switch statement?",
        options: ["It terminates the entire program.", "It skips the current iteration of a loop.", "It exits the switch block immediately.", "It restarts the switch logic from the beginning."],
        correct: 2,
        topic: "Exception Handling & Advanced OOP"
    },
    {
        id: "cos202_053",
        question: "What is the purpose of super() in a constructor?",
        options: ["To call the superclass constructor.", "To call the current class constructor.", "To create a static instance of the parent class.", "To override the parent class's variables."],
        correct: 0,
        topic: "Exception Handling & Advanced OOP"
    },
    {
        id: "cos202_054",
        question: "Which of these is an example of a \"Runtime Exception\"?",
        options: ["FileNotFoundException", "NullPointerException", "IOException", "ClassNotFoundException"],
        correct: 1,
        topic: "Exception Handling & Advanced OOP"
    },
    {
        id: "cos202_055",
        question: "How do you create an object in Java?",
        options: ["Class obj = new Class();", "obj = Class.create();", "Class obj = Class.new();", "new Class obj;"],
        correct: 0,
        topic: "Exception Handling & Advanced OOP"
    },
    {
        id: "cos202_056",
        question: "What does \"Encapsulation\" protect?",
        options: ["The computer hardware.", "The internal state (data) of an object from unauthorized access.", "The bytecode from being decompiled.", "The compiler from syntax errors."],
        correct: 1,
        topic: "Exception Handling & Advanced OOP"
    },
    {
        id: "cos202_057",
        question: "What is a \"Static Block\" in Java?",
        options: ["A block of code that runs only when an object is created.", "A block of code that runs once when the class is loaded into memory.", "A block of code that handles errors.", "A block of code used for GUI event handling."],
        correct: 1,
        topic: "Exception Handling & Advanced OOP"
    },
    {
        id: "cos202_058",
        question: "Which of the following is NOT a primitive data type in Java?",
        options: ["int", "boolean", "String", "double"],
        correct: 2,
        topic: "Exception Handling & Advanced OOP"
    },
    {
        id: "cos202_059",
        question: "What happens if you try to use an uninitialized local variable?",
        options: ["The program uses a default value of 0.", "The program throws an error at compile time.", "The program crashes at runtime.", "The variable takes a random value from memory."],
        correct: 1,
        topic: "Exception Handling & Advanced OOP"
    },
    {
        id: "cos202_060",
        question: "What is the primary role of the Java Virtual Machine (JVM)?",
        options: ["To compile Java source code into .java files.", "To execute Java bytecode and provide platform independence.", "To design the graphical user interface (GUI).", "To manage the physical hardware settings."],
        correct: 1,
        topic: "Exception Handling & Advanced OOP"
    },
    {
        id: "cos202_061",
        question: "What is the primary purpose of a \"constructor\" in Java?",
        options: ["To define the main method of the program.", "To perform initialization of an object's instance variables.", "To delete an object from memory.", "To change the access modifier of a class."],
        correct: 1,
        topic: "Exception Handling & Advanced OOP"
    },
    {
        id: "cos202_062",
        question: "Which of these is a valid declaration of an interface?",
        options: ["interface MyInterface { void method(); }", "abstract interface MyInterface { void method(); }", "class interface MyInterface { void method(); }", "interface MyInterface { void method() { } }"],
        correct: 0,
        topic: "Exception Handling & Advanced OOP"
    },
    {
        id: "cos202_063",
        question: "What is the result of 10 / 3 in Java (integer division)?",
        options: ["3.33", "3", "4", "0"],
        correct: 1,
        topic: "Exception Handling & Advanced OOP"
    },
    {
        id: "cos202_064",
        question: "Which collection type allows you to store unique elements only?",
        options: ["List", "ArrayList", "Set", "Queue"],
        correct: 2,
        topic: "Exception Handling & Advanced OOP"
    },
    {
        id: "cos202_065",
        question: "What does the final keyword indicate when applied to a class?",
        options: ["The class can be inherited by any other class.", "The class cannot be extended (no subclasses).", "The class must be instantiated at least once.", "The class is abstract and cannot be instantiated."],
        correct: 1,
        topic: "Exception Handling & Advanced OOP"
    },
    {
        id: "cos202_066",
        question: "Which of the following is an example of an event in GUI programming?",
        options: ["A variable being declared.", "A class being compiled.", "A user clicking a button.", "A loop finishing its execution."],
        correct: 2,
        topic: "Exception Handling & Advanced OOP"
    },
    {
        id: "cos202_067",
        question: "What is the role of the catch block?",
        options: ["It terminates the program whenever an error occurs.", "It contains the code that handles a specific exception if one is thrown in the try block.", "It logs the error to a database automatically.", "It prevents the compiler from checking for errors."],
        correct: 1,
        topic: "Exception Handling & Advanced OOP"
    },
    {
        id: "cos202_068",
        question: "Which access modifier makes a member visible only within the same class?",
        options: ["public", "protected", "private", "default"],
        correct: 2,
        topic: "Exception Handling & Advanced OOP"
    },
    {
        id: "cos202_069",
        question: "What is the output of System.out.println(\"5\" + 5);",
        options: ["10", "55", "Error", "5"],
        correct: 1,
        topic: "Exception Handling & Advanced OOP"
    },
    {
        id: "cos202_070",
        question: "What is \"Recursion\"?",
        options: ["A method that calls another method.", "A loop that runs forever.", "A process where a method calls itself to solve a smaller instance of the same problem.", "A way to store data in a database."],
        correct: 2,
        topic: "Exception Handling & Advanced OOP"
    },
    {
        id: "cos202_071",
        question: "What is the difference between a class and an object?",
        options: ["There is no difference; they are the same thing.", "A class is a blueprint, while an object is a specific instance of that class.", "An object is a blueprint, while a class is an instance.", "A class is a type of object."],
        correct: 1,
        topic: "Core Java Concepts"
    },
    {
        id: "cos202_072",
        question: "Which of these keywords is used to inherit a class in Java?",
        options: ["implements", "extends", "inherits", "super"],
        correct: 1,
        topic: "Core Java Concepts"
    },
    {
        id: "cos202_073",
        question: "What is the output of System.out.println(10 + 20 + \"Java\");",
        options: ["1020Java", "30Java", "Java30", "Error"],
        correct: 1,
        topic: "Core Java Concepts"
    },
    {
        id: "cos202_074",
        question: "What is the \"Garbage Collector\" in Java?",
        options: ["A tool to delete unused files on your hard drive.", "An automated memory management process that frees memory by removing unreachable objects.", "A system to clean up syntax errors in the code.", "A program that removes unused classes from a package."],
        correct: 1,
        topic: "Core Java Concepts"
    },
    {
        id: "cos202_075",
        question: "What is the primary function of an \"Abstract\" class?",
        options: ["To be fully implemented and used to create objects.", "To serve as a base class for other classes, potentially containing both abstract and concrete methods.", "To prevent any class from inheriting from it.", "To define constants only."],
        correct: 1,
        topic: "Core Java Concepts"
    },
    {
        id: "cos202_076",
        question: "Which of the following is a valid way to handle an IOException?",
        options: ["try { ... } catch (IOException e) { ... }", "throws IOException", "Both A and B are correct.", "Neither A nor B is correct."],
        correct: 2,
        topic: "Core Java Concepts"
    },
    {
        id: "cos202_077",
        question: "What is an \"Event-driven\" program?",
        options: ["A program that runs only when the user types a command.", "A program whose flow of execution is determined by events such as user actions or sensor outputs.", "A program that calculates only statistics.", "A program that runs in a fixed, linear order."],
        correct: 1,
        topic: "Core Java Concepts"
    },
    {
        id: "cos202_078",
        question: "Which method is used to compare two Strings for content equality?",
        options: ["==", "isEqual()", "equals()", "compare()"],
        correct: 2,
        topic: "Core Java Concepts"
    },
    {
        id: "cos202_079",
        question: "What does the static keyword mean when applied to a variable?",
        options: ["The variable cannot be changed.", "The variable is shared by all instances of the class.", "The variable is only accessible within the main method.", "The variable is not stored in memory."],
        correct: 1,
        topic: "Core Java Concepts"
    },
    {
        id: "cos202_080",
        question: "What is a \"method signature\"?",
        options: ["The name of the method and its parameter list.", "The return type of the method.", "The entire code block of the method.", "The access modifier of the method."],
        correct: 0,
        topic: "Core Java Concepts"
    },
    {
        id: "cos202_081",
        question: "What is the difference between List and Set in Java?",
        options: ["List allows duplicate elements, while Set does not.", "Set allows duplicate elements, while List does not.", "List is faster than Set.", "They are functionally identical."],
        correct: 0,
        topic: "Core Java Concepts"
    },
    {
        id: "cos202_082",
        question: "Which of these is a correct way to define an array of integers?",
        options: ["int[] arr = {1, 2, 3};", "int arr[] = [1, 2, 3];", "array int arr = {1, 2, 3};", "int arr = new int{1, 2, 3};"],
        correct: 0,
        topic: "Core Java Concepts"
    },
    {
        id: "cos202_083",
        question: "What is the purpose of the super keyword in an overridden method?",
        options: ["To call the subclass version of the method.", "To invoke the method implementation from the superclass.", "To prevent the method from being called again.", "To define a new method in the superclass."],
        correct: 1,
        topic: "Core Java Concepts"
    },
    {
        id: "cos202_084",
        question: "What happens when you throw an exception but do not catch it?",
        options: ["The program continues execution normally.", "The JVM terminates the program.", "The compiler automatically creates a catch block.", "The exception is ignored."],
        correct: 1,
        topic: "Core Java Concepts"
    },
    {
        id: "cos202_085",
        question: "Which of these is a \"Checked Exception\"?",
        options: ["ArithmeticException", "NullPointerException", "FileNotFoundException", "ArrayIndexOutOfBoundsException"],
        correct: 2,
        topic: "Core Java Concepts"
    },
    {
        id: "cos202_086",
        question: "What is the default access level for members in a class?",
        options: ["public", "private", "protected", "Package-private (no modifier)"],
        correct: 3,
        topic: "Core Java Concepts"
    },
    {
        id: "cos202_087",
        question: "Which component of Java allows you to create platform-independent applications?",
        options: ["Java Compiler", "Java Virtual Machine (JVM)", "Java IDE", "Java Debugger"],
        correct: 1,
        topic: "Core Java Concepts"
    },
    {
        id: "cos202_088",
        question: "What is the primary purpose of the main method?",
        options: ["To define the class structure.", "To serve as the entry point from which the program execution starts.", "To handle all exceptions in the code.", "To initialize all variables."],
        correct: 1,
        topic: "Core Java Concepts"
    },
    {
        id: "cos202_089",
        question: "What is the result of boolean b = (5 > 3) && (3 > 5);",
        options: ["true", "false", "5", "Error"],
        correct: 1,
        topic: "Core Java Concepts"
    },
    {
        id: "cos202_090",
        question: "Which of the following is an example of an interface?",
        options: ["public class MyClass {}", "public interface MyInterface {}", "abstract class MyClass {}", "static interface MyInterface {}"],
        correct: 1,
        topic: "Core Java Concepts"
    },
    {
        id: "cos202_091",
        question: "What is the purpose of the args parameter in the main method?",
        options: ["To store the class name.", "To pass command-line arguments to the application.", "To hold the memory address of the class.", "It is not used in Java."],
        correct: 1,
        topic: "Core Java Concepts"
    },
    {
        id: "cos202_092",
        question: "Which operator is used to create a new object instance in Java?",
        options: ["create", "instance", "new", "init"],
        correct: 2,
        topic: "Core Java Concepts"
    },
    {
        id: "cos202_093",
        question: "What is a \"package\" in Java?",
        options: ["A zip file of the source code.", "A folder structure for organizing classes and preventing naming conflicts.", "A compiled version of the code.", "A class that contains only main methods."],
        correct: 1,
        topic: "Core Java Concepts"
    },
    {
        id: "cos202_094",
        question: "What is the value of x after the following code? int x = 5; x += 3;",
        options: ["5", "3", "8", "15"],
        correct: 2,
        topic: "Core Java Concepts"
    },
    {
        id: "cos202_095",
        question: "Which of these is a correct way to start a thread in Java?",
        options: ["thread.run();", "thread.start();", "thread.begin();", "thread.execute();"],
        correct: 1,
        topic: "Core Java Concepts"
    },
    {
        id: "cos202_096",
        question: "What is \"Polymorphism\" in Java?",
        options: ["Having multiple classes in one file.", "The ability of an object or reference to take on many forms (e.g., parent reference holding child object).", "Changing the name of a method multiple times.", "Deleting unused objects."],
        correct: 1,
        topic: "Core Java Concepts"
    },
    {
        id: "cos202_097",
        question: "What is the output of System.out.println(10 > 5 ? \"Yes\" : \"No\");",
        options: ["Yes", "No", "True", "10"],
        correct: 0,
        topic: "Core Java Concepts"
    },
    {
        id: "cos202_098",
        question: "Which keyword is used to access members of a superclass?",
        options: ["base", "this", "super", "parent"],
        correct: 2,
        topic: "Core Java Concepts"
    },
    {
        id: "cos202_099",
        question: "Which of the following is an \"Abstract\" method?",
        options: ["public void myMethod() { }", "public abstract void myMethod();", "static void myMethod() { }", "void myMethod() { return; }"],
        correct: 1,
        topic: "Core Java Concepts"
    },
    {
        id: "cos202_100",
        question: "What is an array index out of bounds error?",
        options: ["Accessing an index that does not exist in the array.", "Declaring an array that is too large.", "Sorting an array incorrectly.", "Initializing an array with the wrong data type."],
        correct: 0,
        topic: "Core Java Concepts"
    },
    {
        id: "cos202_101",
        question: "What is the main purpose of an \"Event Listener\" in Java GUI programming?",
        options: ["To draw graphics on the screen.", "To wait for and respond to user actions like mouse clicks or key presses.", "To store data in the database.", "To terminate the application when a window is closed."],
        correct: 1,
        topic: "GUI & Event-Driven Programming"
    },
    {
        id: "cos202_102",
        question: "Which package contains the core classes for Java GUI programming using AWT?",
        options: ["java.util", "java.awt", "java.io", "java.net"],
        correct: 1,
        topic: "GUI & Event-Driven Programming"
    },
    {
        id: "cos202_103",
        question: "In event-driven programming, what is an \"Event Source\"?",
        options: ["The object that generates the event, such as a Button or TextField.", "The code that processes the event.", "The operating system kernel.", "The compiler that processes the GUI code."],
        correct: 0,
        topic: "GUI & Event-Driven Programming"
    },
    {
        id: "cos202_104",
        question: "Which method is typically implemented to respond to a button click?",
        options: ["onClick()", "actionPerformed()", "handleEvent()", "eventTriggered()"],
        correct: 1,
        topic: "GUI & Event-Driven Programming"
    },
    {
        id: "cos202_105",
        question: "What is the primary difference between iterative and recursive searching?",
        options: ["Iterative uses loops; recursive uses method calls to itself.", "Recursive is always faster than iterative.", "Iterative is more memory-intensive due to stack usage.", "There is no performance difference."],
        correct: 0,
        topic: "Sorting, Searching & Recursion"
    },
    {
        id: "cos202_106",
        question: "In recursion, what happens if the base case is omitted?",
        options: ["The code will not compile.", "The method will execute infinitely, leading to a StackOverflowError.", "The method will return null.", "The method will only run once."],
        correct: 1,
        topic: "Sorting, Searching & Recursion"
    },
    {
        id: "cos202_107",
        question: "Which searching algorithm requires a sorted array to function?",
        options: ["Linear search", "Binary search", "Bubble search", "Simple search"],
        correct: 1,
        topic: "Sorting, Searching & Recursion"
    },
    {
        id: "cos202_108",
        question: "What is the \"worst-case\" time complexity of a standard Bubble Sort?",
        options: ["O(n)", "O(log n)", "O(n^2)", "O(n log n)"],
        correct: 2,
        topic: "Sorting, Searching & Recursion"
    },
    {
        id: "cos202_109",
        question: "Which of the following is considered a \"Divide and Conquer\" sorting algorithm?",
        options: ["Bubble Sort", "Insertion Sort", "QuickSort", "Linear Sort"],
        correct: 2,
        topic: "Sorting, Searching & Recursion"
    },
    {
        id: "cos202_110",
        question: "In the context of the Java API, what is an Iterator?",
        options: ["A loop construct.", "An object that enables you to traverse a collection and remove elements safely.", "A sorting algorithm.", "A class used to create GUIs."],
        correct: 1,
        topic: "Sorting, Searching & Recursion"
    },
    {
        id: "cos202_111",
        question: "In the Java Delegation Event Model, what are the three key participants?",
        options: ["Compiler, Interpreter, and JVM", "Event Source, Event Object, and Event Listener", "GUI, Database, and Server", "Class, Object, and Method"],
        correct: 1,
        topic: "GUI & Event-Driven Programming"
    },
    {
        id: "cos202_112",
        question: "Which method in the ActionListener interface must be implemented to handle a button click?",
        options: ["onButtonPress()", "actionPerformed(ActionEvent e)", "handleAction()", "listen()"],
        correct: 1,
        topic: "GUI & Event-Driven Programming"
    },
    {
        id: "cos202_113",
        question: "What is \"Event Propagation\" in the context of AWT/Swing?",
        options: ["The process of closing a window.", "The passing of an event from the source component to registered listeners.", "The automatic conversion of code to bytecode.", "The process of deleting an object from memory."],
        correct: 1,
        topic: "GUI & Event-Driven Programming"
    },
    {
        id: "cos202_114",
        question: "What is the difference between a Stack and a Queue in terms of usage?",
        options: ["Both use the same push() method.", "Stack is LIFO (Last-In-First-Out); Queue is FIFO (First-In-First-Out).", "Stack is for numbers; Queue is for strings.", "Queue is used for recursion; Stack is used for iteration."],
        correct: 1,
        topic: "Advanced Data Structures & API"
    },
    {
        id: "cos202_115",
        question: "Which of the following is a \"Divide and Conquer\" sorting algorithm mentioned in the COS202 syllabus?",
        options: ["Selection Sort", "QuickSort", "Bubble Sort", "Insertion Sort"],
        correct: 1,
        topic: "Advanced Data Structures & API"
    },
    {
        id: "cos202_116",
        question: "What is the purpose of an \"Iterator\" in Java Collections?",
        options: ["To sort the collection.", "To provide a standardized way to access elements in a collection without exposing its internal structure.", "To create a copy of the collection.", "To delete the collection."],
        correct: 1,
        topic: "Advanced Data Structures & API"
    },
    {
        id: "cos202_117",
        question: "In the context of OLE (Object Linking and Embedding), what is the primary goal?",
        options: ["To compile Java code faster.", "To allow an object created in one application to be embedded/linked into another.", "To manage computer memory.", "To provide a GUI for the browser."],
        correct: 1,
        topic: "Advanced Data Structures & API"
    },

    // ── Control Structures ──────────────────────────────────────────────────
    {
        id: "cos202_118",
        question: "Which control structure executes its body at least once, regardless of the condition?",
        options: ["while loop", "for loop", "do...while loop", "if...else statement"],
        correct: 2,
        topic: "Control Structures"
    },
    {
        id: "cos202_119",
        question: "What is the output of the following code?\nfor(int i=1; i<=5; i++) { if(i==3) continue; System.out.print(i+\" \"); }",
        options: ["1 2 3 4 5", "1 2 4 5", "1 2", "3 4 5"],
        correct: 1,
        topic: "Control Structures"
    },
    {
        id: "cos202_120",
        question: "In a for loop, what are the three parts of the loop header in order?",
        options: ["condition; increment; initialization", "initialization; increment; condition", "initialization; condition; increment", "condition; initialization; increment"],
        correct: 2,
        topic: "Control Structures"
    },
    {
        id: "cos202_121",
        question: "What does the continue statement do inside a loop?",
        options: ["Exits the loop entirely.", "Skips the rest of the current iteration and moves to the next.", "Restarts the loop from the beginning.", "Pauses the loop execution."],
        correct: 1,
        topic: "Control Structures"
    },
    {
        id: "cos202_122",
        question: "Which statement about the while loop is correct?",
        options: ["It always executes at least once.", "It tests the condition after executing the body.", "It tests the condition before executing the body.", "It requires an explicit counter variable."],
        correct: 2,
        topic: "Control Structures"
    },
    {
        id: "cos202_123",
        question: "What is the purpose of the default case in a switch statement?",
        options: ["It is mandatory and causes a compile error if missing.", "It executes when none of the other cases match the expression.", "It always executes regardless of the other cases.", "It is used to exit the switch block."],
        correct: 1,
        topic: "Control Structures"
    },
    {
        id: "cos202_124",
        question: "What is the result of the following code?\nint x = 0; while(x < 3) { x++; } System.out.println(x);",
        options: ["0", "2", "3", "4"],
        correct: 2,
        topic: "Control Structures"
    },
    {
        id: "cos202_125",
        question: "Which of the following correctly uses an enhanced for loop to print all elements of an array int[] nums?",
        options: ["for(int i : nums.length) System.out.println(i);", "for(int n : nums) System.out.println(n);", "for(nums : int n) System.out.println(n);", "for(int n = nums) System.out.println(n);"],
        correct: 1,
        topic: "Control Structures"
    },
    {
        id: "cos202_126",
        question: "What are the three types of control structures in Java according to the course material?",
        options: ["sequence, loop, and switch", "sequence, selection, and repetition", "if, for, and while", "linear, branching, and circular"],
        correct: 1,
        topic: "Control Structures"
    },

    // ── Primitive Data Types ────────────────────────────────────────────────
    {
        id: "cos202_127",
        question: "How many primitive data types does Java support?",
        options: ["4", "6", "8", "10"],
        correct: 2,
        topic: "Data Types"
    },
    {
        id: "cos202_128",
        question: "Which Java primitive data type is used to store a single 16-bit Unicode character?",
        options: ["byte", "short", "char", "String"],
        correct: 2,
        topic: "Data Types"
    },
    {
        id: "cos202_129",
        question: "What is the size of an int data type in Java?",
        options: ["8-bit", "16-bit", "32-bit", "64-bit"],
        correct: 2,
        topic: "Data Types"
    },
    {
        id: "cos202_130",
        question: "Which primitive data type would you use to store a very large whole number that exceeds int range?",
        options: ["float", "double", "long", "short"],
        correct: 2,
        topic: "Data Types"
    },
    {
        id: "cos202_131",
        question: "What is the default value of a reference variable in Java?",
        options: ["0", "false", "null", "undefined"],
        correct: 2,
        topic: "Data Types"
    },
    {
        id: "cos202_132",
        question: "Which of the following is a reference data type in Java?",
        options: ["int", "boolean", "char", "String"],
        correct: 3,
        topic: "Data Types"
    },

    // ── Input / Output ──────────────────────────────────────────────────────
    {
        id: "cos202_133",
        question: "Which import statement is required to use the Scanner class in Java?",
        options: ["import java.io.Scanner;", "import java.util.Scanner;", "import java.lang.Scanner;", "import java.awt.Scanner;"],
        correct: 1,
        topic: "Input & Output"
    },
    {
        id: "cos202_134",
        question: "Which Scanner method is used to read an integer value from the keyboard?",
        options: ["readInt()", "getInt()", "nextInt()", "inputInt()"],
        correct: 2,
        topic: "Input & Output"
    },
    {
        id: "cos202_135",
        question: "Which class in Java can be used to display a pop-up input dialog to the user?",
        options: ["Scanner", "BufferedReader", "JOptionPane", "InputDialog"],
        correct: 2,
        topic: "Input & Output"
    },
    {
        id: "cos202_136",
        question: "Which package contains the JOptionPane class?",
        options: ["java.awt", "java.io", "javax.swing", "java.util"],
        correct: 2,
        topic: "Input & Output"
    },
    {
        id: "cos202_137",
        question: "When using BufferedReader to read input, which method is called to read a line of text?",
        options: ["readLine()", "nextLine()", "getLine()", "scanLine()"],
        correct: 0,
        topic: "Input & Output"
    },
    {
        id: "cos202_138",
        question: "Why must BufferedReader input code be placed inside a try-catch block?",
        options: ["Because it returns null by default.", "Because it may throw an IOException that must be handled.", "Because it only works with integers.", "Because it requires a GUI environment."],
        correct: 1,
        topic: "Input & Output"
    },
    {
        id: "cos202_139",
        question: "Which object is used to display output to the standard console in Java?",
        options: ["System.in", "System.err", "System.out", "Console.out"],
        correct: 2,
        topic: "Input & Output"
    },

    // ── 2D Arrays ───────────────────────────────────────────────────────────
    {
        id: "cos202_140",
        question: "How do you correctly declare a 2D array of integers with 3 rows and 4 columns in Java?",
        options: ["int[3][4] arr = new int[];", "int arr[3][4];", "int[][] arr = new int[3][4];", "int arr = new int[3,4];"],
        correct: 2,
        topic: "Arrays"
    },
    {
        id: "cos202_141",
        question: "In a 2D array, how do you access the element in the second row and third column?",
        options: ["arr[3][2]", "arr[2][3]", "arr[1][2]", "arr[2][1]"],
        correct: 2,
        topic: "Arrays"
    },
    {
        id: "cos202_142",
        question: "Which of the following correctly initializes a 2D array with values?",
        options: ["int[][] b = { 1,2,3,4,5,6 };", "int[][] b = { { 1, 2, 3 }, { 4, 5, 6 } };", "int[][] b = new int{ {1,2},{3,4} };", "int[2][3] b = { {1,2,3},{4,5,6} };"],
        correct: 1,
        topic: "Arrays"
    },
    {
        id: "cos202_143",
        question: "What does array.length return for a 2D array in Java?",
        options: ["The total number of elements.", "The number of columns.", "The number of rows.", "The size of the first element."],
        correct: 2,
        topic: "Arrays"
    },

    // ── Packages ────────────────────────────────────────────────────────────
    {
        id: "cos202_144",
        question: "Which keyword is used to create a package in Java?",
        options: ["import", "namespace", "package", "module"],
        correct: 2,
        topic: "Packages"
    },
    {
        id: "cos202_145",
        question: "Which import syntax gives access to ALL classes in a package?",
        options: ["import package.classname;", "import package.*;", "import package.all;", "include package;"],
        correct: 1,
        topic: "Packages"
    },
    {
        id: "cos202_146",
        question: "What is a subpackage in Java?",
        options: ["A class that extends another class.", "A package defined inside another package.", "A private method inside a class.", "An interface that extends another interface."],
        correct: 1,
        topic: "Packages"
    },
    {
        id: "cos202_147",
        question: "Which of the following is NOT a benefit of using packages in Java?",
        options: ["They categorize classes and interfaces.", "They provide access protection.", "They remove naming conflicts.", "They increase program execution speed."],
        correct: 3,
        topic: "Packages"
    },

    // ── Code Scenario Questions ────────────────────────────────────────────────
    {
        id: "cos202_148",
        question: "What is the output of the following code?\npublic class Test {\n  public static void main(String[] args) {\n    int x = 10;\n    int y = 3;\n    System.out.println(x % y);\n  }\n}",
        options: ["3", "1", "0", "3.33"],
        correct: 1,
        topic: "Code Scenarios"
    },
    {
        id: "cos202_149",
        question: "What is wrong with this code?\npublic class Demo {\n  public static void main(String[] args) {\n    int total;\n    System.out.println(total);\n  }\n}",
        options: ["The class name is wrong.", "main must return an int.", "total is used without being initialized.", "System.out.println cannot print integers."],
        correct: 2,
        topic: "Code Scenarios"
    },
    {
        id: "cos202_150",
        question: "What is the output of this code?\nString a = \"Hello\";\nString b = \"Hello\";\nSystem.out.println(a == b);\nSystem.out.println(a.equals(b));",
        options: ["false\nfalse", "true\ntrue", "false\ntrue", "true\nfalse"],
        correct: 1,
        topic: "Code Scenarios"
    },
    {
        id: "cos202_151",
        question: "What happens when this code runs?\nint[] arr = new int[3];\nSystem.out.println(arr[5]);",
        options: ["Prints 0", "Prints null", "Throws ArrayIndexOutOfBoundsException", "Compiles but prints nothing"],
        correct: 2,
        topic: "Code Scenarios"
    },
    {
        id: "cos202_152",
        question: "What is the output of this code?\nfor(int i = 0; i < 3; i++) {\n  if(i == 1) break;\n  System.out.print(i + \" \");\n}",
        options: ["0 1 2", "0", "1 2", "0 2"],
        correct: 1,
        topic: "Code Scenarios"
    },
    {
        id: "cos202_153",
        question: "What is the output of this code?\nclass Animal {\n  void sound() { System.out.println(\"Animal\"); }\n}\nclass Dog extends Animal {\n  void sound() { System.out.println(\"Woof\"); }\n}\npublic class Test {\n  public static void main(String[] args) {\n    Animal a = new Dog();\n    a.sound();\n  }\n}",
        options: ["Animal", "Woof", "AnimalWoof", "Compile error"],
        correct: 1,
        topic: "Code Scenarios"
    },
    {
        id: "cos202_154",
        question: "What is the output of this code?\nint i = 1;\ndo {\n  System.out.print(i + \" \");\n  i++;\n} while(i < 1);",
        options: ["Nothing is printed", "1", "1 2 3", "Infinite loop"],
        correct: 1,
        topic: "Code Scenarios"
    },
    {
        id: "cos202_155",
        question: "What is wrong with this code?\npublic abstract class Shape {\n  public abstract void draw();\n}\npublic class Circle extends Shape {\n  // draw() not implemented\n}",
        options: ["Abstract classes cannot be extended.", "Circle must implement the draw() method or also be declared abstract.", "The draw() method needs a return type.", "Nothing is wrong."],
        correct: 1,
        topic: "Code Scenarios"
    },
    {
        id: "cos202_156",
        question: "What is the output of this code?\nint x = 5;\nSystem.out.println(x++);\nSystem.out.println(x);",
        options: ["6\n6", "5\n5", "5\n6", "6\n5"],
        correct: 2,
        topic: "Code Scenarios"
    },
    {
        id: "cos202_157",
        question: "What is the output of this code?\ntry {\n  int result = 10 / 0;\n  System.out.println(\"OK\");\n} catch(ArithmeticException e) {\n  System.out.println(\"Error\");\n} finally {\n  System.out.println(\"Done\");\n}",
        options: ["OK\nDone", "Error", "Error\nDone", "Done"],
        correct: 2,
        topic: "Code Scenarios"
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = COS202_QUESTIONS;
}
