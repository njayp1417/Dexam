// IFT211 - Digital Logic and Design Questions Database
const IFT211_QUESTIONS = [
    // Extracted from past questions (30 questions)
    {
        id: "ift_001",
        question: "Digital electronics deals mainly with",
        options: ["Continuous signals", "Discrete signals", "Mechanical signals", "Acoustic signals"],
        correct: 1,
        topic: "Digital Electronics"
    },
    {
        id: "ift_002",
        question: "The number system used by digital computers is",
        options: ["Decimal", "Octal", "Binary", "Hexadecimal"],
        correct: 2,
        topic: "Number Systems"
    },
    {
        id: "ift_003",
        question: "The base of the binary number system is",
        options: ["10", "8", "16", "2"],
        correct: 3,
        topic: "Number Systems"
    },
    {
        id: "ift_004",
        question: "Which of the following is NOT a binary digit?",
        options: ["0", "1", "2", "None"],
        correct: 2,
        topic: "Number Systems"
    },
    {
        id: "ift_005",
        question: "Which number system is also known as base-16?",
        options: ["Binary", "Octal", "Decimal", "Hexadecimal"],
        correct: 3,
        topic: "Number Systems"
    },
    {
        id: "ift_006",
        question: "The binary equivalent of decimal 10 is",
        options: ["1010", "1001", "1110", "1100"],
        correct: 0,
        topic: "Number Systems"
    },
    {
        id: "ift_007",
        question: "Which representation has the problem of double zero?",
        options: ["Two's complement", "One's complement", "Binary", "BCD"],
        correct: 1,
        topic: "Binary Representations"
    },
    {
        id: "ift_008",
        question: "The most widely used signed number representation in computers is",
        options: ["Sign-magnitude", "One's complement", "Two's complement", "Excess-3"],
        correct: 2,
        topic: "Binary Representations"
    },
    {
        id: "ift_009",
        question: "The one's complement of 101010 is",
        options: ["101010", "010101", "110101", "111111"],
        correct: 1,
        topic: "Binary Representations"
    },
    {
        id: "ift_010",
        question: "Two's complement of a binary number is obtained by",
        options: ["Adding 2", "Adding 1 to one's complement", "Subtracting 1", "Reversing bits only"],
        correct: 1,
        topic: "Binary Representations"
    },
    {
        id: "ift_011",
        question: "An analog signal is",
        options: ["Discrete", "Continuous", "Binary", "Digital"],
        correct: 1,
        topic: "Signals"
    },
    {
        id: "ift_012",
        question: "Digital signals are represented using",
        options: ["Letters", "Waves", "0 and 1", "Frequencies"],
        correct: 2,
        topic: "Signals"
    },
    {
        id: "ift_013",
        question: "A logic gate is",
        options: ["A memory device", "An arithmetic unit", "A digital circuit", "A power supply"],
        correct: 2,
        topic: "Logic Gates"
    },
    {
        id: "ift_014",
        question: "Which gate gives output 1 only when all inputs are 1?",
        options: ["OR", "AND", "XOR", "NOR"],
        correct: 1,
        topic: "Logic Gates"
    },
    {
        id: "ift_015",
        question: "The Boolean operator for OR is",
        options: [".", "+", "'", "⊕"],
        correct: 1,
        topic: "Boolean Algebra"
    },
    {
        id: "ift_016",
        question: "The NOT gate is also called",
        options: ["Buffer", "Inverter", "Decoder", "Encoder"],
        correct: 1,
        topic: "Logic Gates"
    },
    {
        id: "ift_017",
        question: "Which gate produces output 1 when inputs are different?",
        options: ["AND", "OR", "XOR", "XNOR"],
        correct: 2,
        topic: "Logic Gates"
    },
    {
        id: "ift_018",
        question: "Which of the following are universal gates?",
        options: ["AND and OR", "XOR and XNOR", "NAND and NOR", "AND and NOT"],
        correct: 2,
        topic: "Logic Gates"
    },
    {
        id: "ift_019",
        question: "Boolean algebra was introduced by",
        options: ["Isaac Newton", "Charles Babbage", "George Boole", "Alan Turing"],
        correct: 2,
        topic: "Boolean Algebra"
    },
    {
        id: "ift_020",
        question: "The complement of A in Boolean algebra is written as",
        options: ["A+", "A.", "A'", "A*"],
        correct: 2,
        topic: "Boolean Algebra"
    },
    {
        id: "ift_021",
        question: "Which law states A + A = A?",
        options: ["Distributive law", "Absorption law", "Idempotent law", "Commutative law"],
        correct: 2,
        topic: "Boolean Algebra"
    },
    {
        id: "ift_022",
        question: "A + 0 = A is known as",
        options: ["Null law", "Identity law", "Complement law", "Absorption law"],
        correct: 1,
        topic: "Boolean Algebra"
    },
    {
        id: "ift_023",
        question: "A flip-flop is a",
        options: ["Combinational circuit", "Memory device", "Power circuit", "Decoder"],
        correct: 1,
        topic: "Flip-Flops"
    },
    {
        id: "ift_024",
        question: "Flip-flops are examples of",
        options: ["Analog circuits", "Sequential circuits", "Combinational circuits", "Arithmetic circuits"],
        correct: 1,
        topic: "Flip-Flops"
    },
    {
        id: "ift_025",
        question: "Which flip-flop has a race-around condition?",
        options: ["D flip-flop", "T flip-flop", "SR flip-flop", "JK flip-flop"],
        correct: 3,
        topic: "Flip-Flops"
    },
    {
        id: "ift_026",
        question: "The characteristic equation of D flip-flop is",
        options: ["Qₙ₊₁ = T", "Qₙ₊₁ = JQ' + K'Q", "Qₙ₊₁ = D", "Qₙ₊₁ = S + R"],
        correct: 2,
        topic: "Flip-Flops"
    },
    {
        id: "ift_027",
        question: "A T flip-flop toggles when",
        options: ["T = 0", "T = 1", "Clock = 0", "Reset = 1"],
        correct: 1,
        topic: "Flip-Flops"
    },
    {
        id: "ift_028",
        question: "Flip-flops are mainly used for",
        options: ["Arithmetic operations", "Data storage", "Signal amplification", "Power regulation"],
        correct: 1,
        topic: "Flip-Flops"
    },
    {
        id: "ift_029",
        question: "A latch differs from a flip-flop because it",
        options: ["Is edge-triggered", "Is level-sensitive", "Uses clock pulse", "Stores 8 bits"],
        correct: 1,
        topic: "Latches"
    },
    {
        id: "ift_030",
        question: "Which device is used to divide frequency?",
        options: ["Logic gate", "Latch", "Flip-flop", "Decoder"],
        correct: 2,
        topic: "Flip-Flops"
    }
];

    // Additional questions based on course material (120+ questions)
    // Number Systems (30 more)
    {
        question: "Convert binary 1111 to decimal:",
        options: ["14", "15", "16", "17"],
        correct: 1,
        topic: "Number Systems"
    },
    {
        question: "The hexadecimal number system has a base of:",
        options: ["8", "10", "12", "16"],
        correct: 3,
        topic: "Number Systems"
    },
    {
        question: "Convert decimal 255 to hexadecimal:",
        options: ["EE", "FF", "FE", "DD"],
        correct: 1,
        topic: "Number Systems"
    },
    {
        question: "What is binary 1101 + 1011?",
        options: ["11000", "10100", "11100", "10000"],
        correct: 0,
        topic: "Number Systems"
    },
    {
        question: "The Most Significant Bit (MSB) in binary 10110 is:",
        options: ["0", "1 (rightmost)", "1 (leftmost)", "0 (rightmost)"],
        correct: 2,
        topic: "Number Systems"
    },
    {
        question: "Convert octal 77 to binary:",
        options: ["111111", "110111", "101111", "111011"],
        correct: 0,
        topic: "Number Systems"
    },
    {
        question: "What is the decimal value of 2^5?",
        options: ["16", "32", "64", "128"],
        correct: 1,
        topic: "Number Systems"
    },
    {
        question: "Convert binary 1001 to hexadecimal:",
        options: ["8", "9", "A", "B"],
        correct: 1,
        topic: "Number Systems"
    },
    {
        question: "In octal system, which digit is NOT valid?",
        options: ["7", "8", "6", "5"],
        correct: 1,
        topic: "Number Systems"
    },
    {
        question: "Convert decimal 100 to binary:",
        options: ["1100100", "1010100", "1110100", "1001100"],
        correct: 0,
        topic: "Number Systems"
    },
    {
        question: "Hexadecimal digit C represents decimal:",
        options: ["10", "11", "12", "13"],
        correct: 2,
        topic: "Number Systems"
    },
    {
        question: "What is the binary of hexadecimal 2F?",
        options: ["101111", "100111", "110111", "111111"],
        correct: 0,
        topic: "Number Systems"
    },
    {
        question: "In binary, what is 1 + 1?",
        options: ["2", "10", "11", "1"],
        correct: 1,
        topic: "Number Systems"
    },
    {
        question: "Convert decimal 127 to binary:",
        options: ["1111111", "1011111", "1101111", "1110111"],
        correct: 0,
        topic: "Number Systems"
    },
    {
        question: "What is the decimal value of octal 10?",
        options: ["8", "10", "16", "12"],
        correct: 0,
        topic: "Number Systems"
    },
    {
        question: "Hexadecimal 10 equals decimal:",
        options: ["10", "16", "20", "32"],
        correct: 1,
        topic: "Number Systems"
    },
    {
        question: "Convert binary 10101010 to hexadecimal:",
        options: ["AA", "AB", "BA", "BB"],
        correct: 0,
        topic: "Number Systems"
    },
    {
        question: "What is the binary equivalent of decimal 32?",
        options: ["100000", "110000", "101000", "111000"],
        correct: 0,
        topic: "Number Systems"
    },
    {
        question: "In hexadecimal, what comes after 9?",
        options: ["10", "A", "B", "F"],
        correct: 1,
        topic: "Number Systems"
    },
    {
        question: "Convert octal 100 to decimal:",
        options: ["64", "100", "80", "128"],
        correct: 0,
        topic: "Number Systems"
    },
    {
        question: "The Least Significant Bit (LSB) in 10110 is:",
        options: ["1", "0 (rightmost)", "1 (leftmost)", "0 (leftmost)"],
        correct: 1,
        topic: "Number Systems"
    },
    {
        question: "Binary subtraction: 1010 - 0101 equals:",
        options: ["0101", "0110", "0100", "0111"],
        correct: 0,
        topic: "Number Systems"
    },
    {
        question: "What is the binary equivalent of octal 7?",
        options: ["111", "110", "101", "100"],
        correct: 0,
        topic: "Number Systems"
    },
    {
        question: "Convert hexadecimal 1F to binary:",
        options: ["11111", "10111", "11011", "11110"],
        correct: 0,
        topic: "Number Systems"
    },
    {
        question: "What is the octal equivalent of binary 101?",
        options: ["5", "6", "7", "4"],
        correct: 0,
        topic: "Number Systems"
    },
    {
        question: "Convert decimal 45 to binary:",
        options: ["101101", "110101", "101011", "100101"],
        correct: 0,
        topic: "Number Systems"
    },
    {
        question: "What is hexadecimal F in decimal?",
        options: ["14", "15", "16", "17"],
        correct: 1,
        topic: "Number Systems"
    },
    {
        question: "Convert binary 11111111 to decimal:",
        options: ["255", "256", "254", "128"],
        correct: 0,
        topic: "Number Systems"
    },
    {
        question: "What is the decimal value of binary 10000?",
        options: ["8", "16", "32", "64"],
        correct: 1,
        topic: "Number Systems"
    },
    {
        question: "Convert decimal 8 to binary:",
        options: ["1000", "1100", "0100", "1010"],
        correct: 0,
        topic: "Number Systems"
    },

    // Logic Gates (30 more)
    {
        question: "The output of OR gate is 1 when:",
        options: ["All inputs are 0", "Any input is 1", "All inputs are 1", "No input"],
        correct: 1,
        topic: "Logic Gates"
    },
    {
        question: "NAND gate output is 0 when:",
        options: ["Any input is 0", "All inputs are 0", "Any input is 1", "All inputs are 1"],
        correct: 3,
        topic: "Logic Gates"
    },
    {
        question: "NOR gate output is 1 when:",
        options: ["Any input is 1", "All inputs are 1", "Any input is 0", "All inputs are 0"],
        correct: 3,
        topic: "Logic Gates"
    },
    {
        question: "XNOR gate gives 1 when inputs are:",
        options: ["Same", "Different", "Both 1 only", "Both 0 only"],
        correct: 0,
        topic: "Logic Gates"
    },
    {
        question: "How many inputs does a NOT gate have?",
        options: ["0", "1", "2", "3"],
        correct: 1,
        topic: "Logic Gates"
    },
    {
        question: "The Boolean expression for AND gate is:",
        options: ["A+B", "A.B", "A⊕B", "A'"],
        correct: 1,
        topic: "Logic Gates"
    },
    {
        question: "XOR is also called:",
        options: ["Exclusive OR", "Extended OR", "Extra OR", "External OR"],
        correct: 0,
        topic: "Logic Gates"
    },
    {
        question: "A Buffer gate outputs:",
        options: ["Inverted input", "Same as input", "Always 1", "Always 0"],
        correct: 1,
        topic: "Logic Gates"
    },
    {
        question: "For inputs A=1, B=1, AND gate output is:",
        options: ["0", "1", "Undefined", "Variable"],
        correct: 1,
        topic: "Logic Gates"
    },
    {
        question: "For inputs A=0, B=1, OR gate output is:",
        options: ["0", "1", "Undefined", "Variable"],
        correct: 1,
        topic: "Logic Gates"
    },
    {
        question: "For input A=1, NOT gate output is:",
        options: ["0", "1", "Undefined", "Variable"],
        correct: 0,
        topic: "Logic Gates"
    },
    {
        question: "For inputs A=1, B=0, XOR gate output is:",
        options: ["0", "1", "Undefined", "Variable"],
        correct: 1,
        topic: "Logic Gates"
    },
    {
        question: "For inputs A=1, B=1, NAND gate output is:",
        options: ["0", "1", "Undefined", "Variable"],
        correct: 0,
        topic: "Logic Gates"
    },
    {
        question: "For inputs A=0, B=0, NOR gate output is:",
        options: ["0", "1", "Undefined", "Variable"],
        correct: 1,
        topic: "Logic Gates"
    },
    {
        question: "For inputs A=1, B=1, XNOR gate output is:",
        options: ["0", "1", "Undefined", "Variable"],
        correct: 1,
        topic: "Logic Gates"
    },
    {
        question: "Which gate can be used to implement any Boolean function?",
        options: ["AND", "OR", "NAND", "XOR"],
        correct: 2,
        topic: "Logic Gates"
    },
    {
        question: "The symbol ⊕ represents:",
        options: ["AND", "OR", "XOR", "NOT"],
        correct: 2,
        topic: "Logic Gates"
    },
    {
        question: "The symbol ⊙ represents:",
        options: ["NAND", "NOR", "XNOR", "NOT"],
        correct: 2,
        topic: "Logic Gates"
    },
    {
        question: "An AND gate with inputs A=0, B=0 gives:",
        options: ["0", "1", "A", "B"],
        correct: 0,
        topic: "Logic Gates"
    },
    {
        question: "An OR gate with inputs A=1, B=0 gives:",
        options: ["0", "1", "A", "B"],
        correct: 1,
        topic: "Logic Gates"
    },
    {
        question: "A NAND gate with inputs A=0, B=1 gives:",
        options: ["0", "1", "A", "B"],
        correct: 1,
        topic: "Logic Gates"
    },
    {
        question: "A NOR gate with inputs A=1, B=1 gives:",
        options: ["0", "1", "A", "B"],
        correct: 0,
        topic: "Logic Gates"
    },
    {
        question: "XOR gate is used in:",
        options: ["Adders", "Multiplexers", "Decoders", "Encoders"],
        correct: 0,
        topic: "Logic Gates"
    },
    {
        question: "How many NAND gates are needed to implement NOT?",
        options: ["1", "2", "3", "4"],
        correct: 0,
        topic: "Logic Gates"
    },
    {
        question: "How many NAND gates are needed to implement AND?",
        options: ["1", "2", "3", "4"],
        correct: 1,
        topic: "Logic Gates"
    },
    {
        question: "How many NAND gates are needed to implement OR?",
        options: ["1", "2", "3", "4"],
        correct: 2,
        topic: "Logic Gates"
    },
    {
        question: "The output of XOR with inputs A=0, B=0 is:",
        options: ["0", "1", "A", "B"],
        correct: 0,
        topic: "Logic Gates"
    },
    {
        question: "The output of XNOR with inputs A=0, B=1 is:",
        options: ["0", "1", "A", "B"],
        correct: 0,
        topic: "Logic Gates"
    },
    {
        question: "Which gate performs addition without carry?",
        options: ["AND", "OR", "XOR", "NAND"],
        correct: 2,
        topic: "Logic Gates"
    },
    {
        question: "Which gate generates carry in addition?",
        options: ["AND", "OR", "XOR", "NAND"],
        correct: 0,
        topic: "Logic Gates"
    },

    // Boolean Algebra (30 more)
    {
        question: "In Boolean algebra, A + 0 equals:",
        options: ["0", "1", "A", "A'"],
        correct: 2,
        topic: "Boolean Algebra"
    },
    {
        question: "In Boolean algebra, A . 1 equals:",
        options: ["0", "1", "A", "A'"],
        correct: 2,
        topic: "Boolean Algebra"
    },
    {
        question: "In Boolean algebra, A + 1 equals:",
        options: ["0", "1", "A", "A'"],
        correct: 1,
        topic: "Boolean Algebra"
    },
    {
        question: "In Boolean algebra, A . 0 equals:",
        options: ["0", "1", "A", "A'"],
        correct: 0,
        topic: "Boolean Algebra"
    },
    {
        question: "In Boolean algebra, A . A equals:",
        options: ["0", "1", "A", "A²"],
        correct: 2,
        topic: "Boolean Algebra"
    },
    {
        question: "In Boolean algebra, A + A' equals:",
        options: ["0", "1", "A", "A'"],
        correct: 1,
        topic: "Boolean Algebra"
    },
    {
        question: "In Boolean algebra, A . A' equals:",
        options: ["0", "1", "A", "A'"],
        correct: 0,
        topic: "Boolean Algebra"
    },
    {
        question: "The complement of A' is:",
        options: ["A", "A'", "0", "1"],
        correct: 0,
        topic: "Boolean Algebra"
    },
    {
        question: "Commutative law states A + B equals:",
        options: ["A.B", "B+A", "A+A", "B.A"],
        correct: 1,
        topic: "Boolean Algebra"
    },
    {
        question: "Associative law for OR: (A+B)+C equals:",
        options: ["A+(B+C)", "A.(B.C)", "(A.B)+C", "A+B+C only"],
        correct: 0,
        topic: "Boolean Algebra"
    },
    {
        question: "Distributive law: A(B+C) equals:",
        options: ["AB+C", "A+BC", "AB+AC", "A+B+C"],
        correct: 2,
        topic: "Boolean Algebra"
    },
    {
        question: "Absorption law: A + AB equals:",
        options: ["A", "B", "AB", "A+B"],
        correct: 0,
        topic: "Boolean Algebra"
    },
    {
        question: "De Morgan's law: (A+B)' equals:",
        options: ["A'+B'", "A'.B'", "A+B", "A.B"],
        correct: 1,
        topic: "Boolean Algebra"
    },
    {
        question: "De Morgan's law: (A.B)' equals:",
        options: ["A'+B'", "A'.B'", "A+B", "A.B"],
        correct: 0,
        topic: "Boolean Algebra"
    },
    {
        question: "Simplify: A + A'B",
        options: ["A", "B", "A+B", "AB"],
        correct: 2,
        topic: "Boolean Algebra"
    },
    {
        question: "Simplify: A(A+B)",
        options: ["A", "B", "A+B", "AB"],
        correct: 0,
        topic: "Boolean Algebra"
    },
    {
        question: "Simplify: A + AB",
        options: ["A", "B", "A+B", "AB"],
        correct: 0,
        topic: "Boolean Algebra"
    },
    {
        question: "Simplify: A(A'+B)",
        options: ["A", "B", "AB", "A+B"],
        correct: 2,
        topic: "Boolean Algebra"
    },
    {
        question: "The dual of A+B is:",
        options: ["A.B", "A'+B'", "A+B", "A.B'"],
        correct: 0,
        topic: "Boolean Algebra"
    },
    {
        question: "The dual of A.B is:",
        options: ["A+B", "A'.B'", "A.B", "A'+B"],
        correct: 0,
        topic: "Boolean Algebra"
    },
    {
        question: "Simplify: AB + AB'",
        options: ["A", "B", "AB", "A+B"],
        correct: 0,
        topic: "Boolean Algebra"
    },
    {
        question: "Simplify: (A+B)(A+B')",
        options: ["A", "B", "AB", "A+B"],
        correct: 0,
        topic: "Boolean Algebra"
    },
    {
        question: "Simplify: A'B + AB",
        options: ["A", "B", "A+B", "AB"],
        correct: 1,
        topic: "Boolean Algebra"
    },
    {
        question: "Simplify: (A+B)(A'+B)",
        options: ["A", "B", "AB", "A+B"],
        correct: 1,
        topic: "Boolean Algebra"
    },
    {
        question: "The complement of 0 is:",
        options: ["0", "1", "Undefined", "Variable"],
        correct: 1,
        topic: "Boolean Algebra"
    },
    {
        question: "The complement of 1 is:",
        options: ["0", "1", "Undefined", "Variable"],
        correct: 0,
        topic: "Boolean Algebra"
    },
    {
        question: "Involution law states (A')' equals:",
        options: ["A", "A'", "0", "1"],
        correct: 0,
        topic: "Boolean Algebra"
    },
    {
        question: "The SOP form stands for:",
        options: ["Sum of Products", "Sum of Powers", "Set of Products", "Standard of Products"],
        correct: 0,
        topic: "Boolean Algebra"
    },
    {
        question: "The POS form stands for:",
        options: ["Product of Sums", "Power of Sums", "Product of Sets", "Positive of Sums"],
        correct: 0,
        topic: "Boolean Algebra"
    },
    {
        question: "A minterm is a product term with:",
        options: ["All variables", "Some variables", "No variables", "Complemented variables"],
        correct: 0,
        topic: "Boolean Algebra"
    },

    // Flip-Flops and Sequential Circuits (30 more)
    {
        question: "How many stable states does a flip-flop have?",
        options: ["1", "2", "3", "4"],
        correct: 1,
        topic: "Flip-Flops"
    },
    {
        question: "SR flip-flop stands for:",
        options: ["Set-Reset", "Shift-Register", "Serial-Random", "Store-Retrieve"],
        correct: 0,
        topic: "Flip-Flops"
    },
    {
        question: "In SR flip-flop, S=1 and R=1 is:",
        options: ["Set state", "Reset state", "Invalid state", "Toggle state"],
        correct: 2,
        topic: "Flip-Flops"
    },
    {
        question: "D flip-flop stands for:",
        options: ["Data", "Delay", "Digital", "Dual"],
        correct: 0,
        topic: "Flip-Flops"
    },
    {
        question: "JK flip-flop eliminates the problem of:",
        options: ["Invalid state", "Clock skew", "Propagation delay", "Power consumption"],
        correct: 0,
        topic: "Flip-Flops"
    },
    {
        question: "T flip-flop stands for:",
        options: ["Time", "Toggle", "Transfer", "Trigger"],
        correct: 1,
        topic: "Flip-Flops"
    },
    {
        question: "In D flip-flop, output Q follows:",
        options: ["D input", "Clock", "Previous state", "Complement of D"],
        correct: 0,
        topic: "Flip-Flops"
    },
    {
        question: "In T flip-flop, when T=1, output:",
        options: ["Sets", "Resets", "Toggles", "Holds"],
        correct: 2,
        topic: "Flip-Flops"
    },
    {
        question: "In JK flip-flop, when J=1 and K=1, output:",
        options: ["Sets", "Resets", "Toggles", "Invalid"],
        correct: 2,
        topic: "Flip-Flops"
    },
    {
        question: "Flip-flops are also called:",
        options: ["Latches", "Bistable multivibrators", "Gates", "Registers"],
        correct: 1,
        topic: "Flip-Flops"
    },
    {
        question: "A latch is:",
        options: ["Level-triggered", "Edge-triggered", "Pulse-triggered", "Clock-independent"],
        correct: 0,
        topic: "Latches"
    },
    {
        question: "A flip-flop is:",
        options: ["Level-triggered", "Edge-triggered", "Always on", "Never triggered"],
        correct: 1,
        topic: "Flip-Flops"
    },
    {
        question: "Preset and Clear inputs are:",
        options: ["Synchronous", "Asynchronous", "Clock-dependent", "Data-dependent"],
        correct: 1,
        topic: "Flip-Flops"
    },
    {
        question: "When Preset=0, output Q becomes:",
        options: ["0", "1", "Previous state", "Undefined"],
        correct: 1,
        topic: "Flip-Flops"
    },
    {
        question: "When Clear=0, output Q becomes:",
        options: ["0", "1", "Previous state", "Undefined"],
        correct: 0,
        topic: "Flip-Flops"
    },
    {
        question: "Master-Slave flip-flop eliminates:",
        options: ["Invalid state", "Race condition", "Clock skew", "Power loss"],
        correct: 1,
        topic: "Flip-Flops"
    },
    {
        question: "In SR flip-flop, S=0 and R=0 means:",
        options: ["Set", "Reset", "No change", "Invalid"],
        correct: 2,
        topic: "Flip-Flops"
    },
    {
        question: "In SR flip-flop, S=1 and R=0 means:",
        options: ["Set", "Reset", "No change", "Toggle"],
        correct: 0,
        topic: "Flip-Flops"
    },
    {
        question: "In SR flip-flop, S=0 and R=1 means:",
        options: ["Set", "Reset", "No change", "Toggle"],
        correct: 1,
        topic: "Flip-Flops"
    },
    {
        question: "In JK flip-flop, J=0 and K=0 means:",
        options: ["Set", "Reset", "No change", "Toggle"],
        correct: 2,
        topic: "Flip-Flops"
    },
    {
        question: "In JK flip-flop, J=1 and K=0 means:",
        options: ["Set", "Reset", "No change", "Toggle"],
        correct: 0,
        topic: "Flip-Flops"
    },
    {
        question: "In JK flip-flop, J=0 and K=1 means:",
        options: ["Set", "Reset", "No change", "Toggle"],
        correct: 1,
        topic: "Flip-Flops"
    },
    {
        question: "In T flip-flop, when T=0, output:",
        options: ["Sets", "Resets", "Toggles", "Holds"],
        correct: 3,
        topic: "Flip-Flops"
    },
    {
        question: "Edge-triggered flip-flop changes state at:",
        options: ["High level", "Low level", "Clock edge", "Any time"],
        correct: 2,
        topic: "Flip-Flops"
    },
    {
        question: "Positive edge triggering occurs at:",
        options: ["0 to 1 transition", "1 to 0 transition", "High level", "Low level"],
        correct: 0,
        topic: "Flip-Flops"
    },
    {
        question: "Negative edge triggering occurs at:",
        options: ["0 to 1 transition", "1 to 0 transition", "High level", "Low level"],
        correct: 1,
        topic: "Flip-Flops"
    },
    {
        question: "The most versatile flip-flop is:",
        options: ["SR", "D", "JK", "T"],
        correct: 2,
        topic: "Flip-Flops"
    },
    {
        question: "A counter is a:",
        options: ["Combinational circuit", "Sequential circuit", "Logic gate", "Memory device"],
        correct: 1,
        topic: "Sequential Circuits"
    },
    {
        question: "A register is a:",
        options: ["Combinational circuit", "Sequential circuit", "Single flip-flop", "Logic gate"],
        correct: 1,
        topic: "Sequential Circuits"
    },
    {
        question: "Sequential circuits have:",
        options: ["No memory", "Memory", "Only gates", "Only wires"],
        correct: 1,
        topic: "Sequential Circuits"
    }
];
