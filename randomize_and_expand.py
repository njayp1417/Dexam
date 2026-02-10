import random
import re

# Read the current database
with open('DTS201_QUESTIONS_DATABASE.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Extract questions using regex
pattern = r'\{[^}]*question:[^}]*options:[^}]*correct:[^}]*topic:[^}]*\}'
questions = re.findall(pattern, content, re.DOTALL)

print(f"Found {len(questions)} questions")

# Parse and randomize each question
randomized_questions = []
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
            # Get correct answer
            correct_answer = options[correct_idx]
            
            # Shuffle options
            random.shuffle(options)
            
            # Find new index of correct answer
            new_correct_idx = options.index(correct_answer)
            
            randomized_questions.append({
                'question': question_text,
                'options': options,
                'correct': new_correct_idx,
                'topic': topic
            })

print(f"Randomized {len(randomized_questions)} questions")

# Add 100 new questions (variations and new topics)
additional_questions = [
    # Python Libraries - 10 more
    {"question": "Which library is used for creating interactive visualizations?", "options": ["NumPy", "Plotly", "Pandas", "SciPy"], "correct": 1, "topic": "Python Libraries"},
    {"question": "Statsmodels library is used for:", "options": ["Image processing", "Statistical modeling", "Web scraping", "Game development"], "correct": 1, "topic": "Python Libraries"},
    {"question": "OpenCV is primarily used for:", "options": ["Database management", "Computer vision", "Web development", "Audio processing"], "correct": 1, "topic": "Python Libraries"},
    {"question": "Which library provides GPU acceleration for deep learning?", "options": ["Pandas", "CuPy", "Matplotlib", "BeautifulSoup"], "correct": 1, "topic": "Python Libraries"},
    {"question": "Gensim is used for:", "options": ["Image processing", "Topic modeling and NLP", "Database queries", "Web scraping"], "correct": 1, "topic": "Python Libraries"},
    {"question": "XGBoost is a library for:", "options": ["Data visualization", "Gradient boosting", "Web development", "File handling"], "correct": 1, "topic": "Python Libraries"},
    {"question": "Dask is used for:", "options": ["Small datasets", "Parallel computing on large datasets", "Web scraping", "Image editing"], "correct": 1, "topic": "Python Libraries"},
    {"question": "Pillow (PIL) is used for:", "options": ["Machine learning", "Image processing", "Text analysis", "Database management"], "correct": 1, "topic": "Python Libraries"},
    {"question": "NetworkX is used for:", "options": ["Web development", "Graph and network analysis", "Image processing", "Audio analysis"], "correct": 1, "topic": "Python Libraries"},
    {"question": "Scrapy is a framework for:", "options": ["Machine learning", "Web scraping", "Data visualization", "Database management"], "correct": 1, "topic": "Python Libraries"},
    
    # Data Science Types - 10 more
    {"question": "Real-time fraud detection is an example of:", "options": ["Descriptive", "Predictive", "Diagnostic", "Prescriptive"], "correct": 1, "topic": "Data Science Types"},
    {"question": "Customer segmentation uses:", "options": ["Predictive analysis", "Descriptive analysis", "Prescriptive analysis", "None"], "correct": 1, "topic": "Data Science Types"},
    {"question": "Recommendation systems are examples of:", "options": ["Descriptive", "Predictive", "Diagnostic", "Prescriptive"], "correct": 3, "topic": "Data Science Types"},
    {"question": "Churn prediction is:", "options": ["Descriptive", "Predictive", "Diagnostic", "Prescriptive"], "correct": 1, "topic": "Data Science Types"},
    {"question": "Root cause analysis is:", "options": ["Predictive", "Diagnostic", "Descriptive", "Prescriptive"], "correct": 1, "topic": "Data Science Types"},
    {"question": "Sales forecasting uses:", "options": ["Descriptive analysis", "Predictive analysis", "Diagnostic analysis", "None"], "correct": 1, "topic": "Data Science Types"},
    {"question": "A/B testing results analysis is:", "options": ["Predictive", "Descriptive", "Prescriptive", "Diagnostic"], "correct": 3, "topic": "Data Science Types"},
    {"question": "Sentiment analysis is primarily:", "options": ["Prescriptive", "Descriptive", "Predictive", "Diagnostic"], "correct": 1, "topic": "Data Science Types"},
    {"question": "Anomaly detection is used in:", "options": ["Descriptive analysis", "Predictive analysis", "Diagnostic analysis", "All of the above"], "correct": 1, "topic": "Data Science Types"},
    {"question": "Optimization problems are solved using:", "options": ["Descriptive", "Predictive", "Diagnostic", "Prescriptive"], "correct": 3, "topic": "Data Science Types"},
    
    # Machine Learning - 15 more
    {"question": "Transfer learning is most useful when:", "options": ["You have lots of data", "You have limited data", "You have no data", "Data quality is poor"], "correct": 1, "topic": "Machine Learning"},
    {"question": "The curse of dimensionality affects:", "options": ["Small datasets", "High-dimensional data", "Binary data", "Text data"], "correct": 1, "topic": "Machine Learning"},
    {"question": "Online learning updates the model:", "options": ["Never", "Continuously with new data", "Only once", "Randomly"], "correct": 1, "topic": "Machine Learning"},
    {"question": "Batch learning trains on:", "options": ["One sample at a time", "Entire dataset at once", "Random samples", "No data"], "correct": 1, "topic": "Machine Learning"},
    {"question": "Active learning selects:", "options": ["Random samples", "Most informative samples", "All samples", "No samples"], "correct": 1, "topic": "Machine Learning"},
    {"question": "Multi-task learning trains:", "options": ["One task", "Multiple related tasks simultaneously", "No tasks", "Random tasks"], "correct": 1, "topic": "Machine Learning"},
    {"question": "Zero-shot learning can classify:", "options": ["Only trained classes", "Unseen classes", "No classes", "Random classes"], "correct": 1, "topic": "Machine Learning"},
    {"question": "Few-shot learning requires:", "options": ["Millions of examples", "Very few examples per class", "No examples", "Infinite examples"], "correct": 1, "topic": "Machine Learning"},
    {"question": "Meta-learning is also called:", "options": ["Slow learning", "Learning to learn", "No learning", "Random learning"], "correct": 1, "topic": "Machine Learning"},
    {"question": "Imbalanced datasets have:", "options": ["Equal class distribution", "Unequal class distribution", "No classes", "Perfect distribution"], "correct": 1, "topic": "Machine Learning"},
    {"question": "SMOTE is used for:", "options": ["Feature selection", "Handling imbalanced data", "Data visualization", "Data encryption"], "correct": 1, "topic": "Machine Learning"},
    {"question": "ROC curve plots:", "options": ["Accuracy vs Error", "True Positive Rate vs False Positive Rate", "Precision vs Accuracy", "None"], "correct": 1, "topic": "Machine Learning"},
    {"question": "AUC-ROC value of 0.5 indicates:", "options": ["Perfect model", "Random classifier", "Worst model", "Good model"], "correct": 1, "topic": "Machine Learning"},
    {"question": "Stratified sampling ensures:", "options": ["Random distribution", "Proportional class representation", "No distribution", "Equal samples"], "correct": 1, "topic": "Machine Learning"},
    {"question": "Leave-one-out cross-validation uses:", "options": ["All data for training", "N-1 samples for training", "No data", "Random samples"], "correct": 1, "topic": "Machine Learning"},
    
    # Regression - 10 more
    {"question": "Multicollinearity occurs when:", "options": ["Variables are independent", "Independent variables are highly correlated", "No correlation", "Perfect independence"], "correct": 1, "topic": "Regression"},
    {"question": "VIF (Variance Inflation Factor) detects:", "options": ["Outliers", "Multicollinearity", "Missing values", "Duplicates"], "correct": 1, "topic": "Regression"},
    {"question": "Heteroscedasticity means:", "options": ["Constant variance", "Non-constant variance", "No variance", "Perfect variance"], "correct": 1, "topic": "Regression"},
    {"question": "Elastic Net combines:", "options": ["Ridge and Lasso", "Linear and Polynomial", "Simple and Multiple", "None"], "correct": 0, "topic": "Regression"},
    {"question": "Quantile regression predicts:", "options": ["Mean", "Specific quantiles", "Mode", "Range"], "correct": 1, "topic": "Regression"},
    {"question": "Robust regression is resistant to:", "options": ["Normal data", "Outliers", "Missing values", "Duplicates"], "correct": 1, "topic": "Regression"},
    {"question": "Stepwise regression performs:", "options": ["No selection", "Automatic feature selection", "Manual selection", "Random selection"], "correct": 1, "topic": "Regression"},
    {"question": "Cook's distance measures:", "options": ["Correlation", "Influence of data points", "Distance", "Variance"], "correct": 1, "topic": "Regression"},
    {"question": "Adjusted R² accounts for:", "options": ["Sample size", "Number of predictors", "Outliers", "Missing values"], "correct": 1, "topic": "Regression"},
    {"question": "Polynomial regression degree should be:", "options": ["Always high", "Chosen carefully to avoid overfitting", "Always 1", "Random"], "correct": 1, "topic": "Regression"},
    
    # Classification - 10 more
    {"question": "One-vs-Rest strategy is used for:", "options": ["Binary classification", "Multi-class classification", "Regression", "Clustering"], "correct": 1, "topic": "Classification"},
    {"question": "One-vs-One strategy creates:", "options": ["One classifier", "N*(N-1)/2 classifiers", "N classifiers", "No classifiers"], "correct": 1, "topic": "Classification"},
    {"question": "Softmax function is used in:", "options": ["Binary classification", "Multi-class classification", "Regression", "Clustering"], "correct": 1, "topic": "Classification"},
    {"question": "Decision boundary separates:", "options": ["Features", "Classes", "Samples", "Nothing"], "correct": 1, "topic": "Classification"},
    {"question": "Kernel trick is used in:", "options": ["Decision Trees", "SVM", "K-NN", "Naive Bayes"], "correct": 1, "topic": "Classification"},
    {"question": "RBF kernel stands for:", "options": ["Random Basis Function", "Radial Basis Function", "Rapid Basis Function", "None"], "correct": 1, "topic": "Classification"},
    {"question": "Bayes theorem is the foundation of:", "options": ["Decision Trees", "Naive Bayes", "K-NN", "SVM"], "correct": 1, "topic": "Classification"},
    {"question": "Laplace smoothing is used in:", "options": ["Decision Trees", "Naive Bayes", "K-NN", "SVM"], "correct": 1, "topic": "Classification"},
    {"question": "Maximum depth in decision trees controls:", "options": ["Width", "Complexity", "Speed", "Accuracy"], "correct": 1, "topic": "Classification"},
    {"question": "Min samples split parameter controls:", "options": ["Leaf size", "When to split nodes", "Tree depth", "Nothing"], "correct": 1, "topic": "Classification"},
    
    # Neural Networks - 10 more
    {"question": "Vanishing gradient problem occurs in:", "options": ["Shallow networks", "Deep networks", "No networks", "All networks equally"], "correct": 1, "topic": "Artificial Neural Networks"},
    {"question": "ReLU activation function outputs:", "options": ["Negative values", "Max(0, x)", "Always 1", "Always 0"], "correct": 1, "topic": "Artificial Neural Networks"},
    {"question": "Sigmoid function outputs values between:", "options": ["0 and 1", "-1 and 1", "0 and infinity", "Any range"], "correct": 0, "topic": "Artificial Neural Networks"},
    {"question": "Tanh function outputs values between:", "options": ["0 and 1", "-1 and 1", "0 and infinity", "Any range"], "correct": 1, "topic": "Artificial Neural Networks"},
    {"question": "Adam optimizer combines:", "options": ["SGD and Momentum", "Momentum and RMSprop", "Nothing", "All optimizers"], "correct": 1, "topic": "Artificial Neural Networks"},
    {"question": "Batch size affects:", "options": ["Nothing", "Training speed and convergence", "Only speed", "Only accuracy"], "correct": 1, "topic": "Artificial Neural Networks"},
    {"question": "Epoch means:", "options": ["One sample", "One complete pass through dataset", "One batch", "One layer"], "correct": 1, "topic": "Artificial Neural Networks"},
    {"question": "LSTM networks solve:", "options": ["Image problems", "Long-term dependency problems", "No problems", "All problems"], "correct": 1, "topic": "Artificial Neural Networks"},
    {"question": "GRU is similar to:", "options": ["CNN", "LSTM", "Perceptron", "None"], "correct": 1, "topic": "Artificial Neural Networks"},
    {"question": "Attention mechanism helps with:", "options": ["Speed", "Focusing on relevant parts", "Nothing", "Encryption"], "correct": 1, "topic": "Artificial Neural Networks"},
    
    # Feature Selection - 5 more
    {"question": "Variance threshold removes:", "options": ["High variance features", "Low variance features", "All features", "No features"], "correct": 1, "topic": "Feature Selection"},
    {"question": "Mutual information measures:", "options": ["Distance", "Dependency between variables", "Variance", "Mean"], "correct": 1, "topic": "Feature Selection"},
    {"question": "Forward selection starts with:", "options": ["All features", "No features", "Random features", "Half features"], "correct": 1, "topic": "Feature Selection"},
    {"question": "Backward elimination starts with:", "options": ["No features", "All features", "Random features", "One feature"], "correct": 1, "topic": "Feature Selection"},
    {"question": "Feature extraction creates:", "options": ["Same features", "New features from existing", "No features", "Random features"], "correct": 1, "topic": "Feature Selection"},
    
    # Cluster Analysis - 5 more
    {"question": "Agglomerative clustering is:", "options": ["Divisive", "Bottom-up", "Top-down", "Random"], "correct": 1, "topic": "Cluster Analysis"},
    {"question": "Divisive clustering is:", "options": ["Bottom-up", "Top-down", "Random", "None"], "correct": 1, "topic": "Cluster Analysis"},
    {"question": "DBSCAN requires:", "options": ["Number of clusters", "Epsilon and min points", "Nothing", "All parameters"], "correct": 1, "topic": "Cluster Analysis"},
    {"question": "Linkage criteria in hierarchical clustering includes:", "options": ["Single, Complete, Average", "Only Single", "Only Complete", "None"], "correct": 0, "topic": "Cluster Analysis"},
    {"question": "Gaussian Mixture Models assume:", "options": ["Uniform distribution", "Gaussian distribution", "No distribution", "Random distribution"], "correct": 1, "topic": "Cluster Analysis"},
    
    # Ensemble Learning - 5 more
    {"question": "Stacking uses predictions as:", "options": ["Final output", "Features for meta-model", "Nothing", "Random values"], "correct": 1, "topic": "Ensemble Learning"},
    {"question": "Blending is similar to:", "options": ["Bagging", "Stacking", "Boosting", "None"], "correct": 1, "topic": "Ensemble Learning"},
    {"question": "Gradient Boosting minimizes:", "options": ["Accuracy", "Loss function", "Speed", "Memory"], "correct": 1, "topic": "Ensemble Learning"},
    {"question": "LightGBM is known for:", "options": ["Slow speed", "Fast training speed", "Poor accuracy", "High memory usage"], "correct": 1, "topic": "Ensemble Learning"},
    {"question": "CatBoost handles:", "options": ["Only numerical data", "Categorical features well", "No data", "Only text"], "correct": 1, "topic": "Ensemble Learning"},
    
    # Big Data - 5 more
    {"question": "Apache Kafka is used for:", "options": ["Batch processing", "Stream processing", "Storage only", "Nothing"], "correct": 1, "topic": "Big Data Analysis"},
    {"question": "Apache Hive provides:", "options": ["Real-time processing", "SQL-like interface for Hadoop", "Visualization", "Encryption"], "correct": 1, "topic": "Big Data Analysis"},
    {"question": "Apache Pig uses:", "options": ["SQL", "Pig Latin language", "Python", "Java only"], "correct": 1, "topic": "Big Data Analysis"},
    {"question": "Data warehouse is optimized for:", "options": ["OLTP", "OLAP", "Real-time", "Nothing"], "correct": 1, "topic": "Big Data Analysis"},
    {"question": "Lambda architecture combines:", "options": ["Batch and stream processing", "Only batch", "Only stream", "Nothing"], "correct": 0, "topic": "Big Data Analysis"},
    
    # Data Preparation - 5 more
    {"question": "Outlier detection methods include:", "options": ["IQR, Z-score, Isolation Forest", "Only mean", "Only median", "None"], "correct": 0, "topic": "Data Preparation"},
    {"question": "Data binning is a form of:", "options": ["Normalization", "Discretization", "Imputation", "Sampling"], "correct": 1, "topic": "Data Preparation"},
    {"question": "One-hot encoding is used for:", "options": ["Numerical data", "Categorical data", "Text data", "Image data"], "correct": 1, "topic": "Data Preparation"},
    {"question": "Label encoding assigns:", "options": ["Random values", "Integer values to categories", "Float values", "No values"], "correct": 1, "topic": "Data Preparation"},
    {"question": "Target encoding uses:", "options": ["Random values", "Target variable statistics", "Mean only", "Mode only"], "correct": 1, "topic": "Data Preparation"},
    
    # Data Science Process - 5 more
    {"question": "EDA stands for:", "options": ["Exploratory Data Analysis", "Experimental Data Analysis", "External Data Analysis", "None"], "correct": 0, "topic": "Data Science Process"},
    {"question": "Data profiling involves:", "options": ["Deleting data", "Understanding data characteristics", "Encrypting data", "Nothing"], "correct": 1, "topic": "Data Science Process"},
    {"question": "Model monitoring in production tracks:", "options": ["Nothing", "Performance degradation", "Only accuracy", "Only speed"], "correct": 1, "topic": "Data Science Process"},
    {"question": "A/B testing is used for:", "options": ["Training models", "Comparing model versions", "Data cleaning", "Feature selection"], "correct": 1, "topic": "Data Science Process"},
    {"question": "Model versioning helps with:", "options": ["Speed", "Reproducibility and tracking", "Accuracy", "Nothing"], "correct": 1, "topic": "Data Science Process"}
]

# Randomize the additional questions
for q in additional_questions:
    correct_answer = q['options'][q['correct']]
    random.shuffle(q['options'])
    q['correct'] = q['options'].index(correct_answer)

# Combine all questions
all_questions = randomized_questions + additional_questions

print(f"Total questions: {len(all_questions)}")

# Generate JavaScript file
output = "const DTS201_QUESTIONS = [\n"

for i, q in enumerate(all_questions):
    output += "    {\n"
    output += f'        question: "{q["question"]}",\n'
    opts_list = [f'"{opt}"' for opt in q['options']]
    opts_str = ', '.join(opts_list)
    output += f'        options: [{opts_str}],\n'
    output += f'        correct: {q["correct"]},\n'
    output += f'        topic: "{q["topic"]}"\n'
    output += "    }"
    if i < len(all_questions) - 1:
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

print("Database updated successfully!")
print(f"Total questions in database: {len(all_questions)}")
