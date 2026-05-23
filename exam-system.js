class ExamSystem {
    constructor() {
        this.studentName = '';
        this.matricNumber = '';
        this.examQuestions = [];
        this.currentQuestionIndex = 0;
        this.userAnswers = [];
        this.timeRemaining = 25 * 60;
        this.timerInterval = null;
        this.startTime = null;
        this.selectedCourse = null;
        this.selectedTopic = null;
        this.courseData = {
            'DTS201': {
                title: 'DTS201',
                subtitle: 'Introduction to Data Science',
                questions: typeof DTS201_QUESTIONS !== 'undefined' ? DTS201_QUESTIONS : []
            },
            'COS201': {
                title: 'COS201',
                subtitle: 'Computer Programming I',
                questions: typeof COS201_QUESTIONS !== 'undefined' ? COS201_QUESTIONS : []
            },
            'CYB201': {
                title: 'CYB201',
                subtitle: 'Cybersecurity Fundamentals',
                questions: typeof CYB201_QUESTIONS !== 'undefined' ? CYB201_QUESTIONS : [],
                explanations: typeof CYB201_EXPLANATIONS !== 'undefined' ? CYB201_EXPLANATIONS : {}
            },
            'IFT211': {
                title: 'IFT211',
                subtitle: 'Digital Logic and Design',
                questions: typeof IFT211_QUESTIONS !== 'undefined' ? IFT211_QUESTIONS : [],
                explanations: typeof IFT211_EXPLANATIONS !== 'undefined' ? IFT211_EXPLANATIONS : {}
            },
            'SEN201': {
                title: 'SEN201',
                subtitle: 'Software Engineering',
                questions: typeof SEN201_QUESTIONS !== 'undefined' ? SEN201_QUESTIONS : [],
                explanations: typeof SEN201_EXPLANATIONS !== 'undefined' ? SEN201_EXPLANATIONS : {}
            },
            'CSC203': {
                title: 'CSC203',
                subtitle: 'Discrete Structures',
                questions: typeof CSC203_QUESTIONS !== 'undefined' ? CSC203_QUESTIONS : [],
                explanations: typeof CSC203_EXPLANATIONS !== 'undefined' ? CSC203_EXPLANATIONS : {}
            },
            'MAT201_STUDY': {
                title: 'MAT201 Study Mode',
                subtitle: 'Mathematics - Learn with Solutions',
                questions: typeof MAT201_QUESTIONS !== 'undefined' ? MAT201_QUESTIONS : [],
                isStudyMode: true
            },
            'MAT201_EXAM': {
                title: 'MAT201 Exam',
                subtitle: 'Mathematics - Test Yourself',
                questions: typeof MAT201_QUESTIONS !== 'undefined' ? MAT201_QUESTIONS : []
            }
        };
        
        this.init();
    }
    
    init() {
        this.setupEventListeners();
        this.updateCourseAvailability();
    }
    
    updateCourseAvailability() {
        // All courses are now available
    }
    
    setupEventListeners() {
        // Course selection
        document.querySelectorAll('.course-card').forEach(card => {
            card.addEventListener('click', () => {
                this.selectCourse(card.dataset.course);
            });
        });
        
        document.getElementById('registrationForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.startExam();
        });
        
        document.getElementById('prevBtn').addEventListener('click', () => this.previousQuestion());
        document.getElementById('nextBtn').addEventListener('click', () => this.nextQuestion());
        document.getElementById('submitBtn').addEventListener('click', () => this.confirmSubmit());
        document.getElementById('retakeBtn').addEventListener('click', () => this.retakeExam());
        document.getElementById('backToCourseBtn').addEventListener('click', () => this.showScreen('courseSelectionScreen'));
        document.getElementById('backToTopicsBtn').addEventListener('click', () => this.showTopicSelection());
        document.getElementById('startPracticeBtn').addEventListener('click', () => this.startTopicPractice());
    }
    
    selectCourse(courseCode) {
        this.selectedCourse = courseCode;
        const course = this.courseData[courseCode];
        
        document.getElementById('courseTitle').textContent = course.title;
        document.getElementById('courseSubtitle').textContent = course.subtitle;
        
        // For study mode, show topic selection
        if (course.isStudyMode) {
            this.showTopicSelection();
        } else {
            this.showScreen('registrationScreen');
        }
    }
    
    showTopicSelection() {
        this.showScreen('topicSelectionScreen');
        this.loadTopics();
    }
    
    loadTopics() {
        const grid = document.getElementById('topicsGrid');
        grid.innerHTML = '';
        
        if (typeof MAT201_TOPICS === 'undefined') {
            grid.innerHTML = '<p>Topics not loaded</p>';
            return;
        }
        
        MAT201_TOPICS.forEach(topic => {
            const card = document.createElement('div');
            card.className = 'topic-card';
            card.innerHTML = `
                <span class="topic-icon">${topic.icon}</span>
                <h3>${topic.name}</h3>
                <p>${topic.examples.length} example questions</p>
            `;
            card.addEventListener('click', () => this.showTopicExplanation(topic));
            grid.appendChild(card);
        });
    }
    
    showTopicExplanation(topic) {
        this.selectedTopic = topic;
        this.showScreen('topicExplanationScreen');
        
        const content = document.getElementById('topicExplanationContent');
        content.innerHTML = `
            <h2 style="color: var(--primary-color); margin-bottom: 20px;">
                ${topic.icon} ${topic.name}
            </h2>
            ${topic.explanation}
            <div style="margin-top: 30px; padding: 20px; background: #f8f9fa; border-radius: 8px;">
                <h4 style="margin-top: 0;">📝 Practice Questions Available</h4>
                <p>This topic has <strong>${topic.examples.length} example questions</strong> from past exams.</p>
                <p>Click "Start Practice Questions" below to see these questions with detailed solutions.</p>
            </div>
        `;
    }
    
    startTopicPractice() {
        if (!this.selectedTopic) return;
        
        const allQuestions = this.courseData[this.selectedCourse].questions;
        
        // Filter questions by the example question numbers for this topic
        this.examQuestions = this.selectedTopic.examples
            .map(qNum => allQuestions.find(q => q.id === qNum))
            .filter(q => q !== undefined);
        
        if (this.examQuestions.length === 0) {
            alert('No questions available for this topic yet.');
            return;
        }
        
        this.currentQuestionIndex = 0;
        this.userAnswers = new Array(this.examQuestions.length).fill(null);
        
        this.showScreen('examScreen');
        document.getElementById('displayName').textContent = this.selectedTopic.name;
        document.getElementById('displayMatric').textContent = 'Study Mode';
        document.querySelector('.timer-container').style.display = 'none';
        document.getElementById('submitBtn').textContent = 'Back to Topics';
        document.getElementById('submitBtn').onclick = () => this.showTopicSelection();
        
        this.displayQuestion();
        this.createQuestionGrid();
    }
    
    startExam() {
        this.studentName = document.getElementById('studentName').value.trim();
        this.matricNumber = document.getElementById('matricNumber').value.trim();
        
        if (!this.studentName || !this.matricNumber) {
            alert('Please fill in all fields');
            return;
        }
        
        if (!this.selectedCourse) {
            alert('Please select a course first');
            return;
        }
        
        const courseQuestions = this.courseData[this.selectedCourse].questions;
        
        // Check if questions are available
        if (!courseQuestions || courseQuestions.length === 0) {
            alert(`Sorry! ${this.courseData[this.selectedCourse].title} questions are not available yet. Please check back later or contact the administrator.`);
            this.showScreen('courseSelectionScreen');
            return;
        }
        
        // Check if we have enough questions
        if (courseQuestions.length < 50) {
            alert(`This course only has ${courseQuestions.length} questions available. The exam will use all available questions.`);
        }
        
        const questionsToUse = Math.min(50, courseQuestions.length);
        this.examQuestions = this.selectRandomQuestions(courseQuestions, questionsToUse);
        this.userAnswers = new Array(questionsToUse).fill(null);
        this.startTime = new Date();
        
        this.showScreen('examScreen');
        this.displayStudentInfo();
        this.startTimer();
        this.displayQuestion();
        this.createQuestionGrid();
    }
    
    selectRandomQuestions(questions, count) {
        const shuffled = [...questions].sort(() => Math.random() - 0.5);
        return shuffled.slice(0, count);
    }
    
    showScreen(screenId) {
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
        document.getElementById(screenId).classList.add('active');
    }
    
    displayStudentInfo() {
        document.getElementById('displayName').textContent = this.studentName;
        document.getElementById('displayMatric').textContent = this.matricNumber;
    }
    
    startTimer() {
        this.updateTimerDisplay();
        
        this.timerInterval = setInterval(() => {
            this.timeRemaining--;
            this.updateTimerDisplay();
            
            if (this.timeRemaining <= 0) {
                clearInterval(this.timerInterval);
                this.autoSubmit();
            }
        }, 1000);
    }
    
    updateTimerDisplay() {
        const minutes = Math.floor(this.timeRemaining / 60);
        const seconds = this.timeRemaining % 60;
        const display = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        
        const timerElement = document.getElementById('timer');
        timerElement.textContent = display;
        
        if (this.timeRemaining <= 60) {
            timerElement.className = 'timer danger';
        } else if (this.timeRemaining <= 300) {
            timerElement.className = 'timer warning';
        } else {
            timerElement.className = 'timer';
        }
    }
    
    displayQuestion() {
        const question = this.examQuestions[this.currentQuestionIndex];
        const isStudyMode = this.courseData[this.selectedCourse]?.isStudyMode;
        
        document.getElementById('questionText').textContent = question.question;
        document.getElementById('currentQuestion').textContent = this.currentQuestionIndex + 1;
        document.getElementById('totalQuestions').textContent = this.examQuestions.length;
        
        const optionsContainer = document.getElementById('optionsContainer');
        optionsContainer.innerHTML = '';
        
        question.options.forEach((option, index) => {
            const optionDiv = document.createElement('div');
            optionDiv.className = 'option';
            
            // In study mode, always highlight correct answer
            if (isStudyMode && index === question.correct) {
                optionDiv.classList.add('correct-answer');
                optionDiv.innerHTML = '<span style="font-weight: bold; color: #fff;">✓ CORRECT:</span> ' + option;
            } else {
                optionDiv.textContent = option;
            }
            
            // Show user's selection (if any)
            if (this.userAnswers[this.currentQuestionIndex] === index) {
                optionDiv.classList.add('selected');
            }
            
            optionDiv.addEventListener('click', () => this.selectOption(index));
            optionsContainer.appendChild(optionDiv);
        });
        
        // Show explanation in study mode
        if (isStudyMode && question.explanation) {
            const explanationDiv = document.createElement('div');
            explanationDiv.className = 'explanation-box';
            explanationDiv.innerHTML = `
                <h4>📖 How to Solve:</h4>
                <div style="line-height: 1.8;">${question.explanation}</div>
            `;
            optionsContainer.appendChild(explanationDiv);
        }
        
        this.updateProgress();
        this.updateNavigationButtons();
        this.updateQuestionGrid();
    }
    
    selectOption(optionIndex) {
        this.userAnswers[this.currentQuestionIndex] = optionIndex;
        
        document.querySelectorAll('.option').forEach((opt, idx) => {
            if (idx === optionIndex) {
                opt.classList.add('selected');
            } else {
                opt.classList.remove('selected');
            }
        });
        
        this.updateQuestionGrid();
    }
    
    updateProgress() {
        const progress = ((this.currentQuestionIndex + 1) / this.examQuestions.length) * 100;
        document.getElementById('progressFill').style.width = progress + '%';
    }
    
    updateNavigationButtons() {
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const submitBtn = document.getElementById('submitBtn');
        
        prevBtn.style.display = this.currentQuestionIndex === 0 ? 'none' : 'inline-block';
        
        if (this.currentQuestionIndex === this.examQuestions.length - 1) {
            nextBtn.style.display = 'none';
            submitBtn.style.display = 'inline-block';
        } else {
            nextBtn.style.display = 'inline-block';
            submitBtn.style.display = 'none';
        }
    }
    
    createQuestionGrid() {
        const grid = document.getElementById('questionGrid');
        grid.innerHTML = '';
        
        this.examQuestions.forEach((_, index) => {
            const numberDiv = document.createElement('div');
            numberDiv.className = 'question-number';
            numberDiv.textContent = index + 1;
            
            if (this.userAnswers[index] !== null) {
                numberDiv.classList.add('answered');
            }
            
            if (index === this.currentQuestionIndex) {
                numberDiv.classList.add('current');
            }
            
            numberDiv.addEventListener('click', () => this.jumpToQuestion(index));
            grid.appendChild(numberDiv);
        });
    }
    
    updateQuestionGrid() {
        const numbers = document.querySelectorAll('.question-number');
        numbers.forEach((num, index) => {
            num.className = 'question-number';
            
            if (this.userAnswers[index] !== null) {
                num.classList.add('answered');
            }
            
            if (index === this.currentQuestionIndex) {
                num.classList.add('current');
            }
        });
    }
    
    jumpToQuestion(index) {
        this.currentQuestionIndex = index;
        this.displayQuestion();
    }
    
    previousQuestion() {
        if (this.currentQuestionIndex > 0) {
            this.currentQuestionIndex--;
            this.displayQuestion();
        }
    }
    
    nextQuestion() {
        if (this.currentQuestionIndex < this.examQuestions.length - 1) {
            this.currentQuestionIndex++;
            this.displayQuestion();
        }
    }
    
    confirmSubmit() {
        const unanswered = this.userAnswers.filter(ans => ans === null).length;
        
        if (unanswered > 0) {
            const confirm = window.confirm(
                `You have ${unanswered} unanswered question(s). Do you want to submit anyway?`
            );
            if (!confirm) return;
        }
        
        this.submitExam();
    }
    
    autoSubmit() {
        alert('Time is up! Your exam will be submitted automatically.');
        this.submitExam();
    }
    
    submitExam() {
        clearInterval(this.timerInterval);
        const endTime = new Date();
        const timeTaken = Math.floor((endTime - this.startTime) / 1000);
        
        this.calculateResults(timeTaken);
    }

    calculateResults(timeTaken) {
        let correctCount = 0;
        const topicPerformance = {};
        const reviewData = [];
        
        this.examQuestions.forEach((question, index) => {
            const userAnswer = this.userAnswers[index];
            const isCorrect = userAnswer === question.correct;
            
            if (isCorrect) correctCount++;
            
            if (!topicPerformance[question.topic]) {
                topicPerformance[question.topic] = { correct: 0, total: 0 };
            }
            topicPerformance[question.topic].total++;
            if (isCorrect) topicPerformance[question.topic].correct++;
            
            reviewData.push({
                questionNumber: index + 1,
                question: question.question,
                userAnswer: userAnswer !== null ? question.options[userAnswer] : 'Not answered',
                correctAnswer: question.options[question.correct],
                isCorrect: isCorrect,
                topic: question.topic,
                explanation: question.explanation || 'No explanation available'
            });
        });
        
        const percentage = Math.round((correctCount / this.examQuestions.length) * 100);
        const grade = this.calculateGrade(percentage);
        
        this.displayResults({
            correctCount,
            wrongCount: this.examQuestions.length - correctCount,
            percentage,
            grade,
            timeTaken,
            topicPerformance,
            reviewData
        });
    }
    
    calculateGrade(percentage) {
        if (percentage >= 90) return 'A+';
        if (percentage >= 85) return 'A';
        if (percentage >= 80) return 'A-';
        if (percentage >= 75) return 'B+';
        if (percentage >= 70) return 'B';
        if (percentage >= 65) return 'B-';
        if (percentage >= 60) return 'C+';
        if (percentage >= 55) return 'C';
        if (percentage >= 50) return 'C-';
        if (percentage >= 45) return 'D+';
        if (percentage >= 40) return 'D';
        return 'F';
    }
    
    displayResults(results) {
        this.showScreen('resultsScreen');
        
        document.getElementById('resultName').textContent = this.studentName;
        document.getElementById('resultMatric').textContent = this.matricNumber;
        document.getElementById('scorePercentage').textContent = results.percentage + '%';
        document.getElementById('totalQuestionsResult').textContent = this.examQuestions.length;
        document.getElementById('correctAnswers').textContent = results.correctCount;
        document.getElementById('wrongAnswers').textContent = results.wrongCount;
        document.getElementById('grade').textContent = results.grade;
        
        const minutes = Math.floor(results.timeTaken / 60);
        const seconds = results.timeTaken % 60;
        document.getElementById('timeTaken').textContent = 
            `${minutes} min ${seconds} sec`;
        
        this.displayTopicBreakdown(results.topicPerformance);
        this.displayAnswerReview(results.reviewData);
    }
    
    displayTopicBreakdown(topicPerformance) {
        const container = document.getElementById('topicBreakdown');
        container.innerHTML = '';
        
        Object.keys(topicPerformance).sort().forEach(topic => {
            const data = topicPerformance[topic];
            const percentage = Math.round((data.correct / data.total) * 100);
            
            const topicDiv = document.createElement('div');
            topicDiv.className = 'topic-item';
            topicDiv.innerHTML = `
                <span class="topic-name">${topic}</span>
                <span class="topic-score">${data.correct}/${data.total} (${percentage}%)</span>
            `;
            container.appendChild(topicDiv);
        });
    }
    
    displayAnswerReview(reviewData) {
        const container = document.getElementById('answerReview');
        container.innerHTML = '';
        
        const course = this.courseData[this.selectedCourse];
        const explanations = course?.explanations || {};
        
        reviewData.forEach(item => {
            const reviewDiv = document.createElement('div');
            reviewDiv.className = `review-item ${item.isCorrect ? 'correct' : 'wrong'}`;
            
            // Get explanation from separate file if available, otherwise use embedded explanation
            const question = this.examQuestions.find(q => q.question === item.question);
            let explanation = item.explanation;
            
            if (question && question.id && explanations[question.id]) {
                explanation = explanations[question.id];
            }
            
            reviewDiv.innerHTML = `
                <div class="review-question">
                    <strong>Q${item.questionNumber}:</strong> ${item.question}
                </div>
                <div class="review-answer ${item.isCorrect ? '' : 'wrong-answer'}">
                    <strong>Your Answer:</strong> ${item.userAnswer}
                </div>
                ${!item.isCorrect ? `
                    <div class="review-answer correct-answer">
                        <strong>Correct Answer:</strong> ${item.correctAnswer}
                    </div>
                ` : ''}
                <div class="explanation">
                    <strong>Explanation:</strong> ${explanation}
                </div>
                <div style="font-size: 0.85rem; color: var(--text-secondary); margin-top: 5px;">
                    <strong>Topic:</strong> ${item.topic}
                </div>
            `;
            
            container.appendChild(reviewDiv);
        });
    }
    
    
    startStudyMode() {
        const courseQuestions = this.courseData[this.selectedCourse].questions;
        this.examQuestions = courseQuestions; // Use all questions
        this.currentQuestionIndex = 0;
        this.userAnswers = new Array(this.examQuestions.length).fill(null);
        
        this.showScreen('examScreen');
        document.getElementById('displayName').textContent = 'Study Mode';
        document.getElementById('displayMatric').textContent = '';
        document.querySelector('.timer-container').style.display = 'none'; // Hide timer
        document.getElementById('submitBtn').textContent = 'Finish Study';
        
        this.displayQuestion();
        this.createQuestionGrid();
    }
    
    retakeExam() {
        if (confirm('Are you sure you want to retake the exam? This will start a new exam with different questions.')) {
            this.currentQuestionIndex = 0;
            this.userAnswers = [];
            this.timeRemaining = 25 * 60;
            this.examQuestions = [];
            this.selectedCourse = null;
            
            this.showScreen('courseSelectionScreen');
            document.getElementById('registrationForm').reset();
        }
    }
}

