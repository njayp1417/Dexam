const GST202_QUESTIONS = [
    {
        id: 1,
        question: "The conceptual definition of 'Conflict' in peace studies is best described as:",
        options: ["A completely avoidable psychological disorder in individuals", "A natural, inevitable condition of human interaction arising from perceived or real incompatibilities of goals, values, or resources", "An inherently negative phenomenon that always results in physical violence", "A purely military standoff between sovereign states"],
        correct: 1,
        topic: "Nature of Conflict",
        explanation: "Conflict in peace studies is understood as a natural and inevitable feature of human social life, arising whenever two or more parties perceive their goals, values, needs, or resources to be incompatible. This definition is deliberately broad — conflict is not inherently negative or violent. It can be constructive when managed well, driving social change and innovation. The key word is 'perceived' — conflict can arise from misunderstandings even when no real incompatibility exists. Peace studies focuses on transforming destructive conflict into constructive engagement."
    },
    {
        id: 2,
        question: "According to pioneer peace researcher Johan Galtung, 'Positive Peace' is defined as not just the absence of visible physical violence, but also:",
        options: ["The total elimination of political opposition parties", "The presence of social justice, structural equality, and the removal of institutionalized harms", "A state of constant military readiness to suppress riots", "The enforcement of strict censorship laws to avoid disagreement"],
        correct: 1,
        topic: "Concepts of Peace",
        explanation: "Johan Galtung, the founder of peace studies as an academic discipline, introduced the distinction between positive and negative peace. Positive peace goes beyond the mere absence of war to encompass the presence of conditions that enable human flourishing: social justice, equitable distribution of resources, respect for human rights, functioning institutions, and the elimination of structural and cultural violence. Positive peace is the ultimate goal of peace studies — a society where people can develop their full potential without fear or deprivation."
    },
    {
        id: 3,
        question: "Conversely, 'Negative Peace' is technically defined within conflict analysis frameworks as:",
        options: ["A situation where social justice is perfectly achieved but people feel unhappy", "The mere absence of active, direct physical violence or warfare", "The breakdown of all diplomatic communication channels", "A peace agreement signed under duress or threat"],
        correct: 1,
        topic: "Concepts of Peace",
        explanation: "Negative peace refers simply to the absence of direct, visible physical violence or armed conflict — a ceasefire, the end of shooting, the silence of guns. It is 'negative' not because it is bad, but because it is defined by the absence of something (violence) rather than the presence of positive conditions. A society can have negative peace while still suffering from poverty, discrimination, and structural injustice. Galtung argued that negative peace alone is insufficient — sustainable peace requires the positive conditions of justice and equality."
    },
    {
        id: 4,
        question: "Which type of violence, according to Johan Galtung's Conflict Triangle, is built into the social, economic, and political systems of a society, leading to unequal life chances, systemic poverty, and discrimination?",
        options: ["Direct Violence", "Structural Violence", "Cultural Violence", "Psychological Violence"],
        correct: 1,
        topic: "Types of Violence",
        explanation: "Structural violence, a concept developed by Johan Galtung, refers to harm caused not by a specific individual's actions but by the organization of society itself — its economic systems, political institutions, and social structures. When people die of preventable diseases because they cannot afford healthcare, or are denied opportunities because of their ethnicity or gender, structural violence is at work. It is invisible compared to direct violence but often causes more suffering. Galtung's Conflict Triangle places structural violence alongside direct and cultural violence as the three interconnected forms of violence."
    },
    {
        id: 5,
        question: "When social religious beliefs, ideologies, or language are utilized to legitimize, justify, or normalize direct and structural violence, it is classified as:",
        options: ["Physical Violence", "Cultural Violence", "Epistemological Violence", "Domestic Violence"],
        correct: 1,
        topic: "Types of Violence",
        explanation: "Cultural violence refers to aspects of culture — religion, ideology, language, art, science — that are used to legitimize direct or structural violence, making it appear acceptable or even righteous. Examples include religious doctrines used to justify holy wars, nationalist ideologies used to dehumanize minorities, or cultural norms that normalize domestic violence. Cultural violence is the third element of Galtung's Conflict Triangle. It is the most insidious form because it operates at the level of values and beliefs, making people accept violence as natural or deserved."
    },
    {
        id: 6,
        question: "The standard linear progression of a conflict's life cycle generally moves through which sequence of operational phases?",
        options: ["Escalation → De-escalation → Latent → Crisis", "Latent (Hidden) → Escalation → Crisis → De-escalation / Resolution", "Resolution → Crisis → Latent → Trigger Event", "Stagnation → Outbreak → Compromise → Latent"],
        correct: 1,
        topic: "Conflict Dynamics",
        explanation: "The conflict life cycle model describes how conflicts typically evolve through predictable stages. In the Latent phase, underlying tensions exist but are not yet openly expressed. A trigger event moves the conflict into the Escalation phase, where tensions intensify and parties mobilize. The Crisis phase represents the peak of open confrontation. De-escalation occurs when parties step back from the brink, leading to Resolution or transformation. Understanding this cycle helps conflict analysts identify intervention points and design appropriate responses at each stage."
    },
    {
        id: 7,
        question: "The specific point or incident in a latent conflict environment that rapidly accelerates tension and moves the dispute into an active, open state of confrontation is known as the:",
        options: ["Resolution anchor", "Trigger mechanism / Event", "De-escalation pivot", "Stalemate baseline"],
        correct: 1,
        topic: "Conflict Dynamics",
        explanation: "A trigger event (or trigger mechanism) is the specific incident that ignites a latent conflict into open confrontation. It is rarely the root cause of the conflict — rather, it is the spark that sets off accumulated tensions. Famous examples include the assassination of Archduke Franz Ferdinand (triggering World War I) and the self-immolation of Mohamed Bouazizi (triggering the Arab Spring). Understanding triggers is important for conflict prevention — addressing root causes before a trigger event can prevent escalation to open violence."
    },
    {
        id: 8,
        question: "A situation in a conflict where neither party can win or advance their position, yet neither side is willing to back down, resulting in a costly standstill, is termed a:",
        options: ["Manifest compromise", "Hurting Stalemate", "Latent consensus", "Integrative peak"],
        correct: 1,
        topic: "Conflict Dynamics",
        explanation: "A Hurting Stalemate, a concept developed by conflict theorist I. William Zartman, describes a situation where both parties in a conflict are locked in a mutually painful deadlock — neither can win, but both continue to suffer the costs of continued conflict. Zartman argued that a hurting stalemate creates a 'ripe moment' for negotiation — when both sides recognize that continuing the conflict costs more than a negotiated settlement. This concept is central to understanding when parties become willing to negotiate and why timing matters in conflict resolution."
    },
    {
        id: 9,
        question: "In conflict mapping models, the Thomas-Kilmann conflict style characterized by high assertiveness and low cooperativeness, where one party pursues their own concerns at the expense of the other, is called:",
        options: ["Avoiding", "Competing / Dominating", "Accommodating", "Collaborating"],
        correct: 1,
        topic: "Conflict Management Styles",
        explanation: "The Thomas-Kilmann Conflict Mode Instrument identifies five conflict handling styles based on two dimensions: assertiveness (concern for self) and cooperativeness (concern for others). Competing (Dominating) is high assertiveness + low cooperativeness — a win-lose approach where one party pursues their goals at the other's expense. It is appropriate in emergencies requiring quick decisions or when defending against exploitation, but damages relationships when overused. It reflects a zero-sum view of conflict where one party's gain is the other's loss."
    },
    {
        id: 10,
        question: "Conversely, the conflict handling style that demonstrates high cooperativeness and low assertiveness, where an individual completely neglects their own concerns to satisfy the concerns of the other party, is:",
        options: ["Competing", "Accommodating / Yielding", "Collaborating", "Compromising"],
        correct: 1,
        topic: "Conflict Management Styles",
        explanation: "Accommodating (Yielding) is low assertiveness + high cooperativeness — the opposite of competing. The accommodating party neglects their own concerns to satisfy the other party's needs. It is appropriate when the issue matters more to the other party, when preserving the relationship is more important than the outcome, or when you realize you are wrong. However, chronic accommodation leads to resentment and exploitation. It reflects a lose-win approach that prioritizes harmony over personal interests."
    },
    {
        id: 11,
        question: "The 'Win-Win' conflict handling style that involves an active attempt to work with the other person to find an integrative solution that fully satisfies the concerns and goals of both parties is called:",
        options: ["Compromising", "Collaborating / Integrating", "Avoiding", "Competing"],
        correct: 1,
        topic: "Conflict Management Styles",
        explanation: "Collaborating (Integrating) is high assertiveness + high cooperativeness — the win-win approach. Both parties work together to find a creative solution that fully satisfies both sets of concerns, rather than splitting the difference. It requires open communication, trust, and time. Collaborating is ideal for complex issues where both parties' concerns are too important to compromise, and where a long-term relationship must be maintained. It is the most constructive conflict style but requires the most effort and is not always feasible."
    },
    {
        id: 12,
        question: "How does 'Compromising' differ from 'Collaborating' in conflict management theory?",
        options: ["Compromising results in direct violence, while collaborating is structural", "Compromising seeks a quick, intermediate position where both sides give up something, whereas Collaborating digs deeper to satisfy both parties completely without sacrifice", "Compromising is completely uncooperative, while collaborating is purely submissive", "There is no conceptual distinction between them"],
        correct: 1,
        topic: "Conflict Management Styles",
        explanation: "Compromising is moderate assertiveness + moderate cooperativeness — both parties give up something to reach a middle-ground agreement. It is faster than collaborating but produces a partial-win/partial-lose outcome. Collaborating seeks a creative solution where neither party sacrifices their core interests. The classic analogy: two people fighting over an orange — compromising splits it in half; collaborating discovers one wants the juice and the other wants the peel, so both get everything they need. Compromising is appropriate for time-pressured situations; collaborating for complex, high-stakes issues."
    },
    {
        id: 13,
        question: "An Alternative Dispute Resolution (ADR) mechanism where conflicting parties meet voluntarily to discuss their issues directly without any formal, third-party intervention to reach an agreement is:",
        options: ["Mediation", "Negotiation", "Arbitration", "Adjudication"],
        correct: 1,
        topic: "Conflict Resolution Mechanisms",
        explanation: "Negotiation is the most fundamental conflict resolution process — a direct, voluntary dialogue between disputing parties aimed at reaching a mutually acceptable agreement without third-party intervention. It is the foundation of all other ADR processes. Effective negotiation requires communication skills, understanding of interests (not just positions), creativity in generating options, and willingness to reach agreement. Fisher and Ury's 'Getting to Yes' introduced principled negotiation — focusing on interests rather than positions to achieve win-win outcomes."
    },
    {
        id: 14,
        question: "When two disputing parties invite an independent, neutral third party to assist them in facilitating communication and guiding them toward a mutually acceptable voluntary settlement, the process is called:",
        options: ["Adjudication", "Mediation", "Arbitration", "Litigation"],
        correct: 1,
        topic: "Conflict Resolution Mechanisms",
        explanation: "Mediation is a voluntary, confidential ADR process where a neutral third party (the mediator) facilitates communication between disputing parties to help them reach their own mutually acceptable agreement. The mediator has no decision-making power — they guide the process but the parties control the outcome. Mediation is faster, cheaper, and less adversarial than litigation. It preserves relationships and produces more durable agreements because parties own the solution. It is widely used in family disputes, commercial conflicts, labor relations, and international diplomacy."
    },
    {
        id: 15,
        question: "A fundamental operational rule of standard Mediation is that the neutral mediator:",
        options: ["Possesses the legal power to impose a binding decision on the parties", "Does not have the authority to impose a solution; rather, the parties retain full control over the final agreement", "Must act as an advocate for the weaker party in the dispute", "Is required to submit a report to a criminal court judge"],
        correct: 1,
        topic: "Conflict Resolution Mechanisms",
        explanation: "The defining characteristic of mediation is that the mediator has no authority to impose a decision. The mediator's role is purely facilitative — helping parties communicate, identify interests, generate options, and reach their own agreement. This distinguishes mediation from arbitration (where the arbitrator decides) and adjudication (where the judge decides). Party self-determination is the core principle of mediation. Because parties craft their own solution, mediated agreements tend to be more creative, more satisfying, and more durably complied with than imposed decisions."
    },
    {
        id: 16,
        question: "Which dispute resolution mechanism involves submitting a conflict to a neutral third party who listens to evidence from both sides and subsequently issues a formal, legally binding decision called an 'award'?",
        options: ["Mediation", "Arbitration", "Conciliation", "Negotiation"],
        correct: 1,
        topic: "Conflict Resolution Mechanisms",
        explanation: "Arbitration is an ADR process where parties submit their dispute to a neutral arbitrator (or panel) who hears evidence and arguments from both sides and issues a binding decision called an 'award.' Unlike mediation, the arbitrator decides the outcome — parties surrender decision-making control. Arbitration is faster and more private than court litigation but produces a binding result. It is widely used in commercial contracts, international trade disputes, labor relations, and sports governance. The New York Convention (1958) enables enforcement of arbitral awards in 170+ countries."
    },
    {
        id: 17,
        question: "The formal resolution of conflicts through a state-sponsored, adversarial court system before a legally appointed judge or magistrate is known as:",
        options: ["Alternative Dispute Resolution", "Adjudication / Litigation", "Peer Mediation", "Customary Fact-Finding"],
        correct: 1,
        topic: "Conflict Resolution Mechanisms",
        explanation: "Adjudication (litigation) is the formal legal process of resolving disputes through the court system. A judge or magistrate hears evidence, applies the law, and issues a binding judgment. It is adversarial — parties present opposing cases — and public. Adjudication provides authoritative, enforceable decisions backed by state power, making it essential for serious disputes involving rights violations or criminal conduct. However, it is expensive, slow, relationship-damaging, and inflexible compared to ADR methods. It is the last resort when other resolution mechanisms fail."
    },
    {
        id: 18,
        question: "Frustration-Aggression Theory, a popular psychological theory of conflict popularized by John Dollard, posits that violence and aggression occur when:",
        options: ["Individuals have too many economic resources", "Human beings are systematically blocked from achieving their targeted goals or fulfilling important desires", "People fully collaborate with state security forces", "Innate biological genetic mutations override normal logical behavior"],
        correct: 1,
        topic: "Theories of Conflict",
        explanation: "The Frustration-Aggression Theory, proposed by Dollard, Doob, Miller, Mowrer, and Sears (1939), posits that aggression is always a consequence of frustration, and frustration always leads to some form of aggression. When individuals or groups are blocked from achieving their goals — by poverty, discrimination, political exclusion, or unmet needs — the resulting frustration generates aggressive impulses. This theory has been applied to explain riots, revolutions, and ethnic violence. Leonard Berkowitz later refined it, arguing that frustration creates a readiness for aggression rather than aggression itself."
    },
    {
        id: 19,
        question: "Karl Marx's structural theory of conflict views social conflict as an inherent, inevitable struggle taking place within society driven primarily by:",
        options: ["Psychological differences between generational cohorts", "Economic class struggles over resource ownership between the bourgeoisie (owners) and the proletariat (workers)", "International border disputes caused by poor geographical mapping", "Religious misinterpretations of ancient textual scriptures"],
        correct: 1,
        topic: "Theories of Conflict",
        explanation: "Karl Marx's conflict theory views society as fundamentally divided by economic class interests. The bourgeoisie (capitalist class) own the means of production and exploit the proletariat (working class) who sell their labor. This structural inequality generates inevitable class conflict — the engine of historical change. Marx predicted that intensifying exploitation would eventually produce revolutionary consciousness among workers, leading to the overthrow of capitalism. Marxist conflict theory has profoundly influenced peace studies, particularly in analyzing structural violence and economic roots of political conflict."
    },
    {
        id: 20,
        question: "The analytical tool used by peace researchers to graphically depict the relationships between conflicting parties, their allies, interests, and power dynamics is called:",
        options: ["A Truth Table Matrix", "Conflict Mapping", "A Syllogistic Venn Layout", "An Extension Index Diagram"],
        correct: 1,
        topic: "Conflict Analysis Tools",
        explanation: "Conflict mapping is a visual analytical tool used by peace researchers and practitioners to systematically diagram the key elements of a conflict: the parties involved (primary, secondary, and interested parties), their relationships, interests, positions, power dynamics, and alliances. It provides a comprehensive overview of the conflict landscape, helping analysts identify root causes, stakeholders, and potential entry points for intervention. Conflict maps are essential for designing appropriate peacebuilding strategies and understanding the complex web of relationships in multi-party conflicts."
    },
    {
        id: 21,
        question: "A conflict resolution approach that focuses on addressing the deep-rooted, systemic causes of a dispute (such as inequality or lack of resources) rather than merely managing the symptoms is called:",
        options: ["Conflict Containment", "Conflict Transformation", "Conflict Suppression", "Conflict Avoidance"],
        correct: 1,
        topic: "Conflict Resolution Approaches",
        explanation: "Conflict transformation, associated with scholars like John Paul Lederach, goes beyond conflict resolution (settling the immediate dispute) or conflict management (controlling its effects) to address the deep structural, relational, and cultural roots of conflict. It seeks to transform the relationships, institutions, and systems that generate conflict into ones that sustain peace. Transformation acknowledges that some conflicts cannot simply be resolved — they must be fundamentally changed. It is a long-term, holistic approach that addresses inequality, injustice, and broken relationships."
    },
    {
        id: 22,
        question: "Which theory suggests that conflict is a product of social interaction, where individuals interpret situations differently based on their unique backgrounds, experiences, and cultural lenses?",
        options: ["Human Needs Theory", "Social Constructivism / Social-Psychological Theory", "Marxist Economic Theory", "Realistic Conflict Theory"],
        correct: 1,
        topic: "Theories of Conflict",
        explanation: "Social constructivism holds that conflict is not an objective reality but a social construction — it is created through human interaction, interpretation, and meaning-making. People in conflict are not responding to objective facts but to their subjective perceptions, shaped by their cultural backgrounds, past experiences, and social identities. This theory emphasizes that changing perceptions, narratives, and communication patterns can transform conflicts. It underpins dialogue-based peacebuilding approaches that focus on changing how parties see each other and the conflict."
    },
    {
        id: 23,
        question: "John Burton's 'Human Needs Theory' posits that protracted, unsolvable conflicts occur primarily because:",
        options: ["Parties are genetically predisposed to violence", "Fundamental human needs (such as identity, recognition, and security) are being denied or frustrated", "The government has too much money", "People do not attend enough religious services"],
        correct: 1,
        topic: "Theories of Conflict",
        explanation: "John Burton's Human Needs Theory argues that all humans have fundamental, non-negotiable needs — including identity, recognition, security, participation, and autonomy — that must be satisfied for psychological well-being. When these needs are systematically denied by social, political, or economic structures, people will fight to satisfy them regardless of the costs. Unlike interests (which can be traded), needs cannot be compromised. Burton argued that lasting conflict resolution requires identifying and addressing these underlying unmet needs, not just negotiating over positions."
    },
    {
        id: 24,
        question: "The process of 'Peacebuilding' involves long-term strategies aimed at:",
        options: ["Achieving a temporary military ceasefire", "Constructing a durable, sustainable peace and addressing the underlying causes of conflict through social, economic, and political reconstruction", "Forcibly removing all opposition leaders from the country", "Increasing the military budget to deter future attacks"],
        correct: 1,
        topic: "Peacebuilding",
        explanation: "Peacebuilding encompasses long-term strategies to create sustainable peace by addressing the root causes of conflict and building the institutions, relationships, and capacities needed to prevent its recurrence. It includes economic reconstruction, transitional justice, reconciliation programs, institutional reform, civil society development, and trauma healing. The UN Secretary-General's 1992 'Agenda for Peace' (Boutros-Ghali) distinguished peacebuilding from peacekeeping and peacemaking, establishing it as the long-term foundation for durable peace after conflict ends."
    },
    {
        id: 25,
        question: "In conflict studies, the 'Zero-Sum Game' describes a situation where:",
        options: ["Both parties gain simultaneously", "One party's gain is exactly equal to the other party's loss", "Both parties lose equally", "No conflict exists at all"],
        correct: 1,
        topic: "Conflict Dynamics",
        explanation: "A zero-sum game is a situation where the total gains and losses of all parties sum to zero — one party's gain is exactly offset by another's loss. Resources are fixed; if one party gets more, the other gets less. Zero-sum thinking drives competitive, win-lose conflict behavior and makes cooperation difficult. Many resource conflicts (land, water, oil) are perceived as zero-sum. However, peace studies emphasizes that many apparently zero-sum conflicts can be reframed as non-zero-sum through creative problem-solving that expands the available options."
    },
    {
        id: 26,
        question: "A 'Non-Zero-Sum' (or Integrative) conflict is one where:",
        options: ["It is impossible for anyone to win", "It is possible for both parties to gain or benefit, provided they cooperate to expand the available resources", "Only one person can survive", "The government decides the winner regardless of the facts"],
        correct: 1,
        topic: "Conflict Dynamics",
        explanation: "A non-zero-sum (positive-sum) situation is one where cooperation can produce outcomes where both parties gain — the total value available is not fixed but can be expanded through creative problem-solving. Trade relationships, joint ventures, and peace agreements are non-zero-sum: both parties benefit from cooperation more than from conflict. Reframing conflicts from zero-sum to non-zero-sum is a core skill in negotiation and peacebuilding. Fisher and Ury's principled negotiation focuses on identifying shared interests that enable non-zero-sum solutions."
    },
    {
        id: 27,
        question: "Which of the following is considered an 'Early Warning Sign' of an impending violent conflict in a community?",
        options: ["Increased participation in democratic elections", "Rapid increase in hate speech, dehumanizing propaganda, and ethnic polarization", "Rise in local market trade activities", "Frequent inter-community cultural exchange programs"],
        correct: 1,
        topic: "Conflict Prevention",
        explanation: "Early warning systems monitor indicators that signal rising conflict risk, enabling preventive action before violence erupts. Key warning signs include: escalating hate speech and dehumanizing language targeting specific groups, ethnic or religious polarization, political exclusion of minorities, arms proliferation, economic deterioration, displacement of populations, and breakdown of rule of law. Dehumanizing propaganda is particularly dangerous — it psychologically prepares populations for violence by portraying the 'other' as less than human, as seen in the Rwandan genocide (1994)."
    },
    {
        id: 28,
        question: "Peacekeeping is typically a function performed by the military or police forces to:",
        options: ["Permanently settle the political dispute", "Maintain a ceasefire or buffer zone to allow space for diplomatic efforts to take place", "Overthrow the existing government", "Build new schools and hospitals"],
        correct: 1,
        topic: "Peacebuilding",
        explanation: "Peacekeeping involves deploying military, police, and civilian personnel to conflict zones to monitor and maintain ceasefires, protect civilians, and create conditions for political solutions. UN peacekeeping operations are authorized by the Security Council and operate on three principles: consent of the parties, impartiality, and non-use of force except in self-defense. Peacekeeping does not resolve conflicts — it creates the space for peacemaking (diplomacy) and peacebuilding (long-term reconstruction) to occur. Over 70 UN peacekeeping operations have been deployed since 1948."
    },
    {
        id: 29,
        question: "'Peacemaking' is the diplomatic process of:",
        options: ["Rebuilding infrastructure after a war", "Bringing conflicting parties to the negotiating table to reach a voluntary agreement", "Punishing the losers of a war", "Training soldiers for combat"],
        correct: 1,
        topic: "Peacebuilding",
        explanation: "Peacemaking refers to diplomatic efforts to bring hostile parties to agreement, typically through negotiation, mediation, or other conflict resolution processes. It is the middle phase of the peace continuum: peacekeeping stops the fighting, peacemaking negotiates the settlement, and peacebuilding constructs lasting peace. Peacemaking includes shuttle diplomacy, peace conferences, and mediated negotiations. Famous examples include the Oslo Accords (1993), the Good Friday Agreement (1998), and the Dayton Agreement (1995) that ended the Bosnian War."
    },
    {
        id: 30,
        question: "What is the primary difference between a 'Conflict' and a 'Dispute'?",
        options: ["A conflict is a temporary disagreement, while a dispute is an ancient family feud", "A dispute is typically a specific, manageable disagreement over negotiable issues, whereas a conflict is often more deep-seated, involving identity or values", "Conflicts are always violent, while disputes are always written", "There is no difference; the terms are synonymous"],
        correct: 1,
        topic: "Nature of Conflict",
        explanation: "While often used interchangeably, peace scholars distinguish disputes from conflicts. A dispute is a specific, bounded disagreement over concrete, negotiable issues (a contract, a boundary, a payment) that can be resolved through legal or ADR processes. A conflict is deeper — involving incompatible values, identity, or fundamental needs that are not easily negotiated. Disputes can be settled; conflicts must be transformed. This distinction matters for choosing the appropriate intervention: disputes suit arbitration or mediation; deep conflicts require dialogue, reconciliation, and structural change."
    },
    {
        id: 31,
        question: "The 'Security Dilemma' occurs in international relations when:",
        options: ["One country builds weapons for defense, leading neighbors to feel threatened and build their own weapons, causing a spiral of insecurity", "Countries agree to disarm completely", "The UN stops all international trade", "A country has too many security guards"],
        correct: 0,
        topic: "International Conflict",
        explanation: "The Security Dilemma, a central concept in international relations theory, describes how one state's defensive military buildup is perceived as threatening by neighboring states, who then build up their own forces in response. This action-reaction cycle produces an arms race that leaves all parties less secure than before — despite each acting defensively. The dilemma arises from the anarchic nature of the international system where no central authority guarantees security. It explains why arms races and military escalation can occur even without aggressive intent."
    },
    {
        id: 32,
        question: "Which of the following is a primary objective of 'Conflict Sensitivity' in development work?",
        options: ["To ignore the conflict and focus only on building roads", "To ensure that aid and development programs do not inadvertently fuel or worsen the existing conflict", "To choose a side in the conflict and provide aid only to them", "To stop all international funding immediately"],
        correct: 1,
        topic: "Conflict Prevention",
        explanation: "Conflict sensitivity is the capacity of an organization to understand the context in which it operates, understand the interaction between its interventions and that context, and act upon this understanding to avoid negative impacts and maximize positive ones. Development aid can inadvertently fuel conflict by creating resource competition, reinforcing inequalities, or being captured by armed groups. The 'Do No Harm' framework (Mary Anderson) operationalizes conflict sensitivity by analyzing how aid interacts with conflict dividers and connectors."
    },
    {
        id: 33,
        question: "A 'Track II' diplomacy approach involves:",
        options: ["Official government representatives negotiating formally", "Non-governmental, informal, and unofficial contacts between citizens or scholars to build trust and generate ideas for peace", "Military commanders planning a surprise attack", "Strict legal proceedings in a Supreme Court"],
        correct: 1,
        topic: "Conflict Resolution Mechanisms",
        explanation: "Track II diplomacy refers to unofficial, informal conflict resolution efforts by non-governmental actors — academics, civil society leaders, business people, religious figures, and former officials — who engage with counterparts from the other side to build relationships, explore options, and generate ideas that official diplomats cannot pursue. Track I is official government-to-government diplomacy. Track II complements Track I by building trust, testing ideas, and preparing the ground for official negotiations. The Oslo Accords began as Track II contacts between Israeli academics and PLO officials."
    },
    {
        id: 34,
        question: "The phenomenon where a small dispute between two individuals spirals into a large-scale ethnic or communal clash is often referred to as:",
        options: ["Conflict Escalation", "Conflict Resolution", "Conflict De-escalation", "Peace Enforcement"],
        correct: 0,
        topic: "Conflict Dynamics",
        explanation: "Conflict escalation describes the process by which a conflict intensifies in scope, severity, and the number of parties involved. A minor interpersonal dispute can escalate into communal violence when it activates pre-existing ethnic, religious, or political tensions. Escalation dynamics include: hostile attributions (assuming the worst about the other side), mirror imaging (both sides seeing themselves as victims), dehumanization, and mobilization of group identities. Understanding escalation dynamics is essential for early warning and conflict prevention — intervening early before escalation takes hold is far more effective than managing full-scale violence."
    },
    {
        id: 35,
        question: "In the context of the Conflict Triangle, which of the following is an example of 'Cultural Violence'?",
        options: ["A soldier shooting a civilian", "Laws that prevent certain groups from voting", "Using religious texts to justify the oppression of women", "A lack of clean water in a village"],
        correct: 2,
        topic: "Types of Violence",
        explanation: "Cultural violence refers to aspects of culture used to legitimize or normalize direct or structural violence. Using religious texts to justify the oppression of women is a classic example — religious ideology (a cultural element) is deployed to make gender-based discrimination appear divinely ordained and therefore acceptable. A soldier shooting a civilian is direct violence. Laws preventing voting are structural violence (built into political institutions). Lack of clean water is structural violence (built into economic/infrastructure systems). Cultural violence makes the other forms of violence seem natural or justified."
    },
    {
        id: 36,
        question: "A 'Third-Party Intervener' in a conflict is most effective when they are:",
        options: ["Biased toward the stronger party", "Perceived as impartial, credible, and capable of facilitating communication", "Someone with no experience in the region", "A close relative of one of the disputing parties"],
        correct: 1,
        topic: "Conflict Resolution Mechanisms",
        explanation: "The effectiveness of a third-party intervener — whether mediator, arbitrator, or facilitator — depends critically on their perceived impartiality, credibility, and competence. Impartiality means having no stake in the outcome and no bias toward either party. Credibility means being trusted by both parties to act in good faith. Competence means having the skills and knowledge to facilitate the process effectively. A biased or incompetent intervener can worsen the conflict. Parties must voluntarily accept the intervener's legitimacy for the process to work."
    },
    {
        id: 37,
        question: "'Reconciliation' in post-conflict societies focuses on:",
        options: ["Punishing every single person who fought", "Healing relationships, restoring trust, and acknowledging past wrongs between groups who were previously at war", "Forgetting the past and moving on without talking about it", "Paying large sums of money to the victors"],
        correct: 1,
        topic: "Peacebuilding",
        explanation: "Reconciliation is the process of rebuilding broken relationships between former enemies by acknowledging past harms, seeking forgiveness, and restoring trust. It is essential for sustainable peace because unaddressed grievances fuel cycles of revenge and renewed conflict. Reconciliation does not mean forgetting or excusing atrocities — it means processing them in ways that enable coexistence. Truth and Reconciliation Commissions (like South Africa's post-apartheid TRC) are key mechanisms. Reconciliation operates at individual, community, and national levels and is a long-term process."
    },
    {
        id: 38,
        question: "The 'Relative Deprivation Theory' suggests that conflict is most likely to break out when:",
        options: ["Everyone is equally poor", "There is a large gap between what people expect to have and what they actually get", "Everyone is extremely wealthy", "The weather is very cold"],
        correct: 1,
        topic: "Theories of Conflict",
        explanation: "Relative Deprivation Theory, developed by Ted Robert Gurr in 'Why Men Rebel' (1970), argues that political violence arises not from absolute poverty but from the gap between people's value expectations (what they believe they deserve) and their value capabilities (what they can actually achieve). When this gap widens — due to rising expectations, declining capabilities, or both — frustration and anger build, creating conditions for rebellion. This explains why revolutions often occur during periods of rising expectations followed by sudden reversals, not during the deepest poverty."
    },
    {
        id: 39,
        question: "'Human Security' shifts the focus of security from the state to:",
        options: ["The protection of the military infrastructure", "The well-being, rights, and safety of the individual human being", "The protection of the country's border fences", "The stockpiling of nuclear weapons"],
        correct: 1,
        topic: "Concepts of Peace",
        explanation: "Human Security, introduced by the UNDP's 1994 Human Development Report, reframes security around the individual rather than the state. It encompasses seven dimensions: economic security (freedom from poverty), food security, health security, environmental security, personal security (freedom from violence), community security, and political security (freedom from repression). This paradigm shift recognizes that most threats to human well-being come not from foreign armies but from poverty, disease, environmental degradation, and domestic violence — threats that traditional state-centric security frameworks ignore."
    },
    {
        id: 40,
        question: "When parties in a conflict agree to a 'Ceasefire,' they have agreed to:",
        options: ["Surrender unconditionally", "Temporarily stop military actions and hostilities", "Sign a permanent peace treaty", "Merge their two armies into one"],
        correct: 1,
        topic: "Conflict Resolution Mechanisms",
        explanation: "A ceasefire (or truce) is an agreement between conflicting parties to temporarily halt military operations and hostilities. It is not a peace agreement — it does not resolve the underlying conflict or establish permanent peace. Rather, it creates a pause in fighting that allows humanitarian access, prisoner exchanges, and diplomatic negotiations to take place. Ceasefires can be unilateral (one side stops) or bilateral (both sides stop). They are often fragile and may break down if underlying issues are not addressed through subsequent peacemaking efforts."
    },
    {
        id: 41,
        question: "The process of 'Conflict Transformation' is distinct from 'Conflict Resolution' because it emphasizes:",
        options: ["Ending the conflict through military force", "Addressing the root causes and changing the structural, relational, and cultural patterns that created the conflict", "Simply returning the parties to their pre-conflict state", "Ignoring the underlying grievances to focus only on trade"],
        correct: 1,
        topic: "Conflict Resolution Approaches",
        explanation: "Conflict resolution aims to end a specific dispute; conflict transformation aims to change the conditions that generated it. Transformation, associated with John Paul Lederach, recognizes that returning to the pre-conflict status quo is insufficient if that status quo was itself unjust or violent. Transformation seeks to change destructive conflict patterns into constructive ones by addressing structural inequalities, repairing relationships, and building institutions that can manage future conflicts peacefully. It is a more ambitious, long-term vision than mere resolution."
    },
    {
        id: 42,
        question: "Which of the following is a classic example of a 'Track I' diplomacy effort?",
        options: ["Informal meetings between students from conflicting ethnic groups", "Formal, high-level negotiations between official government representatives (e.g., Presidents or Foreign Ministers)", "A talk show host interviewing ordinary citizens", "A local market trade agreement"],
        correct: 1,
        topic: "Conflict Resolution Mechanisms",
        explanation: "Track I diplomacy refers to official, formal negotiations conducted by authorized government representatives — heads of state, foreign ministers, official delegations — with the authority to make binding commitments on behalf of their governments. Examples include the Camp David Accords (1978), the Oslo Accords (1993), and the Dayton Agreement (1995). Track I produces legally binding agreements but is often constrained by political pressures, public posturing, and the difficulty of making concessions in public. It is complemented by Track II (unofficial) and Track III (grassroots) diplomacy."
    },
    {
        id: 43,
        question: "The concept of 'Structural Violence,' coined by Johan Galtung, is best exemplified by:",
        options: ["A physical fight between two teenagers", "Laws or economic systems that deny access to healthcare, education, or food for specific marginalized groups", "A verbal argument between business partners", "A spontaneous protest against tax increases"],
        correct: 1,
        topic: "Types of Violence",
        explanation: "Structural violence is harm embedded in social structures rather than caused by specific individuals. Laws or economic systems that systematically deny marginalized groups access to healthcare, education, food, or political participation are classic examples. The harm is real — people die, suffer, and are denied opportunities — but there is no identifiable perpetrator. Apartheid South Africa, caste discrimination in India, and racial wealth gaps in the United States are all examples of structural violence. Galtung argued that structural violence kills more people than direct violence."
    },
    {
        id: 44,
        question: "'Track III' diplomacy is often described as 'People-to-People' diplomacy because it focuses on:",
        options: ["Interactions between military generals", "Grassroots, community-level peace efforts and projects designed to foster reconciliation at the local level", "Negotiations between central banks", "Formal treaties signed at the United Nations"],
        correct: 1,
        topic: "Conflict Resolution Mechanisms",
        explanation: "Track III diplomacy operates at the grassroots level, involving ordinary citizens, community leaders, local NGOs, religious groups, and youth organizations in peacebuilding activities. It includes inter-community dialogue programs, joint cultural projects, peace education, and community reconciliation initiatives. While Track I produces formal agreements and Track II builds elite-level trust, Track III creates the social foundation for peace at the community level — where most people actually experience conflict. Sustainable peace requires all three tracks working in coordination."
    },
    {
        id: 45,
        question: "When a mediator helps conflicting parties identify their 'interests' (the underlying needs or motivations) rather than just their 'positions' (what they explicitly say they want), the mediator is utilizing which approach?",
        options: ["The Power-Based Approach", "The Interest-Based (Integrative) Approach", "The Rights-Based Approach", "The Adjudication Approach"],
        correct: 1,
        topic: "Conflict Resolution Mechanisms",
        explanation: "The Interest-Based (Integrative) Approach, developed by Fisher and Ury in 'Getting to Yes,' distinguishes between positions (what parties say they want) and interests (why they want it — their underlying needs, fears, and motivations). Positions are often incompatible; interests frequently overlap or can be reconciled creatively. The classic example: two people fighting over an orange (positions) — one wants the juice, the other wants the peel (interests). Understanding interests enables win-win solutions impossible when parties argue only about positions."
    },
    {
        id: 46,
        question: "'Peace Enforcement' is a mandate typically authorized by international bodies like the UN Security Council to:",
        options: ["Force a peaceful agreement through military or economic sanctions when a ceasefire has failed or the conflict threatens international security", "Provide humanitarian food aid", "Train a country's police force in community policing", "Conduct fair elections in a war-torn country"],
        correct: 0,
        topic: "Peacebuilding",
        explanation: "Peace enforcement involves the use of coercive measures — military force or economic sanctions — authorized under Chapter VII of the UN Charter to restore or maintain peace when parties have not consented or when a ceasefire has collapsed. Unlike peacekeeping (which requires consent), peace enforcement can be imposed. Examples include NATO's intervention in Bosnia (1995) and the UN-authorized coalition in Korea (1950). Peace enforcement is controversial because it involves using force in the name of peace, raising questions about sovereignty and the legitimacy of intervention."
    },
    {
        id: 47,
        question: "The 'Conflict Triangle' (or ABC Triangle) consists of which three interconnected components?",
        options: ["Antecedent, Behavior, and Consequence", "Attitudes, Behavior, and Contradiction (Context/Structure)", "Aggression, Bargaining, and Compromise", "Actors, Borders, and Conflict"],
        correct: 1,
        topic: "Conflict Analysis Tools",
        explanation: "Galtung's Conflict Triangle (ABC model) analyzes conflict through three interconnected dimensions: Attitudes (the psychological dimension — perceptions, emotions, prejudices, and motivations of the parties), Behavior (the action dimension — what parties actually do, from cooperation to violence), and Contradiction (the structural dimension — the underlying incompatible goals, interests, or injustices). A complete conflict analysis must address all three dimensions. Interventions targeting only one dimension (e.g., stopping violent behavior without addressing attitudes or structural contradictions) produce fragile, temporary peace."
    },
    {
        id: 48,
        question: "'Attitudes' in the Conflict Triangle refer to:",
        options: ["The physical weapons used in the conflict", "The psychological, emotional, and cognitive feelings (e.g., prejudice, hatred, mistrust) parties hold toward each other", "The formal laws governing the dispute", "The history of the border region"],
        correct: 1,
        topic: "Conflict Analysis Tools",
        explanation: "Attitudes in the Conflict Triangle encompass the psychological and emotional dimension of conflict — how parties perceive each other and the conflict situation. This includes prejudices, stereotypes, fears, mistrust, hatred, and dehumanizing beliefs about the other side. Attitudes are often shaped by historical grievances, propaganda, and group identity. They are crucial because they motivate behavior and make conflict resolution difficult even when structural issues are addressed. Changing attitudes through dialogue, contact, and education is essential for sustainable peacebuilding."
    },
    {
        id: 49,
        question: "'Behavior' in the Conflict Triangle refers to:",
        options: ["The underlying causes of the conflict", "The specific actions and tactics taken by parties (e.g., violence, cooperation, coercion) in pursuit of their goals", "The secret thoughts of the leaders", "The geographical location of the conflict"],
        correct: 1,
        topic: "Conflict Analysis Tools",
        explanation: "Behavior in the Conflict Triangle refers to the observable actions parties take in pursuit of their goals — ranging from cooperative dialogue and negotiation at one end to coercion, threats, and direct violence at the other. Behavior is the most visible dimension of conflict and the most immediate target of intervention (stopping violence). However, changing behavior without addressing underlying attitudes and structural contradictions produces only negative peace — the absence of violence without the presence of justice or genuine reconciliation."
    },
    {
        id: 50,
        question: "'Contradiction' (or Context) in the Conflict Triangle refers to:",
        options: ["The contradictory statements made by witnesses", "The underlying incompatible goals, structural issues, or perceived injustices that form the foundation of the conflict", "The physical appearance of the actors", "The length of time the conflict has lasted"],
        correct: 1,
        topic: "Conflict Analysis Tools",
        explanation: "Contradiction (or Context/Structure) in the Conflict Triangle refers to the objective dimension of conflict — the actual incompatible goals, competing interests, structural inequalities, or perceived injustices that form the substantive foundation of the dispute. It is the 'what the conflict is about' dimension. Contradictions can be real (genuine resource scarcity) or perceived (misunderstandings about the other's intentions). Addressing contradictions requires structural changes — redistributing resources, reforming institutions, or clarifying misperceptions — not just managing attitudes or stopping violent behavior."
    },
    {
        id: 51,
        question: "Which of the following is a potential positive function of conflict in society?",
        options: ["It always leads to destruction", "It can act as a catalyst for social change, correcting injustices and leading to better institutional reforms", "It prevents people from voting", "It forces everyone to think exactly the same way"],
        correct: 1,
        topic: "Nature of Conflict",
        explanation: "Conflict is not inherently destructive — it can serve important positive social functions. Lewis Coser's 'The Functions of Social Conflict' (1956) argued that conflict can: signal social problems that need addressing, stimulate innovation and creativity, strengthen group identity and cohesion, promote social change by challenging unjust structures, and clarify values and norms. The civil rights movement, labor rights struggles, and democratic revolutions are examples of conflict producing positive social transformation. The key is whether conflict is managed constructively or destructively."
    },
    {
        id: 52,
        question: "'Gender-based violence' in conflict situations is often used as a tool to:",
        options: ["Increase food production", "Intimidate, humiliate, and destroy the social fabric of an opposing group", "Promote women's rights", "End the conflict quickly"],
        correct: 1,
        topic: "Types of Violence",
        explanation: "Sexual and gender-based violence (SGBV) in armed conflict is frequently used as a deliberate weapon of war — not merely a byproduct of conflict. It is used to terrorize civilian populations, destroy community cohesion, humiliate enemy groups, force displacement, and break down social structures. The systematic use of rape as a weapon of war was documented in Bosnia, Rwanda, and the DRC. The UN Security Council Resolution 1325 (2000) recognized the disproportionate impact of armed conflict on women and called for their inclusion in peace processes."
    },
    {
        id: 53,
        question: "The 'Responsibility to Protect' (R2P) is a global political commitment intended to:",
        options: ["Protect the sovereignty of dictators at all costs", "Prevent genocide, war crimes, ethnic cleansing, and crimes against humanity, allowing the international community to intervene if a state fails to protect its own people", "Annex smaller countries into larger ones", "Promote the sale of weapons to developing nations"],
        correct: 1,
        topic: "International Conflict",
        explanation: "The Responsibility to Protect (R2P), adopted at the 2005 UN World Summit, establishes that sovereignty entails responsibility: states have the primary responsibility to protect their populations from genocide, war crimes, ethnic cleansing, and crimes against humanity. If a state fails to do so or is itself the perpetrator, the international community has the responsibility to intervene — first through peaceful means, then through coercive measures if necessary. R2P represents a fundamental shift from absolute sovereignty to conditional sovereignty in international law."
    },
    {
        id: 54,
        question: "In negotiation, the 'BATNA' stands for:",
        options: ["Best Alternative to a Negotiated Agreement", "Better Action to Neutralize All", "Basic Terms for New Agreements", "Binary Agreement Tactical Network Analysis"],
        correct: 0,
        topic: "Conflict Resolution Mechanisms",
        explanation: "BATNA (Best Alternative to a Negotiated Agreement), a concept from Fisher and Ury's 'Getting to Yes,' is the course of action a party will take if negotiations fail and no agreement is reached. It is the standard against which any proposed agreement should be measured — you should only accept a negotiated agreement if it is better than your BATNA. Knowing your BATNA prevents you from accepting a bad deal out of desperation and gives you the confidence to walk away when necessary. Improving your BATNA strengthens your negotiating position."
    },
    {
        id: 55,
        question: "Having a strong 'BATNA' during a negotiation generally:",
        options: ["Weakens your bargaining position", "Gives you more leverage and the ability to walk away from a bad deal", "Makes you less likely to succeed", "Means you have no other options"],
        correct: 1,
        topic: "Conflict Resolution Mechanisms",
        explanation: "A strong BATNA gives a negotiator power and flexibility. If you have attractive alternatives to a negotiated agreement, you can negotiate from a position of strength — you don't need the deal as desperately as the other party might. This leverage allows you to hold out for better terms and walk away from unfavorable proposals. Conversely, a weak BATNA (no good alternatives) forces you to accept whatever is offered. Skilled negotiators work to improve their own BATNA and weaken the other party's BATNA before and during negotiations."
    },
    {
        id: 56,
        question: "The 'Tipping Point' in conflict escalation refers to:",
        options: ["The moment a conflict ends peacefully", "The precise stage where tension shifts from non-violent to open violence or uncontrollable crisis", "The end of a negotiation", "The signing of a peace treaty"],
        correct: 1,
        topic: "Conflict Dynamics",
        explanation: "The tipping point in conflict escalation is the critical threshold at which accumulated tensions cross from manageable disagreement into open, often uncontrollable violence. Before the tipping point, conflict can be managed through dialogue and negotiation; after it, violence takes on its own momentum and becomes much harder to stop. Identifying and intervening before the tipping point is the central goal of conflict prevention. Early warning systems are designed to detect when conflicts are approaching their tipping points so that preventive action can be taken in time."
    },
    {
        id: 57,
        question: "Which of the following is NOT a characteristic of a 'protracted social conflict'?",
        options: ["It lasts for a long duration", "It is deeply rooted in issues of identity and basic human needs", "It is easily resolved in a single afternoon of negotiation", "It often involves violence and systemic instability"],
        correct: 2,
        topic: "Nature of Conflict",
        explanation: "Protracted social conflicts (PSCs), a concept developed by Edward Azar, are long-duration conflicts rooted in the denial of fundamental human needs — identity, security, recognition, and participation. They are characterized by: deep historical grievances, identity-based divisions (ethnic, religious, communal), structural inequalities, cycles of violence and fragile ceasefires, and resistance to quick resolution. The Israeli-Palestinian conflict, the Kashmir dispute, and the Northern Ireland conflict are classic PSCs. Their complexity and depth make them fundamentally incompatible with quick negotiated settlements."
    },
    {
        id: 58,
        question: "'Peace Education' aims to:",
        options: ["Promote military training among students", "Equip individuals with the knowledge, skills, and values to understand, manage, and prevent conflict, and to promote non-violence and social justice", "Teach students how to win physical fights", "Discourage critical thinking"],
        correct: 1,
        topic: "Peacebuilding",
        explanation: "Peace education is a transformative educational approach that develops the knowledge, skills, attitudes, and values needed to prevent conflict, resolve disputes non-violently, and build cultures of peace. It covers conflict resolution skills, human rights education, intercultural understanding, critical thinking, empathy, and non-violent communication. UNESCO and UNICEF promote peace education globally as a preventive tool. It operates at all levels — from primary schools to universities — and is particularly important in post-conflict societies rebuilding social cohesion."
    },
    {
        id: 59,
        question: "In post-conflict settings, the 'Demobilization, Disarmament, and Reintegration' (DDR) process is aimed at:",
        options: ["Increasing the size of the national army", "Transitioning combatants out of military structures and helping them reintegrate into civilian society", "Forcing civilians to join the military", "Building new weapon manufacturing factories"],
        correct: 1,
        topic: "Peacebuilding",
        explanation: "DDR (Disarmament, Demobilization, and Reintegration) is a critical post-conflict peacebuilding process. Disarmament collects, documents, and disposes of weapons from combatants. Demobilization formally dissolves armed groups and discharges fighters. Reintegration provides ex-combatants with economic opportunities, psychosocial support, and social acceptance to enable sustainable civilian life. Without successful DDR, ex-combatants may return to violence due to lack of alternatives. DDR is essential for breaking the cycle of conflict and building durable peace."
    },
    {
        id: 60,
        question: "'Civil Society Organizations' (CSOs) play a critical role in peacebuilding by:",
        options: ["Directly controlling the national military", "Advocating for peace, monitoring human rights, and providing platforms for dialogue between conflicting groups", "Replacing the judiciary", "Imposing taxes on citizens"],
        correct: 1,
        topic: "Peacebuilding",
        explanation: "Civil society organizations — NGOs, community groups, religious organizations, professional associations, and media — are essential actors in peacebuilding. They advocate for peaceful policies, monitor human rights violations, provide early warning of emerging conflicts, facilitate dialogue between divided communities, deliver humanitarian assistance, support reconciliation processes, and hold governments accountable. CSOs often reach communities and build trust where governments cannot. The UN and international peacebuilding frameworks increasingly recognize civil society as indispensable partners in sustainable peace processes."
    },
    {
        id: 61,
        question: "'Restorative Justice' is a conflict resolution model that emphasizes:",
        options: ["Sending offenders to maximum security prisons for long terms", "Repairing the harm caused by criminal behavior through dialogue, accountability, and the involvement of the victim, the offender, and the community", "Punishing the offender purely for retribution", "Completely excluding the victim from the justice process"],
        correct: 1,
        topic: "Conflict Resolution Mechanisms",
        explanation: "Restorative Justice is an approach to justice that focuses on repairing the harm caused by criminal or harmful behavior rather than simply punishing the offender. It brings together the victim, offender, and community in a structured dialogue to acknowledge harm, take responsibility, and agree on reparative actions. Unlike retributive justice (punishment-focused), restorative justice is relationship-focused. South Africa's Truth and Reconciliation Commission and community conferencing programs are prominent examples. Research shows restorative processes produce higher victim satisfaction and lower reoffending rates."
    },
    {
        id: 62,
        question: "A 'Stalemate' in conflict studies is often considered a 'ripe' moment for intervention because:",
        options: ["The parties are winning and have no reason to negotiate", "Both parties realize that a military or unilateral victory is impossible, making them more willing to seek a negotiated settlement", "The government has run out of money to pay soldiers", "The international community is not interested in the conflict"],
        correct: 1,
        topic: "Conflict Dynamics",
        explanation: "Zartman's concept of 'ripeness' holds that conflicts become ripe for resolution when both parties experience a mutually hurting stalemate — recognizing that neither can win and that continuing the conflict is too costly. This creates a 'ripe moment' when parties become willing to negotiate. A stalemate alone is not sufficient — parties must also perceive a 'way out' (a mutually acceptable formula for settlement). Skilled mediators watch for these ripe moments and intervene when parties are most receptive to negotiated solutions."
    },
    {
        id: 63,
        question: "Which term refers to the process of actively listening, reframing issues, and using non-judgmental language to help parties in conflict move from hostile positions toward cooperative problem-solving?",
        options: ["Coercion", "Communication Skills / Active Listening", "Escalation", "Intimidation"],
        correct: 1,
        topic: "Conflict Resolution Mechanisms",
        explanation: "Active listening and effective communication are foundational skills in conflict resolution. Active listening involves giving full attention, reflecting back what is heard, asking clarifying questions, and acknowledging emotions without judgment. Reframing transforms hostile, positional statements into interest-based language that opens space for problem-solving. These skills help parties feel heard and understood, reducing defensiveness and enabling movement from adversarial positions toward collaborative problem-solving. They are core competencies for mediators, negotiators, and peacebuilders."
    },
    {
        id: 64,
        question: "'Track 1.5 Diplomacy' is best defined as:",
        options: ["Informal interactions between NGOs only", "A hybrid approach where official government officials and non-official actors (such as academics or NGO leaders) work together in a semi-official capacity", "Strictly military-to-military communication", "Secret, illegal back-channel dealings"],
        correct: 1,
        topic: "Conflict Resolution Mechanisms",
        explanation: "Track 1.5 diplomacy occupies the space between official Track I (government-to-government) and unofficial Track II (non-governmental) diplomacy. It involves semi-official interactions where government officials participate in their personal capacity alongside non-governmental actors — academics, think tanks, former officials, or NGO leaders. This hybrid format allows exploration of sensitive options that official diplomats cannot publicly pursue while maintaining a connection to official policy. It is particularly useful for testing ideas and building bridges between official and unofficial peace processes."
    },
    {
        id: 65,
        question: "The term 'Positive Peace' is most closely associated with the work of which pioneering peace researcher?",
        options: ["John Locke", "Johan Galtung", "Thomas Hobbes", "Karl Marx"],
        correct: 1,
        topic: "Concepts of Peace",
        explanation: "Johan Galtung, a Norwegian sociologist and mathematician, is the founder of peace studies as an academic discipline and the originator of the positive/negative peace distinction. He established the Peace Research Institute Oslo (PRIO) in 1959 and the Journal of Peace Research. His Conflict Triangle (direct, structural, and cultural violence) and the positive/negative peace framework remain the foundational conceptual tools of the field. Galtung's work transformed peace studies from a normative aspiration into a rigorous academic discipline."
    },
    {
        id: 66,
        question: "What is a key difference between 'Mediation' and 'Arbitration'?",
        options: ["Mediation is always conducted in a courtroom", "An arbitrator makes a binding decision for the parties, whereas a mediator helps parties reach their own voluntary agreement", "Arbitration is a voluntary dialogue, while mediation is a forceful interrogation", "There is no difference; they are the same process"],
        correct: 1,
        topic: "Conflict Resolution Mechanisms",
        explanation: "The fundamental distinction between mediation and arbitration lies in who decides the outcome. In mediation, the mediator has no decision-making power — parties retain full control and must voluntarily agree to any settlement. In arbitration, the arbitrator (or panel) hears evidence and arguments and issues a binding award that the parties must comply with. Mediation preserves party autonomy and relationships; arbitration provides a definitive resolution when parties cannot agree. Both are faster and more private than court litigation."
    },
    {
        id: 67,
        question: "A 'Conflict Map' (or conflict mapping) helps observers to:",
        options: ["Locate the physical borders of a country", "Visualize the relationships between the various parties involved in a conflict, identifying their power, interests, and how they relate to one another", "Predict the exact weather on the day a peace treaty is signed", "Calculate the total cost of all weapons sold"],
        correct: 1,
        topic: "Conflict Analysis Tools",
        explanation: "Conflict mapping is a visual analytical tool that diagrams the key actors in a conflict — primary parties, secondary parties, and interested third parties — along with their relationships, power dynamics, interests, positions, and alliances. It provides a comprehensive picture of the conflict landscape that helps analysts identify: who has influence, what each party wants and why, where alliances and divisions lie, and where intervention might be most effective. Conflict maps are essential starting points for designing peacebuilding strategies."
    },
    {
        id: 68,
        question: "'Ethnic Conflict' is often triggered or exacerbated by:",
        options: ["Economic prosperity for all citizens", "Political manipulation of ethnic identity, exclusion from power, and competition over scarce resources", "High levels of literacy and education", "Lack of political party registration"],
        correct: 1,
        topic: "Nature of Conflict",
        explanation: "Ethnic conflict rarely arises from ethnicity alone — ethnic differences are ubiquitous but most do not produce violence. Conflict emerges when political entrepreneurs manipulate ethnic identities for power, when ethnic groups are systematically excluded from political power or economic resources, when historical grievances are mobilized, or when competition over scarce resources (land, jobs, political positions) is organized along ethnic lines. Donald Horowitz's work on ethnic conflict emphasizes that political institutions and elite behavior are critical variables in whether ethnic diversity produces conflict or coexistence."
    },
    {
        id: 69,
        question: "'Preventive Diplomacy' is aimed at:",
        options: ["Taking action to prevent disputes from arising or escalating into open violent conflict", "Starting a war as soon as tensions appear", "Ignoring small disagreements until they become big problems", "Providing military weapons to both sides"],
        correct: 0,
        topic: "Conflict Prevention",
        explanation: "Preventive diplomacy, a concept central to the UN's peace and security architecture, involves diplomatic actions taken to prevent disputes from arising between parties, to prevent existing disputes from escalating into conflicts, and to limit the spread of conflicts when they occur. It includes early warning systems, fact-finding missions, special envoys, confidence-building measures, and preventive deployment of peacekeepers. The UN Secretary-General's 1992 'Agenda for Peace' identified preventive diplomacy as the most cost-effective approach to peace — far cheaper than managing full-scale conflicts."
    },
    {
        id: 70,
        question: "The 'Conflict Triangle' (Attitude-Behavior-Contradiction) model is a tool for:",
        options: ["Increasing the military budget", "Analyzing the complex components that make up a conflict to better understand how to resolve it", "Calculating the speed of a projectile", "Designing a new parliamentary constitution"],
        correct: 1,
        topic: "Conflict Analysis Tools",
        explanation: "Galtung's ABC Conflict Triangle is a diagnostic framework for comprehensive conflict analysis. By examining all three dimensions — Attitudes (psychological/emotional), Behavior (actions/tactics), and Contradiction (structural/substantive) — analysts can identify the full complexity of a conflict and design interventions that address all dimensions. A conflict intervention that addresses only behavior (stopping violence) without addressing attitudes (prejudice, hatred) or contradictions (structural injustice) will produce only fragile, temporary peace. The triangle reminds practitioners that sustainable peace requires transformation at all three levels."
    },
    {
        id: 71,
        question: "'Negotiation' is characterized as a 'Distributive' process when:",
        options: ["The goal is to maximize one party's share of a fixed resource (a 'win-lose' approach)", "Both parties seek to expand the 'pie' (a 'win-win' approach)", "Both parties agree to walk away with nothing", "The government decides to distribute the resource itself"],
        correct: 0,
        topic: "Conflict Resolution Mechanisms",
        explanation: "Distributive negotiation (also called positional or competitive bargaining) treats the negotiation as a zero-sum competition over a fixed resource — the more one party gets, the less the other gets. Parties take positions, make concessions, and try to claim as much value as possible. It is appropriate for one-time transactions where relationship preservation is unimportant (e.g., buying a car). However, it is adversarial, damages relationships, and misses opportunities for creative value creation. Integrative negotiation is generally preferred for ongoing relationships and complex disputes."
    },
    {
        id: 72,
        question: "'Negotiation' is characterized as an 'Integrative' process when:",
        options: ["One party destroys the other", "Parties work to identify common interests and create solutions that allow both to achieve their objectives", "The stronger party imposes their will", "The negotiation fails"],
        correct: 1,
        topic: "Conflict Resolution Mechanisms",
        explanation: "Integrative negotiation (also called interest-based or principled negotiation) seeks to create value by identifying shared interests and generating creative solutions that satisfy both parties' core needs. Rather than dividing a fixed pie, integrative negotiation tries to expand it. It requires open communication about underlying interests, creative option generation, and a collaborative rather than adversarial mindset. Fisher and Ury's 'Getting to Yes' is the foundational text. Integrative negotiation produces more durable agreements and preserves relationships, making it the preferred approach for ongoing partnerships."
    },
    {
        id: 73,
        question: "What does 'Humanitarian Intervention' involve?",
        options: ["Providing military support to a dictator", "The use of military force by external actors to protect a population from mass atrocities in another state without its consent", "Increasing trade tariffs", "Withdrawing all aid from a country"],
        correct: 1,
        topic: "International Conflict",
        explanation: "Humanitarian intervention refers to the use of military force by one or more states in another state, without that state's consent, to protect civilians from mass atrocities — genocide, ethnic cleansing, or crimes against humanity. It is deeply controversial because it conflicts with the principle of state sovereignty and non-interference in internal affairs. The NATO intervention in Kosovo (1999) is a prominent example. The Responsibility to Protect (R2P) doctrine attempts to provide a legal and normative framework for when such interventions are legitimate."
    },
    {
        id: 74,
        question: "'Peacekeeping' typically requires which of the following to be legitimate and effective?",
        options: ["The total destruction of the opposing army", "The consent of the parties involved, impartiality, and the non-use of force except in self-defense", "The annexation of the territory", "The removal of all civilians from the area"],
        correct: 1,
        topic: "Peacebuilding",
        explanation: "Traditional UN peacekeeping rests on three foundational principles established through decades of practice: (1) Consent of the parties — the host state and main parties must agree to the peacekeeping presence; (2) Impartiality — peacekeepers must not favor any party; (3) Non-use of force except in self-defense and defense of the mandate. These principles distinguish peacekeeping from peace enforcement (which can be imposed without consent). When these principles are violated, peacekeeping missions lose legitimacy and effectiveness, as seen in Somalia (1993)."
    },
    {
        id: 75,
        question: "'Prejudice' is a form of:",
        options: ["Behavioral violence", "Attitudinal violence", "Structural contradiction", "Peace enforcement"],
        correct: 1,
        topic: "Types of Violence",
        explanation: "Prejudice — preconceived negative judgments about individuals based on their group membership (race, ethnicity, religion, gender) — is a form of attitudinal violence in Galtung's framework. It operates at the psychological level, shaping how people perceive and treat others. Prejudice is the attitudinal foundation that enables structural discrimination and direct violence. It is cultivated through socialization, propaganda, and cultural narratives that dehumanize outgroups. Addressing prejudice through education, contact theory, and dialogue is essential for preventing discrimination and violence."
    },
    {
        id: 76,
        question: "Which concept describes a society that lacks institutionalized conflict resolution mechanisms and relies on violence to manage social disputes?",
        options: ["A peaceful society", "A 'Culture of Violence'", "A democratic society", "A prosperous society"],
        correct: 1,
        topic: "Nature of Conflict",
        explanation: "A 'Culture of Violence' describes a social environment where violence is normalized, accepted, or even celebrated as a legitimate means of resolving disputes, asserting power, or achieving goals. It develops when societies lack effective non-violent conflict resolution institutions, when violence is glorified in media and culture, when impunity for violent acts is widespread, and when structural violence creates conditions of desperation. Breaking a culture of violence requires simultaneously building non-violent institutions, changing cultural norms, and addressing the structural conditions that make violence seem rational."
    },
    {
        id: 77,
        question: "'Non-violent action' (as utilized by leaders like Martin Luther King Jr. or Mahatma Gandhi) is a strategy that:",
        options: ["Uses violence to achieve political goals", "Employs methods like civil disobedience, boycotts, and protests to challenge injustice without physical harm to others", "Completely avoids taking any stand on political issues", "Relies solely on legal court cases"],
        correct: 1,
        topic: "Conflict Resolution Approaches",
        explanation: "Non-violent action, theorized by Gene Sharp in 'The Politics of Nonviolent Action,' is a method of challenging injustice and exercising political power without physical violence. It includes civil disobedience (refusing to comply with unjust laws), boycotts (economic non-cooperation), strikes, protests, and non-violent obstruction. Gandhi's independence movement in India and King's civil rights movement in the US demonstrated that non-violent action can be more powerful than violence by mobilizing mass participation, maintaining moral authority, and exposing the injustice of violent repression."
    },
    {
        id: 78,
        question: "The goal of 'Truth and Reconciliation Commissions' (like those used in South Africa) is to:",
        options: ["Execute all perpetrators of human rights abuses", "Acknowledge the truth about past abuses and facilitate a process for healing and reconciliation between victims and perpetrators", "Hide the past to avoid social unrest", "Pay all citizens equal amounts of money"],
        correct: 1,
        topic: "Peacebuilding",
        explanation: "Truth and Reconciliation Commissions (TRCs) are transitional justice mechanisms that investigate and document past human rights abuses, provide victims with a platform to tell their stories, and create a public record of what happened. South Africa's TRC (1996–2003), chaired by Archbishop Desmond Tutu, offered conditional amnesty to perpetrators who fully disclosed their crimes. TRCs operate on the principle that acknowledging truth is a prerequisite for genuine reconciliation — societies cannot heal from wounds they refuse to acknowledge. They balance accountability with the need for social healing."
    },
    {
        id: 79,
        question: "'Conflict Sensitivity' is most critical for organizations that:",
        options: ["Only work in stable, wealthy countries", "Operate in volatile, conflict-prone environments where their activities could inadvertently cause harm or reinforce divisions", "Do not interact with local communities", "Never leave their home office"],
        correct: 1,
        topic: "Conflict Prevention",
        explanation: "Conflict sensitivity is essential for any organization — NGO, government agency, or business — operating in conflict-affected environments. Well-intentioned interventions can inadvertently fuel conflict by: creating resource competition between groups, reinforcing existing inequalities, being captured by armed actors, or signaling favoritism. Mary Anderson's 'Do No Harm' framework provides practical tools for analyzing how aid interacts with conflict dynamics. Conflict-sensitive programming requires continuous analysis of the conflict context and adaptation of activities to minimize harm and maximize peace dividends."
    },
    {
        id: 80,
        question: "What is the primary difference between 'Peacekeeping' and 'Peacebuilding'?",
        options: ["Peacekeeping is short-term and tactical (stabilizing), while peacebuilding is long-term and strategic (addressing root causes)", "Peacebuilding is done by soldiers only; peacekeeping is done by students", "Peacekeeping is for big countries; peacebuilding is for small countries", "There is no difference; they are the same thing"],
        correct: 0,
        topic: "Peacebuilding",
        explanation: "Peacekeeping and peacebuilding are complementary but distinct activities in the peace continuum. Peacekeeping is a short-to-medium term military/police operation that stabilizes a conflict situation by monitoring ceasefires, protecting civilians, and creating space for political processes. Peacebuilding is a long-term, multidimensional strategy that addresses the root causes of conflict through institutional reform, economic development, reconciliation, and civil society strengthening. Peacekeeping without peacebuilding produces fragile stability; peacebuilding without peacekeeping may be impossible in active conflict zones."
    },
    {
        id: 81,
        question: "In conflict resolution, a 'Third-Party Intervener' is most effective when they operate with:",
        options: ["Strict partiality toward the side with more military power", "Impartiality, credibility, and the ability to build trust between conflicting groups", "The power to arrest anyone who disagrees with them", "A mandate to ignore the root causes and focus only on trade"],
        correct: 1,
        topic: "Conflict Resolution Mechanisms",
        explanation: "A third-party intervener's effectiveness hinges on their perceived impartiality — having no stake in the outcome and no bias toward either party. Credibility means both parties trust the intervener to act in good faith. The ability to build trust is essential because parties in conflict are often deeply suspicious of each other and of outsiders. An intervener who is seen as partial, untrustworthy, or incompetent will be rejected or will worsen the conflict. These qualities apply whether the intervener is a mediator, facilitator, arbitrator, or international organization."
    },
    {
        id: 82,
        question: "'Negative Peace' refers to the absence of direct violence, while 'Positive Peace' entails:",
        options: ["The presence of social justice, equality, and the removal of systemic oppression", "The total silence of the media", "Increased military expenditure", "The suspension of democratic elections"],
        correct: 0,
        topic: "Concepts of Peace",
        explanation: "Johan Galtung's distinction between negative and positive peace is foundational to peace studies. Negative peace is simply the absence of direct, visible violence — guns are silent, bombs have stopped. Positive peace goes further, encompassing the presence of conditions that enable human flourishing: social justice, structural equality, respect for human rights, functioning institutions, and the elimination of all forms of violence including structural and cultural. Positive peace is the ultimate goal — a society where people can develop their full potential without fear, deprivation, or oppression."
    },
    {
        id: 83,
        question: "The concept of 'Structural Violence' is often invisible because:",
        options: ["It is hidden in the laws, social norms, and economic structures that privilege some while marginalizing others", "It only happens at night", "It is too small to be observed by human beings", "It does not actually exist in reality"],
        correct: 0,
        topic: "Types of Violence",
        explanation: "Structural violence is invisible precisely because it is embedded in the normal functioning of society — in laws, economic systems, social norms, and institutional practices that appear neutral but systematically harm certain groups. Unlike direct violence (a punch, a gunshot), structural violence has no identifiable perpetrator — it is the system itself that causes harm. People die of preventable poverty, are denied education, or are excluded from political participation not because anyone attacked them, but because the structures of society are organized against them. This invisibility makes it harder to recognize and challenge."
    },
    {
        id: 84,
        question: "When disputing parties engage in 'Litigation,' they have chosen to:",
        options: ["Resolve the issue through informal community dialogue", "Have a court of law decide the outcome based on legal rules", "Use a mediator to facilitate their conversation", "Negotiate directly with one another without lawyers"],
        correct: 1,
        topic: "Conflict Resolution Mechanisms",
        explanation: "Litigation (adjudication) is the formal legal process of resolving disputes through the court system, where a judge applies the law and issues a binding judgment. It is adversarial — parties present opposing cases — and the outcome is determined by legal rules rather than the parties' preferences. Litigation is appropriate for serious disputes involving rights violations, criminal conduct, or when other methods have failed. However, it is expensive, slow, public, relationship-damaging, and inflexible. It is generally the last resort after ADR methods have been exhausted."
    },
    {
        id: 85,
        question: "The 'Security Dilemma' is a classic concept in international relations that explains why:",
        options: ["Neighbors often trust each other completely", "Defensive actions by one state are often interpreted as offensive threats by another, leading to an arms race", "Countries prefer to have open borders", "Small countries always win wars against large countries"],
        correct: 1,
        topic: "International Conflict",
        explanation: "The Security Dilemma arises from the anarchic nature of the international system — without a central authority to guarantee security, states must provide for their own defense. When one state builds up its military for defensive purposes, neighboring states cannot be certain of its intentions and respond by building up their own forces. This action-reaction cycle produces an arms race that leaves all parties less secure than before, despite each acting defensively. The Security Dilemma explains how conflict and arms races can emerge even without aggressive intent from any party."
    },
    {
        id: 86,
        question: "'Peace Education' aims to foster which of the following values?",
        options: ["Aggression, dominance, and intolerance", "Tolerance, empathy, non-violent communication, and critical thinking", "Secrecy, fear, and obedience", "Militarism and war-readiness"],
        correct: 1,
        topic: "Peacebuilding",
        explanation: "Peace education is a transformative educational approach that cultivates the values, knowledge, and skills needed to build cultures of peace. Core values include tolerance (accepting difference), empathy (understanding others' perspectives), non-violent communication (expressing needs without aggression), and critical thinking (questioning injustice and propaganda). Peace education operates at all levels — from primary schools to universities — and is particularly vital in post-conflict societies and divided communities. UNESCO promotes peace education as a preventive tool for building sustainable peace from the ground up."
    },
    {
        id: 87,
        question: "The 'Conflict Triangle' (Attitudes, Behavior, Contradiction) was developed by:",
        options: ["John Locke", "Johan Galtung", "Adam Smith", "Karl Marx"],
        correct: 1,
        topic: "Conflict Analysis Tools",
        explanation: "Johan Galtung, the Norwegian founder of peace studies as an academic discipline, developed the Conflict Triangle (ABC model) as a comprehensive framework for conflict analysis. The triangle identifies three interconnected dimensions: Attitudes (psychological/emotional — perceptions, prejudices, motivations), Behavior (actions — from cooperation to violence), and Contradiction (structural — incompatible goals, injustices). Galtung argued that sustainable peace requires transformation at all three levels simultaneously. His framework remains the most widely used analytical tool in peace studies and conflict resolution."
    },
    {
        id: 88,
        question: "'Attitudes' in Galtung's Conflict Triangle refer to:",
        options: ["The physical weapons used in the conflict", "The emotional and psychological states, such as prejudice or hatred, that fuel the conflict", "The geographical boundaries of the conflict", "The financial cost of the conflict"],
        correct: 1,
        topic: "Conflict Analysis Tools",
        explanation: "Attitudes in the Conflict Triangle encompass the psychological and emotional dimension — how parties feel about and perceive each other and the conflict. This includes prejudice, stereotypes, fear, mistrust, hatred, dehumanization, and hostile attributions. Attitudes are often shaped by historical grievances, propaganda, and group identity narratives. They are crucial because they motivate behavior and make resolution difficult even when structural issues are addressed. Changing attitudes through dialogue, contact programs, and education is essential for sustainable peacebuilding."
    },
    {
        id: 89,
        question: "'Contradiction' in the Conflict Triangle refers to:",
        options: ["The opposite viewpoints held by the media", "The underlying incompatible goals, structural injustices, or systemic grievances", "The length of the conflict", "The age of the participants"],
        correct: 1,
        topic: "Conflict Analysis Tools",
        explanation: "Contradiction (or Context/Structure) in the Conflict Triangle refers to the objective, substantive dimension of conflict — the actual incompatible goals, competing interests, structural inequalities, or perceived injustices that form the foundation of the dispute. It is the 'what the conflict is about' dimension. Contradictions can be real (genuine resource scarcity, structural discrimination) or perceived (misunderstandings about intentions). Addressing contradictions requires structural changes — redistributing resources, reforming institutions, or clarifying misperceptions — not just managing emotions or stopping violent behavior."
    },
    {
        id: 90,
        question: "Which of the following is a key objective of 'Conflict Transformation'?",
        options: ["Keeping the parties in the same state of disagreement as before", "Altering the deeper patterns and root causes that generate the conflict, moving from a culture of violence to a culture of peace", "Forcing one side to completely surrender to the other", "Bypassing the local community in favor of international actors"],
        correct: 1,
        topic: "Conflict Resolution Approaches",
        explanation: "Conflict transformation, associated with John Paul Lederach, goes beyond resolving the immediate dispute to fundamentally change the conditions, relationships, and structures that generated it. Its key objective is to transform destructive conflict patterns — violence, oppression, injustice — into constructive ones that sustain peace. This means moving from a culture of violence (where violence is normalized) to a culture of peace (where non-violent means are the norm). Transformation is long-term, holistic, and addresses structural inequalities, broken relationships, and cultural patterns simultaneously."
    },
    {
        id: 91,
        question: "The process of 'DDR' (Demobilization, Disarmament, and Reintegration) is critical for:",
        options: ["Starting a new war", "Post-conflict stability by moving former combatants out of armed roles and into civil society", "Training more police officers", "Increasing the national debt"],
        correct: 1,
        topic: "Peacebuilding",
        explanation: "DDR is a critical post-conflict peacebuilding process that addresses the immediate security challenge of armed combatants. Disarmament collects and disposes of weapons. Demobilization formally dissolves armed groups and discharges fighters. Reintegration provides ex-combatants with economic opportunities, vocational training, psychosocial support, and social acceptance to enable sustainable civilian life. Without successful DDR, ex-combatants — lacking skills, income, and social networks — are likely to return to violence or join criminal networks. DDR is essential for breaking the cycle of conflict."
    },
    {
        id: 92,
        question: "'Track II' diplomacy is often referred to as 'back-channel' or 'scholar's diplomacy' because it:",
        options: ["Involves official government military leaders", "Utilizes non-governmental experts and influential individuals to build relationships and explore solutions away from the spotlight of official negotiations", "Is broadcast on television for the public", "Requires a formal legal contract"],
        correct: 1,
        topic: "Conflict Resolution Mechanisms",
        explanation: "Track II diplomacy operates outside the formal governmental arena, involving academics, think tanks, former officials, civil society leaders, and other influential non-governmental actors. Because it is unofficial and away from public scrutiny, it allows exploration of sensitive options, creative solutions, and relationship-building that official diplomats cannot pursue due to political constraints. It is called 'back-channel' because it operates behind the scenes of official negotiations. The Oslo Accords (1993) famously began as Track II contacts between Israeli academics and PLO officials."
    },
    {
        id: 93,
        question: "What is the primary characteristic of a 'Win-Win' (Integrative) negotiation?",
        options: ["Both sides feel like they lost", "The parties collaborate to identify mutual interests, thereby increasing the total value available to everyone", "One side takes everything", "The mediator decides who wins"],
        correct: 1,
        topic: "Conflict Resolution Mechanisms",
        explanation: "Win-Win (Integrative) negotiation is characterized by collaborative problem-solving where parties work together to identify shared and complementary interests, generating creative solutions that satisfy both parties' core needs. Rather than dividing a fixed pie (zero-sum), integrative negotiation expands the pie by finding options that create value for everyone. It requires open communication about underlying interests, trust, and creativity. Fisher and Ury's 'Getting to Yes' is the foundational text. Integrative agreements are more durable because both parties feel their needs were genuinely addressed."
    },
    {
        id: 94,
        question: "Which of the following is an example of 'Non-violent Action'?",
        options: ["An armed military coup", "A peaceful protest march or a consumer boycott", "A covert assassination plot", "A cyber-attack on a government website"],
        correct: 1,
        topic: "Conflict Resolution Approaches",
        explanation: "Non-violent action encompasses a wide range of methods for challenging injustice and exercising political power without physical violence. Peaceful protest marches and consumer boycotts are classic examples — they apply social, economic, and political pressure without harming anyone physically. Gene Sharp identified 198 methods of non-violent action, including strikes, sit-ins, civil disobedience, and non-cooperation. Gandhi's independence movement and King's civil rights movement demonstrated that non-violent action can be more powerful than violence by maintaining moral authority and mobilizing mass participation."
    },
    {
        id: 95,
        question: "In the context of the Responsibility to Protect (R2P), when is the international community permitted to intervene in a state?",
        options: ["When a country changes its political party", "When a state fails to protect its population from mass atrocities like genocide or ethnic cleansing", "When a country refuses to trade with its neighbors", "When a country holds a national election"],
        correct: 1,
        topic: "International Conflict",
        explanation: "The Responsibility to Protect (R2P), adopted at the 2005 UN World Summit, establishes a clear threshold for international intervention: when a state fails to protect its population from the four mass atrocity crimes — genocide, war crimes, ethnic cleansing, and crimes against humanity — or is itself the perpetrator. R2P does not authorize intervention for ordinary political disagreements, election disputes, or trade conflicts. It represents a fundamental shift from absolute sovereignty to conditional sovereignty: states retain sovereignty only as long as they fulfill their responsibility to protect their own people."
    },
    {
        id: 96,
        question: "What is the main goal of 'Restorative Justice'?",
        options: ["To punish the offender as harshly as possible", "To heal the damage done to the victim and the community through dialogue and accountability", "To protect the offender's identity", "To avoid any contact between the victim and offender"],
        correct: 1,
        topic: "Conflict Resolution Mechanisms",
        explanation: "Restorative Justice focuses on healing rather than punishment. Its primary goal is to repair the harm done to victims and communities by bringing together the victim, offender, and community in a structured dialogue where harm is acknowledged, responsibility is taken, and reparative actions are agreed upon. Unlike retributive justice (which asks 'what punishment does the offender deserve?'), restorative justice asks 'what does the victim need?' and 'how can the harm be repaired?' Research consistently shows restorative processes produce higher victim satisfaction, greater offender accountability, and lower reoffending rates."
    },
    {
        id: 97,
        question: "When a conflict is in a 'Latent' stage, it means:",
        options: ["The conflict is currently violent and in the headlines", "The conditions for conflict exist, but the parties have not yet acted upon them openly", "The conflict has been fully resolved", "The parties have signed a treaty"],
        correct: 1,
        topic: "Conflict Dynamics",
        explanation: "The Latent stage is the first phase of the conflict life cycle, where underlying tensions, grievances, and incompatibilities exist but have not yet erupted into open confrontation. The conflict is hidden or dormant — like a volcano that has not yet erupted. Structural injustices, unmet needs, and historical grievances may be building pressure beneath the surface. This stage is the most important for conflict prevention — intervening to address root causes during the latent phase is far more effective and less costly than managing open violence after escalation."
    },
    {
        id: 98,
        question: "The 'Frustration-Aggression Theory' argues that violence often stems from:",
        options: ["Having too much leisure time", "The frustration caused when individuals are blocked from attaining their desired goals", "Being too wealthy", "Being too well-educated"],
        correct: 1,
        topic: "Theories of Conflict",
        explanation: "The Frustration-Aggression Theory, proposed by Dollard and colleagues (1939), posits that aggression is always a consequence of frustration — the blocking of goal-directed behavior. When individuals or groups are prevented from achieving their goals by poverty, discrimination, political exclusion, or unmet needs, the resulting frustration generates aggressive impulses that may manifest as violence. This theory has been applied to explain riots, revolutions, and ethnic violence. Leonard Berkowitz later refined it, arguing that frustration creates a readiness for aggression rather than automatically producing it."
    },
    {
        id: 99,
        question: "Which of the following describes 'Peacemaking'?",
        options: ["Building schools and roads after a conflict ends", "The diplomatic process of bringing conflicting parties together to agree to a voluntary resolution", "Forcibly ending a conflict with military power", "Watching over a ceasefire border"],
        correct: 1,
        topic: "Peacebuilding",
        explanation: "Peacemaking refers to diplomatic efforts to bring hostile parties to a voluntary agreement, typically through negotiation, mediation, or other conflict resolution processes. It is the middle phase of the peace continuum: peacekeeping stops the fighting, peacemaking negotiates the settlement, and peacebuilding constructs lasting peace. Peacemaking is distinct from peace enforcement (which uses force) and peacebuilding (which addresses root causes). Famous examples include the Oslo Accords (1993), the Good Friday Agreement (1998), and the Dayton Agreement (1995) that ended the Bosnian War."
    },
    {
        id: 100,
        question: "What is the most effective way to deal with a 'Hurting Stalemate'?",
        options: ["Ignore it and hope it goes away", "Recognize it as a ripe moment for mediation or negotiation because both sides realize they cannot achieve their goals through force", "Send more weapons to one side to ensure they win", "Declare that neither side is capable of negotiating"],
        correct: 1,
        topic: "Conflict Dynamics",
        explanation: "I. William Zartman's concept of 'ripeness' holds that a hurting stalemate — where both parties are locked in a mutually painful deadlock, neither winning nor willing to back down — creates the optimal conditions for negotiation. Both sides recognize that continuing the conflict costs more than a negotiated settlement. The most effective response is to recognize this ripe moment and introduce mediation or negotiation before the window closes. Skilled conflict interveners watch for hurting stalemates and act quickly, as the ripeness window can be brief and parties may return to fighting if the moment is missed."
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = GST202_QUESTIONS;
}
