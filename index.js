
   const questions = [
    {
        question: "What is the result of 5 + 8?",
        options: ["10", "12", "13", "15"],
        correctAnswer: 2, // Index of the correct option
    },
    {
        question: "If x = 3 and y = 7, what is the value of x + y?",
        options: ["8", "10", "12", "15"],
        correctAnswer: 1,
    },
    {
        question: "What is the square of 9?",
        options: ["72", "81", "90", "100"],
        correctAnswer: 1,
    },
    {
        question: "If a triangle has angles measuring 45°, 45°, and 90°, what type of triangle is it?",
        options: ["Equilateral", "Isosceles", "Scalene", "Right-angled"],
        correctAnswer: 3,
    },
    {
        question: "What is the value of π (pi) to two decimal places?",
        options: ["3.14", "3.16", "3.18", "3.20"],
        correctAnswer: 0,
    },
    {
        question: "If a rectangle has a length of 8 units and a width of 5 units, what is its area?",
        options: ["20 square units", "30 square units", "35 square units", "40 square units"],
        correctAnswer: 2,
    },
    {
        question: "What is the result of 12 multiplied by 7?",
        options: ["72", "84", "96", "104"],
        correctAnswer: 1,
    },
    {
        question: "If a circle has a radius of 6 units, what is its circumference (to the nearest whole number)?",
        options: ["18 units", "24 units", "36 units", "48 units"],
        correctAnswer: 2,
    },
    {
        question: "If a number is divisible by 2 and 3, what other number is it guaranteed to be divisible by?",
        options: ["4", "6", "8", "10"],
        correctAnswer: 1,
    },
    {
        question: "What is the value of 5 factorial (5!)?",
        options: ["60", "120", "240", "720"],
        correctAnswer: 1,
    },
];

    let currenquestion = 0;
    let score = 0;
    const start_btn = document.getElementById('start_btn');
    const main_btn = document.getElementById('main_btn')
    const question_no = document.getElementById('question_no');
    const score_no = document.getElementById('score_no');
    const question_section = document.getElementById('question');
    const options = document.querySelectorAll(".op");
    const next_btn = document.getElementById('next_btn');
    const scoreboard = document.getElementById('scoreb');
    const scoreboardcontainer = document.getElementById('scoreboardcontainer');
    const main = document.getElementById('mainsection');
    const res=document.getElementById('restart_btn');
    start_btn.addEventListener('click', () => {
        main_btn.style.display = "none";
        main.style.display = "block";
    });
    loadquestion();
    function loadquestion() {
        const q = questions[currenquestion];
        if (currenquestion < questions.length) {
            question_no.textContent = `Question : ${currenquestion + 1}/${questions.length}`;
            question_section.textContent = q.question;
            options.forEach((e, index) => {
                e.textContent = q.options[index];
                e.style.backgroundColor = "white";
                e.style.pointerEvents = "auto";
                e.onclick = () => optionclicked(index);


            });
            next_btn.disabled = true;

        }
        else {
            showscoreboard();
        }

    }
    function optionclicked(selectedoption) {
        const correctans = questions[currenquestion].correctAnswer;
        options.forEach((e) => {
            e.style.pointerEvents = "none";
            e.onclick = null;
        });
        if (selectedoption === correctans) {
            options[selectedoption].style.backgroundColor = "green";
            score++;
            score_no.textContent = `score: ${score}`;
        }
        else {
            options[selectedoption].style.backgroundColor = "red";
            options[correctans].style.backgroundColor = "green";
        }
        next_btn.disabled = false;

    }
    next_btn.addEventListener('click', function nextquestion() {
        currenquestion++;
        loadquestion();
    })

    function showscoreboard() {
        main.style.display = "none";
        scoreboard.innerHTML = `Quiz end !!! <br> Your score:  ${score}`;
        scoreboardcontainer.style.display = "block";

    }
    res.addEventListener('click',()=>{
        currenquestion=0;
        score=0;
        score_no.textContent=`score: 0`;
        scoreboardcontainer.style.display="none";
        main_btn.style.display = "block";
        loadquestion();

    });



