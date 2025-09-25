const questions = [
    {
        text: "Concevoir avec UX/UI",
        options: [
            "C1",
            "C2",
            "C3",
            "C4"
        ],
        answer: "1"
    },
    {
        text: "Structurer le HTML",
        options: [
            "C1",
            "C2",
            "C3",
            "C4"
        ],
        answer: "2"
    },
    {
        text: "JavaScript : Premiers pas",
        options: [
            "C1",
            "C2",
            "C3",
            "C4"
        ],
        answer: "3"
    },
    {
        text: " Comprendre le maquettage",
        options: [
            "C1",
            "C2",
            "C3",
            "C4"
        ],
        answer: "1"
    },
    {
        text: "Styliser avec CSS",
        options: [
            "C1",
            "C2",
            "C3",
            "C4"
        ],
        answer: "2"
    },
    {
        text: "JavaScript : Aller plus loin",
        options: [
            "C1",
            "C2",
            "C3",
            "C4"
        ],
        answer: "3"
    },
    {
        text: "Git & GitHub",
        options: [
            "T1",
            "T2",
            "T3",
            "T4"
        ],
        answer: "3"
    },
    {
        text: "Comprendre la démarche pédagogique à Solicode",
        options: [
            "T1",
            "T2",
            "T3",
            "T4"
        ],
        answer: "1"
    }
];

let total = 0;

questions.forEach((q) => {
    let promptText = `${q.text}\n`;
    q.options.forEach((opt, idx) => {
        promptText += `${idx + 1}. ${opt}\n`;
    });
    promptText += "Enter your answer (number):";
    let userAnswer = prompt(promptText);
    if (userAnswer === q.answer) {
        alert("Correct!");
        total++;
    } else {
        alert(`Incorrect. The correct answer is ${q.answer}.`);
    }
});

alert(`You got ${total} out of ${questions.length} correct.`);