// ===================== PORTAL SWITCHER =====================
function switchPortal(target) {
    const myPortal = document.getElementById('myExamPortal');
    const friendPortal = document.getElementById('friendExamPortal');
    const toFriendBtn = document.getElementById('switchToFriendBtn');
    const toMyBtn = document.getElementById('switchToMyBtn');

    if (target === 'friend') {
        myPortal.classList.remove('active-portal');
        friendPortal.classList.add('active-portal');
        toFriendBtn.style.display = 'none';
        toMyBtn.style.display = 'inline-block';
    } else {
        friendPortal.classList.remove('active-portal');
        myPortal.classList.add('active-portal');
        toMyBtn.style.display = 'none';
        toFriendBtn.style.display = 'inline-block';
    }
    window.scrollTo(0, 0);
}

document.addEventListener('DOMContentLoaded', () => {
    new ExamSystem();
    new FriendExamSystem();
});

// ===================== FRIEND EXAM SYSTEM =====================
class FriendExamSystem {
    constructor() {
        this.studentName = '';
        this.matricNumber = '';
        this.examQuestions = [];
        this.currentQuestionIndex = 0;
        this.userAnswers = [];
        this.timeRemaining = 25 * 60;
        this.timerInterval = null;
        this.startTime = null;
        this.selectedCourse = null;

        this.courseData = {
            'CSS242': { title: 'CSS242', subtitle: 'Measurements & Patterns of Crime and Delinquency', questions: typeof CSS242_QUESTIONS !== 'undefined' ? CSS242_QUESTIONS : [] },
            'CSS212': { title: 'CSS212', subtitle: 'The Sociology of Punishment and Corrections', questions: typeof CSS212_QUESTIONS !== 'undefined' ? CSS212_QUESTIONS : [] },
            'CSS244': { title: 'CSS244', subtitle: 'Types and Analysis of Security Threats', questions: typeof CSS244_QUESTIONS !== 'undefined' ? CSS244_QUESTIONS : [] },
            'CSS246': { title: 'CSS246', subtitle: 'Legal and Social Framework of Private Security Services in Nigeria', questions: typeof CSS246_QUESTIONS !== 'undefined' ? CSS246_QUESTIONS : [] },
            'CIT104': { title: 'CIT104', subtitle: 'Introduction to Computers', questions: typeof CIT104_QUESTIONS !== 'undefined' ? CIT104_QUESTIONS : [] },
            'GST202': { title: 'GST202', subtitle: 'Fundamentals of Peace Studies and Conflict Resolution', questions: typeof GST202_QUESTIONS !== 'undefined' ? GST202_QUESTIONS : [] },
            'GST203': { title: 'GST203', subtitle: 'Introduction to Philosophy and Logic', questions: typeof GST203_QUESTIONS !== 'undefined' ? GST203_QUESTIONS : [] },
            'GST204': { title: 'GST204', subtitle: 'Entrepreneurship and Innovation', questions: typeof GST204_QUESTIONS !== 'undefined' ? GST204_QUESTIONS : [] },
            'JIL100': { title: 'JIL100', subtitle: 'Introduction to Nigerian Law', questions: typeof JIL100_QUESTIONS !== 'undefined' ? JIL100_QUESTIONS : [] }
        };

        this.init();
    }

