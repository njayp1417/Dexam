// CYB201 - Cybersecurity Fundamentals Questions Database
const CYB201_QUESTIONS = [
    // Extracted from past questions (50 questions)
    {
        id: "cyb_001",
        question: "The CIA triad in cybersecurity stands for:",
        options: ["Control, Integrity, Access", "Confidentiality, Integrity, Availability", "Cyber, Information, Access", "Control, Information, Authorization"],
        correct: 1,
        topic: "CIA Triad"
    },
    {
        id: "cyb_002",
        question: "Which cybersecurity principle ensures data is accessible only to authorized users?",
        options: ["Integrity", "Availability", "Confidentiality", "Non-repudiation"],
        correct: 2,
        topic: "CIA Triad"
    },
    {
        id: "cyb_003",
        question: "Encryption is mainly used to achieve:",
        options: ["Availability", "Confidentiality", "Integrity", "Authentication"],
        correct: 1,
        topic: "Cryptography"
    },
    {
        id: "cyb_004",
        question: "Hashing is primarily used to ensure:",
        options: ["Confidentiality", "Availability", "Integrity", "Authorization"],
        correct: 2,
        topic: "Cryptography"
    },
    {
        id: "cyb_005",
        question: "Which concept ensures systems remain accessible during attacks or failures?",
        options: ["Confidentiality", "Integrity", "Availability", "Authentication"],
        correct: 2,
        topic: "CIA Triad"
    },
    {
        id: "cyb_006",
        question: "Which authentication method requires more than one verification factor?",
        options: ["Password authentication", "PIN authentication", "Multi-Factor Authentication", "Token authentication"],
        correct: 2,
        topic: "Authentication"
    },
    {
        id: "cyb_007",
        question: "Role-Based Access Control (RBAC) assigns permissions based on:",
        options: ["User identity", "File ownership", "User role", "Security clearance"],
        correct: 2,
        topic: "Access Control"
    },
    {
        id: "cyb_008",
        question: "Which access control model allows data owners to decide access rights?",
        options: ["MAC", "RBAC", "DAC", "ACL"],
        correct: 2,
        topic: "Access Control"
    },
    {
        id: "cyb_009",
        question: "Non-repudiation is best achieved using:",
        options: ["Firewalls", "Digital signatures", "Passwords", "Encryption only"],
        correct: 1,
        topic: "Cryptography"
    },
    {
        id: "cyb_010",
        question: "The Morris Worm (1988) is an example of:",
        options: ["Modern ransomware", "Early cyber-attack", "Phishing attack", "SQL injection"],
        correct: 1,
        topic: "Cyber Attacks"
    },
    {
        id: "cyb_011",
        question: "Cyber-attacks in the 2000s were mostly motivated by:",
        options: ["Curiosity", "Experimentation", "Financial gain", "Academic research"],
        correct: 2,
        topic: "Cyber Attacks"
    },
    {
        id: "cyb_012",
        question: "Advanced Persistent Threats (APTs) are commonly associated with:",
        options: ["Script kiddies", "Hacktivists", "Nation-state actors", "Students"],
        correct: 2,
        topic: "Cyber Attacks"
    },
    {
        id: "cyb_013",
        question: "Access Control Lists (ACLs) are used to:",
        options: ["Encrypt data", "Monitor traffic", "Define user permissions", "Detect malware"],
        correct: 2,
        topic: "Access Control"
    },
    {
        id: "cyb_014",
        question: "Which OS mechanism isolates processes in memory?",
        options: ["Authentication", "Memory protection", "Sandboxing", "Patch management"],
        correct: 1,
        topic: "Operating System Security"
    },
    {
        id: "cyb_015",
        question: "Sandboxing is best described as:",
        options: ["Encrypting files", "Running applications in isolation", "Monitoring logs", "Blocking network traffic"],
        correct: 1,
        topic: "Operating System Security"
    },
    {
        id: "cyb_016",
        question: "Which IDS monitors network traffic?",
        options: ["HIDS", "NIDS", "IPS", "VPN"],
        correct: 1,
        topic: "Intrusion Detection"
    },
    {
        id: "cyb_017",
        question: "A Host-based IDS mainly monitors:",
        options: ["Network packets", "Routers", "System logs and files", "Firewalls"],
        correct: 2,
        topic: "Intrusion Detection"
    },
    {
        id: "cyb_018",
        question: "Signature-based IDS detects attacks by:",
        options: ["Monitoring user behavior", "Comparing known attack patterns", "Encrypting traffic", "Blocking IP addresses"],
        correct: 1,
        topic: "Intrusion Detection"
    },
    {
        id: "cyb_019",
        question: "Which security model focuses on confidentiality?",
        options: ["Biba", "Clark-Wilson", "Bell-LaPadula", "DAC"],
        correct: 2,
        topic: "Security Models"
    },
    {
        id: "cyb_020",
        question: "\"No read up, no write down\" is a rule of:",
        options: ["Biba model", "Bell-LaPadula model", "Clark-Wilson model", "RBAC"],
        correct: 1,
        topic: "Security Models"
    },
    {
        id: "cyb_021",
        question: "Which security model focuses on data integrity?",
        options: ["Bell-LaPadula", "Biba", "Clark-Wilson", "MAC"],
        correct: 1,
        topic: "Security Models"
    },
    {
        id: "cyb_022",
        question: "Clark-Wilson model emphasizes:",
        options: ["Encryption", "Well-formed transactions", "Network security", "Availability"],
        correct: 1,
        topic: "Security Models"
    },
    {
        id: "cyb_023",
        question: "AES is an example of:",
        options: ["Asymmetric encryption", "Hashing algorithm", "Symmetric encryption", "Digital signature"],
        correct: 2,
        topic: "Cryptography"
    },
    {
        id: "cyb_024",
        question: "RSA encryption uses:",
        options: ["One key", "Two private keys", "Public and private keys", "Hash values"],
        correct: 2,
        topic: "Cryptography"
    },
    {
        id: "cyb_025",
        question: "Digital signatures provide:",
        options: ["Confidentiality only", "Availability", "Integrity and authenticity", "Access control"],
        correct: 2,
        topic: "Cryptography"
    },
    {
        id: "cyb_026",
        question: "Steganography differs from cryptography because it:",
        options: ["Encrypts data faster", "Hides the existence of a message", "Uses public keys", "Prevents DoS attacks"],
        correct: 1,
        topic: "Cryptography"
    },
    {
        id: "cyb_027",
        question: "A firewall primarily:",
        options: ["Encrypts data", "Filters network traffic", "Stores passwords", "Detects viruses"],
        correct: 1,
        topic: "Network Security"
    },
    {
        id: "cyb_028",
        question: "VPNs are used to:",
        options: ["Block malware", "Encrypt traffic over public networks", "Detect intrusions", "Monitor logs"],
        correct: 1,
        topic: "Network Security"
    },
    {
        id: "cyb_029",
        question: "IPS differs from IDS because IPS:",
        options: ["Only monitors", "Blocks detected threats", "Encrypts traffic", "Stores logs"],
        correct: 1,
        topic: "Intrusion Detection"
    },
    {
        id: "cyb_030",
        question: "Zero Trust Architecture requires:",
        options: ["One-time authentication", "Continuous verification", "No encryption", "Public access"],
        correct: 1,
        topic: "Security Architecture"
    },
    {
        id: "cyb_031",
        question: "A DoS attack aims to:",
        options: ["Steal data", "Modify files", "Make services unavailable", "Encrypt systems"],
        correct: 2,
        topic: "Cyber Attacks"
    },
    {
        id: "cyb_032",
        question: "Phishing attacks rely mainly on:",
        options: ["Malware", "Encryption", "Deception and social engineering", "Firewalls"],
        correct: 2,
        topic: "Cyber Attacks"
    },
    {
        id: "cyb_033",
        question: "SQL injection targets:",
        options: ["Operating systems", "Databases", "Networks", "Hardware"],
        correct: 1,
        topic: "Application Security"
    },
    {
        id: "cyb_034",
        question: "A Man-in-the-Middle attack involves:",
        options: ["Blocking traffic", "Intercepting communication", "Spreading worms", "Encrypting messages"],
        correct: 1,
        topic: "Cyber Attacks"
    },
    {
        id: "cyb_035",
        question: "Worms differ from viruses because worms:",
        options: ["Need user action", "Cannot spread", "Self-replicate automatically", "Are harmless"],
        correct: 2,
        topic: "Malware"
    },
    {
        id: "cyb_036",
        question: "Viruses usually require:",
        options: ["Network access", "User action to spread", "Firewalls", "Encryption"],
        correct: 1,
        topic: "Malware"
    },
    {
        id: "cyb_037",
        question: "Redundancy in cybersecurity improves:",
        options: ["Confidentiality", "Integrity", "Availability", "Authentication"],
        correct: 2,
        topic: "Fault Tolerance"
    },
    {
        id: "cyb_038",
        question: "Data replication helps mainly with:",
        options: ["Confidentiality", "Availability and integrity", "Authentication", "Non-repudiation"],
        correct: 1,
        topic: "Fault Tolerance"
    },
    {
        id: "cyb_039",
        question: "Which actor is motivated mainly by ideology?",
        options: ["Cyber criminals", "Nation-state actors", "Hacktivists", "Private companies"],
        correct: 2,
        topic: "Threat Actors"
    },
    {
        id: "cyb_040",
        question: "Cyber criminals are primarily motivated by:",
        options: ["Curiosity", "National security", "Financial gain", "Ethics"],
        correct: 2,
        topic: "Threat Actors"
    },
    {
        id: "cyb_041",
        question: "Nation-state actors engage in cyber-attacks mainly for:",
        options: ["Fun", "Espionage and sabotage", "Academic reasons", "Bug bounties"],
        correct: 1,
        topic: "Threat Actors"
    },
    {
        id: "cyb_042",
        question: "Blockchain technology is mainly used for:",
        options: ["Encryption only", "Secure decentralized transactions", "IDS", "Firewalls"],
        correct: 1,
        topic: "Emerging Technologies"
    },
    {
        id: "cyb_043",
        question: "Tokenization replaces sensitive data with:",
        options: ["Hashes", "Encrypted keys", "Non-sensitive tokens", "Passwords"],
        correct: 2,
        topic: "Data Protection"
    },
    {
        id: "cyb_044",
        question: "MFA is especially important in:",
        options: ["File sharing", "Gaming", "Financial transactions", "Printing"],
        correct: 2,
        topic: "Authentication"
    },
    {
        id: "cyb_045",
        question: "Electronic voting systems require strong:",
        options: ["Confidentiality only", "Integrity and availability", "Graphics design", "Hardware speed"],
        correct: 1,
        topic: "Secure Applications"
    },
    {
        id: "cyb_046",
        question: "PCI DSS applies mainly to:",
        options: ["Hospitals", "Universities", "Credit card processing", "Social media"],
        correct: 2,
        topic: "Compliance"
    },
    {
        id: "cyb_047",
        question: "CIP standards protect:",
        options: ["Personal devices", "Critical infrastructure", "Home networks", "Student portals"],
        correct: 1,
        topic: "Compliance"
    },
    {
        id: "cyb_048",
        question: "Patch management is used to:",
        options: ["Encrypt files", "Fix vulnerabilities", "Monitor traffic", "Block users"],
        correct: 1,
        topic: "Vulnerability Management"
    },
    {
        id: "cyb_049",
        question: "File integrity monitoring is used to detect:",
        options: ["Network congestion", "Unauthorized file changes", "Phishing emails", "DoS attacks"],
        correct: 1,
        topic: "Monitoring"
    },
    {
        id: "cyb_050",
        question: "The main goal of cybersecurity is to protect:",
        options: ["Hardware only", "Software only", "Systems, networks, and data", "Users only"],
        correct: 2,
        topic: "Fundamentals"
    }
];

    // Additional questions based on course material (100+ more questions)
    {
        question: "GDPR is a regulation from:",
        options: ["United States", "European Union", "China", "Japan"],
        correct: 1,
        topic: "Compliance"
    },
    {
        question: "HIPAA protects:",
        options: ["Financial data", "Patient health information", "Credit card data", "Social media data"],
        correct: 1,
        topic: "Compliance"
    },
    {
        question: "CCPA applies to residents of:",
        options: ["New York", "Texas", "California", "Florida"],
        correct: 2,
        topic: "Compliance"
    },
    {
        question: "FISMA applies to:",
        options: ["Private companies", "US federal agencies", "Universities", "Hospitals"],
        correct: 1,
        topic: "Compliance"
    },
    {
        question: "Ransomware typically:",
        options: ["Steals passwords", "Encrypts data and demands payment", "Monitors traffic", "Blocks websites"],
        correct: 1,
        topic: "Malware"
    },
    {
        question: "Spyware is designed to:",
        options: ["Encrypt files", "Monitor user activity", "Block access", "Delete data"],
        correct: 1,
        topic: "Malware"
    },
    {
        question: "Trojan horses:",
        options: ["Self-replicate", "Appear legitimate but are malicious", "Only affect networks", "Cannot be detected"],
        correct: 1,
        topic: "Malware"
    },
    {
        question: "Adware primarily:",
        options: ["Steals data", "Displays unwanted advertisements", "Encrypts files", "Blocks networks"],
        correct: 1,
        topic: "Malware"
    },
    {
        question: "Rootkits are designed to:",
        options: ["Display ads", "Hide malicious activity", "Encrypt data", "Monitor emails"],
        correct: 1,
        topic: "Malware"
    },
    {
        question: "Keyloggers record:",
        options: ["Network traffic", "Keystroke data", "Screen images only", "Audio"],
        correct: 1,
        topic: "Malware"
    },
    {
        question: "DDoS attacks use:",
        options: ["Single computer", "Multiple compromised systems", "Encryption", "Firewalls"],
        correct: 1,
        topic: "Cyber Attacks"
    },
    {
        question: "Spear phishing targets:",
        options: ["Random users", "Specific individuals or organizations", "All email users", "Only executives"],
        correct: 1,
        topic: "Cyber Attacks"
    },
    {
        question: "Whaling attacks target:",
        options: ["Students", "High-profile executives", "IT staff", "General employees"],
        correct: 1,
        topic: "Cyber Attacks"
    },
    {
        question: "Cross-Site Scripting (XSS) injects:",
        options: ["SQL code", "Malicious scripts into web pages", "Viruses", "Worms"],
        correct: 1,
        topic: "Application Security"
    },
    {
        question: "Buffer overflow attacks exploit:",
        options: ["Network protocols", "Memory management flaws", "Weak passwords", "Firewalls"],
        correct: 1,
        topic: "Application Security"
    },
    {
        question: "Command injection allows attackers to:",
        options: ["Read files only", "Execute system commands", "View passwords", "Block traffic"],
        correct: 1,
        topic: "Application Security"
    },
    {
        question: "Path traversal attacks access:",
        options: ["Network routes", "Files outside intended directory", "Databases", "Emails"],
        correct: 1,
        topic: "Application Security"
    },
    {
        question: "Insecure deserialization can lead to:",
        options: ["Slow performance", "Remote code execution", "Better security", "Faster processing"],
        correct: 1,
        topic: "Application Security"
    },
    {
        question: "Broken authentication allows:",
        options: ["Better security", "Unauthorized access", "Faster login", "Encrypted sessions"],
        correct: 1,
        topic: "Application Security"
    },
    {
        question: "Sensitive data exposure occurs when:",
        options: ["Data is encrypted", "Data is improperly protected", "Firewalls are active", "IDS is running"],
        correct: 1,
        topic: "Application Security"
    },
    {
        question: "Security misconfiguration happens when:",
        options: ["Systems are properly secured", "Default settings are unchanged", "Encryption is used", "Passwords are strong"],
        correct: 1,
        topic: "Application Security"
    },
    {
        question: "XML External Entity (XXE) attacks target:",
        options: ["Databases", "XML parsers", "Firewalls", "Routers"],
        correct: 1,
        topic: "Application Security"
    },
    {
        question: "CSRF attacks trick users into:",
        options: ["Logging out", "Executing unwanted actions", "Changing passwords", "Encrypting data"],
        correct: 1,
        topic: "Application Security"
    },
    {
        question: "Using components with known vulnerabilities is risky because:",
        options: ["They are expensive", "Attackers can exploit them", "They are slow", "They use more memory"],
        correct: 1,
        topic: "Application Security"
    },
    {
        question: "Insufficient logging makes it hard to:",
        options: ["Run applications", "Detect and respond to attacks", "Encrypt data", "Use firewalls"],
        correct: 1,
        topic: "Monitoring"
    },
    {
        question: "SIEM systems are used for:",
        options: ["Encryption", "Security information and event management", "File storage", "Email filtering"],
        correct: 1,
        topic: "Monitoring"
    },
    {
        question: "Penetration testing is:",
        options: ["Illegal hacking", "Authorized security testing", "Installing malware", "Blocking networks"],
        correct: 1,
        topic: "Security Testing"
    },
    {
        question: "Vulnerability scanning identifies:",
        options: ["Strong passwords", "Security weaknesses", "Fast networks", "Good configurations"],
        correct: 1,
        topic: "Security Testing"
    },
    {
        question: "Red team exercises simulate:",
        options: ["Normal operations", "Real attacks", "System upgrades", "Data backups"],
        correct: 1,
        topic: "Security Testing"
    },
    {
        question: "Blue team focuses on:",
        options: ["Attacking systems", "Defending systems", "Installing software", "Managing databases"],
        correct: 1,
        topic: "Security Testing"
    },
    {
        question: "Security audits review:",
        options: ["Only hardware", "Security practices and policies", "Only software", "Only networks"],
        correct: 1,
        topic: "Security Testing"
    },
    {
        question: "Incident response involves:",
        options: ["Ignoring attacks", "Detecting and responding to security incidents", "Installing software", "Upgrading hardware"],
        correct: 1,
        topic: "Incident Response"
    },
    {
        question: "The first step in incident response is:",
        options: ["Recovery", "Preparation", "Eradication", "Containment"],
        correct: 1,
        topic: "Incident Response"
    },
    {
        question: "Containment in incident response means:",
        options: ["Deleting all data", "Isolating affected systems", "Ignoring the incident", "Upgrading software"],
        correct: 1,
        topic: "Incident Response"
    },
    {
        question: "Eradication involves:",
        options: ["Backing up data", "Removing malicious elements", "Installing firewalls", "Monitoring traffic"],
        correct: 1,
        topic: "Incident Response"
    },
    {
        question: "Recovery in incident response includes:",
        options: ["Deleting systems", "Restoring normal operations", "Ignoring issues", "Blocking all access"],
        correct: 1,
        topic: "Incident Response"
    },
    {
        question: "Post-incident review helps:",
        options: ["Delete evidence", "Improve future response", "Hide mistakes", "Blame others"],
        correct: 1,
        topic: "Incident Response"
    },
    {
        question: "Risk assessment identifies:",
        options: ["Only benefits", "Threats and vulnerabilities", "Only opportunities", "Hardware specs"],
        correct: 1,
        topic: "Risk Management"
    },
    {
        question: "Risk mitigation involves:",
        options: ["Ignoring risks", "Reducing risk likelihood or impact", "Accepting all risks", "Transferring all risks"],
        correct: 1,
        topic: "Risk Management"
    },
    {
        question: "Risk acceptance means:",
        options: ["Ignoring risks", "Acknowledging and accepting certain risks", "Eliminating all risks", "Transferring risks"],
        correct: 1,
        topic: "Risk Management"
    },
    {
        question: "Risk transfer typically uses:",
        options: ["Firewalls", "Insurance or outsourcing", "Encryption", "Passwords"],
        correct: 1,
        topic: "Risk Management"
    },
    {
        question: "Disaster recovery focuses on:",
        options: ["Preventing all disasters", "Restoring operations after incidents", "Ignoring problems", "Upgrading hardware"],
        correct: 1,
        topic: "Disaster Recovery"
    },
    {
        question: "Business continuity planning ensures:",
        options: ["Systems never fail", "Operations continue during incidents", "All data is deleted", "Networks are blocked"],
        correct: 1,
        topic: "Disaster Recovery"
    },
    {
        question: "Backups should be:",
        options: ["Never tested", "Regular and tested", "Stored only locally", "Unencrypted"],
        correct: 1,
        topic: "Disaster Recovery"
    },
    {
        question: "Failover systems:",
        options: ["Never work", "Take over when primary systems fail", "Are unnecessary", "Only for small companies"],
        correct: 1,
        topic: "Disaster Recovery"
    },
    {
        question: "Load balancing helps with:",
        options: ["Encryption", "Distributing traffic across servers", "Deleting data", "Blocking users"],
        correct: 1,
        topic: "Network Security"
    },
    {
        question: "Network segmentation:",
        options: ["Combines all networks", "Divides networks into isolated segments", "Removes firewalls", "Disables encryption"],
        correct: 1,
        topic: "Network Security"
    },
    {
        question: "DMZ (Demilitarized Zone) is:",
        options: ["A military term only", "A network segment between internal and external networks", "A type of malware", "An encryption method"],
        correct: 1,
        topic: "Network Security"
    },
    {
        question: "SSL/TLS protocols provide:",
        options: ["No security", "Encrypted communication", "Malware detection", "User authentication only"],
        correct: 1,
        topic: "Network Security"
    },
    {
        question: "IPsec secures:",
        options: ["Only emails", "IP communications", "Only web traffic", "Only file transfers"],
        correct: 1,
        topic: "Network Security"
    },
    {
        question: "DNSSEC provides:",
        options: ["Faster DNS", "DNS security and integrity", "More storage", "Better graphics"],
        correct: 1,
        topic: "Network Security"
    },
    {
        question: "Honeypots are used to:",
        options: ["Store data", "Lure and study attackers", "Encrypt files", "Block traffic"],
        correct: 1,
        topic: "Security Tools"
    },
    {
        question: "Honeynets are:",
        options: ["Single honeypots", "Networks of honeypots", "Firewalls", "Routers"],
        correct: 1,
        topic: "Security Tools"
    },
    {
        question: "Threat intelligence provides:",
        options: ["Hardware specs", "Information about threats and attackers", "Software licenses", "Network speeds"],
        correct: 1,
        topic: "Threat Intelligence"
    },
    {
        question: "Indicators of Compromise (IoCs) are:",
        options: ["Normal activities", "Signs of security breaches", "Performance metrics", "User preferences"],
        correct: 1,
        topic: "Threat Intelligence"
    },
    {
        question: "Security awareness training helps:",
        options: ["Install software", "Educate users about security", "Upgrade hardware", "Delete files"],
        correct: 1,
        topic: "Security Awareness"
    },
    {
        question: "Social engineering exploits:",
        options: ["Software bugs", "Human psychology", "Network protocols", "Hardware flaws"],
        correct: 1,
        topic: "Social Engineering"
    },
    {
        question: "Pretexting involves:",
        options: ["Sending emails", "Creating false scenarios", "Installing malware", "Blocking networks"],
        correct: 1,
        topic: "Social Engineering"
    },
    {
        question: "Baiting uses:",
        options: ["Encryption", "Tempting offers to trick users", "Firewalls", "Passwords"],
        correct: 1,
        topic: "Social Engineering"
    },
    {
        question: "Tailgating is:",
        options: ["Following cars", "Unauthorized physical access by following authorized person", "Email attack", "Malware"],
        correct: 1,
        topic: "Physical Security"
    },
    {
        question: "Shoulder surfing involves:",
        options: ["Network monitoring", "Observing someone's screen or keyboard", "Installing cameras", "Hacking networks"],
        correct: 1,
        topic: "Physical Security"
    },
    {
        question: "Dumpster diving searches:",
        options: ["Networks", "Trash for sensitive information", "Databases", "Emails"],
        correct: 1,
        topic: "Physical Security"
    },
    {
        question: "Biometric authentication uses:",
        options: ["Passwords", "Physical characteristics", "Tokens", "PINs"],
        correct: 1,
        topic: "Authentication"
    },
    {
        question: "Single Sign-On (SSO) allows:",
        options: ["Multiple passwords", "One login for multiple systems", "No authentication", "Weak security"],
        correct: 1,
        topic: "Authentication"
    },
    {
        question: "OAuth is used for:",
        options: ["Encryption", "Authorization", "Malware detection", "Network routing"],
        correct: 1,
        topic: "Authentication"
    },
    {
        question: "SAML is used for:",
        options: ["File transfer", "Single sign-on authentication", "Encryption", "Malware scanning"],
        correct: 1,
        topic: "Authentication"
    },
    {
        question: "Password policies should enforce:",
        options: ["Weak passwords", "Strong, complex passwords", "No passwords", "Shared passwords"],
        correct: 1,
        topic: "Authentication"
    },
    {
        question: "Password managers help:",
        options: ["Share passwords", "Store and generate strong passwords", "Disable security", "Remove encryption"],
        correct: 1,
        topic: "Authentication"
    },
    {
        question: "Salting passwords involves:",
        options: ["Removing encryption", "Adding random data before hashing", "Sharing passwords", "Weakening security"],
        correct: 1,
        topic: "Cryptography"
    },
    {
        question: "Rainbow tables are used to:",
        options: ["Encrypt data", "Crack password hashes", "Monitor networks", "Block traffic"],
        correct: 1,
        topic: "Cryptography"
    },
    {
        question: "Public Key Infrastructure (PKI) manages:",
        options: ["Only private keys", "Digital certificates and keys", "Only passwords", "Only firewalls"],
        correct: 1,
        topic: "Cryptography"
    },
    {
        question: "Certificate Authorities (CAs) issue:",
        options: ["Passwords", "Digital certificates", "Malware", "Firewalls"],
        correct: 1,
        topic: "Cryptography"
    },
    {
        question: "End-to-end encryption ensures:",
        options: ["No encryption", "Only sender and receiver can read messages", "Everyone can read messages", "Weak security"],
        correct: 1,
        topic: "Cryptography"
    },
    {
        question: "Quantum computing threatens:",
        options: ["No encryption", "Current encryption methods", "Firewalls", "Passwords"],
        correct: 1,
        topic: "Emerging Threats"
    },
    {
        question: "Post-quantum cryptography aims to:",
        options: ["Remove encryption", "Resist quantum computer attacks", "Slow down systems", "Disable security"],
        correct: 1,
        topic: "Emerging Threats"
    },
    {
        question: "AI in cybersecurity can:",
        options: ["Only cause problems", "Detect threats and automate responses", "Replace all humans", "Disable systems"],
        correct: 1,
        topic: "Emerging Technologies"
    },
    {
        question: "Machine learning helps with:",
        options: ["Nothing", "Identifying patterns and anomalies", "Slowing systems", "Removing security"],
        correct: 1,
        topic: "Emerging Technologies"
    },
    {
        question: "IoT devices often have:",
        options: ["Perfect security", "Security vulnerabilities", "No connectivity", "Unlimited power"],
        correct: 1,
        topic: "IoT Security"
    },
    {
        question: "Edge computing processes data:",
        options: ["Only in cloud", "Closer to data source", "Never", "Only centrally"],
        correct: 1,
        topic: "Emerging Technologies"
    },
    {
        question: "5G networks introduce:",
        options: ["No changes", "New security challenges", "Perfect security", "No connectivity"],
        correct: 1,
        topic: "Network Security"
    },
    {
        question: "Cloud security is a:",
        options: ["Single responsibility", "Shared responsibility", "Provider-only responsibility", "User-only responsibility"],
        correct: 1,
        topic: "Cloud Security"
    },
    {
        question: "Container security focuses on:",
        options: ["Physical containers", "Securing containerized applications", "Shipping", "Storage"],
        correct: 1,
        topic: "Cloud Security"
    },
    {
        question: "DevSecOps integrates:",
        options: ["Nothing", "Security into development and operations", "Only development", "Only operations"],
        correct: 1,
        topic: "Secure Development"
    },
    {
        question: "Secure coding practices help:",
        options: ["Write faster code", "Prevent vulnerabilities", "Slow development", "Remove features"],
        correct: 1,
        topic: "Secure Development"
    },
    {
        question: "Code review identifies:",
        options: ["Only syntax errors", "Security flaws and bugs", "Only performance issues", "Nothing"],
        correct: 1,
        topic: "Secure Development"
    },
    {
        question: "Static analysis examines:",
        options: ["Running code", "Code without executing it", "Only networks", "Only hardware"],
        correct: 1,
        topic: "Secure Development"
    },
    {
        question: "Dynamic analysis tests:",
        options: ["Code without running", "Running applications", "Only documentation", "Only designs"],
        correct: 1,
        topic: "Secure Development"
    },
    {
        question: "Fuzzing involves:",
        options: ["Normal testing", "Providing invalid or random inputs", "Deleting code", "Copying files"],
        correct: 1,
        topic: "Security Testing"
    },
    {
        question: "Bug bounty programs:",
        options: ["Punish researchers", "Reward vulnerability discoveries", "Hide bugs", "Ignore security"],
        correct: 1,
        topic: "Security Testing"
    },
    {
        question: "Responsible disclosure means:",
        options: ["Immediate public disclosure", "Reporting to vendor before public disclosure", "Never disclosing", "Selling vulnerabilities"],
        correct: 1,
        topic: "Ethics"
    },
    {
        question: "Ethical hackers:",
        options: ["Break laws", "Test security with authorization", "Steal data", "Harm systems"],
        correct: 1,
        topic: "Ethics"
    },
    {
        question: "Black hat hackers:",
        options: ["Follow laws", "Engage in illegal activities", "Help organizations", "Report vulnerabilities"],
        correct: 1,
        topic: "Threat Actors"
    },
    {
        question: "White hat hackers:",
        options: ["Break laws", "Work ethically to improve security", "Steal data", "Harm systems"],
        correct: 1,
        topic: "Threat Actors"
    },
    {
        question: "Gray hat hackers:",
        options: ["Always legal", "Operate in ethical gray areas", "Always illegal", "Don't exist"],
        correct: 1,
        topic: "Threat Actors"
    },
    {
        question: "Script kiddies are:",
        options: ["Expert hackers", "Inexperienced attackers using existing tools", "Security professionals", "Government agents"],
        correct: 1,
        topic: "Threat Actors"
    },
    {
        question: "Insider threats come from:",
        options: ["External attackers only", "Within the organization", "Only competitors", "Only governments"],
        correct: 1,
        topic: "Threat Actors"
    },
    {
        question: "Supply chain attacks target:",
        options: ["Only end users", "Vendors and suppliers", "Only networks", "Only hardware"],
        correct: 1,
        topic: "Cyber Attacks"
    },
    {
        question: "Zero-day vulnerabilities are:",
        options: ["Old and patched", "Unknown to vendors", "Harmless", "Easy to fix"],
        correct: 1,
        topic: "Vulnerabilities"
    },
    {
        question: "CVE stands for:",
        options: ["Computer Virus Encyclopedia", "Common Vulnerabilities and Exposures", "Cyber Vulnerability Evaluation", "Critical Virus Entry"],
        correct: 1,
        topic: "Vulnerabilities"
    },
    {
        question: "CVSS scores rate:",
        options: ["Network speed", "Vulnerability severity", "System performance", "User satisfaction"],
        correct: 1,
        topic: "Vulnerabilities"
    },
    {
        question: "The principle of least privilege means:",
        options: ["Give maximum access", "Give minimum necessary access", "Give no access", "Give random access"],
        correct: 1,
        topic: "Access Control"
    },
    {
        question: "Defense in depth uses:",
        options: ["Single security layer", "Multiple security layers", "No security", "Only firewalls"],
        correct: 1,
        topic: "Security Architecture"
    },
    {
        question: "Security by obscurity relies on:",
        options: ["Strong encryption", "Keeping methods secret", "Public standards", "Multiple layers"],
        correct: 1,
        topic: "Security Principles"
    },
    {
        question: "Separation of duties prevents:",
        options: ["Efficiency", "Fraud and errors", "Collaboration", "Communication"],
        correct: 1,
        topic: "Security Principles"
    }
];
