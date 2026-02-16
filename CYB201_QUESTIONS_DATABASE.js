// CYB201 - Cybersecurity Fundamentals Questions Database

const CYB201_QUESTIONS = [
    {
        question: "The CIA triad in cybersecurity stands for:",
        options: ["Control, Integrity, Access", "Confidentiality, Integrity, Availability", "Cyber, Information, Access", "Control, Information, Authorization"],
        correct: 1,
        topic: "CIA Triad"
    },
    {
        question: "Which cybersecurity principle ensures data is accessible only to authorized users?",
        options: ["Integrity", "Availability", "Confidentiality", "Non-repudiation"],
        correct: 2,
        topic: "CIA Triad"
    },
    {
        question: "Encryption is mainly used to achieve:",
        options: ["Availability", "Confidentiality", "Integrity", "Authentication"],
        correct: 1,
        topic: "Cryptography"
    },
    {
        question: "Hashing is primarily used to ensure:",
        options: ["Confidentiality", "Availability", "Integrity", "Authorization"],
        correct: 2,
        topic: "Cryptography"
    },
    {
        question: "Which concept ensures systems remain accessible during attacks or failures?",
        options: ["Confidentiality", "Integrity", "Availability", "Authentication"],
        correct: 2,
        topic: "CIA Triad"
    },
    {
        question: "Which authentication method requires more than one verification factor?",
        options: ["Password authentication", "PIN authentication", "Multi-Factor Authentication", "Token authentication"],
        correct: 2,
        topic: "Authentication"
    },
    {
        question: "Role-Based Access Control (RBAC) assigns permissions based on:",
        options: ["User identity", "File ownership", "User role", "Security clearance"],
        correct: 2,
        topic: "Access Control"
    },
    {
        question: "Which access control model allows data owners to decide access rights?",
        options: ["MAC", "RBAC", "DAC", "ACL"],
        correct: 2,
        topic: "Access Control"
    },
    {
        question: "Non-repudiation is best achieved using:",
        options: ["Firewalls", "Digital signatures", "Passwords", "Encryption only"],
        correct: 1,
        topic: "Cryptography"
    },
    {
        question: "The Morris Worm (1988) is an example of:",
        options: ["Modern ransomware", "Early cyber-attack", "Phishing attack", "SQL injection"],
        correct: 1,
        topic: "Cyber Threats"
    },
    {
        question: "Cyber-attacks in the 2000s were mostly motivated by:",
        options: ["Curiosity", "Experimentation", "Financial gain", "Academic research"],
        correct: 2,
        topic: "Cyber Threats"
    },
    {
        question: "Advanced Persistent Threats (APTs) are commonly associated with:",
        options: ["Script kiddies", "Hacktivists", "Nation-state actors", "Students"],
        correct: 2,
        topic: "Cyber Threats"
    },
    {
        question: "Access Control Lists (ACLs) are used to:",
        options: ["Encrypt data", "Monitor traffic", "Define user permissions", "Detect malware"],
        correct: 2,
        topic: "Access Control"
    },
    {
        question: "Which OS mechanism isolates processes in memory?",
        options: ["Authentication", "Memory protection", "Sandboxing", "Patch management"],
        correct: 1,
        topic: "Operating System Security"
    },
    {
        question: "Sandboxing is best described as:",
        options: ["Encrypting files", "Running applications in isolation", "Monitoring logs", "Blocking network traffic"],
        correct: 1,
        topic: "Operating System Security"
    },
    {
        question: "Which IDS monitors network traffic?",
        options: ["HIDS", "NIDS", "IPS", "VPN"],
        correct: 1,
        topic: "Intrusion Detection"
    },
    {
        question: "A Host-based IDS mainly monitors:",
        options: ["Network packets", "Routers", "System logs and files", "Firewalls"],
        correct: 2,
        topic: "Intrusion Detection"
    },
    {
        question: "Signature-based IDS detects attacks by:",
        options: ["Monitoring user behavior", "Comparing known attack patterns", "Encrypting traffic", "Blocking IP addresses"],
        correct: 1,
        topic: "Intrusion Detection"
    },
    {
        question: "Which security model focuses on confidentiality?",
        options: ["Biba", "Clark-Wilson", "Bell-LaPadula", "DAC"],
        correct: 2,
        topic: "Security Models"
    },
    {
        question: "\"No read up, no write down\" is a rule of:",
        options: ["Biba model", "Bell-LaPadula model", "Clark-Wilson model", "RBAC"],
        correct: 1,
        topic: "Security Models"
    },
    {
        question: "Which security model focuses on data integrity?",
        options: ["Bell-LaPadula", "Biba", "Clark-Wilson", "MAC"],
        correct: 1,
        topic: "Security Models"
    },
    {
        question: "Clark-Wilson model emphasizes:",
        options: ["Encryption", "Well-formed transactions", "Network security", "Availability"],
        correct: 1,
        topic: "Security Models"
    },
    {
        question: "AES is an example of:",
        options: ["Asymmetric encryption", "Hashing algorithm", "Symmetric encryption", "Digital signature"],
        correct: 2,
        topic: "Cryptography"
    },
    {
        question: "RSA encryption uses:",
        options: ["One key", "Two private keys", "Public and private keys", "Hash values"],
        correct: 2,
        topic: "Cryptography"
    },
    {
        question: "Digital signatures provide:",
        options: ["Confidentiality only", "Availability", "Integrity and authenticity", "Access control"],
        correct: 2,
        topic: "Cryptography"
    },
    {
        question: "Steganography differs from cryptography because it:",
        options: ["Encrypts data faster", "Hides the existence of a message", "Uses public keys", "Prevents DoS attacks"],
        correct: 1,
        topic: "Cryptography"
    },
    {
        question: "A firewall primarily:",
        options: ["Encrypts data", "Filters network traffic", "Stores passwords", "Detects viruses"],
        correct: 1,
        topic: "Network Security"
    },
    {
        question: "VPNs are used to:",
        options: ["Block malware", "Encrypt traffic over public networks", "Detect intrusions", "Monitor logs"],
        correct: 1,
        topic: "Network Security"
    },
    {
        question: "IPS differs from IDS because IPS:",
        options: ["Only monitors", "Blocks detected threats", "Encrypts traffic", "Stores logs"],
        correct: 1,
        topic: "Intrusion Detection"
    },
    {
        question: "Zero Trust Architecture requires:",
        options: ["One-time authentication", "Continuous verification", "No encryption", "Public access"],
        correct: 1,
        topic: "Network Security"
    },
    {
        question: "A DoS attack aims to:",
        options: ["Steal data", "Modify files", "Make services unavailable", "Encrypt systems"],
        correct: 2,
        topic: "Cyber Threats"
    },
    {
        question: "Phishing attacks rely mainly on:",
        options: ["Malware", "Encryption", "Deception and social engineering", "Firewalls"],
        correct: 2,
        topic: "Social Engineering"
    },
    {
        question: "SQL injection targets:",
        options: ["Operating systems", "Databases", "Networks", "Hardware"],
        correct: 1,
        topic: "Web Security"
    },
    {
        question: "A Man-in-the-Middle attack involves:",
        options: ["Blocking traffic", "Intercepting communication", "Spreading worms", "Encrypting messages"],
        correct: 1,
        topic: "Cyber Threats"
    },
    {
        question: "Worms differ from viruses because worms:",
        options: ["Need user action", "Cannot spread", "Self-replicate automatically", "Are harmless"],
        correct: 2,
        topic: "Malware"
    },
    {
        question: "Viruses usually require:",
        options: ["Network access", "User action to spread", "Firewalls", "Encryption"],
        correct: 1,
        topic: "Malware"
    },
    {
        question: "Redundancy in cybersecurity improves:",
        options: ["Confidentiality", "Integrity", "Availability", "Authentication"],
        correct: 2,
        topic: "CIA Triad"
    },
    {
        question: "Data replication helps mainly with:",
        options: ["Confidentiality", "Availability and integrity", "Authentication", "Non-repudiation"],
        correct: 1,
        topic: "Data Protection"
    },
    {
        question: "Which actor is motivated mainly by ideology?",
        options: ["Cyber criminals", "Nation-state actors", "Hacktivists", "Private companies"],
        correct: 2,
        topic: "Threat Actors"
    },
    {
        question: "Cyber criminals are primarily motivated by:",
        options: ["Curiosity", "National security", "Financial gain", "Ethics"],
        correct: 2,
        topic: "Threat Actors"
    },
    {
        question: "Nation-state actors engage in cyber-attacks mainly for:",
        options: ["Fun", "Espionage and sabotage", "Academic reasons", "Bug bounties"],
        correct: 1,
        topic: "Threat Actors"
    },
    {
        question: "Blockchain technology is mainly used for:",
        options: ["Encryption only", "Secure decentralized transactions", "IDS", "Firewalls"],
        correct: 1,
        topic: "Emerging Technologies"
    },
    {
        question: "Tokenization replaces sensitive data with:",
        options: ["Hashes", "Encrypted keys", "Non-sensitive tokens", "Passwords"],
        correct: 2,
        topic: "Data Protection"
    },
    {
        question: "MFA is especially important in:",
        options: ["File sharing", "Gaming", "Financial transactions", "Printing"],
        correct: 2,
        topic: "Authentication"
    },
    {
        question: "Electronic voting systems require strong:",
        options: ["Confidentiality only", "Integrity and availability", "Graphics design", "Hardware speed"],
        correct: 1,
        topic: "Application Security"
    },
    {
        question: "PCI DSS applies mainly to:",
        options: ["Hospitals", "Universities", "Credit card processing", "Social media"],
        correct: 2,
        topic: "Compliance"
    },
    {
        question: "CIP standards protect:",
        options: ["Personal devices", "Critical infrastructure", "Home networks", "Student portals"],
        correct: 1,
        topic: "Compliance"
    },
    {
        question: "Patch management is used to:",
        options: ["Encrypt files", "Fix vulnerabilities", "Monitor traffic", "Block users"],
        correct: 1,
        topic: "Vulnerability Management"
    },
    {
        question: "File integrity monitoring is used to detect:",
        options: ["Network congestion", "Unauthorized file changes", "Phishing emails", "DoS attacks"],
        correct: 1,
        topic: "Monitoring"
    },
    {
        question: "The main goal of cybersecurity is to protect:",
        options: ["Hardware only", "Software only", "Systems, networks, and data", "Users only"],
        correct: 2,
        topic: "Cybersecurity Fundamentals"
    }
];

// Export for use in exam system
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CYB201_QUESTIONS;
}
