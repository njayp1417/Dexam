const GST203_QUESTIONS = [
    {
        id: 1,
        question: "Etymologically, the word 'Philosophy' is derived from two Greek words, Philo and Sophia, which translate literally to:",
        options: ["The study of nature", "The love of wisdom", "The analysis of arguments", "The pursuit of scientific truth"],
        correct: 1,
        topic: "Introduction to Philosophy",
        explanation: "The word 'philosophy' comes from the ancient Greek words 'philos' (loving) and 'sophia' (wisdom), literally meaning 'the love of wisdom.' This etymology reflects the foundational spirit of philosophical inquiry — a passionate, disciplined pursuit of understanding the deepest questions about reality, knowledge, existence, and value. The term was reportedly first used by Pythagoras, who described himself not as a wise man but as a lover of wisdom."
    },
    {
        id: 2,
        question: "Which primary branch of philosophy is exclusively concerned with investigating the nature, origin, scope, structures, and absolute validity of human knowledge?",
        options: ["Metaphysics", "Epistemology", "Ethics", "Logic"],
        correct: 1,
        topic: "Branches of Philosophy",
        explanation: "Epistemology (from the Greek 'episteme' meaning knowledge) is the branch of philosophy that investigates the nature, sources, scope, and limits of human knowledge. Key epistemological questions include: What is knowledge? How do we acquire it? What distinguishes justified belief from mere opinion? Can we have certain knowledge? Major epistemological positions include rationalism, empiricism, and skepticism."
    },
    {
        id: 3,
        question: "A philosopher who is systematically investigating whether the human soul exists after physical death or analyzing the fundamental nature of ultimate reality is working within the branch of:",
        options: ["Axiology", "Metaphysics", "Logic", "Aesthetics"],
        correct: 1,
        topic: "Branches of Philosophy",
        explanation: "Metaphysics is the branch of philosophy concerned with the fundamental nature of reality, existence, and being. It addresses questions that go beyond physical science: Does the soul exist? What is the nature of time and space? Do abstract objects exist? What is the relationship between mind and body? The term 'metaphysics' derives from Aristotle's works placed 'after the physics' (meta ta physika), dealing with first principles and ultimate causes."
    },
    {
        id: 4,
        question: "The philosophical study of value, which systematically sub-divides into the fields of 'Ethics' (moral values) and 'Aesthetics' (the philosophy of art and beauty), is known as:",
        options: ["Teleology", "Axiology", "Ontology", "Epistemology"],
        correct: 1,
        topic: "Branches of Philosophy",
        explanation: "Axiology (from the Greek 'axios' meaning worthy or of value) is the philosophical study of value in its broadest sense. It encompasses ethics (the study of moral values — what is right, wrong, good, and bad in human conduct) and aesthetics (the study of beauty, art, and taste — what makes something beautiful or artistically valuable). Axiology asks: What has value? How do we determine value? Are values objective or subjective?"
    },
    {
        id: 5,
        question: "In the study of logic, what is the conceptual definition of an 'Argument'?",
        options: ["A heated emotional dispute or verbal altercation between two individuals", "A structured group of propositions or statements where one or more premises are explicitly claimed to provide logical support or evidence for a conclusion", "Any random string of declarative statements compiled in a text", "A purely speculative metaphysical statement about the universe"],
        correct: 1,
        topic: "Introduction to Logic",
        explanation: "In logic, an argument is a structured set of propositions consisting of one or more premises and a conclusion, where the premises are claimed to provide logical support, evidence, or justification for the conclusion. This technical definition differs sharply from the everyday meaning of 'argument' as a quarrel. Identifying arguments requires distinguishing premises (supporting statements) from conclusions (the claim being supported) using indicator words like 'therefore,' 'because,' 'since,' and 'thus.'"
    },
    {
        id: 6,
        question: "Which type of reasoning moves from general, universally accepted principles to a specific, necessary conclusion that cannot be false if the starting premises are true?",
        options: ["Inductive Reasoning", "Deductive Reasoning", "Dialectical Synthesis", "Fallacious Extrapolation"],
        correct: 1,
        topic: "Types of Reasoning",
        explanation: "Deductive reasoning moves from general principles to specific conclusions with logical necessity. If the premises are true and the argument is valid, the conclusion must be true — it cannot be otherwise. Classic example: All humans are mortal (general premise); Socrates is human (specific premise); therefore Socrates is mortal (necessary conclusion). Deductive arguments are evaluated for validity (structural correctness) and soundness (validity plus true premises)."
    },
    {
        id: 7,
        question: "An argument where the premises are claimed to make the conclusion only highly probable, rather than absolutely certain, moving from specific observations to a general conclusion, is classified as:",
        options: ["Deductive", "Inductive", "Socratic", "Syllogistic"],
        correct: 1,
        topic: "Types of Reasoning",
        explanation: "Inductive reasoning moves from specific observations to general conclusions, with the premises providing probabilistic rather than conclusive support. Example: Every swan I have ever observed is white; therefore all swans are probably white. The conclusion goes beyond what the premises strictly guarantee — it is probable but not certain. Inductive arguments are evaluated as strong or weak (not valid/invalid), and the famous 'problem of induction' questions whether inductive reasoning can ever be fully justified."
    },
    {
        id: 8,
        question: "In formal logic, a deductive argument is technically declared 'Valid' when:",
        options: ["Every single premise in the argument is factually true in the real world", "The structural relationship makes it absolutely impossible for the premises to be true and the conclusion to be false at the same time", "The conclusion matches the popular opinion of the general public", "It contains precisely three inductive premises"],
        correct: 1,
        topic: "Validity and Soundness",
        explanation: "Validity is a purely structural property of deductive arguments. An argument is valid if and only if it is impossible for all the premises to be true while the conclusion is false — the conclusion follows necessarily from the premises. Crucially, validity does not require the premises to actually be true. A valid argument can have false premises. Validity concerns the logical relationship between premises and conclusion, not the factual accuracy of the premises themselves."
    },
    {
        id: 9,
        question: "What constitutes a 'Sound' deductive argument in logical analysis?",
        options: ["It must sound grammatically polished when spoken aloud", "It must be structurally valid, and all of its constituent premises must be factually true in reality", "It must rely strictly on emotional appeal to persuade the listener", "It must move from a specific observation to a highly probable conclusion"],
        correct: 1,
        topic: "Validity and Soundness",
        explanation: "Soundness is the gold standard for deductive arguments, combining two requirements: (1) the argument must be structurally valid (the conclusion follows necessarily from the premises), and (2) all premises must actually be true in reality. A sound argument guarantees a true conclusion. Validity alone is insufficient — a valid argument with false premises can lead to a false conclusion. Soundness ensures both logical correctness and factual accuracy."
    },
    {
        id: 10,
        question: "The foundational law of thought, originally laid down by the Greek philosopher Aristotle, which states that a thing is identical to itself (A = A), is called the:",
        options: ["Law of Non-Contradiction", "Law of Identity", "Law of Excluded Middle", "Law of Syllogistic Equivalence"],
        correct: 1,
        topic: "Laws of Thought",
        explanation: "The Law of Identity, one of Aristotle's three classical laws of thought, states that every thing is identical to itself: A is A. This seemingly trivial principle is foundational to all rational discourse — it establishes that terms and concepts must maintain consistent meaning throughout an argument. Without the Law of Identity, communication and reasoning would be impossible because words could mean different things at different points in the same argument."
    },
    {
        id: 11,
        question: "The law of thought which dictates that a statement cannot be both true and false at the same time and in the same respect is known as the:",
        options: ["Law of Identity", "Law of Non-Contradiction", "Law of Excluded Middle", "Law of Bifurcated Propositions"],
        correct: 1,
        topic: "Laws of Thought",
        explanation: "The Law of Non-Contradiction states that contradictory propositions cannot both be true simultaneously and in the same respect. A statement and its negation cannot both be true at the same time: it cannot be both raining and not raining at the same place and time. This law is foundational to logical reasoning — if contradictions were permitted, any conclusion could be derived from any premises, making rational argument impossible."
    },
    {
        id: 12,
        question: "According to the Aristotelian Law of Excluded Middle:",
        options: ["Any complex argument must leave out the middle premise completely", "A proposition must be either true or false; there is no third or middle alternative", "All physical objects must exist in a spatial vacuum", "An inductive argument can never reach perfect validity"],
        correct: 1,
        topic: "Laws of Thought",
        explanation: "The Law of Excluded Middle states that for any proposition P, either P is true or P is false — there is no third option, no middle ground. Every proposition has exactly one of two truth values. This law is closely related to the Law of Non-Contradiction but distinct: Non-Contradiction says both cannot be true; Excluded Middle says at least one must be true. Together they establish the binary nature of classical logic's truth values."
    },
    {
        id: 13,
        question: "In logic, a defect or structural flaw in an argument that causes it to be invalid, deceptive, or weak is technically termed a:",
        options: ["Premise", "Fallacy", "Syllogism", "Axiom"],
        correct: 1,
        topic: "Fallacies",
        explanation: "A fallacy is an error in reasoning that renders an argument logically invalid, deceptive, or weak. Fallacies are classified as formal (structural errors in the logical form of the argument) or informal (errors in the content, context, or language of the argument). Recognizing fallacies is a critical skill in logical analysis, enabling thinkers to identify flawed reasoning in arguments regardless of how persuasive or emotionally compelling they may appear."
    },
    {
        id: 14,
        question: "When a debater completely avoids addressing the actual logical point of their opponent's argument and instead launches a malicious, personal attack against the opponent's character, they commit which specific fallacy?",
        options: ["Argumentum ad Populum (Appeal to the People)", "Argumentum ad Hominem (Attack against the Person)", "Argumentum ad Ignorantium (Appeal to Ignorance)", "Post Hoc Ergo Propter Hoc (False Cause)"],
        correct: 1,
        topic: "Fallacies",
        explanation: "Argumentum ad Hominem (Latin: 'argument against the person') is the fallacy of attacking the character, motives, or personal circumstances of an opponent rather than addressing the logical content of their argument. Even if the personal attack is true, it is logically irrelevant to the validity of the argument being made. Ad hominem is one of the most common fallacies in political and public discourse, used to discredit opponents without engaging their actual reasoning."
    },
    {
        id: 15,
        question: "An orator who attempts to persuade an audience to accept a claim purely by exploiting their deep feelings of pity, sympathy, or compassion is guilty of committing the fallacy of:",
        options: ["Argumentum ad Baculum (Appeal to Force)", "Argumentum ad Misericordiam (Appeal to Pity)", "Argumentum ad Verecundiam (Appeal to Authority)", "Straw Man Fallacy"],
        correct: 1,
        topic: "Fallacies",
        explanation: "Argumentum ad Misericordiam (Latin: 'argument to compassion') is the fallacy of appealing to pity, sympathy, or compassion to win acceptance of a conclusion, rather than providing logical evidence. While emotional appeals are not always fallacious, they become fallacious when used as a substitute for logical reasoning. Example: 'You must give me a passing grade because my grandmother is ill' — the grandmother's illness is logically irrelevant to whether the student's work merits a passing grade."
    },
    {
        id: 16,
        question: "If a student argues that a new university policy must be completely flawless simply because 'every single student on campus thinks it is a great idea,' they have committed the fallacy of:",
        options: ["Hasty Generalization", "Argumentum ad Populum (Appeal to Popularity / the Crowd)", "Slippery Slope", "Fallacy of Equivocation"],
        correct: 1,
        topic: "Fallacies",
        explanation: "Argumentum ad Populum (Latin: 'argument to the people') is the fallacy of claiming something is true, correct, or good simply because many or most people believe it. Popular opinion is not a reliable indicator of truth — majorities have historically been wrong about many things. The fallacy confuses descriptive claims (what people believe) with normative claims (what is actually true or good). Truth is not determined by vote."
    },
    {
        id: 17,
        question: "The 'Slippery Slope' fallacy occurs when an arguer asserts, without any empirical evidence, that:",
        options: ["An opponent's character is too unstable to be trusted", "A single initial action or policy change will inevitably trigger a catastrophic chain reaction of highly undesirable events", "A conclusion is true simply because no one has yet proven it to be false", "A specific term changes its definition right in the middle of a paragraph"],
        correct: 1,
        topic: "Fallacies",
        explanation: "The Slippery Slope fallacy asserts that one event will inevitably lead to a chain of increasingly negative consequences, without providing evidence that this causal chain will actually occur. The fallacy lies in the unwarranted assumption of inevitability. Not all slippery slope arguments are fallacious — if evidence supports the causal chain, the argument may be legitimate. The fallacy occurs specifically when the chain of consequences is asserted without empirical justification."
    },
    {
        id: 18,
        question: "When a researcher draws a massive, sweeping conclusion about an entire population baseline after examining only two or three highly unrepresentative samples, they commit the fallacy of:",
        options: ["Circular Reasoning (Begging the Question)", "Hasty Generalization", "Red Herring", "Complex Question"],
        correct: 1,
        topic: "Fallacies",
        explanation: "Hasty Generalization is the fallacy of drawing a broad general conclusion from an insufficient or unrepresentative sample. The conclusion goes far beyond what the limited evidence can support. This fallacy underlies many stereotypes and prejudices — generalizing about an entire group based on a few encounters. Valid generalization requires a sufficiently large, randomly selected, and representative sample before broad conclusions can be drawn."
    },
    {
        id: 19,
        question: "In formal logic, a 'Proposition' is defined as a specific type of sentence that:",
        options: ["Asks a direct, analytical question about metaphysics", "Expresses a complete thought and is capable of being either true or false (assertoric value)", "Issues a sharp administrative command or physical instruction", "Conveys an exclamation of deep emotional shock"],
        correct: 1,
        topic: "Introduction to Logic",
        explanation: "A proposition (also called a statement) is a declarative sentence that expresses a complete thought and has a definite truth value — it is either true or false. Questions, commands, and exclamations are not propositions because they cannot be assigned truth values. Propositions are the basic building blocks of logical arguments. Example: 'The sun rises in the east' is a proposition (true); 'What time is it?' is not a proposition."
    },
    {
        id: 20,
        question: "The classical form of deductive argument consisting exactly of two premises and one concluding proposition is formally known as a:",
        options: ["Dilemma", "Syllogism", "Paradigm", "Tautology"],
        correct: 1,
        topic: "Introduction to Logic",
        explanation: "A syllogism is the classical form of deductive argument developed by Aristotle, consisting of exactly two premises and one conclusion. The standard categorical syllogism has a major premise (a general principle), a minor premise (a specific case), and a conclusion. Example: All men are mortal (major premise); Socrates is a man (minor premise); therefore Socrates is mortal (conclusion). Aristotle's systematic analysis of syllogisms in the Prior Analytics laid the foundation for formal logic."
    }
    ,
    {
        id: 21,
        question: "In structural logic, what is the specific term used to describe the declarative statement in a syllogism that directly states the final claim or assertion being proven by the preceding premises?",
        options: ["Antecedent", "Conclusion", "Copula", "Hypothetical"],
        correct: 1,
        topic: "Introduction to Logic",
        explanation: "The conclusion is the proposition in an argument that the premises are intended to support, prove, or justify. It is the claim the arguer is trying to establish. In a syllogism, the conclusion follows from the two premises. Conclusion indicator words include 'therefore,' 'thus,' 'hence,' 'consequently,' and 'so.' Identifying the conclusion is the first step in analyzing any argument, as it reveals what the arguer is trying to prove."
    },
    {
        id: 22,
        question: "The standard grammatical element within a categorical proposition that connects or links the subject term directly to the predicate term (such as the words 'is' or 'are') is called the:",
        options: ["Quantifier", "Copula", "Qualifier", "Syllogistic index"],
        correct: 1,
        topic: "Categorical Propositions",
        explanation: "The copula is the linking verb in a categorical proposition that connects the subject term to the predicate term. In standard form categorical propositions, the copula is always a form of the verb 'to be' — 'is,' 'are,' 'is not,' 'are not.' The copula also indicates the quality of the proposition (affirmative or negative). Example: In 'All humans ARE mortal,' the word 'are' is the copula linking 'humans' (subject) to 'mortal' (predicate)."
    },
    {
        id: 23,
        question: "Which categorical statement quantifier indicates that a proposition refers to every single member of a specified structural class without exception?",
        options: ["Particular quantifier ('Some')", "Universal quantifier ('All' or 'No')", "Existential modifier", "Contingent parameter"],
        correct: 1,
        topic: "Categorical Propositions",
        explanation: "The universal quantifier indicates that a proposition applies to every member of the subject class without exception. 'All' introduces universal affirmative propositions (A propositions: 'All S is P'), while 'No' introduces universal negative propositions (E propositions: 'No S is P'). Both make claims about the entire subject class. The particular quantifier 'Some' makes claims about at least one member of the class, not all members."
    },
    {
        id: 24,
        question: "In traditional Aristotelian logic, a categorical proposition that takes the standard form 'Some S is not P' is formally classified as an:",
        options: ["Universal Affirmative (A proposition)", "Universal Negative (E proposition)", "Particular Affirmative (I proposition)", "Particular Negative (O proposition)"],
        correct: 3,
        topic: "Categorical Propositions",
        explanation: "The four standard categorical propositions are: A (Universal Affirmative: 'All S is P'), E (Universal Negative: 'No S is P'), I (Particular Affirmative: 'Some S is P'), and O (Particular Negative: 'Some S is not P'). The letters A and I come from the Latin 'AffIrmo' (I affirm), while E and O come from 'nEgO' (I deny). 'Some S is not P' is an O proposition — particular (some, not all) and negative (is not)."
    },
    {
        id: 25,
        question: "The classic logic diagram or structural matrix that models the exact logical relationships (such as contraries, subcontraries, contradictions, and subalternation) between the four standard categorical propositions (A, E, I, O) is known as the:",
        options: ["Venn Diagram Matrix", "Traditional Square of Opposition", "Truth Table Layout", "Socratic Dialectical Wheel"],
        correct: 1,
        topic: "Square of Opposition",
        explanation: "The Traditional Square of Opposition is a diagram that maps the logical relationships between the four categorical propositions (A, E, I, O). The relationships are: Contradiction (A-O and E-I: opposite truth values), Contrariety (A-E: cannot both be true), Subcontrariety (I-O: cannot both be false), and Subalternation (A-I and E-O: truth flows downward, falsity flows upward). These relationships allow logicians to infer the truth value of one proposition from another."
    },
    {
        id: 26,
        question: "According to the rules of the Traditional Square of Opposition, if a universal affirmative statement (A: 'All students are intelligent') is verified as completely true, what is the absolute truth value of its contradictory particular negative statement (O: 'Some students are not intelligent')?",
        options: ["It must be true", "It must be false", "It remains completely undetermined or contingent", "It converts into a universal negative"],
        correct: 1,
        topic: "Square of Opposition",
        explanation: "Contradictory propositions (A and O; E and I) always have opposite truth values — if one is true, the other must be false, and vice versa. If the A proposition ('All students are intelligent') is true, then its contradictory O proposition ('Some students are not intelligent') must be false. This is the strongest relationship in the Square of Opposition, providing definitive truth value inference in both directions."
    },
    {
        id: 27,
        question: "The logical fallacy of Argumentum ad Baculum occurs whenever an arguer attempts to persuade an opponent to accept a specific conclusion by:",
        options: ["Appealing to the popular emotions of a crowd", "Using implicit or explicit threats of physical force, harm, or adverse consequences", "Quoting a completely irrelevant professional authority figure", "Repeating the exact same claim using different words"],
        correct: 1,
        topic: "Fallacies",
        explanation: "Argumentum ad Baculum (Latin: 'argument to the stick/club') is the fallacy of using threats of force, harm, or adverse consequences to compel acceptance of a conclusion. The threat is logically irrelevant to the truth of the conclusion — a claim does not become true because someone will be harmed if they reject it. This fallacy replaces rational persuasion with coercion and is common in authoritarian contexts where power substitutes for reasoned argument."
    },
    {
        id: 28,
        question: "An analyst who tries to settle a complex debate by arguing that a specific premise is absolutely true simply because 'no scientist has ever successfully managed to prove it false' commits the fallacy of:",
        options: ["Argumentum ad Hominem", "Argumentum ad Ignorantiam (Appeal to Ignorance)", "Fallacy of Equivocation", "Post Hoc Ergo Propter Hoc"],
        correct: 1,
        topic: "Fallacies",
        explanation: "Argumentum ad Ignorantiam (Appeal to Ignorance) is the fallacy of claiming something is true because it has not been proven false, or false because it has not been proven true. The absence of disproof is not proof. The burden of proof lies with the person making a positive claim. This fallacy is common in pseudoscience and conspiracy theories, where lack of evidence against a claim is treated as evidence for it."
    },
    {
        id: 29,
        question: "The fallacy of 'Equivocation' arises within a logical deduction when:",
        options: ["The arguer uses physical force to silence an opponent", "A single word or phrase shifts its meaning or definition mid-way through the argument", "The premises are structurally valid but factually inaccurate", "The conclusion is derived entirely from an unrepresentative sample size"],
        correct: 1,
        topic: "Fallacies",
        explanation: "Equivocation is the fallacy of using the same word or phrase with two different meanings within the same argument, exploiting the ambiguity to make the argument appear valid. Example: 'The sign said fine for parking here; since it was fine, I parked there.' The word 'fine' shifts from meaning 'a penalty' to meaning 'acceptable.' Equivocation violates the Law of Identity by allowing a term to mean different things in the same argument."
    },
    {
        id: 30,
        question: "When an individual distorts, oversimplifies, or misrepresents their opponent's actual argument to make it look completely ridiculous, and then attacks that distorted caricature, they commit the:",
        options: ["Red Herring Fallacy", "Straw Man Fallacy", "Complex Question Fallacy", "Fallacy of Division"],
        correct: 1,
        topic: "Fallacies",
        explanation: "The Straw Man fallacy involves misrepresenting an opponent's argument — creating a distorted, weakened, or exaggerated version (a 'straw man') that is easier to attack — and then refuting that misrepresentation rather than the actual argument. The fallacy is named after the ease of knocking down a straw man compared to a real person. It is a form of intellectual dishonesty that avoids genuine engagement with the opponent's reasoning."
    },
    {
        id: 31,
        question: "The logical error known as the 'Fallacy of Composition' occurs when an arguer mistakenly concludes that:",
        options: ["What is true of the whole entity must also be true of every single individual part", "What is true of the individual parts or members of a group must automatically be true of the whole entity or group itself", "A correlation between two separate events implies a direct causal link", "An argument is invalid simply because its author lacks an academic degree"],
        correct: 1,
        topic: "Fallacies",
        explanation: "The Fallacy of Composition incorrectly assumes that what is true of the parts must be true of the whole. Example: 'Every player on this team is excellent; therefore this team is excellent.' Individual excellence does not guarantee collective excellence — team dynamics, coordination, and strategy matter. This fallacy is common in economics (what is rational for an individual may be irrational for the economy as a whole) and in everyday reasoning about groups."
    },
    {
        id: 32,
        question: "Conversely, if an investigator argues that because an entire corporate bank is exceptionally wealthy, every single entry-level cleaner working at that bank must also be personally wealthy, they commit the:",
        options: ["Fallacy of Composition", "Fallacy of Division", "Slippery Slope Fallacy", "Fallacy of False Dilemma"],
        correct: 1,
        topic: "Fallacies",
        explanation: "The Fallacy of Division is the mirror image of the Fallacy of Composition — it incorrectly assumes that what is true of the whole must be true of each part. Example: 'This bank is wealthy; therefore every employee of this bank is wealthy.' The wealth of the institution does not distribute equally to all its members. A cleaner at a wealthy bank may earn minimum wage. Properties of wholes do not automatically transfer to their constituent parts."
    },
    {
        id: 33,
        question: "An argument that presents exactly two stark options or alternatives as if they are the only choices available, completely ignoring an obvious third alternative, is guilty of the fallacy of:",
        options: ["Hasty Generalization", "False Dilemma (Bifurcation)", "Circular Reasoning", "Argumentum ad Verecundiam"],
        correct: 1,
        topic: "Fallacies",
        explanation: "The False Dilemma (also called Bifurcation or the Either/Or fallacy) presents a situation as having only two mutually exclusive options when in reality more alternatives exist. Example: 'You are either with us or against us' — ignoring the possibility of neutrality or partial agreement. This fallacy artificially restricts the range of options to force a choice between two extremes, manipulating the audience into accepting one option by making the other seem unacceptable."
    },
    {
        id: 34,
        question: "The Latin phrase Post Hoc Ergo Propter Hoc is the technical name for which common logical error?",
        options: ["Attacking an opponent's physical appearance instead of their claim", "Faulty Causality (concluding that because event B happened after event A, event A must be the direct cause of event B)", "Appealing to the sympathy of a jury panel", "Sneaking the conclusion directly into the premises of an argument"],
        correct: 1,
        topic: "Fallacies",
        explanation: "Post Hoc Ergo Propter Hoc (Latin: 'after this, therefore because of this') is the fallacy of assuming that because one event followed another, the first event caused the second. Temporal sequence does not establish causation. Example: 'I wore my lucky socks and then passed the exam; therefore my lucky socks caused me to pass.' Establishing genuine causation requires controlled experimentation, not mere temporal correlation."
    },
    {
        id: 35,
        question: "In formal logical definitions, what is the term given to an argument whose conclusion simply restates its own starting premise in slightly different terms, resulting in 'reasoning in a circle'?",
        options: ["Complex Question", "Begging the Question (Petitio Principii)", "Fallacy of Accent", "Amphiboly"],
        correct: 1,
        topic: "Fallacies",
        explanation: "Begging the Question (Petitio Principii) is the fallacy of assuming the truth of the conclusion within the premises — the argument is circular because the conclusion is essentially a restatement of a premise. Example: 'The Bible is true because it says so in the Bible.' The premise assumes what needs to be proven. This fallacy produces arguments that are technically valid (the conclusion does follow from the premises) but completely uninformative and question-begging."
    },
    {
        id: 36,
        question: "The fallacy of 'Amphiboly' differs from the fallacy of equivocation because amphiboly arises specifically due to:",
        options: ["Intentional personal insults directed at a speaker", "Loose, ambiguous, or defective grammatical sentence structure rather than the shifting meaning of a single word", "Relying on an unrepresentative sample baseline index", "The introduction of an irrelevant emotional topic to distract listeners"],
        correct: 1,
        topic: "Fallacies",
        explanation: "Amphiboly is the fallacy of ambiguity arising from loose or defective grammatical construction of a sentence, rather than from the multiple meanings of a single word (which is equivocation). Example: 'I saw the man with the telescope' — did I use a telescope to see him, or did he have a telescope? The ambiguity is structural (grammatical), not lexical. Amphiboly can make an argument appear to support a conclusion it does not actually support."
    },
    {
        id: 37,
        question: "When a lawyer asks a witness a single question that contains an unproven, hidden assumption — such as 'Have you finally stopped stealing company funds?' — the lawyer has committed the fallacy of:",
        options: ["Straw Man", "Complex Question (Loaded Question)", "Red Herring", "Hasty Generalization"],
        correct: 1,
        topic: "Fallacies",
        explanation: "The Complex Question (Loaded Question) fallacy embeds an unproven assumption within a question, forcing the respondent to implicitly accept that assumption by answering. 'Have you stopped stealing?' assumes the person was stealing — answering 'yes' or 'no' both concede the theft. The proper response is to challenge the hidden assumption rather than answer the question as posed. This fallacy is a common rhetorical trap in cross-examination and political debate."
    },
    {
        id: 38,
        question: "The strategic introduction of a completely irrelevant topic or side issue into a debate for the explicit purpose of diverting the audience's attention away from the original core argument is called a:",
        options: ["Slippery Slope", "Red Herring", "False Analogy", "Fallacy of Accident"],
        correct: 1,
        topic: "Fallacies",
        explanation: "The Red Herring fallacy involves introducing an irrelevant issue to distract attention from the real argument. The name comes from the practice of dragging a smelly fish across a trail to confuse hunting dogs. In debate, a red herring changes the subject to something tangential, hoping the audience will follow the distraction and forget the original point. It is a diversionary tactic that avoids genuine engagement with the argument at hand."
    },
    {
        id: 39,
        question: "In formal logic notation, a statement that is structurally guaranteed to be true under every single possible assignment of truth values to its constituent propositions is called a:",
        options: ["Contradiction", "Tautology", "Contingency", "Syllogistic Variable"],
        correct: 1,
        topic: "Introduction to Logic",
        explanation: "A tautology is a proposition that is necessarily true under every possible combination of truth values for its component variables — it is true by its logical structure alone, regardless of the facts. Example: 'It is either raining or it is not raining' (P ∨ ¬P) is always true. Tautologies are logically necessary truths but are informationally empty — they tell us nothing about the world because they cannot be false under any circumstances."
    },
    {
        id: 40,
        question: "Conversely, a proposition that is structurally false under every single possible combination of truth values is classified as a:",
        options: ["Tautology", "Contradiction (Self-Contradictory Statement)", "Contingent Expression", "Valid Deductive Premise"],
        correct: 1,
        topic: "Introduction to Logic",
        explanation: "A contradiction (or self-contradictory statement) is a proposition that is necessarily false under every possible combination of truth values for its component variables. Example: 'It is raining and it is not raining' (P ∧ ¬P) is always false. Contradictions violate the Law of Non-Contradiction and are logically impossible. A contingent proposition, by contrast, is one that is true under some truth value assignments and false under others — its truth depends on the facts."
    },
    {
        id: 41,
        question: "In formal logic, the conditional statement operator represented by the word sign 'If... then...' establishes a relationship where the component statement immediately following the word 'If' is called the:",
        options: ["Consequent", "Antecedent", "Disjunct", "Conjunct"],
        correct: 1,
        topic: "Conditional Propositions",
        explanation: "In a conditional (hypothetical) proposition of the form 'If P, then Q,' the antecedent is the component clause that follows 'If' — it is the condition being stated. P is the antecedent (also called the 'if-clause' or protasis). The antecedent states the condition whose truth is being supposed. If the antecedent is true, the consequent is claimed to follow. Understanding this structure is essential for applying valid argument forms like Modus Ponens and Modus Tollens."
    },
    {
        id: 42,
        question: "Conversely, in an 'If... then...' conditional statement, the structural component or clause that follows the word 'then' is known as the:",
        options: ["Conjunct", "Consequent", "Antecedent", "Bi-conditional"],
        correct: 1,
        topic: "Conditional Propositions",
        explanation: "In a conditional proposition 'If P, then Q,' the consequent is the component clause that follows 'then' — it is the result or outcome claimed to follow from the antecedent. Q is the consequent (also called the 'then-clause' or apodosis). The consequent states what is claimed to be true given that the antecedent holds. Confusing antecedent and consequent leads to formal fallacies like Affirming the Consequent and Denying the Antecedent."
    },
    {
        id: 43,
        question: "The logical connector represented by the phrase 'if and only if' (often abbreviated as 'iff') is used to construct a:",
        options: ["Disjunctive proposition", "Bi-conditional proposition", "Hypothetical syllogism", "Negated antecedent"],
        correct: 1,
        topic: "Conditional Propositions",
        explanation: "A bi-conditional proposition (P ↔ Q) asserts that P and Q have the same truth value — P is true if and only if Q is true. It combines two conditionals: 'If P then Q' and 'If Q then P.' The bi-conditional is true when both components are true or both are false, and false when they differ in truth value. It expresses a relationship of logical equivalence between two propositions."
    },
    {
        id: 44,
        question: "A compound proposition formed by joining two statements with the word 'AND' is logically true only when:",
        options: ["At least one of its component statements is verified as true", "Both component statements (conjuncts) are simultaneously true", "The first component statement is false and the second is true", "Both component statements are structurally self-contradictory"],
        correct: 1,
        topic: "Compound Propositions",
        explanation: "A conjunction (P ∧ Q) is a compound proposition formed by connecting two statements with 'AND.' It is true if and only if both conjuncts (P and Q) are simultaneously true. If either conjunct is false, the entire conjunction is false. This strict truth condition reflects the ordinary meaning of 'and' — saying 'It is raining AND sunny' is only true if both conditions actually hold simultaneously."
    },
    {
        id: 45,
        question: "A disjunctive proposition using the word 'OR' (in its standard inclusive sense) is considered logically false only when:",
        options: ["One of its component disjuncts is false", "Both component disjuncts are simultaneously false", "Both component disjuncts are completely true", "The antecedent is true but the consequent is false"],
        correct: 1,
        topic: "Compound Propositions",
        explanation: "An inclusive disjunction (P ∨ Q) is false only when both disjuncts are simultaneously false. It is true when at least one disjunct is true — including when both are true. This is the inclusive sense of 'or' (one or the other or both). The exclusive sense of 'or' (one or the other but not both) has a different truth table. In standard logic, 'or' is treated as inclusive unless otherwise specified."
    },
    {
        id: 46,
        question: "In deductive reasoning, the valid argument form which operates by affirming the antecedent in the premises — taking the pattern: If P, then Q; P; Therefore, Q — is called:",
        options: ["Modus Tollens", "Modus Ponens", "Hypothetical Syllogism", "Disjunctive Syllogism"],
        correct: 1,
        topic: "Valid Argument Forms",
        explanation: "Modus Ponens (Latin: 'mode of putting/affirming') is a fundamental valid deductive argument form: If P then Q; P is true; therefore Q must be true. It works by affirming the antecedent — since the conditional holds and the antecedent is true, the consequent must follow. Example: If it rains, the ground gets wet; it is raining; therefore the ground is wet. Modus Ponens is one of the most basic and widely used valid inference rules in logic."
    },
    {
        id: 47,
        question: "The valid deductive rule which states: If P, then Q; Not-Q; Therefore, Not-P — operating by denying the consequent — is known as:",
        options: ["Modus Ponens", "Modus Tollens", "Fallacy of Affirming the Consequent", "Fallacy of Denying the Antecedent"],
        correct: 1,
        topic: "Valid Argument Forms",
        explanation: "Modus Tollens (Latin: 'mode of taking/denying') is a valid deductive argument form: If P then Q; Q is false (not-Q); therefore P must be false (not-P). It works by denying the consequent — if the conditional holds and the consequent is false, the antecedent must also be false. Example: If it rains, the ground gets wet; the ground is not wet; therefore it did not rain. Modus Tollens is the logical basis for falsification in scientific reasoning."
    },
    {
        id: 48,
        question: "If an investigator argues: 'If it rains, the ground gets wet. The ground is wet. Therefore, it rained.' — they have committed a formal logical fallacy called:",
        options: ["Denying the Antecedent", "Affirming the Consequent", "Disjunctive Fallacy", "Existential Fallacy"],
        correct: 1,
        topic: "Formal Fallacies",
        explanation: "Affirming the Consequent is a formal fallacy that mimics Modus Ponens but is invalid: If P then Q; Q is true; therefore P is true. This is fallacious because the consequent (wet ground) can be true for reasons other than the antecedent (rain) — a sprinkler could have caused the wet ground. The conditional only guarantees that if P then Q, not that Q can only result from P. This fallacy is extremely common in everyday reasoning and scientific inference."
    },
    {
        id: 49,
        question: "What is the structural name of the formal fallacy committed in this argument: 'If you study computer science, you get a tech job. You did not study computer science. Therefore, you cannot get a tech job.'?",
        options: ["Affirming the Consequent", "Denying the Antecedent", "Fallacy of Division", "Complex Interpolation"],
        correct: 1,
        topic: "Formal Fallacies",
        explanation: "Denying the Antecedent is a formal fallacy: If P then Q; P is false (not-P); therefore Q is false (not-Q). This is invalid because the conditional does not say P is the only way to get Q — there may be other paths to Q. In the example, one can get a tech job through other routes (bootcamps, self-study, networking). The conditional only establishes a sufficient condition, not a necessary one. Denying the sufficient condition does not eliminate the possibility of the outcome."
    },
    {
        id: 50,
        question: "A valid deductive argument form that links conditional statements in a chain — structured as: If P then Q; If Q then R; Therefore, if P then R — is called a:",
        options: ["Disjunctive Syllogism", "Hypothetical Syllogism", "Modus Ponens Matrix", "Bi-conditional Tautology"],
        correct: 1,
        topic: "Valid Argument Forms",
        explanation: "Hypothetical Syllogism is a valid argument form that chains conditional statements: If P then Q; If Q then R; therefore If P then R. It applies the transitivity of the conditional — if the first condition leads to an intermediate result, and that intermediate result leads to a final result, then the first condition leads directly to the final result. This form is the logical basis for chain reasoning and is widely used in mathematical proofs and legal argumentation."
    },
    {
        id: 51,
        question: "The logical rule which allows an analyst to validly conclude the truth of one disjunct by eliminating the other — taking the form: Either P or Q; Not-P; Therefore, Q — is known as a:",
        options: ["Hypothetical Syllogism", "Disjunctive Syllogism", "Conjunction elimination", "Bi-conditional reduction"],
        correct: 1,
        topic: "Valid Argument Forms",
        explanation: "Disjunctive Syllogism is a valid argument form: Either P or Q; P is false (not-P); therefore Q must be true. By eliminating one disjunct as false, the other must be true (given the disjunction is true). Example: Either the butler or the gardener committed the crime; the butler did not commit it; therefore the gardener did. This form is valid for both inclusive and exclusive disjunctions when one disjunct is definitively eliminated."
    },
    {
        id: 52,
        question: "The epistemological theory which claims that human reason or intellect is the primary source of true knowledge, independent of sensory experiences, is known as:",
        options: ["Empiricism", "Rationalism", "Skepticism", "Pragmatism"],
        correct: 1,
        topic: "Epistemology",
        explanation: "Rationalism is the epistemological position that reason is the primary source and test of knowledge, independent of sensory experience. Rationalists like Descartes, Spinoza, and Leibniz argued that certain fundamental truths are known through pure reason — innate ideas or a priori knowledge that does not depend on experience. Mathematical and logical truths are classic examples of rationalist knowledge: we know that 2+2=4 through reason, not by counting objects."
    },
    {
        id: 53,
        question: "Which epistemological school of thought directly opposes rationalism by asserting that all knowledge is derived strictly from sensory observations and empirical experience?",
        options: ["Idealism", "Empiricism", "Existentialism", "Solipsism"],
        correct: 1,
        topic: "Epistemology",
        explanation: "Empiricism is the epistemological position that all knowledge originates from sensory experience — there are no innate ideas, and the mind begins as a blank slate. Empiricists like John Locke, George Berkeley, and David Hume argued that all concepts and knowledge are ultimately derived from sensory impressions. This position directly opposes rationalism's claim that reason alone can generate genuine knowledge independent of experience."
    },
    {
        id: 54,
        question: "John Locke's famous philosophical concept of the human mind at birth being a Tabula Rasa translates to the idea that the mind is a:",
        options: ["Collection of pre-existing innate ideas", "Blank slate or tablet waiting to be written upon by experience", "Complex spiritual machine detached from reality", "Perfect logical calculating system"],
        correct: 1,
        topic: "Epistemology",
        explanation: "John Locke's concept of the Tabula Rasa (Latin: 'blank slate' or 'scraped tablet') is the foundational claim of his empiricist epistemology. Locke argued in 'An Essay Concerning Human Understanding' (1689) that the mind at birth contains no innate ideas — it is a blank slate waiting to be written upon by sensory experience. All knowledge, concepts, and ideas are acquired through experience, directly opposing the rationalist doctrine of innate ideas."
    },
    {
        id: 55,
        question: "The philosophical attitude or position that questions the possibility of attaining absolute certainty or ultimate truth about anything is termed:",
        options: ["Dogmatism", "Skepticism", "Utilitarianism", "Objectivism"],
        correct: 1,
        topic: "Epistemology",
        explanation: "Skepticism is the philosophical position that questions the possibility of certain knowledge, doubting whether we can ever have justified, certain beliefs about the world. Ancient skeptics like Pyrrho suspended judgment on all matters. Descartes used methodological skepticism as a tool to find indubitable foundations for knowledge. Skepticism ranges from mild (questioning specific claims) to radical (doubting all knowledge is possible). It has been a productive force in epistemology, driving the search for more rigorous justifications of knowledge claims."
    },
    {
        id: 56,
        question: "The ethical framework which evaluates the moral rightness or wrongness of an action based entirely on the utility or consequences of that action — aiming for the 'greatest happiness for the greatest number' — is:",
        options: ["Deontology", "Utilitarianism", "Egoism", "Nihilism"],
        correct: 1,
        topic: "Ethical Theories",
        explanation: "Utilitarianism is a consequentialist ethical theory developed by Jeremy Bentham and refined by John Stuart Mill. It holds that the morally right action is the one that produces the greatest good (happiness or utility) for the greatest number of people. Actions are evaluated solely by their consequences — an action is right if it maximizes overall happiness and wrong if it does not. Utilitarianism is widely applied in public policy, economics, and medical ethics."
    },
    {
        id: 57,
        question: "Immanuel Kant's ethical theory, which insists that moral actions must be done out of duty according to universal absolute rules (regardless of consequences), is classified as:",
        options: ["Utilitarian Ethics", "Deontological Ethics", "Virtue Ethics", "Hedonistic Ethics"],
        correct: 1,
        topic: "Ethical Theories",
        explanation: "Deontological ethics (from the Greek 'deon' meaning duty) holds that the morality of an action is determined by whether it conforms to a rule or duty, regardless of consequences. Immanuel Kant's deontological theory centers on the Categorical Imperative — act only according to principles you could will to be universal laws. For Kant, lying is always wrong even if it produces good consequences, because universalizing lying would destroy the institution of truth-telling itself."
    },
    {
        id: 58,
        question: "In logical definitions, the 'Extension' of a term refers to:",
        options: ["The set of internal attributes or qualities that define what the term means", "The collection of actual, physical objects or instances in the real world to which the term applies", "The grammatical length of the sentence containing the term", "The symbolic notation used to represent the term in a truth table"],
        correct: 1,
        topic: "Definition and Language",
        explanation: "The extension (or denotation) of a term is the set of all actual objects, individuals, or instances in the real world to which the term correctly applies. For example, the extension of 'dog' is the set of all actual dogs that exist. Extension is about reference — what things in the world the term picks out. As a general rule, terms with broader extensions tend to have narrower intensions, and vice versa — this is the inverse relationship between extension and intension."
    },
    {
        id: 59,
        question: "Conversely, the 'Intension' (or connotation) of a term represents:",
        options: ["The total number of geographical areas where the term is used", "The internal characteristics, qualities, or attributes shared by all things denoted by the term", "The historical timeline of when the term was invented", "The mathematical validity of the phrase"],
        correct: 1,
        topic: "Definition and Language",
        explanation: "The intension (or connotation) of a term is the set of attributes, properties, or characteristics that define the meaning of the term — the qualities that something must possess to fall under the term. For example, the intension of 'dog' includes: being an animal, being a mammal, having four legs, barking, etc. Intension is about meaning — what properties define membership in the class. The inverse relationship: adding more attributes to the intension (narrowing meaning) reduces the extension (fewer things qualify)."
    },
    {
        id: 60,
        question: "When an arguer shifts from a precise definition of a word to a highly emotionally charged definition to bias an audience, they are using a:",
        options: ["Lexical definition", "Persuasive definition", "Stipulative definition", "Theoretical definition"],
        correct: 1,
        topic: "Definition and Language",
        explanation: "A persuasive definition is one that uses emotionally charged or evaluatively loaded language to influence attitudes toward the subject being defined, rather than simply clarifying meaning. Example: Defining 'abortion' as 'the murder of an innocent child' or 'a woman's right to control her own body' — both embed a moral stance into the definition itself. Persuasive definitions are a form of rhetorical manipulation that disguises advocacy as neutral definition, making them a subtle but powerful tool of propaganda."
    },
    {
        id: 61,
        question: "A definition that is explicitly introduced to assign a completely brand-new meaning to a newly coined term or symbol (such as inventing a new computer science technical acronym) is called a:",
        options: ["Lexical definition", "Precising definition", "Stipulating/Stipulative definition", "Theoretical definition"],
        correct: 2,
        topic: "Definition and Language",
        explanation: "A stipulative definition deliberately assigns a new, specific meaning to a term — either a brand-new word or an existing word being used in a specialized way. The definer has complete freedom to stipulate any meaning they choose. Example: 'Let X denote the set of all prime numbers greater than 100.' Stipulative definitions cannot be true or false — they are simply adopted for a specific purpose. They are common in mathematics, law, science, and technical fields where precision requires specially defined terms."
    },
    {
        id: 62,
        question: "Which type of logical definition aims at reducing the vagueness of an existing word by providing strict, borderline criteria for its dynamic application (e.g., defining 'poverty line' by a specific income threshold)?",
        options: ["Lexical definition", "Precising definition", "Stipulative definition", "Persuasive definition"],
        correct: 1,
        topic: "Definition and Language",
        explanation: "A precising definition reduces the vagueness of an existing term by specifying its application more precisely than ordinary usage allows. Unlike a stipulative definition (which creates new meaning), a precising definition sharpens an already-existing meaning for a specific context. Example: Defining 'adult' as 'any person aged 18 or above' for legal purposes eliminates borderline cases. Precising definitions are essential in law, medicine, and policy-making where vague ordinary language creates ambiguity."
    },
    {
        id: 63,
        question: "When a philosopher constructs a definition based on a comprehensive scientific or philosophical school of thought — such as defining 'Force' according to Newtonian physics principles — they are utilizing a:",
        options: ["Theoretical definition", "Lexical definition", "Persuasive definition", "Stipulative definition"],
        correct: 0,
        topic: "Definition and Language",
        explanation: "A theoretical definition defines a term by embedding it within a broader theoretical framework, capturing its role and meaning within that theory. Example: Defining 'force' as 'mass times acceleration' (F=ma) only makes sense within Newtonian mechanics. Theoretical definitions are not arbitrary — they can be evaluated as more or less adequate depending on how well they capture the theoretical relationships of the concept. They are central to scientific and philosophical inquiry."
    },
    {
        id: 64,
        question: "In traditional logic class reasoning, the 'Intension' and 'Extension' of a term are related in which specific manner when structured hierarchically?",
        options: ["They increase in direct proportion to one another", "As the intension of a term increases, its extension systematically decreases", "They have no structural relationship whatsoever", "Extension always remains completely zero in deductive arguments"],
        correct: 1,
        topic: "Definition and Language",
        explanation: "The inverse relationship between intension and extension is a foundational principle of traditional logic. As you add more defining attributes to a term (increasing intension/narrowing meaning), fewer objects qualify (decreasing extension). Example: 'Animal' has low intension but vast extension; 'Mammal' adds attributes, reducing extension; 'Dog' adds more, reducing further; 'German Shepherd' has the highest intension and smallest extension. Moving up the hierarchy broadens extension while reducing intension."
    },
    {
        id: 65,
        question: "The fundamental philosophical method deployed by Socrates, which involves a dynamic, cooperative question-and-answer dialogue to stimulate critical thinking and expose logical contradictions, is called the:",
        options: ["Aristotelian Categorical Deductive Method", "Socratic Method (Dialectic)", "Scholastic Syllogistic Matrix", "Empirical Observational Audit"],
        correct: 1,
        topic: "Introduction to Philosophy",
        explanation: "The Socratic Method (also called elenchus or dialectic) is the philosophical technique attributed to Socrates in Plato's dialogues. It involves a series of probing questions designed to expose contradictions in an interlocutor's beliefs, stimulate critical self-examination, and guide the conversation toward deeper understanding. Rather than lecturing, Socrates claimed to know nothing and used questions to draw out knowledge. This method remains foundational to philosophical inquiry, legal education, and critical thinking pedagogy."
    },
    {
        id: 66,
        question: "If a logic student formalizes a compound proposition using truth-functional logic symbols and discovers it is false under some conditions but true under others, the statement is classified as a:",
        options: ["Tautology", "Contradiction", "Contingency", "Valid Syllogism"],
        correct: 2,
        topic: "Introduction to Logic",
        explanation: "A contingent proposition is one whose truth value depends on the actual facts — it is true under some assignments of truth values to its component variables and false under others. Unlike tautologies (always true) and contradictions (always false), contingencies could go either way. Most meaningful empirical statements are contingencies: 'It is raining today' is true or false depending on actual weather conditions, not logical structure alone."
    },
    {
        id: 67,
        question: "The specific formal fallacy committed when an arguer switches the placement of terms in a conditional statement's valid rule, resulting in the structure: If P, then Q; Not-P; Therefore, Not-Q — is called:",
        options: ["Affirming the Consequent", "Denying the Antecedent", "Disjunctive Fallacy", "Undistributed Middle"],
        correct: 1,
        topic: "Formal Fallacies",
        explanation: "Denying the Antecedent is the formal fallacy: If P then Q; not-P; therefore not-Q. It is invalid because the conditional only establishes P as a sufficient condition for Q — not as the only condition. Q may be true for other reasons entirely. Example: 'If it rains, the ground is wet; it is not raining; therefore the ground is not wet' — but a sprinkler could have made the ground wet. The fallacy confuses sufficient conditions with necessary conditions."
    },
    {
        id: 68,
        question: "The specific formal fallacy committed when an arguer structures a conditional deduction as: If P, then Q; Q; Therefore, P — is called:",
        options: ["Denying the Antecedent", "Affirming the Consequent", "False Analogy Fallacy", "Amphiboly"],
        correct: 1,
        topic: "Formal Fallacies",
        explanation: "Affirming the Consequent is the formal fallacy: If P then Q; Q is true; therefore P is true. It is invalid because the consequent Q may be true for reasons other than P. The conditional only guarantees Q given P — not that P is the only cause of Q. Example: 'If you are a doctor, you are educated; you are educated; therefore you are a doctor' — education does not uniquely identify doctors. This fallacy is extremely common in everyday causal reasoning."
    },
    {
        id: 69,
        question: "In categorical propositions, the word 'Some' is logically interpreted to mean:",
        options: ["Absolutely every single member of a class", "At least one member of a class exists", "Exactly half of a demographic group", "Zero members of a structural class"],
        correct: 1,
        topic: "Categorical Propositions",
        explanation: "In traditional logic, 'Some' is the particular quantifier meaning 'at least one' — it asserts the existence of at least one member of the subject class that has (or lacks) the predicate property. It does not mean 'most,' 'many,' or 'exactly half.' 'Some students are intelligent' means at least one student is intelligent. This existential import — the claim that at least one such thing exists — distinguishes particular propositions (I and O) from universal propositions (A and E)."
    },
    {
        id: 70,
        question: "An argument form that consists of a conditional statement followed by the negation of its consequent, validly concluding the negation of its antecedent, is called:",
        options: ["Modus Ponens", "Modus Tollens", "Hypothetical Syllogism", "Disjunctive Syllogism"],
        correct: 1,
        topic: "Valid Argument Forms",
        explanation: "Modus Tollens (Latin: 'mode of denying') has the form: If P then Q; not-Q; therefore not-P. It is valid because if the conditional holds and the consequent is false, the antecedent must also be false — otherwise the conditional would be violated. This form is the logical foundation of scientific falsification: if a theory predicts an observation and the observation fails to occur, the theory is falsified. Karl Popper's philosophy of science is built on this logical structure."
    },
    {
        id: 71,
        question: "The fallacy of 'Hasty Generalization' is primarily an error found within which type of human reasoning model?",
        options: ["Pure Deductive formal proofs", "Inductive general argument structures", "Strict Bi-conditional truth tables", "Tautological identity derivations"],
        correct: 1,
        topic: "Fallacies",
        explanation: "Hasty Generalization is an inductive fallacy because it involves drawing a general conclusion from an insufficient or unrepresentative sample — a core error in inductive reasoning. Deductive arguments cannot commit this fallacy because their conclusions follow necessarily from premises regardless of sample size. Inductive arguments, which move from specific observations to general conclusions, require adequate, representative samples to be strong. Generalizing from too few cases produces a weak inductive argument."
    },
    {
        id: 72,
        question: "When evaluating the truth-value of a standard symbolic conjunction (P ∧ Q), the compound statement is declared false if:",
        options: ["Both component conjuncts are true", "At least one of the component conjuncts is false", "The antecedent is completely affirmed", "The copula link remains unquantified"],
        correct: 1,
        topic: "Compound Propositions",
        explanation: "A conjunction (P ∧ Q) is false whenever at least one conjunct is false — it requires both conjuncts to be true to be true itself. Truth table: T∧T=T; T∧F=F; F∧T=F; F∧F=F. This strict truth condition reflects the ordinary meaning of 'and' — if you claim 'P and Q' and either P or Q is false, your compound claim is false. The conjunction is the most demanding compound operator in terms of conditions required for truth."
    },
    {
        id: 73,
        question: "A standard material implication conditional statement (P → Q) is considered logically false in truth table evaluations only when the:",
        options: ["Antecedent is true and the Consequent is false", "Antecedent is false and the Consequent is true", "Both the antecedent and consequent are completely false", "Both components are true simultaneously"],
        correct: 0,
        topic: "Compound Propositions",
        explanation: "The material conditional (P → Q) is false only when the antecedent P is true and the consequent Q is false — this is the one combination that violates the conditional's promise. Truth table: T→T=T; T→F=F; F→T=T; F→F=T. The cases where P is false are both true (vacuously true) because a false antecedent cannot violate the conditional. This truth table definition captures the logical minimum of what a conditional guarantees: if P is true, Q must be true."
    },
    {
        id: 74,
        question: "The philosophical branch of 'Ethics' is systematically distinguished from the branch of 'Epistemology' because ethics specifically investigates:",
        options: ["The mechanisms of human sense perception and memory validation", "Moral principles, values, right versus wrong behaviors, and obligations", "The structural validity of compound mathematical algorithms", "The fundamental atomic properties of cosmological reality"],
        correct: 1,
        topic: "Branches of Philosophy",
        explanation: "Ethics (moral philosophy) is the branch of philosophy that investigates moral principles, values, and standards of right and wrong conduct. It asks: What is good? What is right? What are our moral obligations? How should we live? This distinguishes it from epistemology (which investigates knowledge and justified belief), metaphysics (which investigates the nature of reality), and logic (which investigates valid reasoning). The three major ethical theories are utilitarianism, deontology, and virtue ethics."
    },
    {
        id: 75,
        question: "Which of the following describes a formal structural condition where a deductive argument can have a true conclusion but still be evaluated as completely 'Invalid'?",
        options: ["When it is a sound argument", "When the conclusion does not logically follow from the structural premises, despite both being factually true by coincidence", "When it contains a validated Modus Ponens sequence", "When the universal negative quantifier is applied perfectly"],
        correct: 1,
        topic: "Validity and Soundness",
        explanation: "An argument can have a true conclusion and still be invalid if the conclusion does not follow logically from the premises — the true conclusion is reached by coincidence, not by valid inference. Example: 'All fish live in water; sharks live in water; therefore sharks are fish' — the conclusion happens to be true, but the argument form is invalid (it commits the fallacy of the undistributed middle). Validity is about the logical relationship between premises and conclusion, not the truth of the conclusion alone."
    },
    {
        id: 76,
        question: "The logical concept of a 'Counterexample' is utilized during argument analysis to explicitly demonstrate that a deductive argument structure is:",
        options: ["Structurally Sound", "Invalid (by showing that true premises can lead to a false conclusion under the same pattern)", "A perfect Tautology", "An inductive generalization"],
        correct: 1,
        topic: "Validity and Soundness",
        explanation: "A counterexample is a specific case that has the same argument form as the argument being tested, but with true premises and a false conclusion. Finding even one counterexample proves the argument form is invalid — because a valid argument form cannot have true premises and a false conclusion under any substitution. Counterexamples are the standard method for demonstrating invalidity in logic. They show that the conclusion does not follow necessarily from the premises by exhibiting a case where it fails."
    },
    {
        id: 77,
        question: "The philosophical position known as 'Logical Positivism' asserts that a statement is only cognitively meaningful if it is either logically tautological or:",
        options: ["Culturally traditional", "Empirically verifiable through observation or scientific test", "Derived via ancient spiritual meditation", "Emotionally persuasive to a massive audience"],
        correct: 1,
        topic: "Introduction to Philosophy",
        explanation: "Logical Positivism, developed by the Vienna Circle in the early 20th century (Schlick, Carnap, Ayer), holds that a statement is cognitively meaningful only if it is either analytically true (a tautology, true by definition) or empirically verifiable (testable through observation). Statements that fail both criteria — including most metaphysical, theological, and ethical claims — are dismissed as cognitively meaningless (neither true nor false, just empty). A.J. Ayer's 'Language, Truth and Logic' (1936) is the classic English statement of this position."
    },
    {
        id: 78,
        question: "When an arguer attempts to defend their own wrongful action by pointing out that their opponent also committed the exact same wrongful action, they commit a specific sub-type of the ad hominem fallacy known as:",
        options: ["Tu Quoque ('You too' fallacy)", "Circumstantial Ad Hominem", "Poisoning the Well", "Genetic Fallacy"],
        correct: 0,
        topic: "Fallacies",
        explanation: "Tu Quoque (Latin: 'you too' or 'you also') is a sub-type of ad hominem that deflects criticism by pointing out that the critic has committed the same offense. Example: 'You say I shouldn't smoke, but you smoke too!' Even if the accusation is true, it is logically irrelevant — the critic's behavior does not affect the validity of their argument. Two wrongs do not make a right. Tu Quoque avoids engaging with the substance of the criticism by redirecting attention to the critic's conduct."
    },
    {
        id: 79,
        question: "The logical operation of 'Negation' (represented by symbols like ~ or ¬) functions by:",
        options: ["Joining two separate propositions into a single disjunction", "Reversing the truth-value of a given proposition completely", "Validating a faulty hypothetical syllogism chain", "Expanding the physical extension of an index term"],
        correct: 1,
        topic: "Compound Propositions",
        explanation: "Negation (~P or ¬P) is the logical operation that reverses the truth value of a proposition: if P is true, ~P is false; if P is false, ~P is true. It is the simplest logical operator, operating on a single proposition rather than connecting two. Negation corresponds to the ordinary language words 'not,' 'it is not the case that,' and 'it is false that.' In truth tables, negation simply flips T to F and F to T, making it the foundation of all more complex logical operations."
    },
    {
        id: 80,
        question: "In the study of definitions, a definition that records the standard, conventional meaning of a word as it is actually used by speakers of a language (the dictionary definition) is termed a:",
        options: ["Stipulative definition", "Lexical definition", "Precising definition", "Persuasive definition"],
        correct: 1,
        topic: "Definition and Language",
        explanation: "A lexical definition reports the conventional meaning of a word as it is actually used in a language community — it is the type of definition found in dictionaries. Unlike stipulative definitions (which create new meanings), lexical definitions can be evaluated as correct or incorrect based on actual linguistic usage. They are descriptive rather than prescriptive. A lexical definition of 'bachelor' as 'an unmarried adult male' accurately captures how the word is conventionally used in English."
    },
    {
        id: 81,
        question: "The logical process of 'Conversion' is a form of immediate inference executed by switching the absolute position of the:",
        options: ["Quantifier and the copula", "Subject term and the predicate term", "Antecedent and the consequent", "Premises and the conclusion"],
        correct: 1,
        topic: "Immediate Inference",
        explanation: "Conversion is an immediate inference that produces a new proposition by interchanging the subject and predicate terms of the original proposition. Example: 'No cats are dogs' converts to 'No dogs are cats.' Not all propositions convert validly — E and I propositions convert simply (with full validity), while A propositions convert only by limitation (to an I proposition), and O propositions cannot be validly converted at all. Conversion preserves the quality of the original proposition."
    },
    {
        id: 82,
        question: "According to the valid structural rules of immediate inference, a universal negative categorical proposition (E: 'No birds are dogs') can be validly converted to:",
        options: ["'Some birds are not dogs'", "'No dogs are birds'", "'All dogs are birds'", "'Some dogs are birds'"],
        correct: 1,
        topic: "Immediate Inference",
        explanation: "E propositions (universal negatives: 'No S is P') convert simply and validly to 'No P is S' — the subject and predicate are simply switched. 'No birds are dogs' validly converts to 'No dogs are birds.' This works because E propositions distribute both terms, so switching them preserves the logical content. The converted proposition has the same truth value as the original. This is one of the most straightforward valid conversions in traditional logic."
    },
    {
        id: 83,
        question: "The branch of philosophy that deals with the principles and rules of valid thinking, separating correct reasoning models from incorrect ones, is:",
        options: ["Aesthetics", "Logic", "Cosmology", "Theology"],
        correct: 1,
        topic: "Branches of Philosophy",
        explanation: "Logic is the branch of philosophy concerned with the principles of valid reasoning and correct inference. It provides the formal rules and criteria for distinguishing good arguments from bad ones, valid inferences from invalid ones, and sound reasoning from fallacious reasoning. Logic is foundational to all other branches of philosophy and to rational inquiry generally — without logic, no discipline could evaluate the quality of its own arguments and conclusions."
    },
    {
        id: 84,
        question: "In formal categorical propositions, the structural concept of 'Distribution' refers to whether a proposition:",
        options: ["Is distributed to a massive public audience", "Makes an assertion about every single member of the class denoted by a specific term", "Uses an inclusive or exclusive disjunctive operator", "Can be verified as a contingent truth table variable"],
        correct: 1,
        topic: "Categorical Propositions",
        explanation: "Distribution is a technical logical concept describing whether a categorical proposition makes a claim about all members of the class denoted by a term. A term is distributed if the proposition says something about every member of that class. Distribution is critical for evaluating syllogistic validity — the rules of the syllogism specify which terms must be distributed in the premises for the argument to be valid. Undistributed terms lead to formal fallacies."
    },
    {
        id: 85,
        question: "The universal affirmative proposition (A: 'All S is P') distributes which of its constituent terms?",
        options: ["The predicate term only", "The subject term only", "Both the subject and predicate terms simultaneously", "Neither the subject nor the predicate term"],
        correct: 1,
        topic: "Categorical Propositions",
        explanation: "In an A proposition ('All S is P'), only the subject term S is distributed — the proposition makes a claim about every member of S. The predicate term P is not distributed because the proposition does not claim that every P is S (some P may not be S). Example: 'All dogs are animals' — we are saying something about every dog (S distributed), but not about every animal (P undistributed, since not all animals are dogs). This asymmetry is crucial for syllogistic validity."
    },
    {
        id: 86,
        question: "Conversely, the universal negative proposition (E: 'No S is P') distributes:",
        options: ["Only the subject term", "Only the predicate term", "Both the subject and the predicate terms", "Neither of the structural terms"],
        correct: 2,
        topic: "Categorical Propositions",
        explanation: "In an E proposition ('No S is P'), both the subject term S and the predicate term P are distributed. The proposition makes a claim about every member of S (no S is P — applies to all S) and also about every member of P (since 'No S is P' entails 'No P is S' by simple conversion — applies to all P). This total distribution of both terms is why E propositions convert simply and validly, and why they are the most informationally rich of the four categorical proposition types."
    },
    {
        id: 87,
        question: "In standard syllogistic rules, the specific term that appears in both premises but must never be allowed to appear in the final conclusion is called the:",
        options: ["Major term", "Minor term", "Middle term", "Copula link"],
        correct: 2,
        topic: "Syllogistic Logic",
        explanation: "The middle term is the term that appears in both premises of a categorical syllogism but is absent from the conclusion. Its function is to mediate the logical connection between the major and minor terms — it is the bridge that allows the conclusion to be drawn. Example: In 'All men are mortal; Socrates is a man; therefore Socrates is mortal,' the middle term is 'man.' If the middle term appears in the conclusion, the syllogism is structurally malformed."
    },
    {
        id: 88,
        question: "The structural component of a syllogism that contains the predicate of the conclusion is formally defined as the:",
        options: ["Minor premise", "Major premise", "Middle argument", "Tautological antecedent"],
        correct: 1,
        topic: "Syllogistic Logic",
        explanation: "The major premise is the premise that contains the major term — the term that serves as the predicate of the conclusion. It is typically the first premise stated in a standard-form syllogism. Example: In 'All men are mortal (major premise); Socrates is a man (minor premise); therefore Socrates is mortal,' the major premise contains 'mortal' which is the predicate of the conclusion. The major premise establishes the general principle from which the conclusion is derived."
    },
    {
        id: 89,
        question: "Conversely, the structural premise of a syllogism that houses the subject term of the conclusion is the:",
        options: ["Major premise", "Minor premise", "Consequent matrix", "Disjunctive disjunct"],
        correct: 1,
        topic: "Syllogistic Logic",
        explanation: "The minor premise is the premise that contains the minor term — the term that serves as the subject of the conclusion. It is typically the second premise in a standard-form syllogism. Example: In 'All men are mortal; Socrates is a man (minor premise); therefore Socrates is mortal,' the minor premise contains 'Socrates' which is the subject of the conclusion. The minor premise applies the general principle of the major premise to a specific case."
    },
    {
        id: 90,
        question: "If a categorical syllogism contains a middle term that is not distributed in at least one of the premises, it violates formal rules and commits the fallacy of the:",
        options: ["Illicit Major", "Illicit Minor", "Undistributed Middle", "Exclusive Premises"],
        correct: 2,
        topic: "Syllogistic Logic",
        explanation: "The Fallacy of the Undistributed Middle occurs when the middle term is not distributed in at least one premise, meaning the premises never refer to all members of the middle term's class. Without at least one universal reference to the middle term, the two premises may be talking about different subsets of the middle class, making the logical connection between major and minor terms invalid. Example: 'All dogs are animals; all cats are animals; therefore all cats are dogs' — 'animals' (middle term) is undistributed in both premises."
    },
    {
        id: 91,
        question: "When a syllogism draws a conclusion from two completely negative premises (E or O propositions), it commits the formal fallacy of:",
        options: ["Affirmative conclusion from a negative premise", "Exclusive Premises / Two Negative Premises", "Existential Fallacy", "Four Terms (Quaternio Terminorum)"],
        correct: 1,
        topic: "Syllogistic Logic",
        explanation: "The Fallacy of Exclusive Premises (Two Negative Premises) occurs when both premises of a syllogism are negative (E or O propositions). From two negative premises, no valid conclusion can be drawn because both premises exclude their terms from each other, making it impossible to establish any positive or negative relationship between the major and minor terms. A valid syllogism requires at least one affirmative premise to establish the necessary logical connection."
    },
    {
        id: 92,
        question: "The formal fallacy of Quaternio Terminorum occurs when a standard syllogism accidentally incorporates:",
        options: ["Exactly two valid propositions", "Four distinct logical terms instead of the strictly required three", "Zero universal quantifiers", "Two conditional antecedents"],
        correct: 1,
        topic: "Syllogistic Logic",
        explanation: "Quaternio Terminorum (Latin: 'four terms') is the fallacy of having four distinct terms in a syllogism instead of the required three (major, minor, and middle). A standard categorical syllogism requires exactly three terms, each appearing exactly twice. Four terms typically arise from equivocation — the middle term shifts meaning between the two premises, effectively creating two different terms. Without a genuine shared middle term, no logical connection between the major and minor terms can be established."
    },
    {
        id: 93,
        question: "The logical operator 'Negation' possesses a truth-functional nature which means that if a proposition P is true, its negation (~P) must be:",
        options: ["True as well", "False", "Contingent", "Tautological"],
        correct: 1,
        topic: "Compound Propositions",
        explanation: "Negation is truth-functional: the truth value of ~P is completely determined by the truth value of P. If P is true, ~P is false; if P is false, ~P is true. This is the complete truth table for negation. The truth-functional nature means that knowing P's truth value is sufficient to determine ~P's truth value — no other information is needed. This simple but foundational operator underlies all more complex logical operations and is essential for constructing truth tables."
    },
    {
        id: 94,
        question: "The ancient Greek philosopher who is universally celebrated as the historical founding father of formal, traditional, and categorical logic is:",
        options: ["Plato", "Socrates", "Aristotle", "René Descartes"],
        correct: 2,
        topic: "Introduction to Logic",
        explanation: "Aristotle (384–322 BCE) is universally recognized as the founder of formal logic. His collection of logical works, known as the Organon, systematically developed the theory of categorical propositions, the syllogism, the laws of thought, and the principles of valid inference. Aristotle's logical system dominated Western thought for over two millennia. While Plato and Socrates engaged in philosophical argumentation, it was Aristotle who first formalized the rules of valid reasoning into a systematic logical theory."
    },
    {
        id: 95,
        question: "In symbolic logic notation, if you have a disjunction (P ∨ Q) where P is false and Q is false, the absolute resulting truth value of the compound statement is:",
        options: ["True", "False", "Undetermined", "Bi-conditional"],
        correct: 1,
        topic: "Compound Propositions",
        explanation: "An inclusive disjunction (P ∨ Q) is false only when both disjuncts are simultaneously false. Truth table: T∨T=T; T∨F=T; F∨T=T; F∨F=F. When P is false and Q is false, the disjunction is false — the only case where a disjunction fails. This reflects ordinary language: 'Either it is raining or it is sunny' is false only if neither condition holds. The disjunction is the most permissive compound operator, requiring only one true disjunct to be true."
    },
    {
        id: 96,
        question: "The specific sub-field of logic that uses artificial symbolic language, truth tables, and mathematical notations to calculate the absolute structural validity of complex arguments is:",
        options: ["Informal Logic", "Symbolic / Formal Logic", "Rhetorical Dialectic", "Traditional Customary Hermeneutics"],
        correct: 1,
        topic: "Introduction to Logic",
        explanation: "Symbolic (or Formal) Logic replaces ordinary language with precise artificial symbols and mathematical notation to eliminate ambiguity and enable rigorous mechanical evaluation of argument validity. It includes propositional logic (using symbols like ∧, ∨, →, ¬) and predicate logic (adding quantifiers ∀ and ∃). Truth tables provide a systematic method for evaluating all possible truth value combinations. Symbolic logic, developed by Frege, Russell, and Whitehead, transformed logic from a philosophical discipline into a mathematical one."
    },
    {
        id: 97,
        question: "When a proposition's truth value depends entirely on empirical real-world observations rather than its structural form, it is classified as a:",
        options: ["Tautology", "Contradiction", "Contingent statement", "Logical axiom"],
        correct: 2,
        topic: "Introduction to Logic",
        explanation: "A contingent statement is one whose truth value is not determined by its logical structure alone but depends on empirical facts about the world. It is true in some possible situations and false in others. Example: 'It is raining in Lagos today' is contingent — its truth depends on actual weather conditions, not on logical necessity. Most meaningful empirical claims are contingent. This contrasts with tautologies (true by structure alone) and contradictions (false by structure alone)."
    },
    {
        id: 98,
        question: "The epistemological position that claims humans possess certain concepts or ideas in their minds from birth, independent of sensory data, is called the doctrine of:",
        options: ["Empirical skepticism", "Innate Ideas", "Pragmatic utilitarianism", "Relativist ethics"],
        correct: 1,
        topic: "Epistemology",
        explanation: "The doctrine of Innate Ideas holds that certain concepts, principles, or knowledge are present in the mind from birth, prior to and independent of sensory experience. Rationalists like Descartes, Leibniz, and Plato (with his theory of recollection) defended versions of this doctrine. Descartes argued that ideas like God, infinity, and mathematical truths are innate. This doctrine directly opposes Locke's empiricist Tabula Rasa — the claim that the mind begins as a blank slate with no pre-existing content."
    },
    {
        id: 99,
        question: "The ethical position that completely denies the existence of any objective, universal moral truths, claiming morals are entirely subjective or relative to specific cultures, is:",
        options: ["Moral Absolutism", "Moral Relativism", "Deontology", "Objectivism"],
        correct: 1,
        topic: "Ethical Theories",
        explanation: "Moral Relativism is the metaethical position that moral judgments are not objectively true or false but are relative to the cultural, social, or individual context in which they are made. What is morally right in one culture may be wrong in another, and neither judgment is objectively correct. This contrasts with Moral Absolutism (some moral rules are universally binding regardless of culture) and Deontology (which posits universal moral duties). Moral relativism raises profound challenges for cross-cultural ethical evaluation and human rights discourse."
    },
    {
        id: 100,
        question: "In formal logic truth tables, a matrix row that maps out a situation where the structural premises are completely true but the conclusion is false serves as absolute proof that the argument is:",
        options: ["Sound", "Invalid", "Valid", "A Tautology"],
        correct: 1,
        topic: "Validity and Soundness",
        explanation: "A truth table row with all premises true and the conclusion false is the definitive proof of invalidity. By definition, a valid argument is one where it is impossible for all premises to be true and the conclusion false simultaneously. Finding even one such row — a counterexample row — in the truth table proves the argument is invalid. This is the standard method for testing validity in propositional logic: construct the full truth table and check whether any row has true premises and a false conclusion."
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = GST203_QUESTIONS;
}
