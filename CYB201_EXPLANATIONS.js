// CYB201 - Cybersecurity Explanations Database
const CYB201_EXPLANATIONS = {
    "cyb_001": "The CIA triad is the foundational model in cybersecurity consisting of Confidentiality (ensuring data is accessible only to authorized users), Integrity (ensuring data accuracy and hasn't been tampered with), and Availability (ensuring systems and data are accessible when needed). These three principles form the basis of implementing robust protections for digital assets.",
    
    "cyb_002": "Confidentiality ensures that information is accessible only to authorized individuals. This is achieved through techniques like encryption (converting data into secure format), access control (restricting access based on roles and permissions), and authentication mechanisms. Confidentiality prevents unauthorized disclosure of sensitive information.",
    
    "cyb_003": "Encryption converts data into a secure format that is readable only by someone with the correct decryption key. Its primary purpose is to achieve confidentiality by protecting data from unauthorized access. Even if encrypted data is intercepted, it cannot be read without the decryption key.",
    
    "cyb_004": "Hashing generates unique digital fingerprints (hashes) of data. If data is modified, the hash value changes, making it easy to detect tampering. This ensures data integrity by verifying that data hasn't been altered by unauthorized entities. Common hashing algorithms include SHA-256 and MD5.",
    
    "cyb_005": "Availability ensures that systems, data, and services are accessible to authorized users whenever needed. This requires redundant systems (backup servers), network resilience (load balancing, DDoS protection), and fault-tolerant methodologies to maintain service even under heavy traffic or attacks.",
    
    "cyb_006": "Multi-Factor Authentication (MFA) requires multiple forms of verification such as a password (something you know) and a one-time code sent to your phone (something you have), or biometric data (something you are). MFA significantly enhances security by adding extra layers beyond just passwords.",
    
    "cyb_007": "RBAC assigns access rights based on the user's role within the organization rather than individual identity. For example, all 'managers' get certain permissions, all 'employees' get different permissions. This simplifies access management and ensures users only have access needed for their job functions.",
    
    "cyb_008": "Discretionary Access Control (DAC) allows resource owners to control access permissions for their resources. The owner can decide who can read, write, or execute their files. This is common in operating systems like Windows and Linux where file owners can set permissions.",
    
    "cyb_009": "Digital signatures use cryptographic means to verify the authenticity and authorship of digital communications. They ensure that actions taken by an individual cannot be denied later, providing accountability. Digital signatures combine hashing and asymmetric encryption to prove who sent a message.",
    
    "cyb_010": "The Morris Worm (1988) was one of the first large-scale worms and significant cybersecurity incidents. It spread across the internet exploiting vulnerabilities in Unix systems, causing an estimated $10 million in damages. It represents the early days of cyber-attacks when attacks were mostly exploratory or curiosity-driven.",
    
    "cyb_011": "In the 2000s, cyber-attacks evolved from curiosity-driven to financially motivated. Attackers realized the potential for monetary gain through fraud, identity theft, data breaches, phishing, and ransomware. This era saw the rise of organized cybercrime targeting individuals and organizations for profit.",
    
    "cyb_012": "APTs are sophisticated, stealthy, long-term attacks often conducted by nation-state actors. They use advanced techniques to infiltrate high-value targets and maintain access over extended periods to steal sensitive data, gather intelligence, or sabotage systems. Examples include attacks attributed to government-sponsored groups.",
    
    "cyb_013": "ACLs manage permissions for files and directories by defining which users can access specific resources and what operations they can perform (read, write, execute). Operating systems use ACLs to enforce security policies and restrict unauthorized access to sensitive data and system resources.",
    
    "cyb_014": "Memory protection is an OS mechanism that isolates processes and enforces memory boundaries, preventing programs from accessing unauthorized memory areas. This prevents one process from reading or modifying another process's memory, protecting against buffer overflow attacks and ensuring system stability.",
    
    "cyb_015": "Sandboxing executes applications in isolated environments, preventing them from affecting other system components. If a sandboxed application is compromised, the damage is contained within the sandbox. This is commonly used for running untrusted code, testing software, and browser security.",
    
    "cyb_016": "Network-based IDS (NIDS) monitors network traffic and identifies malicious patterns or anomalies. It analyzes packets flowing through the network to detect suspicious activities like port scans, DoS attacks, or unauthorized access attempts. NIDS provides visibility into network-level threats.",
    
    "cyb_017": "Host-based IDS (HIDS) monitors a single host (server or computer) by tracking system logs, file changes, and application activity. It can detect unauthorized file modifications, suspicious process execution, and local security violations that network-based systems might miss.",
    
    "cyb_018": "Signature-based IDS detects attacks by comparing network traffic or system activity against a database of known attack patterns (signatures). When a match is found, an alert is generated. This method is effective against known threats but cannot detect new, unknown attacks (zero-day exploits).",
    
    "cyb_019": "The Bell-LaPadula model enforces confidentiality by ensuring that subjects cannot read data at higher security levels ('no read up') or write data at lower levels ('no write down'). This prevents information from flowing from high-security to low-security levels, protecting classified information.",
    
    "cyb_020": "The Bell-LaPadula model uses the 'no read up, no write down' rule to maintain confidentiality. Users at lower security clearance cannot read higher classified documents, and users at higher clearance cannot write to lower classification levels (preventing accidental leaks).",
    
    "cyb_021": "The Biba model focuses on data integrity by enforcing rules that prevent users from modifying or influencing data at higher integrity levels. It uses 'no write up, no read down' rules to ensure that low-integrity data cannot contaminate high-integrity data.",
    
    "cyb_022": "The Clark-Wilson model ensures integrity through well-formed transactions and separation of duties. It's often used in financial and transactional applications where data must remain consistent and accurate. The model requires that all data modifications go through certified procedures.",
    
    "cyb_023": "AES (Advanced Encryption Standard) is a symmetric encryption algorithm that uses a single key for both encryption and decryption. It's fast, secure, and widely used for encrypting data at rest and in transit. AES supports key sizes of 128, 192, and 256 bits.",
    
    "cyb_024": "RSA is an asymmetric encryption algorithm that uses a public key to encrypt data and a private key to decrypt it. The public key can be shared openly, while the private key must be kept secret. RSA enables secure communication and digital signatures without sharing secret keys.",
    
    "cyb_025": "Digital signatures provide both integrity (data hasn't been tampered with) and authenticity (verifying the sender's identity). They use asymmetric cryptography where the sender signs with their private key and recipients verify with the sender's public key. This ensures non-repudiation.",
    
    "cyb_026": "Steganography hides data within other media (images, audio, text) to conceal its existence rather than encrypt its contents. Unlike cryptography which makes data unreadable, steganography makes the message invisible. It's used for covert communication and can evade detection by traditional security tools.",
    
    "cyb_027": "Firewalls act as barriers between trusted and untrusted networks, filtering incoming and outgoing traffic based on predefined security rules. They examine packet headers and can block or allow traffic based on IP addresses, ports, and protocols, providing the first line of defense against network attacks.",
    
    "cyb_028": "VPNs (Virtual Private Networks) encrypt network traffic over public networks like the internet, creating a secure tunnel between the user and the destination. This maintains data confidentiality and privacy, protecting against eavesdropping and man-in-the-middle attacks.",
    
    "cyb_029": "IPS (Intrusion Prevention System) actively blocks detected threats, unlike IDS which only monitors and alerts. When IPS detects malicious activity, it can drop packets, block IP addresses, or reset connections automatically, providing real-time protection against attacks.",
    
    "cyb_030": "Zero Trust Architecture requires continuous verification of users and devices, never trusting by default even inside the network perimeter. It assumes breach and verifies every access request, limiting lateral movement and enhancing security across distributed environments.",
    
    "cyb_031": "DoS (Denial of Service) attacks overwhelm a network, application, or server with excessive requests to exhaust resources and render services unavailable. The goal is to disrupt business operations, not steal data. DDoS uses multiple compromised systems to amplify the attack.",
    
    "cyb_032": "Phishing attacks use deception and social engineering to trick individuals into divulging sensitive information like passwords or credit card numbers. Attackers create fake emails or websites that appear legitimate, exploiting human psychology rather than technical vulnerabilities.",
    
    "cyb_033": "SQL injection attacks insert malicious SQL statements into input fields, allowing attackers to manipulate or exfiltrate data from databases. This exploits poor input validation in web applications, potentially giving attackers full control over the database.",
    
    "cyb_034": "Man-in-the-Middle (MitM) attacks intercept and potentially alter communications between two parties without their knowledge. Attackers position themselves between the sender and receiver, stealing credentials, injecting malicious content, or eavesdropping on sensitive conversations.",
    
    "cyb_035": "Worms are self-replicating malware that spread automatically without user intervention, often causing network congestion. Unlike viruses, they don't need to attach to files or require user action. Famous examples include the Morris Worm and WannaCry ransomware worm.",
    
    "cyb_036": "Viruses require user action (like opening an infected file) to spread. They attach to legitimate programs or files and execute when the host is run. Viruses can corrupt data, delete files, disrupt systems, or spread to other computers through shared files.",
    
    "cyb_037": "Redundancy improves availability by duplicating critical system components (servers, databases, network links). If one component fails, others take over without downtime. This ensures continuous service and protects against data loss, supporting business continuity.",
    
    "cyb_038": "Data replication synchronizes data across multiple locations or systems, enhancing both availability (data remains accessible if one system fails) and integrity (multiple copies can be compared to detect corruption). It's essential for disaster recovery and fault tolerance.",
    
    "cyb_039": "Hacktivists are ideologically driven actors who launch cyber-attacks to promote political or social agendas. They use tactics like website defacement, DDoS attacks, and data leaks to protest perceived injustices or raise awareness for their causes. Examples include Anonymous.",
    
    "cyb_040": "Cyber criminals are primarily motivated by financial gain through activities like ransomware, data theft, fraud, and identity theft. Organized cybercrime groups operate across borders, making detection and prosecution challenging. They target valuable data and payment systems.",
    
    "cyb_041": "Nation-state actors conduct cyber operations for espionage (stealing intelligence), sabotage (disrupting infrastructure), or influence (election interference). Countries use cyber capabilities to gain strategic advantages in intelligence gathering, military operations, and geopolitical conflicts.",
    
    "cyb_042": "Blockchain provides secure, decentralized transaction records commonly used for cryptocurrencies. It uses cryptographic hashing and distributed consensus to create an immutable ledger where transactions cannot be altered retroactively, ensuring transparency and security without central authority.",
    
    "cyb_043": "Tokenization replaces sensitive data with non-sensitive equivalents (tokens) that have no exploitable value. The original data is stored securely elsewhere, and tokens are used in transactions. If tokens are stolen, they're useless without access to the tokenization system.",
    
    "cyb_044": "MFA is especially important in financial transactions because it adds extra security layers beyond passwords. Financial systems handle sensitive data and monetary transfers, making them prime targets. MFA significantly reduces the risk of unauthorized access and fraud.",
    
    "cyb_045": "Electronic voting systems require strong integrity (votes aren't altered) and availability (system remains accessible during elections). They also need confidentiality (ballot secrecy), authenticity (voter verification), and transparency (verifiable results) to maintain trust in democratic processes.",
    
    "cyb_046": "PCI DSS (Payment Card Industry Data Security Standard) mandates security practices for companies handling credit card information. It requires encryption, access controls, network security, and regular testing to protect cardholder data and prevent fraud.",
    
    "cyb_047": "CIP (Critical Infrastructure Protection) standards protect utilities, transportation, energy, and other essential services from cyber threats. These systems are vital for national security and public safety, making them high-value targets for nation-state actors and terrorists.",
    
    "cyb_048": "Patch management involves regularly updating software and systems to fix known vulnerabilities. Vendors release patches when security flaws are discovered. Timely patching prevents attackers from exploiting these vulnerabilities, reducing the attack surface.",
    
    "cyb_049": "File integrity monitoring detects unauthorized changes to critical system files and logs suspicious activity. It creates baseline hashes of files and alerts when modifications occur, helping identify malware infections, unauthorized access, or system compromises.",
    
    "cyb_050": "The main goal of cybersecurity is to protect systems, networks, and data from unauthorized access, damage, or disruption. This encompasses the CIA triad (Confidentiality, Integrity, Availability) and extends to protecting against all forms of cyber threats while enabling safe digital operations."
};

// Export for use in exam system
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CYB201_EXPLANATIONS;
}
