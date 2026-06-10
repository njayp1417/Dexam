// IFT212 - Computer Architecture & Organisation Questions Database

const IFT212_QUESTIONS = [

    // ── BATCH 1: ISA, ADDRESSING MODES, ASSEMBLY, CONTROL STRUCTURES ──────────


    {
        id: "ift212_001",
        question: "In the study of computer systems, how is Instruction Set Architecture (ISA) fundamentally distinguished from Computer Organization?",
        options: [
            "ISA deals with the specific manufacturing material of the CPU chips, while Organization deals with the circuit layouts.",
            "ISA is the programmer's abstract view of the computer (attributes visible to the programmer), while Organization is the operational units and their internal micro-architectural implementations.",
            "ISA manages operating system installations, while Organization strictly governs external peripheral storage.",
            "ISA handles high-level programming compilations, while Organization converts code into web applications."
        ],
        correct: 1,
        topic: "Computer Architecture Fundamentals"
    },
    {
        id: "ift212_002",
        question: "During the execution of an instruction using the Autoincrement addressing mode, what is the exact operational sequence regarding the register's content?",
        options: [
            "The register content is incremented first, and then the new content is used as the effective address.",
            "The register content is multiplied by the operand size before fetching data.",
            "The register content is used directly as the effective address to load the operand, and then the content is incremented.",
            "The register content is cleared immediately after the first execution bit is read."
        ],
        correct: 2,
        topic: "Addressing Modes"
    },
    {
        id: "ift212_003",
        question: "How does the operational sequence of the Autodecrement addressing mode differ from the Autoincrement mode?",
        options: [
            "The register content is first decremented, and then the new content is used as the effective address of the operand.",
            "The register is only decremented if the operand value turns out to be negative.",
            "The register content is used as the effective address, and then decremented at the end of the program cycle.",
            "The register is bypassed entirely, and data is fetched directly from the main stack pointer."
        ],
        correct: 0,
        topic: "Addressing Modes"
    },
    {
        id: "ift212_004",
        question: "Which of the following best defines the relationship between Assembly Language instructions and Machine Code?",
        options: [
            "One assembly instruction translates to a dynamic range of 50–100 machine code blocks.",
            "Assembly language features a strict one-to-one correspondence with binary machine code.",
            "Assembly language is completely portable and can execute natively across any CPU architecture without modification.",
            "Assembly language acts as an interpreted scripting layer that completely bypasses the central processing unit hardware."
        ],
        correct: 1,
        topic: "Assembly Language"
    },
    {
        id: "ift212_005",
        question: "What is the specific functional purpose of an Assembler utility program?",
        options: [
            "To translate high-level Java code directly into operating system kernel structures.",
            "To optimize database indexes for remote operational applications.",
            "To convert assembly language source code into executable binary machine code.",
            "To format hard drives into structured sectors and tracks."
        ],
        correct: 2,
        topic: "Assembly Language"
    },
    {
        id: "ift212_006",
        question: "Why is Assembly Language classified as non-portable across computing ecosystems?",
        options: [
            "It cannot be shared via digital network environments due to security controls.",
            "It relies entirely on specific web browsers to parse its formatting commands.",
            "It is hard-coded to match the specific micro-architecture and register configuration of a particular CPU architecture.",
            "It can only function on computer systems that lack physical RAM upgrades."
        ],
        correct: 2,
        topic: "Assembly Language"
    },
    {
        id: "ift212_007",
        question: "Within the basic structure of a standard assembly program, what is the dedicated function of the section .data block?",
        options: [
            "It stores the primary executable program instructions and logical operations.",
            "It is used exclusively to declare initialized data, variables, and constants.",
            "It handles the termination routines of the system kernel calls.",
            "It contains uninitialized runtime buffers allocated dynamically at execution time."
        ],
        correct: 1,
        topic: "Assembly Language"
    },
    {
        id: "ift212_008",
        question: "What does the assembly directive db stand for when declaring variables such as msg db 'Hello', 0?",
        options: [
            "Data Buffer",
            "Double Boundary",
            "Define Byte",
            "Decrement Branch"
        ],
        correct: 2,
        topic: "Assembly Language"
    },
    {
        id: "ift212_009",
        question: "In x86 Assembly language, what does the expression len equ $ - msg accomplish?",
        options: [
            "It calculates the runtime speed of the program counter loop.",
            "It computes the exact length of the string labeled msg by subtracting its starting address from the current position pointer ($).",
            "It clears the contents of the main execution register to avoid a stack collision.",
            "It tells the operating system to duplicate the output string across multiple display monitors."
        ],
        correct: 1,
        topic: "Assembly Language"
    },
    {
        id: "ift212_010",
        question: "How is a system call (such as requesting a write operation or program exit) triggered on an x86 Linux system using standard assembly instructions?",
        options: [
            "By invoking the CALL instruction with a link pointer.",
            "By issuing a software interrupt via the int 0x80 instruction to yield control to the kernel.",
            "By setting the Program Counter register directly to absolute coordinate 0.",
            "By wrapping the instruction block inside a dynamic high-level if-then loop."
        ],
        correct: 1,
        topic: "Assembly Language"
    },
    {
        id: "ift212_011",
        question: "When preparing a sys_write system call in x86 Assembly, what specific identifier value must be loaded into the eax register before calling the kernel?",
        options: [
            "Value 1",
            "Value 4",
            "Value 0x80",
            "Value 0"
        ],
        correct: 1,
        topic: "Assembly Language"
    },
    {
        id: "ift212_012",
        question: "To what fundamental building blocks do all high-level control structures (such as if-then-else, while, and for loops) ultimately reduce at the machine level?",
        options: [
            "Subroutine frame pointers and stack offsets",
            "Memory page tables and structural segmentation boundaries",
            "Conditional branches (e.g., BNE, BEQ) and unconditional jumps (JMP)",
            "Direct hardware hardwired control ROM addresses"
        ],
        correct: 2,
        topic: "Control Structures"
    },
    {
        id: "ift212_013",
        question: "What is the critical role of the unconditional jump (JMP) instruction within the pattern of an If-Then-Else conditional structure?",
        options: [
            "It forces the CPU to refresh the entire instruction cache hierarchy.",
            "It prevents execution from falling through into the else block after the then block completes.",
            "It calculates whether variables match the Zero condition flag.",
            "It resets the primary stack pointer back to the baseline frame coordinate."
        ],
        correct: 1,
        topic: "Control Structures"
    },
    {
        id: "ift212_014",
        question: "How are looping structures (like while loops) systematically mapped down into machine assembly code?",
        options: [
            "By creating explicit duplicate blocks of code across the entire .data section.",
            "Through a combination of a condition evaluation test and a backward branch instruction.",
            "By utilizing hardwired microprogram ROM chips to lock execution loops safely.",
            "By disabling the CPU system clock line for a fixed number of cycles."
        ],
        correct: 1,
        topic: "Control Structures"
    },
    {
        id: "ift212_015",
        question: "Mechanically, what actions do the hardware instructions CALL and RET perform on the CPU stack to handle procedures?",
        options: [
            "CALL flushes the data cache; RET reloads the virtual address translator page.",
            "CALL pushes the return address onto the stack; RET pops it back into the Program Counter (PC).",
            "CALL increments the Frame Pointer; RET decreases the internal stack offset by exactly 1 byte.",
            "CALL locks the system registers; RET unlocks them for external interrupt routines."
        ],
        correct: 1,
        topic: "Procedures and Stack"
    },
    {
        id: "ift212_016",
        question: "What is the structural purpose of a Stack Frame (Activation Record) during routine execution?",
        options: [
            "It isolates different physical user workstations logged into a shared server network.",
            "It maps virtual addresses to hardware pages within the main memory management unit.",
            "It allocates an isolated area of stack memory for a specific procedure instance to handle local variables, parameters, and return links.",
            "It converts non-linear assembly operations into hardwired logic equations."
        ],
        correct: 2,
        topic: "Procedures and Stack"
    },
    {
        id: "ift212_017",
        question: "During a procedure call prologue, how do the Frame Pointer (FP) and Stack Pointer (SP) coordinate to construct a clean stack frame?",
        options: [
            "The callee pushes the old FP, updates the FP to match the current SP baseline, and then subtracts from the SP to reserve space for local variables.",
            "The callee adds space to the SP first, and then sets the FP to an arbitrary static coordinate inside the .text section.",
            "The caller locks the FP indefinitely while the SP rotates through the register pipeline.",
            "The hardware forces both the FP and SP to clear to 0 to prevent a memory collision error."
        ],
        correct: 0,
        topic: "Procedures and Stack"
    },
    {
        id: "ift212_018",
        question: "Why is the architectural implementation of the stack frame mechanism essential for supporting Recursion?",
        options: [
            "It automatically clears the condition flags on every nested loop iteration.",
            "It ensures that every separate invocation of a self-calling procedure receives an independent stack frame with unique local variables and distinct return paths.",
            "It translates complex assembly calls into high-speed hardwired combinational logic arrays.",
            "It converts variable-sized data blocks into fixed page frames to eliminate internal fragmentation."
        ],
        correct: 1,
        topic: "Procedures and Stack"
    },
    {
        id: "ift212_019",
        question: "Which inputs are monitored by the CPU Control Unit to determine whether to execute a conditional branch instruction?",
        options: [
            "The internal data cache page table addresses",
            "Condition code flags (such as Zero, Carry, Sign, and Overflow) and instruction register opcodes",
            "External hard drive storage capacity limits",
            "Virtual address segmentation offsets"
        ],
        correct: 1,
        topic: "Control Structures"
    },
    {
        id: "ift212_020",
        question: "What is the technical advantage of utilizing the instruction xor ebx, ebx over mov ebx, 0 in assembly program architecture?",
        options: [
            "It allows the register to safely map to external virtual memory spaces.",
            "It is a highly efficient performance optimization that clears a register to 0 using fewer opcode bytes and execution cycles.",
            "It forces the control unit to toggle between microprogrammed and hardwired states.",
            "It allows the program to bypass standard operating system kernel permission checks."
        ],
        correct: 1,
        topic: "Assembly Language"
    },

    // ── BATCH 2: CONTROL UNIT, MEMORY HIERARCHY, VIRTUAL MEMORY ─────────────

    {
        id: "ift212_021",
        question: "Which of the following best defines a Control Signal within a central processing unit?",
        options: [
            "A software command issued by an application program to modify a database index.",
            "Electrical signals generated by the control unit that direct every other component of the CPU.",
            "A high-voltage surge used to format hard disk sectors during a system boot sequence.",
            "A physical toggle flag set manually by the system operator to clear local RAM caches."
        ],
        correct: 1,
        topic: "Control Unit Design"
    },
    {
        id: "ift212_022",
        question: "What is the structural distinction between Point-to-point and Decoded control signals?",
        options: [
            "Point-to-point signals travel wirelessly, while decoded signals require fiber-optic lines.",
            "Point-to-point signals use dedicated wires routed directly to a single component, whereas decoded signals send a compressed number of bits that are expanded at the destination.",
            "Point-to-point signals only handle floating-point mathematics, while decoded signals manage integer loops.",
            "Point-to-point signals are stored in the main data section, while decoded signals are stored in the text segment."
        ],
        correct: 1,
        topic: "Control Unit Design"
    },
    {
        id: "ift212_023",
        question: "To produce the correct sequence of control signals over multiple clock cycles, which primary inputs does the Control Unit actively monitor?",
        options: [
            "The program counter stack depth and virtual memory page fault history.",
            "The Instruction Register (IR) opcode, hardware condition flags, and the system clock signal.",
            "The hard drive capacity limit and external network packet latency.",
            "The database structural schema and compilation runtime flags."
        ],
        correct: 1,
        topic: "Control Unit Design"
    },
    {
        id: "ift212_024",
        question: "Which architectural trait is a characteristic advantage of a Hardwired Control Unit design?",
        options: [
            "High flexibility and ease of altering instruction code logic via software updates.",
            "Extremely high execution speed because it is implemented entirely with combinational logic circuits.",
            "Massive storage capacity for complex, multi-layered string manipulation subroutines.",
            "Low engineering complexity during initial physical prototyping stages."
        ],
        correct: 1,
        topic: "Control Unit Design"
    },
    {
        id: "ift212_025",
        question: "How does a Microprogrammed Control Unit generate execution states for a processor?",
        options: [
            "By downloading structural micro-patches dynamically over a local operating system network.",
            "By reading sequential control words (microinstructions) out of a dedicated internal read-only memory (ROM), known as a control store.",
            "By transforming assembly string codes directly into optical signals inside the ALU.",
            "By executing a recursive software loop within the system's external stack frame."
        ],
        correct: 1,
        topic: "Control Unit Design"
    },
    {
        id: "ift212_026",
        question: "What is the dominant approach for control unit design in modern high-performance processors like Intel or AMD x86 systems?",
        options: [
            "Purely hardwired structures to completely eliminate the need for microcode.",
            "Purely microprogrammed ROM arrays to optimize application portability.",
            "A hybrid layout where frequent, simple instructions are hardwired for maximum speed, while complex instructions are handled via patchable microcode.",
            "Virtualized emulation layers that eliminate physical control units entirely."
        ],
        correct: 2,
        topic: "Control Unit Design"
    },
    {
        id: "ift212_027",
        question: "What is the core underlying cause of the Processor-Memory Performance Gap in modern computer architecture?",
        options: [
            "Main memory modules consume significantly more physical space on the motherboard than CPU chips.",
            "Central processors operate at extreme speeds (nanoseconds/cycle), while DRAM response times are 50-100x slower due to physical and capacitive limitations.",
            "Central processors use binary logic, whereas DRAM reads data using hexadecimal indexing structures.",
            "Motherboard bus lines are purposely throttled by the operating system kernel to protect hardware components from overheating."
        ],
        correct: 1,
        topic: "Memory Hierarchy"
    },
    {
        id: "ift212_028",
        question: "Arranging the standard components of the Memory Hierarchy from fastest access speed to slowest access speed yields which sequence?",
        options: [
            "Main Memory (DRAM) → L1 Cache → L2 Cache → L3 Cache → Registers → SSD",
            "Registers → L1 Cache → L2 Cache → L3 Cache → Main Memory (DRAM) → SSD/HDD",
            "SSD → Main Memory (DRAM) → L3 Cache → L2 Cache → L1 Cache → Registers",
            "L1 Cache → L2 Cache → L3 Cache → Registers → Main Memory (DRAM) → HDD"
        ],
        correct: 1,
        topic: "Memory Hierarchy"
    },
    {
        id: "ift212_029",
        question: "How is Spatial Locality precisely differentiated from Temporal Locality in memory access operations?",
        options: [
            "Spatial locality predicts that the exact same variable will be read over and over, while temporal locality tracks code portability.",
            "Spatial locality dictates that accessing a memory address increases the probability that nearby or contiguous memory addresses will be accessed soon; temporal locality means a recently accessed address is likely to be accessed again in the near future.",
            "Spatial locality applies strictly to virtual memory page boundaries, while temporal locality only governs CPU clock signals.",
            "Spatial locality measures register file depths, whereas temporal locality calculates ALU pipeline latencies."
        ],
        correct: 1,
        topic: "Memory Hierarchy"
    },
    {
        id: "ift212_030",
        question: "Under a cache Write-Back policy, what happens when a CPU executes a store instruction that updates a data element?",
        options: [
            "The data is instantly written to both the cache block and the main memory simultaneously.",
            "The data is written only to the cache line, and a 'dirty bit' is flipped; the actual update to main memory is delayed until that cache line is evicted.",
            "The cache line is invalidated immediately, forcing a complete reload from the hard drive.",
            "The CPU pipeline halts until an operating system interrupt confirms the data exists across all cores."
        ],
        correct: 1,
        topic: "Memory Hierarchy"
    },
    {
        id: "ift212_031",
        question: "In a multi-level cache architecture, why is the L1 Cache typically split into separate Instruction (I-cache) and Data (D-cache) segments?",
        options: [
            "To allow the processor to run two entirely separate operating systems at the same time.",
            "To prevent structural pipeline hazards by allowing simultaneous, conflict-free fetching of instructions and loading/storing of data operands.",
            "To allow data elements to bypass the main execution registers entirely.",
            "Because instruction blocks require dynamic virtual page translation while data blocks do not."
        ],
        correct: 1,
        topic: "Memory Hierarchy"
    },
    {
        id: "ift212_032",
        question: "In memory performance evaluation, what factors dictate the Average Memory Access Time (AMAT) of a system?",
        options: [
            "AMAT = Clock Speed x Pipeline Depth + Register Count",
            "AMAT = Hit Time + (Miss Rate x Miss Penalty)",
            "AMAT = Page Size / Segment Limit + Cache Hits",
            "AMAT = Bus Width x Capacity - Latency"
        ],
        correct: 1,
        topic: "Memory Hierarchy"
    },
    {
        id: "ift212_033",
        question: "From a programming standpoint, why do contiguous arrays yield much better cache performance than linked lists for large data traversals?",
        options: [
            "Linked lists can only store character string configurations, while arrays handle integers.",
            "Arrays are allocated as continuous, adjacent memory blocks that heavily exploit spatial locality, whereas linked list nodes are scattered arbitrarily across memory, causing frequent cache misses.",
            "Linked lists bypass the L2 and L3 caches entirely, forcing direct DRAM synchronization loops.",
            "Arrays automatically encrypt the system's instruction register to speed up iteration loops."
        ],
        correct: 1,
        topic: "Memory Hierarchy"
    },
    {
        id: "ift212_034",
        question: "Which of the following is an operational problem that arises when a computer system operates without a Virtual Memory system?",
        options: [
            "Programs cannot execute basic software loops or conditional jumps.",
            "Programs lack memory isolation, meaning an error or malicious action in one program can directly corrupt another program's data.",
            "The CPU is unable to read compilation instructions out of the text section.",
            "Registers cannot hold negative binary integers or floating-point values."
        ],
        correct: 1,
        topic: "Virtual Memory"
    },
    {
        id: "ift212_035",
        question: "Under a Segmentation memory management framework, how is a virtual address translated into a physical hardware address?",
        options: [
            "The virtual address is passed directly to the hardwired control store ROM for decoding.",
            "The address is parsed as a pair consisting of a segment identifier and an offset; the hardware looks up the segment's Base address and adds the Offset, provided the offset does not exceed the segment's Limit.",
            "The address is split evenly into a fixed page number and a variable data mask.",
            "The segment identifier is multiplied by the CPU clock frequency to locate the memory track."
        ],
        correct: 1,
        topic: "Virtual Memory"
    },
    {
        id: "ift212_036",
        question: "What is considered the primary system disadvantage of utilizing a pure Segmentation architecture?",
        options: [
            "High levels of internal fragmentation inside the first 32KB of each code block.",
            "Severe external fragmentation, as variable-sized segments leaving and entering memory create scattered, unusable holes of free space.",
            "The complete inability to share code segments (like common libraries) between distinct processes.",
            "Extremely large page table footprints that consume all available cache lines."
        ],
        correct: 1,
        topic: "Virtual Memory"
    },
    {
        id: "ift212_037",
        question: "How does Paging systematically eliminate the issue of external memory fragmentation?",
        options: [
            "By allowing the compiler to manage register assignments directly.",
            "By breaking both the virtual address space and the physical memory into fixed-sized, uniform blocks (called pages and frames).",
            "By compressing data blocks into non-volatile storage tracks automatically.",
            "By executing all application routines within an unsegmented .data block."
        ],
        correct: 1,
        topic: "Virtual Memory"
    },
    {
        id: "ift212_038",
        question: "While Paging completely cures external fragmentation, what alternative memory waste phenomena can occur under its architecture?",
        options: [
            "Multi-cycle pipeline stalls during conditional branch evaluation routines.",
            "Internal fragmentation, which happens when a program's requested memory allocation does not fill an exact multiple of the fixed page size, leaving wasted space inside the final allocated page frame.",
            "Direct stack collisions between the Frame Pointer and the main data counter.",
            "Cache coherence synchronization errors under a write-through update policy."
        ],
        correct: 1,
        topic: "Virtual Memory"
    },
    {
        id: "ift212_039",
        question: "Within a standard system Page Table entry, what is the specific operational purpose of the Valid/Invalid bit?",
        options: [
            "It marks whether a line of code contains high-level syntax errors.",
            "It indicates whether the corresponding page is currently loaded in physical RAM or must be fetched from secondary storage via a page fault.",
            "It tracks whether a procedure has successfully preserved its stack frame pointer.",
            "It toggles the CPU control unit between hardwired and microprogrammed states."
        ],
        correct: 1,
        topic: "Virtual Memory"
    },
    {
        id: "ift212_040",
        question: "What is the critical performance role of the Translation Lookaside Buffer (TLB) in modern virtual memory management?",
        options: [
            "It acts as a specialized data cache for the arithmetic logic unit's multiplication routines.",
            "It acts as a small, high-speed hardware cache that stores recent virtual-to-physical address translations, bypassing slow page table lookups in main memory.",
            "It handles the final extraction of system string lengths in the assembly text section.",
            "It buffers input signals from external networks before they reach the kernel interrupt handlers."
        ],
        correct: 1,
        topic: "Virtual Memory"
    },

    // ── BATCH 3: VON NEUMANN, CPU REGISTERS, ADDRESSING, CACHE, PAGING ───────

    {
        id: "ift212_041",
        question: "What is the underlying cause of the phenomenon known as the Von Neumann Bottleneck in computer systems architecture?",
        options: [
            "The Arithmetic Logic Unit (ALU) being unable to compute floating-point equations and integer operations simultaneously.",
            "The shared system bus structure where data transfers and instruction fetches must share the same physical pathway, forcing sequential bottlenecks.",
            "The OS kernel intentionally slowing down memory buses to balance internal hard drive temperatures.",
            "The physical limitation of using silicon instead of optical fibers for internal CPU register layouts."
        ],
        correct: 1,
        topic: "Computer Architecture Fundamentals"
    },
    {
        id: "ift212_042",
        question: "During a memory read operations cycle, what is the precise operational responsibility of the Memory Address Register (MAR)?",
        options: [
            "It holds the actual data payload value that was just fetched out of the physical RAM sectors.",
            "It contains the physical address of the memory location that is currently being read from or written to.",
            "It decodes the operational opcode of an assembly instruction to configure the control unit.",
            "It increments by 4 bytes at every system clock tick to bypass stack allocation errors."
        ],
        correct: 1,
        topic: "CPU Registers"
    },
    {
        id: "ift212_043",
        question: "How does the Memory Buffer Register (MBR)—also referred to as the Memory Data Register (MDR)—function in coordination with the MAR?",
        options: [
            "The MBR holds the memory address, while the MAR processes ALU mathematical logic.",
            "The MBR tracks virtual memory translation page faults before they reach the TLB cache.",
            "The MBR acts as a data staging buffer, holding the contents of the data word read from memory or the data word waiting to be written to memory.",
            "The MBR stores the system's condition code flags to execute backward branch instructions."
        ],
        correct: 2,
        topic: "CPU Registers"
    },
    {
        id: "ift212_044",
        question: "What exact mechanical change occurs to the Program Counter (PC) register during the initial Instruction Fetch phase of the CPU cycle?",
        options: [
            "It is cleared back to zero to guarantee the current procedure frame terminates.",
            "It copies its content directly into the Instruction Register (IR) and immediately shifts to a microprogrammed state.",
            "It holds the address of the next instruction to be fetched, and is updated or incremented to point to the subsequent instruction after the fetch occurs.",
            "It halts all input/output buses until an interrupt line updates the condition code registers."
        ],
        correct: 2,
        topic: "CPU Registers"
    },
    {
        id: "ift212_045",
        question: "Once an instruction has been successfully fetched from memory, which specialized register hosts the opcode so that the Control Unit can parse it?",
        options: [
            "The Frame Pointer (FP) register",
            "The Instruction Register (IR)",
            "The Translation Lookaside Buffer (TLB)",
            "The Accumulator (AC)"
        ],
        correct: 1,
        topic: "CPU Registers"
    },
    {
        id: "ift212_046",
        question: "What characterizes the operation of the Immediate Addressing Mode in machine assembly syntax (such as MOV EAX, 45)?",
        options: [
            "The operand's physical address is calculated using a dynamic pointer offset.",
            "The operand value itself is embedded directly into the instruction word, requiring no additional memory access to fetch data.",
            "The operand must be pulled out of the L1 data cache using an index bit configuration.",
            "The operand value is popped straight from the current procedure stack frame."
        ],
        correct: 1,
        topic: "Addressing Modes"
    },
    {
        id: "ift212_047",
        question: "What is the technical difference between the Register Direct and Register Indirect addressing modes?",
        options: [
            "Register Direct stores variables on external hard drives, while Register Indirect utilizes the CPU L2 cache.",
            "Register Direct reads data directly from a designated register; Register Indirect uses the register's content as a memory address pointing to the actual operand location in RAM.",
            "Register Direct requires a microprogrammed control unit, whereas Register Indirect runs exclusively on hardwired processors.",
            "Register Direct utilizes negative binary values, while Register Indirect only handles positive hex values."
        ],
        correct: 1,
        topic: "Addressing Modes"
    },
    {
        id: "ift212_048",
        question: "How does the Indexed Addressing Mode calculate the final Effective Address (EA) of an operand?",
        options: [
            "EA = Base Register Value x CPU Clock Frequency",
            "EA = The absolute constant value found in the Instruction Register minus the Frame Pointer",
            "EA = The content of a baseline register plus a constant displacement value specified inside the instruction word",
            "EA = The physical page frame number divided by the TLB cache index hit bit"
        ],
        correct: 2,
        topic: "Addressing Modes"
    },
    {
        id: "ift212_049",
        question: "In cache design, how does Direct Mapping assign a main memory block to an internal cache slot?",
        options: [
            "Any main memory block can be stored in any arbitrary cache line location.",
            "Each main memory block maps to exactly one specific cache line, calculated using the modulo formula: Cache Line = (Block Address) mod (Total Cache Lines).",
            "Memory blocks are routed into split caches based on whether they contain uninitialized strings.",
            "Memory blocks are duplicated across all L1, L2, and L3 cache layers simultaneously."
        ],
        correct: 1,
        topic: "Cache Design"
    },
    {
        id: "ift212_050",
        question: "What is the primary operational advantage of a Fully Associative Cache Mapping scheme over Direct Mapping?",
        options: [
            "It eliminates the need to use binary tag bits during address matching.",
            "It dramatically reduces conflict misses by allowing any main memory block to reside in any available cache slot.",
            "It reduces hardware circuit costs by eliminating the requirement for parallel comparison logic gates.",
            "It speeds up execution by disabling the multi-cycle write-back check lines."
        ],
        correct: 1,
        topic: "Cache Design"
    },
    {
        id: "ift212_051",
        question: "How does Set-Associative Cache Mapping construct a performance trade-off compromise between Direct and Fully Associative mapping?",
        options: [
            "It separates instruction cache blocks into logical segments based on high-level data types.",
            "It divides the cache space into discrete sets; each main memory block maps to a specific set based on its index bits, but can be placed anywhere inside that particular set.",
            "It allows the operating system kernel to manually allocate cache spaces using dynamic stack frames.",
            "It completely deactivates the TLB mapping arrays to prioritize direct cache pipelines."
        ],
        correct: 1,
        topic: "Cache Design"
    },
    {
        id: "ift212_052",
        question: "When parsing a memory address for a standard Direct-Mapped Cache, into which three bit fields is the incoming address divided?",
        options: [
            "Segment ID, Offset, and Limit Mask",
            "Tag bit field, Index bit field, and Word/Byte Offset bit field",
            "Opcode identifier, Condition Flag, and Vector address",
            "Base Pointer, Frame Offset, and Local Variable mask"
        ],
        correct: 1,
        topic: "Cache Design"
    },
    {
        id: "ift212_053",
        question: "In cache performance classifications, what is the difference between a Compulsory Miss and a Conflict Miss?",
        options: [
            "A compulsory miss occurs due to virtual memory swapping limits; a conflict miss occurs when the processor clock frequency drops.",
            "A compulsory miss occurs the very first time a memory block is accessed by the program (Cold Start); a conflict miss happens when multiple active blocks contend for the same cache line slot under mapping limitations.",
            "A compulsory miss only happens in split L1 data caches; a conflict miss happens in microcoded ROM chips.",
            "A compulsory miss scales with hard drive capacities; a conflict miss scales with register depths."
        ],
        correct: 1,
        topic: "Cache Design"
    },
    {
        id: "ift212_054",
        question: "Why does a Write-Through cache policy degrade system write performance compared to a Write-Back policy?",
        options: [
            "It forces the CPU to store variables exclusively within secondary hard drive partitions.",
            "It creates high bus traffic overhead because every write operation must complete an access loop to the much slower main memory (DRAM) simultaneously.",
            "It requires the control unit to re-decode the entire instructions text segment.",
            "It generates continuous internal fragmentation page faults inside the L1 Instruction cache."
        ],
        correct: 1,
        topic: "Cache Design"
    },
    {
        id: "ift212_055",
        question: "What exact sequence of events is initiated by the hardware when a Page Fault occurs under virtual memory paging?",
        options: [
            "The CPU instantly clears all internal registers, formats the stack frame, and executes a hard reset.",
            "The Memory Management Unit triggers an interrupt, the operating system traps the call, pauses the user process, retrieves the missing page from disk swap space into an empty RAM frame, updates the page table, and restarts the instruction.",
            "The CPU shifts into a hardwired state, forces an unconditional jump to address 0x0, and flushes the L3 cache.",
            "The page table deletes the invalid bit tracking entirely, forcing the application to run within the registers file."
        ],
        correct: 1,
        topic: "Virtual Memory"
    },
    {
        id: "ift212_056",
        question: "How does the Least Recently Used (LRU) page replacement algorithm decide which page frame to evict from physical memory during a page fault?",
        options: [
            "It clears the page frame that holds the largest uninitialized character string.",
            "It scans the valid bit markers and selects the entry that was loaded first chronologically, regardless of usage.",
            "It tracks usage history and throws out the page that has gone unreferenced for the longest continuous span of time.",
            "It evaluates the instruction register opcode and evicts the segment containing unconditional jumps."
        ],
        correct: 2,
        topic: "Virtual Memory"
    },
    {
        id: "ift212_057",
        question: "In Virtual Memory Management, what is the definition and structural consequence of Thrashing?",
        options: [
            "The process of sorting dirty bits in descending order inside the translation cache matrix.",
            "A destructive state where a system spends vastly more time swapping pages in and out of disk storage than executing actual programmatic instructions.",
            "A performance enhancement mechanism that auto-clears unused local variables from procedure activation records.",
            "The physical destruction of hardware bus lines due to high-voltage clock cycles."
        ],
        correct: 1,
        topic: "Virtual Memory"
    },
    {
        id: "ift212_058",
        question: "What is the specific architectural layout and advantage of utilizing an Inverted Page Table?",
        options: [
            "It flips the binary values of address bits to speed up ALU subtraction operations.",
            "It maps physical frames to virtual pages, hosting exactly one entry per physical memory frame, which dramatically reduces page table memory footprints regardless of process counts.",
            "It stores variables upside down in the stack frame layout to prevent return-oriented exploits.",
            "It converts segmentation base values into hardwired control unit commands automatically."
        ],
        correct: 1,
        topic: "Virtual Memory"
    },
    {
        id: "ift212_059",
        question: "Within a Virtual Memory Paging system, what is the mechanical purpose of tracking a Dirty Bit (Modify Bit) inside a Page Table entry?",
        options: [
            "It marks whether a page table block contains syntax validation bugs.",
            "It indicates whether a page's content has been modified by the CPU since it was loaded into RAM; if the bit is 0, the page can be cleanly overwritten during eviction without writing it back to disk.",
            "It locks the frame pointer to prevent an application loop from accessing the .data block.",
            "It forces the control unit to toggle from a hybrid to a purely microprogrammed state."
        ],
        correct: 1,
        topic: "Virtual Memory"
    },
    {
        id: "ift212_060",
        question: "Where is the Memory Management Unit (MMU) physically located, and what is its primary hardware role?",
        options: [
            "It is situated inside external secondary storage drives to automate sector formatting routines.",
            "It is an integrated chip component embedded directly on the CPU die that handles real-time hardware translation of virtual addresses to physical RAM addresses.",
            "It is a compiler-level software module that structures stack frame boundaries for nested procedural calls.",
            "It is an external network adapter card that filters kernel interrupts from remote web clients."
        ],
        correct: 1,
        topic: "Virtual Memory"
    },

    // ── BATCH 4: ASSEMBLY, CONTROL STRUCTURES, PROCEDURES, ADDRESSING ───────

    {
        id: "ift212_061",
        question: "What fundamental trait defines the structural relationship between Assembly Language and Machine Code?",
        options: [
            "Assembly language uses compiler-driven abstraction layers to run on any operating system.",
            "There is a strict one-to-one correspondence where each individual assembly instruction translates directly into a single binary machine instruction.",
            "Assembly instructions are executed directly by the hard disk controller without CPU intervention.",
            "Assembly language is an interpreted scripting language that bypasses physical register files."
        ],
        correct: 1,
        topic: "Assembly Language"
    },
    {
        id: "ift212_062",
        question: "What is the primary software role of the Assembler utility tool?",
        options: [
            "To optimize database indexing schemes before execution loops begin.",
            "To convert human-readable assembly source code mnemonics directly into executable binary machine code.",
            "To dynamically allocate virtual memory segments inside the L1 cache.",
            "To translate high-level Java or C++ source code directly into intermediate bytecode."
        ],
        correct: 1,
        topic: "Assembly Language"
    },
    {
        id: "ift212_063",
        question: "Why is Assembly Language considered non-portable across different computer systems?",
        options: [
            "It can only be written in specific hexadecimal text editors.",
            "It is strictly bound to a specific CPU architecture's Instruction Set Architecture (ISA), meaning x86 assembly cannot execute on an ARM processor.",
            "Modern operating systems deliberately block assembly binaries to protect network adapters.",
            "It lacks support for basic arithmetic operations like multiplication and division."
        ],
        correct: 1,
        topic: "Assembly Language"
    },
    {
        id: "ift212_064",
        question: "Within a standard assembly program layout, what is the precise purpose of the .data section?",
        options: [
            "It contains the physical execution logic and execution paths of the software.",
            "It is a dedicated region used to declare initialized constants, variables, and static data arrays.",
            "It serves as the primary system stack for managing procedural activation records.",
            "It stores microcode updates patchable by the operating system kernel at boot."
        ],
        correct: 1,
        topic: "Assembly Language"
    },
    {
        id: "ift212_065",
        question: "What is the explicit operational purpose of the .text section in an assembly language source file?",
        options: [
            "It acts as a buffer to hold printable characters for terminal string outputs.",
            "It contains the actual executable machine instructions and program logic routines.",
            "It stores uninitialized local variables that require runtime allocation.",
            "It manages the translation mappings for the Translation Lookaside Buffer (TLB)."
        ],
        correct: 1,
        topic: "Assembly Language"
    },
    {
        id: "ift212_066",
        question: "In assembly syntax, how are Labels (such as _start: or loop_entry:) processed by the assembler?",
        options: [
            "They are converted into dynamic string variables inside the system heap.",
            "They act as human-readable placeholders that the assembler resolves into specific numeric memory addresses or code offsets.",
            "They are external hardware signals that toggle the control unit to a microprogrammed state.",
            "They are high-level object-oriented identifiers used to define structural classes."
        ],
        correct: 1,
        topic: "Assembly Language"
    },
    {
        id: "ift212_067",
        question: "How does an Assembler Directive (like db, equ, or global) differ fundamentally from an Assembly Instruction?",
        options: [
            "Directives are executed by the ALU, while instructions are handled by the control unit.",
            "Directives are commands meant for the assembler tool during code generation and do not produce executable machine code; instructions translate directly into operational CPU commands.",
            "Directives manipulate the cache tags, whereas instructions change physical register states.",
            "Directives only handle floating-point values, while instructions handle integer operations."
        ],
        correct: 1,
        topic: "Assembly Language"
    },
    {
        id: "ift212_068",
        question: "At the hardware level, how is a high-level if-then-else conditional construct systematically implemented?",
        options: [
            "By bypassing the ALU entirely and routing commands directly to secondary disk blocks.",
            "By combining comparison instructions (like CMP or TEST) with conditional branch instructions (like BNE, BEQ, or JZ) to control execution flow.",
            "By utilizing recursive microcode routines stored exclusively inside the control store ROM.",
            "By executing a hardware pipeline stall that freezes the execution register files."
        ],
        correct: 1,
        topic: "Control Structures"
    },
    {
        id: "ift212_069",
        question: "When mapping an if-then-else structure to assembly, why must an unconditional jump (JMP) be placed at the conclusion of the 'then' block?",
        options: [
            "To clear the current frame pointer and force an immediate system return.",
            "To prevent execution from falling straight through into the adjacent 'else' code block.",
            "To force a cache flush inside the L1 Instruction cache.",
            "To trigger an automatic page fault interrupt to refresh virtual memory tables."
        ],
        correct: 1,
        topic: "Control Structures"
    },
    {
        id: "ift212_070",
        question: "How are standard while or for loops structured at the machine assembly level?",
        options: [
            "By creating distinct logical segments that duplicate the loop body multiple times in the .data block.",
            "By utilizing a conditional test at the top or bottom of the sequence paired with a backward conditional branch to create a repeating execution cycle.",
            "By loading the loop parameters into the Translation Lookaside Buffer matrix.",
            "By executing a microprogrammed hardware loop that locks the system bus line."
        ],
        correct: 1,
        topic: "Control Structures"
    },
    {
        id: "ift212_071",
        question: "What precise mechanical actions occur when the CPU processes a procedure CALL instruction?",
        options: [
            "The register file is cleared to zero, and the system transitions to a write-through cache policy.",
            "The current content of the Program Counter (the return address) is pushed onto the system stack, and the PC is updated to the address of the target procedure.",
            "The entire segment table is overwritten, and a page fault is systematically generated.",
            "The frame pointer is instantly subtracted from the stack pointer without memory caching."
        ],
        correct: 1,
        topic: "Procedures and Stack"
    },
    {
        id: "ift212_072",
        question: "How does the procedure RET (Return) instruction restore the previous program execution context?",
        options: [
            "It flushes all active lines within the split L1 data cache.",
            "It pops the saved return address off the top of the system stack and loads it straight back into the Program Counter (PC).",
            "It clears the instruction register and toggles the CPU back into hardwired configuration modes.",
            "It increments the accumulator register by 4 bytes unconditionally."
        ],
        correct: 1,
        topic: "Procedures and Stack"
    },
    {
        id: "ift212_073",
        question: "What is the strict hardware role of the Stack Pointer (SP) register during runtime execution?",
        options: [
            "It contains the physical address of the current base of the virtual page tables.",
            "It dynamically tracks and holds the absolute memory address of the top of the active system stack area.",
            "It records the total count of conditional branches executed inside the code segment.",
            "It locks memory buses during high-priority input/output interrupts."
        ],
        correct: 1,
        topic: "Procedures and Stack"
    },
    {
        id: "ift212_074",
        question: "Why do computer architectures use a dedicated Frame Pointer (FP) or Base Pointer (BP) register alongside the Stack Pointer?",
        options: [
            "To speed up arithmetic multiplication routines inside the ALU execution block.",
            "To provide a stable, unchanging reference point within a procedure frame for accessing local variables and parameters, even as the stack pointer fluctuates.",
            "To allow hardwired control units to override patchable microcode routines.",
            "To track external fragmentation boundaries inside segmented RAM modules."
        ],
        correct: 1,
        topic: "Procedures and Stack"
    },
    {
        id: "ift212_075",
        question: "What is contained within a standard hardware Stack Frame (Activation Record) during a procedural call lifecycle?",
        options: [
            "Decoded micro-instructions retrieved directly out of the control store ROM.",
            "Inverted page tables and cache block tag identifiers.",
            "Passed input parameters, the saved return address, the previous frame pointer value, and space allocated for local variables.",
            "Unconditional jump tables used exclusively by the compiler to structure if-else chains."
        ],
        correct: 2,
        topic: "Procedures and Stack"
    },
    {
        id: "ift212_076",
        question: "Why are Nested Procedure Calls able to execute without corrupting each other's execution states?",
        options: [
            "Because each procedure runs on an entirely isolated core of a multi-core central processor.",
            "Because their execution states and return checkpoints are preserved sequentially on a Last-In, First-Out (LIFO) hardware stack structure.",
            "Because the control unit toggles from hardwired to microprogrammed control states for each sub-call.",
            "Because nested calling routines completely bypass physical memory and run entirely in cache tags."
        ],
        correct: 1,
        topic: "Procedures and Stack"
    },
    {
        id: "ift212_077",
        question: "How does the system stack structurally accommodate Recursive Procedures (functions that call themselves)?",
        options: [
            "It allocates a single, permanent memory address that overwrites local indices iteratively.",
            "Each recursive invocation creates a completely separate and distinct stack frame, ensuring independent local variables and return paths.",
            "It triggers a controlled cache thrashing state that accelerates execution loops.",
            "It forces the program counter to switch to an indirect register addressing layout."
        ],
        correct: 1,
        topic: "Procedures and Stack"
    },
    {
        id: "ift212_078",
        question: "What is the architectural distinction between Caller-saved and Callee-saved registers during routine calling setups?",
        options: [
            "Caller-saved registers store application constants, while callee-saved registers handle instructions.",
            "Caller-saved registers must be explicitly preserved by the calling function if their values are needed later; callee-saved registers must be preserved by the called function before it modifies them.",
            "Caller-saved registers operate exclusively in the L1 cache, while callee-saved registers utilize the L3 layer.",
            "Caller-saved registers are managed by hardwired logic, while callee-saved are managed via microcode."
        ],
        correct: 1,
        topic: "Procedures and Stack"
    },
    {
        id: "ift212_079",
        question: "In advanced processor addressing, how does the Autoincrement Addressing Mode process operand collection (e.g., LOAD (Rauto)+, Ri)?",
        options: [
            "It increments the register contents first, then maps that value directly into the cache tags.",
            "It uses the current content of register Rauto as the effective address to fetch the operand, and immediately after the access, it automatically increments the register value to point to the next item.",
            "It adds the system clock speed to the instruction register value to bypass stack fragmentation.",
            "It continuously increases the frame pointer length until an external loop ends."
        ],
        correct: 1,
        topic: "Addressing Modes"
    },
    {
        id: "ift212_080",
        question: "How does the Autodecrement Addressing Mode systematically differentiate itself from the Autoincrement approach (e.g., LOAD -(Rauto), Ri)?",
        options: [
            "It performs address decrements using virtual paging offset masks.",
            "The content of the register Rauto is decremented first, and this newly updated value is immediately used as the effective address to fetch the actual operand.",
            "It reduces the stack pointer frame bounds dynamically without consuming memory bandwidth.",
            "It converts the opcode identifier into a negative binary notation inside the ALU."
        ],
        correct: 1,
        topic: "Addressing Modes"
    },

    // ── BATCH 5: CONTROL UNIT DESIGN, MEMORY HIERARCHY, I/O, RISC vs CISC ──────

    {
        id: "ift212_081",
        question: "Which of the following best defines a Control Signal within the context of central processor operations?",
        options: ["A software command issued by the OS kernel to adjust cooling fan speed.", "Electrical signals generated by the control unit that direct every other internal component of the CPU.", "A binary sequence used exclusively to encrypt data payloads on the system bus.", "A high-level object identifier used to instantiate dynamic memory arrays."],
        correct: 1,
        topic: "Control Unit Design"
    },
    {
        id: "ift212_082",
        question: "What are the three primary hardware inputs processed by the Control Unit to generate valid timing and execution signals?",
        options: ["Instruction Register (IR) opcode, Condition Flags, and the System Clock.", "Accumulator value, Stack Pointer frame, and the Hard Drive sector map.", "Translation Lookaside Buffer (TLB) tag, Virtual Page Offset, and DMA count.", "Frame Pointer, Local Variable segment, and immediate constant literals."],
        correct: 0,
        topic: "Control Unit Design"
    },
    {
        id: "ift212_083",
        question: "What architectural characteristic uniquely defines a Hardwired Control Unit layout?",
        options: ["It uses a microcode ROM control store to read instructions sequentially.", "It relies entirely on combinational logic circuits (gates, decoders) to produce control signals instantly at maximum speed.", "It allows software programmers to dynamically alter the processor's base instruction set.", "It routes all floating-point expressions directly to secondary storage sectors."],
        correct: 1,
        topic: "Control Unit Design"
    },
    {
        id: "ift212_084",
        question: "How does a Microprogrammed Control Unit systematically generate its internal control signals?",
        options: ["By bypassing the physical ALU and loading scripts from external RAM.", "By treating control signal production as a sequence of low-level micro-instructions stored in a dedicated internal memory called a Control Store (ROM).", "By executing an automated backward branch via the Frame Pointer register.", "By disabling the system clock to process instructions asynchronously."],
        correct: 1,
        topic: "Control Unit Design"
    },
    {
        id: "ift212_085",
        question: "When comparing Hardwired and Microprogrammed control units, which trade-off profile is correct?",
        options: ["Hardwired is slower but highly flexible; Microprogrammed is fast but impossible to modify.", "Hardwired requires massive ROM chips; Microprogrammed requires complex combinational logic arrays.", "Hardwired is faster and optimized for simple RISC architectures; Microprogrammed is slower but highly flexible and easier to update, matching complex CISC instructions.", "Hardwired handles virtual memory translation; Microprogrammed handles physical L1 cache mapping."],
        correct: 2,
        topic: "Control Unit Design"
    },
    {
        id: "ift212_086",
        question: "What is the standard Hybrid Control Unit approach utilized by modern processors such as Intel/AMD x86?",
        options: ["They use hardwired paths for simple, frequent instructions (like ADD, LOAD), while complex instructions are routed to internal patchable microcode ROM.", "They run purely on software emulators to eliminate physical hardware bugs.", "They disable all registers and rely entirely on external cache mapping boards.", "They process instructions upside down within the system stack layout."],
        correct: 0,
        topic: "Control Unit Design"
    },
    {
        id: "ift212_087",
        question: "What is the core structural difference between Horizontal and Vertical micro-instruction formats?",
        options: ["Horizontal formats execute exclusively in the L1 instruction cache, whereas Vertical formats run in the L2 data cache.", "Horizontal micro-instructions encode each control signal as a single unencoded bit (wide word), allowing parallel control actions; Vertical formats compress signals into encoded bit fields, requiring a decoder.", "Horizontal tracks floating-point logic, while Vertical handles sign-extension math.", "Horizontal designs scale with main memory depth, whereas Vertical scales with register size."],
        correct: 1,
        topic: "Control Unit Design"
    },
    {
        id: "ift212_088",
        question: "What is the foundational formula used to calculate the Average Memory Access Time (AMAT) of a single-level cache system?",
        options: ["AMAT = Hit Time x Miss Time", "AMAT = Hit Time + (Miss Rate x Miss Penalty)", "AMAT = Miss Rate / Hit Rate", "AMAT = Clock Speed + Bus Width"],
        correct: 1,
        topic: "Memory Hierarchy"
    },
    {
        id: "ift212_089",
        question: "In a multi-level cache architecture (L1 and L2), how is the total memory access performance modeled?",
        options: ["AMAT = L1 Hit Time x L2 Miss Rate", "AMAT = L1 Hit Time + (L1 Miss Rate x [L2 Hit Time + (L2 Miss Rate x L2 Miss Penalty)])", "AMAT = Virtual Offset + Physical Frame Number", "AMAT = Page Fault Rate / L1 Cache Lines"],
        correct: 1,
        topic: "Memory Hierarchy"
    },
    {
        id: "ift212_090",
        question: "What is the technical difference between Temporal Locality and Spatial Locality?",
        options: ["Temporal locality handles register values; spatial locality maps secondary disks.", "Temporal locality dictates that memory locations accessed recently are highly likely to be accessed again soon; spatial locality states that items stored near currently accessed data are highly likely to be accessed next.", "Temporal locality operates on hardwired control signals; spatial locality operates on microprogram logic.", "Temporal locality minimizes internal fragmentation; spatial locality eliminates conflict misses."],
        correct: 1,
        topic: "Memory Hierarchy"
    },
    {
        id: "ift212_091",
        question: "Why does iterating through a standard primitive Array typically yield significantly better cache performance than traversing a Linked List of identical size?",
        options: ["Arrays are managed by the microcode ROM, while linked lists run on the system bus.", "Arrays are stored in contiguous blocks of physical memory, maximizing spatial locality benefits; linked lists use pointer-connected nodes scattered arbitrarily across memory, causing frequent cache misses.", "Linked lists trigger automatic write-through policies inside the L1 data cache.", "Arrays completely deactivate the Translation Lookaside Buffer (TLB)."],
        correct: 1,
        topic: "Memory Hierarchy"
    },
    {
        id: "ift212_092",
        question: "What is the primary operational drawback of implementing Programmed I/O (Polled I/O)?",
        options: ["It corrupts the system stack frames and page translation tables.", "The CPU gets trapped in a continuous, wasteful busy-waiting execution loop, polling the device status register until the transfer completes.", "It forces the processor to permanently drop its clock frequency to protect network buses.", "It completely replaces the Instruction Register with an inverted lookup path."],
        correct: 1,
        topic: "I/O Organization"
    },
    {
        id: "ift212_093",
        question: "How does Interrupt-Driven I/O improve system efficiency over Polled I/O?",
        options: ["It eliminates the requirement for a physical system data bus layout.", "It allows the CPU to issue an I/O command, move on to execute other useful program tasks, and only return to process data when the hardware device asserts an external interrupt wire.", "It stores incoming device data frames directly into the L1 Instruction cache tag rows.", "It converts the control unit from a hardwired layout to a purely vertical layout."],
        correct: 1,
        topic: "I/O Organization"
    },
    {
        id: "ift212_094",
        question: "What hardware mechanism defines the operational capability of Direct Memory Access (DMA)?",
        options: ["It allows the ALU to double its integer multiplication speeds by bypassing condition flags.", "It enables an external hardware module to assume temporary control of the system bus, transferring large blocks of data directly between peripherals and main RAM completely independent of the CPU.", "It routes page faults out of the operating system straight into the cache tags.", "It allows the stack pointer to execute unconditional jumps into the .text segment."],
        correct: 1,
        topic: "I/O Organization"
    },
    {
        id: "ift212_095",
        question: "What two core configuration registers must a CPU populate inside a DMA Controller before initiating a high-speed data block transfer?",
        options: ["Opcode Register and Status Condition Flag.", "Starting Memory Address Register and a Data Word/Byte Counter Register.", "L1 Tag index bit and Inverted Page valid bit.", "Accumulator coordinate and Frame Pointer displacement mask."],
        correct: 1,
        topic: "I/O Organization"
    },
    {
        id: "ift212_096",
        question: "What core architectural problem is solved by implementing a Cache Coherence Protocol such as MESI in multi-core processing architectures?",
        options: ["Preventing external fragmentation across virtual segmentation boundaries.", "Ensuring that a modification made to a local data cache line by one processor core is accurately reflected across all other cores' caches to prevent stale data reads.", "Speeding up vertical microprogramming lookup times within the control store.", "Accelerating immediate addressing loads within deep procedure stack frames."],
        correct: 1,
        topic: "Memory Hierarchy"
    },
    {
        id: "ift212_097",
        question: "In bus architecture systems, what is the role of a Bus Arbitration mechanism?",
        options: ["To translate virtual memory addresses into physical frame numbers.", "To resolve conflicting requests when multiple master modules (like the CPU and DMA) attempt to seize control of the system bus lines simultaneously.", "To toggle the operation of write-through caches to write-back states.", "To clear the Program Counter during an unexpected procedure return."],
        correct: 1,
        topic: "I/O Organization"
    },
    {
        id: "ift212_098",
        question: "What fundamental design philosophy separates CISC from RISC architectures?",
        options: ["CISC uses only immediate addressing; RISC relies exclusively on register indirect addressing.", "CISC emphasizes single-cycle hardwired execution pipelines; RISC emphasizes variable multi-cycle microcoded operations.", "CISC provides a massive library of complex, variable-length instructions to minimize code sizes; RISC uses a lean library of simple, fixed-length instructions executed in a single cycle via registers.", "CISC runs solely on emulators, whereas RISC requires inverted page frames."],
        correct: 2,
        topic: "RISC vs CISC"
    },
    {
        id: "ift212_099",
        question: "What are Micro-operations (micro-ops) within the operational lifecycle of a CPU execution pipeline?",
        options: ["High-level Java bytecode interpretations compiled at runtime.", "The primitive, elemental hardware atomic steps (like moving data between internal registers or invoking the ALU) required to execute a single machine instruction.", "Subroutine return links preserved in the procedure activation frames.", "Memory block allocations performed by inverted page tables on secondary disks."],
        correct: 1,
        topic: "RISC vs CISC"
    },
    {
        id: "ift212_100",
        question: "In an instruction execution pipeline, what characterizes a Control Hazard (Branch Hazard)?",
        options: ["A physical hardware resource conflict where two instructions try to access the L1 data cache at the same time cycle.", "A delay caused when the pipeline fetches subsequent sequential instructions before determining whether a conditional branch instruction will change the Program Counter.", "A data dependency stall where a read instruction waits for a pending write instruction to complete its ALU phase.", "A failure of the microprogrammed control store ROM to patch an invalid opcode bit."],
        correct: 1,
        topic: "Pipelining"
    }

];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = IFT212_QUESTIONS;
}
