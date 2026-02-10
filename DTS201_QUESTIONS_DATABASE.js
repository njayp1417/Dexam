const DTS201_QUESTIONS = [
    {
        question: "Which Python library is primarily used for numerical computing and array operations?",
        options: ["Scikit-learn", "Pandas", "Matplotlib", "NumPy"],
        correct: 3,
        topic: "Python Libraries"
    },
    {
        question: "What is the main purpose of the Pandas library in Python?",
        options: ["Web scraping", "Machine learning", "Data manipulation and analysis", "Image processing"],
        correct: 2,
        topic: "Python Libraries"
    },
    {
        question: "Which library is used for creating data visualizations in Python?",
        options: ["NumPy", "Pandas", "SciPy", "Matplotlib"],
        correct: 3,
        topic: "Python Libraries"
    },
    {
        question: "Scikit-learn is primarily used for:",
        options: ["Network programming", "Database management", "Web development", "Machine learning algorithms"],
        correct: 3,
        topic: "Python Libraries"
    },
    {
        question: "Which Python library is used for deep learning and neural networks?",
        options: ["NumPy", "TensorFlow", "Pandas", "Matplotlib"],
        correct: 1,
        topic: "Python Libraries"
    },
    {
        question: "The Synthetic Data Vault (SDV) library is used for:",
        options: ["Generating synthetic datasets", "Data compression", "Data backup", "Data encryption"],
        correct: 0,
        topic: "Python Libraries"
    },
    {
        question: "Which library can generate random data with various probabilistic distributions?",
        options: ["Matplotlib", "Pandas", "Seaborn", "NumPy"],
        correct: 3,
        topic: "Python Libraries"
    },
    {
        question: "Pydbgen is a Python library used for:",
        options: ["Database querying", "Machine learning", "Generating random data and exporting", "Data visualization"],
        correct: 2,
        topic: "Python Libraries"
    },
    {
        question: "Which library is used to create datasets with complex symbolic expressions?",
        options: ["NumPy", "Pandas", "Sympy", "SciPy"],
        correct: 2,
        topic: "Python Libraries"
    },
    {
        question: "The Mesa library in Python is used for:",
        options: ["Building agent-based models", "Image processing", "Text mining", "Data cleaning"],
        correct: 0,
        topic: "Python Libraries"
    },
    {
        question: "Which library is specifically designed for computer vision and 3D creation?",
        options: ["Pandas", "NumPy", "Zpy and Blender", "Scikit-learn"],
        correct: 2,
        topic: "Python Libraries"
    },
    {
        question: "Faker and Mimesis libraries are used for:",
        options: ["Statistical analysis", "Data visualization", "Machine learning", "Generating fake database data"],
        correct: 3,
        topic: "Python Libraries"
    },
    {
        question: "DataSynthesizer is used to:",
        options: ["Simulate a given dataset", "Clean data", "Store data", "Visualize data"],
        correct: 0,
        topic: "Python Libraries"
    },
    {
        question: "TimeseriesGenerator library is used for:",
        options: ["Analyzing images", "Generating time-series data", "Database management", "Web scraping"],
        correct: 1,
        topic: "Python Libraries"
    },
    {
        question: "Which library provides tools for statistical modeling and hypothesis testing?",
        options: ["Plotly", "SciPy", "Seaborn", "Matplotlib"],
        correct: 1,
        topic: "Python Libraries"
    },
    {
        question: "Seaborn is built on top of which library?",
        options: ["Matplotlib", "NumPy", "Pandas", "Scikit-learn"],
        correct: 0,
        topic: "Python Libraries"
    },
    {
        question: "Which library is used for natural language processing in Python?",
        options: ["Pandas", "NLTK", "Matplotlib", "NumPy"],
        correct: 1,
        topic: "Python Libraries"
    },
    {
        question: "PyTorch is primarily used for:",
        options: ["Database management", "Data visualization", "Data cleaning", "Deep learning and neural networks"],
        correct: 3,
        topic: "Python Libraries"
    },
    {
        question: "Which library is used for web scraping in Python?",
        options: ["NumPy", "Beautiful Soup", "Matplotlib", "Pandas"],
        correct: 1,
        topic: "Python Libraries"
    },
    {
        question: "Keras is a high-level API for:",
        options: ["Neural networks", "Data visualization", "Database operations", "File handling"],
        correct: 0,
        topic: "Python Libraries"
    },
    {
        question: "Predictive data science is used to:",
        options: ["Predict what will happen", "Describe what happened", "Suggest what to do", "Explain why it happened"],
        correct: 0,
        topic: "Data Science Types"
    },
    {
        question: "Descriptive data science answers the question:",
        options: ["Why is it happening?", "What will happen?", "What should I do?", "What is happening?"],
        correct: 3,
        topic: "Data Science Types"
    },
    {
        question: "Diagnostic data science is used to:",
        options: ["Predict future outcomes", "Investigate root causes", "Describe current state", "Recommend actions"],
        correct: 1,
        topic: "Data Science Types"
    },
    {
        question: "Prescriptive data science answers which question?",
        options: ["Why did it happen?", "What will happen?", "What happened?", "What do I need to do?"],
        correct: 3,
        topic: "Data Science Types"
    },
    {
        question: "Which type of data science uses supervised machine learning?",
        options: ["Diagnostic", "Descriptive", "Predictive", "All of the above"],
        correct: 2,
        topic: "Data Science Types"
    },
    {
        question: "Google Maps is an example of which type of data science?",
        options: ["Descriptive", "Diagnostic", "Prescriptive", "Predictive"],
        correct: 2,
        topic: "Data Science Types"
    },
    {
        question: "Clustering is an example of:",
        options: ["Descriptive analysis", "Prescriptive analysis", "Diagnostic analysis", "Predictive analysis"],
        correct: 0,
        topic: "Data Science Types"
    },
    {
        question: "Classification and regression are examples of:",
        options: ["Predictive tasks", "Diagnostic tasks", "Prescriptive tasks", "Descriptive tasks"],
        correct: 0,
        topic: "Data Science Types"
    },
    {
        question: "Association rule mining is used in:",
        options: ["Prescriptive analysis", "Predictive analysis", "None of the above", "Descriptive analysis"],
        correct: 3,
        topic: "Data Science Types"
    },
    {
        question: "Time-series data analysis is primarily used for:",
        options: ["Describing past data", "Grouping data", "Cleaning data", "Predicting future trends"],
        correct: 3,
        topic: "Data Science Types"
    },
    {
        question: "Which data science type focuses on 'what happened in the past'?",
        options: ["Diagnostic", "Prescriptive", "Descriptive", "Predictive"],
        correct: 2,
        topic: "Data Science Types"
    },
    {
        question: "Spam filtering is an example of:",
        options: ["Diagnostic analysis", "Prescriptive analysis", "Descriptive analysis", "Predictive analysis"],
        correct: 3,
        topic: "Data Science Types"
    },
    {
        question: "Market basket analysis is an example of:",
        options: ["Descriptive analysis", "Predictive analysis", "Prescriptive analysis", "Diagnostic analysis"],
        correct: 0,
        topic: "Data Science Types"
    },
    {
        question: "Probability theory and regression analysis are key tools for:",
        options: ["Descriptive analysis", "Predictive analysis", "Diagnostic analysis", "Prescriptive analysis"],
        correct: 2,
        topic: "Data Science Types"
    },
    {
        question: "Which type suggests the best possible way toward the future?",
        options: ["Predictive", "Diagnostic", "Descriptive", "Prescriptive"],
        correct: 3,
        topic: "Data Science Types"
    },
    {
        question: "Structured data is typically stored in:",
        options: ["Images", "Audio files", "Videos", "Tables or spreadsheets"],
        correct: 3,
        topic: "Data Types"
    },
    {
        question: "Which of the following is an example of unstructured data?",
        options: ["Social media posts", "Relational database", "CSV file", "Excel spreadsheet"],
        correct: 0,
        topic: "Data Types"
    },
    {
        question: "Semi-structured data is characterized by:",
        options: ["Complete randomness", "Rigid schema", "No organization", "Partial structure with tags"],
        correct: 3,
        topic: "Data Types"
    },
    {
        question: "JSON and XML are examples of:",
        options: ["Semi-structured data", "Unstructured data", "Structured data", "Binary data"],
        correct: 0,
        topic: "Data Types"
    },
    {
        question: "Which data format is easiest to analyze?",
        options: ["All are equal", "Unstructured", "Semi-structured", "Structured"],
        correct: 3,
        topic: "Data Types"
    },
    {
        question: "NoSQL databases are commonly used for:",
        options: ["None of the above", "Relational data only", "Unstructured data", "Structured data only"],
        correct: 2,
        topic: "Data Types"
    },
    {
        question: "Email is an example of:",
        options: ["Semi-structured data", "Structured data", "Unstructured data", "Binary data"],
        correct: 0,
        topic: "Data Types"
    },
    {
        question: "Relational databases store:",
        options: ["All types of data", "Structured data", "Unstructured data", "Semi-structured data"],
        correct: 1,
        topic: "Data Types"
    },
    {
        question: "Which data type has the highest scalability?",
        options: ["All are equal", "Unstructured", "Structured", "Semi-structured"],
        correct: 1,
        topic: "Data Types"
    },
    {
        question: "Images, videos, and audio files are examples of:",
        options: ["Semi-structured data", "Unstructured data", "Relational data", "Structured data"],
        correct: 1,
        topic: "Data Types"
    },
    {
        question: "Which data format uses tags or markers for categorization?",
        options: ["Unstructured", "Structured", "None", "Semi-structured"],
        correct: 3,
        topic: "Data Types"
    },
    {
        question: "A CSV file is an example of:",
        options: ["Unstructured data", "Binary data", "Semi-structured data", "Structured data"],
        correct: 3,
        topic: "Data Types"
    },
    {
        question: "Graph data is typically considered:",
        options: ["Semi-structured", "Structured", "None of the above", "Unstructured"],
        correct: 3,
        topic: "Data Types"
    },
    {
        question: "Which data type requires the most preprocessing?",
        options: ["Semi-structured", "Unstructured", "Structured", "All require equal preprocessing"],
        correct: 1,
        topic: "Data Types"
    },
    {
        question: "Social media data is primarily:",
        options: ["Structured", "Unstructured", "Binary", "Semi-structured"],
        correct: 1,
        topic: "Data Types"
    },
    {
        question: "Primary data sources are:",
        options: ["Derived from other sources", "First-hand original data", "Preprocessed data", "Secondary analysis"],
        correct: 1,
        topic: "Data Sources"
    },
    {
        question: "Secondary data sources are:",
        options: ["Original raw data", "Real-time data", "Synthetic data", "Derived from primary sources"],
        correct: 3,
        topic: "Data Sources"
    },
    {
        question: "UCI ML Repository contains datasets primarily for:",
        options: ["Machine learning research", "Web development", "Database design", "Network security"],
        correct: 0,
        topic: "Data Sources"
    },
    {
        question: "Kaggle is known for:",
        options: ["E-commerce", "Social networking", "Video streaming", "Machine learning competitions and datasets"],
        correct: 3,
        topic: "Data Sources"
    },
    {
        question: "MNIST dataset contains:",
        options: ["Text documents", "Hand-written digits", "Video clips", "Audio files"],
        correct: 1,
        topic: "Data Sources"
    },
    {
        question: "Synthetic data generation is used when:",
        options: ["Data is perfect", "No analysis is needed", "Real data is abundant", "Real data is unavailable or restricted"],
        correct: 3,
        topic: "Data Generation"
    },
    {
        question: "Fully synthetic data means:",
        options: ["Exact copy of real data", "No relationship to actual data", "Partially real data", "Encrypted data"],
        correct: 1,
        topic: "Data Generation"
    },
    {
        question: "Partially synthetic data retains:",
        options: ["Only synthetic values", "Encrypted values", "All real information except sensitive data", "No real information"],
        correct: 2,
        topic: "Data Generation"
    },
    {
        question: "VAE stands for:",
        options: ["Variational Autoencoder", "Validated Auto Encoder", "Virtual Auto Engine", "Variable Auto Encoder"],
        correct: 0,
        topic: "Data Generation"
    },
    {
        question: "GAN stands for:",
        options: ["Global Analysis Network", "Generative Adversarial Network", "Grouped Artificial Network", "General Adversarial Network"],
        correct: 1,
        topic: "Data Generation"
    },
    {
        question: "In GAN, the generator's job is to:",
        options: ["Store data", "Detect fake data", "Create synthetic data", "Clean data"],
        correct: 2,
        topic: "Data Generation"
    },
    {
        question: "In GAN, the discriminator's job is to:",
        options: ["Generate data", "Transform data", "Detect fake data", "Clean data"],
        correct: 2,
        topic: "Data Generation"
    },
    {
        question: "Data augmentation involves:",
        options: ["Deleting data", "Compressing data", "Encrypting data", "Adding slightly altered copies of existing data"],
        correct: 3,
        topic: "Data Generation"
    },
    {
        question: "Monte Carlo simulation is used for:",
        options: ["Synthetic data generation", "Data visualization", "Data storage", "Data cleaning"],
        correct: 0,
        topic: "Data Generation"
    },
    {
        question: "Homogeneous data sources have:",
        options: ["Uniform and similar characteristics", "Random structure", "No common features", "High variability"],
        correct: 0,
        topic: "Data Sources"
    },
    {
        question: "Data cleaning primarily addresses:",
        options: ["Missing values and duplicates", "Data visualization", "Data encryption", "Data storage"],
        correct: 0,
        topic: "Data Preparation"
    },
    {
        question: "MCAR stands for:",
        options: ["Multiple Classification at Random", "Mean Calculation at Random", "Missing Completely at Random", "Missing Cases at Random"],
        correct: 2,
        topic: "Data Preparation"
    },
    {
        question: "MAR stands for:",
        options: ["Median at Random", "Missing at Random", "Multiple at Random", "Mean at Random"],
        correct: 1,
        topic: "Data Preparation"
    },
    {
        question: "MNAR stands for:",
        options: ["Multiple Not at Random", "Missing Not at Random", "Median Not at Random", "Mean Not at Random"],
        correct: 1,
        topic: "Data Preparation"
    },
    {
        question: "Mean imputation replaces missing values with:",
        options: ["Zero", "Random values", "The mean of existing values", "The maximum value"],
        correct: 2,
        topic: "Data Preparation"
    },
    {
        question: "KNN imputation uses:",
        options: ["Mean values", "Random values", "Maximum values", "K-nearest neighbors"],
        correct: 3,
        topic: "Data Preparation"
    },
    {
        question: "Hot-deck imputation uses:",
        options: ["Synthetic data", "No data", "Same survey dataset", "External dataset"],
        correct: 2,
        topic: "Data Preparation"
    },
    {
        question: "Cold-deck imputation uses:",
        options: ["Encrypted data", "No data", "External dataset", "Same dataset"],
        correct: 2,
        topic: "Data Preparation"
    },
    {
        question: "Data reduction aims to:",
        options: ["Reduce data volume without losing integrity", "Increase data size", "Delete all data", "Encrypt data"],
        correct: 0,
        topic: "Data Preparation"
    },
    {
        question: "Sampling is used to:",
        options: ["Increase dataset size", "Select a representative subset", "Delete data", "Encrypt data"],
        correct: 1,
        topic: "Data Preparation"
    },
    {
        question: "Simple random sampling without replacement means:",
        options: ["No samples are selected", "Selected samples are not returned", "All samples are selected", "Selected samples are returned"],
        correct: 1,
        topic: "Data Preparation"
    },
    {
        question: "Stratified sampling divides data into:",
        options: ["No groups", "Strata or subgroups", "Random groups", "Single group"],
        correct: 1,
        topic: "Data Preparation"
    },
    {
        question: "Dimensionality reduction eliminates:",
        options: ["All features", "Important features", "No features", "Unnecessary or insignificant attributes"],
        correct: 3,
        topic: "Data Preparation"
    },
    {
        question: "PCA stands for:",
        options: ["Primary Component Analysis", "Perfect Component Analysis", "Principal Component Analysis", "Partial Component Analysis"],
        correct: 2,
        topic: "Data Preparation"
    },
    {
        question: "The curse of dimensionality refers to:",
        options: ["Too many dimensions causing issues", "Perfect data", "Too few features", "No data"],
        correct: 0,
        topic: "Data Preparation"
    },
    {
        question: "Data transformation changes:",
        options: ["Data ownership", "Data format or structure", "Nothing", "Data location only"],
        correct: 1,
        topic: "Data Preparation"
    },
    {
        question: "Discretization transforms:",
        options: ["Text to numbers", "Numbers to text", "Discrete to continuous", "Continuous to discrete"],
        correct: 3,
        topic: "Data Preparation"
    },
    {
        question: "Equal-width discretization divides range into:",
        options: ["Equal-sized intervals", "No intervals", "Random intervals", "Unequal intervals"],
        correct: 0,
        topic: "Data Preparation"
    },
    {
        question: "Equal-frequency discretization ensures:",
        options: ["Random distribution", "Equal number of observations per interval", "Equal interval width", "No distribution"],
        correct: 1,
        topic: "Data Preparation"
    },
    {
        question: "Entropy-based discretization uses:",
        options: ["Random selection", "Mean values", "Maximum values", "Information theory"],
        correct: 3,
        topic: "Data Preparation"
    },
    {
        question: "Min-max normalization scales data to:",
        options: ["0 to 100", "-1 to 1", "Any range", "0 to 1"],
        correct: 3,
        topic: "Data Normalization"
    },
    {
        question: "Z-score normalization uses:",
        options: ["Mean and standard deviation", "Median and mode", "Min and max", "Range only"],
        correct: 0,
        topic: "Data Normalization"
    },
    {
        question: "Decimal scaling normalization involves:",
        options: ["Removing decimals", "No change", "Shifting decimal point", "Adding decimals"],
        correct: 2,
        topic: "Data Normalization"
    },
    {
        question: "Quantile normalization makes distributions:",
        options: ["Different", "Unequal", "Statistically identical", "Random"],
        correct: 2,
        topic: "Data Normalization"
    },
    {
        question: "Log normalization is used to:",
        options: ["Remove data", "Encrypt data", "Reduce skewness", "Increase skewness"],
        correct: 2,
        topic: "Data Normalization"
    },
    {
        question: "Data normalization is important for:",
        options: ["Data deletion", "Data storage", "Consistent scale across features", "Data encryption"],
        correct: 2,
        topic: "Data Normalization"
    },
    {
        question: "Z-score normalization results in:",
        options: ["Mean=1, SD=0", "Mean=0, SD=0", "Mean=0, SD=1", "Mean=1, SD=1"],
        correct: 2,
        topic: "Data Normalization"
    },
    {
        question: "Min-max normalization formula uses:",
        options: ["log(x)", "x/10^j", "(x-mean)/std", "(x-min)/(max-min)"],
        correct: 3,
        topic: "Data Normalization"
    },
    {
        question: "Normalization helps in:",
        options: ["Encrypting data", "Improving algorithm performance", "Deleting data", "Slowing algorithms"],
        correct: 1,
        topic: "Data Normalization"
    },
    {
        question: "Which normalization is best for normally distributed data?",
        options: ["Log", "Min-max", "Z-score", "Decimal scaling"],
        correct: 2,
        topic: "Data Normalization"
    },
    {
        question: "Data integration combines data from:",
        options: ["Multiple sources", "Encrypted sources", "Single source", "No sources"],
        correct: 0,
        topic: "Data Integration"
    },
    {
        question: "ETL stands for:",
        options: ["Extract, Transform, Load", "Encrypt, Transfer, Load", "Encode, Transform, Link", "Extract, Transfer, Link"],
        correct: 0,
        topic: "Data Integration"
    },
    {
        question: "ELT stands for:",
        options: ["Encode, Load, Transfer", "Extract, Load, Transform", "Extract, Link, Transform", "Encrypt, Load, Transfer"],
        correct: 1,
        topic: "Data Integration"
    },
    {
        question: "Tight coupling in data integration means:",
        options: ["Complete data porting to destination", "No data movement", "No integration", "Partial integration"],
        correct: 0,
        topic: "Data Integration"
    },
    {
        question: "Loose coupling in data integration means:",
        options: ["Complete data porting", "On-the-fly query-based integration", "Encrypted integration", "No integration"],
        correct: 1,
        topic: "Data Integration"
    },
    {
        question: "Data consolidation is an example of:",
        options: ["Tight coupling", "No coupling", "Loose coupling", "Weak coupling"],
        correct: 0,
        topic: "Data Integration"
    },
    {
        question: "Data federation is an example of:",
        options: ["Strong coupling", "No coupling", "Loose coupling", "Tight coupling"],
        correct: 2,
        topic: "Data Integration"
    },
    {
        question: "Federation creates:",
        options: ["Encrypted storage", "Physical storage", "No storage", "Virtual unified storage"],
        correct: 3,
        topic: "Data Integration"
    },
    {
        question: "Consolidation involves:",
        options: ["Physical data movement to central location", "No data movement", "No integration", "Virtual integration"],
        correct: 0,
        topic: "Data Integration"
    },
    {
        question: "Data integration improves:",
        options: ["Decision making accuracy", "Data isolation", "Data encryption", "Data deletion"],
        correct: 0,
        topic: "Data Integration"
    },
    {
        question: "Supervised learning requires:",
        options: ["Encrypted data", "Unlabeled data", "Labeled training data", "No data"],
        correct: 2,
        topic: "Machine Learning"
    },
    {
        question: "Unsupervised learning works with:",
        options: ["No data", "Encrypted data", "Labeled data", "Unlabeled data"],
        correct: 3,
        topic: "Machine Learning"
    },
    {
        question: "Semi-supervised learning uses:",
        options: ["Only unlabeled data", "Only labeled data", "No data", "Both labeled and unlabeled data"],
        correct: 3,
        topic: "Machine Learning"
    },
    {
        question: "Classification is an example of:",
        options: ["Supervised learning", "Unsupervised learning", "Reinforcement learning", "None"],
        correct: 0,
        topic: "Machine Learning"
    },
    {
        question: "Clustering is an example of:",
        options: ["Unsupervised learning", "Supervised learning", "Semi-supervised learning", "None"],
        correct: 0,
        topic: "Machine Learning"
    },
    {
        question: "In supervised learning, the training set is used to:",
        options: ["Delete data", "Encrypt data", "Test the model", "Build the model"],
        correct: 3,
        topic: "Machine Learning"
    },
    {
        question: "The testing set is used to:",
        options: ["Generate data", "Evaluate model performance", "Clean data", "Train the model"],
        correct: 1,
        topic: "Machine Learning"
    },
    {
        question: "The validation set is used for:",
        options: ["Data cleaning", "Data storage", "Final testing", "Hyperparameter tuning"],
        correct: 3,
        topic: "Machine Learning"
    },
    {
        question: "Overfitting occurs when:",
        options: ["Model has no parameters", "Model is too simple", "Model memorizes training data", "Model generalizes well"],
        correct: 2,
        topic: "Machine Learning"
    },
    {
        question: "Underfitting occurs when:",
        options: ["Model has no data", "Model is too complex", "Model is too simple", "Model is perfect"],
        correct: 2,
        topic: "Machine Learning"
    },
    {
        question: "Generalization refers to:",
        options: ["Encrypting data", "Deleting data", "Memorizing training data", "Performing well on unseen data"],
        correct: 3,
        topic: "Machine Learning"
    },
    {
        question: "K-fold cross-validation divides data into:",
        options: ["2 parts", "No parts", "Random parts", "K equal parts"],
        correct: 3,
        topic: "Machine Learning"
    },
    {
        question: "Regularization is used to:",
        options: ["Reduce overfitting", "Delete data", "Increase overfitting", "Encrypt data"],
        correct: 0,
        topic: "Machine Learning"
    },
    {
        question: "Early stopping prevents:",
        options: ["Data loss", "Overfitting", "Data encryption", "Underfitting"],
        correct: 1,
        topic: "Machine Learning"
    },
    {
        question: "Feature selection helps in:",
        options: ["Increasing dimensions", "Adding noise", "Encrypting data", "Reducing irrelevant features"],
        correct: 3,
        topic: "Machine Learning"
    },
    {
        question: "A confusion matrix is used for:",
        options: ["Data cleaning", "Evaluating classification performance", "Data generation", "Data storage"],
        correct: 1,
        topic: "Machine Learning"
    },
    {
        question: "True Positives (TP) are:",
        options: ["Positive examples classified as positive", "Negative examples classified as positive", "Positive examples classified as negative", "Negative examples classified as negative"],
        correct: 0,
        topic: "Machine Learning"
    },
    {
        question: "False Positives (FP) are:",
        options: ["Negative classified as negative", "Positive classified as positive", "Positive classified as negative", "Negative classified as positive"],
        correct: 3,
        topic: "Machine Learning"
    },
    {
        question: "Accuracy is calculated as:",
        options: ["(TP+TN)/(TP+TN+FP+FN)", "TP/(TP+FP)", "TN/(TN+FP)", "TP/(TP+FN)"],
        correct: 0,
        topic: "Machine Learning"
    },
    {
        question: "Precision measures:",
        options: ["Total error", "Total accuracy", "Proportion of actual positives found", "Proportion of predicted positives that are correct"],
        correct: 3,
        topic: "Machine Learning"
    },
    {
        question: "Recall measures:",
        options: ["Proportion of actual positives found", "Total error", "Total accuracy", "Proportion of predicted positives that are correct"],
        correct: 0,
        topic: "Machine Learning"
    },
    {
        question: "F1-score is the:",
        options: ["Sum of precision and recall", "Difference of precision and recall", "Harmonic mean of precision and recall", "Product of precision and recall"],
        correct: 2,
        topic: "Machine Learning"
    },
    {
        question: "Hyperparameters are:",
        options: ["Learned from data", "Set before training", "Not important", "Always zero"],
        correct: 1,
        topic: "Machine Learning"
    },
    {
        question: "Ensemble learning combines:",
        options: ["No models", "Single model", "Encrypted models", "Multiple models"],
        correct: 3,
        topic: "Machine Learning"
    },
    {
        question: "Bias-variance tradeoff relates to:",
        options: ["Data encryption", "Data deletion", "Model complexity and generalization", "Data storage"],
        correct: 2,
        topic: "Machine Learning"
    },
    {
        question: "Regression is used to predict:",
        options: ["Categories", "Nothing", "Clusters", "Continuous values"],
        correct: 3,
        topic: "Regression"
    },
    {
        question: "Linear regression fits a:",
        options: ["Random shape", "Circle", "Curve", "Straight line"],
        correct: 3,
        topic: "Regression"
    },
    {
        question: "In linear regression y = mx + c, m represents:",
        options: ["Y-intercept", "Slope", "Constant", "Error"],
        correct: 1,
        topic: "Regression"
    },
    {
        question: "In linear regression y = mx + c, c represents:",
        options: ["Variable", "Y-intercept", "Slope", "Error"],
        correct: 1,
        topic: "Regression"
    },
    {
        question: "Least squares regression minimizes:",
        options: ["Maximum error", "Sum of squared errors", "No error", "Sum of errors"],
        correct: 1,
        topic: "Regression"
    },
    {
        question: "R-squared (R²) measures:",
        options: ["Error rate", "Data size", "Data type", "Goodness of fit"],
        correct: 3,
        topic: "Regression"
    },
    {
        question: "R² value close to 1 indicates:",
        options: ["Poor fit", "Random fit", "Good fit", "No fit"],
        correct: 2,
        topic: "Regression"
    },
    {
        question: "R² value close to 0 indicates:",
        options: ["No data", "Poor fit", "Good fit", "Perfect fit"],
        correct: 1,
        topic: "Regression"
    },
    {
        question: "Multiple regression uses:",
        options: ["Only dependent variable", "One independent variable", "No variables", "Multiple independent variables"],
        correct: 3,
        topic: "Regression"
    },
    {
        question: "Polynomial regression fits:",
        options: ["Circle", "Straight line", "Polynomial curve", "No shape"],
        correct: 2,
        topic: "Regression"
    },
    {
        question: "Residuals in regression are:",
        options: ["Independent variables", "Constants", "Differences between actual and predicted", "Predicted values"],
        correct: 2,
        topic: "Regression"
    },
    {
        question: "Mean Squared Error (MSE) is:",
        options: ["Average of squared errors", "Sum of errors", "Maximum error", "Minimum error"],
        correct: 0,
        topic: "Regression"
    },
    {
        question: "Ridge regression is used for:",
        options: ["Data generation", "Data cleaning", "Regularization", "Feature selection"],
        correct: 2,
        topic: "Regression"
    },
    {
        question: "Lasso regression can:",
        options: ["Only regularize", "Do nothing", "Regularize and select features", "Only select features"],
        correct: 2,
        topic: "Regression"
    },
    {
        question: "Logistic regression is used for:",
        options: ["Continuous prediction", "Clustering", "Data cleaning", "Binary classification"],
        correct: 3,
        topic: "Regression"
    },
    {
        question: "Classification assigns data to:",
        options: ["Random groups", "Predefined classes", "Continuous values", "No groups"],
        correct: 1,
        topic: "Classification"
    },
    {
        question: "K-NN classifier uses:",
        options: ["Neural networks", "Random selection", "Decision trees", "Nearest neighbors"],
        correct: 3,
        topic: "Classification"
    },
    {
        question: "In K-NN, K represents:",
        options: ["Number of datasets", "Number of classes", "Number of neighbors", "Number of features"],
        correct: 2,
        topic: "Classification"
    },
    {
        question: "Euclidean distance is used to measure:",
        options: ["Spatial distance between points", "Data size", "Time", "Data type"],
        correct: 0,
        topic: "Classification"
    },
    {
        question: "Cosine similarity measures:",
        options: ["Angular similarity", "Time", "Distance", "Size"],
        correct: 0,
        topic: "Classification"
    },
    {
        question: "Decision trees split data based on:",
        options: ["Feature values", "Random selection", "Data size", "Data type"],
        correct: 0,
        topic: "Classification"
    },
    {
        question: "Entropy measures:",
        options: ["Data homogeneity/chaos", "Data type", "Data location", "Data size"],
        correct: 0,
        topic: "Classification"
    },
    {
        question: "Information gain is used to:",
        options: ["Store data", "Delete data", "Select best feature for splitting", "Encrypt data"],
        correct: 2,
        topic: "Classification"
    },
    {
        question: "Gini index is used in:",
        options: ["Regression", "Decision tree splitting", "Clustering", "Data cleaning"],
        correct: 1,
        topic: "Classification"
    },
    {
        question: "Random Forest is an ensemble of:",
        options: ["Regression models", "K-NN classifiers", "Neural networks", "Decision trees"],
        correct: 3,
        topic: "Classification"
    },
    {
        question: "Support Vector Machine (SVM) finds:",
        options: ["Clusters", "Decision tree", "Optimal hyperplane", "Nearest neighbors"],
        correct: 2,
        topic: "Classification"
    },
    {
        question: "Naive Bayes classifier is based on:",
        options: ["Probability theory", "Graphs", "Distance", "Trees"],
        correct: 0,
        topic: "Classification"
    },
    {
        question: "Binary classification has:",
        options: ["Three classes", "Two classes", "Infinite classes", "One class"],
        correct: 1,
        topic: "Classification"
    },
    {
        question: "Multi-class classification has:",
        options: ["Two classes", "One class", "More than two classes", "No classes"],
        correct: 2,
        topic: "Classification"
    },
    {
        question: "Pruning in decision trees helps:",
        options: ["Delete data", "Increase overfitting", "Encrypt data", "Reduce overfitting"],
        correct: 3,
        topic: "Classification"
    },
    {
        question: "Artificial Neural Networks are inspired by:",
        options: ["Human brain", "Graphs", "Computers", "Trees"],
        correct: 0,
        topic: "Artificial Neural Networks"
    },
    {
        question: "A neuron in ANN receives:",
        options: ["Single input", "No inputs", "Output only", "Multiple inputs"],
        correct: 3,
        topic: "Artificial Neural Networks"
    },
    {
        question: "Activation function introduces:",
        options: ["Non-linearity", "Nothing", "Linearity", "Errors"],
        correct: 0,
        topic: "Artificial Neural Networks"
    },
    {
        question: "Common activation functions include:",
        options: ["None", "Sigmoid, ReLU, Tanh", "Linear only", "Random"],
        correct: 1,
        topic: "Artificial Neural Networks"
    },
    {
        question: "Backpropagation is used for:",
        options: ["Data storage", "Training neural networks", "Data cleaning", "Forward pass"],
        correct: 1,
        topic: "Artificial Neural Networks"
    },
    {
        question: "Deep learning uses:",
        options: ["Single layer", "Multiple hidden layers", "Output layer only", "No layers"],
        correct: 1,
        topic: "Artificial Neural Networks"
    },
    {
        question: "Convolutional Neural Networks (CNN) are used for:",
        options: ["Audio only", "Text processing", "Image processing", "Nothing"],
        correct: 2,
        topic: "Artificial Neural Networks"
    },
    {
        question: "Recurrent Neural Networks (RNN) are used for:",
        options: ["Sequential data", "No data", "Static data", "Images"],
        correct: 0,
        topic: "Artificial Neural Networks"
    },
    {
        question: "Weights in neural networks are:",
        options: ["Fixed", "Learned during training", "Zero always", "Random always"],
        correct: 1,
        topic: "Artificial Neural Networks"
    },
    {
        question: "Bias in neural networks:",
        options: ["Is not needed", "Encrypts data", "Deletes data", "Shifts activation function"],
        correct: 3,
        topic: "Artificial Neural Networks"
    },
    {
        question: "Gradient descent is used for:",
        options: ["Data cleaning", "Optimizing weights", "Data storage", "Data generation"],
        correct: 1,
        topic: "Artificial Neural Networks"
    },
    {
        question: "Learning rate controls:",
        options: ["Step size in optimization", "Data size", "Number of neurons", "Number of layers"],
        correct: 0,
        topic: "Artificial Neural Networks"
    },
    {
        question: "Dropout is a technique for:",
        options: ["Data encryption", "Data deletion", "Reducing overfitting", "Increasing overfitting"],
        correct: 2,
        topic: "Artificial Neural Networks"
    },
    {
        question: "Batch normalization helps in:",
        options: ["Data encryption", "Slowing training", "Data deletion", "Faster and stable training"],
        correct: 3,
        topic: "Artificial Neural Networks"
    },
    {
        question: "Transfer learning involves:",
        options: ["Using pre-trained models", "Training from scratch", "Random training", "No training"],
        correct: 0,
        topic: "Artificial Neural Networks"
    },
    {
        question: "Feature selection aims to:",
        options: ["Delete all features", "Select relevant features", "Add more features", "Encrypt features"],
        correct: 1,
        topic: "Feature Selection"
    },
    {
        question: "Filter methods use:",
        options: ["No selection", "Random selection", "Model performance", "Statistical measures"],
        correct: 3,
        topic: "Feature Selection"
    },
    {
        question: "Wrapper methods use:",
        options: ["Random selection", "Statistical measures only", "Model performance", "No selection"],
        correct: 2,
        topic: "Feature Selection"
    },
    {
        question: "Embedded methods perform feature selection:",
        options: ["Never", "Before training", "During training", "After training"],
        correct: 2,
        topic: "Feature Selection"
    },
    {
        question: "Correlation-based feature selection removes:",
        options: ["No features", "All features", "Highly correlated features", "Uncorrelated features"],
        correct: 2,
        topic: "Feature Selection"
    },
    {
        question: "Chi-square test is used for:",
        options: ["Feature selection in classification", "Data cleaning", "Clustering", "Regression"],
        correct: 0,
        topic: "Feature Selection"
    },
    {
        question: "Recursive Feature Elimination (RFE):",
        options: ["Does nothing", "Recursively removes features", "Adds features", "Encrypts features"],
        correct: 1,
        topic: "Feature Selection"
    },
    {
        question: "Feature importance can be obtained from:",
        options: ["Tree-based models", "Encrypted models", "No models", "Random selection"],
        correct: 0,
        topic: "Feature Selection"
    },
    {
        question: "Lasso regression performs:",
        options: ["Nothing", "Feature selection and prediction", "Only feature selection", "Only prediction"],
        correct: 1,
        topic: "Feature Selection"
    },
    {
        question: "Feature selection helps in:",
        options: ["Encrypting data", "Adding noise", "Increasing complexity", "Reducing overfitting and improving performance"],
        correct: 3,
        topic: "Feature Selection"
    },
    {
        question: "Clustering is a type of:",
        options: ["Supervised learning", "Unsupervised learning", "Reinforcement learning", "Semi-supervised learning"],
        correct: 1,
        topic: "Cluster Analysis"
    },
    {
        question: "K-means clustering requires:",
        options: ["Number of clusters K", "No data", "No parameters", "Labeled data"],
        correct: 0,
        topic: "Cluster Analysis"
    },
    {
        question: "K-means aims to minimize:",
        options: ["Number of clusters", "Data size", "Within-cluster variance", "Inter-cluster distance"],
        correct: 2,
        topic: "Cluster Analysis"
    },
    {
        question: "Hierarchical clustering creates:",
        options: ["Tree-like structure (dendrogram)", "Flat clusters", "No structure", "Random structure"],
        correct: 0,
        topic: "Cluster Analysis"
    },
    {
        question: "DBSCAN is a:",
        options: ["Random method", "Density-based method", "Hierarchical method", "Centroid-based method"],
        correct: 1,
        topic: "Cluster Analysis"
    },
    {
        question: "Silhouette score measures:",
        options: ["Data size", "Data type", "Data location", "Cluster quality"],
        correct: 3,
        topic: "Cluster Analysis"
    },
    {
        question: "Elbow method helps determine:",
        options: ["Data size", "Data type", "Optimal number of clusters", "Data quality"],
        correct: 2,
        topic: "Cluster Analysis"
    },
    {
        question: "Intra-cluster similarity should be:",
        options: ["Low", "Negative", "High", "Zero"],
        correct: 2,
        topic: "Cluster Analysis"
    },
    {
        question: "Inter-cluster similarity should be:",
        options: ["Maximum", "High", "Equal", "Low"],
        correct: 3,
        topic: "Cluster Analysis"
    },
    {
        question: "Clustering is used for:",
        options: ["Pattern discovery and grouping", "Classification", "Regression", "Prediction"],
        correct: 0,
        topic: "Cluster Analysis"
    },
    {
        question: "Ensemble learning combines:",
        options: ["No models", "Random models", "Single model", "Multiple models"],
        correct: 3,
        topic: "Ensemble Learning"
    },
    {
        question: "Bagging stands for:",
        options: ["Binary Aggregating", "Bootstrap Aggregating", "Basic Aggregating", "Batch Aggregating"],
        correct: 1,
        topic: "Ensemble Learning"
    },
    {
        question: "Boosting focuses on:",
        options: ["No examples", "All examples equally", "Random samples", "Misclassified examples"],
        correct: 3,
        topic: "Ensemble Learning"
    },
    {
        question: "Random Forest uses:",
        options: ["Single tree", "Neural networks", "K-NN", "Multiple decision trees"],
        correct: 3,
        topic: "Ensemble Learning"
    },
    {
        question: "AdaBoost is an example of:",
        options: ["Stacking", "Boosting", "Bagging", "None"],
        correct: 1,
        topic: "Ensemble Learning"
    },
    {
        question: "Voting classifier uses:",
        options: ["Majority or consensus voting", "Random voting", "Single vote", "No voting"],
        correct: 0,
        topic: "Ensemble Learning"
    },
    {
        question: "Stacking combines models using:",
        options: ["Random selection", "No combination", "Meta-learner", "Simple average"],
        correct: 2,
        topic: "Ensemble Learning"
    },
    {
        question: "Ensemble methods generally:",
        options: ["Have no effect", "Decrease performance", "Delete data", "Improve performance"],
        correct: 3,
        topic: "Ensemble Learning"
    },
    {
        question: "Gradient Boosting builds trees:",
        options: ["Randomly", "Independently", "Never", "Sequentially"],
        correct: 3,
        topic: "Ensemble Learning"
    },
    {
        question: "XGBoost is known for:",
        options: ["Poor accuracy", "Slow performance", "No features", "High performance and speed"],
        correct: 3,
        topic: "Ensemble Learning"
    },
    {
        question: "Big Data is characterized by:",
        options: ["Volume, Velocity, Variety", "Small volume", "Single type", "No characteristics"],
        correct: 0,
        topic: "Big Data Analysis"
    },
    {
        question: "Hadoop is used for:",
        options: ["Distributed storage and processing", "Data deletion", "Data encryption", "Small data"],
        correct: 0,
        topic: "Big Data Analysis"
    },
    {
        question: "MapReduce is a:",
        options: ["Programming model", "Database", "Encryption method", "Storage system"],
        correct: 0,
        topic: "Big Data Analysis"
    },
    {
        question: "Spark is known for:",
        options: ["In-memory fast processing", "Data deletion", "Slow processing", "Data encryption"],
        correct: 0,
        topic: "Big Data Analysis"
    },
    {
        question: "HDFS stands for:",
        options: ["Hadoop Distributed File System", "None", "Hybrid Distributed File System", "High Data File System"],
        correct: 0,
        topic: "Big Data Analysis"
    },
    {
        question: "NoSQL databases are used for:",
        options: ["Unstructured and semi-structured data", "No data", "Encrypted data", "Structured data only"],
        correct: 0,
        topic: "Big Data Analysis"
    },
    {
        question: "Data lakes store:",
        options: ["Processed data only", "Encrypted data only", "Raw data in native format", "No data"],
        correct: 2,
        topic: "Big Data Analysis"
    },
    {
        question: "Stream processing handles:",
        options: ["No data", "Real-time data", "Static data", "Batch data"],
        correct: 1,
        topic: "Big Data Analysis"
    },
    {
        question: "The 3 Vs of Big Data are:",
        options: ["None", "Variety, Value, Veracity", "Volume, Velocity, Variety", "Value, Velocity, Volume"],
        correct: 2,
        topic: "Big Data Analysis"
    },
    {
        question: "Distributed computing is essential for:",
        options: ["Small data", "Big Data processing", "Data deletion", "Data encryption"],
        correct: 1,
        topic: "Big Data Analysis"
    },
    {
        question: "The first step in data science process is:",
        options: ["Modeling", "Data collection", "Deployment", "Testing"],
        correct: 1,
        topic: "Data Science Process"
    },
    {
        question: "Pre-processing comes:",
        options: ["Never", "Before collection", "After collection, before training", "After testing"],
        correct: 2,
        topic: "Data Science Process"
    },
    {
        question: "Training involves:",
        options: ["Collecting data", "Building model from training data", "Testing model", "Deploying model"],
        correct: 1,
        topic: "Data Science Process"
    },
    {
        question: "Testing evaluates:",
        options: ["Nothing", "Training data", "Model on unseen data", "Collection process"],
        correct: 2,
        topic: "Data Science Process"
    },
    {
        question: "Model deployment means:",
        options: ["Putting model into production", "Testing model", "Training model", "Collecting data"],
        correct: 0,
        topic: "Data Science Process"
    },
    {
        question: "Feature engineering is part of:",
        options: ["Collection", "Testing", "Deployment", "Pre-processing"],
        correct: 3,
        topic: "Data Science Process"
    },
    {
        question: "Model selection happens during:",
        options: ["Never", "Training phase", "Deployment", "Collection"],
        correct: 1,
        topic: "Data Science Process"
    },
    {
        question: "Hyperparameter tuning uses:",
        options: ["Test set", "Training set", "Validation set", "No set"],
        correct: 2,
        topic: "Data Science Process"
    },
    {
        question: "Final evaluation uses:",
        options: ["Test set", "Validation set", "Training set", "All sets"],
        correct: 0,
        topic: "Data Science Process"
    },
    {
        question: "The data science pipeline is:",
        options: ["Never used", "One-time only", "Systematic and iterative", "Random"],
        correct: 2,
        topic: "Data Science Process"
    },
    {
        question: "Which library is used for creating interactive visualizations?",
        options: ["Pandas", "NumPy", "SciPy", "Plotly"],
        correct: 3,
        topic: "Python Libraries"
    },
    {
        question: "Statsmodels library is used for:",
        options: ["Statistical modeling", "Image processing", "Web scraping", "Game development"],
        correct: 0,
        topic: "Python Libraries"
    },
    {
        question: "OpenCV is primarily used for:",
        options: ["Web development", "Audio processing", "Computer vision", "Database management"],
        correct: 2,
        topic: "Python Libraries"
    },
    {
        question: "Which library provides GPU acceleration for deep learning?",
        options: ["BeautifulSoup", "Matplotlib", "Pandas", "CuPy"],
        correct: 3,
        topic: "Python Libraries"
    },
    {
        question: "Gensim is used for:",
        options: ["Database queries", "Image processing", "Topic modeling and NLP", "Web scraping"],
        correct: 2,
        topic: "Python Libraries"
    },
    {
        question: "XGBoost is a library for:",
        options: ["File handling", "Gradient boosting", "Data visualization", "Web development"],
        correct: 1,
        topic: "Python Libraries"
    },
    {
        question: "Dask is used for:",
        options: ["Image editing", "Parallel computing on large datasets", "Small datasets", "Web scraping"],
        correct: 1,
        topic: "Python Libraries"
    },
    {
        question: "Pillow (PIL) is used for:",
        options: ["Machine learning", "Database management", "Text analysis", "Image processing"],
        correct: 3,
        topic: "Python Libraries"
    },
    {
        question: "NetworkX is used for:",
        options: ["Image processing", "Audio analysis", "Graph and network analysis", "Web development"],
        correct: 2,
        topic: "Python Libraries"
    },
    {
        question: "Scrapy is a framework for:",
        options: ["Machine learning", "Database management", "Data visualization", "Web scraping"],
        correct: 3,
        topic: "Python Libraries"
    },
    {
        question: "Real-time fraud detection is an example of:",
        options: ["Prescriptive", "Predictive", "Diagnostic", "Descriptive"],
        correct: 1,
        topic: "Data Science Types"
    },
    {
        question: "Customer segmentation uses:",
        options: ["Predictive analysis", "None", "Descriptive analysis", "Prescriptive analysis"],
        correct: 2,
        topic: "Data Science Types"
    },
    {
        question: "Recommendation systems are examples of:",
        options: ["Descriptive", "Prescriptive", "Diagnostic", "Predictive"],
        correct: 1,
        topic: "Data Science Types"
    },
    {
        question: "Churn prediction is:",
        options: ["Descriptive", "Diagnostic", "Prescriptive", "Predictive"],
        correct: 3,
        topic: "Data Science Types"
    },
    {
        question: "Root cause analysis is:",
        options: ["Predictive", "Diagnostic", "Prescriptive", "Descriptive"],
        correct: 1,
        topic: "Data Science Types"
    },
    {
        question: "Sales forecasting uses:",
        options: ["Diagnostic analysis", "Predictive analysis", "Descriptive analysis", "None"],
        correct: 1,
        topic: "Data Science Types"
    },
    {
        question: "A/B testing results analysis is:",
        options: ["Prescriptive", "Descriptive", "Predictive", "Diagnostic"],
        correct: 3,
        topic: "Data Science Types"
    },
    {
        question: "Sentiment analysis is primarily:",
        options: ["Predictive", "Descriptive", "Diagnostic", "Prescriptive"],
        correct: 1,
        topic: "Data Science Types"
    },
    {
        question: "Anomaly detection is used in:",
        options: ["Descriptive analysis", "All of the above", "Diagnostic analysis", "Predictive analysis"],
        correct: 3,
        topic: "Data Science Types"
    },
    {
        question: "Optimization problems are solved using:",
        options: ["Predictive", "Descriptive", "Prescriptive", "Diagnostic"],
        correct: 2,
        topic: "Data Science Types"
    },
    {
        question: "Transfer learning is most useful when:",
        options: ["You have no data", "Data quality is poor", "You have limited data", "You have lots of data"],
        correct: 2,
        topic: "Machine Learning"
    },
    {
        question: "The curse of dimensionality affects:",
        options: ["High-dimensional data", "Binary data", "Text data", "Small datasets"],
        correct: 0,
        topic: "Machine Learning"
    },
    {
        question: "Online learning updates the model:",
        options: ["Continuously with new data", "Only once", "Randomly", "Never"],
        correct: 0,
        topic: "Machine Learning"
    },
    {
        question: "Batch learning trains on:",
        options: ["Entire dataset at once", "No data", "One sample at a time", "Random samples"],
        correct: 0,
        topic: "Machine Learning"
    },
    {
        question: "Active learning selects:",
        options: ["All samples", "Random samples", "No samples", "Most informative samples"],
        correct: 3,
        topic: "Machine Learning"
    },
    {
        question: "Multi-task learning trains:",
        options: ["One task", "Multiple related tasks simultaneously", "Random tasks", "No tasks"],
        correct: 1,
        topic: "Machine Learning"
    },
    {
        question: "Zero-shot learning can classify:",
        options: ["Unseen classes", "Only trained classes", "Random classes", "No classes"],
        correct: 0,
        topic: "Machine Learning"
    },
    {
        question: "Few-shot learning requires:",
        options: ["Millions of examples", "No examples", "Infinite examples", "Very few examples per class"],
        correct: 3,
        topic: "Machine Learning"
    },
    {
        question: "Meta-learning is also called:",
        options: ["No learning", "Slow learning", "Learning to learn", "Random learning"],
        correct: 2,
        topic: "Machine Learning"
    },
    {
        question: "Imbalanced datasets have:",
        options: ["Unequal class distribution", "No classes", "Perfect distribution", "Equal class distribution"],
        correct: 0,
        topic: "Machine Learning"
    },
    {
        question: "SMOTE is used for:",
        options: ["Feature selection", "Data visualization", "Handling imbalanced data", "Data encryption"],
        correct: 2,
        topic: "Machine Learning"
    },
    {
        question: "ROC curve plots:",
        options: ["None", "Precision vs Accuracy", "True Positive Rate vs False Positive Rate", "Accuracy vs Error"],
        correct: 2,
        topic: "Machine Learning"
    },
    {
        question: "AUC-ROC value of 0.5 indicates:",
        options: ["Good model", "Perfect model", "Worst model", "Random classifier"],
        correct: 3,
        topic: "Machine Learning"
    },
    {
        question: "Stratified sampling ensures:",
        options: ["Equal samples", "Random distribution", "No distribution", "Proportional class representation"],
        correct: 3,
        topic: "Machine Learning"
    },
    {
        question: "Leave-one-out cross-validation uses:",
        options: ["No data", "Random samples", "All data for training", "N-1 samples for training"],
        correct: 3,
        topic: "Machine Learning"
    },
    {
        question: "Multicollinearity occurs when:",
        options: ["Variables are independent", "Perfect independence", "No correlation", "Independent variables are highly correlated"],
        correct: 3,
        topic: "Regression"
    },
    {
        question: "VIF (Variance Inflation Factor) detects:",
        options: ["Multicollinearity", "Missing values", "Outliers", "Duplicates"],
        correct: 0,
        topic: "Regression"
    },
    {
        question: "Heteroscedasticity means:",
        options: ["Non-constant variance", "Constant variance", "No variance", "Perfect variance"],
        correct: 0,
        topic: "Regression"
    },
    {
        question: "Elastic Net combines:",
        options: ["Simple and Multiple", "Ridge and Lasso", "Linear and Polynomial", "None"],
        correct: 1,
        topic: "Regression"
    },
    {
        question: "Quantile regression predicts:",
        options: ["Mean", "Specific quantiles", "Range", "Mode"],
        correct: 1,
        topic: "Regression"
    },
    {
        question: "Robust regression is resistant to:",
        options: ["Normal data", "Duplicates", "Missing values", "Outliers"],
        correct: 3,
        topic: "Regression"
    },
    {
        question: "Stepwise regression performs:",
        options: ["Automatic feature selection", "No selection", "Random selection", "Manual selection"],
        correct: 0,
        topic: "Regression"
    },
    {
        question: "Cook's distance measures:",
        options: ["Variance", "Distance", "Influence of data points", "Correlation"],
        correct: 2,
        topic: "Regression"
    },
    {
        question: "Adjusted R² accounts for:",
        options: ["Number of predictors", "Outliers", "Sample size", "Missing values"],
        correct: 0,
        topic: "Regression"
    },
    {
        question: "Polynomial regression degree should be:",
        options: ["Always 1", "Random", "Always high", "Chosen carefully to avoid overfitting"],
        correct: 3,
        topic: "Regression"
    },
    {
        question: "One-vs-Rest strategy is used for:",
        options: ["Multi-class classification", "Binary classification", "Clustering", "Regression"],
        correct: 0,
        topic: "Classification"
    },
    {
        question: "One-vs-One strategy creates:",
        options: ["N classifiers", "N*(N-1)/2 classifiers", "No classifiers", "One classifier"],
        correct: 1,
        topic: "Classification"
    },
    {
        question: "Softmax function is used in:",
        options: ["Clustering", "Regression", "Multi-class classification", "Binary classification"],
        correct: 2,
        topic: "Classification"
    },
    {
        question: "Decision boundary separates:",
        options: ["Classes", "Features", "Samples", "Nothing"],
        correct: 0,
        topic: "Classification"
    },
    {
        question: "Kernel trick is used in:",
        options: ["SVM", "Decision Trees", "K-NN", "Naive Bayes"],
        correct: 0,
        topic: "Classification"
    },
    {
        question: "RBF kernel stands for:",
        options: ["None", "Radial Basis Function", "Random Basis Function", "Rapid Basis Function"],
        correct: 1,
        topic: "Classification"
    },
    {
        question: "Bayes theorem is the foundation of:",
        options: ["K-NN", "Naive Bayes", "Decision Trees", "SVM"],
        correct: 1,
        topic: "Classification"
    },
    {
        question: "Laplace smoothing is used in:",
        options: ["Naive Bayes", "SVM", "K-NN", "Decision Trees"],
        correct: 0,
        topic: "Classification"
    },
    {
        question: "Maximum depth in decision trees controls:",
        options: ["Complexity", "Width", "Speed", "Accuracy"],
        correct: 0,
        topic: "Classification"
    },
    {
        question: "Min samples split parameter controls:",
        options: ["Tree depth", "Nothing", "When to split nodes", "Leaf size"],
        correct: 2,
        topic: "Classification"
    },
    {
        question: "Vanishing gradient problem occurs in:",
        options: ["All networks equally", "No networks", "Deep networks", "Shallow networks"],
        correct: 2,
        topic: "Artificial Neural Networks"
    },
    {
        question: "ReLU activation function outputs:",
        options: ["Max(0, x)", "Always 0", "Negative values", "Always 1"],
        correct: 0,
        topic: "Artificial Neural Networks"
    },
    {
        question: "Sigmoid function outputs values between:",
        options: ["-1 and 1", "Any range", "0 and infinity", "0 and 1"],
        correct: 3,
        topic: "Artificial Neural Networks"
    },
    {
        question: "Tanh function outputs values between:",
        options: ["0 and 1", "0 and infinity", "Any range", "-1 and 1"],
        correct: 3,
        topic: "Artificial Neural Networks"
    },
    {
        question: "Adam optimizer combines:",
        options: ["Momentum and RMSprop", "SGD and Momentum", "All optimizers", "Nothing"],
        correct: 0,
        topic: "Artificial Neural Networks"
    },
    {
        question: "Batch size affects:",
        options: ["Training speed and convergence", "Nothing", "Only accuracy", "Only speed"],
        correct: 0,
        topic: "Artificial Neural Networks"
    },
    {
        question: "Epoch means:",
        options: ["One layer", "One batch", "One complete pass through dataset", "One sample"],
        correct: 2,
        topic: "Artificial Neural Networks"
    },
    {
        question: "LSTM networks solve:",
        options: ["Image problems", "No problems", "All problems", "Long-term dependency problems"],
        correct: 3,
        topic: "Artificial Neural Networks"
    },
    {
        question: "GRU is similar to:",
        options: ["LSTM", "Perceptron", "None", "CNN"],
        correct: 0,
        topic: "Artificial Neural Networks"
    },
    {
        question: "Attention mechanism helps with:",
        options: ["Focusing on relevant parts", "Speed", "Encryption", "Nothing"],
        correct: 0,
        topic: "Artificial Neural Networks"
    },
    {
        question: "Variance threshold removes:",
        options: ["High variance features", "Low variance features", "All features", "No features"],
        correct: 1,
        topic: "Feature Selection"
    },
    {
        question: "Mutual information measures:",
        options: ["Variance", "Mean", "Dependency between variables", "Distance"],
        correct: 2,
        topic: "Feature Selection"
    },
    {
        question: "Forward selection starts with:",
        options: ["Half features", "All features", "No features", "Random features"],
        correct: 2,
        topic: "Feature Selection"
    },
    {
        question: "Backward elimination starts with:",
        options: ["No features", "Random features", "One feature", "All features"],
        correct: 3,
        topic: "Feature Selection"
    },
    {
        question: "Feature extraction creates:",
        options: ["New features from existing", "Random features", "No features", "Same features"],
        correct: 0,
        topic: "Feature Selection"
    },
    {
        question: "Agglomerative clustering is:",
        options: ["Top-down", "Random", "Bottom-up", "Divisive"],
        correct: 2,
        topic: "Cluster Analysis"
    },
    {
        question: "Divisive clustering is:",
        options: ["None", "Top-down", "Random", "Bottom-up"],
        correct: 1,
        topic: "Cluster Analysis"
    },
    {
        question: "DBSCAN requires:",
        options: ["Epsilon and min points", "All parameters", "Number of clusters", "Nothing"],
        correct: 0,
        topic: "Cluster Analysis"
    },
    {
        question: "Linkage criteria in hierarchical clustering includes:",
        options: ["None", "Only Complete", "Single, Complete, Average", "Only Single"],
        correct: 2,
        topic: "Cluster Analysis"
    },
    {
        question: "Gaussian Mixture Models assume:",
        options: ["Random distribution", "No distribution", "Uniform distribution", "Gaussian distribution"],
        correct: 3,
        topic: "Cluster Analysis"
    },
    {
        question: "Stacking uses predictions as:",
        options: ["Nothing", "Final output", "Features for meta-model", "Random values"],
        correct: 2,
        topic: "Ensemble Learning"
    },
    {
        question: "Blending is similar to:",
        options: ["Bagging", "Boosting", "None", "Stacking"],
        correct: 3,
        topic: "Ensemble Learning"
    },
    {
        question: "Gradient Boosting minimizes:",
        options: ["Speed", "Accuracy", "Loss function", "Memory"],
        correct: 2,
        topic: "Ensemble Learning"
    },
    {
        question: "LightGBM is known for:",
        options: ["High memory usage", "Poor accuracy", "Slow speed", "Fast training speed"],
        correct: 3,
        topic: "Ensemble Learning"
    },
    {
        question: "CatBoost handles:",
        options: ["Only numerical data", "Categorical features well", "Only text", "No data"],
        correct: 1,
        topic: "Ensemble Learning"
    },
    {
        question: "Apache Kafka is used for:",
        options: ["Batch processing", "Stream processing", "Nothing", "Storage only"],
        correct: 1,
        topic: "Big Data Analysis"
    },
    {
        question: "Apache Hive provides:",
        options: ["SQL-like interface for Hadoop", "Real-time processing", "Visualization", "Encryption"],
        correct: 0,
        topic: "Big Data Analysis"
    },
    {
        question: "Apache Pig uses:",
        options: ["Pig Latin language", "Java only", "Python", "SQL"],
        correct: 0,
        topic: "Big Data Analysis"
    },
    {
        question: "Data warehouse is optimized for:",
        options: ["Nothing", "Real-time", "OLAP", "OLTP"],
        correct: 2,
        topic: "Big Data Analysis"
    },
    {
        question: "Lambda architecture combines:",
        options: ["Only stream", "Batch and stream processing", "Nothing", "Only batch"],
        correct: 1,
        topic: "Big Data Analysis"
    },
    {
        question: "Outlier detection methods include:",
        options: ["None", "Only median", "Only mean", "IQR, Z-score, Isolation Forest"],
        correct: 3,
        topic: "Data Preparation"
    },
    {
        question: "Data binning is a form of:",
        options: ["Discretization", "Sampling", "Normalization", "Imputation"],
        correct: 0,
        topic: "Data Preparation"
    },
    {
        question: "One-hot encoding is used for:",
        options: ["Text data", "Numerical data", "Image data", "Categorical data"],
        correct: 3,
        topic: "Data Preparation"
    },
    {
        question: "Label encoding assigns:",
        options: ["Float values", "Random values", "No values", "Integer values to categories"],
        correct: 3,
        topic: "Data Preparation"
    },
    {
        question: "Target encoding uses:",
        options: ["Mean only", "Random values", "Mode only", "Target variable statistics"],
        correct: 3,
        topic: "Data Preparation"
    },
    {
        question: "EDA stands for:",
        options: ["Experimental Data Analysis", "None", "External Data Analysis", "Exploratory Data Analysis"],
        correct: 3,
        topic: "Data Science Process"
    },
    {
        question: "Data profiling involves:",
        options: ["Nothing", "Encrypting data", "Understanding data characteristics", "Deleting data"],
        correct: 2,
        topic: "Data Science Process"
    },
    {
        question: "Model monitoring in production tracks:",
        options: ["Only speed", "Performance degradation", "Nothing", "Only accuracy"],
        correct: 1,
        topic: "Data Science Process"
    },
    {
        question: "A/B testing is used for:",
        options: ["Training models", "Feature selection", "Comparing model versions", "Data cleaning"],
        correct: 2,
        topic: "Data Science Process"
    },
    {
        question: "Model versioning helps with:",
        options: ["Accuracy", "Reproducibility and tracking", "Speed", "Nothing"],
        correct: 1,
        topic: "Data Science Process"
    }
];

// Export for use in exam system
if (typeof module !== 'undefined' && module.exports) {
    module.exports = DTS201_QUESTIONS;
}