    init() {
        document.querySelectorAll('.f-card').forEach(card => {
            card.addEventListener('click', () => this.selectCourse(card.dataset.course));
        });
        document.getElementById('f_registrationForm').addEventListener('submit', (e) => { e.preventDefault(); this.startExam(); });
        document.getElementById('f_backToCourseBtn').addEventListener('click', () => this.showScreen('f_courseSelectionScreen'));
        document.getElementById('f_prevBtn').addEventListener('click', () => this.previousQuestion());
        document.getElementById('f_nextBtn').addEventListener('click', () => this.nextQuestion());
        document.getElementById('f_submitBtn').addEventListener('click', () => this.confirmSubmit());
        document.getElementById('f_retakeBtn').addEventListener('click', () => this.retakeExam());
        document.getElementById('f_newCourseBtn').addEventListener('click', () => this.showScreen('f_courseSelectionScreen'));
    }

    selectCourse(courseCode) {
        this.selectedCourse = courseCode;
        const course = this.courseData[courseCode];
        document.getElementById('f_courseTitle').textContent = course.title;
        document.getElementById('f_courseSubtitle').textContent = course.subtitle;
        this.showScreen('f_registrationScreen');
    }

    startExam() {
        this.studentName = document.getElementById('f_studentName').value.trim();
        this.matricNumber = document.getElementById('f_matricNumber').value.trim();
        if (!this.studentName || !this.matricNumber) { alert('Please fill in all fields'); return; }

        const courseQuestions = this.courseData[this.selectedCourse].questions;
        if (!courseQuestions || courseQuestions.length === 0) {
            alert(`Sorry! ${this.courseData[this.selectedCourse].title} questions are not available yet.`);
            this.showScreen('f_courseSelectionScreen');
            return;
        }

        const questionsToUse = Math.min(50, courseQuestions.length);
        this.examQuestions = this.selectRandomQuestions(courseQuestions, questionsToUse);
        this.userAnswers = new Array(questionsToUse).fill(null);
        this.timeRemaining = 25 * 60;
        this.startTime = new Date();

        this.showScreen('f_examScreen');
        document.getElementById('f_displayName').textContent = this.studentName;
        document.getElementById('f_displayMatric').textContent = this.matricNumber;
        this.startTimer();
        this.displayQuestion();
        this.createQuestionGrid();
    }

