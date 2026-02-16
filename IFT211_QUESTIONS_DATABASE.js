// IFT211 - Digital Logic and Design Questions Database

const IFT211_QUESTIONS = [
    {
        question: "Digital electronics deals mainly with",
        options: ["Continuous signals", "Discrete signals", "Mechanical signals", "Acoustic signals"],
        correct: 1,
        topic: "Digital Logic"
    },
    {
        question: "The number system used by digital computers is",
        options: ["Decimal", "Octal", "Binary", "Hexadecimal"],
        correct: 2,
        topic: "Number Systems"
    },
    {
        question: "The base of the binary number system is",
        options: ["10", "8", "16", "2"],
        correct: 3,
        topic: "Number Systems"
    },
    {
        question: "Which of the following is NOT a binary digit?",
        options: ["0", "1", "2", "None"],
        correct: 2,
        topic: "Number Systems"
    },
    {
        question: "Which number system is also known as base-16?",
        options: ["Binary", "Octal", "Decimal", "Hexadecimal"],
        correct: 3,
        topic: "Number Systems"
    },
    {
        question: "The binary equivalent of decimal 10 is",
        options: ["1010", "1001", "1110", "1100"],
        correct: 0,
        topic: "Number Systems"
    },
    {
        question: "Which representation has the problem of double zero?",
        options: ["Two's complement", "One's complement", "Binary", "BCD"],
        correct: 1,
        topic: "Number Systems"
    },
    {
        question: "The most widely used signed number representation in computers is",
        options: ["Sign-magnitude", "One's complement", "Two's complement", "Excess-3"],
        correct: 2,
        topic: "Number Systems"
    },
    {
        question: "The one's complement of 101010 is",
        options: ["101010", "010101", "110101", "111111"],
        correct: 1,
        topic: "Number Systems"
    },
    {
        question: "Two's complement of a binary number is obtained by",
        options: ["Adding 2", "Adding 1 to one's complement", "Subtracting 1", "Reversing bits only"],
        correct: 1,
        topic: "Number Systems"
    },
    {
        question: "An analog signal is",
        options: ["Discrete", "Continuous", "Binary", "Digital"],
        correct: 1,
        topic: "Digital Logic"
    },
    {
        question: "Digital signals are represented using",
        options: ["Letters", "Waves", "0 and 1", "Frequencies"],
        correct: 2,
        topic: "Digital Logic"
    },
    {
        question: "A logic gate is",
        options: ["A memory device", "An arithmetic unit", "A digital circuit", "A power supply"],
        correct: 2,
        topic: "Logic Gates"
    },
    {
        question: "Which gate gives output 1 only when all inputs are 1?",
        options: ["OR", "AND", "XOR", "NOR"],
        correct: 1,
        topic: "Logic Gates"
    },
    {
        question: "The Boolean operator for OR is",
        options: [".", "+", "'", "⊕"],
        correct: 1,
        topic: "Boolean Algebra"
    },
    {
        question: "The NOT gate is also called",
        options: ["Buffer", "Inverter", "Decoder", "Encoder"],
        correct: 1,
        topic: "Logic Gates"
    },
    {
        question: "Which gate produces output 1 when inputs are different?",
        options: ["AND", "OR", "XOR", "XNOR"],
        correct: 2,
        topic: "Logic Gates"
    },
    {
        question: "Which of the following are universal gates?",
        options: ["AND and OR", "XOR and XNOR", "NAND and NOR", "AND and NOT"],
        correct: 2,
        topic: "Logic Gates"
    },
    {
        question: "Boolean algebra was introduced by",
        options: ["Isaac Newton", "Charles Babbage", "George Boole", "Alan Turing"],
        correct: 2,
        topic: "Boolean Algebra"
    },
    {
        question: "The complement of A in Boolean algebra is written as",
        options: ["A+", "A.", "A'", "A*"],
        correct: 2,
        topic: "Boolean Algebra"
    },
    {
        question: "Which law states A + A = A?",
        options: ["Distributive law", "Absorption law", "Idempotent law", "Commutative law"],
        correct: 2,
        topic: "Boolean Algebra"
    },
    {
        question: "A + 0 = A is known as",
        options: ["Null law", "Identity law", "Complement law", "Absorption law"],
        correct: 1,
        topic: "Boolean Algebra"
    },
    {
        question: "A flip-flop is a",
        options: ["Combinational circuit", "Memory device", "Power circuit", "Decoder"],
        correct: 1,
        topic: "Sequential Circuits"
    },
    {
        question: "Flip-flops are examples of",
        options: ["Analog circuits", "Sequential circuits", "Combinational circuits", "Arithmetic circuits"],
        correct: 1,
        topic: "Sequential Circuits"
    },
    {
        question: "Which flip-flop has a race-around condition?",
        options: ["D flip-flop", "T flip-flop", "SR flip-flop", "JK flip-flop"],
        correct: 3,
        topic: "Sequential Circuits"
    },
    {
        question: "The characteristic equation of D flip-flop is",
        options: ["Qₙ₊₁ = T", "Qₙ₊₁ = JQ' + K'Q", "Qₙ₊₁ = D", "Qₙ₊₁ = S + R"],
        correct: 2,
        topic: "Sequential Circuits"
    },
    {
        question: "A T flip-flop toggles when",
        options: ["T = 0", "T = 1", "Clock = 0", "Reset = 1"],
        correct: 1,
        topic: "Sequential Circuits"
    },
    {
        question: "Flip-flops are mainly used for",
        options: ["Arithmetic operations", "Data storage", "Signal amplification", "Power regulation"],
        correct: 1,
        topic: "Sequential Circuits"
    },
    {
        question: "A latch differs from a flip-flop because it",
        options: ["Is edge-triggered", "Is level-sensitive", "Uses clock pulse", "Stores 8 bits"],
        correct: 1,
        topic: "Sequential Circuits"
    },
    {
        question: "Which device is used to divide frequency?",
        options: ["Logic gate", "Latch", "Flip-flop", "Decoder"],
        correct: 2,
        topic: "Sequential Circuits"
    },
    {
        question: "What is the decimal equivalent of binary 1101?",
        options: ["11", "12", "13", "14"],
        correct: 2,
        topic: "Number Systems"
    },
    {
        question: "What is the hexadecimal equivalent of decimal 15?",
        options: ["E", "F", "10", "A"],
        correct: 1,
        topic: "Number Systems"
    },
    {
        question: "What is the octal equivalent of decimal 8?",
        options: ["8", "10", "11", "12"],
        correct: 1,
        topic: "Number Systems"
    },
    {
        question: "What is the output of an AND gate when both inputs are 1?",
        options: ["0", "1", "X", "Z"],
        correct: 1,
        topic: "Logic Gates"
    },
    {
        question: "What is the output of an OR gate when both inputs are 0?",
        options: ["0", "1", "X", "Z"],
        correct: 0,
        topic: "Logic Gates"
    },
    {
        question: "What is the output of a NOT gate when input is 1?",
        options: ["0", "1", "X", "Z"],
        correct: 0,
        topic: "Logic Gates"
    },
    {
        question: "What is De Morgan's first theorem in Boolean algebra?",
        options: ["(A+B)' = A'.B'", "(A.B)' = A'+B'", "A+A' = 1", "A.A' = 0"],
        correct: 0,
        topic: "Boolean Algebra"
    },
    {
        question: "What is the complement of A+B in Boolean algebra?",
        options: ["A'.B'", "A'+B'", "A.B", "A'+B"],
        correct: 0,
        topic: "Boolean Algebra"
    },
    {
        question: "What is the identity law in Boolean algebra?",
        options: ["A+0 = A", "A+1 = 1", "A.0 = 0", "All of the above"],
        correct: 3,
        topic: "Boolean Algebra"
    },
    {
        question: "What is the complement law in Boolean algebra?",
        options: ["A+A' = 1", "A.A' = 0", "Both A and B", "Neither A nor B"],
        correct: 2,
        topic: "Boolean Algebra"
    },
    {
        question: "What is a Karnaugh map in digital logic?",
        options: ["Geographic map", "Tool for simplifying Boolean expressions", "Circuit diagram", "Truth table"],
        correct: 1,
        topic: "K-Maps"
    },
    {
        question: "How many cells are in a 3-variable K-map?",
        options: ["6", "8", "9", "12"],
        correct: 1,
        topic: "K-Maps"
    },
    {
        question: "What is the purpose of K-map?",
        options: ["Circuit design", "Boolean simplification", "Truth table creation", "Logic gate testing"],
        correct: 1,
        topic: "K-Maps"
    },
    {
        question: "What is a combinational circuit in digital logic?",
        options: ["Circuit with memory", "Circuit without memory", "Sequential circuit", "Storage circuit"],
        correct: 1,
        topic: "Combinational Circuits"
    },
    {
        question: "What is a counter in digital logic?",
        options: ["Sequential circuit that counts", "Combinational circuit", "Logic gate", "Memory unit"],
        correct: 0,
        topic: "Sequential Circuits"
    },
    {
        question: "What is a JK flip-flop?",
        options: ["Type of latch", "Universal flip-flop", "Clock generator", "Logic gate"],
        correct: 1,
        topic: "Sequential Circuits"
    },
    {
        question: "What is the difference between latch and flip-flop?",
        options: ["No difference", "Latch is level-triggered, flip-flop is edge-triggered", "Flip-flop is faster", "Latch is digital"],
        correct: 1,
        topic: "Sequential Circuits"
    },
    {
        question: "Which gate is called a universal gate in digital logic?",
        options: ["AND", "OR", "NAND", "XOR"],
        correct: 2,
        topic: "Logic Gates"
    },
    {
        question: "What is the binary equivalent of hexadecimal A?",
        options: ["1010", "1011", "1100", "1101"],
        correct: 0,
        topic: "Number Systems"
    },
    {
        question: "BCD stands for",
        options: ["Binary Coded Decimal", "Binary Computer Data", "Basic Computer Design", "Binary Code Development"],
        correct: 0,
        topic: "Number Systems"
    }
];

// Export for use in exam system
if (typeof module !== 'undefined' && module.exports) {
    module.exports = IFT211_QUESTIONS;
}
