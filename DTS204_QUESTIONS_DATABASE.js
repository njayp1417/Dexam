// DTS204 - Statistical Computing II Questions Database

const DTS204_QUESTIONS = [

    // ── BATCH 1: EDA, REGRESSION, INFERENCE, DATA PRIVACY ─────────────────────

    {
        id: "dts204_001",
        question: "Which type of Exploratory Data Analysis (EDA) relies on cross-tabulation to describe relationships between variables without using graphical displays?",
        options: ["Univariate Non-graphical", "Univariate Graphical", "Multivariate Non-graphical", "Multivariate Graphical"],
        correct: 2,
        topic: "Exploratory Data Analysis"
    },
    {
        id: "dts204_002",
        question: "In Factor Analysis, which extraction method assumes that there is no unique variance, meaning all variance within the items is shared?",
        options: ["Common Factor Analysis", "Principal Component Analysis (PCA)", "Maximum Likelihood", "Direct Oblimin"],
        correct: 1,
        topic: "Factor Analysis"
    },
    {
        id: "dts204_003",
        question: "Which factor rotation method should an analyst choose if they want to perform an oblique rotation that allows the underlying factors to be correlated?",
        options: ["Varimax", "Quartimax", "Equamax", "Direct Oblimin"],
        correct: 3,
        topic: "Factor Analysis"
    },
    {
        id: "dts204_004",
        question: "What is the established numerical range for a correlation coefficient when performing a linear bivariate analysis?",
        options: ["0 to +1", "-1 to 0", "-1 to +1", "-10 to +10"],
        correct: 2,
        topic: "Correlation Analysis"
    },
    {
        id: "dts204_005",
        question: "What type of statistical analysis explicitly examines and evaluates the linear relationship between exactly two distinct variables?",
        options: ["Univariate Analysis", "Bivariate Analysis", "Multivariate Analysis", "Descriptive Analysis"],
        correct: 1,
        topic: "Correlation Analysis"
    },
    {
        id: "dts204_006",
        question: "Which of the following lists the correct chronological order of the five key steps in the structured data processing framework?",
        options: [
            "Data Collection, Data Cleaning, Data Analysis, Data Transformation, Data Storage",
            "Data Cleaning, Data Collection, Data Transformation, Data Analysis, Data Storage",
            "Data Collection, Data Cleaning, Data Transformation, Data Analysis, Data Storage",
            "Data Collection, Data Transformation, Data Cleaning, Data Analysis, Data Storage"
        ],
        correct: 2,
        topic: "Data Processing"
    },
    {
        id: "dts204_007",
        question: "An analyst evaluates historical operational datasets to determine why a particular system failure happened. Which category of data analysis matches this purpose?",
        options: ["Descriptive Analysis", "Diagnostic Analysis", "Predictive Analysis", "Prescriptive Analysis"],
        correct: 1,
        topic: "Data Analysis Types"
    },
    {
        id: "dts204_008",
        question: "Which of the following is considered a qualitative analysis methodology rather than a quantitative statistical method?",
        options: ["ANOVA", "t-tests", "Chi-square", "Grounded Theory"],
        correct: 3,
        topic: "Analysis Methods"
    },
    {
        id: "dts204_009",
        question: "What qualitative analysis technique is characterized by generating explanatory theories directly from raw, empirical data?",
        options: ["Thematic Analysis", "Content Analysis", "Grounded Theory", "Narrative Analysis"],
        correct: 2,
        topic: "Analysis Methods"
    },
    {
        id: "dts204_010",
        question: "In the simple linear regression model equation Y = a + bX, what does the parameter 'b' mathematically represent?",
        options: ["The dependent variable", "The Y-intercept", "The residual error", "The slope of the line"],
        correct: 3,
        topic: "Regression Analysis"
    },
    {
        id: "dts204_011",
        question: "Simple linear regression establishes a line of best fit through data points. What specific metric does this line seek to minimize?",
        options: ["The sum of independent predictors", "The sum of squared residuals", "The absolute value of the intercept", "The total confidence intervals"],
        correct: 1,
        topic: "Regression Analysis"
    },
    {
        id: "dts204_012",
        question: "In regression analysis, how is a residual mathematically defined for any given observed data point?",
        options: ["Residual = Observed - Predicted", "Residual = Predicted - Observed", "Residual = Intercept + Slope", "Residual = Observed / Predicted"],
        correct: 0,
        topic: "Regression Analysis"
    },
    {
        id: "dts204_013",
        question: "Which type of regression model is designed for evaluating a binary categorical outcome (0 or 1) using an S-shaped curve for probability estimation?",
        options: ["Simple Linear Regression", "Multiple Linear Regression", "Logistic Regression", "Polynomial Regression"],
        correct: 2,
        topic: "Regression Analysis"
    },
    {
        id: "dts204_014",
        question: "What are the two major foundational fields or components that comprise the study of statistical inference?",
        options: ["Data Collection and Data Storage", "Estimation and Hypothesis Testing", "Bivariate and Multivariate Analysis", "Qualitative and Quantitative Methods"],
        correct: 1,
        topic: "Statistical Inference"
    },
    {
        id: "dts204_015",
        question: "What is the standard critical value z(α) used when establishing a standard two-tailed 95% Confidence Interval?",
        options: ["1.64", "1.96", "2.58", "0.05"],
        correct: 1,
        topic: "Statistical Inference"
    },
    {
        id: "dts204_016",
        question: "When performing a statistical hypothesis test, what is the correct decision rule regarding the Null Hypothesis (H₀) if your calculated p-value is less than or equal to the significance level (α)?",
        options: ["Fail to reject H₀", "Reject H₀", "Accept the Null Hypothesis as true", "Discard the test sample"],
        correct: 1,
        topic: "Hypothesis Testing"
    },
    {
        id: "dts204_017",
        question: "In hypothesis testing, the significance level (α) represents the specific probability of committing which type of error?",
        options: ["Rejecting a true null hypothesis (Type I error)", "Failing to reject a false null hypothesis (Type II error)", "Selecting an inadequate sample size", "Violating homoscedasticity assumptions"],
        correct: 0,
        topic: "Hypothesis Testing"
    },
    {
        id: "dts204_018",
        question: "Which core data privacy principle mandates that personal information collected must be limited to what is 'Necessary only'?",
        options: ["Lawfulness", "Data Minimization", "Accuracy", "Storage Limitations"],
        correct: 1,
        topic: "Data Privacy"
    },
    {
        id: "dts204_019",
        question: "The core data privacy principle of 'Purpose Limitation' states that personal information must be collected for:",
        options: ["General and unrestricted commercial analysis", "Specific objectives only", "Brief retention periods only", "Open-source research distribution"],
        correct: 1,
        topic: "Data Privacy"
    },
    {
        id: "dts204_020",
        question: "Which data confidentiality maintenance strategy involves completely removing personal identifiers from records to prevent unauthorized identification?",
        options: ["Encryption", "Role-based Access Control", "Anonymization", "Multi-factor Authentication"],
        correct: 2,
        topic: "Data Privacy"
    },

    // ── BATCH 2: EDA, NON-PARAMETRIC, CORRELATION, REGRESSION, INFERENCE ──────

    {
        id: "dts204_021",
        question: "Histograms, box plots, and bar charts representing a single variable are examples of which type of Exploratory Data Analysis (EDA)?",
        options: ["Univariate Non-graphical", "Univariate Graphical", "Multivariate Non-graphical", "Multivariate Graphical"],
        correct: 1,
        topic: "Exploratory Data Analysis"
    },
    {
        id: "dts204_022",
        question: "When standard parametric assumptions are completely violated and the underlying dataset is heavily non-normal, which statistical methodology serves as the robust alternative?",
        options: ["Common Factor Analysis", "Principal Component Analysis", "Non-parametric Statistics", "Multiple Linear Regression"],
        correct: 2,
        topic: "Analysis Methods"
    },
    {
        id: "dts204_023",
        question: "An analyst is evaluating an ordinal dataset featuring ranked evaluations with tied entries (e.g., wine rankings by two judges). Which correlation measure represents this exact scenario with the symbol τ?",
        options: ["Pearson Coefficient", "Spearman Coefficient", "Kendall's Tau Coefficient", "Fisher's Exact Test"],
        correct: 2,
        topic: "Correlation Analysis"
    },
    {
        id: "dts204_024",
        question: "If a bivariate analysis yields a correlation coefficient score of exactly -0.7, how should this relationship be interpreted on the standardized strength scale?",
        options: ["Perfect Positive Correlation", "Strong Positive Correlation", "Strong Negative Correlation", "No Correlation"],
        correct: 2,
        topic: "Correlation Analysis"
    },
    {
        id: "dts204_025",
        question: "Which specific stage within the data processing framework focuses heavily on handling missing data elements, removing duplicate entries, and correcting anomalies?",
        options: ["Data Collection", "Data Cleaning", "Data Transformation", "Data Storage"],
        correct: 1,
        topic: "Data Processing"
    },
    {
        id: "dts204_026",
        question: "An enterprise leverages historical trend patterns to forecast future market outcomes and customer behavior. Which type of data analysis matches this application?",
        options: ["Descriptive Analysis", "Diagnostic Analysis", "Predictive Analysis", "Prescriptive Analysis"],
        correct: 2,
        topic: "Data Analysis Types"
    },
    {
        id: "dts204_027",
        question: "In academic writing and research documentation, which popular bibliography formatting style uses the exact sequential template: 'Author, A. A. (Year). Title. Publisher.'?",
        options: ["MLA Style", "Chicago Style", "APA Style", "Harvard Style"],
        correct: 2,
        topic: "Research Documentation"
    },
    {
        id: "dts204_028",
        question: "What is the core mathematical differentiator between Multiple Linear Regression and Simple Linear Regression models?",
        options: ["Multiple regression uses an S-shaped probability curve.", "Multiple regression evaluates multiple independent predictor variables instead of just one.", "Multiple regression eliminates the residual error parameter entirely.", "Multiple regression can only evaluate categorical dependent outcomes."],
        correct: 1,
        topic: "Regression Analysis"
    },
    {
        id: "dts204_029",
        question: "Which core assumption of linear regression is met when the variance of the residual errors remains completely constant across all levels of the predictor variables?",
        options: ["Linearity", "Independence", "Homoscedasticity", "Heteroscedasticity"],
        correct: 2,
        topic: "Regression Analysis"
    },
    {
        id: "dts204_030",
        question: "Regression modeling transforms empirical raw data into actionable insights for two primary statistical purposes. What are they?",
        options: ["Data Storage and Data Cleaning", "Explanatory and Predictive purposes", "Direct Oblimin and Varimax tracking", "Anonymization and De-identification"],
        correct: 1,
        topic: "Regression Analysis"
    },
    {
        id: "dts204_031",
        question: "According to the inferential decision flow chart, what test should be selected if your analysis involves a sample size less than 30 (n < 30) and the true population variance (σ) is completely unknown?",
        options: ["Z-test", "T-test", "Chi-square Test", "Factor Analysis"],
        correct: 1,
        topic: "Statistical Inference"
    },
    {
        id: "dts204_032",
        question: "In the structural framework of formal hypothesis testing, how is the Alternative Hypothesis (Hₐ) defined?",
        options: ["A statement declaring a baseline status quo of no effect", "A statement that explicitly contradicts the Null Hypothesis (H₀)", "The absolute margin of error within a 95% threshold", "A representation of a perfect positive linear fit"],
        correct: 1,
        topic: "Hypothesis Testing"
    },
    {
        id: "dts204_033",
        question: "What specific mathematical error occurs if a researcher incorrectly rejects a Null Hypothesis (H₀) that is actually true?",
        options: ["Type I Error", "Type II Error", "Standard Error", "Residual Minimization Error"],
        correct: 0,
        topic: "Hypothesis Testing"
    },
    {
        id: "dts204_034",
        question: "According to statistical computing comparisons, what is an operational limitation of using the open-source R programming language for data analysis?",
        options: ["It lacks support for custom data visualization libraries.", "It mandates that all processing datasets be loaded directly into memory.", "It is heavily restricted by costly proprietary commercial licensing fees.", "It cannot handle non-parametric analysis calculations."],
        correct: 1,
        topic: "Statistical Computing"
    },
    {
        id: "dts204_035",
        question: "Which standard data visualization technique is specifically designed to show quantitative trends over continuous intervals of time using sequentially connected points?",
        options: ["Pie Chart", "Bar Graph", "Line Graph", "Column Chart"],
        correct: 2,
        topic: "Data Visualization"
    },
    {
        id: "dts204_036",
        question: "Which core privacy principle states that personal information must be retained briefly and discarded once the primary goal is achieved?",
        options: ["Accuracy", "Data Minimization", "Storage Limitations", "Lawfulness"],
        correct: 2,
        topic: "Data Privacy"
    },
    {
        id: "dts204_037",
        question: "Under data privacy governance frameworks, which principle requires organizations to actively demonstrate regulatory compliance through audits, security logs, and records?",
        options: ["Purpose Limitation", "Accountability", "Fairness", "Transparency"],
        correct: 1,
        topic: "Data Privacy"
    },
    {
        id: "dts204_038",
        question: "When analyzing two variables, a researcher discovers that a hidden, unmeasured factor is influencing both variables simultaneously, creating a false relationship. What is this limitation called?",
        options: ["Perfect Negative Correlation", "Confounding/Third Variable Problem", "Homoscedasticity", "Orthogonal Rotation"],
        correct: 1,
        topic: "Correlation Analysis"
    },
    {
        id: "dts204_039",
        question: "In Factor Analysis, what does the term 'Communality (h²)' quantify, and what is its standard range?",
        options: ["The unique variance of an isolated factor, ranging from -1 to +1", "The proportion of variance shared or explained by the factors, ranging from 0 to 1", "The total number of residual errors, ranging from 0 to 100", "The slope intercept of an oblique line, ranging from -∞ to +∞"],
        correct: 1,
        topic: "Factor Analysis"
    },
    {
        id: "dts204_040",
        question: "When calculating confidence boundaries using the standardized formula, what does the component abbreviation 'SE' represent?",
        options: ["Significance Evaluation", "Standard Error", "Squared Estimation", "Sample Elements"],
        correct: 1,
        topic: "Statistical Inference"
    },

    // ── BATCH 3: CALCULATIONS, EDA, FACTOR ANALYSIS, REGRESSION, PRIVACY ──────

    {
        id: "dts204_041",
        question: "A researcher computes a simple linear regression equation as Y = 12 + 3.5X. If a subject has an independent variable score of X = 6, what is their predicted response value (Y)?",
        options: ["21.0", "33.0", "15.5", "42.0"],
        correct: 1,
        topic: "Regression Analysis"
    },
    {
        id: "dts204_042",
        question: "For a specific observation, the actual observed value is Y = 25.5 and the regression model's predicted value is Ŷ = 22.1. What is the calculated residual for this observation?",
        options: ["-3.4", "3.4", "47.6", "1.15"],
        correct: 1,
        topic: "Regression Analysis"
    },
    {
        id: "dts204_043",
        question: "If a linear regression model yields a predicted value of Ŷ = 40.0 and the calculated residual error is exactly -4.5, what was the actual observed value (Y)?",
        options: ["44.5", "35.5", "-44.5", "8.8"],
        correct: 1,
        topic: "Regression Analysis"
    },
    {
        id: "dts204_044",
        question: "An analyst is constructing a 95% Confidence Interval for a sample mean. Given that the Standard Error (SE) is 1.50 and the critical z-score is 1.96, what is the calculated Margin of Error (ME)?",
        options: ["1.50", "2.94", "1.96", "0.76"],
        correct: 1,
        topic: "Statistical Inference"
    },
    {
        id: "dts204_045",
        question: "A researcher calculates a sample mean of X̄ = 75.0 and a Margin of Error (ME) of 4.25. What are the lower and upper limits of the Confidence Interval?",
        options: ["[71.75, 78.25]", "[70.75, 79.25]", "[75.00, 79.25]", "[70.75, 75.00]"],
        correct: 1,
        topic: "Statistical Inference"
    },
    {
        id: "dts204_046",
        question: "In a one-proportion z-test, the baseline proportion is p₀ = 0.21 and sample size n = 100. What is the standard error of the proportion?",
        options: ["0.0407", "0.2100", "0.1659", "0.0166"],
        correct: 0,
        topic: "Hypothesis Testing"
    },
    {
        id: "dts204_047",
        question: "Using p₀ = 0.21, n = 100, standard error ≈ 0.0407, and an observed proportion of p = 0.14, what is the calculated z-statistic?",
        options: ["1.96", "-1.72", "-1.96", "1.72"],
        correct: 1,
        topic: "Hypothesis Testing"
    },
    {
        id: "dts204_048",
        question: "If a Factor Analysis item has a Communality (h²) value of exactly 1.0, what percentage of this item's variance is classified as unique variance?",
        options: ["100%", "50%", "0%", "10%"],
        correct: 2,
        topic: "Factor Analysis"
    },
    {
        id: "dts204_049",
        question: "A regression model predicts a value of 15.0 with a margin of uncertainty of 1.8. What are the definitive uncertainty boundaries for this estimate?",
        options: ["[13.2, 16.8]", "[14.2, 15.8]", "[15.0, 16.8]", "[13.2, 15.0]"],
        correct: 0,
        topic: "Regression Analysis"
    },
    {
        id: "dts204_050",
        question: "An analyst calculates a Kendall's Tau (τ) value of 0.68. How far is this dataset's consensus from a perfect positive consensus (1.0)?",
        options: ["0.32", "-0.68", "0.68", "1.68"],
        correct: 0,
        topic: "Correlation Analysis"
    },
    {
        id: "dts204_051",
        question: "Which specific form of EDA focuses on summarizing a single variable using descriptive statistics like mean, median, mode and range without graphical charts?",
        options: ["Univariate Non-graphical", "Univariate Graphical", "Multivariate Non-graphical", "Multivariate Graphical"],
        correct: 0,
        topic: "Exploratory Data Analysis"
    },
    {
        id: "dts204_052",
        question: "When performing Factor Analysis, which extraction methodology explicitly separates common variance from unique variance during processing?",
        options: ["Principal Component Analysis (PCA)", "Common Factor Method", "Direct Oblimin", "Varimax"],
        correct: 1,
        topic: "Factor Analysis"
    },
    {
        id: "dts204_053",
        question: "Which type of factor rotation must an analyst select if the underlying latent constructs must remain completely independent and uncorrelated?",
        options: ["Oblique Rotation", "Orthogonal Rotation", "Direct Oblimin Rotation", "Non-parametric Rotation"],
        correct: 1,
        topic: "Factor Analysis"
    },
    {
        id: "dts204_054",
        question: "What structural limitation is introduced when an analyst calculates correlation coefficients using an extremely small sample size (N)?",
        options: ["It causes perfect linear shapes on charts automatically.", "It yields highly unreliable results that lack statistical significance.", "It completely removes the influence of extreme outliers.", "It violates data minimization compliance."],
        correct: 1,
        topic: "Correlation Analysis"
    },
    {
        id: "dts204_055",
        question: "If a scatter plot of two continuous variables reveals a distinctly curved or U-shaped pattern, why is a standard Pearson correlation coefficient inappropriate?",
        options: ["Pearson is limited to measuring strictly straight-line (linear) patterns.", "Pearson requires a categorical binary dependent variable.", "Curved patterns always result in an automated score of -1.0.", "Curved data violates purpose limitation mandates."],
        correct: 0,
        topic: "Correlation Analysis"
    },
    {
        id: "dts204_056",
        question: "Which specific phase of the data processing framework involves transferring cleaned data into protected infrastructure like structured databases or secure cloud storage?",
        options: ["Data Collection", "Data Transformation", "Data Analysis", "Data Storage"],
        correct: 3,
        topic: "Data Processing"
    },
    {
        id: "dts204_057",
        question: "Which qualitative research methodology focuses primarily on identifying, analyzing, and documenting recurring, explicit conceptual patterns across non-numerical textual datasets?",
        options: ["ANOVA", "Thematic Analysis", "Chi-square Test", "Polynomial Regression"],
        correct: 1,
        topic: "Analysis Methods"
    },
    {
        id: "dts204_058",
        question: "In a Multiple Linear Regression model containing three distinct independent predictor variables, what geometric shape does the resulting mathematical model represent in space?",
        options: ["A two-dimensional straight line", "A multi-dimensional surface or plane", "A binary S-shaped curve", "A parabolic arc"],
        correct: 1,
        topic: "Regression Analysis"
    },
    {
        id: "dts204_059",
        question: "If an analyst discovers that the variance of the residual errors changes drastically across different values of an independent predictor variable, what condition has been detected?",
        options: ["Homoscedasticity", "Heteroscedasticity", "Perfect Linearity", "Normal Distribution"],
        correct: 1,
        topic: "Regression Analysis"
    },
    {
        id: "dts204_060",
        question: "Under modern data protection governance principles, which core principle mandates that data managers provide clear, honest, and plain explanations regarding how personal records are processed?",
        options: ["Accuracy", "Data Minimization", "Storage Limitation", "Fairness and Transparency"],
        correct: 3,
        topic: "Data Privacy"
    },

    // ── BATCH 4: CALCULATIONS, SOFTWARE, PRIVACY, EDA, REGRESSION ────────────

    {
        id: "dts204_061",
        question: "A statistician fits a simple linear regression line expressed as Y = 5 + 2X. If an observation has a predictor value of X = 4, what is the predicted response value (Ŷ)?",
        options: ["9", "13", "22", "11"],
        correct: 1,
        topic: "Regression Analysis"
    },
    {
        id: "dts204_062",
        question: "In a study, the actual observed value is Y = 50.0 and the regression model predicts Ŷ = 45.5. What is the calculated residual error?",
        options: ["-4.5", "4.5", "95.5", "1.1"],
        correct: 1,
        topic: "Regression Analysis"
    },
    {
        id: "dts204_063",
        question: "A linear regression model is defined as Y = -3 + 1.5X. What is the predicted value of Y when X = 10?",
        options: ["15.0", "-1.5", "12.0", "18.0"],
        correct: 2,
        topic: "Regression Analysis"
    },
    {
        id: "dts204_064",
        question: "A researcher computes a 95% CI for a sample mean of 100.0 with SE = 2.00 and z = 1.96. What are the lower and upper confidence limits?",
        options: ["[98.00, 102.00]", "[96.08, 103.92]", "[95.00, 105.00]", "[96.00, 104.00]"],
        correct: 1,
        topic: "Statistical Inference"
    },
    {
        id: "dts204_065",
        question: "The upper limit of a symmetrical confidence interval is 85.0 and the Margin of Error (ME) is 5.0. What is the value of the sample mean?",
        options: ["90.0", "75.0", "80.0", "42.5"],
        correct: 2,
        topic: "Statistical Inference"
    },
    {
        id: "dts204_066",
        question: "In a hypothesis test for a single proportion, the baseline proportion is p₀ = 0.10 and n = 100. What is the standard error (SE) of the proportion?",
        options: ["0.0900", "0.0300", "0.0009", "0.1000"],
        correct: 1,
        topic: "Hypothesis Testing"
    },
    {
        id: "dts204_067",
        question: "Using p₀ = 0.10, n = 100, SE = 0.03, and an observed proportion of p = 0.16, what is the calculated z-statistic?",
        options: ["1.96", "2.00", "-2.00", "1.64"],
        correct: 1,
        topic: "Hypothesis Testing"
    },
    {
        id: "dts204_068",
        question: "An item in a Factor Analysis model yields a Communality (h²) score of 0.75. What percentage of this item's variance is classified as unique variance?",
        options: ["75%", "50%", "25%", "0%"],
        correct: 2,
        topic: "Factor Analysis"
    },
    {
        id: "dts204_069",
        question: "A regression model generates a predicted value of Ŷ = 30.0 and the residual error is +2.5. What was the actual observed value (Y)?",
        options: ["27.5", "32.5", "12.0", "-27.5"],
        correct: 1,
        topic: "Regression Analysis"
    },
    {
        id: "dts204_070",
        question: "A researcher calculates a Kendall's Tau (τ) coefficient of 0.40. What is the mathematical distance between this dataset's consensus and a perfect positive consensus (1.0)?",
        options: ["0.40", "0.60", "-0.40", "1.40"],
        correct: 1,
        topic: "Correlation Analysis"
    },
    {
        id: "dts204_071",
        question: "Which statistical computing software package is popular, open-source, and extensively supported by libraries like pandas and numpy for data manipulation?",
        options: ["SAS", "SPSS", "Python", "Stata"],
        correct: 2,
        topic: "Statistical Computing"
    },
    {
        id: "dts204_072",
        question: "Alongside regional legislations like CCPA and industry-specific acts like HIPAA, which comprehensive European regulation dictates legal compliance frameworks for data privacy?",
        options: ["GDPR", "ANOVA", "APA Code", "GNU/PL"],
        correct: 0,
        topic: "Data Privacy"
    },
    {
        id: "dts204_073",
        question: "Scatter plots, heat maps, and bubble charts designed to visually explore relationships among multiple variables simultaneously are examples of which type of EDA?",
        options: ["Univariate Non-graphical", "Univariate Graphical", "Multivariate Non-graphical", "Multivariate Graphical"],
        correct: 3,
        topic: "Exploratory Data Analysis"
    },
    {
        id: "dts204_074",
        question: "What specific probability distribution is used when performing a T-test because the sample size is small (n < 30) and the population variance is unknown?",
        options: ["Normal Distribution", "Chi-square Distribution", "t-distribution", "Binomial Distribution"],
        correct: 2,
        topic: "Statistical Inference"
    },
    {
        id: "dts204_075",
        question: "Which category of data analysis goes beyond predicting future patterns by actively suggesting specific actions or decisions to achieve optimal outcomes?",
        options: ["Descriptive Analysis", "Diagnostic Analysis", "Predictive Analysis", "Prescriptive Analysis"],
        correct: 3,
        topic: "Data Analysis Types"
    },
    {
        id: "dts204_076",
        question: "Which common data visualization technique displays the proportional breakdown of a categorical variable as individual slices of a whole?",
        options: ["Line Graph", "Scatter Plot", "Pie Chart", "Bar Graph"],
        correct: 2,
        topic: "Data Visualization"
    },
    {
        id: "dts204_077",
        question: "Which core data privacy principle mandates that personal records must be managed responsibly to ensure they are kept correct and up to date?",
        options: ["Data Minimization", "Storage Limitations", "Accuracy", "Purpose Limitation"],
        correct: 2,
        topic: "Data Privacy"
    },
    {
        id: "dts204_078",
        question: "In the fundamental linear regression model equation Y = f(X) + ε, what does the Greek symbol 'ε' mathematically represent?",
        options: ["The slope coefficient", "The Y-intercept constant", "The independent variable", "The error of prediction (residual)"],
        correct: 3,
        topic: "Regression Analysis"
    },
    {
        id: "dts204_079",
        question: "In Factor Analysis, which general rotation method category does the 'Varimax' technique belong to, assuming the factors are completely uncorrelated?",
        options: ["Oblique", "Orthogonal", "Non-parametric", "Component Extraction"],
        correct: 1,
        topic: "Factor Analysis"
    },
    {
        id: "dts204_080",
        question: "According to statistical software documentation, what interface types are typical for software packages like R or SAS modules?",
        options: ["Purely Touchscreen Interface", "CLI / GUI", "Voice-activated Controls", "Natural Language processing text boxes"],
        correct: 1,
        topic: "Statistical Computing"
    },

    // ── BATCH 5: SECURITY, SOFTWARE, VISUALIZATION, INFERENCE, METHODOLOGY ────

    {
        id: "dts204_081",
        question: "Under organizational security policy frameworks, which specific measures are classified as organizational safeguards rather than technical or engineering controls?",
        options: ["Encryption at rest and encryption in transit", "Role-based Access Control and Audit Trails", "Regular privacy training, Data Classification, and Vendor Risk Assessments", "Multi-Factor Authentication (MFA)"],
        correct: 2,
        topic: "Data Privacy"
    },
    {
        id: "dts204_082",
        question: "According to software properties comparison profiles, under which official licensing agreement model is the open-source programming language R distributed?",
        options: ["Proprietary Commercial License", "GNU/PL (General Public License)", "Apache 2.0 License", "MIT Academic License"],
        correct: 1,
        topic: "Statistical Computing"
    },
    {
        id: "dts204_083",
        question: "What is the explicit visual and structural distinction between a Column Chart and a Bar Graph as defined in data visualization standards?",
        options: ["Column charts show continuous time trends, while bar graphs display categorical proportions as slices of a whole.", "Column charts compare data categories using vertical bars, while bar graphs compare data categories using horizontal bars.", "Column charts require multi-dimensional regression inputs, while bar graphs map out single univariate plots.", "Column charts always eliminate outlier values, while bar graphs retain extreme anomalies."],
        correct: 1,
        topic: "Data Visualization"
    },
    {
        id: "dts204_084",
        question: "How is the core domain of Inferential Statistics explicitly defined and separated from Descriptive Statistics?",
        options: ["The strict structural process of cleaning missing values and duplicates from datasets.", "Drawing conclusions and making predictions about an entire population based on the analysis of a random sample.", "Summarizing, organizing, and visualizing the immediate basic numerical properties of a single sample.", "Setting up user access roles and configuring cloud server infrastructure pipelines."],
        correct: 1,
        topic: "Statistical Inference"
    },
    {
        id: "dts204_085",
        question: "In academic research methodology, what is the exact template sequence required for references structured in the MLA Style format?",
        options: ["Author, A. A. (Year). Title. Publisher.", "Author. Title. Publisher, Year.", "Title, Author, Publisher, (Year).", "Author (Year) Title: Publisher."],
        correct: 1,
        topic: "Research Documentation"
    },
    {
        id: "dts204_086",
        question: "When evaluating the fundamental assumptions of a linear regression model, what is required by the assumption of 'Independence'?",
        options: ["The residual errors must follow a perfectly bell-shaped normal curve.", "The variance of the residual errors must remain completely constant.", "The individual residual errors must be completely independent of each other.", "The independent variable must match the dependent variable exactly."],
        correct: 2,
        topic: "Regression Analysis"
    },
    {
        id: "dts204_087",
        question: "According to the T-test framework, which variant should be selected when checking for a difference between means using the same group of individuals across two distinct points in time?",
        options: ["One-sample T-test", "Two-sample T-test", "Paired T-test", "Independent Chi-square Test"],
        correct: 2,
        topic: "Hypothesis Testing"
    },
    {
        id: "dts204_088",
        question: "Within a Data Science framework, which specific technical operations are mapped directly under the 'Feature Engineering' stage?",
        options: ["Handling missing elements and removing duplicate records", "Encoding categorical data and applying feature scaling (Standardization/Normalization)", "Generating descriptive tables and deploying real-time cloud interfaces", "Calculating confidence intervals and executing hypothesis tests"],
        correct: 1,
        topic: "Data Processing"
    },
    {
        id: "dts204_089",
        question: "Why is evaluating data distribution boundaries critical before running a correlation analysis? What is the explicit risk associated with outliers?",
        options: ["Extreme outliers are ignored by statistical software and do not affect equations.", "Extreme values can significantly distort correlation coefficients and lead to false conclusions.", "Outliers automatically transform non-parametric relationships into parametric lines.", "Outliers violate the purpose limitation principle of global privacy laws."],
        correct: 1,
        topic: "Correlation Analysis"
    },
    {
        id: "dts204_090",
        question: "Under modern data protection governance models, which definition matches the core privacy principle of 'Integrity & Confidentiality'?",
        options: ["Processing personal profiles strictly for predefined, specific objectives only.", "Ensuring that personal records are retained briefly and deleted once goals are met.", "Ensuring data is processed securely to protect against unauthorized or unlawful access.", "Actively demonstrating regulatory compliance via security audits and logs."],
        correct: 2,
        topic: "Data Privacy"
    },
    {
        id: "dts204_091",
        question: "In technical systems architecture for data protection, which primary control domain specifies that Multi-Factor Authentication (MFA) is required?",
        options: ["Encryption", "Authentication", "Access Control", "Audit Trails"],
        correct: 1,
        topic: "Data Privacy"
    },
    {
        id: "dts204_092",
        question: "What is the primary operational focus of Quantitative Analysis methods within a standard research methodology framework?",
        options: ["Interpreting non-numerical, text-based narratives to extract conceptual meaning.", "Focusing on numerical data and statistical inference to draw rigorous conclusions.", "Running manual paper-based filing systems for historical archives.", "Observing participants in a natural environment without using numeric values."],
        correct: 1,
        topic: "Analysis Methods"
    },
    {
        id: "dts204_093",
        question: "For what primary statistical purposes do data analysts leverage Factor Analysis models during exploratory research stages?",
        options: ["To clean missing data entries and standardize file formats.", "To reduce data dimensionality and identify unobservable latent constructs.", "To define whether sample sizes are above or below the threshold of 30.", "To visualize continuous time-series trend lines."],
        correct: 1,
        topic: "Factor Analysis"
    },
    {
        id: "dts204_094",
        question: "According to statistical analysis paradigms, which three foundational coefficients are explicitly identified as the main options that suit different data types?",
        options: ["Linear, Logistic, and Polynomial", "Pearson, Spearman, and Kendall", "Descriptive, Diagnostic, and Prescriptive", "Univariate, Bivariate, and Multivariate"],
        correct: 1,
        topic: "Correlation Analysis"
    },
    {
        id: "dts204_095",
        question: "According to predictive modeling guidelines, under what precise data conditions should regression analysis be implemented?",
        options: ["Categorical inputs, small sample groups, and security storage needs.", "Continuous outcomes, multiple factors, and prediction needs.", "Ranked ordinal metrics with tied entries and missing indicators.", "Purely qualitative texts, single isolated indicators, and short retention periods."],
        correct: 1,
        topic: "Regression Analysis"
    },
    {
        id: "dts204_096",
        question: "Conceptually, what does a standard 95% Confidence Interval range communicate to a researcher regarding a population parameter?",
        options: ["There is an exact 95% certainty that the sample size is larger than 30 observations.", "There is a 95% chance that the true population mean will fall between the lower and upper limits of the interval.", "The alternative hypothesis has a 5% probability of being rejected incorrectly.", "Exactly 95% of the data points within the dataset are identical or tied."],
        correct: 1,
        topic: "Statistical Inference"
    },
    {
        id: "dts204_097",
        question: "Within data management pipelines, which specific collection of operations defines the technical process of 'Data Manipulation'?",
        options: ["Building encryption keys at rest and configuring access rules.", "Cleaning, transforming, merging, and handling missing values.", "Compiling vertical charts, line charts, and dashboard widgets.", "Suggesting optimal real-time commercial decisions to managers."],
        correct: 1,
        topic: "Data Processing"
    },
    {
        id: "dts204_098",
        question: "According to data modeling integration guidelines, what is the correct chronological relationship between EDA and formal predictive modeling?",
        options: ["Formal modeling must be completely finished before EDA begins.", "EDA precedes formal modeling to understand data structure and check assumptions.", "EDA replaces formal modeling entirely when datasets contain missing entries.", "Both steps must occur simultaneously after the data is stored in a cloud repository."],
        correct: 1,
        topic: "Exploratory Data Analysis"
    },
    {
        id: "dts204_099",
        question: "In the data lifecycle and research framework, what is the explicit functional role of the 'Interpretation' phase?",
        options: ["Loading large files directly into system RAM.", "It bridges data analysis and conclusions.", "Eliminating outliers automatically without visual charts.", "Calculating the slope intercept of a simple linear model."],
        correct: 1,
        topic: "Data Processing"
    },
    {
        id: "dts204_100",
        question: "Under technical confidentiality maintenance guidelines, what is the primary operational rule for managing access to sensitive datasets?",
        options: ["Restricting software installations to command-line interfaces only.", "Limiting dataset access strictly on a need-to-know basis.", "Enforcing that all charts utilize an identical color palette.", "Discarding raw data elements immediately before starting analysis."],
        correct: 1,
        topic: "Data Privacy"
    },

    // ── BATCH 6: NON-PARAMETRIC, PRIVACY, PROCESSING, INFERENCE, EDA ───────

    {
        id: "dts204_101",
        question: "Under what explicit condition should a data analyst opt for a Non-parametric statistical method instead of a standard parametric method?",
        options: ["When the sample size is extremely large and population variance is fully known.", "When parametric assumptions (such as data normality) are violated or the data is non-normal.", "When predicting a continuous outcome variable based on multiple linear factors.", "When executing a standard Z-test with a sample size greater than 30."],
        correct: 1,
        topic: "Analysis Methods"
    },
    {
        id: "dts204_102",
        question: "In correlation analysis, what does the 'Third Variable Problem' refer to?",
        options: ["The requirement to add a third option to all binary research surveys.", "A situation where a hidden confounding variable influences both studied variables, creating a spurious or misleading correlation.", "Having more than three severe outlier coordinates on a graphical scatter plot grid.", "The mathematical process of evaluating Pearson, Spearman, and Kendall coefficients all at once."],
        correct: 1,
        topic: "Correlation Analysis"
    },
    {
        id: "dts204_103",
        question: "Beside European standards like GDPR, which specific regional legislation is highlighted in modern security frameworks as a primary legal driver for data privacy compliance?",
        options: ["CCPA", "ANOVA", "APA Format", "GNU/PL"],
        correct: 0,
        topic: "Data Privacy"
    },
    {
        id: "dts204_104",
        question: "According to statistical software evaluation standards, which collection of properties represents the core factors to consider when choosing a package?",
        options: ["Learning curve, cost, scalability, and community support", "Color palettes, chart verticality, and screen resolutions", "Document margins, page counts, and hanging indents", "Alpha levels, p-values, and confidence limit bounds"],
        correct: 0,
        topic: "Statistical Computing"
    },
    {
        id: "dts204_105",
        question: "What is the correct chronological sequence of the five key steps in a standard data processing lifecycle?",
        options: ["Data Storage → Data Cleaning → Data Collection → Data Analysis → Data Transformation", "Data Collection → Data Cleaning → Data Transformation → Data Analysis → Data Storage", "Data Analysis → Data Collection → Data Storage → Data Transformation → Data Cleaning", "Data Cleaning → Data Transformation → Data Storage → Data Collection → Data Analysis"],
        correct: 1,
        topic: "Data Processing"
    },
    {
        id: "dts204_106",
        question: "How is the Null Hypothesis (H₀) fundamentally defined within a statistical testing framework?",
        options: ["A statement proclaiming that a significant positive effect or structural change exists.", "A statement of no effect, no relationship, or no difference, which the researcher aims to test against and reject.", "The final absolute boundary of a sample's calculated standard error.", "The specific margin of error added directly to an empirical sample mean."],
        correct: 1,
        topic: "Hypothesis Testing"
    },
    {
        id: "dts204_107",
        question: "During the initial data cleaning phase of data manipulation, what two technical tasks are prioritized before processing a dataset?",
        options: ["Constructing pie charts and computing regression formulas", "Handling missing values and removing duplicate records", "Executing orthogonal rotations and determining t-distributions", "Capturing informed consent and running external GDPR audits"],
        correct: 1,
        topic: "Data Processing"
    },
    {
        id: "dts204_108",
        question: "Which core data privacy principle mandates that personal data must be handled in an open, honest, and legally compliant manner regarding the data subjects?",
        options: ["Storage Limitations", "Data Minimization", "Accuracy", "Lawfulness, Fairness & Transparency"],
        correct: 3,
        topic: "Data Privacy"
    },
    {
        id: "dts204_109",
        question: "What are the two main analytical purposes of performing a Regression Analysis?",
        options: ["Descriptive and Univariate", "Graphical and Non-graphical", "Explanatory and Predictive", "Orthogonal and Oblique"],
        correct: 2,
        topic: "Regression Analysis"
    },
    {
        id: "dts204_110",
        question: "In Factor Analysis extraction models, what is the explicit conceptual difference between the Common Factor method and Principal Component Analysis (PCA)?",
        options: ["The Common Factor method assumes that dataset variables are completely non-parametric.", "The Common Factor method accounts for unique variance among items, whereas PCA assumes no unique variance exists.", "The Common Factor method can only be executed utilizing command-line software interfaces.", "The Common Factor method changes vertical bar columns into horizontal layouts."],
        correct: 1,
        topic: "Factor Analysis"
    },
    {
        id: "dts204_111",
        question: "Under what dataset condition is a Spearman's Rho (ρ) correlation coefficient preferred over a Pearson's product-moment coefficient?",
        options: ["When variables are perfectly normal, continuous numbers following a linear trend line.", "When analyzing monotonic relationships or handling ordinal/ranked data classifications.", "When the sample size drops below 30 and population standard deviation is known.", "When implementing technical encryption controls under global security acts."],
        correct: 1,
        topic: "Correlation Analysis"
    },
    {
        id: "dts204_112",
        question: "What does the Alternative Hypothesis (H₁ or Hₐ) represent in a statistical research design?",
        options: ["A statement that reinforces and supports the null hypothesis.", "A statement contradicting the null hypothesis, representing the effect or difference the researcher hopes to find.", "The baseline standard deviation of a small sample population.", "The exact margin of error calculated using a standard z-score of 1.96."],
        correct: 1,
        topic: "Hypothesis Testing"
    },
    {
        id: "dts204_113",
        question: "Which common data visualization technique is explicitly defined as a tool to display trends over time using connected data points?",
        options: ["Pie Chart", "Bar Graph", "Line Graph", "Scatter Plot"],
        correct: 2,
        topic: "Data Visualization"
    },
    {
        id: "dts204_114",
        question: "Which of the following data protection practices is classified as a Technical Measure rather than an Organizational Policy control?",
        options: ["Hosting regular privacy training for internal data managers", "Setting up Encryption (at rest/in transit) and requiring Multi-Factor Authentication (MFA)", "Formulating an institutional corporate incident response plan", "Executing periodic risk assessments on external third-party vendors"],
        correct: 1,
        topic: "Data Privacy"
    },
    {
        id: "dts204_115",
        question: "Which description matches the Exploratory Data Analysis (EDA) category known as 'Univariate Non-graphical'?",
        options: ["Using multi-variable matrices like scatter plots and bubble charts.", "Generating cross-tabulation tables linking multiple demographic factors.", "Summarizing the characteristics of a single variable using raw numerical data metrics (like mean/median) without visuals.", "Dropping extreme data rows manually before executing software algorithms."],
        correct: 2,
        topic: "Exploratory Data Analysis"
    },
    {
        id: "dts204_116",
        question: "Under global data protection rules, what does the core privacy principle of 'Storage Limitations' mandate?",
        options: ["Personal data must remain mathematically accurate and updated continuously.", "Personal data must be retained briefly and deleted securely once predefined objectives are met.", "Datasets can only be accessed via Command Line Interfaces (CLI).", "All analytical source files must be published under a GNU/PL open-source model."],
        correct: 1,
        topic: "Data Privacy"
    },
    {
        id: "dts204_117",
        question: "A critical limitation of standard parametric correlation techniques (such as Pearson's method) is that they only measure which type of pattern?",
        options: ["Non-linear or curved configurations", "Straight-line (linear) relationships", "Unobservable latent construct scores", "Ordinal ranking groups with frequent tied entries"],
        correct: 1,
        topic: "Correlation Analysis"
    },
    {
        id: "dts204_118",
        question: "According to integrated visualization standards, what constitutes an essential best practice for developing data charts?",
        options: ["Dropping axis labels entirely to save physical space on dashboards.", "Selecting high-contrast gradients that visibly distort category differences.", "Maintaining clear labeling, ensuring color accessibility, and avoiding structural distortion.", "Scaling item communalities beyond a maximum coefficient boundary of 1.0."],
        correct: 2,
        topic: "Data Visualization"
    },
    {
        id: "dts204_119",
        question: "Within the academic research lifecycle, why is keeping consistency across referencing styles and bibliography formats considered a vital rule?",
        options: ["It ensures that the calculated z-statistic automatically rejects the null hypothesis.", "It preserves academic integrity, validates credibility, and supports reproducibility.", "It automatically converts non-parametric metrics into linear regression parameters.", "It allows raw system data logs to bypass standard GDPR and HIPAA laws."],
        correct: 1,
        topic: "Research Documentation"
    },
    {
        id: "dts204_120",
        question: "Which operational action directly aligns with the core data protection principle of 'Accountability'?",
        options: ["Storing sensitive personal identification records indefinitely without review.", "Actively demonstrating compliance through regular security audits, log tracking, and documentation.", "Selecting a parametric Z-test when sample distribution assumptions are violated.", "Restricting all internal data presentation displays to pie charts."],
        correct: 1,
        topic: "Data Privacy"
    }

];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = DTS204_QUESTIONS;
}
