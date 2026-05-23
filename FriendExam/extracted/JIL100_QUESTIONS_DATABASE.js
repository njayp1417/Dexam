const JIL100_QUESTIONS = [
    {
        id: 1,
        question: "The Constitution of the Federal Republic of Nigeria 1999 (as amended) is known as the Grundnorm. What does this term signify in the Nigerian legal system?",
        options: ["The law governing traditional rulers", "The supreme law of the land from which all other laws derive their validity", "The law that regulates criminal proceedings in magistrates' courts", "A collection of English common law statutes"],
        correct: 1,
        topic: "Nigerian Constitution and Sources of Law",
        explanation: "The term 'Grundnorm' was coined by Austrian jurist Hans Kelsen in his Pure Theory of Law. It refers to the foundational norm from which all other legal norms in a legal system derive their validity. In Nigeria, the 1999 Constitution (as amended) is the Grundnorm — it is the supreme law of the land. Section 1(1) of the Constitution expressly states: 'This Constitution is supreme and its provisions shall have binding force on all authorities and persons throughout the Federal Republic of Nigeria.' Any law inconsistent with the Constitution is void to the extent of its inconsistency (Section 1(3))."
    },
    {
        id: 2,
        question: "Which of the following is not a recognized source of Nigerian Law under the standard legal classification?",
        options: ["Received English Law", "Nigerian Legislation (Acts and Laws)", "Customary Law", "International Private Laws of non-UN member states"],
        correct: 3,
        topic: "Sources of Nigerian Law",
        explanation: "The recognized sources of Nigerian Law are: (1) The Nigerian Constitution; (2) Nigerian Legislation — Acts of the National Assembly and Laws of State Houses of Assembly; (3) Received English Law — English Common Law, Doctrines of Equity, and Statutes of General Application in force in England on January 1, 1900; (4) Customary Law — including Islamic law (in applicable states); (5) Judicial Precedent (case law); and (6) International Law (treaties ratified by Nigeria). 'International Private Laws of non-UN member states' is not a recognized category and has no standing as a source of Nigerian law."
    },
    {
        id: 3,
        question: "The doctrine of Stare Decisis (or Judicial Precedent) is a cornerstone of the Nigerian judiciary. What does this doctrine require?",
        options: ["Lower courts must follow the binding legal principles (ratio decidendi) set by higher courts in the same hierarchy", "Judges must make new laws regardless of previous decisions", "Higher courts must always follow the decisions of lower courts", "Courts can ignore previous judgments if they find them inconvenient"],
        correct: 0,
        topic: "Judicial Precedent",
        explanation: "Stare decisis (Latin: 'to stand by things decided') is the doctrine that requires courts to follow the legal principles established in previous decisions of higher courts within the same judicial hierarchy. In Nigeria, the hierarchy is: Supreme Court (highest) → Court of Appeal → Federal/State High Courts → Magistrate Courts. The binding part of a judgment is the ratio decidendi (the reason for the decision). Obiter dicta (things said by the way) are persuasive but not binding. The doctrine promotes consistency, predictability, and fairness in the legal system. The Supreme Court is not bound by its own previous decisions and can depart from them when it is right to do so."
    },
    {
        id: 4,
        question: "In the hierarchy of courts in Nigeria, which court holds the ultimate appellate jurisdiction?",
        options: ["Court of Appeal", "Federal High Court", "Supreme Court", "National Industrial Court"],
        correct: 2,
        topic: "Court Structure and Hierarchy",
        explanation: "The Supreme Court of Nigeria is the apex court and the final court of appeal in the Nigerian judicial hierarchy. It was established by Section 230 of the 1999 Constitution. It has both original jurisdiction (in disputes between the Federation and a State, or between States) and appellate jurisdiction (hearing appeals from the Court of Appeal). Its decisions are final and binding on all other courts in Nigeria. The Court of Appeal sits below the Supreme Court and hears appeals from the Federal High Court, State High Courts, and other specialized courts. The Chief Justice of Nigeria presides over the Supreme Court."
    },
    {
        id: 5,
        question: "What is the fundamental distinction between Civil Law and Criminal Law?",
        options: ["Civil law is based on customs, while criminal law is based on legislation", "Civil law deals with disputes between individuals/entities, while criminal law deals with offences against the state punishable by law", "Criminal law covers contract disputes, while civil law covers murder", "There is no distinction in the Nigerian legal system"],
        correct: 1,
        topic: "Classification of Law",
        explanation: "Civil law and criminal law are the two primary branches of Nigerian law. Civil law governs disputes between private parties (individuals, companies, or organizations) where the aggrieved party (plaintiff/claimant) sues for a remedy such as damages, injunction, or specific performance. The standard of proof is on the balance of probabilities. Criminal law deals with acts or omissions that are offences against the state and society, prosecuted by the state (through the Attorney-General). The standard of proof is beyond reasonable doubt, and punishment includes fines, imprisonment, or death. The same act (e.g., assault) can give rise to both civil and criminal liability simultaneously."
    },
    {
        id: 6,
        question: "Which branch of government in Nigeria is constitutionally vested with the power to enact primary legislation (Acts of the National Assembly)?",
        options: ["The Executive", "The Judiciary", "The Legislature", "The Police Service Commission"],
        correct: 2,
        topic: "Separation of Powers",
        explanation: "Under the doctrine of separation of powers enshrined in the 1999 Constitution, legislative power is vested in the National Assembly (at the federal level) and State Houses of Assembly (at the state level). The National Assembly consists of the Senate and the House of Representatives. It has power to make laws on matters in the Exclusive Legislative List (Schedule 2) and the Concurrent Legislative List. The Executive (President/Governors) implements laws, and the Judiciary interprets them. This separation prevents any one branch from accumulating excessive power and provides a system of checks and balances."
    },
    {
        id: 7,
        question: "The doctrine of Separation of Powers in the Nigerian Constitution is primarily intended to:",
        options: ["Grant the President absolute authority over the judiciary", "Prevent the concentration of power by dividing functions among the Executive, Legislature, and Judiciary", "Eliminate the need for courts", "Allow the legislature to enforce judicial judgments"],
        correct: 1,
        topic: "Separation of Powers",
        explanation: "The doctrine of separation of powers, attributed to French philosopher Montesquieu (The Spirit of the Laws, 1748), divides governmental power among three distinct branches: the Legislature (law-making), the Executive (law implementation and administration), and the Judiciary (law interpretation and dispute resolution). In Nigeria, this is reflected in Sections 4, 5, and 6 of the 1999 Constitution. The doctrine prevents tyranny by ensuring no single branch can dominate the others. It is reinforced by a system of checks and balances — e.g., the legislature can impeach the president, the president can veto legislation, and the judiciary can declare laws unconstitutional."
    },
    {
        id: 8,
        question: "In a criminal trial in Nigeria, what is the standard of proof required for the prosecution to secure a conviction?",
        options: ["Balance of probabilities", "Reasonable suspicion", "Proof beyond reasonable doubt", "Substantial evidence"],
        correct: 2,
        topic: "Criminal Law and Procedure",
        explanation: "In Nigerian criminal law, the prosecution bears the burden of proving the guilt of the accused beyond reasonable doubt. This is the highest standard of proof in law, reflecting the principle that it is better for a guilty person to go free than for an innocent person to be wrongly convicted. 'Beyond reasonable doubt' does not mean absolute certainty, but it means the evidence must be so compelling that no reasonable person would have a significant doubt about the accused's guilt. This standard is enshrined in Section 36(5) of the 1999 Constitution, which provides that every accused person is presumed innocent until proven guilty. In civil cases, the lower standard of 'balance of probabilities' applies."
    },
    {
        id: 9,
        question: "Historically, Equity was developed in the English legal system to:",
        options: ["Replace the Common Law completely", "Provide flexible remedies where the Common Law was too rigid or inadequate", "Abolish the traditional court system", "Limit the power of the Supreme Court"],
        correct: 1,
        topic: "Sources of Nigerian Law",
        explanation: "Equity developed in England from the 15th century as a body of law administered by the Lord Chancellor in the Court of Chancery. The Common Law had become rigid and formulaic, often producing unjust results. Equity supplemented the Common Law by providing flexible, conscience-based remedies where the Common Law was inadequate. Equitable remedies include: injunctions (orders to do or refrain from doing something), specific performance (compelling a party to fulfill a contract), rescission (setting aside a contract), and rectification (correcting a written document). Equity also developed important doctrines such as trusts, estoppel, and undue influence. In Nigeria, Equity is received as part of English law applicable as of January 1, 1900."
    },
    {
        id: 10,
        question: "Which body is constitutionally responsible for the appointment and discipline of judicial officers in Nigeria?",
        options: ["The Nigerian Bar Association", "The National Judicial Council (NJC)", "The Federal Ministry of Justice", "The House of Representatives"],
        correct: 1,
        topic: "Court Structure and Hierarchy",
        explanation: "The National Judicial Council (NJC) is established by Section 153 and Part I of the Third Schedule to the 1999 Constitution. It is chaired by the Chief Justice of Nigeria and is responsible for: recommending the appointment of judicial officers (judges of superior courts), exercising disciplinary control over judicial officers, advising the President and Governors on the appointment of judicial officers, and managing the finances of the judiciary. The NJC was created to insulate the judiciary from executive interference and ensure judicial independence. It plays a critical role in maintaining the integrity and independence of the Nigerian judiciary."
    },
    {
        id: 11,
        question: "What is the Ratio Decidendi of a court judgment?",
        options: ["The side comments or observations made by the judge", "The core legal principle or reason for the court's decision", "The list of witnesses who testified", "The biographical information of the judge"],
        correct: 1,
        topic: "Judicial Precedent",
        explanation: "The ratio decidendi (Latin: 'the reason for the decision') is the binding part of a court judgment. It is the legal principle or rule of law that the court applied to the material facts of the case to reach its decision. It is this principle that creates binding precedent under the doctrine of stare decisis — lower courts in the same hierarchy must follow the ratio decidendi of higher court decisions. It is distinguished from obiter dicta (Latin: 'things said by the way') — observations, hypothetical scenarios, or comments made by the judge that were not essential to the decision. Obiter dicta are persuasive but not binding. Identifying the ratio decidendi of a case is a fundamental skill in legal analysis."
    },
    {
        id: 12,
        question: "Which court in Nigeria has exclusive jurisdiction over matters relating to revenue accruing to the Federation and taxation of companies?",
        options: ["State High Court", "Federal High Court", "Magistrate Court", "Customary Court"],
        correct: 1,
        topic: "Court Structure and Hierarchy",
        explanation: "The Federal High Court, established by Section 249 of the 1999 Constitution, has exclusive original jurisdiction over a wide range of federal matters as specified in Section 251. These include: revenue of the Federation and taxation of companies, matters relating to the Constitution (other than fundamental rights), banking and financial institutions, admiralty jurisdiction, copyright, patents and trademarks, aviation, mines and minerals, and matters involving federal government agencies. The Federal High Court sits in all 36 states and the FCT. Its decisions are appealable to the Court of Appeal and ultimately the Supreme Court."
    },
    {
        id: 13,
        question: "Customary Law in Nigeria is only enforceable if:",
        options: ["It is recorded in a statute book", "It is not repugnant to natural justice, equity, and good conscience", "It has been explicitly approved by the President", "It is practiced by all Nigerians"],
        correct: 1,
        topic: "Customary Law",
        explanation: "Customary law in Nigeria is subject to the 'repugnancy test' — it will not be enforced if it is repugnant to natural justice, equity, and good conscience. This test was introduced during the colonial era and is preserved in various Evidence Acts and court rules. Additionally, customary law must pass two other tests: the 'incompatibility test' (it must not be incompatible with any written law in force) and the 'public policy test' (it must not be contrary to public policy). Customary law is also required to be certain, consistent, and widely accepted within the community that practices it. Islamic law (Sharia) is a form of customary law applicable in northern Nigerian states."
    },
    {
        id: 14,
        question: "Who is the Chief Law Officer of the Federation of Nigeria?",
        options: ["The Chief Justice of Nigeria", "The Attorney-General of the Federation", "The Inspector General of Police", "The President"],
        correct: 1,
        topic: "Legal Officers and Institutions",
        explanation: "The Attorney-General of the Federation (AGF) is established by Section 150 of the 1999 Constitution as the Chief Law Officer of the Federation and Minister of Justice. The AGF's functions include: instituting and undertaking criminal proceedings on behalf of the Federal Government, taking over and continuing or discontinuing criminal proceedings instituted by any other authority, advising the President and Federal Executive Council on legal matters, and representing the Federal Government in legal proceedings. The AGF also has supervisory authority over the Director of Public Prosecutions (DPP). Each state has an Attorney-General who performs similar functions at the state level."
    },
    {
        id: 15,
        question: "A Tort is a branch of civil law that deals with:",
        options: ["Contractual disputes between businesses", "Civil wrongs (independent of contract) for which the law provides a remedy, such as negligence or defamation", "Criminal acts committed by government officials", "The registration of trade unions"],
        correct: 1,
        topic: "Classification of Law",
        explanation: "The law of torts is a branch of civil law that deals with civil wrongs — acts or omissions that cause harm or loss to another person, independent of any contractual relationship, for which the law provides a remedy (usually damages). Common torts include: negligence (failure to exercise reasonable care), defamation (false statements that damage reputation), trespass (to person, land, or goods), nuisance (interference with enjoyment of land), and occupier's liability. The key distinction from contract law is that tortious liability arises from a duty imposed by law, not from an agreement between parties. The landmark case of Donoghue v Stevenson [1932] established the modern law of negligence and the 'neighbour principle.'"
    },
    {
        id: 16,
        question: "What is the primary significance of the Rule of Law?",
        options: ["The law is supreme, and no one (including the government) is above it", "The government can override the law in any situation", "Only the police have the right to interpret the law", "Law is only applicable to the poor"],
        correct: 0,
        topic: "Fundamental Legal Principles",
        explanation: "The Rule of Law is a foundational principle of constitutional democracy, articulated by British jurist A.V. Dicey in his Introduction to the Study of the Law of the Constitution (1885). Dicey identified three elements: (1) Supremacy of law — no person is punishable except for a breach of law established in the ordinary legal manner; (2) Equality before the law — every person, regardless of rank or status, is subject to the ordinary law of the land; and (3) The constitution is the result of the ordinary law of the land. In Nigeria, the Rule of Law is enshrined in the 1999 Constitution, which declares itself supreme and binds all persons and authorities, including the President and the National Assembly."
    },
    {
        id: 17,
        question: "Which specialized court in Nigeria has exclusive jurisdiction over labour and industrial relations matters?",
        options: ["High Court", "National Industrial Court", "Customary Court of Appeal", "Probate Court"],
        correct: 1,
        topic: "Court Structure and Hierarchy",
        explanation: "The National Industrial Court of Nigeria (NICN) was established by the National Industrial Court Act 2006 and elevated to a superior court of record by the Third Alteration to the 1999 Constitution (2010). It has exclusive jurisdiction over: labour, employment, trade unions, and industrial relations matters; matters relating to the application of international labour standards; and workplace discrimination and harassment. Its decisions are appealable directly to the Court of Appeal. The NICN was created to provide specialized adjudication of employment and labour disputes, reducing the burden on general courts and ensuring expertise in this technical area of law."
    },
    {
        id: 18,
        question: "What is the structural difference between a Statute and Common Law?",
        options: ["Statutes are laws passed by the legislature, while Common Law is based on judicial precedent", "Common Law is passed by the National Assembly, while Statutes are based on tradition", "There is no difference in origin", "Statutes apply only to criminal cases"],
        correct: 0,
        topic: "Sources of Nigerian Law",
        explanation: "Statutes (also called legislation or enacted law) are formal laws deliberately created by a legislative body — in Nigeria, the National Assembly (federal) or State Houses of Assembly (state). They are written, codified, and published in official gazettes. Common Law, by contrast, is judge-made law — legal principles developed by courts through the process of deciding cases over centuries. It is found in law reports (collections of court judgments) rather than statute books. When a statute and common law conflict, the statute prevails (parliamentary supremacy). Common law fills gaps where no statute exists. In Nigeria, received English Common Law applies as of January 1, 1900, subject to local legislation."
    },
    {
        id: 19,
        question: "Who is the head of the Judiciary in Nigeria?",
        options: ["The President", "The Attorney-General of the Federation", "The Chief Justice of Nigeria", "The President of the Court of Appeal"],
        correct: 2,
        topic: "Court Structure and Hierarchy",
        explanation: "The Chief Justice of Nigeria (CJN) is the head of the Nigerian judiciary and the presiding officer of the Supreme Court of Nigeria. The CJN is appointed by the President on the recommendation of the National Judicial Council, subject to confirmation by the Senate (Section 231, 1999 Constitution). The CJN's functions include: presiding over the Supreme Court, swearing in the President and Vice-President, heading the National Judicial Council, and administering the oath of office to the President in the absence of the President of the Senate. The President of the Court of Appeal heads the Court of Appeal, while each State has a Chief Judge heading the State High Court."
    },
    {
        id: 20,
        question: "Which court has original jurisdiction in matters relating to the interpretation and enforcement of the Constitution in a fundamental human rights context?",
        options: ["Magistrate Court", "Customary Court", "High Court (State or Federal)", "Traditional Tribunal"],
        correct: 2,
        topic: "Court Structure and Hierarchy",
        explanation: "Under Section 46(1) of the 1999 Constitution, any person who alleges that their fundamental rights (as guaranteed in Chapter IV of the Constitution) have been, are being, or are likely to be contravened may apply to a High Court for redress. The Fundamental Rights (Enforcement Procedure) Rules 2009 govern the procedure for such applications. Both the Federal High Court and State High Courts have concurrent jurisdiction in fundamental rights enforcement matters. Magistrate Courts and Customary Courts do not have jurisdiction to interpret the Constitution or enforce fundamental rights. The High Court can grant remedies including declarations, injunctions, and damages for constitutional violations."
    },
    {
        id: 21,
        question: "What does the term 'Locus Standi' mean in Nigerian law?",
        options: ["The right of a judge to retire early", "The legal capacity or standing of a party to institute or maintain an action in a court of law", "A request for the court to postpone a hearing", "A type of criminal sentencing"],
        correct: 1,
        topic: "Fundamental Legal Principles",
        explanation: "Locus standi (Latin: 'place of standing') is the legal right or capacity of a person to bring an action before a court. A party must demonstrate sufficient interest in the subject matter of the litigation to be entitled to seek judicial relief. In Nigeria, the requirement of locus standi is a threshold issue — if a claimant lacks standing, the court will strike out the case without hearing its merits. The landmark Nigerian case of Senator Abraham Adesanya v President of Nigeria (1981) established that a plaintiff must show a sufficient legal interest that is directly affected by the matter in dispute. The 1999 Constitution has expanded locus standi in some areas, particularly in public interest litigation."
    },
    {
        id: 22,
        question: "Which of the following is considered a 'Statute of General Application' in Nigeria?",
        options: ["Any law passed by a state local government", "English statutes that were in force in England on January 1, 1900", "All laws passed by the Nigerian National Assembly", "Customary laws of the Yoruba people"],
        correct: 1,
        topic: "Sources of Nigerian Law",
        explanation: "Statutes of General Application are English statutes that were in force in England on January 1, 1900 (the date of reception of English law in Nigeria) and which are of general application — meaning they were not limited to specific localities or classes of persons in England. They form part of received English law and apply in Nigeria to the extent that local circumstances permit and subject to any modifications by Nigerian legislation. Examples include the Statute of Frauds 1677, the Limitation Act, and the Wills Act 1837. They are distinguished from English statutes of local application (which do not apply in Nigeria) and from Nigerian legislation (which takes precedence over received English law)."
    },
    {
        id: 23,
        question: "In the Nigerian legal system, what is the role of 'Obiter Dicta'?",
        options: ["It is the binding part of a judgment", "It refers to statements made by a judge that are not essential to the decision of the case but may carry persuasive weight", "It is the official record of court proceedings", "It is a type of penalty for contempt of court"],
        correct: 1,
        topic: "Judicial Precedent",
        explanation: "Obiter dicta (Latin: 'things said by the way') are judicial statements made in the course of a judgment that are not essential to the decision — they are not part of the ratio decidendi and therefore do not create binding precedent. However, obiter dicta can carry significant persuasive authority, especially when made by senior courts or eminent judges. They may be followed by lower courts or courts in other jurisdictions as persuasive precedent. Obiter dicta include: hypothetical scenarios discussed by the judge, statements about legal principles not directly in issue, and dissenting judgments. The distinction between ratio decidendi and obiter dicta is not always clear-cut and is a matter of legal interpretation."
    },
    {
        id: 24,
        question: "Which document contains the 'Fundamental Rights' of citizens in Nigeria?",
        options: ["The Nigerian Penal Code", "Chapter IV of the 1999 Constitution", "The Evidence Act", "The Companies and Allied Matters Act (CAMA)"],
        correct: 1,
        topic: "Nigerian Constitution and Sources of Law",
        explanation: "Chapter IV of the 1999 Constitution (Sections 33–46) contains the Fundamental Rights of Nigerian citizens and residents. These rights include: Right to Life (S.33), Right to Dignity of Human Person (S.34), Right to Personal Liberty (S.35), Right to Fair Hearing (S.36), Right to Private and Family Life (S.37), Right to Freedom of Thought, Conscience and Religion (S.38), Right to Freedom of Expression and the Press (S.39), Right to Peaceful Assembly and Association (S.40), Right to Freedom of Movement (S.41), Right to Freedom from Discrimination (S.42), and Right to Acquire and Own Immovable Property (S.43). Section 46 provides the enforcement mechanism through the High Court."
    },
    {
        id: 25,
        question: "What is the function of the 'Court of Appeal' in Nigeria?",
        options: ["To act as the court of first instance for all murder cases", "To hear and determine appeals from the Federal High Court, State High Courts, and other lower courts", "To enact new laws for the Federation", "To represent the government in criminal trials"],
        correct: 1,
        topic: "Court Structure and Hierarchy",
        explanation: "The Court of Appeal is established by Section 237 of the 1999 Constitution and sits between the Supreme Court and the High Courts in the judicial hierarchy. Its primary function is appellate — it hears appeals from the Federal High Court, State High Courts, National Industrial Court, Sharia Courts of Appeal, Customary Courts of Appeal, and other tribunals. It also has original jurisdiction in election petitions relating to the offices of President and Vice-President. The Court of Appeal is headed by the President of the Court of Appeal and sits in multiple divisions across Nigeria. Its decisions are binding on all lower courts and are only subject to further appeal to the Supreme Court."
    },
    {
        id: 26,
        question: "Which of the following is a 'Legal Person' capable of suing and being sued in Nigeria?",
        options: ["A domestic animal", "A registered incorporated company", "An unborn child", "A ghost"],
        correct: 1,
        topic: "Fundamental Legal Principles",
        explanation: "In law, a 'legal person' (or legal entity) is a being recognized by law as having rights and obligations, including the capacity to sue and be sued. There are two types: natural persons (human beings) and artificial persons (legal entities created by law). A registered incorporated company is an artificial legal person — upon incorporation under the Companies and Allied Matters Act (CAMA) 2020, it acquires a separate legal personality distinct from its members (the principle established in Salomon v Salomon & Co Ltd [1897]). It can own property, enter contracts, sue and be sued in its own name. Animals, unborn children (with limited exceptions), and non-legal entities cannot be parties to litigation."
    },
    {
        id: 27,
        question: "'Natural Justice' includes which of the following twin pillars?",
        options: ["The right to a lawyer and the right to silence", "Audi alteram partem (hear the other side) and Nemo judex in causa sua (no one should be a judge in their own cause)", "Right to bail and right to appeal", "Freedom of speech and freedom of assembly"],
        correct: 1,
        topic: "Fundamental Legal Principles",
        explanation: "Natural justice comprises two fundamental rules of procedural fairness that must be observed by courts, tribunals, and any body exercising judicial or quasi-judicial functions. The first rule — Audi alteram partem ('hear the other side') — requires that every party must be given adequate notice of the proceedings and a fair opportunity to present their case before a decision is made against them. The second rule — Nemo judex in causa sua ('no one should be a judge in their own cause') — requires that the decision-maker must be impartial and free from bias, whether actual or apparent. Breach of either rule renders a decision void. These principles are enshrined in Section 36 of the 1999 Constitution as the right to fair hearing."
    },
    {
        id: 28,
        question: "What is the effect of an 'Ultra Vires' act by a government agency or corporation?",
        options: ["It is perfectly legal and binding", "It is void and of no legal effect because it exceeds the powers granted by law", "It is only applicable to private individuals", "It is a matter for the legislature to decide"],
        correct: 1,
        topic: "Fundamental Legal Principles",
        explanation: "Ultra vires (Latin: 'beyond the powers') refers to an act performed beyond the legal authority or powers conferred by law. In company law, an ultra vires act is one that falls outside the objects clause of the company's memorandum of association. In administrative law, an ultra vires act is one that exceeds the powers granted to a government agency, official, or body by its enabling statute. The consequence is that the act is void ab initio (void from the beginning) and of no legal effect. Courts can declare such acts null and void through judicial review. The doctrine is a key mechanism for controlling the exercise of public power and ensuring that government bodies act within their legal authority."
    },
    {
        id: 29,
        question: "In Nigeria, 'Customary Courts' are primarily established to:",
        options: ["Handle complex commercial contracts", "Administer justice based on the customs and traditions of the people within their jurisdiction", "Hear appeals from the Supreme Court", "Try treason cases"],
        correct: 1,
        topic: "Court Structure and Hierarchy",
        explanation: "Customary Courts (also called Area Courts in northern Nigeria) are established by state laws to administer customary law and, in applicable states, Islamic law (Sharia) in civil and minor criminal matters. They operate at the grassroots level and are accessible to rural communities. Their jurisdiction typically covers: personal law matters (marriage, divorce, inheritance, land disputes) governed by customary law, minor civil disputes, and petty criminal offences. They are presided over by persons knowledgeable in local customs rather than legally trained judges. Appeals from Customary Courts go to the Customary Court of Appeal, then to the Court of Appeal. They play a vital role in making justice accessible to the majority of Nigerians."
    },
    {
        id: 30,
        question: "Which court has the power to decide on the validity of an election to the office of the Governor of a State?",
        options: ["State High Court", "Election Petition Tribunal", "Magistrate Court", "Customary Court"],
        correct: 1,
        topic: "Court Structure and Hierarchy",
        explanation: "Under Section 285 of the 1999 Constitution (as amended by the Fourth Alteration Act 2017), election petitions challenging the election of a State Governor are heard by the Governorship Election Petition Tribunal, which is constituted by the President of the Court of Appeal. Appeals from the Tribunal go to the Court of Appeal (whose decision is final on governorship elections). Presidential election petitions are heard by the Court of Appeal, with appeals to the Supreme Court. National Assembly election petitions go to the National/State Assembly Election Petition Tribunal, with appeals to the Court of Appeal. The Electoral Act 2022 governs the procedure for election petitions, including strict timelines."
    },
    {
        id: 31,
        question: "'Admissibility of Evidence' in Nigerian courts is primarily governed by:",
        options: ["The Constitution", "The Evidence Act", "The Criminal Procedure Act", "Common Law tradition only"],
        correct: 1,
        topic: "Criminal Law and Procedure",
        explanation: "The admissibility of evidence in Nigerian courts is primarily governed by the Evidence Act 2011 (which repealed and replaced the Evidence Act Cap E14 LFN 2004). The Evidence Act applies to all judicial proceedings in federal courts and, by adoption, in most state courts. It governs: what evidence is admissible (relevant and not excluded by law), the burden and standard of proof, the competence and compellability of witnesses, documentary evidence and electronic records, confessions and admissions, hearsay evidence, expert evidence, and privilege. The Act was significantly modernized in 2011 to accommodate electronic evidence and align with contemporary evidentiary standards. Customary courts may apply customary rules of evidence."
    },
    {
        id: 32,
        question: "What does the term 'Mens Rea' signify in criminal law?",
        options: ["The physical act of committing a crime", "The guilty mind or criminal intent of the accused", "The evidence provided by witnesses", "The sentence given by the judge"],
        correct: 1,
        topic: "Criminal Law and Procedure",
        explanation: "Mens rea (Latin: 'guilty mind') is the mental element of a crime — the state of mind that the prosecution must prove the accused had at the time of committing the criminal act. It is one of the two essential elements of most crimes (the other being actus reus). Forms of mens rea include: intention (the accused desired the consequence), recklessness (the accused foresaw the risk but took it anyway), negligence (the accused failed to meet the standard of a reasonable person), and knowledge. The principle is expressed in the Latin maxim: 'Actus non facit reum nisi mens sit rea' — 'An act does not make a person guilty unless the mind is also guilty.' Some offences are strict liability — they require no mens rea."
    },
    {
        id: 33,
        question: "'Actus Reus' refers to:",
        options: ["The criminal intent", "The guilty act or omission", "The lawyer's argument", "The judge's verdict"],
        correct: 1,
        topic: "Criminal Law and Procedure",
        explanation: "Actus reus (Latin: 'guilty act') is the physical element of a crime — the voluntary act, omission, or state of affairs that constitutes the external element of the offence. Together with mens rea, it forms the two essential elements that the prosecution must prove to secure a conviction. The actus reus can be: a positive act (stabbing someone), an omission where there is a legal duty to act (a parent failing to feed a child), or a state of affairs (being in possession of prohibited items). The act must be voluntary — involuntary acts (e.g., acts during a seizure) do not constitute actus reus. In Nigeria, criminal offences are defined in the Criminal Code (southern states) and the Penal Code (northern states)."
    },
    {
        id: 34,
        question: "Which of these is a ground for seeking 'Judicial Review'?",
        options: ["The judge did not like the defendant", "Abuse of discretion, procedural impropriety, or illegality in administrative action", "The defendant is wealthy", "The defendant wants a new lawyer"],
        correct: 1,
        topic: "Fundamental Legal Principles",
        explanation: "Judicial review is the process by which courts supervise the exercise of public power by government bodies, agencies, and officials to ensure they act lawfully. In the landmark English case of Council of Civil Service Unions v Minister for the Civil Service [1985] (the GCHQ case), Lord Diplock identified three grounds for judicial review: Illegality (the decision-maker acted outside their legal powers — ultra vires), Irrationality/Abuse of Discretion (the decision was so unreasonable that no reasonable authority could have made it — the Wednesbury unreasonableness test), and Procedural Impropriety (failure to follow required procedures or breach of natural justice). In Nigeria, judicial review applications are made to the Federal High Court or State High Court."
    },
    {
        id: 35,
        question: "'Privity of Contract' means:",
        options: ["Contracts are public documents", "Only parties to a contract can sue or be sued on it", "Contracts must be signed by the President", "Contracts cannot be breached"],
        correct: 1,
        topic: "Classification of Law",
        explanation: "The doctrine of privity of contract is a fundamental principle of contract law that provides that only the parties to a contract can acquire rights or incur obligations under it — a third party (a stranger to the contract) cannot sue to enforce it, even if the contract was made for their benefit. The doctrine was firmly established in the English case of Dunlop Pneumatic Tyre Co v Selfridge & Co Ltd [1915] and is applied in Nigerian contract law. The doctrine has been criticized for producing harsh results and has been modified in some jurisdictions. In Nigeria, exceptions exist through: agency, assignment of contractual rights, statutory exceptions, and the equitable doctrine of constructive trust."
    },
    {
        id: 36,
        question: "Which court hears appeals from the National Industrial Court?",
        options: ["Supreme Court", "Court of Appeal", "High Court", "Sharia Court of Appeal"],
        correct: 1,
        topic: "Court Structure and Hierarchy",
        explanation: "Following the Third Alteration to the 1999 Constitution in 2010, the National Industrial Court (NIC) was elevated to a superior court of record with a direct appeal route to the Court of Appeal. Section 243(2) of the Constitution (as amended) provides that appeals from the NIC lie to the Court of Appeal. Prior to this amendment, there was uncertainty about the appellate route from the NIC. The Court of Appeal's decision on NIC matters is further appealable to the Supreme Court. This appellate structure ensures that labour and employment law decisions receive proper judicial scrutiny at the highest levels of the Nigerian judiciary."
    },
    {
        id: 37,
        question: "'Habeas Corpus' is a prerogative writ used to:",
        options: ["Force a person to pay a debt", "Challenge the unlawful detention of a person and require the authority to justify the detention", "Amend the Constitution", "Sentence a criminal"],
        correct: 1,
        topic: "Fundamental Legal Principles",
        explanation: "Habeas corpus (Latin: 'you shall have the body') is one of the most important prerogative writs in common law, serving as a fundamental safeguard of personal liberty against arbitrary detention. When issued, it requires the detaining authority to bring the detained person before the court and justify the legal basis for the detention. If the detention is found to be unlawful, the court orders the immediate release of the detainee. In Nigeria, the right to personal liberty is guaranteed by Section 35 of the 1999 Constitution, and habeas corpus applications are made under the Fundamental Rights (Enforcement Procedure) Rules 2009. Other prerogative writs include mandamus (compelling performance of a public duty), certiorari (quashing an unlawful decision), and prohibition (preventing an unlawful act)."
    },
    {
        id: 38,
        question: "What is 'Jurisdiction'?",
        options: ["The type of lawyer representing a client", "The authority or power of a court to hear and determine a legal case", "The building where the court sits", "The date a case is filed"],
        correct: 1,
        topic: "Court Structure and Hierarchy",
        explanation: "Jurisdiction is the legal authority of a court to hear and determine a particular case. It is a threshold requirement — if a court lacks jurisdiction, any proceedings conducted and judgment delivered are null and void. Types of jurisdiction include: Subject Matter Jurisdiction (the court must have authority over the type of case — e.g., the Federal High Court has exclusive jurisdiction over federal revenue matters), Territorial Jurisdiction (the court must have authority over the geographic area where the matter arose), Pecuniary Jurisdiction (the court must have authority over the monetary value of the claim — Magistrate Courts have limits on the amount they can award), and Appellate Jurisdiction (authority to hear appeals from lower courts). Jurisdiction is conferred by the Constitution and enabling statutes."
    },
    {
        id: 39,
        question: "'Defamation' is a civil wrong (tort) that involves:",
        options: ["Physical assault", "Injury to a person's reputation through published or spoken falsehoods", "Stealing property", "Breach of contract"],
        correct: 1,
        topic: "Classification of Law",
        explanation: "Defamation is a tort that protects a person's reputation from false statements that lower them in the estimation of right-thinking members of society. It takes two forms: Libel (defamation in permanent form — written, printed, broadcast, or recorded) and Slander (defamation in transient form — spoken words or gestures). To succeed in a defamation claim, the claimant must prove: the statement was defamatory, it referred to the claimant, and it was published to a third party. Defences include: justification/truth (the statement is true), fair comment (honest opinion on a matter of public interest), and privilege (absolute privilege for parliamentary and judicial proceedings; qualified privilege for statements made in good faith). In Nigeria, defamation is also a criminal offence under the Criminal Code."
    },
    {
        id: 40,
        question: "Which of the following is considered an 'Inferior Court' in Nigeria?",
        options: ["Supreme Court", "Court of Appeal", "Magistrate Court", "Federal High Court"],
        correct: 2,
        topic: "Court Structure and Hierarchy",
        explanation: "Nigerian courts are classified as superior courts of record and inferior courts. Superior courts of record (established by the Constitution) include: the Supreme Court, Court of Appeal, Federal High Court, State High Courts, National Industrial Court, Sharia Courts of Appeal, and Customary Courts of Appeal. Inferior courts are established by legislation (not the Constitution) and include: Magistrate Courts, District Courts, Area Courts, Customary Courts, and other tribunals. Inferior courts have limited jurisdiction (subject matter, territorial, and pecuniary limits), their proceedings are subject to supervision by superior courts through judicial review, and they do not create binding precedent. Magistrate Courts handle the bulk of criminal cases and minor civil disputes in Nigeria."
    },
    {
        id: 41,
        question: "In Nigeria, what is the legal significance of the 'Repugnancy Test'?",
        options: ["It is used to determine if a criminal law is too harsh", "It is a test applied to Customary Law to ensure it is not contrary to natural justice, equity, and good conscience", "It is a test for the validity of a contract", "It is a procedure for appointing judges"],
        correct: 1,
        topic: "Customary Law",
        explanation: "The repugnancy test is the primary filter applied to customary law before it can be enforced by Nigerian courts. A rule of customary law will be declared unenforceable if it is repugnant to natural justice, equity, and good conscience. This test was introduced during the colonial era through various court ordinances and is preserved in the Evidence Act and court rules. Classic examples of customary practices struck down under the repugnancy test include: the Osu caste system (declaring certain persons as outcasts), widow inheritance practices that violate human dignity, and customary rules that deny women inheritance rights. The test has been criticized as a colonial imposition of Western values, but it remains a vital safeguard for fundamental human rights within the customary law framework."
    },
    {
        id: 42,
        question: "Which of the following is considered a 'Court of Record' in Nigeria?",
        options: ["Magistrate Court", "Customary Court", "High Court", "District Court"],
        correct: 2,
        topic: "Court Structure and Hierarchy",
        explanation: "A court of record is a court whose proceedings and judgments are officially recorded and preserved, and which has the power to punish for contempt of court. In Nigeria, superior courts of record are established by the Constitution and include: the Supreme Court, Court of Appeal, Federal High Court, State High Courts, National Industrial Court, Sharia Courts of Appeal, and Customary Courts of Appeal. Their records are permanent, admissible as evidence, and cannot be questioned in any proceedings. Inferior courts (Magistrate Courts, Customary Courts, District Courts) are generally not courts of record in the constitutional sense, though they maintain records of their proceedings. The distinction is significant because only courts of record can punish for contempt."
    },
    {
        id: 43,
        question: "The 'Attorney-General' at both the Federal and State levels is authorized to enter a Nolle Prosequi in criminal proceedings. What does this mean?",
        options: ["To demand a retrial", "To discontinue or terminate a criminal prosecution", "To increase the sentence of the accused", "To appeal the verdict of the lower court"],
        correct: 1,
        topic: "Legal Officers and Institutions",
        explanation: "Nolle prosequi (Latin: 'will no longer prosecute') is the power of the Attorney-General to discontinue or terminate criminal proceedings at any stage before judgment. This power is conferred by Section 174(1)(c) of the 1999 Constitution (for the AGF) and Section 211(1)(c) (for State Attorneys-General). When a nolle prosequi is entered, the accused is discharged (not acquitted) — meaning the same person can be re-prosecuted for the same offence in the future. The power is discretionary and is not subject to judicial review, though it has been criticized as susceptible to political abuse. It is distinct from a withdrawal of charges (which requires court leave) and an acquittal (which bars re-prosecution under the rule against double jeopardy)."
    },
    {
        id: 44,
        question: "Which of the following is not a method of Alternative Dispute Resolution (ADR)?",
        options: ["Negotiation", "Mediation", "Arbitration", "Litigation"],
        correct: 3,
        topic: "Fundamental Legal Principles",
        explanation: "Alternative Dispute Resolution (ADR) refers to methods of resolving disputes outside the formal court system. The main ADR methods are: Negotiation (direct discussion between parties to reach a mutually acceptable settlement), Mediation (a neutral third party facilitates negotiation but has no power to impose a decision), Arbitration (a neutral arbitrator hears both sides and makes a binding award — governed in Nigeria by the Arbitration and Conciliation Act), and Conciliation (similar to mediation but the conciliator may propose solutions). Litigation — the process of resolving disputes through the formal court system — is not ADR; it is the traditional adversarial process that ADR is designed to provide an alternative to. ADR is faster, cheaper, more private, and less adversarial than litigation."
    },
    {
        id: 45,
        question: "What is the function of the 'Supreme Court' regarding constitutional interpretation?",
        options: ["It acts as the final arbiter on constitutional matters", "It has no role in constitutional matters", "It only handles minor traffic offences", "It must defer to the National Assembly"],
        correct: 0,
        topic: "Court Structure and Hierarchy",
        explanation: "The Supreme Court of Nigeria is the final arbiter on all constitutional matters. Its interpretation of the Constitution is authoritative and binding on all other courts, government bodies, and persons in Nigeria. The Supreme Court exercises this power through: original jurisdiction in disputes between the Federation and States or between States (Section 232), appellate jurisdiction over constitutional questions from the Court of Appeal, and the power of judicial review to declare laws or executive actions unconstitutional. The Supreme Court's constitutional decisions can only be overridden by a constitutional amendment by the National Assembly. This power of constitutional review makes the Supreme Court a co-equal branch of government and a vital check on legislative and executive power."
    },
    {
        id: 46,
        question: "In Nigerian Criminal Law, what is 'Vicarious Liability'?",
        options: ["Liability imposed on an employer for the criminal acts of an employee", "Liability of a person for the acts of another, usually an employer for the acts of an employee committed in the course of employment", "Liability for one's own actions only", "The liability of the state for crimes committed by citizens"],
        correct: 1,
        topic: "Classification of Law",
        explanation: "Vicarious liability is a legal doctrine under which one person is held legally responsible for the wrongful acts of another, based on their relationship. In tort law, an employer (principal) is vicariously liable for torts committed by an employee (agent) in the course of their employment. The key requirements are: an employer-employee relationship (not an independent contractor), and the tort was committed in the course of employment (not on a 'frolic of their own'). In criminal law, vicarious liability is more limited — it generally applies only where a statute expressly imposes it (e.g., licensing offences, regulatory offences). The rationale is that employers benefit from employees' work and are better placed to prevent harm and compensate victims."
    },
    {
        id: 47,
        question: "What does 'Bail' mean in criminal proceedings?",
        options: ["The final sentence of the court", "The temporary release of an accused person awaiting trial, usually upon condition of a sum of money or security to guarantee their appearance in court", "The immediate acquittal of the accused", "The punishment for a minor offence"],
        correct: 1,
        topic: "Criminal Law and Procedure",
        explanation: "Bail is the conditional release of an accused person from custody pending trial or appeal, upon the accused (or a surety) providing a financial guarantee (bail bond) or other conditions to ensure the accused appears in court when required. The right to bail is connected to the constitutional presumption of innocence (Section 36(5), 1999 Constitution) — an accused should not be imprisoned before conviction unless necessary. Bail may be granted by the police (administrative bail) or by the court (judicial bail). Factors considered include: the nature and gravity of the offence, the likelihood of the accused absconding, the strength of the evidence, and the accused's criminal record. Bail may be refused for capital offences or where the accused is a flight risk."
    },
    {
        id: 48,
        question: "Which body has the power to discipline legal practitioners (lawyers) in Nigeria?",
        options: ["The Supreme Court", "The Legal Practitioners Disciplinary Committee (LPDC)", "The Nigerian Police Force", "The Attorney-General"],
        correct: 1,
        topic: "Legal Officers and Institutions",
        explanation: "The Legal Practitioners Disciplinary Committee (LPDC) is established by Section 10 of the Legal Practitioners Act (LPA) Cap L11 LFN 2004. It is the body responsible for investigating complaints of professional misconduct against legal practitioners and imposing disciplinary sanctions. The LPDC is chaired by the Chief Justice of Nigeria and includes the Attorney-General of the Federation, the President of the Nigerian Bar Association (NBA), and other senior legal practitioners. Sanctions range from reprimand and suspension to striking off the roll (disbarment). Appeals from LPDC decisions go to the Supreme Court. The Nigerian Bar Association (NBA) also plays a role in professional regulation through its disciplinary machinery at the branch level."
    },
    {
        id: 49,
        question: "'Contractual Capacity' refers to:",
        options: ["The power of the court to enforce a contract", "The legal competence of a person to enter into a valid, binding contract", "The number of pages in a contract", "The ability to sue a government official"],
        correct: 1,
        topic: "Classification of Law",
        explanation: "Contractual capacity is the legal ability of a person to enter into a contract that is binding and enforceable. The general rule is that every adult of sound mind has full contractual capacity. However, certain categories of persons have limited or no capacity: Minors (persons under 18) — contracts with minors are generally voidable at the minor's option, except for contracts for necessaries (food, clothing, shelter) which are binding; Persons of unsound mind — contracts made during a lucid interval may be valid, but contracts made when the person lacks understanding are voidable; Intoxicated persons — contracts made when too intoxicated to understand are voidable; and Corporations — can only contract within the scope of their objects (ultra vires doctrine). The Infants Relief Act (received English law) governs contracts with minors in Nigeria."
    },
    {
        id: 50,
        question: "Which of the following is a 'Remedy' in civil law?",
        options: ["Imprisonment", "Damages (Monetary compensation)", "Caning", "Public execution"],
        correct: 1,
        topic: "Classification of Law",
        explanation: "Civil law remedies are designed to compensate the claimant for loss suffered, rather than to punish the defendant. The primary civil remedy is damages — monetary compensation awarded to the claimant to put them in the position they would have been in had the wrong not occurred. Types of damages include: compensatory damages (actual loss), nominal damages (where a right is violated but no actual loss), aggravated damages (where the defendant's conduct was particularly reprehensible), and exemplary/punitive damages (to deter future wrongdoing). Other civil remedies include: injunctions (court orders to do or refrain from doing something), specific performance (compelling performance of a contract), rescission (setting aside a contract), and declarations. Imprisonment, caning, and execution are criminal punishments, not civil remedies."
    },
    {
        id: 51,
        question: "What does the term 'Subpoena' mean in legal proceedings?",
        options: ["A document ordering a person to attend court to give evidence or produce documents", "A type of criminal appeal", "A form of court fee", "An order for the immediate release of a prisoner"],
        correct: 0,
        topic: "Criminal Law and Procedure",
        explanation: "A subpoena (Latin: 'under penalty') is a court order compelling a person to appear before the court to give testimony (subpoena ad testificandum) or to produce documents or other evidence (subpoena duces tecum — 'bring with you'). Failure to comply with a subpoena without lawful excuse constitutes contempt of court, which is punishable by fine or imprisonment. Subpoenas are used in both civil and criminal proceedings to compel the attendance of witnesses who may be reluctant to testify voluntarily. In Nigeria, the procedure for issuing subpoenas is governed by the various court rules (e.g., the Federal High Court (Civil Procedure) Rules) and the Criminal Procedure Act/Code."
    },
    {
        id: 52,
        question: "'Negligence' in tort law requires the proof of:",
        options: ["Intent to cause harm", "A duty of care, a breach of that duty, and resulting damage to the plaintiff", "A breach of contract", "A criminal conspiracy"],
        correct: 1,
        topic: "Classification of Law",
        explanation: "Negligence is the most important tort in modern law. To succeed in a negligence claim, the claimant must establish three elements: (1) Duty of Care — the defendant owed the claimant a legal duty to take reasonable care (established in Donoghue v Stevenson [1932] through the 'neighbour principle' — you must take reasonable care to avoid acts or omissions that you can reasonably foresee would injure your 'neighbour'); (2) Breach of Duty — the defendant fell below the standard of the reasonable person in the circumstances; and (3) Causation and Damage — the breach caused the claimant's loss, which was not too remote. Unlike intentional torts, negligence does not require proof of intent to harm — carelessness is sufficient."
    },
    {
        id: 53,
        question: "Which court has original jurisdiction to hear matters involving the interpretation of the Constitution with respect to Fundamental Rights?",
        options: ["Magistrate Court", "High Court", "Customary Court", "District Court"],
        correct: 1,
        topic: "Court Structure and Hierarchy",
        explanation: "Section 46(1) of the 1999 Constitution grants the High Court (both Federal and State) original jurisdiction to hear applications for the enforcement of fundamental rights guaranteed under Chapter IV. The Fundamental Rights (Enforcement Procedure) Rules 2009 (made by the Chief Justice of Nigeria) govern the procedure. These Rules liberalized access to fundamental rights enforcement by: allowing public interest litigation, permitting NGOs and human rights organizations to bring actions on behalf of victims, and relaxing the strict rules of locus standi. The High Court can grant any appropriate relief including declarations, injunctions, and damages. Magistrate Courts and Customary Courts have no jurisdiction to interpret the Constitution or enforce fundamental rights."
    },
    {
        id: 54,
        question: "'Statutory Interpretation' is the process by which:",
        options: ["Judges rewrite the laws as they wish", "Courts interpret and apply legislation", "The President enacts new laws", "The police enforce regulations"],
        correct: 1,
        topic: "Sources of Nigerian Law",
        explanation: "Statutory interpretation is the process by which courts determine the meaning and application of legislation to the facts of a case. Since statutes are written in general terms, courts must interpret them when their application to specific facts is unclear. The main rules of statutory interpretation are: the Literal Rule (give words their ordinary, plain meaning), the Golden Rule (modify the literal meaning to avoid absurd results), the Mischief Rule (identify the mischief the statute was designed to remedy and interpret accordingly — Heydon's Case [1584]), and the Purposive Approach (interpret in light of the statute's overall purpose). Courts also use internal aids (preamble, headings, schedules) and external aids (Hansard, Law Commission reports) to assist interpretation."
    },
    {
        id: 55,
        question: "Which of the following is a 'Public Law' subject?",
        options: ["Law of Contract", "Constitutional Law", "Law of Tort", "Law of Succession"],
        correct: 1,
        topic: "Classification of Law",
        explanation: "Law is broadly classified into Public Law (governing the relationship between the state and individuals) and Private Law (governing relationships between private individuals and entities). Public Law subjects include: Constitutional Law (the structure of government and fundamental rights), Administrative Law (control of government agencies and public bodies), Criminal Law (offences against the state), and International Public Law (relations between states). Private Law subjects include: Contract Law, Tort Law, Property Law, Family Law, Company Law, and Law of Succession. The distinction matters because: public law cases often involve constitutional rights, different courts may have jurisdiction, and different remedies are available. Constitutional Law is the most fundamental branch of public law."
    },
    {
        id: 56,
        question: "The 'Common Law' of Nigeria is largely derived from:",
        options: ["Ancient Greek law", "English Common Law", "Roman Civil Law", "The United Nations Charter"],
        correct: 1,
        topic: "Sources of Nigerian Law",
        explanation: "Nigerian Common Law is largely derived from English Common Law, which was received into Nigeria through the colonial process. The reception date is January 1, 1900 — English Common Law, Doctrines of Equity, and Statutes of General Application in force in England on that date were received into Nigeria. This received law applies in Nigeria to the extent that local circumstances permit and subject to any modifications by Nigerian legislation. Over time, Nigerian courts have developed their own body of case law, and the Supreme Court has occasionally departed from English precedents to develop distinctly Nigerian legal principles. The influence of English law is most pronounced in commercial law, contract, tort, and constitutional law."
    },
    {
        id: 57,
        question: "What is 'Jurisprudence'?",
        options: ["The study of court buildings", "The philosophy or theory of law", "A type of criminal court", "The list of laws in Nigeria"],
        correct: 1,
        topic: "Fundamental Legal Principles",
        explanation: "Jurisprudence (from Latin: jurisprudentia — 'knowledge of law') is the theoretical and philosophical study of law — it examines the nature, sources, and purposes of law, and the relationship between law and morality, society, and justice. Major schools of jurisprudential thought include: Natural Law Theory (law must conform to universal moral principles — Aquinas, Fuller), Legal Positivism (law is what is enacted by legitimate authority, separate from morality — Austin, Hart, Kelsen), Sociological Jurisprudence (law as a social phenomenon — Roscoe Pound), Realism (law is what courts actually do — Holmes, Frank), and Critical Legal Studies (law reflects and perpetuates power structures). Jurisprudence provides the intellectual foundation for understanding and critiquing legal systems."
    },
    {
        id: 58,
        question: "'Equity' follows the law except:",
        options: ["Where the law is clear", "Where the law is unjust or rigid", "Where the judge is busy", "Where the parties are wealthy"],
        correct: 1,
        topic: "Sources of Nigerian Law",
        explanation: "The maxim 'Equity follows the law' (Aequitas sequitur legem) means that equity generally respects and follows the rules of common law and will not contradict clear legal rules without good reason. However, equity intervenes where strict application of the common law would produce unjust, harsh, or unconscionable results. Equity developed as a corrective to the rigidity of the common law — it looks to the substance and conscience of a transaction rather than its strict legal form. Key equitable maxims include: 'He who comes to equity must come with clean hands,' 'Equity will not suffer a wrong to be without a remedy,' 'Equity looks on that as done which ought to be done,' and 'Delay defeats equity' (laches). Equity and common law were fused by the Judicature Acts 1873–75 in England."
    },
    {
        id: 59,
        question: "Which of the following is an 'Equitable Remedy'?",
        options: ["Specific Performance", "Damages", "Imprisonment", "Fine"],
        correct: 0,
        topic: "Sources of Nigerian Law",
        explanation: "Equitable remedies are discretionary remedies developed by courts of equity (the Court of Chancery) to supplement the common law remedy of damages. The main equitable remedies are: Specific Performance (a court order compelling a party to perform their contractual obligations — typically granted for contracts involving unique property like land or rare goods); Injunction (a court order to do or refrain from doing a specific act — can be prohibitory or mandatory); Rescission (setting aside a contract and restoring parties to their pre-contractual position); Rectification (correcting a written document to reflect the true agreement of the parties); and Account of Profits (requiring a wrongdoer to account for profits made from their wrong). Damages is a common law remedy; imprisonment and fines are criminal sanctions."
    },
    {
        id: 60,
        question: "'Void' vs. 'Voidable' contracts:",
        options: ["Both mean the same thing", "A void contract is invalid from the start, while a voidable contract is valid until set aside by the innocent party", "A void contract is valid for one year", "A voidable contract cannot be terminated"],
        correct: 1,
        topic: "Classification of Law",
        explanation: "A void contract is one that has no legal effect whatsoever from the moment of its creation — it is treated as if it never existed. No rights or obligations arise from it, and neither party can enforce it. Examples include: contracts for illegal purposes, contracts made without consideration, and contracts that are fundamentally uncertain. A voidable contract, by contrast, is a valid and subsisting contract that one party (the innocent party) has the option to affirm or rescind. Until rescinded, it is fully binding. Examples include: contracts induced by misrepresentation, duress, undue influence, or mistake. Once the innocent party elects to rescind, the contract is set aside. Third party rights acquired before rescission may be protected. The distinction is critical in determining the legal consequences of contractual defects."
    },
    {
        id: 61,
        question: "In Nigeria, a 'Legal Person' refers to:",
        options: ["Only a human being", "Any entity that has the capacity to sue and be sued, including incorporated companies", "Only government officials", "Lawyers and judges"],
        correct: 1,
        topic: "Fundamental Legal Principles",
        explanation: "A legal person is any entity recognized by law as having legal rights and obligations, including the capacity to sue and be sued. There are two categories: Natural persons (human beings — who acquire legal personality at birth and lose it at death) and Artificial persons (legal entities created by law — primarily incorporated companies, but also statutory corporations, local government councils, and registered associations). The landmark principle of separate legal personality was established in Salomon v Salomon & Co Ltd [1897]: upon incorporation, a company becomes a legal person entirely distinct from its members. In Nigeria, companies acquire legal personality upon registration under the Companies and Allied Matters Act (CAMA) 2020. This separate personality enables companies to own property, enter contracts, and litigate in their own name."
    },
    {
        id: 62,
        question: "What is the 'Doctrine of Occupier's Liability'?",
        options: ["The responsibility of a landlord to pay taxes", "The legal duty of care an occupier of premises owes to visitors to ensure their safety", "The right of a tenant to renovate a property", "The liability of the government for public land"],
        correct: 1,
        topic: "Classification of Law",
        explanation: "Occupier's liability is a branch of tort law that governs the duty of care owed by a person who occupies or controls premises (the occupier) to persons who enter those premises. In English law (received into Nigeria), the Occupiers' Liability Act 1957 governs the duty to lawful visitors (invitees and licensees) — a common duty of care to take reasonable steps to ensure the visitor is reasonably safe. The Occupiers' Liability Act 1984 governs the duty to trespassers. The occupier need not be the owner — it is the person with control over the premises. Factors affecting the duty include: the purpose of the visit, the nature of the premises, and the characteristics of the visitor (e.g., children are owed a higher duty of care). In Nigeria, the common law rules on occupier's liability apply."
    },
    {
        id: 63,
        question: "Which of the following is considered an 'Inherent Power' of a court?",
        options: ["The power to make laws", "The power to control its own proceedings and ensure the administration of justice", "The power to tax citizens", "The power to run the police force"],
        correct: 1,
        topic: "Court Structure and Hierarchy",
        explanation: "Inherent jurisdiction (or inherent powers) refers to the powers that a superior court of record possesses by virtue of its very existence as a court, independent of any statutory grant. These powers exist to enable the court to control its own proceedings, prevent abuse of its process, and ensure the administration of justice. Examples of inherent powers include: the power to stay proceedings that are an abuse of process, the power to strike out frivolous or vexatious claims, the power to punish for contempt of court, the power to regulate the conduct of proceedings, and the power to grant injunctions to prevent injustice. Inherent jurisdiction is distinct from statutory jurisdiction (conferred by legislation) and cannot be ousted by statute except by express words. Only superior courts of record possess inherent jurisdiction."
    },
    {
        id: 64,
        question: "'Locus Standi' is a key requirement in civil litigation. If a plaintiff lacks it, what happens?",
        options: ["The court will grant them a lawyer", "The action may be struck out by the court for lack of standing", "The judge will proceed with the case anyway", "The case is automatically transferred to the Supreme Court"],
        correct: 1,
        topic: "Fundamental Legal Principles",
        explanation: "Locus standi is a threshold jurisdictional requirement — if a claimant cannot demonstrate sufficient legal interest in the subject matter of the litigation, the court has no jurisdiction to entertain the action and will strike it out. The striking out is not a decision on the merits of the case; it is a procedural dismissal for lack of standing. The claimant may re-file if they can establish standing. In Nigeria, the strict requirement of locus standi was established in Adesanya v President of Nigeria (1981), where the Supreme Court held that a Senator lacked standing to challenge the appointment of a Chief Justice. The Fundamental Rights (Enforcement Procedure) Rules 2009 have relaxed locus standi requirements in human rights cases, allowing public interest litigation."
    },
    {
        id: 65,
        question: "Under the Nigerian Constitution, 'Fundamental Rights' can be enforced via:",
        options: ["A criminal trial", "A Fundamental Rights Enforcement Procedure application", "A simple petition to the President", "A protest in the street"],
        correct: 1,
        topic: "Nigerian Constitution and Sources of Law",
        explanation: "Section 46(1) of the 1999 Constitution provides that any person who alleges a violation of their fundamental rights (Chapter IV) may apply to the High Court for redress. The procedure is governed by the Fundamental Rights (Enforcement Procedure) Rules 2009, made by the Chief Justice of Nigeria. The application is made by originating motion supported by an affidavit and a statement of facts. The Rules are to be applied with a view to advancing and realizing the rights and freedoms contained in the Constitution and in the African Charter on Human and Peoples' Rights. The court can grant any appropriate relief including declarations, injunctions, and damages. The Rules also allow public interest litigation, permitting NGOs and human rights bodies to bring actions on behalf of victims even without their express authorization."
    },
    {
        id: 66,
        question: "What is the effect of 'Nemo judex in causa sua'?",
        options: ["No one should be a judge in their own cause (a rule of natural justice)", "The judge must always agree with the prosecutor", "The judge must be a lawyer", "The judge is above the law"],
        correct: 0,
        topic: "Fundamental Legal Principles",
        explanation: "Nemo judex in causa sua (Latin: 'no one should be a judge in their own cause') is one of the two pillars of natural justice. It embodies the rule against bias — a decision-maker must be impartial and must not have any personal interest (financial or otherwise) in the outcome of the matter they are deciding. The rule applies not only to actual bias but also to apparent bias — the test is whether a fair-minded and informed observer would conclude that there was a real possibility of bias. Consequences of breach: any decision made in violation of this rule is void. Applications include: a judge who owns shares in a company that is a party to the case must recuse themselves; a disciplinary committee member who is a complainant cannot sit on the panel. This rule is enshrined in Section 36 of the 1999 Constitution as part of the right to fair hearing."
    },
    {
        id: 67,
        question: "'Liability' in tort can be classified as:",
        options: ["Only criminal", "Strict, fault-based, or vicarious", "Only contractual", "Non-existent"],
        correct: 1,
        topic: "Classification of Law",
        explanation: "Tortious liability can be classified into three main categories: (1) Fault-based liability — the defendant is liable because they were at fault (negligent, reckless, or intentional) — this is the most common form, covering negligence, defamation, and intentional torts; (2) Strict liability — the defendant is liable regardless of fault or intention, simply because they engaged in a particular activity or caused a particular type of harm — examples include the rule in Rylands v Fletcher [1868] (escape of dangerous things from land), liability for dangerous animals, and product liability; and (3) Vicarious liability — one person is liable for the torts of another based on their relationship (typically employer-employee). Understanding the type of liability is critical because it determines what the claimant must prove and what defences are available."
    },
    {
        id: 68,
        question: "Which of these is a 'Superior Court of Record' in Nigeria?",
        options: ["The Supreme Court", "The Court of Appeal", "The High Court", "All of the above"],
        correct: 3,
        topic: "Court Structure and Hierarchy",
        explanation: "All three — the Supreme Court, Court of Appeal, and High Court — are superior courts of record in Nigeria, established by the 1999 Constitution. Section 6(3) of the Constitution lists the superior courts of record: the Supreme Court of Nigeria, the Court of Appeal, the Federal High Court, the High Court of the FCT, the High Court of each State, the Sharia Court of Appeal of the FCT, the Sharia Court of Appeal of each State, the Customary Court of Appeal of the FCT, the Customary Court of Appeal of each State, and the National Industrial Court. Superior courts of record have: permanent official records of their proceedings, the power to punish for contempt, inherent jurisdiction, and their decisions create binding precedent. They are distinguished from inferior courts (Magistrate Courts, Area Courts) which are created by legislation."
    },
    {
        id: 69,
        question: "'Statutory Interpretation' rules include the:",
        options: ["Literal Rule, Golden Rule, and Mischief Rule", "Rule of evidence and rule of criminal procedure", "Rule of appointment and rule of discipline", "Rule of majority"],
        correct: 0,
        topic: "Sources of Nigerian Law",
        explanation: "The three classical rules of statutory interpretation are: (1) The Literal Rule — words are given their ordinary, plain, and natural meaning, even if the result seems harsh or absurd (Whiteley v Chappell [1868]); (2) The Golden Rule — the literal meaning is modified to avoid an absurd, repugnant, or inconsistent result (Grey v Pearson [1857] — 'grammatical and ordinary sense of the words is to be adhered to, unless it leads to some absurdity'); and (3) The Mischief Rule (Heydon's Case [1584]) — the court looks at the 'mischief' (problem) the statute was designed to remedy and interprets it to suppress the mischief and advance the remedy. Modern courts also apply the Purposive Approach — interpreting legislation in light of its overall purpose and legislative intent, particularly for constitutional and human rights provisions."
    },
    {
        id: 70,
        question: "The 'Mischief Rule' of interpretation is used to:",
        options: ["Interpret laws by looking at the 'mischief' or problem the law was enacted to remedy", "Punish the legislature", "Ignore the intent of the law", "Change the meaning of words arbitrarily"],
        correct: 0,
        topic: "Sources of Nigerian Law",
        explanation: "The Mischief Rule, established in Heydon's Case [1584], is the oldest rule of statutory interpretation. It requires the court to consider four things: (1) What was the common law before the statute was enacted? (2) What was the mischief (defect or problem) that the common law did not provide for? (3) What remedy did Parliament resolve to cure the mischief? (4) What is the true reason for the remedy? The court then interprets the statute to suppress the mischief and advance the remedy. The Mischief Rule is the most purposive of the classical rules — it looks beyond the literal words to the legislative intent. It is particularly useful where the literal meaning would defeat the purpose of the legislation. In Nigeria, courts apply this rule alongside the literal and golden rules."
    },
    {
        id: 71,
        question: "'Consolidation' of cases in court means:",
        options: ["Moving a case to a different city", "Joining two or more separate cases into one for a single trial because they involve similar issues", "Closing the case permanently", "Firing the judge"],
        correct: 1,
        topic: "Court Structure and Hierarchy",
        explanation: "Consolidation is a procedural mechanism by which a court orders two or more separate actions that involve common questions of law or fact, or the same parties, to be heard together in a single trial. The purpose is to: avoid multiplicity of proceedings, prevent inconsistent judgments on the same issues, save court time and resources, and reduce costs for the parties. Consolidation is distinct from joinder (combining parties or claims in a single action from the outset). In Nigeria, the power to consolidate is found in the various court rules (e.g., Order 13 of the Federal High Court Civil Procedure Rules). The court may consolidate on its own motion or on the application of a party. Consolidation does not merge the actions — they remain separate but are tried together."
    },
    {
        id: 72,
        question: "Which of these is a 'Prerogative Writ'?",
        options: ["Certiorari", "Mandamus", "Prohibition", "All of the above"],
        correct: 3,
        topic: "Fundamental Legal Principles",
        explanation: "Prerogative writs (now called prerogative orders in England, but still referred to as writs in Nigeria) are extraordinary remedies issued by superior courts to control the exercise of public power. The main prerogative writs are: Certiorari (now 'quashing order') — quashes an unlawful decision of an inferior court, tribunal, or public body; Mandamus (now 'mandatory order') — compels a public body or official to perform a public duty they have failed or refused to perform; Prohibition (now 'prohibiting order') — prevents an inferior court or tribunal from exceeding its jurisdiction or acting unlawfully; Habeas Corpus — challenges unlawful detention; and Quo Warranto — challenges a person's right to hold a public office. In Nigeria, these writs are available through judicial review applications to the High Court."
    },
    {
        id: 73,
        question: "'Certiorari' is an order issued by a superior court to:",
        options: ["Quash or set aside the decision of an inferior court or tribunal", "Force a public official to perform a duty", "Prohibit a court from hearing a case", "Release a prisoner"],
        correct: 0,
        topic: "Fundamental Legal Principles",
        explanation: "Certiorari (Latin: 'to be informed') is a prerogative writ by which a superior court calls up the record of proceedings of an inferior court, tribunal, or public body in order to review and, if appropriate, quash (set aside) the decision. It is granted where the inferior body has: acted without or in excess of jurisdiction (ultra vires), committed an error of law on the face of the record, breached the rules of natural justice (bias or failure to hear the other side), or acted in bad faith. In Nigeria, certiorari is available through judicial review applications to the Federal High Court or State High Court. It is a supervisory remedy — it does not substitute the superior court's decision for that of the inferior body; it simply nullifies the unlawful decision and remits the matter for reconsideration."
    },
    {
        id: 74,
        question: "What is a 'Binding' decision?",
        options: ["A decision that must be followed by lower courts", "A suggestion that can be ignored", "A personal opinion of a judge", "A law passed by the local government"],
        correct: 0,
        topic: "Judicial Precedent",
        explanation: "A binding decision (or binding precedent) is a past court decision that a lower court in the same judicial hierarchy is legally obliged to follow when deciding a case with materially similar facts. The binding element is the ratio decidendi — the legal principle on which the decision was based. Under the doctrine of stare decisis, Nigerian courts are bound as follows: all courts are bound by Supreme Court decisions; High Courts and lower courts are bound by Court of Appeal decisions; Magistrate Courts are bound by High Court decisions. A binding precedent is distinguished from a persuasive precedent (from courts of equal or lower rank, or from foreign courts), which may be followed but is not obligatory. The Supreme Court is not bound by its own previous decisions and may depart from them when it is right to do so."
    },
    {
        id: 75,
        question: "'Common Law' in Nigeria refers to:",
        options: ["The laws of the local village", "The system of law originating from England, based on judicial precedent", "The law of the National Assembly only", "The laws of foreign countries"],
        correct: 1,
        topic: "Sources of Nigerian Law",
        explanation: "Common Law in the Nigerian context refers to the body of law that originated in England through the decisions of the royal courts (King's Bench, Common Pleas, Exchequer) from the Norman Conquest onwards, developed through the doctrine of judicial precedent. It was received into Nigeria as part of the colonial legal inheritance, applicable as of January 1, 1900. Common Law is judge-made law — it is found in law reports (collections of court decisions) rather than statute books. It covers areas such as contract, tort, property, and criminal law (in southern Nigeria — the Criminal Code is based on common law principles). Common Law is supplemented by Equity (developed by the Court of Chancery) and is subject to modification by Nigerian legislation. Together, Common Law and Equity form the received English law."
    },
    {
        id: 76,
        question: "What is a 'Plaintiff'?",
        options: ["The person who defends a case", "The party who initiates a civil lawsuit", "The lawyer representing the state", "The judge"],
        correct: 1,
        topic: "Fundamental Legal Principles",
        explanation: "A plaintiff (also called a claimant in modern civil procedure) is the party who initiates a civil action by filing a claim or writ against another party (the defendant). The plaintiff bears the burden of proving their case on the balance of probabilities. In criminal proceedings, the equivalent is the prosecution (the state, represented by the Attorney-General or DPP) — the term 'plaintiff' is not used in criminal cases. In Nigerian civil procedure, the plaintiff commences proceedings by filing an originating process (writ of summons, originating summons, or originating motion) at the appropriate court. The plaintiff must have locus standi — a sufficient legal interest in the subject matter of the action. Upon filing, the defendant is served with the originating process and given an opportunity to respond."
    },
    {
        id: 77,
        question: "'Defendant' refers to:",
        options: ["The party against whom a civil or criminal action is brought", "The party who brings the action", "The witness", "The judge"],
        correct: 0,
        topic: "Fundamental Legal Principles",
        explanation: "A defendant is the party against whom legal proceedings are brought — in civil cases, the party sued by the plaintiff; in criminal cases, the person charged with a criminal offence by the prosecution. In civil proceedings, the defendant responds to the plaintiff's claim by filing a defence (and possibly a counterclaim against the plaintiff). The defendant in a civil case is not presumed liable — the plaintiff must prove their case. In criminal proceedings, the defendant (accused) is presumed innocent until proven guilty beyond reasonable doubt. The term 'respondent' is used for the party responding to an appeal. In some proceedings (e.g., judicial review, fundamental rights enforcement), the responding party is called the respondent rather than the defendant."
    },
    {
        id: 78,
        question: "'Cross-examination' is the questioning of:",
        options: ["One's own witness", "The opposing party's witness", "The judge", "The court clerk"],
        correct: 1,
        topic: "Criminal Law and Procedure",
        explanation: "Cross-examination is the questioning of a witness by the opposing party (or their counsel) after the witness has given evidence in chief (examination-in-chief) for the party who called them. The purpose of cross-examination is to: test the accuracy, credibility, and reliability of the witness's evidence, elicit facts favorable to the cross-examining party, and challenge inconsistencies in the witness's testimony. Cross-examination is a fundamental right in adversarial proceedings — it is a key component of the right to fair hearing under Section 36 of the 1999 Constitution. Leading questions (questions that suggest the answer) are permitted in cross-examination but not in examination-in-chief. After cross-examination, the party who called the witness may conduct re-examination to clarify matters raised in cross-examination."
    },
    {
        id: 79,
        question: "'Hearsay evidence' is generally:",
        options: ["Always admissible", "Inadmissible in court, with some exceptions", "Required in all trials", "A form of expert testimony"],
        correct: 1,
        topic: "Criminal Law and Procedure",
        explanation: "Hearsay evidence is an out-of-court statement made by a person (the declarant) that is offered in court to prove the truth of the matter asserted. The general rule is that hearsay evidence is inadmissible because: the declarant is not before the court to be cross-examined, the court cannot assess the declarant's demeanor and credibility, and the statement has not been made under oath. However, the Evidence Act 2011 and common law recognize numerous exceptions where hearsay is admissible: dying declarations (statements made by a person who believed death was imminent), statements in public documents, business records, statements against interest, res gestae (spontaneous statements made at the time of an event), and statements by deceased persons. The Evidence Act 2011 also allows computer-generated evidence, which may contain hearsay elements."
    },
    {
        id: 80,
        question: "'Res Judicata' means:",
        options: ["The case is open for trial again", "A matter that has been finally adjudicated by a competent court cannot be relitigated", "The case is about to start", "The judge has changed"],
        correct: 1,
        topic: "Fundamental Legal Principles",
        explanation: "Res judicata (Latin: 'a matter already judged') is a fundamental doctrine of finality in litigation. It provides that once a competent court has finally determined a matter between the same parties (or their privies) on the same cause of action, neither party can relitigate the same matter in subsequent proceedings. The doctrine has two aspects: Cause of Action Estoppel (the entire cause of action is extinguished by the judgment) and Issue Estoppel (a specific issue that was necessarily decided in the earlier proceedings cannot be re-opened). The rationale is: finality of litigation (disputes must have an end), protection of parties from harassment by repeated suits, and judicial economy. Res judicata is distinct from the rule against double jeopardy in criminal law (nemo debet bis vexari — no one should be tried twice for the same offence)."
    },
    {
        id: 81,
        question: "What is the primary function of the 'Legal Aid Council' in Nigeria?",
        options: ["To represent the government in criminal cases", "To provide free legal services and advice to indigent or low-income Nigerians", "To enact new laws for the Federation", "To judge cases in the Supreme Court"],
        correct: 1,
        topic: "Legal Officers and Institutions",
        explanation: "The Legal Aid Council of Nigeria was established by the Legal Aid Act 2011 (which repealed the Legal Aid Decree 1976). Its primary mandate is to provide free legal assistance — including legal advice, representation in court, and legal education — to indigent Nigerians who cannot afford the cost of legal services. Eligibility is means-tested (based on financial need) and merit-tested (the case must have reasonable prospects of success). The Council operates through its offices in all states and the FCT, and also engages private legal practitioners on a pro bono or fee basis. Access to legal aid is connected to the constitutional right to fair hearing (Section 36, 1999 Constitution), which includes the right to legal representation."
    },
    {
        id: 82,
        question: "Which of the following is considered an 'Essential Element' of a valid contract?",
        options: ["Presence of a lawyer", "Offer, acceptance, consideration, and intention to create legal relations", "A written document only", "A public ceremony"],
        correct: 1,
        topic: "Classification of Law",
        explanation: "For a contract to be valid and legally enforceable, it must contain the following essential elements: (1) Offer — a definite proposal by one party (offeror) to another (offeree) indicating willingness to be bound on specific terms; (2) Acceptance — an unconditional agreement to all the terms of the offer (a counter-offer destroys the original offer); (3) Consideration — something of value exchanged by each party (the 'price' of the promise — past consideration is not valid); (4) Intention to Create Legal Relations — the parties must intend their agreement to be legally binding (presumed in commercial agreements, not presumed in domestic/social agreements); and (5) Capacity — the parties must have legal capacity to contract. Some contracts also require formality (e.g., contracts for land must be in writing)."
    },
    {
        id: 83,
        question: "'Strict Liability' in criminal law implies that:",
        options: ["The prosecution must prove criminal intent (mens rea)", "The accused can be held guilty regardless of whether they had the intention to commit the act", "The judge has the power to ignore the law", "The accused must be a government official"],
        correct: 1,
        topic: "Criminal Law and Procedure",
        explanation: "Strict liability offences are crimes for which the prosecution does not need to prove mens rea (guilty mind) — the mere commission of the prohibited act (actus reus) is sufficient for conviction, regardless of the accused's intention, knowledge, or fault. They are exceptions to the general principle that criminal liability requires both actus reus and mens rea. Strict liability offences are typically created by statute and are common in regulatory contexts: food safety, road traffic offences (e.g., speeding), environmental pollution, and licensing violations. The rationale is that the public interest in preventing harm outweighs the injustice of punishing the faultless. In Nigeria, examples include certain offences under the Food and Drugs Act and traffic regulations."
    },
    {
        id: 84,
        question: "What is 'Judicial Activism'?",
        options: ["When judges actively participate in political campaigns", "When judges interpret the law in a way that promotes social reform or adapts it to contemporary needs, rather than strictly following past precedents", "When judges resign from their positions", "When judges ignore the Constitution"],
        correct: 1,
        topic: "Judicial Precedent",
        explanation: "Judicial activism refers to a judicial philosophy or approach in which judges interpret the law broadly, creatively, or purposively to achieve just outcomes, promote social reform, or adapt legal principles to contemporary social realities, rather than strictly adhering to the literal text of statutes or past precedents. It is contrasted with judicial restraint (or strict constructionism), where judges confine themselves to the literal text and original intent of laws. In Nigeria, judicial activism has been evident in landmark decisions expanding fundamental rights, protecting electoral democracy, and developing indigenous legal principles. Critics argue that judicial activism usurps the legislative function; proponents argue it is necessary to ensure justice in a changing society."
    },
    {
        id: 85,
        question: "The 'Director of Public Prosecutions' (DPP) is an officer within:",
        options: ["The Police Force", "The Ministry of Justice (under the Attorney-General)", "The House of Assembly", "The Supreme Court"],
        correct: 1,
        topic: "Legal Officers and Institutions",
        explanation: "The Director of Public Prosecutions (DPP) is a senior law officer within the Ministry of Justice, operating under the supervision of the Attorney-General (at both federal and state levels). The DPP's primary function is to advise on and conduct criminal prosecutions on behalf of the state. Specifically, the DPP: reviews police case files and advises on whether to prosecute, drafts charges and information, conducts prosecutions in court, and advises on appeals. The DPP's advice is not binding on the Attorney-General, who retains ultimate prosecutorial authority. The office is critical to ensuring that prosecutions are based on sufficient evidence and are in the public interest, rather than being politically motivated."
    },
    {
        id: 86,
        question: "'Privilege' in the law of evidence refers to:",
        options: ["A right given to judges to earn more money", "A right to withhold information or documents from a court on the grounds of public interest or specific professional relationships (e.g., solicitor-client)", "A right given to the police to arrest anyone", "A right given to lawyers to lie in court"],
        correct: 1,
        topic: "Criminal Law and Procedure",
        explanation: "Privilege in evidence law is the right of a party to refuse to disclose, or to prevent another from disclosing, certain information in legal proceedings. The main types are: Legal Professional Privilege (LPP) — confidential communications between a lawyer and client for the purpose of legal advice or litigation are protected from disclosure; Without Prejudice Privilege — communications made in genuine attempts to settle a dispute cannot be used as evidence; Public Interest Immunity (PII) — the state can withhold documents whose disclosure would harm the public interest (e.g., national security); and Privilege Against Self-Incrimination — a person cannot be compelled to give evidence that would incriminate themselves (Section 36(11), 1999 Constitution). The Evidence Act 2011 governs privilege in Nigeria."
    },
    {
        id: 87,
        question: "Which court in Nigeria handles disputes between the Federal Government and States, or between two or more States?",
        options: ["Magistrate Court", "State High Court", "Supreme Court (Original Jurisdiction)", "Federal High Court"],
        correct: 2,
        topic: "Court Structure and Hierarchy",
        explanation: "Section 232(1) of the 1999 Constitution vests the Supreme Court with exclusive original jurisdiction in disputes between the Federation and a State, or between States. This means the Supreme Court is the court of first instance (not an appellate court) for such inter-governmental disputes — no other court can hear them. This jurisdiction reflects the Supreme Court's role as the guardian of the federal structure and the arbiter of disputes between the constituent units of the federation. Examples include disputes over revenue allocation, boundary disputes between states, and conflicts over legislative competence. The Supreme Court's decision in such matters is final and binding on all parties."
    },
    {
        id: 88,
        question: "What is 'Alternative Dispute Resolution' (ADR)?",
        options: ["The process of bypassing courts to resolve disputes through methods like mediation or arbitration", "A type of court trial", "A law passed by the legislature", "A criminal procedure"],
        correct: 0,
        topic: "Fundamental Legal Principles",
        explanation: "Alternative Dispute Resolution (ADR) encompasses a range of processes for resolving disputes outside the formal court system. The main ADR mechanisms are: Negotiation (direct party-to-party discussion), Mediation (facilitated negotiation with a neutral mediator who has no power to impose a decision), Arbitration (a neutral arbitrator makes a binding award — governed in Nigeria by the Arbitration and Conciliation Act Cap A18 LFN 2004, now updated by the Arbitration and Mediation Act 2023), Conciliation, and Mini-trial. ADR offers significant advantages over litigation: it is faster, less expensive, confidential, less adversarial, and allows parties to maintain relationships. Nigerian courts actively encourage ADR through court-connected mediation programs and the Multi-Door Courthouse system."
    },
    {
        id: 89,
        question: "In Nigeria, a 'Minor' (a person under 18) generally lacks:",
        options: ["The right to vote", "Full contractual capacity", "The right to own land", "The right to education"],
        correct: 1,
        topic: "Classification of Law",
        explanation: "A minor (a person under 18 years of age) generally lacks full contractual capacity in Nigerian law. The general rule is that contracts entered into by minors are voidable at the minor's option — the minor can choose to affirm or repudiate the contract upon reaching majority. However, there are important exceptions: contracts for necessaries (food, clothing, shelter, education, medical treatment) are binding on minors; beneficial contracts of service (apprenticeships, employment) are binding if substantially for the minor's benefit; and contracts for non-necessaries are void under the Infants Relief Act. The rationale is to protect minors from exploitation while ensuring they can obtain essential goods and services. Criminal liability for minors is governed by the Child Rights Act 2003."
    },
    {
        id: 90,
        question: "'Specific Performance' is a remedy used when:",
        options: ["Monetary damages are adequate", "A party is ordered to perform their contractual obligations because damages are not sufficient", "The contract is void", "The parties want a divorce"],
        correct: 1,
        topic: "Classification of Law",
        explanation: "Specific performance is an equitable remedy that compels a party in breach of contract to perform their contractual obligations as agreed, rather than simply paying damages. It is granted at the court's discretion when monetary damages would be an inadequate remedy — typically because the subject matter of the contract is unique and cannot be replaced with money. It is most commonly granted for: contracts for the sale of land or unique real property (since every piece of land is unique), contracts for the sale of rare or unique goods (e.g., a one-of-a-kind artwork), and contracts involving unique personal services (though courts are reluctant to order specific performance of personal service contracts). Specific performance will not be granted where: damages are adequate, the contract lacks mutuality, or it would cause undue hardship."
    },
    {
        id: 91,
        question: "Which of the following is an 'Administrative Law' issue?",
        options: ["Murder case", "Challenging the decision of a government agency or tribunal", "Divorce case", "Theft case"],
        correct: 1,
        topic: "Classification of Law",
        explanation: "Administrative law is the branch of public law that governs the exercise of power by government agencies, ministries, departments, and other public bodies. It provides the legal framework for: the creation and operation of government agencies, the procedures they must follow in making decisions, the rights of individuals affected by those decisions, and the mechanisms for challenging unlawful administrative action. Administrative law issues include: challenging a government agency's refusal to grant a license, contesting a regulatory body's decision, challenging a public officer's exercise of discretionary power, and seeking judicial review of administrative decisions. The grounds for challenge include illegality, irrationality, and procedural impropriety. Murder, divorce, and theft are criminal or private law matters, not administrative law."
    },
    {
        id: 92,
        question: "'Presumption of Innocence' means:",
        options: ["The accused must prove they are innocent", "An accused person is presumed innocent until proven guilty beyond a reasonable doubt by the prosecution", "The police are always right", "The judge knows the accused is innocent"],
        correct: 1,
        topic: "Criminal Law and Procedure",
        explanation: "The presumption of innocence is a fundamental principle of criminal justice, enshrined in Section 36(5) of the 1999 Constitution: 'Every person who is charged with a criminal offence shall be presumed to be innocent until he is proved guilty.' This means: the burden of proof lies entirely on the prosecution (not the accused); the accused has no obligation to prove their innocence; the standard of proof is beyond reasonable doubt; and if there is any reasonable doubt, the accused must be acquitted. The presumption protects individuals from wrongful conviction and reflects the principle that it is better for a guilty person to go free than for an innocent person to be wrongly convicted. It is a cornerstone of the right to fair hearing under Section 36 of the Constitution."
    },
    {
        id: 93,
        question: "What is 'Litigation'?",
        options: ["The process of resolving a dispute by taking it to court", "The process of avoiding court", "The process of writing a law", "The process of hiring a lawyer"],
        correct: 0,
        topic: "Fundamental Legal Principles",
        explanation: "Litigation is the formal process of resolving a legal dispute through the court system. It involves: filing a claim or charge, serving process on the opposing party, exchange of pleadings (statement of claim, defence, reply), pre-trial procedures (discovery, interrogatories, inspection of documents), the trial itself (examination of witnesses, legal arguments), judgment, and potentially appeals. Litigation is adversarial — each party presents their case and the judge decides. It is public, formal, and governed by strict procedural rules (court rules, Evidence Act, Criminal Procedure Act/Code). While litigation provides authoritative, enforceable judgments, it is often slow, expensive, and adversarial compared to ADR methods. It remains the primary mechanism for resolving disputes that cannot be settled by agreement."
    },
    {
        id: 94,
        question: "'Duress' as a defense in contract law means:",
        options: ["The contract was signed voluntarily", "The contract was signed under threats or coercion, making it voidable", "The contract was signed in the presence of a judge", "The contract was signed for a small amount of money"],
        correct: 1,
        topic: "Classification of Law",
        explanation: "Duress is a vitiating factor in contract law that renders a contract voidable at the option of the party who was coerced. It occurs when one party is compelled to enter a contract through illegitimate pressure or threats that overbear their free will. Types of duress include: Duress to the Person (threats of physical violence — the classic form), Duress to Goods (threats to seize or damage property), and Economic Duress (illegitimate commercial pressure that leaves no reasonable alternative — recognized in Pao On v Lau Yiu Long [1980]). The coerced party must show: an illegitimate threat, that the threat caused them to enter the contract, and that they had no reasonable alternative. The remedy is rescission of the contract. Duress is distinct from undue influence (which involves the exploitation of a relationship of trust)."
    },
    {
        id: 95,
        question: "Which court hears appeals from the Sharia Court of Appeal?",
        options: ["Supreme Court", "Court of Appeal", "High Court", "Magistrate Court"],
        correct: 1,
        topic: "Court Structure and Hierarchy",
        explanation: "The Sharia Court of Appeal is established in states in northern Nigeria that have adopted Sharia law (Section 275, 1999 Constitution). It has appellate jurisdiction over decisions of Area Courts or other courts of first instance in civil proceedings involving questions of Islamic personal law. Appeals from the Sharia Court of Appeal lie to the Court of Appeal (Section 277, 1999 Constitution). The Court of Appeal has a specialized Sharia panel to hear such appeals. Further appeals from the Court of Appeal on Sharia matters go to the Supreme Court. The Customary Court of Appeal (established in states without Sharia) similarly hears appeals from Customary Courts, with appeals going to the Court of Appeal."
    },
    {
        id: 96,
        question: "'Probate' relates to:",
        options: ["Criminal trials", "The legal process of administering the estate of a deceased person", "Civil marriage", "Traffic offences"],
        correct: 1,
        topic: "Classification of Law",
        explanation: "Probate is the legal process by which a deceased person's estate (property, assets, and liabilities) is administered and distributed. It involves: proving the validity of the deceased's will (if any) before the court, appointing an executor (if there is a will) or administrator (if there is no will — intestacy), collecting and valuing the deceased's assets, paying debts and taxes, and distributing the remaining estate to beneficiaries according to the will or the rules of intestacy. In Nigeria, probate jurisdiction is exercised by the High Court (Probate Division). The Administration of Estates Law and the Wills Law (in various states) govern the process. Where a person dies without a will (intestate), the estate is distributed according to customary law or the Administration of Estates Law."
    },
    {
        id: 97,
        question: "What is the 'Evidence Act'?",
        options: ["The law governing how evidence is admitted and weighed in Nigerian courts", "The law defining murder", "The law governing elections", "The law governing companies"],
        correct: 0,
        topic: "Criminal Law and Procedure",
        explanation: "The Evidence Act 2011 is the principal legislation governing the law of evidence in Nigeria. It applies to all judicial proceedings in or before federal courts and, by adoption, in most state courts. The Act covers: relevance and admissibility of evidence, burden and standard of proof, competence and compellability of witnesses, oral and documentary evidence, electronic evidence (a major innovation of the 2011 Act), confessions and admissions, hearsay evidence and its exceptions, expert opinion evidence, character evidence, privilege, and corroboration. The 2011 Act modernized Nigerian evidence law significantly, particularly by recognizing electronic records, computer-generated evidence, and digital signatures as admissible evidence, reflecting the realities of the digital age."
    },
    {
        id: 98,
        question: "'Contempt of Court' is:",
        options: ["Disrespecting the court's authority or failing to comply with its orders", "A type of appeal", "A legal document", "A fee paid to the court"],
        correct: 0,
        topic: "Fundamental Legal Principles",
        explanation: "Contempt of court is any act or omission that disrespects, obstructs, or undermines the authority, dignity, or administration of justice by a court. It takes two main forms: Civil Contempt (disobedience of a court order — e.g., refusing to comply with an injunction or failing to pay a judgment debt) and Criminal Contempt (conduct that scandalizes the court, interferes with the administration of justice, or prejudices pending proceedings — e.g., publishing material that prejudices a fair trial). Contempt can be committed in the face of the court (in facie curiae — e.g., disrupting proceedings) or outside the court (ex facie curiae). Punishment includes fine and/or imprisonment. Only superior courts of record have inherent jurisdiction to punish for contempt."
    },
    {
        id: 99,
        question: "Which of the following is a 'State Government' power under the Constitution?",
        options: ["Defence and foreign policy", "Matters assigned to the State House of Assembly", "Issuing currency", "Immigration"],
        correct: 1,
        topic: "Nigerian Constitution and Sources of Law",
        explanation: "The 1999 Constitution distributes legislative powers between the Federal and State governments through the Exclusive Legislative List (Schedule 2, Part I) and the Concurrent Legislative List (Schedule 2, Part II). The Exclusive Legislative List contains 68 items over which only the National Assembly can legislate — including defence, foreign affairs, immigration, currency, customs, and aviation. The Concurrent Legislative List contains matters on which both the National Assembly and State Houses of Assembly can legislate — including education, health, and agriculture (federal law prevails in case of conflict). Residual matters (not on either list) fall within the exclusive legislative competence of State Houses of Assembly. Defence, foreign policy, currency, and immigration are all on the Exclusive Legislative List."
    },
    {
        id: 100,
        question: "What is a 'Binding Precedent'?",
        options: ["A past court decision that a lower court must follow", "An opinion by a lawyer", "A suggestion by the legislature", "A decision by the police"],
        correct: 0,
        topic: "Judicial Precedent",
        explanation: "A binding precedent (also called mandatory precedent) is a past court decision that a lower court in the same judicial hierarchy is legally obliged to follow when deciding a case with similar material facts. The binding element is the ratio decidendi (the legal principle on which the decision was based). Under the doctrine of stare decisis, the Nigerian court hierarchy operates as follows: Supreme Court decisions bind all lower courts; Court of Appeal decisions bind the High Courts and all lower courts; High Court decisions bind Magistrate Courts. The Supreme Court is not bound by its own previous decisions. Persuasive precedents (from courts of equal or lower rank, or from foreign courts) may be followed but are not binding. Binding precedent promotes consistency, predictability, and equality before the law."
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = JIL100_QUESTIONS;
}
