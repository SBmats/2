let warningCount = 0;
        
document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
        warningCount++;
        alert(`Warning ${warningCount}/3: Do not switch tabs!`);
        if (warningCount >= 3) {
            document.body.innerHTML = "<h1>You are disqualified for switching tabs.</h1>";
        }
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "F12" || (event.ctrlKey && event.shiftKey && event.key === "I")) {
        event.preventDefault();
        alert("Developer tools are disabled!");
    }
});

document.addEventListener("contextmenu", (event) => event.preventDefault());

let student = {};
let questions = [
    { q: "What is the capital of France?", options: ["Paris", "London", "Berlin", "Madrid"], correct: 0 },
    { q: "What is 2 + 2?", options: ["3", "4", "5", "6"], correct: 1 },
    { q: "Which planet is known as the Red Planet?", options: ["Earth", "Mars", "Jupiter", "Saturn"], correct: 1 }
];

let currentQuestion = 0;
let score = 0;

function startQuiz() {
    student.name = document.getElementById("name").value;
    student.roll = document.getElementById("roll").value;
    student.phone = document.getElementById("phone").value;

    if (!student.name || !student.roll || !student.phone) {
        alert("Please fill in all details!");
        return;
    }

    document.getElementById("login-container").style.display = "none";
    document.getElementById("quiz-container").style.display = "block";
    loadQuestion();
}

function loadQuestion() {
    document.getElementById("result").style.display = "none";
    let q = questions[currentQuestion];
    document.getElementById("question").innerText = q.q;
    let optionsHTML = "";
    q.options.forEach((option, index) => {
        optionsHTML += `<li><input type='radio' name='answer' value='${index}'> ${option}</li>`;
    });
    document.getElementById("options").innerHTML = optionsHTML;
}

function nextQuestion() {
    let selected = document.querySelector("input[name='answer']:checked");
    if (!selected) { alert("Please select an answer!"); return; }

    if (parseInt(selected.value) === questions[currentQuestion].correct) {
        score++;
    }

    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        document.getElementById("quiz-container").innerHTML = "<h3>Quiz Completed!</h3>";
        document.getElementById("result").innerText = `Your Score: ${score}/${questions.length}`;
        document.getElementById("result").style.display = "block";
        saveResult();
    }
}

function saveResult() {
    let url = "YOUR_GOOGLE_FORM_ACTION_URL"; // Replace with your Google Form URL
    let formData = new FormData();
    formData.append("entry.123456789", student.name);
    formData.append("entry.987654321", student.roll);
    formData.append("entry.567890123", student.phone);
    formData.append("entry.111213141", score);
    fetch(url, { method: "POST", body: formData, mode: "no-cors" });
}
