// CSC264 - Computer Hardware System and Maintenance Questions Database

const CSC264_QUESTIONS = [

    // ── BATCH 1: CLOCK SIGNALS, STORAGE, LOGIC CIRCUITS ──────────────────────

    {
        id: "csc264_001",
        question: "What is the primary definition of a clock signal in digital electronics?",
        options: [
            "A continuous analog signal used to measure real-world time in hours and minutes.",
            "A continuous, precise oscillating electrical signal that alternates between a high and low voltage state to coordinate actions.",
            "A software-defined interrupt loop that checks for user inputs on external hardware peripherals.",
            "A protective voltage surge mechanism that cuts off power when a circuit overheats."
        ],
        correct: 1,
        topic: "Clock Signals"
    },
    {
        id: "csc264_002",
        question: "In digital electronics and computer hardware systems, what does the term \"triggering\" refer to?",
        options: [
            "The process of clearing the CPU cache files during a cold system boot.",
            "The mechanical execution of an instruction after an external input-output device driver is updated.",
            "The specific condition or boundary change in a clock signal that causes a digital circuit or flip-flop to alter its output state.",
            "The automatic routing of high-voltage electrical current through the system's power supply unit."
        ],
        correct: 2,
        topic: "Clock Signals"
    },
    {
        id: "csc264_003",
        question: "Which of the following statements accurately differentiates between positive edge triggering and negative edge triggering?",
        options: [
            "Positive edge triggering responds to a steady high voltage level, while negative edge triggering responds to a steady low voltage level.",
            "Positive edge triggering alters states when the clock signal transitions from low (0) to high (1), whereas negative edge triggering alters states when transitioning from high (1) to low (0).",
            "Positive edge triggering is used strictly in primary storage devices, while negative edge triggering is exclusive to secondary storage devices.",
            "Positive edge triggering amplifies the incoming voltage signal, whereas negative edge triggering minimizes it."
        ],
        correct: 1,
        topic: "Clock Signals"
    },
    {
        id: "csc264_004",
        question: "Which of the following is a primary function of a clock signal within a modern computer system?",
        options: [
            "To permanently store non-volatile user documents and media files.",
            "To convert continuous analog voice signals into discrete binary values for telephone networks.",
            "To provide precise timing intervals and ensure synchronized data transfer between internal CPU components and registers.",
            "To regulate the physical fan speeds of external hardware cooling peripherals."
        ],
        correct: 2,
        topic: "Clock Signals"
    },
    {
        id: "csc264_005",
        question: "How is logical synchronization achieved across multiple digital circuits using clock signals?",
        options: [
            "By allowing every individual sub-circuit to generate its own unique frequency independently.",
            "By forcing all sequential logic components to switch states concurrently on a shared, uniform clock edge transition.",
            "By transforming digital square waves into variable analog waveforms inside operational amplifiers.",
            "By writing raw binary strings directly onto the magnetic platters of secondary hard disk drives."
        ],
        correct: 1,
        topic: "Clock Signals"
    },
    {
        id: "csc264_006",
        question: "Which of the following digital hardware components relies directly on a clock signal to coordinate internal state tracking and sequence changes?",
        options: [
            "A standard analog input sensor.",
            "A simple combinational logic multiplexer.",
            "A sequential digital element, such as a shift register or binary counter.",
            "A continuous copper data bus cable."
        ],
        correct: 2,
        topic: "Clock Signals"
    },
    {
        id: "csc264_007",
        question: "Which of the following best defines the overarching concept of computer storage?",
        options: [
            "The instantaneous software conversion of binary instructions into high-level programming code.",
            "The hardware components and media structures designed to retain digital data either temporarily or permanently for processing.",
            "The capacity of a central processor to execute arithmetic calculations within a single clock cycle.",
            "The network bandwidth speed available to transfer database records over a wide area network."
        ],
        correct: 1,
        topic: "Computer Storage"
    },
    {
        id: "csc264_008",
        question: "What is a key structural and operational distinction between primary storage and secondary storage?",
        options: [
            "Primary storage is directly accessible by the CPU and typically volatile, while secondary storage is non-volatile and used for long-term data retention.",
            "Primary storage consists entirely of mechanical moving platters, whereas secondary storage uses solid-state silicon circuits.",
            "Primary storage retains its contents permanently without power, whereas secondary storage loses its data instantly when turned off.",
            "Primary storage has a significantly larger storage capacity and slower data access speed than secondary storage."
        ],
        correct: 0,
        topic: "Computer Storage"
    },
    {
        id: "csc264_009",
        question: "Which of the following statements accurately describes the primary functional difference between RAM and ROM?",
        options: [
            "RAM stores unalterable system startup firmware (BIOS/POST), while ROM holds active application variables.",
            "RAM can only be read from by the processor, whereas ROM can be written to infinitely at ultra-high speeds.",
            "RAM acts as temporary, volatile workspace memory for active processes, while ROM holds permanent, non-volatile initialization firmware instructions.",
            "RAM relies on mechanical spinning disks to capture data, whereas ROM relies on floating-gate transistors."
        ],
        correct: 2,
        topic: "Computer Storage"
    },
    {
        id: "csc264_010",
        question: "Why is main system Random Access Memory (RAM) explicitly categorized as volatile memory?",
        options: [
            "It is highly susceptible to physical degradation from high magnetic fields.",
            "It loses all its stored data charges immediately when the external electrical power supply is disconnected.",
            "Its internal storage cells are physically altered every time a write operation occurs.",
            "It can only handle text files and cannot store multimedia binaries."
        ],
        correct: 1,
        topic: "Computer Storage"
    },
    {
        id: "csc264_011",
        question: "Which of the following is a verified technical advantage of a Solid-State Drive (SSD) over a traditional Hard Disk Drive (HDD)?",
        options: [
            "Lower financial cost per terabyte of raw storage capacity.",
            "Complete elimination of physical seek time and rotational latency due to having no mechanical moving parts.",
            "Higher reliance on magnetic read/write actuator heads which prevents electronic circuit wear.",
            "Direct architectural integration inside the CPU's primary L1 cache cluster."
        ],
        correct: 1,
        topic: "Storage Devices"
    },
    {
        id: "csc264_012",
        question: "What structural component allows USB flash drives to achieve non-volatile memory retention without an integrated battery power source?",
        options: [
            "Microscopic spinning optical disks read by an infrared internal laser.",
            "Constant dynamic refreshing loops powered by local static electricity fields.",
            "Trapped electrons isolated securely inside an insulated floating-gate transistor architecture.",
            "Continuous magnetic domain re-alignment driven by physical mechanical levers."
        ],
        correct: 2,
        topic: "Storage Devices"
    },
    {
        id: "csc264_013",
        question: "Which of the following is an inherent characteristic feature of secondary storage devices?",
        options: [
            "Direct connection to the internal CPU address and data lines for execution.",
            "Complete dependency on continuous power to retain files.",
            "Non-volatile retention, larger storage capacity, and slower access speeds compared to primary memory.",
            "Inability to be rewritten or modified once initial data is saved."
        ],
        correct: 2,
        topic: "Storage Devices"
    },
    {
        id: "csc264_014",
        question: "According to digital logic design principles, what distinguishes a sequential circuit from a combinational circuit?",
        options: [
            "A sequential circuit's output depends solely on current inputs, while a combinational circuit's output depends on past states.",
            "A sequential circuit incorporates memory elements and its output depends on both current inputs and previous history, while a combinational circuit's output depends only on immediate inputs.",
            "Sequential circuits use only OR gates, while combinational circuits use only AND gates.",
            "Sequential circuits process only analog signals, while combinational circuits deal exclusively with binary."
        ],
        correct: 1,
        topic: "Digital Logic Circuits"
    },
    {
        id: "csc264_015",
        question: "Which of the following digital hardware components serves as a classic example of a combinational circuit?",
        options: [
            "A 4-bit binary counter.",
            "A hardware shift register.",
            "An arithmetic adder or a data multiplexer.",
            "A static RAM memory cell."
        ],
        correct: 2,
        topic: "Digital Logic Circuits"
    },
    {
        id: "csc264_016",
        question: "Which of the following hardware elements is structurally categorized as a sequential digital circuit?",
        options: [
            "An AND logic gate.",
            "A 2-to-4 line decoder.",
            "A digital tracking counter or register.",
            "A binary half-adder circuit."
        ],
        correct: 2,
        topic: "Digital Logic Circuits"
    },
    {
        id: "csc264_017",
        question: "What fundamental role do transistors play when serving as building blocks within computer integrated circuits?",
        options: [
            "They act as microscopic electronic switches that turn electrical currents \"on\" or \"off\" to represent binary digits.",
            "They filter high-frequency analog noise from legacy communication cables.",
            "They physically spin the internal platters of magnetic secondary drives.",
            "They convert binary machine code into human-readable text on structural monitors."
        ],
        correct: 0,
        topic: "Integrated Circuits"
    },
    {
        id: "csc264_018",
        question: "What is an Integrated Circuit (IC) commonly referred to as within computer hardware and maintenance domains?",
        options: [
            "A copper bus cable.",
            "A semiconductor chip.",
            "An analog power regulator.",
            "A mechanical actuator arm."
        ],
        correct: 1,
        topic: "Integrated Circuits"
    },
    {
        id: "csc264_019",
        question: "Where does a computer's central processing unit immediately look to find unalterable Power-On Self-Test (POST) firmware commands during a cold boot sequence?",
        options: [
            "The primary system partition of a secondary solid-state drive.",
            "The high-speed volatile L1 instruction cache.",
            "The non-volatile system ROM / BIOS chip.",
            "The virtual memory swap file allocated on the hard drive."
        ],
        correct: 2,
        topic: "Computer Storage"
    },
    {
        id: "csc264_020",
        question: "What physical phenomenon causes the access time delay known as rotational latency in traditional Hard Disk Drives (HDDs)?",
        options: [
            "The time it takes for electrons to travel across silicon gates.",
            "The time required for the magnetic platter to rotate the targeted data sector directly underneath the read/write head.",
            "The delay during laser calibration on reflective surface pits.",
            "The thermal dissipation wait window required to cool down the internal circuit."
        ],
        correct: 1,
        topic: "Storage Devices"
    },
    {
        id: "csc264_021",
        question: "How do modern Solid-State Drives (SSDs) read, write, and manage data elements without using mechanical components?",
        options: [
            "By steering micro-lasers to burn holes into specialized optical layers.",
            "By manipulating localized magnetic domains on flexible polymer bands.",
            "By routing electronic current paths directly through arrays of flash semiconductor gates to change cell charges.",
            "By relying on software emulation loops running in the computer's cloud operating system."
        ],
        correct: 2,
        topic: "Storage Devices"
    },
    {
        id: "csc264_022",
        question: "If a system architect increases the clock signal frequency of a synchronous digital processing unit, what is the direct structural result?",
        options: [
            "The internal data bus cables will double their physical width.",
            "The processing unit will execute more state transitions and logic evaluations per second, accelerating processing speed.",
            "Volatile RAM memory will automatically transform into permanent optical storage.",
            "The circuit will cease using binary logic and switch entirely to analog computations."
        ],
        correct: 1,
        topic: "Clock Signals"
    },
    {
        id: "csc264_023",
        question: "What is the structural difference between level triggering and edge triggering in a digital latch or flip-flop?",
        options: [
            "Level triggering switches states only when the clock is turned completely off, while edge triggering works when it is turned on.",
            "Level triggering permits state updates continuously during the entire duration that the clock signal remains at a specific voltage level (high or low), whereas edge triggering permits updates only during the instantaneous transition boundary between levels.",
            "Level triggering uses optical light fields, while edge triggering relies on magnetic platters.",
            "Level triggering is faster and completely immune to noise compared to edge triggering."
        ],
        correct: 1,
        topic: "Clock Signals"
    },
    {
        id: "csc264_024",
        question: "Combinations of multiple interconnected transistors designed to execute basic logical functions such as AND, OR, and NOT are known as what?",
        options: [
            "Secondary storage sectors.",
            "Operational amplifiers.",
            "Logic gates.",
            "Modulation carriers."
        ],
        correct: 2,
        topic: "Digital Logic Circuits"
    },
    {
        id: "csc264_025",
        question: "Why is secondary storage a critical requirement in modern computer architectures despite its slower performance compared to primary memory?",
        options: [
            "It provides the high-voltage electrical energy needed to power the CPU registers.",
            "It offers massive, cost-effective, non-volatile capacity to safely preserve user files and operating system files permanently when power is removed.",
            "It translates analog phone lines into digital network formats for home routers.",
            "It acts as the direct execution interface for the Arithmetic Logic Unit."
        ],
        correct: 1,
        topic: "Storage Devices"
    },

    // ── BATCH 2: MODEM, MODULATION/DEMODULATION, OPERATIONAL AMPLIFIERS ───────

    {
        id: "csc264_026",
        question: "What is the full meaning of the acronym MODEM as used in computer hardware and telecommunications?",
        options: [
            "Modular Digital Electronic Machine",
            "Modulator-Demodulator",
            "Multiplexed Output Data Electron Mechanism",
            "Monolithic Digital Energy Module"
        ],
        correct: 1,
        topic: "MODEM"
    },
    {
        id: "csc264_027",
        question: "Which of the following best describes the primary function of a modem in a computer network?",
        options: [
            "To scan incoming files for malware and distribute network IP addresses.",
            "To convert digital signals from a computer into analog signals for transmission lines, and vice versa.",
            "To increase the clock speed of the network interface card during high-volume data transfers.",
            "To store long-term web browser cache elements on a non-volatile flash chip."
        ],
        correct: 1,
        topic: "MODEM"
    },
    {
        id: "csc264_028",
        question: "What is a key physical and operational difference between an internal modem and an external modem?",
        options: [
            "Internal modems only handle analog data, while external modems handle digital data exclusively.",
            "Internal modems plug directly into the motherboard slots (like PCIe) and draw power from the system, while external modems sit outside the case and connect via ports like USB or Ethernet.",
            "External modems are completely immune to transmission line noise, whereas internal modems are not.",
            "Internal modems cannot perform demodulation, while external modems can."
        ],
        correct: 1,
        topic: "MODEM"
    },
    {
        id: "csc264_029",
        question: "Why is a modem essential for enabling internet connectivity over traditional telephone lines?",
        options: [
            "Telephone lines can only transmit discrete binary square waves natively.",
            "Computers process data using continuous analog audio waves, which must be boosted.",
            "Telephone lines are designed to carry analog voice audio signals, whereas computers communicate internally using digital binary signals.",
            "The modem acts as a secondary storage device that records internet history."
        ],
        correct: 2,
        topic: "MODEM"
    },
    {
        id: "csc264_030",
        question: "During the communication process, what happens during the \"modulation\" phase at the transmitting computer's end?",
        options: [
            "Incoming files are decompressed into raw text strings.",
            "Digital binary data from the computer is converted into an analog carrier wave for transmission.",
            "The analog signal is stripped of its high-frequency component to leave only pure digital bits.",
            "The system memory is cleared to make room for incoming network frames."
        ],
        correct: 1,
        topic: "Modulation and Demodulation"
    },
    {
        id: "csc264_031",
        question: "What occurs during the \"demodulation\" phase at the receiving end of a network link?",
        options: [
            "The local CPU converts digital variables into physical print commands.",
            "Binary codes are converted into analog signals before entering the RAM.",
            "The incoming analog carrier wave is processed to separate and extract the original digital binary data.",
            "The data line is temporarily short-circuited to reset the hardware clock."
        ],
        correct: 2,
        topic: "Modulation and Demodulation"
    },
    {
        id: "csc264_032",
        question: "Which of the following statements is true regarding modern internal modems compared to external modems?",
        options: [
            "Internal modems are much easier to physically move between different computers without opening the chassis.",
            "External modems provide clearer diagnostic troubleshooting via physical LED status indicators on their outer casing.",
            "Internal modems always require a separate dedicated external power adapter plug.",
            "External modems cannot be disconnected without crashing the host operating system."
        ],
        correct: 1,
        topic: "MODEM"
    },
    {
        id: "csc264_033",
        question: "What is the primary objective of modulation in telecommunication systems?",
        options: [
            "To make sure that digital data is compressed to zero bytes before transmission.",
            "To overlay information onto a high-frequency carrier signal so it can be transmitted effectively over long distances with minimal degradation.",
            "To prevent sequential logic circuits from experiencing positive edge triggering errors.",
            "To transform volatile primary storage elements into non-volatile memory tracks."
        ],
        correct: 1,
        topic: "Modulation and Demodulation"
    },
    {
        id: "csc264_034",
        question: "In Amplitude Modulation (AM), which characteristic of the carrier wave is varied in accordance with the data signal?",
        options: [
            "The total number of complete cycles per second (frequency).",
            "The relative angular shift of the wave cycle starting point (phase).",
            "The maximum height or strength of the wave signal voltage (amplitude).",
            "The physical thickness of the copper wire insulation."
        ],
        correct: 2,
        topic: "Modulation and Demodulation"
    },
    {
        id: "csc264_035",
        question: "How does Frequency Modulation (FM) differ fundamentally from Amplitude Modulation (AM)?",
        options: [
            "FM alters the wave's peak voltage height, while AM keeps it variable.",
            "FM modifies the frequency of the carrier wave based on the input signal while keeping the amplitude constant, whereas AM modifies the wave amplitude.",
            "FM can only transmit analog voice, while AM is used exclusively for modern fiber optic lines.",
            "FM requires a mechanical spinning platter to vary the signal output."
        ],
        correct: 1,
        topic: "Modulation and Demodulation"
    },
    {
        id: "csc264_036",
        question: "What characteristic of the carrier wave is modified when using Phase Modulation (PM)?",
        options: [
            "The electrical resistance value of the transmitting antenna.",
            "The steady-state power supply voltage going into the modem.",
            "The time phase or angular position of the wave relative to a fixed reference point.",
            "The overall physical length of the analog cable line."
        ],
        correct: 2,
        topic: "Modulation and Demodulation"
    },
    {
        id: "csc264_037",
        question: "Why is demodulation considered highly critical in a complete data communication system?",
        options: [
            "It allows the receiving hardware to rebuild and understand the original message sent across the network.",
            "It actively recharges the system's power supply unit via the analog cable.",
            "It permanently converts combinational circuits into sequential logic structures.",
            "It tracks the total number of bytes written to a secondary solid-state drive."
        ],
        correct: 0,
        topic: "Modulation and Demodulation"
    },
    {
        id: "csc264_038",
        question: "Which of the following is a prominent real-world application of modulation and demodulation technologies?",
        options: [
            "Setting the instruction pipeline depth inside a CPU's execution unit.",
            "Clearing cache blocks within an L2 static RAM memory module.",
            "Connecting home local area networks to remote internet servers via cable or telephone infrastructures.",
            "Calibrating the physical balance of a cooling fan on an operational amplifier chip."
        ],
        correct: 2,
        topic: "Modulation and Demodulation"
    },
    {
        id: "csc264_039",
        question: "Compared to Amplitude Modulation (AM), what is a major technical advantage offered by Frequency Modulation (FM)?",
        options: [
            "FM circuits are vastly simpler and require fewer electronic components.",
            "FM signals have significantly better resistance to electrical noise and static interference.",
            "FM signals use far less bandwidth space on the electromagnetic spectrum than AM signals.",
            "FM allows data to travel entirely through non-conductive mechanical linkages."
        ],
        correct: 1,
        topic: "Modulation and Demodulation"
    },
    {
        id: "csc264_040",
        question: "What does an Operational Amplifier (Op-Amp) fundamentally represent in electronics?",
        options: [
            "A mechanical cooling device designed to reduce heat on modern motherboards.",
            "A high-gain, direct-coupled electronic voltage amplifier with differential inputs.",
            "A specialized non-volatile semiconductor cell used exclusively in flash drives.",
            "A digital clock signal divider that executes positive edge triggering logic."
        ],
        correct: 1,
        topic: "Operational Amplifiers"
    },
    {
        id: "csc264_041",
        question: "Which of the following best outlines the standard schematic symbol configuration of an Operational Amplifier?",
        options: [
            "A square block containing four independent clock signal entry pins.",
            "A circular diagram representing a mechanical motor platter with three output pins.",
            "A triangle pointing sideways, featuring two input connections (marked + and -) and a single output connection.",
            "A straight horizontal line representing a shared, non-insulated copper bus wire."
        ],
        correct: 2,
        topic: "Operational Amplifiers"
    },
    {
        id: "csc264_042",
        question: "Which of the following is a key characteristic feature of an ideal, theoretical Operational Amplifier?",
        options: [
            "Zero input impedance and infinite output impedance.",
            "Infinite input impedance, infinite open-loop voltage gain, and zero output impedance.",
            "Complete dependency on high-frequency clock triggering waves to output any voltage.",
            "Limited bandwidth restricted strictly to low-frequency audio waves below 10Hz."
        ],
        correct: 1,
        topic: "Operational Amplifiers"
    },
    {
        id: "csc264_043",
        question: "What happens to the output signal phase when a voltage is applied to the Inverting Input (-) pin of an operational amplifier?",
        options: [
            "The output signal voltage is completely cut off to exactly zero.",
            "The output signal remains exactly in-phase with the input signal wave.",
            "The output signal is amplified and flipped 180 degrees out of phase relative to the input signal.",
            "The input signal turns into a digital binary square wave clock edge."
        ],
        correct: 2,
        topic: "Operational Amplifiers"
    },
    {
        id: "csc264_044",
        question: "How does a Non-Inverting Amplifier configuration behave when an analog signal is fed into its positive (+) input pin?",
        options: [
            "The output signal is amplified and maintains the exact same phase orientation as the input signal.",
            "The output voltage immediately drops to a negative level regardless of the input.",
            "The circuit ceases amplification and functions as a high-speed logic gate.",
            "The output signal becomes 180 degrees out of phase with the incoming wave."
        ],
        correct: 0,
        topic: "Operational Amplifiers"
    },
    {
        id: "csc264_045",
        question: "What baseline operational principle governs how a practical Op-Amp processes its incoming signal lines?",
        options: [
            "It amplifies only the uniform shared voltage present across both lines simultaneously.",
            "It senses and amplifies the differential voltage difference between its non-inverting and inverting input pins.",
            "It converts incoming voltage levels into discrete binary numbers using internal transistors.",
            "It counts the number of positive edge clock signal triggers passing through the circuit per second."
        ],
        correct: 1,
        topic: "Operational Amplifiers"
    },
    {
        id: "csc264_046",
        question: "Which of the following is a standard practical application of an Operational Amplifier in modern electronic and computer circuits?",
        options: [
            "Spinning the magnetic actuators of secondary storage hard drives.",
            "Serving as an active voltage amplifier, mathematical integrator, or signal filter element.",
            "Storing permanent boot files inside a system's primary ROM chip.",
            "Managing the system registry entries inside an operating system."
        ],
        correct: 1,
        topic: "Operational Amplifiers"
    },
    {
        id: "csc264_047",
        question: "Why is the high input impedance of a practical Operational Amplifier considered a major advantage in hardware design?",
        options: [
            "It allows huge currents to flow directly into the chip to power external cooling fans.",
            "It ensures the Op-Amp draws virtually no current from the input source circuit, preventing signal loading and distortion.",
            "It forces the internal transistors to operate like standard combinational logic multiplexers.",
            "It allows the chip to run smoothly without requiring any main ground wiring."
        ],
        correct: 1,
        topic: "Operational Amplifiers"
    },
    {
        id: "csc264_048",
        question: "What is a major performance limitation of a real, practical Operational Amplifier compared to an ideal one?",
        options: [
            "Practical Op-Amps cannot handle any form of negative feedback loops.",
            "Practical Op-Amps possess finite open-loop gain, finite input impedance, and a limited slew rate.",
            "Practical Op-Amps require continuous mechanical cooling via fluid immersion.",
            "Practical Op-Amps only output digital square signals."
        ],
        correct: 1,
        topic: "Operational Amplifiers"
    },
    {
        id: "csc264_049",
        question: "How can an Operational Amplifier be utilized in active filtering circuits within hardware systems?",
        options: [
            "By using it to mechanically scrub physical debris off electronic components.",
            "By combining the Op-Amp with selective resistor-capacitor (RC) networks to block or pass specific ranges of signal frequencies.",
            "By configuring it to wipe out corrupt data sectors on a secondary flash drive.",
            "By utilizing it to accelerate the processor's clock signal frequency."
        ],
        correct: 1,
        topic: "Operational Amplifiers"
    },
    {
        id: "csc264_050",
        question: "In early computing systems and instrumentation, why were Op-Amps widely used to build analog computers?",
        options: [
            "Because they could be configured to perform mathematical operations like addition, subtraction, integration, and differentiation directly on analog voltages.",
            "Because they were completely immune to the heat generated by vacuum tubes.",
            "Because they could hold gigabytes of volatile system memory instructions without power.",
            "Because they could automatically translate high-level language scripts into binary codes."
        ],
        correct: 0,
        topic: "Operational Amplifiers"
    },

    // ── BATCH 3: STORAGE HIERARCHY, TIMING, MODULATION, OP-AMPS, MAINTENANCE ──

    {
        id: "csc264_051",
        question: "When analyzing the complete computer storage hierarchy, which of the following accurately describes the relationship between memory layers as you move closer to the CPU core?",
        options: [
            "Physical capacity increases, monetary cost per gigabyte decreases, and access speed slows down.",
            "Access speed increases, monetary cost per gigabyte increases, and physical capacity decreases.",
            "Storage density increases, volatility is completely eliminated, and bandwidth drops.",
            "Access latency increases, power consumption decreases, and structural size scales up."
        ],
        correct: 1,
        topic: "Computer Storage"
    },
    {
        id: "csc264_052",
        question: "In sequential logic circuits, what structural timing failure occurs if the input data signal changes its binary state too close to the active clock trigger edge?",
        options: [
            "High-voltage thermal meltdown across the combinational logic arrays.",
            "A setup or hold time violation, forcing the flip-flop into an unstable, unpredictable state known as metastability.",
            "The instantaneous transformation of an edge-triggered register into a level-sensitive decoder.",
            "The automatic re-routing of the clock signal through the system's secondary storage controller."
        ],
        correct: 1,
        topic: "Clock Signals"
    },
    {
        id: "csc264_053",
        question: "Which of the following outlines the correct end-to-end signal path when a transmitting computer sends data across an analog telephone network infrastructure to a receiving computer?",
        options: [
            "Transmitting CPU → Analog line → Modulator → Demodulator → Receiving RAM.",
            "Transmitting CPU → Digital Data → Modulator → Analog Carrier Wave → Transmission Line → Demodulator → Digital Data → Receiving CPU.",
            "Transmitting CPU → Demodulator → Continuous Square Wave → Modulator → Receiving CPU.",
            "Transmitting CPU → Floating-Gate Array → Phase Filter → Op-Amp Mixer → Receiving CPU."
        ],
        correct: 1,
        topic: "Modulation and Demodulation"
    },
    {
        id: "csc264_054",
        question: "What specific operational configuration is created when multiple input voltages are connected via independent resistors to the inverting input terminal of an Operational Amplifier?",
        options: [
            "A binary tracking counter circuit.",
            "A high-speed hardware shift register.",
            "A summing amplifier (analog adder) that outputs a weighted algebraic combination of the input signals.",
            "A non-volatile flash memory cell array."
        ],
        correct: 2,
        topic: "Operational Amplifiers"
    },
    {
        id: "csc264_055",
        question: "During a standard hardware maintenance routine, a technician observes a computer that powers on, illuminates its status LEDs, spins its cooling fans, but fails to execute its Power-On Self-Test (POST) or display a BIOS splash screen. Which component is most likely defective?",
        options: [
            "The secondary solid-state drive operating system partition.",
            "An uninsulated external copper network interface cable.",
            "The non-volatile system ROM chip containing the core firmware instructions.",
            "The dynamic file allocation table of a temporary USB flash drive."
        ],
        correct: 2,
        topic: "Computer Storage"
    },
    {
        id: "csc264_056",
        question: "When an Operational Amplifier is intentionally operated in an open-loop configuration without any electrical feedback pathway between its output and inputs, how does it behave?",
        options: [
            "It acts as a highly sensitive voltage comparator, slamming its output to maximum positive or negative saturation based on tiny variations between the inputs.",
            "It functions as a perfectly linear voltage follower with a constant gain of exactly one.",
            "It automatically divides incoming clock frequencies by half to match sequential registers.",
            "It converts continuous sinusoidal waves into unamplified multi-phase analog audio loops."
        ],
        correct: 0,
        topic: "Operational Amplifiers"
    },
    {
        id: "csc264_057",
        question: "What is the structural definition of the \"duty cycle\" of a digital clock signal, and why is it critical in hardware maintenance diagnostics?",
        options: [
            "The total duration of time required for an integrated circuit to physically wear out and require replacement.",
            "The ratio of the high voltage state duration (pulse width) to the total period of one complete clock cycle, expressed as a percentage.",
            "The maximum number of bits a data bus can transfer while operating at peak thermal capacity.",
            "The measurement of electrical resistance variance across an operational amplifier's feedback loop."
        ],
        correct: 1,
        topic: "Clock Signals"
    },
    {
        id: "csc264_058",
        question: "Why do modern solid-state secondary storage devices (SSDs and Flash Drives) implement a specialized internal maintenance algorithm known as \"Wear Leveling\"?",
        options: [
            "To mechanically realign the magnetic sectors on spinning platters to minimize physical friction.",
            "To evenly distribute write and erase cycles across flash memory blocks, preventing premature cell degradation due to their finite lifecycle limit.",
            "To continuously convert volatile memory cells into non-volatile memory cells during peak computing hours.",
            "To synchronize the transmission speed of NAND flash blocks with the external analog modem interface."
        ],
        correct: 1,
        topic: "Storage Devices"
    },
    {
        id: "csc264_059",
        question: "What occurs structurally when a communication system experiences a mismatch between the \"Baud Rate\" and the \"Bit Rate\" during modulation?",
        options: [
            "The operational amplifier immediately burns out its differential inputs due to current overloads.",
            "A single transmitted analog signal state change (symbol) carries multiple encoded binary data bits simultaneously.",
            "The sequential hardware registers instantly shift from edge-triggering to level-triggering modes.",
            "The computer's primary storage space is automatically converted into non-volatile firmware backup tracks."
        ],
        correct: 1,
        topic: "Modulation and Demodulation"
    },
    {
        id: "csc264_060",
        question: "What is the structural purpose of introducing a negative feedback loop to a practical operational amplifier circuit by routing a portion of the output signal back to the inverting (-) input?",
        options: [
            "To drive the open-loop gain to infinity and maximize output voltage distortion.",
            "To stabilize and precisely control the overall voltage gain, expand the circuit's operating bandwidth, and reduce signal distortion.",
            "To convert the analog processing unit into a synchronous digital tracking counter.",
            "To completely eliminate the need for an external electrical power supply connection."
        ],
        correct: 1,
        topic: "Operational Amplifiers"
    },
    {
        id: "csc264_061",
        question: "How does the architectural principle of \"Locality of Reference\" justify the integration of small, expensive Cache Memories (SRAM) between the CPU and the Main Memory (DRAM)?",
        options: [
            "It guarantees that secondary storage devices can bypass primary memory layers completely during processing.",
            "It states that programs tend to reuse the same data instructions repeatedly or access memory addresses located close together within short time windows.",
            "It forces the system to run entirely on combinational logic circuits, eliminating sequential delays.",
            "It prevents the clock signal from generating positive edge transitions across the internal data buses."
        ],
        correct: 1,
        topic: "Computer Storage"
    },
    {
        id: "csc264_062",
        question: "Which advanced modulation technique blends elements of both Amplitude Modulation (AM) and Phase Modulation (PM) to maximize data throughput inside digital modems?",
        options: [
            "Frequency Shift Keying (FSK)",
            "Operational Analog Multiplexing (OAM)",
            "Quadrature Amplitude Modulation (QAM)",
            "Level Triggered Pulse Modulation (LTPM)"
        ],
        correct: 2,
        topic: "Modulation and Demodulation"
    },
    {
        id: "csc264_063",
        question: "Why does edge-triggering design dominate modern synchronous CPU architectures over level-sensitive latching designs?",
        options: [
            "Edge-triggered devices consume vastly more voltage which stabilizes the system clock lines.",
            "Edge-triggered devices restrict the data sampling window to a split-second transition point, eliminating \"race conditions\" where data loops uncontrollably through active gates.",
            "Edge-triggered circuits function entirely without the presence of internal logic gates.",
            "Edge-triggered components are structurally limited to processing non-volatile storage routines."
        ],
        correct: 1,
        topic: "Clock Signals"
    },
    {
        id: "csc264_064",
        question: "A hardware maintenance technician runs a diagnostics utility and detects an unacceptably high level of \"Clock Skew\" across a motherboard layout. What does this mean?",
        options: [
            "The operational amplifier's output signal has flipped 180 degrees out of phase with its input.",
            "The clock signal pulses are arriving at different sequential components at slightly different times due to varying wire path lengths and circuit delays.",
            "The non-volatile ROM chips are drawing excessive electric current from the primary RAM modules.",
            "The system storage media has suffered physical sector alignment damage along its magnetic tracks."
        ],
        correct: 1,
        topic: "Clock Signals"
    },
    {
        id: "csc264_065",
        question: "What operational phenomenon is encountered if an engineer feeds an exceptionally high-frequency input signal into a practical Op-Amp, exceeding its specified \"Slew Rate\" limit?",
        options: [
            "The circuit transforms into a non-volatile data storage cell.",
            "The output waveform distorts heavily into a triangular profile because the internal electronics cannot physically change the output voltage fast enough to match the input.",
            "The clock signal frequency automatically doubles its cycle rate.",
            "The input impedance drops instantly to absolute zero, causing a short circuit."
        ],
        correct: 1,
        topic: "Operational Amplifiers"
    },
    {
        id: "csc264_066",
        question: "When comparing physical interface configurations, which connector is traditionally used to link a modem's internal card or chassis to the external public telephone line network?",
        options: [
            "An unshielded 20-pin PCIe extension slot.",
            "An RJ-11 modular telephone plug interface.",
            "A high-speed multi-lane parallel data bus connector.",
            "A BNC high-frequency coaxial terminal."
        ],
        correct: 1,
        topic: "MODEM"
    },
    {
        id: "csc264_067",
        question: "Which of the following represents a true technical advantage of Read-Only Memory (ROM) over Random Access Memory (RAM) within a computer system's architecture?",
        options: [
            "Infinite read/write cycling speeds that outpace cache arrays.",
            "Non-volatile storage capability that securely retains critical data instructions permanently even when the system is fully powered down.",
            "Larger physical storage capacities at lower manufacturing costs.",
            "Direct structural execution mapping within the Arithmetic Logic Unit pipeline."
        ],
        correct: 1,
        topic: "Computer Storage"
    },
    {
        id: "csc264_068",
        question: "What structural phenomenon creates the \"virtual ground\" concept at the inverting input pin of a standard inverting operational amplifier configuration?",
        options: [
            "A direct physical wire connection linking the negative input terminal straight to the earth ground stake.",
            "The combination of an ideal infinite open-loop gain and a grounded non-inverting input terminal, forcing the differential input voltage to approach zero.",
            "The automatic discharge of static electricity fields across the feedback capacitor networks.",
            "The structural integration of a digital clock signal that resets the input voltage state continuously."
        ],
        correct: 1,
        topic: "Operational Amplifiers"
    },
    {
        id: "csc264_069",
        question: "What structural and electrical reason explains why Dynamic RAM (DRAM) requires a continuous, repetitive internal refresh cycle during operation, unlike Static RAM (SRAM)?",
        options: [
            "DRAM is manufactured out of mechanical moving elements that jam up if left un-agitated.",
            "DRAM stores individual binary bits using tiny microscopic capacitors that naturally leak their electric charges over time if not regularly recharged.",
            "DRAM relies on floating-gate oxide traps that must be cleared by high-voltage square waves every microsecond.",
            "DRAM components operate strictly on analog signals and lack digital logic gates."
        ],
        correct: 1,
        topic: "Computer Storage"
    },
    {
        id: "csc264_070",
        question: "In communication hardware engineering, how is the metric known as Common-Mode Rejection Ratio (CMRR) interpreted when evaluating an Operational Amplifier?",
        options: [
            "The speed at which the circuit converts digital square waves into analog voice waveforms.",
            "The measurement of the Op-Amp's ability to reject unwanted noise signals that appear simultaneously on both input terminals while amplifying the desired differential signal.",
            "The maximum number of non-volatile storage tracks the chip can actively read per clock cycle.",
            "The percentage of thermal energy dissipated through the copper substrate layers under maximum load."
        ],
        correct: 1,
        topic: "Operational Amplifiers"
    },
    {
        id: "csc264_071",
        question: "Why is physical disk defragmentation highly beneficial for a mechanical Hard Disk Drive (HDD) but completely unnecessary and potentially harmful for a Solid-State Drive (SSD)?",
        options: [
            "HDDs require fragments to be physically aligned to increase the rotational latency of the spinning platters.",
            "SSDs use semiconductor memory cells with uniform near-zero seek times across all locations, meaning file fragmentation does not impact reading speeds, while the extra write operations from defragmenting wear out the drive cells prematurely.",
            "Defragmenting an SSD forces its NAND flash cells to permanently revert into volatile primary storage arrays.",
            "Mechanical HDDs use lasers that require perfectly ordered continuous lines to read data sectors properly."
        ],
        correct: 1,
        topic: "Storage Devices"
    },
    {
        id: "csc264_072",
        question: "If a system designer records that a computer circuit is operating with a baseline clock period (T) of exactly 2 nanoseconds (2 x 10^-9 seconds), what is the calculated frequency (f) of that clock signal?",
        options: [
            "500 Kilohertz (KHz)",
            "2 Megahertz (MHz)",
            "500 Megahertz (MHz)",
            "2 Gigahertz (GHz)"
        ],
        correct: 2,
        topic: "Clock Signals"
    },
    {
        id: "csc264_073",
        question: "Which component of an Operational Amplifier's practical architecture is responsible for generating the non-linear limitation known as \"Input Offset Voltage\"?",
        options: [
            "Microscopic mismatches and physical manufacturing asymmetries between the internal input transistors on the silicon die.",
            "The presence of external high-frequency clock signals leaking into the feedback loop path.",
            "High thermal dissipation requiring the deployment of liquid immersion cooling loops.",
            "The storage capacity of the non-volatile firmware chips installed on the PCB."
        ],
        correct: 0,
        topic: "Operational Amplifiers"
    },
    {
        id: "csc264_074",
        question: "Which of the following accurately describes the operational mode of an unclocked, standard combinational logic circuit when its input parameters are altered?",
        options: [
            "It stores the input state in an internal memory latch until a positive edge clock transition happens.",
            "Its output state changes almost instantaneously based purely on the physical propagation delays of the logic gates, with zero dependence on a clock signal.",
            "It automatically converts the incoming binary strings into high-frequency phase-modulated analog waves.",
            "It shuts down all voltage lines to prevent setup and hold violations across the system unit."
        ],
        correct: 1,
        topic: "Digital Logic Circuits"
    },
    {
        id: "csc264_075",
        question: "What specialized electronic testing instrument is most suitable for a hardware technician to visually track, measure, and analyze a real-time digital clock wave's edge triggering profile and duty cycle?",
        options: [
            "An analog multi-range mechanical galvanometer.",
            "A digital storage oscilloscope.",
            "An external hardware modem line diagnostic card.",
            "A step-down differential isolation transformer."
        ],
        correct: 1,
        topic: "Clock Signals"
    },

    // ── BATCH 4: OSCILLATORS, OPTICAL STORAGE, DUPLEX, RAID, MAINTENANCE ──────

    {
        id: "csc264_076",
        question: "Which electronic component is primarily used to generate the highly precise and stable baseline periodic oscillations required for a computer's master clock signal?",
        options: [
            "A microscopic carbon film resistor.",
            "A piezoelectric quartz crystal oscillator.",
            "An electrolytic decoupling capacitor.",
            "A multi-turn inductive copper coil."
        ],
        correct: 1,
        topic: "Clock Signals"
    },
    {
        id: "csc264_077",
        question: "How does an optical storage device (such as a CD-ROM or DVD) structurally represent and read binary data digits?",
        options: [
            "By trapping electrical charges within a floating-gate oxide layer.",
            "By polarizing micro-sized magnetic domains on a spinning metallic platter.",
            "By using a laser to detect the variations in light reflectivity caused by microscopic pits and lands on the disc surface.",
            "By altering the physical capacitance across a multi-layered matrix of semiconductor cells."
        ],
        correct: 2,
        topic: "Storage Devices"
    },
    {
        id: "csc264_078",
        question: "If two computer systems are communicating via modems over a line that allows data to travel in both directions simultaneously, what transmission mode is being utilized?",
        options: [
            "Simplex mode",
            "Half-Duplex mode",
            "Full-Duplex mode",
            "Quad-Phase Asynchronous mode"
        ],
        correct: 2,
        topic: "MODEM"
    },
    {
        id: "csc264_079",
        question: "What are the defining electrical properties of an Operational Amplifier configured as a \"Voltage Follower\" (Unity-Gain Buffer)?",
        options: [
            "Infinite voltage gain and inverted output phase.",
            "A voltage gain of exactly one, exceptionally high input impedance, and very low output impedance.",
            "Negative input resistance coupled with zero bandwidth.",
            "It converts any incoming DC voltage into a high-frequency digital clock wave."
        ],
        correct: 1,
        topic: "Operational Amplifiers"
    },
    {
        id: "csc264_080",
        question: "What physical process allows a solid-state flash drive to retain its non-volatile binary states even after being disconnected from a power source?",
        options: [
            "Continuous magnetic field refreshing driven by an internal lithium battery.",
            "Fowler-Nordheim tunneling, which traps or releases electrons within an electrically isolated floating gate transistor layer.",
            "Constant mechanical locking of micro-relays on the circuit card.",
            "The continuous generation of virtual grounds across internal operational amplifiers."
        ],
        correct: 1,
        topic: "Storage Devices"
    },
    {
        id: "csc264_081",
        question: "What technical term describes an unwanted, momentary voltage spike or glitch that occurs in an asynchronous combinational logic circuit due to varying physical propagation delays across different logic gates?",
        options: [
            "Metastability window",
            "Logic hazard or race condition",
            "Clock skew drift",
            "Common-mode saturation"
        ],
        correct: 1,
        topic: "Digital Logic Circuits"
    },
    {
        id: "csc264_082",
        question: "In digital modulation terminology, how does Phase Shift Keying (PSK) encode binary bits onto an analog carrier wave?",
        options: [
            "By varying the total number of complete wave cycles generated per second.",
            "By abruptly changing the peak voltage height of the carrier wave at fixed intervals.",
            "By shifting the angular starting position of the sine wave cycle relative to a reference time frame to represent discrete bit patterns.",
            "By altering the operating temperature of the transmission line."
        ],
        correct: 2,
        topic: "Modulation and Demodulation"
    },
    {
        id: "csc264_083",
        question: "What happens to the output waveform of an Operational Amplifier configured as an ideal Differentiator circuit when it receives a steady, constant DC input voltage?",
        options: [
            "The output voltage climbs continuously until it hits maximum positive saturation.",
            "The output voltage drops immediately to exactly zero volts.",
            "The output begins to alternate as a perfect 50% duty cycle square wave.",
            "The output mirrors the input with an exact 180-degree phase shift."
        ],
        correct: 1,
        topic: "Operational Amplifiers"
    },
    {
        id: "csc264_084",
        question: "In processor memory operations, what is meant by the term \"Miss Penalty\"?",
        options: [
            "The financial cost incurred by an enterprise when a secondary hard drive experiences a sector crash.",
            "The total overhead time required to fetch a requested block of data from main memory (DRAM) and load it into the cache hierarchy when a CPU cache lookup fails.",
            "The number of clock cycles lost when a sequential logic circuit experiences a setup time violation.",
            "The time required to switch a modem from modulation to demodulation mode."
        ],
        correct: 1,
        topic: "Computer Storage"
    },
    {
        id: "csc264_085",
        question: "During motherboard troubleshooting, a technician suspects a malfunction within the \"Clock Distribution Network.\" What is the primary role of this specific hardware subsystem?",
        options: [
            "To back up system configuration parameters when the primary power supply unit is turned off.",
            "To cleanly route the master clock signal from its source oscillator to every synchronous sequential component across the board with minimal, balanced timing delays.",
            "To convert incoming analog telephone calls into digital data packets.",
            "To balance the electrical current flowing into the operational amplifier's saturation rails."
        ],
        correct: 1,
        topic: "Clock Signals"
    },
    {
        id: "csc264_086",
        question: "Why did early dial-up modems generate audible, high-pitched screeching and buzzing sounds over a telephone line during the \"handshaking\" phase?",
        options: [
            "The sound was a required safety mechanism to alert users of hazardous voltage spikes on the motherboard.",
            "The devices were actively testing line quality, negotiating matching modulation protocols, and mapping out structural frequencies suitable for analog audio data transfer.",
            "The noise was generated by the physical spinning of internal storage platters inside the modem housing.",
            "The operational amplifiers inside the modem were discharging trapped static energy into the local loop."
        ],
        correct: 1,
        topic: "MODEM"
    },
    {
        id: "csc264_087",
        question: "Which of the following describes a hardware circuit condition that directly results in a \"metastable state\" within a sequential storage flip-flop?",
        options: [
            "Operating the circuit under extremely low temperatures near absolute zero.",
            "Violating the minimum setup or hold time constraints, causing the internal latching transistors to fail to latch a solid high or low voltage level cleanly.",
            "Routing an analog audio wave straight into the non-inverting terminal of an open-loop Op-Amp.",
            "Defragmenting a solid-state flash drive while it is executing a data write cycle."
        ],
        correct: 1,
        topic: "Clock Signals"
    },
    {
        id: "csc264_088",
        question: "When configuring advanced secondary storage arrays for system maintenance and redundancy, what is the core structural purpose of implementing a RAID 1 configuration?",
        options: [
            "To split data evenly across multiple disks without any parity calculations to maximize writing speeds.",
            "To provide complete data redundancy by executing real-time data mirroring across pairs of drives, ensuring uninterrupted operation if one drive fails.",
            "To convert a series of slow mechanical hard drives into high-speed volatile cache memories.",
            "To modulate incoming network packets directly onto the physical disk tracks."
        ],
        correct: 1,
        topic: "Storage Devices"
    },
    {
        id: "csc264_089",
        question: "How does the \"Gain-Bandwidth Product\" (GBW) limitation impact the operation of a practical operational amplifier circuit?",
        options: [
            "It dictates that as the operational frequency of the input signal increases, the maximum open-loop voltage gain of the amplifier drops proportionally.",
            "It forces the input impedance of the chip to decrease to absolute zero under heavy thermal loads.",
            "It locks the output voltage phase to exactly match the input phase regardless of configuration.",
            "It prevents the Op-Amp from being deployed in analog computers."
        ],
        correct: 0,
        topic: "Operational Amplifiers"
    },
    {
        id: "csc264_090",
        question: "What is the primary function of an \"Envelope Detector\" circuit in telecommunication demodulation systems?",
        options: [
            "To calculate the checksum value of a digital data packet frame.",
            "To extract the original low-frequency modulating data signal from an incoming high-frequency Amplitude Modulated (AM) carrier wave.",
            "To mechanically separate external phone lines from internal motherboard components.",
            "To trace clock signal skew errors across a parallel system bus layout."
        ],
        correct: 1,
        topic: "Modulation and Demodulation"
    },
    {
        id: "csc264_091",
        question: "In digital systems diagnostics, how does \"Clock Jitter\" differ from \"Clock Skew\"?",
        options: [
            "Jitter occurs across different spatial locations on the board, while skew is restricted to a single gate.",
            "Skew is a fixed spatial time variance between different endpoints on a clock line, whereas jitter is a temporal variation where a single clock edge fluctuates randomly in time over successive cycles.",
            "Jitter converts sequential logic into combinational arrays, while skew manages non-volatile flash cells.",
            "Skew refers strictly to analog modems, while jitter describes operational amplifier drift."
        ],
        correct: 1,
        topic: "Clock Signals"
    },
    {
        id: "csc264_092",
        question: "Why is Static RAM (SRAM) highly preferred for constructing processor Cache Memories over Dynamic RAM (DRAM)?",
        options: [
            "SRAM offers significantly higher storage densities at a much lower production cost per gigabyte.",
            "SRAM circuits do not require refresh cycles and have near-instantaneous access speeds because they hold data in multi-transistor latch structures.",
            "SRAM is non-volatile and retains its contents indefinitely when the PC is turned off.",
            "SRAM can handle analog modulation commands directly from an external modem."
        ],
        correct: 1,
        topic: "Computer Storage"
    },
    {
        id: "csc264_093",
        question: "An engineer builds an inverting summing Op-Amp circuit with two inputs. Channel 1 feeds +2V and Channel 2 feeds +3V, both through 10kΩ input resistors. The feedback resistor is also 10kΩ. What is the expected output voltage?",
        options: [
            "+5 Volts",
            "-5 Volts",
            "-1 Volt",
            "+10 Volts"
        ],
        correct: 1,
        topic: "Operational Amplifiers"
    },
    {
        id: "csc264_094",
        question: "What transmission line impairment is described as a gradual reduction in the total signal strength or amplitude as a high-frequency analog wave travels along a lengthy copper twisted-pair network cable?",
        options: [
            "Phase modulation distortion",
            "Attenuation",
            "Slew rate bounding",
            "Electromagnetic clock skew"
        ],
        correct: 1,
        topic: "Modulation and Demodulation"
    },
    {
        id: "csc264_095",
        question: "A computer hardware maintenance engineer utilizes S.M.A.R.T. diagnostics utilities to assess hard drive health. What does the acronym S.M.A.R.T. stand for?",
        options: [
            "System Maintenance And Real-Time Troubleshooting",
            "Self-Monitoring, Analysis, and Reporting Technology",
            "Synchronous Modulation And Re-routing Terminal",
            "Solid-State Memory Allocation and Register Tracking"
        ],
        correct: 1,
        topic: "Storage Devices"
    },
    {
        id: "csc264_096",
        question: "What specialized electronic circuit configuration can be integrated into a digital input stage to clean up a noisy, slow-rising clock signal edge, converting it back into a crisp, clean square wave?",
        options: [
            "An open-loop summing amplifier",
            "A Schmitt Trigger",
            "An envelope detector network",
            "A floating-gate flash latch"
        ],
        correct: 1,
        topic: "Clock Signals"
    },
    {
        id: "csc264_097",
        question: "In advanced telecommunications systems, what is the defining hallmark of a Coherent (Synchronous) Demodulation process?",
        options: [
            "The receiving system completely guesses the incoming wave frequency without any circuit filtering.",
            "The receiver must generate a local carrier signal that matches the transmitting carrier wave precisely in both frequency and phase.",
            "The system turns off its operational amplifier blocks to reduce power drain.",
            "The receiver converts all incoming waveforms into non-volatile data tracks automatically."
        ],
        correct: 1,
        topic: "Modulation and Demodulation"
    },
    {
        id: "csc264_098",
        question: "Why is an Instrumentation Amplifier configuration highly prized in data acquisition and industrial precision hardware layouts?",
        options: [
            "It operates entirely without the inclusion of internal operational amplifiers.",
            "It combines three separate Op-Amps to provide exceptionally high input impedance, ultra-low input bias currents, and a very high Common-Mode Rejection Ratio (CMRR).",
            "It converts digital byte data strings into mechanical rotational movements.",
            "It can only function when connected straight to a public telephone line interface."
        ],
        correct: 1,
        topic: "Operational Amplifiers"
    },
    {
        id: "csc264_099",
        question: "When performing maintenance tasks inside a computer chassis, why must a technician wear a grounded anti-static wrist strap when handling primary RAM modules or ROM chips?",
        options: [
            "To keep the component's temperature from dropping below optimal operational levels.",
            "To protect the technician from lethal high-voltage line shocks emitted by the RAM slots.",
            "To prevent Electrostatic Discharge (ESD), which can send thousands of volts of static electricity through microcircuitry and melt down internal transistor junctions on the silicon die.",
            "To ensure that the clock signal duty cycle remains balanced at exactly 50%."
        ],
        correct: 2,
        topic: "Storage Devices"
    },
    {
        id: "csc264_100",
        question: "Which core unit inside a computer system's central processing unit is ultimately responsible for interpreting instructions fetched from memory and orchestrating the continuous, precise distribution of control signals across the entire system layout?",
        options: [
            "The Arithmetic Logic Unit (ALU)",
            "The Control Unit (CU)",
            "The Secondary Storage Controller Matrix",
            "The Differential Op-Amp Array"
        ],
        correct: 1,
        topic: "Integrated Circuits"
    }

];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = CSC264_QUESTIONS;
}
