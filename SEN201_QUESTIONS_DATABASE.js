// SEN201 - Software Engineering Questions Database

const SEN201_QUESTIONS = [
    {
        question: "Software engineering is mainly concerned with",
        options: ["Data communication", "Building computer hardware", "Computer networking", "Systematic development and maintenance of software"],
        correct: 3,
        topic: "Software Engineering Fundamentals"
    },
    {
        question: "Which of the following best defines software",
        options: ["Internet services", "Programs and associated documentation", "Computer hardware components", "Only computer programs"],
        correct: 1,
        topic: "Software Engineering Fundamentals"
    },
    {
        question: "An attribute of software that makes it easy to modify when changes occur is",
        options: ["Portability", "Reliability", "Maintainability", "Efficiency"],
        correct: 2,
        topic: "Software Quality Attributes"
    },
    {
        question: "Software differs from hardware because software",
        options: ["Is manufactured in factories", "Does not suffer physical deterioration", "Can physically wear out", "Cannot be reused"],
        correct: 1,
        topic: "Software Engineering Fundamentals"
    },
    {
        question: "The main objective of software engineering is to",
        options: ["Avoid testing", "Write complex programs", "Produce quality software within time and budget", "Eliminate documentation"],
        correct: 2,
        topic: "Software Engineering Fundamentals"
    },
    {
        question: "A software process can best be described as",
        options: ["A database system", "A programming language", "A hardware specification", "A sequence of activities involved in software development"],
        correct: 3,
        topic: "Software Process"
    },
    {
        question: "Which of the following is a generic software process activity",
        options: ["Hardware installation", "Internet browsing", "Coding only", "Requirements engineering"],
        correct: 3,
        topic: "Software Process"
    },
    {
        question: "The waterfall model is characterized by",
        options: ["Continuous prototyping", "Parallel development phases", "Sequential phases with little overlap", "Random development stages"],
        correct: 2,
        topic: "Software Development Models"
    },
    {
        question: "One major limitation of the waterfall model is that it",
        options: ["Encourages early delivery", "Eliminates documentation", "Is too flexible", "Does not handle changing requirements well"],
        correct: 3,
        topic: "Software Development Models"
    },
    {
        question: "Incremental development involves",
        options: ["Avoiding testing", "Delivering the system in small usable parts", "Delivering software only once", "Completing all design before coding"],
        correct: 1,
        topic: "Software Development Models"
    },
    {
        question: "Reuse oriented software engineering emphasizes",
        options: ["Ignoring design principles", "Writing new code for every system", "Using existing components and systems", "Avoiding system integration"],
        correct: 2,
        topic: "Software Development Models"
    },
    {
        question: "Requirements engineering focuses mainly on",
        options: ["Managing hardware resources", "Writing source code", "Understanding what users need", "Testing completed systems"],
        correct: 2,
        topic: "Requirements Engineering"
    },
    {
        question: "Functional requirements specify",
        options: ["What the system should do", "Programming tools", "System development cost", "System quality attributes"],
        correct: 0,
        topic: "Requirements Engineering"
    },
    {
        question: "Non functional requirements are concerned with",
        options: ["Algorithms", "Database tables", "System services only", "Quality attributes such as performance and security"],
        correct: 3,
        topic: "Requirements Engineering"
    },
    {
        question: "User requirements are written in a simple form mainly for",
        options: ["Network administrators", "End users and stakeholders", "Software developers only", "Computer hardware engineers"],
        correct: 1,
        topic: "Requirements Engineering"
    },
    {
        question: "System requirements are more detailed because they",
        options: ["Avoid technical details", "Ignore constraints", "Serve as a basis for system design", "Are written in natural language"],
        correct: 2,
        topic: "Requirements Engineering"
    },
    {
        question: "Requirements validation ensures that",
        options: ["Documentation is finished", "Code runs without error", "Requirements reflect what the customer wants", "Testing is complete"],
        correct: 2,
        topic: "Requirements Engineering"
    },
    {
        question: "Requirements management is important because",
        options: ["Changes to requirements must be controlled", "Coding can be avoided", "Testing is unnecessary", "Requirements never change"],
        correct: 0,
        topic: "Requirements Engineering"
    },
    {
        question: "System modeling is mainly used to",
        options: ["Write source code", "Replace system testing", "Reduce project cost", "Visualize and understand system structure and behavior"],
        correct: 3,
        topic: "System Modeling"
    },
    {
        question: "UML stands for",
        options: ["Universal Modeling Logic", "Unified Modeling Language", "Universal Machine Language", "User Modeling Logic"],
        correct: 1,
        topic: "System Modeling"
    },
    {
        question: "Context models show",
        options: ["System boundaries and external interactions", "Memory allocation", "Internal data structures", "System algorithms"],
        correct: 0,
        topic: "System Modeling"
    },
    {
        question: "Interaction models focus on",
        options: ["Database normalization", "Hardware connections", "Communication between users and the system", "Network topology"],
        correct: 2,
        topic: "System Modeling"
    },
    {
        question: "Structural models describe",
        options: ["User interface layout", "Organization of system components", "System performance", "Dynamic system behavior"],
        correct: 1,
        topic: "System Modeling"
    },
    {
        question: "Behavioral models are used to represent",
        options: ["File storage format", "Coding syntax", "Static structure", "Dynamic behavior over time"],
        correct: 3,
        topic: "System Modeling"
    },
    {
        question: "Software architecture refers to",
        options: ["Hardware layout", "Programming speed", "Overall structure and organization of a system", "Program documentation"],
        correct: 2,
        topic: "Software Architecture"
    },
    {
        question: "An architectural pattern provides",
        options: ["Testing tools", "Database schemas", "Source code templates", "A reusable solution to common design problems"],
        correct: 3,
        topic: "Software Architecture"
    },
    {
        question: "Client server architecture involves",
        options: ["Servers requesting services from clients", "Standalone systems only", "Clients requesting services from servers", "Independent systems without communication"],
        correct: 2,
        topic: "Software Architecture"
    },
    {
        question: "A key advantage of layered architecture is",
        options: ["Lack of structure", "Poor performance", "Ease of maintenance and modification", "Increased complexity"],
        correct: 2,
        topic: "Software Architecture"
    },
    {
        question: "Software design focuses on",
        options: ["Running test cases", "Installing software", "Marketing software products", "Deciding how the system will be built"],
        correct: 3,
        topic: "Software Design"
    },
    {
        question: "Object oriented design is based on the concept of",
        options: ["Network protocols", "Objects and classes", "Machine instructions", "Functions only"],
        correct: 1,
        topic: "Software Design"
    },
    {
        question: "Database design is concerned with",
        options: ["User interface layout", "Software testing", "Code compilation", "Organizing data efficiently"],
        correct: 3,
        topic: "Software Design"
    },
    {
        question: "Interface design focuses on",
        options: ["Hardware performance", "Database queries", "Interaction between users and the system", "System memory usage"],
        correct: 2,
        topic: "Software Design"
    },
    {
        question: "Debugging is the process of",
        options: ["Designing systems", "Writing documentation", "Installing software", "Finding and fixing program errors"],
        correct: 3,
        topic: "Software Testing"
    },
    {
        question: "Software testing is carried out mainly to",
        options: ["Replace debugging", "Detect defects in the software", "Speed up coding", "Prove software is error free"],
        correct: 1,
        topic: "Software Testing"
    },
    {
        question: "Verification checks whether",
        options: ["Users are satisfied", "The software is built correctly", "The system meets user needs", "The project is profitable"],
        correct: 1,
        topic: "Software Testing"
    },
    {
        question: "Validation checks whether",
        options: ["Documentation exists", "Code compiles successfully", "The right system is built", "The system is cheap"],
        correct: 2,
        topic: "Software Testing"
    },
    {
        question: "Unit testing focuses on",
        options: ["Individual program components", "User acceptance", "Network performance", "The entire system"],
        correct: 0,
        topic: "Software Testing"
    },
    {
        question: "Integration testing is used to test",
        options: ["Hardware devices", "User manuals", "Combined system components", "Single modules"],
        correct: 2,
        topic: "Software Testing"
    },
    {
        question: "System testing involves",
        options: ["Code inspection only", "Database design", "Testing individual functions", "Testing the complete integrated system"],
        correct: 3,
        topic: "Software Testing"
    },
    {
        question: "Acceptance testing is usually performed by",
        options: ["Network administrators", "Hardware engineers", "Software developers", "End users or clients"],
        correct: 3,
        topic: "Software Testing"
    },
    {
        question: "Test driven development emphasizes",
        options: ["Writing tests before code", "Manual testing only", "Writing code before tests", "Avoiding testing"],
        correct: 0,
        topic: "Software Testing"
    },
    {
        question: "Software evolution refers to",
        options: ["Programming language updates", "Hardware upgrades", "Initial software development", "Changes made after deployment"],
        correct: 3,
        topic: "Software Maintenance"
    },
    {
        question: "Software maintenance includes",
        options: ["Writing source code only", "Modifying and improving software after delivery", "Fixing errors only", "System installation"],
        correct: 1,
        topic: "Software Maintenance"
    },
    {
        question: "Corrective maintenance deals with",
        options: ["Improving performance", "Adding new features", "Fixing discovered faults", "Adapting to new environments"],
        correct: 2,
        topic: "Software Maintenance"
    },
    {
        question: "Adaptive maintenance focuses on",
        options: ["Bug fixing", "Removing system features", "Code refactoring", "Adjusting software to new environments"],
        correct: 3,
        topic: "Software Maintenance"
    },
    {
        question: "Software dependability includes",
        options: ["Programming speed", "User friendliness only", "Cost effectiveness", "Reliability, safety, and security"],
        correct: 3,
        topic: "Software Quality"
    },
    {
        question: "Software reliability refers to the",
        options: ["User interface quality", "Probability of failure free operation", "Size of the program", "Speed of execution"],
        correct: 1,
        topic: "Software Quality"
    },
    {
        question: "Software security is mainly concerned with",
        options: ["Enhancing graphics", "Reducing development time", "Improving performance", "Protecting systems from threats and attacks"],
        correct: 3,
        topic: "Software Quality"
    },
    {
        question: "A software project risk is best described as",
        options: ["A system feature", "A completed task", "A potential problem that may affect the project", "A guaranteed problem"],
        correct: 2,
        topic: "Project Management"
    },
    {
        question: "Software project management mainly involves",
        options: ["Planning, scheduling, and controlling software projects", "Writing source code", "Designing databases", "Running test cases"],
        correct: 0,
        topic: "Project Management"
    },
    {
        question: "Project planning in software engineering is mainly concerned with",
        options: ["Debugging programs", "Writing source code", "Estimating time, cost, and required resources", "Designing interfaces"],
        correct: 2,
        topic: "Project Management"
    },
    {
        question: "A software project schedule shows",
        options: ["Hardware layout", "Timeline of project activities", "Database structure", "Program logic"],
        correct: 1,
        topic: "Project Management"
    },
    {
        question: "A software risk can best be described as",
        options: ["A system requirement", "A problem that has already occurred", "A completed task", "A potential problem that may affect project success"],
        correct: 3,
        topic: "Risk Management"
    },
    {
        question: "Risk identification involves",
        options: ["Writing code early", "Testing completed software", "Ignoring possible problems", "Listing potential risks in a project"],
        correct: 3,
        topic: "Risk Management"
    },
    {
        question: "Risk analysis is concerned with",
        options: ["Assessing likelihood and impact of risks", "Eliminating all risks", "Hiring developers", "Writing documentation"],
        correct: 0,
        topic: "Risk Management"
    },
    {
        question: "Risk planning focuses on",
        options: ["Coding system modules", "Writing test cases", "Developing strategies to handle risks", "Database normalization"],
        correct: 2,
        topic: "Risk Management"
    },
    {
        question: "Risk monitoring involves",
        options: ["Tracking identified risks throughout the project", "Writing new requirements", "Installing software", "Ignoring resolved risks"],
        correct: 0,
        topic: "Risk Management"
    },
    {
        question: "People management in software projects is important because",
        options: ["Documentation replaces teamwork", "Software development is done by teams of people", "Hardware is more important than people", "Software is fully automated"],
        correct: 1,
        topic: "Project Management"
    },
    {
        question: "A major challenge in software project management is",
        options: ["Writing short programs", "Choosing a programming font", "Managing changing requirements", "Hardware availability"],
        correct: 2,
        topic: "Project Management"
    },
    {
        question: "Software evolution becomes necessary mainly because",
        options: ["Software automatically expires", "Hardware stops working", "Users stop using the system", "Business and user needs change over time"],
        correct: 3,
        topic: "Software Maintenance"
    },
    {
        question: "Perfective maintenance involves",
        options: ["Adapting software to new platforms", "Fixing system faults", "Improving system performance or features", "Removing unused code"],
        correct: 2,
        topic: "Software Maintenance"
    },
    {
        question: "Preventive maintenance focuses on",
        options: ["Adding new requirements", "Fixing known bugs", "System installation", "Reducing future system problems"],
        correct: 3,
        topic: "Software Maintenance"
    },
    {
        question: "Refactoring refers to",
        options: ["Removing system documentation", "Writing new requirements", "Changing software behavior", "Improving code structure without altering functionality"],
        correct: 3,
        topic: "Software Maintenance"
    },
    {
        question: "Dependable software is expected to",
        options: ["Have complex code", "Run only on specific hardware", "Be cheap to produce", "Deliver services that can be trusted"],
        correct: 3,
        topic: "Software Quality"
    },
    {
        question: "Software safety is mainly concerned with",
        options: ["Enhancing graphics", "Preventing failures that may cause harm", "Improving execution speed", "Reducing memory usage"],
        correct: 1,
        topic: "Software Quality"
    },
    {
        question: "A system vulnerability refers to",
        options: ["A testing method", "A system feature", "A weakness that can be exploited", "A programming language"],
        correct: 2,
        topic: "Software Security"
    },
    {
        question: "Distributed systems are systems in which",
        options: ["Software runs offline", "Only hardware is distributed", "All components run on one computer", "Components are located on different networked computers"],
        correct: 3,
        topic: "Distributed Systems"
    },
    {
        question: "In a client server system, the client typically",
        options: ["Provides services", "Stores databases only", "Requests services", "Controls the network"],
        correct: 2,
        topic: "Distributed Systems"
    },
    {
        question: "In client server architecture, the server is responsible for",
        options: ["Writing program code", "Managing user interfaces", "Providing services to clients", "Requesting services"],
        correct: 2,
        topic: "Distributed Systems"
    },
    {
        question: "Multitier architecture separates a system into",
        options: ["Single processing units", "Independent random modules", "Hardware layers only", "Presentation, application, and data layers"],
        correct: 3,
        topic: "Software Architecture"
    },
    {
        question: "Peer to peer systems differ from client server systems because",
        options: ["They rely on centralized control", "All nodes can act as both clients and servers", "Only servers exist", "They have no communication"],
        correct: 1,
        topic: "Distributed Systems"
    },
    {
        question: "Service oriented architecture is based on",
        options: ["Hardware components", "Standalone programs", "Independent services communicating over a network", "Programming syntax"],
        correct: 2,
        topic: "Software Architecture"
    },
    {
        question: "Web services allow systems to",
        options: ["Communicate using standard web protocols", "Replace databases", "Run without internet", "Avoid system integration"],
        correct: 0,
        topic: "Distributed Systems"
    },
    {
        question: "Remote procedure call allows a program to",
        options: ["Avoid network communication", "Replace user interfaces", "Execute only local functions", "Invoke procedures on remote systems"],
        correct: 3,
        topic: "Distributed Systems"
    },
    {
        question: "Message based communication differs from RPC because it",
        options: ["Requires no network", "Eliminates services", "Uses explicit message exchange", "Is synchronous only"],
        correct: 2,
        topic: "Distributed Systems"
    },
    {
        question: "Software validation is important because it ensures that",
        options: ["Documentation is complete", "The delivered system meets user needs", "Code compiles correctly", "Testing is skipped"],
        correct: 1,
        topic: "Software Testing"
    },
    {
        question: "Debugging differs from testing because debugging focuses on",
        options: ["Preventing failures", "Writing requirements", "Detecting faults only", "Locating and fixing identified faults"],
        correct: 3,
        topic: "Software Testing"
    },
    {
        question: "A test case is best described as",
        options: ["A design diagram", "A section of code", "A set of inputs and expected outputs", "A project plan"],
        correct: 2,
        topic: "Software Testing"
    },
    {
        question: "Black box testing focuses on",
        options: ["Compiler errors", "Database schemas", "Internal code structure", "System functionality without considering internal design"],
        correct: 3,
        topic: "Software Testing"
    },
    {
        question: "White box testing examines",
        options: ["External behavior only", "User documentation", "Internal logic and code structure", "Network performance"],
        correct: 2,
        topic: "Software Testing"
    },
    {
        question: "Regression testing is carried out to",
        options: ["Replace system testing", "Eliminate debugging", "Test new hardware", "Ensure changes have not introduced new faults"],
        correct: 3,
        topic: "Software Testing"
    },
    {
        question: "Software documentation is important because it",
        options: ["Replaces code", "Eliminates maintenance", "Helps users and developers understand the system", "Increases program size"],
        correct: 2,
        topic: "Documentation"
    },
    {
        question: "User documentation is primarily written for",
        options: ["End users", "Network administrators", "Database engineers", "System designers"],
        correct: 0,
        topic: "Documentation"
    },
    {
        question: "Technical documentation is mainly intended for",
        options: ["Hardware vendors", "Customers only", "Developers and maintainers", "End users"],
        correct: 2,
        topic: "Documentation"
    },
    {
        question: "Configuration management deals with",
        options: ["Writing test cases", "Hardware installation", "Project scheduling", "Controlling changes to software artifacts"],
        correct: 3,
        topic: "Configuration Management"
    },
    {
        question: "Version control systems are used to",
        options: ["Design interfaces", "Compile programs", "Track changes to source code", "Test software"],
        correct: 2,
        topic: "Configuration Management"
    },
    {
        question: "A baseline in configuration management refers to",
        options: ["Final product only", "Approved version of a software artifact", "Hardware specification", "Initial project idea"],
        correct: 1,
        topic: "Configuration Management"
    },
    {
        question: "Software quality assurance focuses on",
        options: ["Ensuring software meets defined standards", "Reducing team size", "Writing code faster", "Eliminating documentation"],
        correct: 0,
        topic: "Software Quality"
    },
    {
        question: "Reviews and inspections are mainly used to",
        options: ["Replace testing", "Execute software", "Increase development time", "Detect defects early"],
        correct: 3,
        topic: "Software Quality"
    },
    {
        question: "A feasibility study is conducted to",
        options: ["Install hardware", "Test completed software", "Assess whether a project is viable", "Write program code"],
        correct: 2,
        topic: "Project Management"
    },
    {
        question: "Economic feasibility focuses on",
        options: ["User satisfaction", "System security", "Cost and benefit analysis", "Technical performance"],
        correct: 2,
        topic: "Project Management"
    },
    {
        question: "Technical feasibility examines whether",
        options: ["Required technology is available", "The system is cheap", "Documentation exists", "Users like the system"],
        correct: 0,
        topic: "Project Management"
    },
    {
        question: "Operational feasibility considers",
        options: ["Hardware cost", "Network speed", "Code structure", "Whether users can operate the system effectively"],
        correct: 3,
        topic: "Project Management"
    },
    {
        question: "Software reuse improves productivity because it",
        options: ["Avoids testing", "Increases project risk", "Eliminates documentation", "Reduces development effort"],
        correct: 3,
        topic: "Software Development Models"
    },
    {
        question: "A prototype is mainly used to",
        options: ["Replace the final system", "Eliminate coding", "Clarify requirements and design decisions", "Reduce documentation"],
        correct: 2,
        topic: "Software Development Models"
    },
    {
        question: "Throwaway prototyping means the prototype is",
        options: ["Deployed to users", "Used as final product", "Continuously improved", "Discarded after requirements are understood"],
        correct: 3,
        topic: "Software Development Models"
    },
    {
        question: "Evolutionary prototyping involves",
        options: ["Eliminating design", "Avoiding user feedback", "Gradually refining the prototype into the final system", "Discarding prototypes"],
        correct: 2,
        topic: "Software Development Models"
    },
    {
        question: "A major benefit of prototyping is that it",
        options: ["Avoids testing", "Increases project cost", "Helps users clarify their requirements", "Eliminates maintenance"],
        correct: 2,
        topic: "Software Development Models"
    },
    {
        question: "Overall, software engineering aims to produce software that is",
        options: ["Large in size", "Written in one programming language", "Complex and expensive", "Reliable, maintainable, and meets user needs"],
        correct: 3,
        topic: "Software Engineering Fundamentals"
    },
    {
        question: "Software project management ensures that software is developed",
        options: ["Without documentation", "With focus on hardware only", "According to plan, time, and budget", "Without user involvement"],
        correct: 2,
        topic: "Project Management"
    },
    {
        question: "Software process improvement aims to",
        options: ["Reduce documentation", "Improve development efficiency and quality", "Eliminate testing", "Increase system complexity"],
        correct: 1,
        topic: "Software Process"
    },
    {
        question: "A legacy system is best described as",
        options: ["Newly developed software", "Outdated but still in use system", "Experimental prototype", "Temporary program"],
        correct: 1,
        topic: "Software Maintenance"
    },
    {
        question: "Software productivity is mainly measured by",
        options: ["Number of computers used", "Output relative to effort", "Team size only", "Programming language"],
        correct: 1,
        topic: "Project Management"
    },
    {
        question: "Software engineering standards help to",
        options: ["Reduce system reliability", "Ensure consistency and quality", "Replace developers", "Eliminate maintenance"],
        correct: 1,
        topic: "Software Quality"
    },
    {
        question: "Agile development emphasizes",
        options: ["Rigid planning", "Customer collaboration and adaptability", "Documentation over software", "One-time delivery"],
        correct: 1,
        topic: "Software Development Models"
    },
    {
        question: "The spiral model combines",
        options: ["Testing and maintenance", "Iteration and risk analysis", "Design and marketing", "Coding and debugging"],
        correct: 1,
        topic: "Software Development Models"
    },
    {
        question: "Process iteration means",
        options: ["Performing activities once", "Repeating activities to improve the system", "Avoiding validation", "Delivering software without review"],
        correct: 1,
        topic: "Software Process"
    },
    {
        question: "Continuous integration requires",
        options: ["Rare code updates", "Frequent merging and testing of code", "No version control", "Manual deployment only"],
        correct: 1,
        topic: "Software Development Models"
    },
    {
        question: "Requirements traceability helps to",
        options: ["Remove documentation", "Track requirement origins and changes", "Reduce system features", "Avoid validation"],
        correct: 1,
        topic: "Requirements Engineering"
    },
    {
        question: "Ambiguous requirements are problematic because they",
        options: ["Improve flexibility", "Cause misunderstandings", "Reduce cost", "Simplify testing"],
        correct: 1,
        topic: "Requirements Engineering"
    },
    {
        question: "A feasibility study evaluates",
        options: ["Coding standards", "Technical, economic, and operational viability", "Programming syntax", "Database structure"],
        correct: 1,
        topic: "Project Management"
    },
    {
        question: "Stakeholders in software projects include",
        options: ["Only programmers", "Anyone affected by the system", "Hardware devices", "Only managers"],
        correct: 1,
        topic: "Project Management"
    },
    {
        question: "High cohesion in design means",
        options: ["Components perform unrelated tasks", "Components are strongly related internally", "No interaction exists", "Modules are duplicated"],
        correct: 1,
        topic: "Software Design"
    },
    {
        question: "Low coupling between modules results in",
        options: ["Strong dependency", "Easier maintenance and change", "Increased complexity", "Reduced reusability"],
        correct: 1,
        topic: "Software Design"
    },
    {
        question: "Architectural design decisions are made early because they",
        options: ["Have little impact", "Are hard to change later", "Are optional", "Only affect testing"],
        correct: 1,
        topic: "Software Architecture"
    },
    {
        question: "Design patterns provide",
        options: ["Hardware solutions", "Proven solutions to recurring design problems", "Programming languages", "Testing tools"],
        correct: 1,
        topic: "Software Design"
    },
    {
        question: "Static testing involves",
        options: ["Executing the program", "Examining code without running it", "User acceptance", "System deployment"],
        correct: 1,
        topic: "Software Testing"
    },
    {
        question: "Dynamic testing requires",
        options: ["Code inspection only", "Program execution", "Documentation review", "Risk analysis"],
        correct: 1,
        topic: "Software Testing"
    },
    {
        question: "A defect is",
        options: ["A user manual", "A deviation from expected behavior", "A system requirement", "A design diagram"],
        correct: 1,
        topic: "Software Testing"
    },
    {
        question: "Quality control focuses on",
        options: ["Detecting defects in products", "Planning schedules", "Hiring staff", "Risk identification"],
        correct: 0,
        topic: "Software Quality"
    },
    {
        question: "Software obsolescence occurs when",
        options: ["Software improves automatically", "Technology changes make software outdated", "Testing is completed", "Documentation increases"],
        correct: 1,
        topic: "Software Maintenance"
    },
    {
        question: "Reverse engineering is used to",
        options: ["Destroy systems", "Understand system design from code", "Avoid maintenance", "Create new requirements"],
        correct: 1,
        topic: "Software Maintenance"
    },
    {
        question: "Software portability refers to",
        options: ["Execution speed", "Ability to run on different environments", "Memory usage", "Security level"],
        correct: 1,
        topic: "Software Quality Attributes"
    },
    {
        question: "Effort estimation in software projects predicts",
        options: ["System failures", "Required work and resources", "User satisfaction", "Hardware cost only"],
        correct: 1,
        topic: "Project Management"
    },
    {
        question: "A milestone in project management represents",
        options: ["A completed development stage", "A coding error", "A system failure", "A testing tool"],
        correct: 0,
        topic: "Project Management"
    },
    {
        question: "Software configuration item refers to",
        options: ["Hardware device", "Any component managed under configuration control", "Programming language", "Test result"],
        correct: 1,
        topic: "Configuration Management"
    },
    {
        question: "Change control ensures that",
        options: ["All changes are accepted automatically", "Changes are evaluated and approved systematically", "Software is deleted", "Testing is skipped"],
        correct: 1,
        topic: "Configuration Management"
    },
    {
        question: "Software quality attributes include",
        options: ["Speed only", "Reliability, usability, efficiency", "Cost only", "Documentation only"],
        correct: 1,
        topic: "Software Quality"
    },
    {
        question: "Reliability growth occurs when",
        options: ["Failures increase", "Defects are removed over time", "Testing stops", "Maintenance ends"],
        correct: 1,
        topic: "Software Quality"
    },
    {
        question: "Validation activities include",
        options: ["Unit testing", "User evaluation", "Code compilation", "Hardware installation"],
        correct: 1,
        topic: "Software Testing"
    },
    {
        question: "Verification activities include",
        options: ["Requirement review", "User training", "Marketing", "Sales"],
        correct: 0,
        topic: "Software Testing"
    },
    {
        question: "Software lifecycle models describe",
        options: ["Hardware assembly", "Development stages of software", "Network protocols", "Programming syntax"],
        correct: 1,
        topic: "Software Process"
    },
    {
        question: "Component based development promotes",
        options: ["Code duplication", "Reusability and modularity", "System failure", "Reduced maintainability"],
        correct: 1,
        topic: "Software Development Models"
    },
    {
        question: "Interface specification defines",
        options: ["Internal algorithm", "Communication between components", "Hardware speed", "Program cost"],
        correct: 1,
        topic: "Software Design"
    },
    {
        question: "Coupling refers to",
        options: ["Internal module strength", "Interdependence between modules", "System speed", "Database size"],
        correct: 1,
        topic: "Software Design"
    },
    {
        question: "Cohesion refers to",
        options: ["Module independence", "Relatedness of elements within a module", "Network bandwidth", "System reliability"],
        correct: 1,
        topic: "Software Design"
    },
    {
        question: "Software deployment means",
        options: ["Writing code", "Delivering and installing software for use", "Testing modules", "Designing architecture"],
        correct: 1,
        topic: "Software Process"
    },
    {
        question: "Acceptance criteria define",
        options: ["Programming language", "Conditions for system approval", "Network speed", "Memory size"],
        correct: 1,
        topic: "Requirements Engineering"
    },
    {
        question: "Test environment includes",
        options: ["Only hardware", "Tools, data, and setup for testing", "User manual", "Project schedule"],
        correct: 1,
        topic: "Software Testing"
    },
    {
        question: "Software metrics are used to",
        options: ["Replace testing", "Measure software attributes", "Increase cost", "Reduce documentation"],
        correct: 1,
        topic: "Software Quality"
    },
    {
        question: "Maintainability improves when",
        options: ["Code is complex", "Documentation is clear", "Coupling is high", "Cohesion is low"],
        correct: 1,
        topic: "Software Quality Attributes"
    },
    {
        question: "Risk mitigation means",
        options: ["Ignoring risk", "Reducing risk impact or likelihood", "Creating new risks", "Eliminating planning"],
        correct: 1,
        topic: "Risk Management"
    },
    {
        question: "Software review is conducted to",
        options: ["Execute software", "Evaluate work products", "Replace testing", "Install hardware"],
        correct: 1,
        topic: "Software Quality"
    },
    {
        question: "Requirements specification should be",
        options: ["Ambiguous", "Clear and consistent", "Incomplete", "Optional"],
        correct: 1,
        topic: "Requirements Engineering"
    },
    {
        question: "Software scalability refers to",
        options: ["Code readability", "Ability to handle increased workload", "Security level", "Memory type"],
        correct: 1,
        topic: "Software Quality Attributes"
    },
    {
        question: "System integration combines",
        options: ["Separate modules into a whole system", "Documentation files", "Hardware components only", "Test cases"],
        correct: 0,
        topic: "Software Testing"
    },
    {
        question: "Maintenance cost is typically",
        options: ["Lowest phase cost", "Highest lifecycle cost", "Equal to development", "Zero"],
        correct: 1,
        topic: "Software Maintenance"
    },
    {
        question: "Software usability refers to",
        options: ["System speed", "Ease of use for users", "Memory capacity", "Network type"],
        correct: 1,
        topic: "Software Quality Attributes"
    },
    {
        question: "Quality assurance is proactive because it",
        options: ["Detects defects only", "Prevents defects through process improvement", "Removes documentation", "Eliminates testing"],
        correct: 1,
        topic: "Software Quality"
    },
    {
        question: "Successful software projects require",
        options: ["Only coding skill", "Effective process, people, and technology", "No planning", "Hardware focus only"],
        correct: 1,
        topic: "Project Management"
    }
];

// Export for use in exam system
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SEN201_QUESTIONS;
}
