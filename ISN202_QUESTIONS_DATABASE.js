// INS202 - Human-Computer Interaction Questions Database

const ISN202_QUESTIONS = [

    // ── MODULE 1: HISTORY, GOALS, AND INTERACTION TECHNIQUES ─────────────────

    {
        id: "isn202_001",
        question: "Which of the following is explicitly stated as a primary goal of Human-Computer Interaction (HCI) studies?",
        options: [
            "To maximize hardware manufacturing speeds",
            "To develop high-level encryption algorithms",
            "To produce usable and safe systems, as well as functional systems",
            "To completely eliminate the need for command-line interfaces"
        ],
        correct: 2,
        topic: "HCI Goals and Introduction"
    },
    {
        id: "isn202_002",
        question: "When discussing interaction techniques in HCI, which perspective focuses on the physical inputs, device behavior, and the computing mechanics of the interface?",
        options: [
            "The User View",
            "The Computing Perspective",
            "The Conceptual View",
            "The Heuristic View"
        ],
        correct: 1,
        topic: "Interaction Techniques"
    },
    {
        id: "isn202_003",
        question: "From the three views of interaction techniques taught in INS202, which view is concerned with how the user perceives, understands, and mentally models the system?",
        options: [
            "The Conceptual View",
            "The Hardware View",
            "The Computing Perspective",
            "The Development Lifecycle View"
        ],
        correct: 0,
        topic: "Interaction Techniques"
    },

    // ── MODULE 2: HCI IN THE SOFTWARE PROCESS ────────────────────────────────

    {
        id: "isn202_004",
        question: "In the standard software life cycle activities outlined in your material, what stage comes immediately after Requirements Specification and focuses on establishing the high-level structural framework of the system?",
        options: [
            "Detailed Design",
            "Coding and Unit Testing",
            "Architectural Design",
            "Maintenance"
        ],
        correct: 2,
        topic: "HCI in the Software Process"
    },
    {
        id: "isn202_005",
        question: "Why is \"Iteration and Prototyping\" considered a structural necessity when integrating HCI design principles into the Software Life Cycle?",
        options: [
            "Because software engineers cannot expect to get interactive designs perfectly right the first time",
            "Because it reduces the number of lines of code required for compilation",
            "Because it removes the need to conduct any final integration and unit testing",
            "Because it allows a system to be deployed without an architectural design stage"
        ],
        correct: 0,
        topic: "HCI in the Software Process"
    },

    // ── MODULE 3: USER INTERFACE DESIGN RULES & PRINCIPLES ───────────────────

    {
        id: "isn202_006",
        question: "Ben Shneiderman's \"Eight Golden Rules of Interface Design\" is widely used to guide user interface creation. Which of the following is one of these golden rules?",
        options: [
            "Minimize the use of graphical icons",
            "Strive for consistency",
            "Avoid giving informative feedback to speed up operations",
            "Use complex navigation paths to challenge user cognition"
        ],
        correct: 1,
        topic: "UI Design Rules and Principles"
    },
    {
        id: "isn202_007",
        question: "Donald Norman introduced \"Seven Principles for Transforming Difficult Tasks into Simple Ones\". What is a core concept emphasized in Norman's design principles?",
        options: [
            "Hiding system state visibility to keep the screen uncluttered",
            "Making things visible, including the mapping between actions and outcomes",
            "Forcing users to memorize all complex operational paths",
            "Designing purely for the computing perspective without a user view"
        ],
        correct: 1,
        topic: "UI Design Rules and Principles"
    },
    {
        id: "isn202_008",
        question: "Bill Gaver was noted in the course references as probably the first person to apply a particular ecological psychology concept to Human-Computer Interaction. Which concept is this?",
        options: [
            "Cognitive Dissonance",
            "Software Defect Density",
            "Affordances",
            "Heuristic Evaluation"
        ],
        correct: 2,
        topic: "UI Design Rules and Principles"
    },

    // ── MODULE 4: EVALUATION TECHNIQUES ──────────────────────────────────────

    {
        id: "isn202_009",
        question: "What is the primary purpose of conducting a \"Heuristic Evaluation\" during the interface design process?",
        options: [
            "To calculate the Net Present Value (NPV) of the software development team",
            "To identify usability problems by evaluating the interface against established design rules or principles",
            "To run automated stress tests on backend server databases",
            "To automatically generate lines of code using structural templates"
        ],
        correct: 1,
        topic: "Evaluation Techniques"
    },
    {
        id: "isn202_010",
        question: "According to the textbook reference authored by J. Preece, Y. Rogers, and H. Sharp (Interaction Design: Beyond Human-Computer Interaction), what is the textbook's especially strong focus?",
        options: [
            "Assembly language programming",
            "Evaluation in interaction design",
            "Hardware logic circuit design",
            "Database normalization techniques"
        ],
        correct: 1,
        topic: "Evaluation Techniques"
    },

    // ── MODULE 5: INTERACTION STYLES AND TECHNIQUES ──────────────────────────

    {
        id: "isn202_011",
        question: "Which interaction style is characterized by the user directly manipulating visual representations of objects on the screen (such as dragging a file into a folder) rather than typing commands?",
        options: [
            "Command Line Interface (CLI)",
            "Direct Manipulation / WIMP (Windows, Icons, Menus, Pointer)",
            "Question and Answer Dialog",
            "Form-filling Interface"
        ],
        correct: 1,
        topic: "Interaction Styles"
    },
    {
        id: "isn202_012",
        question: "From the three distinct views of interaction techniques discussed in INS202, which view specifically represents the user's personal perspective, focus, and subjective experience while operating a system?",
        options: [
            "The System Perspective",
            "The User View",
            "The Computing Perspective",
            "The Architectural View"
        ],
        correct: 1,
        topic: "Interaction Styles"
    },
    {
        id: "isn202_013",
        question: "In a Command Line Interface (CLI) interaction style, what is considered the primary drawback for an inexperienced or novice user?",
        options: [
            "It consumes too much system RAM during execution",
            "It requires a high cognitive load to memorize syntax and specific command rules",
            "It relies heavily on mouse coordinates and precise pointing",
            "It does not allow the system to perform functional operations"
        ],
        correct: 1,
        topic: "Interaction Styles"
    },

    // ── MODULE 6: REASONING BEHIND CHOSEN INTERACTION DESIGN ──────────────────

    {
        id: "isn202_014",
        question: "According to the \"Interactive Systems and the Software Life Cycle\" section, what is the main reason why interactive software design must move from \"what you want\" to \"how to do it\"?",
        options: [
            "To ensure the code compiles in fewer seconds",
            "To transform abstract user requirements into concrete, executable interaction steps",
            "To completely avoid using architectural design models",
            "To shift financial project budgeting from managers to developers"
        ],
        correct: 1,
        topic: "HCI in the Software Process"
    },
    {
        id: "isn202_015",
        question: "When an interaction designer works on mapping out how a user moves from an internal mental goal to physical action sequences, which psychological barrier (popularized by Norman) are they actively trying to minimize?",
        options: [
            "The Gulf of Execution",
            "Epistemic Accountability",
            "Cognitive Dissonance",
            "The Gulf of Evaluation"
        ],
        correct: 0,
        topic: "UI Design Rules and Principles"
    },

    // ── MODULE 7: ADVANCED DESIGN GUIDELINES & PARADIGMS ────────────────────

    {
        id: "isn202_016",
        question: "One of Ben Shneiderman's Eight Golden Rules is \"Permit easy reversal of actions.\" Why is this rule critical for user interface safety?",
        options: [
            "It allows the system to run on older operating system hardware",
            "It relieves anxiety and encourages exploration since the user knows errors can be undone",
            "It automatically fixes defect density in the underlying source code",
            "It replaces the need to perform unit testing during development"
        ],
        correct: 1,
        topic: "UI Design Rules and Principles"
    },
    {
        id: "isn202_017",
        question: "In the context of user interface design rules, what does the principle of \"visibility of system status\" ideally imply?",
        options: [
            "Users should always see the exact backend Java source code executing",
            "The system should always keep users informed about what is going on through appropriate feedback within a reasonable time",
            "The interface should obscure system updates to keep things minimal",
            "The system must only show updates when a critical failure occurs"
        ],
        correct: 1,
        topic: "UI Design Rules and Principles"
    },

    // ── MODULE 8: SCENARIOS AND TEXTBOOK METRICS ────────────────────────────

    {
        id: "isn202_018",
        question: "Your INS202 reference section highlights a special issue of Interacting with Computers (Vol. 13, No. 1, 2000) edited by John Carroll. What specific interaction design methodology is this entire issue dedicated to?",
        options: [
            "Object-Oriented Database Normalization",
            "Scenario-based system development",
            "Automated Command Line Scripting",
            "High-level Network Topology Design"
        ],
        correct: 1,
        topic: "HCI References and History"
    },
    {
        id: "isn202_019",
        question: "In the publication \"Affordances: clarifying and evolving a concept\" referenced in your study guide, whose popularization of the word \"affordance\" is specifically focused on?",
        options: [
            "Ben Shneiderman",
            "Donald Norman",
            "J. Preece",
            "E. Tufte"
        ],
        correct: 1,
        topic: "UI Design Rules and Principles"
    },
    {
        id: "isn202_020",
        question: "If an interface designer needs to study excellent historical examples, visual charts, and rules regarding the effective \"graphical presentation\" of complex quantitative data, which referenced author's books are highly recommended?",
        options: [
            "J. Carroll",
            "E. Tufte",
            "W. Ho",
            "Y. Rogers"
        ],
        correct: 1,
        topic: "HCI References and History"
    },

    // ── MODULE 9: INTERACTIVE PROTOTYPING & DESIGN STAGES ────────────────────

    {
        id: "isn202_021",
        question: "In interactive system design, what is a \"Low-fidelity Prototype\" typically used for?",
        options: [
            "Providing the final compiled production code for deployment",
            "Exploring broad design concepts and user flows cheaply and quickly using paper or simple sketches",
            "Running final automated stress tests on the database architecture",
            "Measuring the precise execution timing of internal computing interactions"
        ],
        correct: 1,
        topic: "Prototyping and Design Stages"
    },
    {
        id: "isn202_022",
        question: "What is the main risk associated with a \"High-fidelity Prototype\" during the requirements refinement stage of the software life cycle?",
        options: [
            "It cannot simulate realistic user interactions.",
            "It provides no information regarding the system's look and feel.",
            "Users and stakeholders may mistake it for the fully functional final system and ignore underlying logic flaws.",
            "It entirely eliminates the need for any subsequent detailed design or unit testing."
        ],
        correct: 2,
        topic: "Prototyping and Design Stages"
    },
    {
        id: "isn202_023",
        question: "According to the \"Activities in the Life Cycle\" outline, which stage involves refining the high-level structural framework down to specific algorithms, data structures, and concrete interface behaviors?",
        options: [
            "Requirements Specification",
            "Maintenance",
            "Detailed Design",
            "Architectural Design"
        ],
        correct: 2,
        topic: "HCI in the Software Process"
    },

    // ── MODULE 10: HUMAN FACTORS & COGNITIVE HEURISTICS ──────────────────────

    {
        id: "isn202_024",
        question: "Ben Shneiderman's rule \"Reduce short-term memory load\" directly targets which human limitation described in HCI studies?",
        options: [
            "Humans can only track 20-30 complex command vocabularies simultaneously.",
            "The limited processing capacity of human working memory, which can generally hold only a few pieces of information at once.",
            "The inability of human vision to distinguish between divergent screen color schemas.",
            "Human physical typing limits under continuous Command Line Interfaces (CLIs)."
        ],
        correct: 1,
        topic: "UI Design Rules and Principles"
    },
    {
        id: "isn202_025",
        question: "When an interface design provides an immediate change in visual appearance or audio feedback the moment a button is pressed, which of Shneiderman's Eight Golden Rules is it satisfying?",
        options: [
            "Strive for consistency",
            "Offer informative feedback",
            "Support internal locus of control",
            "Prevent errors"
        ],
        correct: 1,
        topic: "UI Design Rules and Principles"
    },
    {
        id: "isn202_026",
        question: "Donald Norman's principle of \"Exploiting the power of constraints\" is used in user interface design to achieve what?",
        options: [
            "To make the interface as confusing as possible to increase user engagement time",
            "To prevent the user from making errors by physically or logically limiting the actions they can perform",
            "To limit the total amount of RAM the application can use during a computing session",
            "To restrict the design team to a single software development model"
        ],
        correct: 1,
        topic: "UI Design Rules and Principles"
    },

    // ── MODULE 11: EVALUATION & USER FEEDBACK METHODS ───────────────────────

    {
        id: "isn202_027",
        question: "In the context of the user views and system evaluation discussed in your course notes, at what point should evaluation ideally be integrated into the interactive software design lifecycle?",
        options: [
            "Only after the maintenance phase has completely concluded",
            "Continuously throughout the entire design and development cycle via iterative prototyping",
            "Exclusively during the compilation and coding phase by the development team",
            "Only if the system completely fails to meet basic functionality requirements"
        ],
        correct: 1,
        topic: "Evaluation Techniques"
    },
    {
        id: "isn202_028",
        question: "Which evaluation method relies on bringing actual representative users into a controlled laboratory setting to observe them executing predefined tasks using the software interface?",
        options: [
            "Heuristic Evaluation",
            "Architectural Verification",
            "Usability Testing / Empirical Evaluation",
            "Code Unit Review"
        ],
        correct: 2,
        topic: "Evaluation Techniques"
    },

    // ── MODULE 13: THE SEVEN PRINCIPLES OF DONALD NORMAN ────────────────────

    {
        id: "isn202_031",
        question: "According to Donald Norman's principles for transforming difficult tasks into simple ones, what should a designer do regarding the visibility of options?",
        options: [
            "Hide advanced features entirely so users do not accidentally click them",
            "Make things visible, including the conceptual model of the system and alternative actions",
            "Keep the interface blank and rely entirely on tooltips to explain features",
            "Use complex keyboard shortcuts instead of visible icons to save screen space"
        ],
        correct: 1,
        topic: "UI Design Rules and Principles"
    },
    {
        id: "isn202_032",
        question: "What does Donald Norman mean by the principle \"Get the mappings right\"?",
        options: [
            "Ensure that database schemas map correctly to backend server entities",
            "Ensure that the relationship between user actions and the resulting system changes is natural and intuitive",
            "Draw precise geographic map routes for location-based software applications",
            "Coordinate network data packets as they travel across hardware layers"
        ],
        correct: 1,
        topic: "UI Design Rules and Principles"
    },
    {
        id: "isn202_033",
        question: "Under Donald Norman's design principles, how should a system handle human error?",
        options: [
            "The system should block the user's access immediately and log them out of the session",
            "Design for error by assuming errors will happen, and make it easy for users to recover",
            "Display a generic system error code without explaining what went wrong",
            "Force users to reinstall the application if they execute an invalid command sequence"
        ],
        correct: 1,
        topic: "UI Design Rules and Principles"
    },

    // ── MODULE 14: INTERACTIVE SYSTEM PARADIGMS & HISTORY ────────────────────

    {
        id: "isn202_034",
        question: "Which historical computing paradigm shift marks the transition from batch processing to human-centered interactive computing?",
        options: [
            "High-Level Language Compilation",
            "Time-sharing and Personal Computing",
            "Relational Database Management Systems",
            "Distributed Network Packet Switching"
        ],
        correct: 1,
        topic: "HCI Goals and Introduction"
    },
    {
        id: "isn202_035",
        question: "What is the primary benefit of using \"Menus\" within a WIMP interface compared to requiring users to type commands?",
        options: [
            "Menus allow programs to compile at much faster speeds",
            "Menus rely on recognition rather than recall, lowering the user's mental workload",
            "Menus eliminate the need to build a system conceptual model",
            "Menus allow an interactive system to run without any underlying logic structures"
        ],
        correct: 1,
        topic: "Interaction Styles"
    },

    // ── MODULE 15: THE LIFE CYCLE REQUIREMENTS & SPECIFICATIONS ──────────────

    {
        id: "isn202_036",
        question: "In the activities of the software life cycle outlined in INS202, what is the primary objective of the \"Requirements Specification\" stage?",
        options: [
            "Writing out the initial algorithms using high-level programming structures",
            "Gathering and documenting exactly what the customer and users expect the system to do",
            "Fixing runtime software defects before deploying the application to production",
            "Choosing the specific input and output hardware devices for the user interface"
        ],
        correct: 1,
        topic: "HCI in the Software Process"
    },
    {
        id: "isn202_037",
        question: "Why does the INS202 material classify \"Maintenance\" as a distinct part of the software life cycle activities?",
        options: [
            "Because it is the stage where the entire initial architectural framework is written",
            "Because it involves correcting errors, adapting the system to new requirements, and making updates after the system is deployed",
            "Because it completely replaces the iterative prototyping phase of development",
            "Because it is performed exclusively by the user without any input from development teams"
        ],
        correct: 1,
        topic: "HCI in the Software Process"
    },

    // ── MODULE 16: TEXTBOOK REFERENCES & RESEARCH CRITERIA ───────────────────

    {
        id: "isn202_038",
        question: "According to the reference section notes, the book Designing Visual Interfaces: Communication Oriented Techniques by Kevin Mullet and Darrel Sano is explicitly praised for focusing on which aspect of interface design?",
        options: [
            "Advanced mathematical equations for database management",
            "Applying practical visual design principles to user interface displays",
            "Designing assembly language compilers for operating systems",
            "Calculating financial Return on Investment (ROI) variables"
        ],
        correct: 1,
        topic: "HCI References and History"
    },
    {
        id: "isn202_039",
        question: "Your course reading notes a paper by Joanna McGrenere and Wayne Ho published in the Proceedings of the Graphics Interface Conference (2000). What core design concept does this paper aim to clarify and evolve?",
        options: [
            "Heuristic Evaluation Methods",
            "Affordances",
            "Defect Density Metrics",
            "Critical Path Network Pass Analysis"
        ],
        correct: 1,
        topic: "UI Design Rules and Principles"
    },
    {
        id: "isn202_040",
        question: "Edward Tufte's referenced texts, such as The Visual Display of Quantitative Information, argue that excellent graphical presentation of data should prioritize which of the following?",
        options: [
            "Filling the screen with complex, decorative graphics to entertain the user",
            "Making complex data points clear, precise, and easy to interpret visually",
            "Hiding quantitative variables until the user requests them via a command line",
            "Prioritizing the computing view over the visual representation view"
        ],
        correct: 1,
        topic: "HCI References and History"
    },

    // ── MODULE 17: USABILITY PRINCIPLES & GOALS ───────────────────────────────

    {
        id: "isn202_041",
        question: "In HCI, the principle of \"Learnability\" is best defined as:",
        options: [
            "The speed at which a master programmer can write system code",
            "The ease with which new users can interact with a system effectively and achieve maximum performance",
            "The total number of hours required to read a software system manual",
            "The capability of a system to automatically fix broken database links"
        ],
        correct: 1,
        topic: "Usability Principles"
    },
    {
        id: "isn202_042",
        question: "Which usability principle is concerned with a system's ability to support user interaction across a wide variety of tasks, ensuring the system can adapt to different user preferences or input styles?",
        options: [
            "Recoverability",
            "Synthesizability",
            "Flexibility",
            "Familiarity"
        ],
        correct: 2,
        topic: "Usability Principles"
    },
    {
        id: "isn202_043",
        question: "When an interface designer ensures that a user's previous experience with real-world systems or other software applications maps naturally to a new interface, which learnability principle are they using?",
        options: [
            "Generalizability",
            "Familiarity",
            "Multi-threading",
            "Task Conformance"
        ],
        correct: 1,
        topic: "Usability Principles"
    },

    // ── MODULE 18: USER CATEGORIES & INTERACTION FLOWS ───────────────────────

    {
        id: "isn202_044",
        question: "Interface designs for \"Novice Users\" should primarily focus on which of the following characteristics?",
        options: [
            "Maximizing the use of rapid, complex command-line shortcuts",
            "Providing clear layouts, high visibility, and heavy reliance on recognition over recall",
            "Eliminating error messages and feedback dialogues to speed up processing",
            "Restricting the interface to plain, unformatted text files"
        ],
        correct: 1,
        topic: "User Categories"
    },
    {
        id: "isn202_045",
        question: "In contrast to novice users, \"Expert or Power Users\" generally prefer user interfaces that prioritize:",
        options: [
            "Lengthy step-by-step wizards for basic tasks",
            "Large, colorful icons that take up significant screen space",
            "Efficiency, speed, and customizable shortcuts like hotkeys or macros",
            "High cognitive friction to keep them engaged"
        ],
        correct: 2,
        topic: "User Categories"
    },

    // ── MODULE 19: DIALOGUE AND SCREEN DESIGNS ───────────────────────────────

    {
        id: "isn202_046",
        question: "In user interface layout design, what does the principle of \"Grouping\" refer to?",
        options: [
            "Collecting multiple software developers into a unified coding team",
            "Organizing related interface elements (like fields or buttons) visually close to one another using whitespace or borders",
            "Merging different database tables into a single unnormalized view",
            "Compiling distinct source code files simultaneously"
        ],
        correct: 1,
        topic: "Screen Design"
    },
    {
        id: "isn202_047",
        question: "Why is maintaining a balanced \"Visual Hierarchy\" critical when designing a data-dense interface screen?",
        options: [
            "It prevents the system from running out of processing memory",
            "It guides the user's eye naturally to the most critical information or actions first",
            "It reduces the total number of lines of text in the database schema",
            "It ensures the application compiles without formatting warnings"
        ],
        correct: 1,
        topic: "Screen Design"
    },

    // ── MODULE 20: SYNTHESIS OF LITERATURE & METHODOLOGIES ──────────────────

    {
        id: "isn202_048",
        question: "According to the reference section notes in your course document, what makes the textbook by J. Preece, Y. Rogers, and H. Sharp (Interaction Design: Beyond Human-Computer Interaction) a staple in HCI courses?",
        options: [
            "Its exclusive focus on writing backend assembly code",
            "Its modern, comprehensive approach with a strong focus on evaluation in interaction design",
            "Its detailed mathematical proofs for database indexing",
            "Its guide to building custom computing hardware components"
        ],
        correct: 1,
        topic: "HCI References and History"
    },
    {
        id: "isn202_049",
        question: "When an interface designer applies the concept of \"Affordances\" to an on-screen button, what are they trying to achieve?",
        options: [
            "Making the button look three-dimensional or clickable so its physical appearance suggests how to use it",
            "Ensuring the button takes up minimal storage space in the database",
            "Forcing the user to enter a specific command line keyword to activate it",
            "Hiding the button until a specific backend function finishes running"
        ],
        correct: 0,
        topic: "UI Design Rules and Principles"
    },
    {
        id: "isn202_050",
        question: "In the software lifecycle activities taught in INS202, the iterative nature of design and evaluation means that the process is:",
        options: [
            "Strictly linear, meaning you can never return to a previous stage once it is finished",
            "Cyclical, allowing designers to jump back and refine requirements or designs based on user testing",
            "Handled entirely by automated compiler scripts without human intervention",
            "Completed only when the system maintenance phase is permanently disabled"
        ],
        correct: 1,
        topic: "HCI in the Software Process"
    },

    // ── MODULE 12: GLOSSARY AND METRIC RECAP ────────────────────────────────

    {
        id: "isn202_029",
        question: "In Human-Computer Interaction, what does the term \"WIMP\" stand for?",
        options: [
            "Windows, Icons, Menus, Pointer",
            "Wireframes, Interaction, Metrics, Processing",
            "Windows, Integration, Models, Prototyping",
            "Working-memory, Interfaces, Mechanics, Programming"
        ],
        correct: 0,
        topic: "HCI Goals and Introduction"
    },
    {
        id: "isn202_030",
        question: "According to the referenced publication by J. Carroll (Making Use: Scenario-Based Design of Human-Computer Interactions), what is a \"scenario\" in interactive design?",
        options: [
            "A structural syntax template used to compile source code",
            "A detailed narrative story or description of a user executing a specific task within a real-world context",
            "A mathematical formula used to calculate software defect density",
            "A network layout design showing forward and backward passes"
        ],
        correct: 1,
        topic: "HCI References and History"
    },

    // ── MODULE 21: ADVANCED DIALOGUE SYSTEMS AND INTERFACE STYLES ──────────────

    {
        id: "isn202_051",
        question: "In the context of interaction styles, what is a primary characteristic of a \"Form-filling\" interface?",
        options: [
            "It requires the user to write custom data structures in text commands.",
            "It provides designated fields for data entry, mimicking paper forms, which is ideal for structured data collection.",
            "It relies exclusively on 3D spatial pointers to navigate.",
            "It changes the backend architecture dynamically as the user types."
        ],
        correct: 1,
        topic: "Interaction Styles"
    },
    {
        id: "isn202_052",
        question: "Which of the following describes a \"Natural Language\" interaction style?",
        options: [
            "The user enters commands using a highly strict, compiled mathematical syntax.",
            "The user communicates with the system using everyday conversational language (written or spoken).",
            "The user must manipulate physical hardware components to execute a process.",
            "The interface updates itself using randomized visual patterns."
        ],
        correct: 1,
        topic: "Interaction Styles"
    },
    {
        id: "isn202_053",
        question: "What is a major disadvantage of a \"Question and Answer\" dialogue style for experienced users?",
        options: [
            "It consumes too much CPU processing power during calculations.",
            "It is highly complex to understand and requires deep programming knowledge.",
            "It can feel slow and restrictive because it forces the user through a rigid, step-by-step sequence.",
            "It completely removes visual feedback from the user view."
        ],
        correct: 2,
        topic: "Interaction Styles"
    },

    // ── MODULE 22: COGNITIVE AND MENTAL MODELS ───────────────────────────────

    {
        id: "isn202_054",
        question: "In HCI design, what is a \"Mental Model\"?",
        options: [
            "A flowchart showing how data moves through server processors.",
            "The internal, psychological understanding that a user constructs about how a system works.",
            "A structural blueprint used to build hardware logic circuits.",
            "The mathematical optimization formula for user experience metrics."
        ],
        correct: 1,
        topic: "UI Design Rules and Principles"
    },
    {
        id: "isn202_055",
        question: "If a user expects a \"trash can\" icon to delete a file because that is how physical trash cans work, what cognitive concept are they relying on?",
        options: [
            "Multi-threading execution",
            "Metaphor / Real-world mapping",
            "Heuristic deficit density",
            "Architectural constraint"
        ],
        correct: 1,
        topic: "UI Design Rules and Principles"
    },
    {
        id: "isn202_056",
        question: "Donald Norman's \"Gulf of Evaluation\" refers to what psychological distance?",
        options: [
            "The effort required to type a command line argument without errors.",
            "The gap between the physical system's changing state and the user's ability to perceive and interpret that change.",
            "The time it takes a software developer to complete a heuristic evaluation.",
            "The financial cost difference between low-fidelity and high-fidelity prototypes."
        ],
        correct: 1,
        topic: "UI Design Rules and Principles"
    },

    // ── MODULE 23: INTERACTION DESIGN RULES AND ROBUSTNESS ──────────────────

    {
        id: "isn202_057",
        question: "Under the usability category of \"Robustness,\" what does the principle of \"Recoverability\" mean?",
        options: [
            "The ability of a server to restart automatically after a power failure.",
            "The level of support provided to help users recognize, diagnose, and correct errors once they have occurred.",
            "The capacity of a system to compress old files to save storage space.",
            "The speed at which a novice user can learn a system's command vocabulary."
        ],
        correct: 1,
        topic: "Usability Principles"
    },
    {
        id: "isn202_058",
        question: "Ben Shneiderman's rule \"Support internal locus of control\" means that an interface should be designed so that:",
        options: [
            "The system controls every action rigidly, forcing the user to follow an automated path.",
            "Users feel like they are the initiators of actions rather than just responding to the system.",
            "The internal computing architecture remains hidden from the development team.",
            "The database completely dictates the interface layout."
        ],
        correct: 1,
        topic: "UI Design Rules and Principles"
    },
    {
        id: "isn202_059",
        question: "Why is \"Error Prevention\" considered more effective than just providing good error messages?",
        options: [
            "It prevents the software from needing any future maintenance cycles.",
            "It uses design constraints to stop mistakes from happening in the first place, saving user time and frustration.",
            "It allows the system to compile code without an architectural framework.",
            "It replaces the need to build a user view of interaction."
        ],
        correct: 1,
        topic: "UI Design Rules and Principles"
    },

    // ── MODULE 24: HCI IN THE DEVELOPING REQUIREMENTS PHASE ─────────────────

    {
        id: "isn202_060",
        question: "When gathering requirements for an interactive system, what does \"Task Analysis\" involve?",
        options: [
            "Measuring the compilation efficiency of Java classes.",
            "Studying exactly how users perform their tasks, what steps they take, and what tools they use to achieve their goals.",
            "Running automated stress scripts against a backend relational database.",
            "Calculating the financial return on software development sprint cycles."
        ],
        correct: 1,
        topic: "HCI in the Software Process"
    },
    {
        id: "isn202_061",
        question: "In the software life cycle, if a design team skips the \"User Validation\" step during the requirements specification stage, what is the primary risk?",
        options: [
            "The code will throw compilation errors during deployment.",
            "The team might build a system that is functionally correct but completely unsuited to the users' actual workflow.",
            "The database will fail to achieve standard normalization forms.",
            "The system will consume too much system RAM."
        ],
        correct: 1,
        topic: "HCI in the Software Process"
    },

    // ── MODULE 25: VISUAL PRESENTATION AND INTERACTION RECAP ────────────────

    {
        id: "isn202_062",
        question: "According to Edward Tufte's design guidelines, what does the term \"Chartjunk\" refer to?",
        options: [
            "A database table containing corrupt or unreadable data points.",
            "Unnecessary or decorative visual elements on a chart that distract the user and obscure the data.",
            "The source code used to generate dynamic graphical displays.",
            "An interactive menu style that contains too many command paths."
        ],
        correct: 1,
        topic: "HCI References and History"
    },
    {
        id: "isn202_063",
        question: "When an interactive layout ensures that the primary \"Submit\" button is larger and a more vibrant color than the \"Cancel\" button, what visual principle is being used?",
        options: [
            "Affordance mapping",
            "Visual Hierarchy",
            "Cognitive Dissonance",
            "Structural Constraint"
        ],
        correct: 1,
        topic: "Screen Design"
    },
    {
        id: "isn202_064",
        question: "Which referenced author in your course material highlights the use of detailed narrative stories or \"scenarios\" to drive system development?",
        options: [
            "Ben Shneiderman",
            "John Carroll",
            "Edward Tufte",
            "Bill Gaver"
        ],
        correct: 1,
        topic: "HCI References and History"
    },
    {
        id: "isn202_065",
        question: "What is the primary purpose of a \"High-fidelity Prototype\" in the later stages of interface evaluation?",
        options: [
            "To test broad, abstract concepts using low-cost paper sketches.",
            "To conduct realistic usability tests that closely mimic the look, feel, and response times of the final production software.",
            "To generate automated backend Java code for the application database.",
            "To measure the exact electrical signals of hardware interaction devices."
        ],
        correct: 1,
        topic: "Prototyping and Design Stages"
    },

    // ── MODULE 26: DIALOGUE BLUEPRINTS & STATE TRANSITIONS ───────────────────

    {
        id: "isn202_066",
        question: "Which diagramming technique is commonly used in HCI to map out user interface paths, showing screen states as nodes and user actions as links?",
        options: [
            "Relational Entity-Relationship Diagram (ERD)",
            "State Transition Networks (STN)",
            "Data Flow Diagrams (DFD) Layer 0",
            "Execution Tree Compilers"
        ],
        correct: 1,
        topic: "HCI in the Software Process"
    },
    {
        id: "isn202_067",
        question: "When an interface design is described as having \"High Dialogue Preemption,\" what does this mean?",
        options: [
            "The user can jump to any part of the system at any time without restriction.",
            "The system locks the user into a rigid sequence and forces them to complete the current task before doing anything else.",
            "The code compiles faster because it clears the interface stack.",
            "The database overwrites old data without asking for user confirmation."
        ],
        correct: 1,
        topic: "Interaction Styles"
    },
    {
        id: "isn202_068",
        question: "In dialogue design, a system that allows a user to work on multiple tasks at the same time (like typing a document while running a background data calculation) is supporting which principle?",
        options: [
            "Multi-threading",
            "Dialogue Closure",
            "Structural Monomorphism",
            "Task Conformance"
        ],
        correct: 0,
        topic: "Interaction Styles"
    },

    // ── MODULE 27: COGNITIVE MOTOR SKILLS & TIMES ───────────────────────────

    {
        id: "isn202_069",
        question: "Which foundational HCI law calculates user interaction speeds by stating that the time required to rapidly move to a target area is a function of the distance to and the size of the target?",
        options: [
            "Moore's Law",
            "Fitts's Law",
            "Norman's Principle",
            "Brooks' Law"
        ],
        correct: 1,
        topic: "UI Design Rules and Principles"
    },
    {
        id: "isn202_070",
        question: "Shneiderman's rule \"Design dialogues to yield closure\" means that sequences of actions should be organized with:",
        options: [
            "Continuous open-ended text entry fields to encourage exploration.",
            "A clear beginning, middle, and end, with informative feedback at completion to give users a sense of accomplishment.",
            "Structural constraints that prevent the user from ever canceling an action.",
            "Hidden system states to keep the display as simple as possible."
        ],
        correct: 1,
        topic: "UI Design Rules and Principles"
    },

    // ── MODULE 28: USER CENTRIC DATA EXTRACTION ────────────────────────────

    {
        id: "isn202_071",
        question: "What is the primary difference between a \"User Persona\" and an actual end-user?",
        options: [
            "Personas are real individuals who test the high-fidelity prototypes in a lab.",
            "A persona is a fictional, research-backed archetype created to represent a specific target group of users during design.",
            "Personas are automated script models that execute code compilation.",
            "Personas are database variables used to track system defect densities."
        ],
        correct: 1,
        topic: "User Categories"
    },
    {
        id: "isn202_072",
        question: "Which requirement gathering methodology involves an investigator sitting in the user's actual workplace, observing day-to-day operations without interfering with their workflow?",
        options: [
            "Heuristic Evaluation",
            "Ethnographic / Contextual Inquiry",
            "Unit Testing Lab Session",
            "Architectural Design Modification"
        ],
        correct: 1,
        topic: "Evaluation Techniques"
    },

    // ── MODULE 29: COGNITIVE FRICTION & ERROR DESIGN ───────────────────────

    {
        id: "isn202_073",
        question: "What is \"Cognitive Friction\" in user interface design?",
        options: [
            "The physical resistance experienced when using a faulty pointing device.",
            "The mental effort required to figure out how an interface works when it behaves in unexpected or confusing ways.",
            "The time delay that occurs while compiling system resource files.",
            "The processing conflict between backend database tables."
        ],
        correct: 1,
        topic: "UI Design Rules and Principles"
    },
    {
        id: "isn202_074",
        question: "In Norman's classification of human error, what is the difference between a \"Slip\" and a \"Mistake\"?",
        options: [
            "Slips are backend database calculation failures, while mistakes are user syntax errors.",
            "A slip happens when the user has the right goal but performs the wrong action accidentally; a mistake happens when the user's core goal or understanding is wrong.",
            "Slips only happen to expert power users, while mistakes are exclusive to novices.",
            "Slips are caught during architectural design, while mistakes happen during maintenance."
        ],
        correct: 1,
        topic: "UI Design Rules and Principles"
    },
    {
        id: "isn202_075",
        question: "When an interface designer uses a confirmation popup modal for a critical action like \"Delete Permanent Database,\" which design strategy are they using?",
        options: [
            "Forcing function / Interlocking constraint",
            "Direct manipulation style",
            "Heuristic verification processing",
            "Natural language execution"
        ],
        correct: 0,
        topic: "UI Design Rules and Principles"
    },

    // ── MODULE 30: TEXTBOOK CRITICAL DATA & THEORIES ───────────────────────

    {
        id: "isn202_076",
        question: "The referenced work Interaction Design by Preece, Rogers, and Sharp notes that evaluating user experiences should evaluate both usability metrics and what other core experience factor?",
        options: [
            "User Emotional and Affective Aspects (e.g., satisfaction, engagement)",
            "Database Normalization Processing Speed",
            "High-level network topology layout throughput",
            "Compilation line optimization variables"
        ],
        correct: 0,
        topic: "Evaluation Techniques"
    },
    {
        id: "isn202_077",
        question: "According to the course reading references, what makes Edward Tufte's books a \"must read\" for interface developers?",
        options: [
            "They provide functional Java code templates for backend operations.",
            "They are packed with outstanding visual examples and rules for presenting complex quantitative data effectively.",
            "They outline the historical development of time-sharing computer mainframes.",
            "They detail automated stress-testing methods for network layers."
        ],
        correct: 1,
        topic: "HCI References and History"
    },
    {
        id: "isn202_078",
        question: "If a design team wants to track how easily users can transition from one screen view to another, which model from your INS202 syllabus should they map out?",
        options: [
            "Relational Database Normalization Schema",
            "Dialogue structures and State Transition Networks",
            "Code Unit Compilation Execution Map",
            "Network Packet Forward-Backward Passes"
        ],
        correct: 1,
        topic: "HCI in the Software Process"
    },
    {
        id: "isn202_079",
        question: "Which usability goal is directly threatened when an application updates its interface by completely changing the location of all menu icons without warning?",
        options: [
            "Recoverability",
            "Consistency / Familiarity",
            "Multi-threading capacity",
            "Fault-tolerance optimization"
        ],
        correct: 1,
        topic: "Usability Principles"
    },
    {
        id: "isn202_080",
        question: "In the context of HCI development cycles, what does \"Iterative Design\" explicitly try to prevent?",
        options: [
            "Writing modular Java code blocks.",
            "Discovering major usability or functional flaws late in development after the entire budget is spent.",
            "Using low-fidelity paper prototypes early on.",
            "Striving for interface consistency."
        ],
        correct: 1,
        topic: "HCI in the Software Process"
    },

    // ── MODULE 31: ACCESSIBILITY AND INCLUSIVE DESIGN ───────────────────────

    {
        id: "isn202_081",
        question: "In interactive systems design, what does \"Universal Design\" refer to?",
        options: [
            "Designing a system to run exclusively on a single worldwide operating system",
            "The design of products and environments to be usable by all people, to the greatest extent possible, without the need for adaptation",
            "Restricting software interfaces to simple text strings to save international data bandwidth",
            "Automating software compilations for global cloud networks"
        ],
        correct: 1,
        topic: "Usability Principles"
    },
    {
        id: "isn202_082",
        question: "Which assistive feature is critical for ensuring visually impaired users can interact with a WIMP interface?",
        options: [
            "High-speed keyboard macros",
            "Screen readers with text-to-speech capabilities",
            "Dynamic 3D mouse pointers",
            "Custom command-line syntax parameters"
        ],
        correct: 1,
        topic: "Usability Principles"
    },
    {
        id: "isn202_083",
        question: "When designing software for users with color vision deficiencies (color blindness), which interface rule is most critical?",
        options: [
            "Never use color as the only visual cue to convey critical information or system states",
            "Ensure all background elements use varying shades of green and red",
            "Hide all icons until the user types a specific text parameter",
            "Use complex decorative graphics to separate text blocks"
        ],
        correct: 0,
        topic: "Usability Principles"
    },

    // ── MODULE 32: RESPONSE TIMES AND USER COGNITION ───────────────────────

    {
        id: "isn202_084",
        question: "In HCI, what is the generally accepted limit for system response delays before a user feels they have lost their train of thought?",
        options: [
            "0.1 seconds",
            "1.0 second",
            "10.0 seconds",
            "60.0 seconds"
        ],
        correct: 1,
        topic: "Usability Principles"
    },
    {
        id: "isn202_085",
        question: "If an application takes 15 seconds to run a background data search, what should the user interface display to maintain the \"visibility of system status\"?",
        options: [
            "A static blank screen to keep things clean",
            "A generic error dialogue box",
            "An active progress bar or loading spinner showing explicit status updates",
            "The underlying Java database configuration code"
        ],
        correct: 2,
        topic: "UI Design Rules and Principles"
    },

    // ── MODULE 33: INTERACTIVE DEVICES AND PHYSICAL DYNAMICS ────────────────

    {
        id: "isn202_086",
        question: "Input devices like a standard computer mouse or trackpad are classified as which type of input mechanisms?",
        options: [
            "Continuous text stream entry devices",
            "Indirect pointing and positioning devices",
            "High-level compiling devices",
            "Relational schema data extractors"
        ],
        correct: 1,
        topic: "Interaction Techniques"
    },
    {
        id: "isn202_087",
        question: "Which interaction style is best suited for a public information kiosk (e.g., an airport check-in terminal or bank ATM) used by a constantly changing pool of casual users?",
        options: [
            "Command Line Interface (CLI)",
            "Touchscreen-driven Menu Select / Direct Manipulation",
            "Natural Language command-line terminal",
            "Question and Answer script compiling"
        ],
        correct: 1,
        topic: "Interaction Styles"
    },

    // ── MODULE 34: USABILITY TESTING METRICS ───────────────────────────────

    {
        id: "isn202_088",
        question: "During a quantitative usability testing session, how is the \"Task Success Rate\" calculated?",
        options: [
            "The total lines of code written by the engineering team divided by total hours",
            "The percentage of participants who successfully complete a defined set of tasks using the software interface",
            "The time it takes a server to compile user data packets",
            "The financial profit earned per software application release"
        ],
        correct: 1,
        topic: "Evaluation Techniques"
    },
    {
        id: "isn202_089",
        question: "What does the metric \"Time-on-Task\" evaluate during a usability lab test?",
        options: [
            "The duration of the entire software maintenance phase",
            "The speed and efficiency of the system interface by tracking how long a user takes to finish a specific goal",
            "The time required to back up an interactive database",
            "The schedule buffer available in a software project lifecycle"
        ],
        correct: 1,
        topic: "Evaluation Techniques"
    },
    {
        id: "isn202_090",
        question: "When measuring user satisfaction subjective metrics after an evaluation, which standard psychometric questionnaire is widely used in the software industry?",
        options: [
            "System Usability Scale (SUS)",
            "Relational Index Protocol (RIP)",
            "State Transition Node (STN)",
            "Entity Attribute Matrix (EAM)"
        ],
        correct: 0,
        topic: "Evaluation Techniques"
    },

    // ── MODULE 35: REVISITING THE LIFE CYCLE & SOCIO-TECHNICAL DESIGN ────────

    {
        id: "isn202_091",
        question: "In the software life cycle, what is the danger of jumping straight into \"Detailed Design\" or \"Coding\" before completing the \"Architectural Design\" phase?",
        options: [
            "The system will run completely out of database storage room immediately",
            "The application will suffer from structural incoherence, making it incredibly difficult to scale, integrate modules, or maintain consistency",
            "It completely eliminates the necessity for iterative prototyping",
            "The development team will be forced to use only command-line interfaces"
        ],
        correct: 1,
        topic: "HCI in the Software Process"
    },
    {
        id: "isn202_092",
        question: "What is the core philosophy of \"User-Centered Design\" (UCD)?",
        options: [
            "Users should write the backend software source code themselves",
            "The design and development of a system must be shaped at every stage by the needs, limitations, and preferences of the end-users",
            "Hardware constraints should entirely dictate how a user processes tasks",
            "Systems should be evaluated only during the final maintenance phase"
        ],
        correct: 1,
        topic: "HCI Goals and Introduction"
    },
    {
        id: "isn202_093",
        question: "If a system has high \"Functional Completeness\" but low \"Usability,\" what is the likely outcome when it is deployed to users?",
        options: [
            "The system will compile perfectly but fail to store any structural data points",
            "Users will reject or underutilize the system because, even though it has the right features, it is too confusing and frustrating to operate",
            "The database will become unnormalized automatically",
            "The software lifecycle will immediately loop back to requirements specification"
        ],
        correct: 1,
        topic: "Usability Principles"
    },

    // ── MODULE 36: HCI DESIGN PATTERNS AND GRAPHICAL METRICS ────────────────

    {
        id: "isn202_094",
        question: "In GUI design, what is a \"Breadcrumb\" trail used for?",
        options: [
            "Storing historical user data inside a hidden database table",
            "Providing secondary navigation that shows the user's current location within a website or application hierarchy",
            "Compiling modular Java code packages step-by-step",
            "Measuring the exact pixel width of an interface window"
        ],
        correct: 1,
        topic: "Screen Design"
    },
    {
        id: "isn202_095",
        question: "When an interface designer uses standard UI elements like a magnifying glass icon for \"Search\" or a gear icon for \"Settings,\" they are utilizing which usability concept?",
        options: [
            "Internal consistency",
            "External consistency and conventions",
            "High system preemption",
            "Dialogue preemption mapping"
        ],
        correct: 1,
        topic: "Usability Principles"
    },
    {
        id: "isn202_096",
        question: "According to the referenced publication notes on Edward Tufte's data presentation theories, high-density data graphics should avoid \"distorting\" information, which means they must maintain:",
        options: [
            "Visual integrity and graphical truth",
            "Complex, hidden data parameters",
            "Decorative chart structures",
            "High cognitive load constraints"
        ],
        correct: 0,
        topic: "HCI References and History"
    },

    // ── MODULE 37: FINAL CAPSTONE QUESTIONS ON HCI TECHNIQUES ───────────────

    {
        id: "isn202_097",
        question: "Which view of an interaction technique from your course syllabus focuses strictly on the physical hardware attributes, input devices, and electrical data conversions?",
        options: [
            "The Conceptual View",
            "The Computing Perspective",
            "The User View",
            "The Socio-technical Perspective"
        ],
        correct: 1,
        topic: "Interaction Techniques"
    },
    {
        id: "isn202_098",
        question: "Why does the INS202 text describe \"Iteration\" as a structural necessity rather than an optional choice in interactive systems development?",
        options: [
            "Because automated compilers require code to be run multiple times",
            "Because interactive designs cannot be expected to be perfect on the first try, making repetitive design-test-refine cycles essential",
            "Because it removes the need to write out clear requirements specifications",
            "Because it guarantees the system will never require a maintenance phase"
        ],
        correct: 1,
        topic: "HCI in the Software Process"
    },
    {
        id: "isn202_099",
        question: "What is a major limitation of relying only on \"Heuristic Evaluation\" by experts without ever conducting \"Usability Testing\" with real end-users?",
        options: [
            "Heuristic evaluation takes too many months to complete",
            "Experts might catch standard rule violations but can easily miss unique, real-world workflow issues that only actual end-users encounter",
            "It completely skips the architectural design phase of development",
            "It forces the system to use a command-line interface layout"
        ],
        correct: 1,
        topic: "Evaluation Techniques"
    },
    {
        id: "isn202_100",
        question: "According to the literature references in your INS202 note, what is a specific, defining focus of the textbook authored by Preece, Rogers, and Sharp?",
        options: [
            "Advanced compiler optimization routines",
            "A deep and thorough focus on evaluation within interaction design",
            "Building multi-threaded operating system kernels",
            "Complex mathematical logic proofs for database schemas"
        ],
        correct: 1,
        topic: "HCI References and History"
    }

];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = ISN202_QUESTIONS;
}