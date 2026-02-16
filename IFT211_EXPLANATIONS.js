// IFT211 - Digital Logic and Design Explanations Database
const IFT211_EXPLANATIONS = {
    "ift_001": "Digital electronics deals with discrete signals that have distinct voltage levels representing binary states (0 and 1). Unlike analog signals which are continuous, digital signals use specific voltage thresholds to represent information, making them more reliable and less susceptible to noise.",
    
    "ift_002": "Digital computers use the binary number system (base-2) because electronic circuits can easily represent two states: ON (1) and OFF (0). This corresponds to high and low voltage levels in transistors, making binary the natural choice for digital systems.",
    
    "ift_003": "The binary number system has a base of 2, meaning it uses only two digits: 0 and 1. Each position represents a power of 2 (2^0, 2^1, 2^2, etc.). This is fundamental to all digital computing and logic design.",
    
    "ift_004": "The binary system only uses two digits: 0 and 1. The digit 2 is not valid in binary. To represent 2 in binary, we use '10' (which is 1×2^1 + 0×2^0 = 2 in decimal).",
    
    "ift_005": "Hexadecimal is base-16, using digits 0-9 and letters A-F to represent values 0-15. It's commonly used in computing because one hex digit represents exactly 4 binary bits, making it a convenient shorthand for binary numbers.",
    
    "ift_006": "Decimal 10 in binary is 1010. This is calculated as: 10 = 1×2^3 + 0×2^2 + 1×2^1 + 0×2^0 = 8 + 0 + 2 + 0 = 10. Binary conversion involves repeatedly dividing by 2 and recording remainders.",
    
    "ift_007": "One's complement has the problem of double zero: both 00000000 and 11111111 represent zero (positive zero and negative zero). This creates ambiguity and complicates arithmetic operations, which is why two's complement is preferred.",
    
    "ift_008": "Two's complement is the most widely used signed number representation because it eliminates the double-zero problem, simplifies arithmetic operations (addition and subtraction use the same circuitry), and has only one representation for zero.",
    
    "ift_009": "One's complement of a binary number is obtained by inverting all bits (changing 0s to 1s and 1s to 0s). For 101010, flipping each bit gives 010101. This is used in some arithmetic operations and network protocols.",
    
    "ift_010": "Two's complement is obtained by adding 1 to the one's complement of a number. This method is used to represent negative numbers in computers. For example, to get -5: find one's complement of 5, then add 1.",
    
    "ift_011": "Analog signals are continuous, varying smoothly over time with infinite possible values. They represent physical quantities like sound waves, temperature, or voltage that change continuously rather than in discrete steps.",
    
    "ift_012": "Digital signals are represented using discrete values, typically 0 and 1 (binary). These correspond to specific voltage levels (e.g., 0V for 0, 5V for 1) and are used in all digital electronics and computing systems.",
    
    "ift_013": "A logic gate is a digital circuit that performs a logical operation on one or more binary inputs to produce a single binary output. Logic gates are the building blocks of all digital circuits, implementing Boolean algebra operations.",
    
    "ift_014": "The AND gate outputs 1 only when ALL inputs are 1. If any input is 0, the output is 0. This implements the Boolean AND operation (multiplication). For two inputs A and B: Output = A · B.",
    
    "ift_015": "The Boolean operator for OR is the plus sign (+). The OR operation gives 1 if ANY input is 1. For inputs A and B: A + B = 1 if A=1 OR B=1 OR both=1.",
    
    "ift_016": "The NOT gate is also called an inverter because it inverts the input signal. If input is 0, output is 1, and vice versa. It's the simplest logic gate with only one input and one output.",
    
    "ift_017": "The XOR (Exclusive OR) gate produces output 1 when inputs are different (one is 0 and the other is 1). If both inputs are the same (both 0 or both 1), output is 0. It's used in adders and error detection.",
    
    "ift_018": "NAND and NOR gates are universal gates because any Boolean function can be implemented using only NAND gates or only NOR gates. They can create AND, OR, and NOT operations, making them sufficient to build any digital circuit.",
    
    "ift_019": "Boolean algebra was introduced by George Boole, an English mathematician, in 1854. He developed this mathematical system for logical operations, which later became fundamental to digital circuit design and computer science.",
    
    "ift_020": "The complement (NOT operation) of A in Boolean algebra is written as A' (A prime) or Ā (A bar) or ~A. It represents the logical negation, inverting the value: if A=1, then A'=0.",
    
    "ift_021": "The Idempotent law states that A + A = A and A · A = A. This means that ORing or ANDing a variable with itself gives the same variable. It's used to simplify Boolean expressions.",
    
    "ift_022": "The Identity law states that A + 0 = A and A · 1 = A. Adding 0 or multiplying by 1 doesn't change the value. These are fundamental properties used in Boolean simplification.",
    
    "ift_023": "A flip-flop is a bistable memory device that can store one bit of information. It has two stable states (0 and 1) and maintains its state until triggered to change. Flip-flops are fundamental building blocks of sequential circuits.",
    
    "ift_024": "Flip-flops are examples of sequential circuits because their output depends not only on current inputs but also on previous states (history). They have memory, unlike combinational circuits whose output depends only on current inputs.",
    
    "ift_025": "The JK flip-flop has a race-around condition when both J and K inputs are 1 and the clock pulse is high for too long. The output toggles multiple times unpredictably. Master-slave configuration solves this problem.",
    
    "ift_026": "The D flip-flop characteristic equation is Q(n+1) = D, meaning the next state equals the D input. The output simply follows the D input when clocked, making it useful for data storage and shift registers.",
    
    "ift_027": "A T flip-flop toggles (changes state) when T = 1. If T=1 and Q=0, next state Q=1. If T=1 and Q=1, next state Q=0. When T=0, the state remains unchanged. It's used in counters and frequency dividers.",
    
    "ift_028": "Flip-flops are mainly used for data storage in registers, counters, and memory elements. They can hold a bit value indefinitely until changed by a clock signal, making them essential for sequential logic and computer memory.",
    
    "ift_029": "A latch is level-sensitive, meaning it responds to the level (high or low) of the enable signal. A flip-flop is edge-triggered, responding only to transitions (rising or falling edge) of the clock signal. This makes flip-flops more predictable.",
    
    "ift_030": "Flip-flops are used to divide frequency because they toggle at half the rate of the input clock. A T flip-flop with T=1 produces an output frequency that is half the input frequency, useful in clock dividers and counters."
};

// Export for use in exam system
if (typeof module !== 'undefined' && module.exports) {
    module.exports = IFT211_EXPLANATIONS;
}