    selectRandomQuestions(questions, count) {
        return [...questions].sort(() => Math.random() - 0.5).slice(0, count);
    }

    showScreen(screenId) {
        document.querySelectorAll('#friendExamPortal .screen').forEach(s => s.classList.remove('active'));
        document.getElementById(screenId).classList.add('active');
        window.scrollTo(0, 0);
    }

    startTimer() {
        clearInterval(this.timerInterval);
        this.updateTimerDisplay();
        this.timerInterval = setInterval(() => {
            this.timeRemaining--;
            this.updateTimerDisplay();
            if (this.timeRemaining <= 0) { clearInterval(this.timerInterval); this.autoSubmit(); }
        }, 1000);
    }

    updateTimerDisplay() {
        const m = Math.floor(this.timeRemaining / 60);
        const s = this.timeRemaining % 60;
        const el = document.getElementById('f_timer');
        el.textContent = `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
        el.className = this.timeRemaining <= 60 ? 'timer danger' : this.timeRemaining <= 300 ? 'timer warning' : 'timer';
    }

    displayQuestion() {
        const q = this.examQuestions[this.currentQuestionIndex];
        document.getElementById('f_questionText').textContent = q.question;
        document.getElementById('f_currentQuestion').textContent = this.currentQuestionIndex + 1;
        document.getElementById('f_totalQuestions').textContent = this.examQuestions.length;

        const container = document.getElementById('f_optionsContainer');
        container.innerHTML = '';
        q.options.forEach((option, index) => {
            const div = document.createElement('div');
            div.className = 'option';
            div.textContent = option;
            if (this.userAnswers[this.currentQuestionIndex] === index) div.classList.add('selected');
            div.addEventListener('click', () => this.selectOption(index));
            container.appendChild(div);
        });

        const pct = ((this.currentQuestionIndex + 1) / this.examQuestions.length) * 100;
        document.getElementById('f_progressFill').style.width = pct + '%';
        this.updateNavigationButtons();
        this.updateQuestionGrid();
    }

    selectOption(index) {
        this.userAnswers[this.currentQuestionIndex] = index;
        document.querySelectorAll('#f_optionsContainer .option').forEach((o, i) => o.classList.toggle('selected', i === index));
        this.updateQuestionGrid();
    }

    updateNavigationButtons() {
        document.getElementById('f_prevBtn').style.display = this.currentQuestionIndex === 0 ? 'none' : 'inline-block';
        const isLast = this.currentQuestionIndex === this.examQuestions.length - 1;
        document.getElementById('f_nextBtn').style.display = isLast ? 'none' : 'inline-block';
        document.getElementById('f_submitBtn').style.display = isLast ? 'inline-block' : 'none';
    }

    createQuestionGrid() {
        const grid = document.getElementById('f_questionGrid');
        grid.innerHTML = '';
        this.examQuestions.forEach((_, i) => {
            const div = document.createElement('div');
            div.className = 'question-number';
            div.textContent = i + 1;
            if (this.userAnswers[i] !== null) div.classList.add('answered');
            if (i === this.currentQuestionIndex) div.classList.add('current');
            div.addEventListener('click', () => { this.currentQuestionIndex = i; this.displayQuestion(); });
            grid.appendChild(div);
        });
    }

    updateQuestionGrid() {
        document.querySelectorAll('#f_questionGrid .question-number').forEach((n, i) => {
            n.className = 'question-number';
            if (this.userAnswers[i] !== null) n.classList.add('answered');
            if (i === this.currentQuestionIndex) n.classList.add('current');
        });
    }

    previousQuestion() { if (this.currentQuestionIndex > 0) { this.currentQuestionIndex--; this.displayQuestion(); } }
    nextQuestion() { if (this.currentQuestionIndex < this.examQuestions.length - 1) { this.currentQuestionIndex++; this.displayQuestion(); } }

    confirmSubmit() {
        const unanswered = this.userAnswers.filter(a => a === null).length;
        if (unanswered > 0 && !confirm(`You have ${unanswered} unanswered question(s). Submit anyway?`)) return;
        this.submitExam();
    }

    autoSubmit() { alert('Time is up! Your exam will be submitted automatically.'); this.submitExam(); }

    submitExam() {
        clearInterval(this.timerInterval);
        const timeTaken = Math.floor((new Date() - this.startTime) / 1000);
        let correctCount = 0;
        const topicPerformance = {};
        const reviewData = [];

        this.examQuestions.forEach((q, i) => {
            const isCorrect = this.userAnswers[i] === q.correct;
            if (isCorrect) correctCount++;
            if (!topicPerformance[q.topic]) topicPerformance[q.topic] = { correct: 0, total: 0 };
            topicPerformance[q.topic].total++;
            if (isCorrect) topicPerformance[q.topic].correct++;
            reviewData.push({
                questionNumber: i + 1,
                question: q.question,
                userAnswer: this.userAnswers[i] !== null ? q.options[this.userAnswers[i]] : 'Not answered',
                correctAnswer: q.options[q.correct],
                isCorrect,
                topic: q.topic,
                explanation: q.explanation || 'No explanation available'
            });
        });

        const percentage = Math.round((correctCount / this.examQuestions.length) * 100);
        this.showScreen('f_resultsScreen');
        document.getElementById('f_resultName').textContent = this.studentName;
        document.getElementById('f_resultMatric').textContent = this.matricNumber;
        document.getElementById('f_scorePercentage').textContent = percentage + '%';
        document.getElementById('f_totalQuestionsResult').textContent = this.examQuestions.length;
        document.getElementById('f_correctAnswers').textContent = correctCount;
        document.getElementById('f_wrongAnswers').textContent = this.examQuestions.length - correctCount;
        document.getElementById('f_grade').textContent = this.calculateGrade(percentage);
        const m = Math.floor(timeTaken / 60), s = timeTaken % 60;
        document.getElementById('f_timeTaken').textContent = `${m} min ${s} sec`;

        // Topic breakdown
        const tb = document.getElementById('f_topicBreakdown');
        tb.innerHTML = '';
        Object.keys(topicPerformance).sort().forEach(topic => {
            const d = topicPerformance[topic];
            const p = Math.round((d.correct / d.total) * 100);
            tb.innerHTML += `<div class="topic-item"><span class="topic-name">${topic}</span><span class="topic-score">${d.correct}/${d.total} (${p}%)</span></div>`;
        });

        // Answer review with explanations
        const ar = document.getElementById('f_answerReview');
        ar.innerHTML = '';
        reviewData.forEach(item => {
            ar.innerHTML += `
                <div class="review-item ${item.isCorrect ? 'correct' : 'wrong'}">
                    <div class="review-question"><strong>Q${item.questionNumber}:</strong> ${item.question}</div>
                    <div class="review-answer ${item.isCorrect ? '' : 'wrong-answer'}"><strong>Your Answer:</strong> ${item.userAnswer}</div>
                    ${!item.isCorrect ? `<div class="review-answer correct-answer"><strong>Correct Answer:</strong> ${item.correctAnswer}</div>` : ''}
                    <div class="explanation"><strong>Explanation:</strong> ${item.explanation}</div>
                    <div style="font-size:0.85rem;color:#858591;margin-top:5px;"><strong>Topic:</strong> ${item.topic}</div>
                </div>`;
        });
    }

    calculateGrade(p) {
        if (p >= 90) return 'A+'; if (p >= 85) return 'A'; if (p >= 80) return 'A-';
        if (p >= 75) return 'B+'; if (p >= 70) return 'B'; if (p >= 65) return 'B-';
        if (p >= 60) return 'C+'; if (p >= 55) return 'C'; if (p >= 50) return 'C-';
        if (p >= 45) return 'D+'; if (p >= 40) return 'D'; return 'F';
    }

    retakeExam() {
        if (confirm('Start a new exam with different questions?')) {
            this.currentQuestionIndex = 0;
            this.userAnswers = [];
            this.timeRemaining = 25 * 60;
            this.examQuestions = [];
            document.getElementById('f_registrationForm').reset();
            this.showScreen('f_registrationScreen');
        }
    }
}
