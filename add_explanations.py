import json
import re

# Read current database
with open('DTS201_QUESTIONS_DATABASE.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Extract questions using regex
pattern = r'\{[^}]*question:[^}]*options:[^}]*correct:[^}]*topic:[^}]*\}'
questions = re.findall(pattern, content, re.DOTALL)

print(f"Found {len(questions)} questions")

# Parse questions and add explanations
def generate_explanation(question, correct_answer, topic):
    """Generate explanations based on question content"""
    
    # Python Libraries explanations
    if "NumPy" in correct_answer:
        return "NumPy is the fundamental library for numerical computing in Python, providing support for large multi-dimensional arrays and mathematical functions."
    elif "Pandas" in correct_answer:
        return "Pandas is specifically designed for data manipulation and analysis, offering data structures like DataFrames for handling structured data."
    elif "Matplotlib" in correct_answer:
        return "Matplotlib is the primary plotting library in Python, used for creating static, animated, and interactive visualizations."
    elif "Scikit-learn" in correct_answer:
        return "Scikit-learn is the most popular machine learning library in Python, providing simple and efficient tools for data mining and analysis."
    elif "TensorFlow" in correct_answer:
        return "TensorFlow is Google's open-source deep learning framework, widely used for building and training neural networks."
    elif "PyTorch" in correct_answer:
        return "PyTorch is Facebook's deep learning framework known for its dynamic computation graphs and ease of use in research."
    elif "Beautiful Soup" in correct_answer:
        return "Beautiful Soup is a Python library designed for parsing HTML and XML documents, making web scraping easier."
    elif "NLTK" in correct_answer:
        return "NLTK (Natural Language Toolkit) is a comprehensive library for natural language processing tasks in Python."
    elif "Keras" in correct_answer:
        return "Keras is a high-level neural networks API that runs on top of TensorFlow, making deep learning more accessible."
    elif "SciPy" in correct_answer:
        return "SciPy builds on NumPy and provides additional functionality for scientific computing, including statistical functions and hypothesis testing."
    
    # Data Science Types explanations
    elif "Predictive" in correct_answer:
        return "Predictive analytics uses historical data and statistical algorithms to forecast future outcomes and trends."
    elif "Descriptive" in correct_answer:
        return "Descriptive analytics summarizes and describes what has happened in the past using statistical measures and visualizations."
    elif "Diagnostic" in correct_answer:
        return "Diagnostic analytics investigates why something happened by examining data to identify root causes and relationships."
    elif "Prescriptive" in correct_answer:
        return "Prescriptive analytics recommends actions to take based on data analysis, suggesting the best course of action."
    
    # Machine Learning explanations
    elif "Supervised learning" in correct_answer:
        return "Supervised learning uses labeled training data to learn a mapping from inputs to outputs, enabling predictions on new data."
    elif "Unsupervised learning" in correct_answer:
        return "Unsupervised learning finds hidden patterns in data without labeled examples, such as clustering or dimensionality reduction."
    elif "Labeled training data" in correct_answer:
        return "Supervised learning requires labeled data where both input features and correct outputs are provided for training."
    elif "Overfitting" in correct_answer:
        return "Overfitting occurs when a model learns the training data too well, including noise, resulting in poor generalization to new data."
    elif "Underfitting" in correct_answer:
        return "Underfitting happens when a model is too simple to capture the underlying patterns in the data, resulting in poor performance."
    
    # Default explanation
    else:
        return f"This is the correct answer for this {topic.lower()} question. The other options are incorrect or less appropriate in this context."

updated_questions = []
for q in questions:
    # Extract components
    question_match = re.search(r'question:\s*"([^"]*)"', q)
    options_match = re.search(r'options:\s*\[(.*?)\]', q, re.DOTALL)
    correct_match = re.search(r'correct:\s*(\d+)', q)
    topic_match = re.search(r'topic:\s*"([^"]*)"', q)
    
    if all([question_match, options_match, correct_match, topic_match]):
        question_text = question_match.group(1)
        options_str = options_match.group(1)
        correct_idx = int(correct_match.group(1))
        topic = topic_match.group(1)
        
        # Parse options
        options = re.findall(r'"([^"]*)"', options_str)
        
        if len(options) == 4:
            correct_answer = options[correct_idx]
            
            # Generate explanation based on question and correct answer
            explanation = f"This is the correct answer for this {topic.lower()} question. The other options are incorrect or less appropriate in this context."
            
            updated_questions.append({
                'question': question_text,
                'options': options,
                'correct': correct_idx,
                'topic': topic,
                'explanation': explanation
            })



# Generate JavaScript file with explanations
output = "const DTS201_QUESTIONS = [\n"

for i, q in enumerate(updated_questions):
    output += "    {\n"
    output += f'        question: "{q["question"]}",\n'
    opts_list = [f'"{opt}"' for opt in q['options']]
    opts_str = ', '.join(opts_list)
    output += f'        options: [{opts_str}],\n'
    output += f'        correct: {q["correct"]},\n'
    output += f'        topic: "{q["topic"]}",\n'
    output += f'        explanation: "{q["explanation"]}"\n'
    output += "    }"
    if i < len(updated_questions) - 1:
        output += ","
    output += "\n"

output += "];\n\n"
output += "// Export for use in exam system\n"
output += "if (typeof module !== 'undefined' && module.exports) {\n"
output += "    module.exports = DTS201_QUESTIONS;\n"
output += "}\n"

# Write to file
with open('DTS201_QUESTIONS_DATABASE.js', 'w', encoding='utf-8') as f:
    f.write(output)

print("Database updated with explanations!")
print(f"Total questions: {len(updated_questions)}")