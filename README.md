<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Quiz App</title>
    <link rel="stylesheet" href="styles.css">
    <script src="script.js" defer></script>
</head>
<body onload="document.documentElement.requestFullscreen();">
    <div class="container">
        <h2>Student Login</h2>
        <div id="login-container">
            <input type="text" id="name" placeholder="Enter Name" required><br>
            <input type="text" id="roll" placeholder="Enter Roll No" required><br>
            <input type="text" id="phone" placeholder="Enter Phone No" required><br>
            <button onclick="startQuiz()">Start Quiz</button>
        </div>

        <div id="quiz-container" style="display:none;">
            <p class="question" id="question"></p>
            <ul class="options" id="options"></ul>
            <button id="next-btn" onclick="nextQuestion()">Next</button>
        </div>
        <p id="result" style="display:none;"></p>
    </div>
</body>
</html>
