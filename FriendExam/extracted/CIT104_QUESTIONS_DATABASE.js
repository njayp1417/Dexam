const CIT104_QUESTIONS = [
    {
        id: 1,
        question: "An electronic machine that operates under the control of instructions stored in its own memory unit, accepts data (input), processes it logically or arithmetically, produces output, and stores the results for future use is defined as a:",
        options: ["Transistor", "Computer", "Microprocessor", "Multiplexer"],
        correct: 1,
        topic: "Introduction to Computers",
        explanation: "A computer is an electronic machine that operates under stored program control. It accepts raw data as input, processes it through arithmetic and logical operations, produces meaningful output, and stores results for future use. This definition captures the four fundamental operations of any computer system: input, processing, output, and storage. The stored-program concept — that instructions are held in memory alongside data — is what distinguishes modern computers from earlier fixed-program calculating machines."
    },
    {
        id: 2,
        question: "In computing terminology, what is the precise operational distinction between 'Data' and 'Information'?",
        options: ["Data is the structured output of a program, while information represents raw unorganized facts", "Data refers to raw, unprocessed facts, figures, and symbols, whereas Information is data that has been processed, organized, and structured to be meaningful", "Information is processed exclusively by hardware, while data is handled by software", "Data is analog by nature, whereas information is always strictly digital"],
        correct: 1,
        topic: "Introduction to Computers",
        explanation: "Data consists of raw, unprocessed facts, figures, symbols, and observations that have no inherent meaning on their own — for example, the numbers 25, 30, 22. Information is data that has been processed, organized, and contextualized to become meaningful and useful — for example, 'the average temperature this week was 25.7°C.' The transformation of data into information is the core function of information processing systems, and the distinction is fundamental to understanding what computers do."
    },
    {
        id: 3,
        question: "Which historical computing pioneer designed the 'Analytical Engine,' a mechanical, general-purpose programmable computer that incorporated an Arithmetic Logic Unit (ALU) and basic sequential control flow, earning him the title of the father of the modern computer?",
        options: ["Blaise Pascal", "Charles Babbage", "Alan Turing", "John von Neumann"],
        correct: 1,
        topic: "History of Computers",
        explanation: "Charles Babbage (1791–1871) designed the Analytical Engine in the 1830s — a mechanical general-purpose programmable computing machine that anticipated virtually every feature of modern computers: an arithmetic unit (the 'mill'), a memory store, sequential control flow, and the ability to be programmed using punched cards. Though never completed in his lifetime, its conceptual design earned Babbage the title 'Father of the Computer.' Ada Lovelace, who wrote algorithms for the Analytical Engine, is considered the first programmer."
    },
    {
        id: 4,
        question: "The first generation of modern digital computers (roughly spanning 1940–1956), exemplified by massive systems like the ENIAC and UNIVAC, relied on which primary electronic component for switching and circuitry?",
        options: ["Transistors", "Vacuum Tubes", "Integrated Circuits (ICs)", "Microprocessors"],
        correct: 1,
        topic: "Generations of Computers",
        explanation: "First generation computers (1940–1956) used vacuum tubes (thermionic valves) as their primary electronic switching components. Vacuum tubes controlled electrical signals but were large, fragile, generated enormous heat, consumed vast amounts of power, and failed frequently. Machines like ENIAC (1945) contained over 17,000 vacuum tubes, filled entire rooms, and required constant maintenance. Despite their limitations, first generation computers represented the first practical electronic digital computers."
    },
    {
        id: 5,
        question: "The invention of which semiconductor device in 1947 revolutionized hardware development, replacing fragile vacuum tubes and defining the Second Generation of computers by making them smaller, faster, cheaper, and more energy-efficient?",
        options: ["Silicon chip", "Transistor", "Capacitor", "Resistor"],
        correct: 1,
        topic: "Generations of Computers",
        explanation: "The transistor, invented at Bell Laboratories in 1947 by Bardeen, Brattain, and Shockley, revolutionized computing by replacing vacuum tubes. Transistors were smaller, faster, more reliable, generated less heat, consumed less power, and were far cheaper to produce. Second generation computers (1956–1963) built with transistors were dramatically more practical than their vacuum tube predecessors. The transistor is arguably the most important invention of the 20th century, forming the foundation of all modern electronics."
    },
    {
        id: 6,
        question: "The Third Generation of computers (roughly 1964–1971) was characterized by the breakthrough development of placing hundreds of transistors onto a single tiny silicon semiconductor chip, a technology known as an:",
        options: ["Integrated Circuit (IC)", "Microprocessor Core", "Ultra-Large Scale Integration (ULSI)", "Vacuum Array"],
        correct: 0,
        topic: "Generations of Computers",
        explanation: "The Integrated Circuit (IC), developed by Jack Kilby (Texas Instruments) and Robert Noyce (Fairchild Semiconductor) in 1958–59, placed multiple transistors, resistors, and capacitors onto a single silicon chip. Third generation computers (1964–1971) built with ICs were dramatically smaller, faster, and cheaper than transistor-based machines. The IBM System/360 family exemplified this generation. ICs enabled the miniaturization that eventually led to personal computers."
    },
    {
        id: 7,
        question: "The Fourth Generation of computers, which extends into contemporary computing architecture, was brought about by inventing the technology that integrated millions of transistors onto a single microchip, creating the CPU. This technology is:",
        options: ["Medium Scale Integration (MSI)", "Very Large Scale Integration (VLSI)", "Thermionic Valve Emission", "Distributed Matrix Networking"],
        correct: 1,
        topic: "Generations of Computers",
        explanation: "Very Large Scale Integration (VLSI) technology, developed in the early 1970s, enabled the integration of hundreds of thousands to millions of transistors onto a single microchip. This made possible the microprocessor — an entire CPU on a single chip — inaugurating the Fourth Generation of computers (1971–present). Intel's 4004 (1971) was the first commercial microprocessor. VLSI is the foundation of all modern computing devices, from smartphones to supercomputers."
    },
    {
        id: 8,
        question: "Computers are broadly classified by their operational modes into Analog, Digital, and Hybrid. What is the defining characteristic of an Analog Computer?",
        options: ["It processes data represented by distinct, discrete binary digits (0s and 1s)", "It operates on continuous physical magnitudes or variables such as electrical voltage, temperature, or hydraulic pressure", "It relies exclusively on cloud-based web servers to execute calculations", "It can only process textual alphanumeric strings"],
        correct: 1,
        topic: "Classification of Computers",
        explanation: "Analog computers operate on continuous physical quantities — electrical voltage, current, mechanical rotation, hydraulic pressure — that vary smoothly and continuously rather than in discrete steps. They measure rather than count. Examples include slide rules, speedometers, and early flight simulators. Analog computers excel at solving differential equations and simulating physical systems in real time but lack the precision and programmability of digital computers. Most modern computers are digital."
    },
    {
        id: 9,
        question: "Which classification of computers represents the fastest, most powerful, and most expensive machines on Earth, capable of processing trillions of complex floating-point calculations per second to handle tasks like weather forecasting, nuclear research, and climate modeling?",
        options: ["Mainframe Computers", "Supercomputers", "Minicomputers", "Workstations"],
        correct: 1,
        topic: "Classification of Computers",
        explanation: "Supercomputers are the most powerful computers ever built, capable of performing quadrillions of floating-point operations per second (petaFLOPS). They are used for computationally intensive scientific tasks: weather forecasting, climate modeling, nuclear weapons simulation, genomics research, and astrophysics. Examples include the Fugaku (Japan) and Frontier (USA). Supercomputers typically consist of thousands of interconnected processors working in parallel and require specialized cooling systems and enormous power supplies."
    },
    {
        id: 10,
        question: "Which multi-user class of computers is specifically optimized to act as massive centralized repositories handling simultaneous, high-volume transactions, database queries, and institutional data processing for commercial entities like banks, airlines, and insurance corporations?",
        options: ["Supercomputers", "Mainframe Computers", "Microcomputers", "Embedded Systems"],
        correct: 1,
        topic: "Classification of Computers",
        explanation: "Mainframe computers are large, powerful, centralized systems designed for high-volume, high-reliability transaction processing. Banks use them to process millions of daily transactions; airlines use them for reservation systems; insurance companies use them for policy management. Mainframes support thousands of simultaneous users, offer exceptional reliability (often 99.999% uptime), and can process enormous datasets. IBM's z-Series mainframes are the dominant modern example, still processing the majority of the world's financial transactions."
    },
    {
        id: 11,
        question: "The physical, tangible, and structural mechanical components of a computer system that you can see and touch are collectively categorized as:",
        options: ["Hardware", "Software", "Firmware", "Liveware"],
        correct: 0,
        topic: "Computer Hardware and Software",
        explanation: "Hardware refers to all the physical, tangible components of a computer system — the parts you can see, touch, and physically interact with. This includes the CPU, RAM, hard drives, motherboard, keyboard, monitor, printer, and all other physical devices. Hardware is distinguished from software (programs and data), firmware (software embedded in hardware), and liveware (the human users). Hardware provides the physical infrastructure on which software runs."
    },
    {
        id: 12,
        question: "The standard computational architecture that models a computer as consisting of a Central Processing Unit (CPU), a Memory Unit, Input devices, and Output devices is known as the:",
        options: ["Turing Architecture", "Von Neumann Architecture", "Babbage Core Layout", "Silicon Bus Blueprint"],
        correct: 1,
        topic: "Computer Architecture",
        explanation: "The Von Neumann Architecture, proposed by mathematician John von Neumann in 1945, describes a computer design where a single memory stores both program instructions and data, a CPU fetches and executes instructions sequentially, and input/output devices communicate with the system. This stored-program concept — where programs are data that can be modified — is the foundation of virtually all modern computers. The architecture's sequential instruction execution is sometimes called the 'Von Neumann bottleneck.'"
    },
    {
        id: 13,
        question: "The Central Processing Unit (CPU) is composed of three primary structural sub-units. What are they?",
        options: ["Input Unit, Output Unit, and Storage Unit", "Control Unit (CU), Arithmetic Logic Unit (ALU), and Registers/Internal Memory", "Hard Drive, RAM, and Motherboard Buses", "BIOS, CMOS, and Chipset"],
        correct: 1,
        topic: "Computer Architecture",
        explanation: "The CPU consists of three primary components: the Control Unit (CU), which directs and coordinates all computer operations by fetching, decoding, and executing instructions; the Arithmetic Logic Unit (ALU), which performs all mathematical calculations and logical comparisons; and Registers, which are ultra-fast internal storage locations that temporarily hold data and instructions during active processing. Together these three components constitute the 'brain' of the computer, executing the fetch-decode-execute cycle that drives all computation."
    },
    {
        id: 14,
        question: "Which component within the Central Processing Unit (CPU) is directly responsible for executing all mathematical computations (addition, subtraction) and comparison operations (such as determining if one value is greater than or equal to another)?",
        options: ["Control Unit", "Arithmetic Logic Unit (ALU)", "Main Memory", "System Clock"],
        correct: 1,
        topic: "Computer Architecture",
        explanation: "The Arithmetic Logic Unit (ALU) is the computational core of the CPU, responsible for performing all arithmetic operations (addition, subtraction, multiplication, division) and all logical/comparison operations (AND, OR, NOT, greater than, equal to, less than). Every calculation a computer performs — from rendering graphics to encrypting data — ultimately reduces to ALU operations on binary numbers. Modern CPUs contain multiple ALUs operating in parallel to increase throughput."
    },
    {
        id: 15,
        question: "The fundamental role of the Control Unit (CU) inside the CPU is to:",
        options: ["Perform floating-point calculations and logic gates operations", "Direct, coordinate, and supervise the entire sequential execution of program instructions by sending electrical signals to other hardware units", "Store user application files permanently when power is disconnected", "Convert digital bits directly into printed paperwork"],
        correct: 1,
        topic: "Computer Architecture",
        explanation: "The Control Unit (CU) is the director of the CPU — it fetches instructions from memory, decodes them to determine what operation is required, and then sends control signals to the appropriate hardware components (ALU, memory, I/O devices) to execute those instructions. It manages the fetch-decode-execute cycle that drives all computation. The CU does not perform calculations itself but orchestrates all other components, acting as the conductor of the computer's operational orchestra."
    },
    {
        id: 16,
        question: "What is the purpose of the high-speed, volatile internal storage locations located directly inside the CPU chip, which hold data temporarily while instructions are actively being decoded and executed?",
        options: ["Sectors", "Registers", "Tracks", "Flash memory cells"],
        correct: 1,
        topic: "Computer Architecture",
        explanation: "Registers are the fastest and smallest storage units in a computer, located directly within the CPU chip. They temporarily hold data, instructions, memory addresses, and intermediate results during active instruction execution. Because registers are on the CPU chip itself, access is virtually instantaneous — far faster than RAM or cache. Different registers serve specific purposes: the Program Counter (PC) holds the next instruction address, the Accumulator holds ALU results, and general-purpose registers hold operands."
    },
    {
        id: 17,
        question: "The frequency at which a CPU executes its fundamental instruction cycles is determined by an internal crystal oscillator, and its performance speed is typically measured in:",
        options: ["Bits per second (bps)", "Gigahertz (GHz) or Megahertz (MHz)", "Terabytes (TB)", "Revolutions per minute (RPM)"],
        correct: 1,
        topic: "Computer Architecture",
        explanation: "CPU clock speed, measured in Megahertz (MHz) or Gigahertz (GHz), indicates how many instruction cycles the processor can execute per second. 1 GHz = 1 billion cycles per second. A higher clock speed generally means faster processing, though modern performance also depends on the number of cores, cache size, and instruction set efficiency. The system clock — a crystal oscillator — generates the regular electrical pulses that synchronize all CPU operations."
    },
    {
        id: 18,
        question: "Which of the following computer hardware devices functions strictly as an Input Device used to translate physical alphanumeric characters and control commands into binary electronic signals?",
        options: ["Plotter", "Keyboard", "Monitor", "Dot-matrix Printer"],
        correct: 1,
        topic: "Input and Output Devices",
        explanation: "The keyboard is the most fundamental input device, translating physical keystrokes into binary electronic signals that the computer can process. Each key press generates a unique scan code that is converted into the corresponding ASCII or Unicode character. The keyboard allows users to enter text, numbers, commands, and control sequences. It is strictly an input device — it sends data to the computer but receives no output. Plotters, monitors, and printers are output devices."
    },
    {
        id: 19,
        question: "An optical input device that reads printed vertical bars of varying widths to instantly track inventory or look up commercial retail product pricing in a database is called a:",
        options: ["Optical Mark Reader (OMR)", "Barcode Reader / Scanner", "Magnetic Ink Character Recognition (MICR) device", "Digitizer Tablet"],
        correct: 1,
        topic: "Input and Output Devices",
        explanation: "A barcode reader (scanner) uses a laser or LED light source to read the pattern of black bars and white spaces in a barcode, converting the optical pattern into a digital code that identifies a product. Barcodes are used universally in retail (point-of-sale systems), inventory management, logistics, libraries, and healthcare. The scanner is an input device — it reads physical information and converts it into digital data for computer processing."
    },
    {
        id: 20,
        question: "Which specialized input technology is universally used by the banking sector to read and validate the unique magnetic-ink numbers printed at the bottom of standard paper bank checks?",
        options: ["Optical Character Recognition (OCR)", "Magnetic Ink Character Recognition (MICR)", "Barcode Serialization Matrix", "Digital Flatbed Scanner"],
        correct: 1,
        topic: "Input and Output Devices",
        explanation: "Magnetic Ink Character Recognition (MICR) is a specialized input technology used exclusively in banking to read the magnetic-ink characters printed at the bottom of checks. These characters encode the bank routing number, account number, and check number. MICR readers use magnetic fields to detect the iron oxide particles in the ink, enabling high-speed, highly accurate processing of millions of checks daily. MICR is preferred over OCR in banking because it is extremely difficult to forge and highly resistant to damage."
    },
    {
        id: 21,
        question: "Which type of computer monitor operates by passing an electrical current through a liquid crystal solution trapped between two sheets of polarizing material, creating an incredibly thin, lightweight, and energy-efficient display?",
        options: ["Cathode Ray Tube (CRT)", "Liquid Crystal Display (LCD)", "Vacuum Fluorescent Display (VFD)", "Plasma Discharge Panel"],
        correct: 1,
        topic: "Input and Output Devices",
        explanation: "Liquid Crystal Displays (LCDs) work by applying electrical current to liquid crystal molecules sandwiched between polarizing filters. The crystals twist or align to control the passage of light, creating images. LCDs replaced bulky CRT monitors because they are dramatically thinner, lighter, consume far less power, and produce no harmful radiation. They are the dominant display technology in laptops, desktop monitors, smartphones, and televisions. Modern variants include IPS, TN, and VA panel types."
    },
    {
        id: 22,
        question: "Which category of hardware output devices is explicitly designed to produce large-scale engineering blueprints, architectural drawings, and continuous vector graphics using specialized mechanical ink pens?",
        options: ["Thermal Dot-matrix Printer", "Laser Document Printer", "Plotter", "3D Desktop Scanner"],
        correct: 2,
        topic: "Input and Output Devices",
        explanation: "Plotters are specialized output devices designed to produce large-format, high-precision vector graphics — engineering blueprints, architectural plans, CAD drawings, and maps. Unlike printers that produce images dot by dot, plotters draw continuous lines using mechanical pens or cutting tools guided by precise coordinate instructions. They are essential in engineering, architecture, and cartography where accuracy and scale are critical. Modern large-format inkjet plotters have largely replaced pen plotters."
    },
    {
        id: 23,
        question: "What are the two primary operational subdivisions of a computer system's Main Memory (Primary Storage)?",
        options: ["Hard Disk Drive (HDD) and Solid State Drive (SSD)", "Random Access Memory (RAM) and Read-Only Memory (ROM)", "Magnetic Tape and Optical Disc Array", "Internal Cache and Network Attached Storage (NAS)"],
        correct: 1,
        topic: "Computer Memory",
        explanation: "Primary (main) memory is divided into RAM (Random Access Memory) and ROM (Read-Only Memory). RAM is volatile working memory that temporarily stores programs and data currently in use — it loses all content when power is removed. ROM is non-volatile memory that permanently stores essential startup instructions (like the BIOS) that must survive power-off. Together they form the computer's primary memory system, directly accessible by the CPU without going through secondary storage."
    },
    {
        id: 24,
        question: "Why is Random Access Memory (RAM) technically classified as 'Volatile' memory within a computer system architecture?",
        options: ["It is highly susceptible to physical structural wear and damage", "It completely loses all its stored data instantly when the system's electrical power source is turned off", "Its storage capacity expands automatically when running heavy application data", "It can only hold read-only diagnostic system firmware"],
        correct: 1,
        topic: "Computer Memory",
        explanation: "RAM is classified as volatile memory because it requires a continuous electrical power supply to maintain its stored data. The moment power is removed — whether by shutting down or a power failure — all data in RAM is instantly and permanently lost. This is why unsaved work disappears during unexpected shutdowns. RAM's volatility is a fundamental characteristic of its DRAM technology, where data is stored as electrical charges in capacitors that discharge without power."
    },
    {
        id: 25,
        question: "Which type of non-volatile primary memory chip contains the permanent, factory-written startup instructions (such as the BIOS) required to safely boot up the computer hardware?",
        options: ["Static RAM (SRAM)", "Read-Only Memory (ROM)", "Dynamic RAM (DRAM)", "Virtual Swap Memory"],
        correct: 1,
        topic: "Computer Memory",
        explanation: "Read-Only Memory (ROM) is non-volatile memory that retains its contents permanently without power. It is factory-programmed with essential firmware — most importantly the BIOS (Basic Input/Output System) — that initializes hardware components and boots the operating system when the computer is powered on. ROM cannot be modified by normal program execution (though modern variants like EEPROM and Flash ROM can be updated through special procedures). ROM's permanence makes it ideal for storing critical startup code."
    },
    {
        id: 26,
        question: "To bridge the massive speed disparity between the ultra-fast CPU registers and the relatively slow system RAM, computer architects implement a small block of ultra-high-speed memory known as:",
        options: ["Virtual Swap Space", "Cache Memory", "Flash EEPROM", "Secondary Buffer Index"],
        correct: 1,
        topic: "Computer Memory",
        explanation: "Cache memory is a small, extremely fast memory layer positioned between the CPU registers and main RAM. It stores copies of frequently accessed data and instructions so the CPU can retrieve them at near-register speed rather than waiting for the slower RAM. Modern CPUs have multiple cache levels (L1, L2, L3) with L1 being fastest and smallest (closest to the CPU core) and L3 being largest and slightly slower. Cache dramatically reduces the 'Von Neumann bottleneck' and is critical to modern CPU performance."
    },
    {
        id: 27,
        question: "The smallest, most fundamental unit of digital data that a computer can process or store, representing a single electrical state of either an On (1) or an Off (0), is called a:",
        options: ["Byte", "Bit", "Character", "Pixel"],
        correct: 1,
        topic: "Data Representation",
        explanation: "A bit (binary digit) is the most fundamental unit of digital information, representing one of two possible states: 0 (off/false/low voltage) or 1 (on/true/high voltage). All digital data — text, images, audio, video, programs — is ultimately encoded as sequences of bits. The binary number system (base-2) using only 0s and 1s is the natural language of digital electronics because transistors have two stable states. Everything a computer does reduces to manipulating billions of bits per second."
    },
    {
        id: 28,
        question: "In digital data measurement hierarchies, exactly how many collective bits are legally required to form a single Byte?",
        options: ["4 bits", "8 bits", "16 bits", "32 bits"],
        correct: 1,
        topic: "Data Representation",
        explanation: "A byte consists of exactly 8 bits. This grouping became the standard unit of digital data because 8 bits can represent 256 different values (2⁸ = 256), sufficient to encode all standard ASCII characters (letters, digits, punctuation). A byte is the smallest addressable unit of memory in most computer architectures — memory addresses point to individual bytes, not bits. All larger data units (kilobytes, megabytes, etc.) are multiples of bytes."
    },
    {
        id: 29,
        question: "Approximately how many bytes of data are contained within one Kilobyte (KB) when calculated using the standard binary base system (2¹⁰)?",
        options: ["1,000 bytes", "1,024 bytes", "1,000,000 bytes", "512 bytes"],
        correct: 1,
        topic: "Data Representation",
        explanation: "In the binary system used by computers, 1 Kilobyte = 2¹⁰ = 1,024 bytes. This differs from the decimal system where 'kilo' means exactly 1,000. The binary definition arises because computer memory is organized in powers of 2, and 2¹⁰ (1,024) is the closest power of 2 to 1,000. The data hierarchy is: 8 bits = 1 Byte; 1,024 Bytes = 1 KB; 1,024 KB = 1 MB; 1,024 MB = 1 GB; 1,024 GB = 1 TB."
    },
    {
        id: 30,
        question: "Which data storage metric accurately represents roughly one billion bytes (or 1,024 Megabytes) of digital informational volume?",
        options: ["Kilobyte (KB)", "Megabyte (MB)", "Gigabyte (GB)", "Terabyte (TB)"],
        correct: 2,
        topic: "Data Representation",
        explanation: "A Gigabyte (GB) = 1,024 Megabytes = 1,024 × 1,024 Kilobytes = approximately 1 billion bytes (10⁹). Gigabytes are the standard unit for measuring RAM capacity (8GB, 16GB), smartphone storage (128GB), and small to medium file sizes. A typical HD movie is 4–8 GB; a smartphone photo is 3–5 MB. The hierarchy continues: 1,024 GB = 1 Terabyte (TB), used for hard drive capacities; 1,024 TB = 1 Petabyte (PB), used for data center storage."
    },
    {
        id: 31,
        question: "Which computer secondary storage device utilizes mechanical, rapidly spinning magnetic platters and moving read/write heads to store massive quantities of user documents and applications non-volatilely?",
        options: ["Solid State Drive (SSD)", "Hard Disk Drive (HDD)", "Compact Disc ROM (CD-ROM)", "USB Flash Memory Module"],
        correct: 1,
        topic: "Secondary Storage",
        explanation: "Hard Disk Drives (HDDs) store data on rapidly spinning magnetic platters (typically at 5,400 or 7,200 RPM). Read/write heads float nanometers above the platter surface, magnetizing tiny areas to store bits. HDDs are non-volatile — data persists without power. They offer large capacities at low cost (several terabytes for under $100) but are slower than SSDs and vulnerable to physical shock due to their moving parts. HDDs remain widely used for bulk storage where cost per gigabyte matters more than speed."
    },
    {
        id: 32,
        question: "Compared to legacy Hard Disk Drives (HDDs), modern Solid State Drives (SSDs) achieve dramatically faster read and write speeds primarily because they:",
        options: ["Spin internal platters at much higher revolutions per minute (RPM)", "Lack any moving mechanical parts and rely strictly on flash memory chips", "Connect directly to the external analog telephone modem lines", "Operate using thermionic vacuum valve grids"],
        correct: 1,
        topic: "Secondary Storage",
        explanation: "Solid State Drives (SSDs) store data in NAND flash memory chips with no moving mechanical parts. Because there are no spinning platters or moving read/write heads, SSDs access data almost instantaneously — typically 5–10 times faster than HDDs. They are also silent, more durable (resistant to physical shock), lighter, and consume less power. The trade-off is higher cost per gigabyte compared to HDDs. SSDs have become the standard in laptops and high-performance desktops."
    },
    {
        id: 33,
        question: "An optical storage media format that can hold roughly 4.7 Gigabytes of multimedia data, utilizing a red laser beam to read microscopic pits etched into its reflective surface layer, is a:",
        options: ["Blu-ray Disc", "Digital Versatile Disc (DVD)", "Compact Disc (CD)", "Floppy Diskette"],
        correct: 1,
        topic: "Secondary Storage",
        explanation: "A DVD (Digital Versatile Disc) uses a red laser (650nm wavelength) to read microscopic pits and lands on its reflective surface, storing approximately 4.7 GB on a single-layer disc (8.5 GB dual-layer). DVDs store 7 times more data than CDs (700 MB) due to smaller pit sizes and tighter track spacing. Blu-ray discs use a shorter-wavelength blue laser (405nm) to achieve even higher density (25 GB single-layer). DVDs were the dominant format for movies and software distribution before streaming."
    },
    {
        id: 34,
        question: "The collective set of electronic instructions, programs, routines, and symbolic code modules that command a computer system's physical hardware components exactly how to operate is called:",
        options: ["Middleware", "Software", "Shareware", "Firmware"],
        correct: 1,
        topic: "Computer Software",
        explanation: "Software is the complete set of programs, instructions, and data that direct a computer's hardware to perform specific tasks. Unlike hardware (physical components), software is intangible — it exists as patterns of bits stored on media. Software tells the CPU what operations to perform, in what sequence, and with what data. Without software, hardware is inert. The relationship between hardware and software is symbiotic: hardware provides the physical capability; software provides the intelligence to use it."
    },
    {
        id: 35,
        question: "Software is broadly bifurcated into two major functional domains. What are they?",
        options: ["Shareware and Freeware", "System Software and Application Software", "Database Software and Spreadsheet Engines", "Web Browsers and Game Engines"],
        correct: 1,
        topic: "Computer Software",
        explanation: "Software is divided into System Software (programs that manage and control hardware resources, providing a platform for other software — e.g., operating systems, device drivers, utilities) and Application Software (programs that perform specific tasks for end users — e.g., word processors, spreadsheets, web browsers, games). System software operates at the hardware level; application software operates at the user level. This two-tier architecture allows applications to be written without needing to directly manage hardware."
    },
    {
        id: 36,
        question: "Which major classification of software directly controls, manages, and coordinates the underlying physical computer hardware resources, acting as an intermediary layer for user programs?",
        options: ["Custom Application Suites", "System Software", "Word Processing Utilities", "Enterprise Resource Planners"],
        correct: 1,
        topic: "Computer Software",
        explanation: "System software is the layer of software that directly manages hardware resources and provides services to application software. It includes the operating system (which manages CPU, memory, storage, and I/O), device drivers (which enable OS-hardware communication), utility programs (which maintain system health), and language translators (compilers and interpreters). System software acts as an intermediary — applications request services from the OS rather than directly accessing hardware, enabling portability and security."
    },
    {
        id: 37,
        question: "The core system software component that manages a computer's CPU scheduling, primary memory allocation, hardware file systems, and input/output device queues is the:",
        options: ["Compiler Toolchain", "Operating System (OS)", "Device Driver Utility", "Database Management System"],
        correct: 1,
        topic: "Computer Software",
        explanation: "The Operating System (OS) is the master control program that manages all computer resources. Its core functions include: process management (CPU scheduling — deciding which program runs when), memory management (allocating RAM to programs), file system management (organizing data on storage devices), device management (coordinating I/O devices), and providing a user interface. Examples include Windows, macOS, Linux, Android, and iOS. The OS is the foundation on which all application software runs."
    },
    {
        id: 38,
        question: "Which of the following computer systems applications is explicitly categorized as an Operating System (OS)?",
        options: ["Microsoft Office Word", "Microsoft Windows", "Oracle Database Engine", "Adobe Photoshop CC"],
        correct: 1,
        topic: "Computer Software",
        explanation: "Microsoft Windows is an Operating System — system software that manages hardware resources and provides a platform for running application software. Microsoft Word, Oracle Database, and Adobe Photoshop are application software — programs that perform specific user tasks running on top of the OS. Windows manages the CPU, memory, file system, and devices, while Word, Oracle, and Photoshop use the services Windows provides to perform their specific functions."
    },
    {
        id: 39,
        question: "What is the primary role of a Device Driver within a system software framework?",
        options: ["To clean registry entries and accelerate application performance speeds", "To act as a specialized translator program allowing the operating system to successfully communicate with a specific hardware peripheral (like a printer)", "To run comprehensive automated accounting spreadsheets", "To encrypt incoming web browser traffic"],
        correct: 1,
        topic: "Computer Software",
        explanation: "A device driver is a specialized software program that acts as a translator between the operating system and a specific hardware device. Each hardware peripheral (printer, graphics card, keyboard, network adapter) requires its own driver because each device has unique communication protocols. The driver translates the OS's generic commands into the device-specific instructions the hardware understands. Without the correct driver, the OS cannot communicate with the device, making drivers essential for hardware functionality."
    },
    {
        id: 40,
        question: "Software programs like anti-virus scanners, disk defragmenters, file compression tools, and system diagnostic monitors are collectively referred to as:",
        options: ["Custom Operating Systems", "Utility Programs", "Database Applications", "Productivity Suites"],
        correct: 1,
        topic: "Computer Software",
        explanation: "Utility programs are system software tools designed to maintain, optimize, and protect computer systems. They include anti-virus software (detecting and removing malware), disk defragmenters (reorganizing fragmented files for faster access), file compression tools (reducing file sizes), backup utilities (copying data for recovery), disk cleanup tools (removing unnecessary files), and system monitors (tracking performance). Utilities extend the OS's capabilities for system maintenance without being part of the OS core itself."
    },
    {
        id: 41,
        question: "The explicit programmatic instructions written by software developers using high-level programming languages (such as C++, Java, or Python) before it is compiled into native machine code is formally termed the:",
        options: ["Binary executable file", "Source Code", "Object Module", "Kernel Script"],
        correct: 1,
        topic: "Programming Languages",
        explanation: "Source code is the human-readable set of instructions written by programmers in a high-level programming language. It is the original form of a program before translation into machine-executable binary. Source code must be translated by a compiler or interpreter into machine language before the CPU can execute it. Source code is readable by trained programmers, enabling maintenance, debugging, and modification. Open-source software makes source code publicly available, while proprietary software keeps it confidential."
    },
    {
        id: 42,
        question: "A specialized system utility program that translates an entire high-level source code program into machine language object code all at once before execution is called a/an:",
        options: ["Interpreter", "Linker", "Compiler", "Assembler"],
        correct: 2,
        topic: "Programming Languages",
        explanation: "A compiler translates an entire high-level source code program into machine language (object code) in one complete pass before execution begins. The resulting compiled program runs directly on the hardware at full speed. Examples: GCC (C/C++), javac (Java). Compilation produces a standalone executable file. The advantage is fast execution; the disadvantage is that compilation takes time and errors are only reported after the entire program is analyzed. Languages like C, C++, and Go use compilers."
    },
    {
        id: 43,
        question: "How does an Interpreter differ fundamentally from a Compiler when translating high-level programming code into machine language?",
        options: ["It translates code exclusively into analog continuous wave patterns", "It translates and executes the source code line-by-line or statement-by-statement in real time rather than converting the entire file beforehand", "It can only operate on hardware utilizing vacuum tubes", "It completely bypasses the Central Processing Unit"],
        correct: 1,
        topic: "Programming Languages",
        explanation: "An interpreter translates and executes source code one line or statement at a time during runtime, without producing a separate compiled executable. Each line is translated and immediately executed before moving to the next. This makes debugging easier (errors are reported immediately at the offending line) but execution is slower than compiled code because translation happens every time the program runs. Python, JavaScript, and Ruby use interpreters. Some languages (like Java) use a hybrid approach."
    },
    {
        id: 44,
        question: "Low-level programming languages that use easily human-readable, short alphanumeric mnemonics (such as ADD, SUB, MOV) to directly represent underlying machine instructions are classified as:",
        options: ["Machine Languages", "Assembly Languages", "Object-Oriented Languages", "Declarative Languages"],
        correct: 1,
        topic: "Programming Languages",
        explanation: "Assembly language is a low-level programming language that uses short mnemonic codes (ADD, SUB, MOV, JMP) to represent individual machine instructions, making them more readable than raw binary. Each assembly instruction corresponds directly to one machine instruction for a specific CPU architecture. Assembly is used when maximum performance or direct hardware control is required — in operating system kernels, device drivers, and embedded systems. An assembler translates assembly mnemonics into binary machine code."
    },
    {
        id: 45,
        question: "The fundamental system software module that translates low-level Assembly language mnemonic code into binary Machine Language executable code is known as an:",
        options: ["Interpreter", "Assembler", "Compiler", "Text Editor"],
        correct: 1,
        topic: "Programming Languages",
        explanation: "An assembler is a system software tool that translates assembly language mnemonics (ADD, MOV, SUB) into binary machine code that the CPU can directly execute. Unlike a compiler (which handles high-level languages) or an interpreter (which executes line by line), an assembler performs a direct one-to-one translation of assembly instructions to machine instructions. The output is an object file containing binary machine code specific to the target CPU architecture."
    },
    {
        id: 46,
        question: "Which generation of programming languages introduced high-level, human-oriented, and platform-independent instruction sets like FORTRAN, COBOL, and C?",
        options: ["First Generation (1GL)", "Second Generation (2GL)", "Third Generation (3GL)", "Fourth Generation (4GL)"],
        correct: 2,
        topic: "Programming Languages",
        explanation: "Third Generation Languages (3GLs), developed from the late 1950s onward, introduced high-level, human-readable syntax that was largely independent of specific hardware. FORTRAN (1957, scientific computing), COBOL (1959, business data processing), C (1972, systems programming), Pascal, and BASIC are classic 3GLs. They require compilers or interpreters to translate to machine code but dramatically increased programmer productivity by abstracting away hardware details. 3GLs remain the dominant paradigm for most software development today."
    },
    {
        id: 47,
        question: "The binary number system utilized inherently by modern digital computer circuitry to process and store data operates entirely on which mathematical base?",
        options: ["Base 5", "Base 10 (Decimal)", "Base 2 (Binary)", "Base 16 (Hexadecimal)"],
        correct: 2,
        topic: "Number Systems",
        explanation: "Digital computers use the binary (base-2) number system because electronic circuits have two stable states: on (1) and off (0), corresponding to high and low voltage. All data — numbers, text, images, programs — is ultimately represented as sequences of 0s and 1s. Binary arithmetic underlies all CPU operations. While humans use decimal (base-10), computers must convert decimal inputs to binary for processing and convert binary results back to decimal for human-readable output."
    },
    {
        id: 48,
        question: "What is the decimal equivalent of the binary number 1011?",
        options: ["9", "11", "13", "15"],
        correct: 1,
        topic: "Number Systems",
        explanation: "To convert binary 1011 to decimal: multiply each bit by its positional power of 2 and sum the results. From right to left: (1×2⁰) + (1×2¹) + (0×2²) + (1×2³) = (1×1) + (1×2) + (0×4) + (1×8) = 1 + 2 + 0 + 8 = 11. Binary-to-decimal conversion is fundamental to understanding how computers represent numbers. Each binary position represents a power of 2, with the rightmost bit being 2⁰ (ones place) and each position to the left doubling in value."
    },
    {
        id: 49,
        question: "What is the direct binary representation of the decimal number 14?",
        options: ["1010", "1100", "1110", "1111"],
        correct: 2,
        topic: "Number Systems",
        explanation: "To convert decimal 14 to binary, repeatedly divide by 2 and record remainders: 14÷2=7 R0; 7÷2=3 R1; 3÷2=1 R1; 1÷2=0 R1. Reading remainders bottom to top: 1110. Verification: (1×2³)+(1×2²)+(1×2¹)+(0×2⁰) = 8+4+2+0 = 14. Binary 1110 = decimal 14. This repeated division method is the standard algorithm for decimal-to-binary conversion and works for any decimal number."
    },
    {
        id: 50,
        question: "The Base-16 numbering system widely used by computer scientists to compactly represent long binary strings (such as memory addresses or color codes), utilizing digits 0–9 and letters A–F, is called:",
        options: ["Octal System", "Decimal System", "Hexadecimal System", "Ternary System"],
        correct: 2,
        topic: "Number Systems",
        explanation: "The hexadecimal (base-16) system uses 16 symbols: digits 0–9 and letters A(10), B(11), C(12), D(13), E(14), F(15). Each hex digit represents exactly 4 binary bits, making hex a compact shorthand for binary. A 32-bit memory address requiring 32 binary digits can be expressed in just 8 hex digits. Hex is used extensively in programming for memory addresses (0xFF3A), color codes (#FF5733), and machine code representation. It bridges the gap between human-readable notation and binary machine representation."
    },
    {
        id: 51,
        question: "The standard character encoding scheme that assigns a unique 7-bit or 8-bit binary number to represent up to 256 distinct alphanumeric characters and control symbols on a computer keyboard is:",
        options: ["EBCDIC", "ASCII (American Standard Code for Information Interchange)", "Huffman Code", "Baudot Code"],
        correct: 1,
        topic: "Data Representation",
        explanation: "ASCII (American Standard Code for Information Interchange) is the foundational character encoding standard that assigns unique binary codes to 128 characters (7-bit) including uppercase and lowercase letters, digits 0–9, punctuation marks, and control characters. Extended ASCII uses 8 bits for 256 characters. For example, 'A' = 65 (01000001), 'a' = 97 (01100001), '0' = 48 (00110000). ASCII became the universal standard for text representation in computers and remains the foundation of modern encoding systems like Unicode."
    },
    {
        id: 52,
        question: "Which modern, universal character-encoding standard was developed to supersede ASCII by utilizing up to 32 bits, allowing it to represent virtually every written language, symbol, and script on Earth?",
        options: ["BCD Code", "Unicode", "Gray Code", "Excess-3 Code"],
        correct: 1,
        topic: "Data Representation",
        explanation: "Unicode is the universal character encoding standard designed to represent every character from every writing system on Earth — over 143,000 characters covering 154 scripts including Latin, Arabic, Chinese, Devanagari, emoji, and mathematical symbols. While ASCII handles only 128 characters, Unicode's UTF-8, UTF-16, and UTF-32 encodings can represent over 1 million code points. UTF-8 is the dominant encoding on the internet, backward-compatible with ASCII. Unicode solved the problem of incompatible national character sets that plagued early computing."
    },
    {
        id: 53,
        question: "A collection of computers and peripheral hardware components linked together via communication channels to facilitate resource sharing, data exchange, and collaborative processing is defined as a:",
        options: ["Database Matrix", "Computer Network", "Operating System", "Centralized Bus Core"],
        correct: 1,
        topic: "Computer Networks",
        explanation: "A computer network is an interconnected system of computing devices (computers, servers, printers, smartphones) linked by communication channels (cables, wireless signals, fiber optics) to share resources and exchange data. Networks enable file sharing, printer sharing, internet access, email, video conferencing, and collaborative applications. The fundamental benefit of networking is resource sharing — expensive hardware, software licenses, and internet connections can be shared across many users rather than duplicated for each."
    },
    {
        id: 54,
        question: "Which category of computer networks is geographically restricted to a single room, office floor, building, or university campus?",
        options: ["Local Area Network (LAN)", "Metropolitan Area Network (MAN)", "Wide Area Network (WAN)", "Personal Area Network (PAN)"],
        correct: 0,
        topic: "Computer Networks",
        explanation: "A Local Area Network (LAN) connects computers and devices within a limited geographic area — a single room, office floor, building, or campus. LANs typically use Ethernet cables or Wi-Fi and offer high data transfer speeds (100 Mbps to 10 Gbps). They are privately owned and managed. Examples include a home network, office network, or university campus network. LANs contrast with MANs (city-wide) and WANs (country/global scale, like the internet)."
    },
    {
        id: 55,
        question: "The global network of interconnected computer systems spanning the entire planet, utilizing the standardized TCP/IP protocol suite to serve billions of users worldwide, is the:",
        options: ["Intranet", "Extranet", "Internet", "Ethernet"],
        correct: 2,
        topic: "Computer Networks",
        explanation: "The Internet is the global system of interconnected computer networks that uses the TCP/IP protocol suite to link billions of devices worldwide. It evolved from ARPANET (1969) and became publicly accessible in the early 1990s. The Internet supports the World Wide Web, email, file transfer, streaming, social media, and cloud computing. It is a network of networks — millions of private, public, academic, and government networks interconnected through standardized protocols. An intranet is a private internal network; an extranet extends access to authorized external users."
    },
    {
        id: 56,
        question: "The geometric or physical arrangement layout in which all nodes, computers, and devices are interconnected within a network is called the network:",
        options: ["Protocols", "Architecture", "Topology", "Interfacing"],
        correct: 2,
        topic: "Computer Networks",
        explanation: "Network topology describes the physical or logical arrangement of nodes and connections in a network. Physical topology refers to the actual layout of cables and devices; logical topology refers to how data flows through the network. Common topologies include Star (all nodes connect to a central hub), Bus (all nodes share a single cable), Ring (nodes form a closed loop), Mesh (every node connects to every other), and Tree (hierarchical combination of star and bus). Topology affects performance, fault tolerance, and cost."
    },
    {
        id: 57,
        question: "In which physical network topology is every peripheral workstation or node connected directly to a central coordinating device, such as a hub or a network switch?",
        options: ["Bus Topology", "Ring Topology", "Star Topology", "Mesh Topology"],
        correct: 2,
        topic: "Computer Networks",
        explanation: "In a Star topology, every node (computer, printer, device) connects directly to a central device — a hub or switch — via its own dedicated cable. All communication passes through the central device. Advantages: easy to add/remove nodes, fault isolation (one cable failure doesn't affect others), easy troubleshooting. Disadvantage: the central device is a single point of failure — if it fails, the entire network goes down. Star topology is the most common arrangement in modern Ethernet LANs."
    },
    {
        id: 58,
        question: "A network topology where a single central backbone cable acts as the shared communication medium, with all computing nodes tapping into it sequentially, is a:",
        options: ["Star Topology", "Bus Topology", "Ring Topology", "Tree Topology"],
        correct: 1,
        topic: "Computer Networks",
        explanation: "In a Bus topology, all nodes connect to a single shared backbone cable (the bus). Data transmitted by any node travels along the entire bus and is received by all nodes, but only the intended recipient processes it. Terminators at each end prevent signal reflection. Advantages: simple, inexpensive, easy to install. Disadvantages: a break anywhere in the backbone cable disables the entire network; performance degrades as more nodes are added due to collisions. Bus topology was common in early Ethernet networks but is largely obsolete today."
    },
    {
        id: 59,
        question: "The core network device that inspects incoming data packets, reads their destination IP addresses, and intelligently forwards them across separate networks toward their final destination is a:",
        options: ["Modem", "Repeater", "Router", "Network Interface Card (NIC)"],
        correct: 2,
        topic: "Computer Networks",
        explanation: "A router is a network device that operates at Layer 3 (Network Layer) of the OSI model. It reads the destination IP address of each incoming data packet and uses routing tables to determine the best path to forward it toward its destination, potentially across multiple different networks. Routers connect different networks together — for example, connecting a home LAN to the internet. They perform Network Address Translation (NAT), provide firewall functions, and manage traffic between networks."
    },
    {
        id: 60,
        question: "What is the structural role of a Modem (Modulator-Demodulator) in data communication networks?",
        options: ["It scans incoming software files for potential malware strains", "It converts digital data from a computer into analog signals for transmission over analog telephone lines, and vice versa", "It dynamically allocates primary system RAM to application servers", "It manages the cooling fans inside a rack server enclosure"],
        correct: 1,
        topic: "Computer Networks",
        explanation: "A modem (Modulator-Demodulator) converts between digital data (used by computers) and analog signals (used by traditional telephone lines). Modulation converts digital bits into analog waveforms for transmission; demodulation converts received analog signals back into digital bits. Modems enabled early internet access over telephone lines (dial-up). Modern broadband modems connect to cable, DSL, or fiber networks. The modem is the essential interface between a computer's digital world and analog transmission infrastructure."
    },
    {
        id: 61,
        question: "A massive network infrastructure that interconnects multiple Local Area Networks (LANs) across an entire metropolitan city or geographical municipality is known as a:",
        options: ["Personal Area Network (PAN)", "Metropolitan Area Network (MAN)", "Storage Area Network (SAN)", "Virtual Private Network (VPN)"],
        correct: 1,
        topic: "Computer Networks",
        explanation: "A Metropolitan Area Network (MAN) spans a city or large campus, covering a geographic area larger than a LAN but smaller than a WAN. MANs typically connect multiple LANs within a city — for example, linking all branches of a bank across a city, or connecting government offices across a municipality. They use high-speed fiber optic cables or wireless connections. Cable TV networks and city-wide Wi-Fi systems are examples of MAN infrastructure."
    },
    {
        id: 62,
        question: "The global system of interconnected computer networks uses a unique, hierarchical identification label for every machine connected to the Internet. This string of numbers is called a/an:",
        options: ["MAC Address", "IP Address (Internet Protocol Address)", "URL String", "Gateway Host Token"],
        correct: 1,
        topic: "Computer Networks",
        explanation: "An IP (Internet Protocol) Address is a unique numerical label assigned to every device connected to a network that uses the Internet Protocol. IPv4 addresses use 32 bits expressed as four decimal numbers (e.g., 192.168.1.1); IPv6 uses 128 bits for a vastly larger address space. IP addresses serve two functions: identifying the host device and providing its network location for routing. Without IP addresses, data packets could not be directed to their correct destinations across the internet."
    },
    {
        id: 63,
        question: "When a user types a human-readable web address like www.nou.edu.ng into a browser, which Internet application service translates that hostname into its respective machine-readable numeric IP address?",
        options: ["FTP (File Transfer Protocol)", "DNS (Domain Name System)", "DHCP (Dynamic Host Configuration Protocol)", "SMTP (Simple Mail Transfer Protocol)"],
        correct: 1,
        topic: "Computer Networks",
        explanation: "The Domain Name System (DNS) is the internet's phonebook — it translates human-readable domain names (www.google.com) into machine-readable IP addresses (142.250.80.46) that computers use to route traffic. When you type a URL, your browser queries a DNS server to resolve the domain name to an IP address before establishing a connection. Without DNS, users would need to memorize numeric IP addresses for every website. DNS is a hierarchical, distributed database system managed by servers worldwide."
    },
    {
        id: 64,
        question: "Which specific application layer protocol serves as the structural foundation for data communication on the World Wide Web, dictating how hypermedia documents are formatted and transmitted?",
        options: ["FTP", "HTTP (Hypertext Transfer Protocol)", "POP3", "SSH"],
        correct: 1,
        topic: "Computer Networks",
        explanation: "HTTP (Hypertext Transfer Protocol) is the application-layer protocol that defines how web browsers and web servers communicate. When you click a link or type a URL, your browser sends an HTTP request to the server; the server responds with the requested HTML page, images, or data. HTTPS (HTTP Secure) adds TLS encryption for security. HTTP is stateless — each request is independent. It is the foundation of the World Wide Web and defines the request-response model of web communication."
    },
    {
        id: 65,
        question: "A software application explicitly designed to locate, retrieve, and display content found on the World Wide Web (such as Google Chrome, Mozilla Firefox, or Microsoft Edge) is a:",
        options: ["Search Engine", "Web Browser", "Web Server", "Hypertext Linker"],
        correct: 1,
        topic: "Computer Networks",
        explanation: "A web browser is a software application that retrieves, renders, and displays web content — HTML pages, images, videos, and interactive applications — from web servers via HTTP/HTTPS. Browsers interpret HTML, CSS, and JavaScript to present visually formatted pages. Examples include Google Chrome, Mozilla Firefox, Microsoft Edge, Safari, and Opera. A web browser is distinct from a search engine (which indexes and searches web content) — though browsers typically include a search engine as their default homepage."
    },
    {
        id: 66,
        question: "What is the primary technical function of a Firewall in a computer network security framework?",
        options: ["To speed up the internal data transfer rates between local workstations", "To monitor and filter incoming and outgoing network traffic based on an organization's previously established security rules, acting as a barrier against unauthorized access", "To automatically back up database tables to secondary storage locations", "To handle the physical routing of telephone modems"],
        correct: 1,
        topic: "Computer Security",
        explanation: "A firewall is a network security system — hardware, software, or both — that monitors and controls incoming and outgoing network traffic based on predetermined security rules. It establishes a barrier between a trusted internal network and untrusted external networks (like the internet), blocking unauthorized access while permitting legitimate communication. Firewalls can filter by IP address, port number, protocol, or application. They are the first line of defense in network security architecture."
    },
    {
        id: 67,
        question: "A type of malicious software program that is explicitly written by rogue programmers to cause havoc, replicate itself by attaching to legitimate host files, and spread across computing systems is a:",
        options: ["Utility Suite", "Computer Virus", "Firmware Core", "Device Driver"],
        correct: 1,
        topic: "Computer Security",
        explanation: "A computer virus is malicious software (malware) that attaches itself to legitimate host files or programs and replicates when the infected file is executed. Like biological viruses, computer viruses require a host to spread — they cannot propagate independently. When activated, viruses can corrupt files, steal data, display unwanted messages, or render systems inoperable. They spread via infected email attachments, downloaded files, USB drives, and network shares. Antivirus software detects and removes viruses using signature databases."
    },
    {
        id: 68,
        question: "How does a computer Worm differ fundamentally from a standard computer virus?",
        options: ["It only targets the physical power supply unit of desktop computers", "It can self-replicate and spread independently across a computer network without needing to attach itself to an existing human-executed host file or program", "It is written strictly in low-level machine assembly code", "It functions exclusively as a hardware component inside servers"],
        correct: 1,
        topic: "Computer Security",
        explanation: "A computer worm is self-replicating malware that spreads across networks independently, without needing to attach to a host file or require user execution. Worms exploit network vulnerabilities or security flaws to propagate automatically from system to system. This self-propagation makes worms potentially more dangerous than viruses — they can spread exponentially across thousands of systems within hours. The Morris Worm (1988) and WannaCry (2017) are famous examples. Worms consume network bandwidth and system resources even without a destructive payload."
    },
    {
        id: 69,
        question: "A type of deceptive malware that masquerades or disguises itself as entirely legitimate, safe software to trick a user into executing it, only to release a hostile payload once installed, is called a:",
        options: ["Spyware Monitor", "Trojan Horse", "Ransomware Locker", "Rootkit Utility"],
        correct: 1,
        topic: "Computer Security",
        explanation: "A Trojan Horse (or Trojan) is malware disguised as legitimate, useful software to trick users into installing it. Unlike viruses and worms, Trojans do not self-replicate — they rely on social engineering to deceive users. Once executed, Trojans can create backdoors for remote access, steal passwords, download additional malware, or destroy data. The name references the Greek myth of the wooden horse used to infiltrate Troy. Trojans are commonly distributed as fake software updates, pirated applications, or email attachments."
    },
    {
        id: 70,
        question: "The illicit cybersecurity threat where a hacker uses fraudulent communication (typically deceptive emails or fake login pages) to trick individuals into revealing sensitive personal info like banking passwords or BVN credentials is:",
        options: ["Data Mining", "Phishing", "Decoupling", "Denial of Service (DoS)"],
        correct: 1,
        topic: "Computer Security",
        explanation: "Phishing is a social engineering cyberattack where criminals impersonate trusted entities — banks, government agencies, popular websites — through fraudulent emails, text messages, or fake websites to trick victims into revealing sensitive information (passwords, credit card numbers, BVN). Phishing exploits human psychology rather than technical vulnerabilities. Spear phishing targets specific individuals; whaling targets executives. It is the most common form of cybercrime globally. Defense includes user education, email filters, and multi-factor authentication."
    },
    {
        id: 71,
        question: "The foundational security process of converting human-readable plain text data into an unreadable, scrambled ciphertext format using a mathematical cryptographic key is known as:",
        options: ["Compiling", "Encryption", "Defragmentation", "Digitizing"],
        correct: 1,
        topic: "Computer Security",
        explanation: "Encryption is the process of transforming readable plaintext into unreadable ciphertext using a cryptographic algorithm and key, so that only authorized parties with the correct decryption key can read it. Encryption protects data confidentiality during storage and transmission. Symmetric encryption uses the same key for encryption and decryption (AES); asymmetric encryption uses a public key to encrypt and a private key to decrypt (RSA). HTTPS, WhatsApp end-to-end encryption, and disk encryption all rely on cryptographic encryption."
    },
    {
        id: 72,
        question: "In Microsoft Word or equivalent word processors, the structural layout orientation where the page is printed or viewed vertically (taller than it is wide) is called:",
        options: ["Landscape", "Portrait", "Ledger", "A4 Executive"],
        correct: 1,
        topic: "Application Software",
        explanation: "Portrait orientation positions the page vertically — taller than it is wide — which is the default orientation for most documents, letters, reports, and books. Landscape orientation rotates the page 90 degrees so it is wider than it is tall, used for tables, spreadsheets, presentations, and wide images. In Microsoft Word, page orientation is set under Page Layout > Orientation. Standard A4 paper in portrait is 210mm wide × 297mm tall; in landscape it is 297mm wide × 210mm tall."
    },
    {
        id: 73,
        question: "In automated electronic spreadsheets (like Microsoft Excel), the fundamental intersection of a single vertical column and a horizontal row where data is entered is called a:",
        options: ["Sheet", "Cell", "Formula Bar", "Gridline"],
        correct: 1,
        topic: "Application Software",
        explanation: "A cell is the basic unit of a spreadsheet — the rectangular box formed at the intersection of a column (identified by letters: A, B, C...) and a row (identified by numbers: 1, 2, 3...). Each cell has a unique address called a cell reference (e.g., B3 = column B, row 3). Cells can contain text, numbers, dates, or formulas. Cell references are used in formulas to perform calculations across multiple cells. A spreadsheet workbook contains multiple sheets, each containing thousands of cells."
    },
    {
        id: 74,
        question: "Every operational mathematical formula or computing function typed inside a Microsoft Excel spreadsheet cell must strictly begin with which specific character symbol?",
        options: ["# (Hashtag)", "= (Equal sign)", "@ (At symbol)", "$ (Dollar sign)"],
        correct: 1,
        topic: "Application Software",
        explanation: "In Microsoft Excel (and all spreadsheet applications), every formula must begin with the equals sign (=) to signal to the application that the cell contains a formula rather than plain text or a number. Without the = prefix, Excel treats the entry as literal text. Examples: =SUM(A1:A10) adds values in cells A1 through A10; =A1+B1 adds two cells; =AVERAGE(B2:B20) calculates the mean. The = sign is the universal formula initiator in spreadsheet software."
    },
    {
        id: 75,
        question: "Which type of productivity software application is specifically designed to store, manipulate, organize, retrieve, and cross-reference massive collections of highly structured institutional data entries?",
        options: ["Word Processor", "Database Management System (DBMS)", "Desktop Publishing Suite", "Presentation Graphics Utility"],
        correct: 1,
        topic: "Application Software",
        explanation: "A Database Management System (DBMS) is software that creates, manages, and provides controlled access to databases — organized collections of structured data. A DBMS handles data storage, retrieval, updating, security, backup, and multi-user access. Examples include Microsoft Access, MySQL, Oracle, PostgreSQL, and SQL Server. DBMSs are essential for organizations managing large volumes of structured data — banks (account records), hospitals (patient records), universities (student records), and e-commerce platforms (product and order data)."
    },
    {
        id: 76,
        question: "The specialized high-level database language used universally by computer professionals to create, query, update, delete, and manipulate data stored inside relational databases is:",
        options: ["HTML", "SQL (Structured Query Language)", "Assembly", "Fortran"],
        correct: 1,
        topic: "Application Software",
        explanation: "SQL (Structured Query Language) is the standard language for managing and manipulating relational databases. Core SQL commands include: SELECT (retrieve data), INSERT (add records), UPDATE (modify records), DELETE (remove records), CREATE TABLE (define structure), and JOIN (combine tables). SQL was developed at IBM in the 1970s and became the ANSI/ISO standard for relational databases. It is used with virtually all relational DBMS products including MySQL, Oracle, SQL Server, and PostgreSQL."
    },
    {
        id: 77,
        question: "In a standard relational database table layout, a single vertical column that represents a specific attribute or characteristic of the data structure is called a/an:",
        options: ["Record / Row", "Field / Column", "Schema Array", "Index Key"],
        correct: 1,
        topic: "Application Software",
        explanation: "A field (or column) in a relational database table represents a single attribute or characteristic of the entity being stored. For example, in a student table, fields might include StudentID, FirstName, LastName, DateOfBirth, and CourseCode. Each field has a defined data type (text, number, date, boolean) that constrains what values it can hold. Fields define the structure of the table — what information is captured about each entity. All records in a table share the same set of fields."
    },
    {
        id: 78,
        question: "Conversely, a single horizontal row within a relational database table that contains a complete set of related data values belonging to one specific entity is called a/an:",
        options: ["Field", "Record (or Tuple/Row)", "Datatype", "Domain"],
        correct: 1,
        topic: "Application Software",
        explanation: "A record (also called a tuple or row) is a single horizontal entry in a database table containing a complete set of field values for one specific entity instance. For example, one student's complete data — ID, name, date of birth, course — constitutes one record. A table with 500 students has 500 records. Records are the individual data instances that populate the table structure defined by its fields. In SQL, each row returned by a SELECT query is a record."
    },
    {
        id: 79,
        question: "The unique field or column designated within a database table to ensure that every single record stored inside that specific table can be uniquely identified from all others is the:",
        options: ["Foreign Key", "Primary Key", "Composite Index", "Candidate Token"],
        correct: 1,
        topic: "Application Software",
        explanation: "A Primary Key is a field (or combination of fields) in a database table whose value uniquely identifies each record. Primary keys must be unique (no two records can have the same value) and non-null (every record must have a value). Examples: StudentID in a student table, AccountNumber in a bank account table. Primary keys enable precise record retrieval and form the basis of relationships between tables. A Foreign Key in one table references the Primary Key of another, establishing relational links."
    },
    {
        id: 80,
        question: "An internal system hardware component designed with an array of tiny metallic pins that links all key sub-units of a computer (CPU, RAM, Hard Drives, Expansion Cards) together to form a unified circuit board is the:",
        options: ["Power Supply Unit", "Motherboard (Mainboard)", "Sound Card Bus", "System Clock Oscillator"],
        correct: 1,
        topic: "Computer Hardware and Software",
        explanation: "The motherboard (mainboard) is the primary printed circuit board of a computer that physically and electrically connects all major components. It houses the CPU socket, RAM slots, expansion card slots (PCIe), storage connectors (SATA, M.2), USB headers, and the chipset that manages communication between components. The motherboard's system buses (data bus, address bus, control bus) carry signals between the CPU, memory, and peripherals. The form factor (ATX, Micro-ATX, Mini-ITX) determines the motherboard's physical size and feature set."
    },
    {
        id: 81,
        question: "What is the structural term used to describe the primary, high-bandwidth internal communication highway on a motherboard that physically transfers data bits between the CPU, memory, and peripheral expansion slots?",
        options: ["Bridge link", "System Bus", "Port Interface", "Registry Rail"],
        correct: 1,
        topic: "Computer Architecture",
        explanation: "The system bus is the primary communication pathway on a motherboard that transfers data between the CPU, memory, and peripheral devices. It consists of three sub-buses: the Data Bus (carries actual data), the Address Bus (carries memory addresses specifying where data should be read/written), and the Control Bus (carries timing and control signals). Bus width (32-bit, 64-bit) determines how much data can be transferred simultaneously. Modern systems use specialized high-speed buses like PCIe for graphics and NVMe for storage."
    },
    {
        id: 82,
        question: "Which type of expansion bus architecture is universally used on modern motherboards to connect high-speed graphics cards and Solid State Drives directly to the CPU core?",
        options: ["ISA (Industry Standard Architecture)", "PCIe (Peripheral Component Interconnect Express)", "USB 2.0 Base", "AGP legacy rail"],
        correct: 1,
        topic: "Computer Architecture",
        explanation: "PCIe (Peripheral Component Interconnect Express) is the dominant high-speed expansion bus standard on modern motherboards. It uses serial point-to-point lanes (x1, x4, x8, x16) to connect graphics cards, NVMe SSDs, network cards, and other expansion devices directly to the CPU with extremely high bandwidth. PCIe 4.0 offers ~16 GB/s on a x16 slot; PCIe 5.0 doubles this. It replaced older parallel bus standards (ISA, PCI, AGP) due to its dramatically superior speed and scalability."
    },
    {
        id: 83,
        question: "The non-volatile configuration memory on a motherboard that preserves basic system hardware settings — such as the current date, time, and hard drive parameters — powered by a small coin-cell battery when the computer is completely unplugged is the:",
        options: ["EEPROM", "CMOS RAM", "SRAM Cache", "Flash Cache"],
        correct: 1,
        topic: "Computer Architecture",
        explanation: "CMOS RAM (Complementary Metal-Oxide Semiconductor RAM) is a small, low-power memory chip on the motherboard that stores BIOS/UEFI configuration settings: system date and time, boot device order, hardware parameters, and power management settings. It is powered by a small CR2032 coin-cell battery, allowing it to retain settings even when the computer is unplugged. Removing this battery resets BIOS settings to factory defaults. CMOS RAM is distinct from main RAM — it stores only configuration data, not programs or user files."
    },
    {
        id: 84,
        question: "When a computer system is powered on, the BIOS immediately executes a diagnostic routine called POST to verify that basic hardware components are operational. What does POST stand for?",
        options: ["Primary Output System Terminal", "Power-On Self-Test", "Peripheral Operational Status Tracking", "Program Execution Security Token"],
        correct: 1,
        topic: "Computer Architecture",
        explanation: "POST (Power-On Self-Test) is a diagnostic sequence executed by the BIOS/UEFI firmware immediately when a computer is powered on, before the operating system loads. POST checks that essential hardware components are present and functional: CPU, RAM, graphics card, keyboard, and storage devices. If POST detects a critical error, it halts the boot process and signals the problem through beep codes or on-screen error messages. A successful POST completion allows the BIOS to locate and load the operating system bootloader."
    },
    {
        id: 85,
        question: "The core component of an Operating System that remains loaded in memory at all times, directly managing the hardware resources, CPU scheduling, and process execution context is the:",
        options: ["Shell", "Kernel", "File System", "Command Prompt"],
        correct: 1,
        topic: "Computer Software",
        explanation: "The kernel is the core of the operating system — the fundamental program that remains permanently in memory and has complete control over the system. It manages CPU scheduling (deciding which process runs when), memory allocation, device I/O, and inter-process communication. The kernel operates in privileged mode with direct hardware access. User applications interact with hardware only through kernel system calls, providing security and stability. The shell (command line or GUI) is the user-facing layer that communicates with the kernel."
    },
    {
        id: 86,
        question: "An operating system interface model that relies entirely on text characters, where users must type explicit verbal commands at a prompt to execute tasks (like MS-DOS), is classified as a:",
        options: ["Graphical User Interface (GUI)", "Command Line Interface (CLI) / Character User Interface (CUI)", "Menu-Driven Architecture", "Touch-Responsive Layout"],
        correct: 1,
        topic: "Computer Software",
        explanation: "A Command Line Interface (CLI), also called Character User Interface (CUI), requires users to interact with the computer by typing text commands at a prompt. Examples include MS-DOS, Unix/Linux terminal, and Windows Command Prompt. CLIs offer precise control, scripting capability, and efficiency for experienced users but have a steep learning curve. They consume minimal system resources compared to GUIs. System administrators and developers frequently use CLIs for server management, automation scripts, and programming tasks."
    },
    {
        id: 87,
        question: "Conversely, an interface that allows users to interact with a computer using visual icons, windows, menus, and pointer devices (like modern Windows or macOS) is called a:",
        options: ["Command Line Interface (CLI)", "Graphical User Interface (GUI)", "Alphanumeric Core", "Assembly Layout Terminal"],
        correct: 1,
        topic: "Computer Software",
        explanation: "A Graphical User Interface (GUI) allows users to interact with computers through visual elements — icons, windows, menus, buttons, and dialog boxes — using a mouse, touchpad, or touchscreen. GUIs were pioneered by Xerox PARC, popularized by Apple Macintosh (1984), and became dominant with Microsoft Windows. GUIs dramatically lowered the barrier to computer use by replacing memorized text commands with intuitive visual metaphors (desktop, folders, trash can). Modern GUIs include touch interfaces on smartphones and tablets."
    },
    {
        id: 88,
        question: "The operating system memory-management technique that uses a portion of the secondary hard drive storage space to simulate additional primary RAM when the physical memory is completely exhausted is called:",
        options: ["Cache Buffering", "Virtual Memory", "Dynamic Allocation", "Flash Swapping"],
        correct: 1,
        topic: "Computer Software",
        explanation: "Virtual memory is an OS memory management technique that extends the apparent amount of RAM by using hard drive space as overflow memory. When physical RAM is full, the OS moves inactive memory pages to a swap file (Windows) or swap partition (Linux) on the hard drive, freeing RAM for active processes. This allows running more programs than physical RAM would permit. The trade-off is speed — hard drive access is thousands of times slower than RAM, so heavy virtual memory use significantly degrades performance."
    },
    {
        id: 89,
        question: "During heavy multitasking, if a computer spends more time moving data pages back and forth between physical RAM and virtual memory hard disk space than it does executing actual instructions, the system enters a frozen performance state called:",
        options: ["Deadlocking", "Thrashing", "Paging Index", "Context Crashing"],
        correct: 1,
        topic: "Computer Software",
        explanation: "Thrashing occurs when a computer's virtual memory system is overwhelmed — the OS spends more time swapping pages between RAM and the hard drive than executing actual program instructions. This happens when too many processes compete for insufficient physical RAM, causing constant page faults. The system becomes extremely slow or appears frozen. Solutions include adding more physical RAM, closing unnecessary programs, or adjusting the OS's page replacement algorithm. Thrashing is a classic symptom of insufficient RAM for the workload."
    },
    {
        id: 90,
        question: "Which network transmission medium consists of a central copper wire surrounded by an insulation layer, a braided metallic shield, and an outer plastic jacket, commonly used for cable television and legacy Ethernet lines?",
        options: ["Shielded Twisted Pair (STP)", "Coaxial Cable", "Fiber Optic Cable", "Microwave Link"],
        correct: 1,
        topic: "Computer Networks",
        explanation: "Coaxial cable consists of a central copper conductor surrounded by a dielectric insulator, a braided metallic shield (which reduces electromagnetic interference), and an outer plastic jacket. The shield gives coaxial cable better noise immunity than twisted pair. It was the original Ethernet medium (10BASE2, 10BASE5) and remains the standard for cable TV (CATV) and broadband internet distribution. Coaxial cable supports higher bandwidth over longer distances than twisted pair but is bulkier and more expensive to install."
    },
    {
        id: 91,
        question: "Which data communication medium utilizes ultra-thin strands of pure glass or plastic to transmit digital information across vast distances as pulses of modulated light, offering the highest speeds and absolute resistance to electromagnetic interference?",
        options: ["Unshielded Twisted Pair (UTP)", "Coaxial Core Line", "Fiber Optic Cable", "Infrared Array"],
        correct: 2,
        topic: "Computer Networks",
        explanation: "Fiber optic cable transmits data as pulses of light through ultra-thin glass or plastic strands using total internal reflection. It offers the highest bandwidth (terabits per second), longest transmission distances (tens of kilometers without repeaters), complete immunity to electromagnetic interference, and superior security (extremely difficult to tap). Fiber is used for internet backbone infrastructure, undersea cables, and high-speed campus networks. Single-mode fiber carries one light path for long distances; multi-mode fiber carries multiple paths for shorter distances."
    },
    {
        id: 92,
        question: "The standard local networking technology that uses twisted-pair copper cables terminated with RJ-45 modular connectors to interlink local workstations within a LAN framework is:",
        options: ["Bluetooth", "Ethernet", "Wi-Fi (802.11)", "Dial-up"],
        correct: 1,
        topic: "Computer Networks",
        explanation: "Ethernet is the dominant wired LAN technology, standardized as IEEE 802.3. It uses twisted-pair copper cables (Cat5e, Cat6, Cat6a) with RJ-45 connectors to connect devices at speeds from 10 Mbps (original) to 10 Gbps (10GbE) and beyond. Ethernet uses CSMA/CD (Carrier Sense Multiple Access with Collision Detection) to manage shared medium access. Modern Ethernet networks use switches rather than hubs, providing dedicated bandwidth to each port. Ethernet is the foundation of virtually all wired LAN infrastructure worldwide."
    },
    {
        id: 93,
        question: "A network topology where every single computer node is connected directly to every other individual computer node on the network, providing complete redundancy and fault tolerance at a high structural cost, is a:",
        options: ["Ring Topology", "Mesh Topology", "Bus Architecture", "Star Layout"],
        correct: 1,
        topic: "Computer Networks",
        explanation: "In a full Mesh topology, every node has a direct point-to-point connection to every other node. With n nodes, a full mesh requires n(n-1)/2 connections. This provides maximum redundancy — if any link fails, data can be rerouted through alternative paths — and eliminates single points of failure. However, the number of connections grows exponentially with nodes, making full mesh extremely expensive and complex for large networks. Partial mesh (some but not all nodes fully interconnected) is a practical compromise used in WAN backbone infrastructure."
    },
    {
        id: 94,
        question: "The specialized software layer or application program that acts as a secure intermediary gateway between a company's internal private LAN and the public Internet, hiding local IP addresses and caching web requests to boost performance, is a:",
        options: ["Database Server", "Proxy Server", "Router Daemon", "Switch Controller"],
        correct: 1,
        topic: "Computer Networks",
        explanation: "A proxy server acts as an intermediary between client computers and the internet. When a client requests a web resource, the request goes to the proxy, which forwards it to the internet on the client's behalf. Proxy servers provide: anonymity (hiding internal IP addresses), content filtering (blocking inappropriate sites), caching (storing frequently accessed content locally to reduce bandwidth), and access control. Organizations use proxy servers to enforce internet usage policies and improve network performance."
    },
    {
        id: 95,
        question: "Which type of malware actively runs silently in the background of an infected computer to monitor user keystrokes, browser history, and personal behavior, transmitting that stolen intelligence back to a remote hacker?",
        options: ["Ransomware", "Spyware", "Logic Bomb", "Macro Virus"],
        correct: 1,
        topic: "Computer Security",
        explanation: "Spyware is malware that secretly monitors user activity and transmits collected data to a remote attacker without the user's knowledge or consent. It can record keystrokes (keyloggers), capture screenshots, track browsing history, steal passwords and credit card numbers, and monitor application usage. Spyware typically installs itself bundled with free software or through drive-by downloads. It is designed to be invisible — unlike ransomware which announces itself. Anti-spyware tools and careful software installation habits are the primary defenses."
    },
    {
        id: 96,
        question: "A specialized malicious security threat that encrypts all files on a victim's hard drive and displays an institutional lock screen demanding a financial crypto-currency payment before the decryption keys are released is:",
        options: ["Adware", "Ransomware", "Rootkit", "Trojan"],
        correct: 1,
        topic: "Computer Security",
        explanation: "Ransomware is malware that encrypts a victim's files or locks their system, then demands payment (typically in cryptocurrency like Bitcoin) for the decryption key. It has become one of the most financially damaging cyber threats globally. Notable attacks include WannaCry (2017, affecting 200,000+ systems in 150 countries) and Colonial Pipeline (2021). Ransomware spreads via phishing emails, malicious downloads, and unpatched vulnerabilities. Prevention includes regular backups, software updates, and user awareness training."
    },
    {
        id: 97,
        question: "In modern information security, the concept of MFA (Multi-Factor Authentication) requires a user to provide multiple independent categories of credentials to verify identity. What are these three core categories?",
        options: ["First Name, Last Name, and Account Number", "Something you know (password), Something you have (token/phone), and Something you are (biometrics)", "Email address, Secret Question, and IP Address", "Password, PIN, and Passphrase"],
        correct: 1,
        topic: "Computer Security",
        explanation: "Multi-Factor Authentication (MFA) requires verification from two or more independent factor categories: Something you know (password, PIN, security question), Something you have (smartphone, hardware token, smart card), and Something you are (fingerprint, facial recognition, iris scan — biometrics). Using multiple categories means an attacker who steals your password still cannot access your account without your phone or fingerprint. MFA dramatically reduces account compromise risk and is now standard for banking, email, and enterprise systems."
    },
    {
        id: 98,
        question: "The standard typographic feature in word processors that automatically shifts a typed word down to the beginning of the next line when it encounters the right-hand margin boundary, without requiring a manual Enter key press, is called:",
        options: ["Line Spacing", "Word Wrap", "Auto-Indent", "Text Justification"],
        correct: 1,
        topic: "Application Software",
        explanation: "Word wrap is the automatic text feature in word processors and text editors that moves a word to the beginning of the next line when it would exceed the right margin, without requiring the user to press Enter. This allows continuous typing without manual line breaks. Word wrap adjusts dynamically when text is edited, the font size changes, or the window is resized. It is distinct from a hard return (pressing Enter), which creates a permanent paragraph break. Word wrap is fundamental to all modern text editing software."
    },
    {
        id: 99,
        question: "In database systems, the explicit rule stating that a primary key field can never contain a null or empty value, ensuring that every record can always be uniquely located, is called the:",
        options: ["Referential Integrity Rule", "Entity Integrity Rule", "Domain Constraint Metric", "Functional Dependency Rule"],
        correct: 1,
        topic: "Application Software",
        explanation: "The Entity Integrity Rule is a fundamental database constraint stating that no primary key attribute can contain a NULL value. Since the primary key uniquely identifies each record, a null primary key would make that record unidentifiable and unretrievable. This rule ensures every entity (record) in a table has a complete, valid identity. Referential Integrity is a related but distinct rule — it states that a foreign key value must either match an existing primary key value in the referenced table or be NULL."
    },
    {
        id: 100,
        question: "When a database architect creates a link between two separate tables by placing the primary key column of Table A into a data column inside Table B, that referencing column inside Table B is known as a:",
        options: ["Primary Key", "Foreign Key", "Candidate Key", "Alternate Key"],
        correct: 1,
        topic: "Application Software",
        explanation: "A Foreign Key is a column (or set of columns) in one table that references the Primary Key of another table, establishing a relational link between the two tables. For example, an Orders table might contain a CustomerID foreign key that references the CustomerID primary key in the Customers table. Foreign keys enforce Referential Integrity — ensuring that every foreign key value corresponds to an existing primary key value. They are the mechanism by which relational databases model real-world relationships between entities."
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = CIT104_QUESTIONS;
}
