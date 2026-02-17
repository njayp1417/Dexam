// CSC203 - Discrete Structures Questions Database

const CSC203_QUESTIONS = [
    {
        question: "Which of the following is a proposition?",
        options: ["Close the door", "x + 2 = 5", "Abuja is the capital of Nigeria", "What is your name?"],
        correct: 2,
        topic: "Propositional Logic"
    },
    {
        question: "The negation of \"p ∧ q\" is:",
        options: ["¬p ∧ ¬q", "¬p ∨ ¬q", "p ∨ q", "¬(p ∨ q)"],
        correct: 1,
        topic: "Propositional Logic"
    },
    {
        question: "If p is true and q is false, what is the truth value of p → q?",
        options: ["True", "False", "Undetermined", "Both true and false"],
        correct: 1,
        topic: "Propositional Logic"
    },
    {
        question: "The contrapositive of p → q is:",
        options: ["q → p", "¬p → ¬q", "¬q → ¬p", "p ∧ q"],
        correct: 2,
        topic: "Propositional Logic"
    },
    {
        question: "How many subsets does a set with 4 elements have?",
        options: ["8", "12", "16", "32"],
        correct: 2,
        topic: "Set Theory"
    },
    {
        question: "If A = {1,2,3} and B = {3,4,5}, then A ∩ B is:",
        options: ["{1,2}", "{3}", "{4,5}", "{1,2,3,4,5}"],
        correct: 1,
        topic: "Set Theory"
    },
    {
        question: "A relation R on set A is reflexive if:",
        options: ["(a,b) ∈ R implies (b,a) ∈ R", "(a,a) ∈ R for all a ∈ A", "(a,b) and (b,c) implies (a,c)", "None of the above"],
        correct: 1,
        topic: "Relations"
    },
    {
        question: "A function is one-to-one if:",
        options: ["Every element has an image", "Different inputs give different outputs", "It is onto", "It is constant"],
        correct: 1,
        topic: "Functions"
    },
    {
        question: "5! equals:",
        options: ["20", "60", "100", "120"],
        correct: 3,
        topic: "Combinatorics"
    },
    {
        question: "The number of ways to choose 2 objects from 5 is:",
        options: ["5", "10", "20", "25"],
        correct: 1,
        topic: "Combinatorics"
    },
    {
        question: "In a simple graph, the maximum number of edges in a graph with 4 vertices is:",
        options: ["4", "5", "6", "8"],
        correct: 2,
        topic: "Graph Theory"
    },
    {
        question: "A graph is called complete if:",
        options: ["It has no edges", "Every pair of vertices is connected", "It has a loop", "It has equal vertices"],
        correct: 1,
        topic: "Graph Theory"
    },
    {
        question: "Principle of Mathematical Induction is used to prove statements for:",
        options: ["Real numbers", "Integers", "Matrices", "Sets"],
        correct: 1,
        topic: "Mathematical Induction"
    },
    {
        question: "The base case in induction is important because:",
        options: ["It proves the formula", "It starts the chain of truth", "It proves the inductive step", "It removes assumptions"],
        correct: 1,
        topic: "Mathematical Induction"
    },
    {
        question: "The number of permutations of 3 letters from 5 letters is:",
        options: ["10", "20", "60", "125"],
        correct: 2,
        topic: "Combinatorics"
    },
    {
        question: "A relation that is reflexive, symmetric and transitive is called:",
        options: ["Partial order", "Function", "Equivalence relation", "Injective relation"],
        correct: 2,
        topic: "Relations"
    },
    {
        question: "If a graph has all vertices of even degree, it contains:",
        options: ["Hamiltonian path", "Euler circuit", "Tree", "Cycle only"],
        correct: 1,
        topic: "Graph Theory"
    },
    {
        question: "The recurrence relation aₙ = aₙ₋₁ + 3 is:",
        options: ["Non-linear", "Second order", "First order linear", "Quadratic"],
        correct: 2,
        topic: "Recurrence Relations"
    },
    {
        question: "The complement of universal set U is:",
        options: ["U", "∅", "{0}", "{1}"],
        correct: 1,
        topic: "Set Theory"
    },
    {
        question: "If |A| = 3 and |B| = 4, then |A × B| =",
        options: ["7", "12", "24", "1"],
        correct: 1,
        topic: "Set Theory"
    },
    {
        question: "The statement (p ∨ q) ∧ ¬p simplifies to:",
        options: ["p", "q", "q ∧ ¬p", "p ∧ q"],
        correct: 2,
        topic: "Propositional Logic"
    },
    {
        question: "The number of proper subsets of a set with 3 elements is:",
        options: ["6", "7", "8", "9"],
        correct: 1,
        topic: "Set Theory"
    },
    {
        question: "If A ⊆ B and B ⊆ A, then:",
        options: ["A ∩ B = ∅", "A = B", "A ⊂ B", "A ≠ B"],
        correct: 1,
        topic: "Set Theory"
    },
    {
        question: "The relation \"≤\" on integers is:",
        options: ["Equivalence relation", "Not reflexive", "Partial order", "Not transitive"],
        correct: 2,
        topic: "Relations"
    },
    {
        question: "A function is onto if:",
        options: ["Every element in codomain has a pre-image", "Every input has two outputs", "It is one-to-one", "It is constant"],
        correct: 0,
        topic: "Functions"
    },
    {
        question: "The truth table of p ↔ q is true when:",
        options: ["p and q are different", "p is true", "p and q have same truth value", "q is false"],
        correct: 2,
        topic: "Propositional Logic"
    },
    {
        question: "How many ways can 4 people sit in a row?",
        options: ["12", "16", "24", "48"],
        correct: 2,
        topic: "Combinatorics"
    },
    {
        question: "The number of edges in a tree with 7 vertices is:",
        options: ["7", "6", "8", "14"],
        correct: 1,
        topic: "Graph Theory"
    },
    {
        question: "If R is symmetric, then whenever (a,b) ∈ R, we must have:",
        options: ["(a,a) ∈ R", "(b,a) ∈ R", "(b,b) ∈ R", "(a,c) ∈ R"],
        correct: 1,
        topic: "Relations"
    },
    {
        question: "The binomial coefficient ⁶C₀ equals:",
        options: ["0", "1", "6", "720"],
        correct: 1,
        topic: "Combinatorics"
    },
    {
        question: "A graph with no cycles is called:",
        options: ["Complete graph", "Tree", "Euler graph", "Bipartite graph"],
        correct: 1,
        topic: "Graph Theory"
    },
    {
        question: "The power set of ∅ is:",
        options: ["∅", "{∅}", "{{∅}}", "{0}"],
        correct: 1,
        topic: "Set Theory"
    },
    {
        question: "The degree of a vertex is:",
        options: ["Number of vertices", "Number of edges incident to it", "Total edges in graph", "Number of cycles"],
        correct: 1,
        topic: "Graph Theory"
    },
    {
        question: "In how many ways can 3 letters be arranged from ABCD without repetition?",
        options: ["12", "24", "64", "6"],
        correct: 1,
        topic: "Combinatorics"
    },
    {
        question: "If a recurrence relation depends on two previous terms, it is called:",
        options: ["First order", "Linear", "Second order", "Constant"],
        correct: 2,
        topic: "Recurrence Relations"
    },
    {
        question: "Which of the following is a tautology?",
        options: ["p ∧ ¬p", "p ∨ ¬p", "p → ¬p", "¬p → p"],
        correct: 1,
        topic: "Propositional Logic"
    },
    {
        question: "A bipartite graph can be defined as a graph whose vertices can be divided into:",
        options: ["Three disjoint sets", "Two disjoint sets", "One set", "Infinite sets"],
        correct: 1,
        topic: "Graph Theory"
    },
    {
        question: "If |A| = 5, how many elements are in P(A)?",
        options: ["10", "25", "32", "64"],
        correct: 2,
        topic: "Set Theory"
    },
    {
        question: "The identity element for union in set theory is:",
        options: ["Universal set", "Empty set", "{0}", "Complement set"],
        correct: 1,
        topic: "Set Theory"
    },
    {
        question: "If a graph has exactly two vertices of odd degree, it contains:",
        options: ["Euler circuit", "Euler path", "No edges", "Complete cycle"],
        correct: 1,
        topic: "Graph Theory"
    },
    {
        question: "PQ: Let A = {1,2,3,4,5}, B = {2,4,6,8}. Find A ∩ B",
        options: ["{1,3,5}", "{2,4}", "{6,8}", "{2,4,6,8}"],
        correct: 1,
        topic: "Set Theory - PQ"
    },
    {
        question: "PQ: If U = {1,2,3,4,5,6} and A = {2,4,6}, find A′",
        options: ["{1,3,5}", "{2,4}", "{1,2,3}", "{4,5,6}"],
        correct: 0,
        topic: "Set Theory - PQ"
    },
    {
        question: "PQ: Determine whether the statement ¬(p ∧ q) is logically equivalent to:",
        options: ["¬p ∧ ¬q", "¬p ∨ ¬q", "p ∨ q", "p ∧ ¬q"],
        correct: 1,
        topic: "Propositional Logic - PQ"
    },
    {
        question: "PQ: Construct the truth table for p → q. When is it false?",
        options: ["When p is true and q is false", "When p is false and q is true", "When both are true", "When both are false"],
        correct: 0,
        topic: "Propositional Logic - PQ"
    },
    {
        question: "PQ: How many subsets does a set with 4 elements have?",
        options: ["8", "12", "16", "32"],
        correct: 2,
        topic: "Set Theory - PQ"
    },
    {
        question: "PQ: Determine whether the relation R = {(1,1),(2,2),(3,3)} is:",
        options: ["Symmetric only", "Reflexive only", "Reflexive, symmetric and transitive", "Not transitive"],
        correct: 2,
        topic: "Relations - PQ"
    },
    {
        question: "PQ: Find 5!",
        options: ["20", "60", "120", "240"],
        correct: 2,
        topic: "Combinatorics - PQ"
    },
    {
        question: "PQ: In how many ways can 3 objects be selected from 5 objects?",
        options: ["10", "15", "20", "60"],
        correct: 0,
        topic: "Combinatorics - PQ"
    },
    {
        question: "PQ: A graph with n vertices and n−1 edges that is connected is called:",
        options: ["Complete graph", "Tree", "Euler graph", "Cycle"],
        correct: 1,
        topic: "Graph Theory - PQ"
    },
    {
        question: "PQ: The degree of a vertex in a graph is:",
        options: ["Total vertices", "Number of edges incident to it", "Total cycles", "Number of components"],
        correct: 1,
        topic: "Graph Theory - PQ"
    },
    {
        question: "PQ: Use mathematical induction to prove that 1 + 2 + 3 + … + n = ?",
        options: ["n(n+1)/2", "n²", "n(n−1)/2", "2n"],
        correct: 0,
        topic: "Mathematical Induction - PQ"
    },
    {
        question: "PQ: The binomial expansion of (a + b)² is:",
        options: ["a² + b²", "a² + 2ab + b²", "2a² + b²", "a² − b²"],
        correct: 1,
        topic: "Combinatorics - PQ"
    },
    {
        question: "PQ: A function f is one-to-one if:",
        options: ["Every element of codomain has one preimage", "Different inputs give different outputs", "Every input maps to same value", "It is constant"],
        correct: 1,
        topic: "Functions - PQ"
    },
    {
        question: "PQ: The number of edges in a complete graph K₄ is:",
        options: ["4", "6", "8", "12"],
        correct: 1,
        topic: "Graph Theory - PQ"
    },
    {
        question: "PQ: If a graph has exactly two vertices of odd degree, it has:",
        options: ["Euler circuit", "Euler path", "No path", "Hamilton circuit"],
        correct: 1,
        topic: "Graph Theory - PQ"
    },
    {
        question: "PQ: A set is defined as:",
        options: ["A random collection of numbers", "A well-defined collection of distinct objects", "An ordered list", "A sequence of operations"],
        correct: 1,
        topic: "Set Theory - PQ"
    },
    {
        question: "PQ: If A ⊆ B, this means:",
        options: ["Every element of B is in A", "A and B are disjoint", "Every element of A is in B", "A = ∅"],
        correct: 2,
        topic: "Set Theory - PQ"
    },
    {
        question: "PQ: The power set of A = {1,2} is:",
        options: ["{{1},{2}}", "{1,2}", "{∅,{1},{2},{1,2}}", "{1,2,∅}"],
        correct: 2,
        topic: "Set Theory - PQ"
    },
    {
        question: "PQ: If A = {1,2,3,4} and B = {3,4,5,6}, find A − B",
        options: ["{3,4}", "{1,2}", "{5,6}", "{1,2,5,6}"],
        correct: 1,
        topic: "Set Theory - PQ"
    },
    {
        question: "PQ: De Morgan's Law states that ¬(p ∨ q) is equivalent to:",
        options: ["¬p ∨ ¬q", "p ∧ q", "¬p ∧ ¬q", "p ∨ ¬q"],
        correct: 2,
        topic: "Propositional Logic - PQ"
    },
    {
        question: "PQ: A relation R on a set A is reflexive if:",
        options: ["(a,b) ∈ R implies (b,a) ∈ R", "(a,a) ∈ R for all a ∈ A", "(a,b) and (b,c) imply (a,c)", "No pair repeats"],
        correct: 1,
        topic: "Relations - PQ"
    },
    {
        question: "PQ: A function is defined as:",
        options: ["A relation where every element in domain maps to exactly one element in codomain", "A random pairing", "A set of ordered pairs with duplicates allowed", "A symmetric relation"],
        correct: 0,
        topic: "Functions - PQ"
    },
    {
        question: "PQ: A function is one-to-one if:",
        options: ["Every output has two inputs", "Different inputs give different outputs", "Every element of codomain is used", "It is constant"],
        correct: 1,
        topic: "Functions - PQ"
    },
    {
        question: "PQ: In how many ways can 5 students be arranged in a row?",
        options: ["25", "60", "120", "720"],
        correct: 2,
        topic: "Combinatorics - PQ"
    },
    {
        question: "PQ: In how many ways can 3 students be selected from 7?",
        options: ["21", "35", "210", "720"],
        correct: 1,
        topic: "Combinatorics - PQ"
    },
    {
        question: "PQ: A graph is defined as:",
        options: ["A collection of vertices only", "A collection of edges only", "A set of vertices and edges connecting them", "A tree structure only"],
        correct: 2,
        topic: "Graph Theory - PQ"
    },
    {
        question: "PQ: An Euler circuit exists in a graph if:",
        options: ["All vertices have odd degree", "Exactly two vertices have odd degree", "All vertices have even degree", "Graph has no cycles"],
        correct: 2,
        topic: "Graph Theory - PQ"
    },
    {
        question: "PQ: Mathematical induction is used to:",
        options: ["Guess formulas", "Prove statements true for all natural numbers", "Solve quadratic equations", "Count permutations"],
        correct: 1,
        topic: "Mathematical Induction - PQ"
    },
    {
        question: "PQ: The expansion of (x + y)³ is:",
        options: ["x³ + y³", "x³ + 3x²y + 3xy² + y³", "x² + y²", "x³ − y³"],
        correct: 1,
        topic: "Combinatorics - PQ"
    },
    {
        question: "PQ: A tree with n vertices has how many edges?",
        options: ["n", "n + 1", "n − 1", "2n"],
        correct: 2,
        topic: "Graph Theory - PQ"
    },
    {
        question: "PQ: The recurrence relation aₙ = 2aₙ₋₁ with a₀ = 1 gives a₁ = ?",
        options: ["1", "2", "4", "8"],
        correct: 1,
        topic: "Recurrence Relations - PQ"
    }
];

// Export for use in exam system
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CSC203_QUESTIONS;
}
