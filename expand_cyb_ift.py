# Script to expand CYB201 and IFT211 question databases
# Note: This is a template - you'll need to manually extract questions from the PDFs/DOCX files

# CYB201 - Add more questions based on past questions
cyb_additional = """
// Add these to CYB201_QUESTIONS_DATABASE.js after the existing 50 questions

    // Additional Cybersecurity questions from past exams
    {
        question: "What is the primary purpose of a firewall?",
        options: ["To encrypt data", "To filter network traffic based on rules", "To detect viruses", "To backup data"],
        correct: 1,
        topic: "Network Security"
    },
    {
        question: "Which protocol is used for secure web browsing?",
        options: ["HTTP", "FTP", "HTTPS", "SMTP"],
        correct: 2,
        topic: "Network Security"
    },
    {
        question: "What does SSL stand for?",
        options: ["Secure Socket Layer", "System Security Layer", "Secure System Link", "Socket Security Link"],
        correct: 0,
        topic: "Cryptography"
    }
"""

# IFT211 - Add more questions based on past questions  
ift_additional = """
// Add these to IFT211_QUESTIONS_DATABASE.js after the existing 20 questions

    // Additional Digital Logic questions from past exams
    {
        question: "What is a multiplexer?",
        options: ["A device that selects one input from many", "A device that splits one input to many", "A storage device", "A logic gate"],
        correct: 0,
        topic: "Combinational Circuits"
    },
    {
        question: "How many select lines are needed for an 8:1 multiplexer?",
        options: ["2", "3", "4", "8"],
        correct: 1,
        topic: "Combinational Circuits"
    },
    {
        question: "What is a decoder?",
        options: ["Converts binary to decimal", "Converts coded input to multiple outputs", "Stores data", "Performs arithmetic"],
        correct: 1,
        topic: "Combinational Circuits"
    }
"""

print("CYB201 Additional Questions Template:")
print(cyb_additional)
print("\n" + "="*50 + "\n")
print("IFT211 Additional Questions Template:")
print(ift_additional)
print("\nManually review the PDF/DOCX files and add more questions following this format.")
