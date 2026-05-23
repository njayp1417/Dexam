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

        this.courseData = {
            'CSS242': {
                title: 'CSS242',
                subtitle: 'Measurements & Patterns of Crime and Delinquency',
                questions: typeof CSS242_QUESTIONS !== 'undefined' ? CSS242_QUESTIONS : []
            },
            'CSS212': {
                title: 'CSS212',
                subtitle: 'The Sociology of Punishment and Corrections',
                questions: typeof CSS212_QUESTIONS !== 'undefined' ? CSS212_QUESTIONS : []
            },
            'CSS244': {
                title: 'CSS244',
                subtitle: 'Types and Analysis of Security Threats',
                questions: typeof CSS244_QUESTIONS !== 'undefined' ? CSS244_QUESTIONS : []
            },
            'CSS246': {
                title: 'CSS246',
                subtitle: 'Legal and Social Framework of Private Security Services in Nigeria',
                questions: typeof CSS246_QUESTIONS !== 'undefined' ? CSS246_QUESTIONS : []
            },
            'CIT104': {
                title: 'CIT104',
                subtitle: 'Introduction to Computers',
                questions: typeof CIT104_QUESTIONS !== 'undefined' ? CIT104_QUESTIONS : []
            },
            'GST202': {
                title: 'GST202',
                subtitle: 'Fundamentals of Peace Studies and Conflict Resolution',
                questions: typeof GST202_QUESTIONS !== 'undefined' ? GST202_QUESTIONS : []
            },
            'GST203': {
                title: 'GST203',
                subtitle: 'Introduction to Philosophy and Logic',
                questions: typeof GST203_QUESTIONS !== 'undefined' ? GST203_QUESTIONS : []
            },
            'GST204': {
                title: 'GST204',
                subtitle: 'Entrepreneurship and Innovation',
                questions: typeof GST204_QUESTIONS !== 'undefined' ? GST204_QUESTIONS : []
            },
            'JIL100': {
                title: 'JIL100',
                subtitle: 'Introduction to Nigerian Law',
                questions: typeof JIL100_QUESTIONS !== 'undefined' ? JIL100_QUESTIONS : []
            }
        };

        this.init();
    }

    init() {
        this.setupEventListeners();
    }

    setupEventListeners() {
        document.querySelectorAll('.course-card').forEach(card => {
            card.addEventListener('click', () => this.selectCourse(card.dataset.course));
        });

        document.getElementById('registrationForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.startExam();
        });

        document.getElementById('backToCourseBtn').addEventListener('click', () => {
            this.showScreen('courseSelectionScreen');
        });

        document.getElementById('prevBtn').addEventListener('click', () => this.previousQuestion());
        document.getElementById('nextBtn').addEventListener('click', () => this.nextQuestion());
        document.getElementById('submitBtn').addEventListener('click', () => this.confirmSubmit());
        document.getElementById('retakeBtn').addEventListener('click', () => this.retakeExam());
        document.getElementById('newCourseBtn').addEventListener('click', () => {
            this.showScreen('courseSelectionScreen');
        });
    }

    selectCourse(courseCode) {
        this.selectedCourse = courseCode;
        const course = this.courseData[courseCode];
        document.getElementById('courseTitle').textContent = course.title;
        document.getElementById('courseSubtitle').textContent = course.subtitle;
        this.showScreen('registrationScreen');
    }

    startExam() {
        this.studentName = document.getElementById('studentName').value.trim();
        this.matricNumber = document.getElementById('matricNumber').value.trim();

        if (!this.studentName || !this.matricNumber) {
            alert('Please fill in all fields');
            return;
        }

        const courseQuestions = this.courseData[this.selectedCourse].questions;

        if (!courseQuestions || courseQuestions.length === 0) {
            alert(`Sorry! ${this.courseData[this.selectedCourse].title} questions are not available yet.`);
            this.showScreen('courseSelectionScreen');
            return;
        }

        const questionsToUse = Math.min(50, courseQuestions.length);
        this.examQuestions = this.selectRandomQuestions(courseQuestions, questionsToUse);
        this.userAnswers = new Array(questionsToUse).fill(null);
        this.timeRemaining = 25 * 60;
        this.startTime = new Date();

        // Reset timer display
        document.querySelector('.timer-container').style.display = 'flex';
        document.getElementById('submitBtn').textContent = 'Submit Exam';
        document.getElementById('submitBtn').onclick = () => this.confirmSubmit();

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
        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
        document.getElementById(screenId).classList.add('active');
        window.scrollTo(0, 0);
    }

    displayStudentInfo() {
        document.getElementById('displayName').textContent = this.studentName;
        document.getElementById('displayMatric').textContent = this.matricNumber;
    }

    startTimer() {
        clearInterval(this.timerInterval);
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
        const timerEl = document.getElementById('timer');
        timerEl.textContent = display;
        if (this.timeRemaining <= 60) {
            timerEl.className = 'timer danger';
        } else if (this.timeRemaining <= 300) {
            timerEl.className = 'timer warning';
        } else {
            timerEl.className = 'timer';
        }
    }

    displayQuestion() {
        const question = this.examQuestions[this.currentQuestionIndex];

        document.getElementById('questionText').textContent = question.question;
        document.getElementById('currentQuestion').textContent = this.currentQuestionIndex + 1;
        document.getElementById('totalQuestions').textContent = this.examQuestions.length;

        const optionsContainer = document.getElementById('optionsContainer');
        optionsContainer.innerHTML = '';

        question.options.forEach((option, index) => {
            const optionDiv = document.createElement('div');
            optionDiv.className = 'option';
            optionDiv.textContent = option;

            if (this.userAnswers[this.currentQuestionIndex] === index) {
                optionDiv.classList.add('selected');
            }

            optionDiv.addEventListener('click', () => this.selectOption(index));
            optionsContainer.appendChild(optionDiv);
        });

        this.updateProgress();
        this.updateNavigationButtons();
        this.updateQuestionGrid();
    }

    selectOption(optionIndex) {
        this.userAnswers[this.currentQuestionIndex] = optionIndex;
        document.querySelectorAll('.option').forEach((opt, idx) => {
            opt.classList.toggle('selected', idx === optionIndex);
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
            const div = document.createElement('div');
            div.className = 'question-number';
            div.textContent = index + 1;
            if (this.userAnswers[index] !== null) div.classList.add('answered');
            if (index === this.currentQuestionIndex) div.classList.add('current');
            div.addEventListener('click', () => this.jumpToQuestion(index));
            grid.appendChild(div);
        });
    }

    updateQuestionGrid() {
        document.querySelectorAll('.question-number').forEach((num, index) => {
            num.className = 'question-number';
            if (this.userAnswers[index] !== null) num.classList.add('answered');
            if (index === this.currentQuestionIndex) num.classList.add('current');
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
        const unanswered = this.userAnswers.filter(a => a === null).length;
        if (unanswered > 0) {
            if (!window.confirm(`You have ${unanswered} unanswered question(s). Submit anyway?`)) return;
        }
        this.submitExam();
    }

    autoSubmit() {
        alert('Time is up! Your exam will be submitted automatically.');
        this.submitExam();
    }

    submitExam() {
        clearInterval(this.timerInterval);
        const timeTaken = Math.floor((new Date() - this.startTime) / 1000);
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
                isCorrect,
                topic: question.topic,
                explanation: question.explanation || 'No explanation available'
            });
        });

        const percentage = Math.round((correctCount / this.examQuestions.length) * 100);

        this.displayResults({
            correctCount,
            wrongCount: this.examQuestions.length - correctCount,
            percentage,
            grade: this.calculateGrade(percentage),
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
        document.getElementById('timeTaken').textContent = `${minutes} min ${seconds} sec`;

        this.displayTopicBreakdown(results.topicPerformance);
        this.displayAnswerReview(results.reviewData);
    }

    displayTopicBreakdown(topicPerformance) {
        const container = document.getElementById('topicBreakdown');
        container.innerHTML = '';
        Object.keys(topicPerformance).sort().forEach(topic => {
            const data = topicPerformance[topic];
            const pct = Math.round((data.correct / data.total) * 100);
            const div = document.createElement('div');
            div.className = 'topic-item';
            div.innerHTML = `
                <span class="topic-name">${topic}</span>
                <span class="topic-score">${data.correct}/${data.total} (${pct}%)</span>
            `;
            container.appendChild(div);
        });
    }

    displayAnswerReview(reviewData) {
        const container = document.getElementById('answerReview');
        container.innerHTML = '';

        reviewData.forEach(item => {
            const div = document.createElement('div');
            div.className = `review-item ${item.isCorrect ? 'correct' : 'wrong'}`;
            div.innerHTML = `
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
                    <strong>Explanation:</strong> ${item.explanation}
                </div>
                <div style="font-size:0.85rem;color:#858591;margin-top:5px;">
                    <strong>Topic:</strong> ${item.topic}
                </div>
            `;
            container.appendChild(div);
        });
    }

    retakeExam() {
        if (confirm('Start a new exam with different questions?')) {
            this.currentQuestionIndex = 0;
            this.userAnswers = [];
            this.timeRemaining = 25 * 60;
            this.examQuestions = [];
            document.getElementById('registrationForm').reset();
            this.showScreen('registrationScreen');
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new ExamSystem();
});
