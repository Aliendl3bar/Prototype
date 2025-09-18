const questions = [
    {
        text: "git init is used to ...",
        options: [
            "creat a local repository",
            "creat a remote repository",
            "creat a new branch",
            "creat a new file"
        ],
        answer: "1"
    },
    {
        text: "git push is used to ...",
        options: [
            "upload local repository content to a remote repository",
            "download remote repository content to a local repository"
        ],
        answer: "1"
    },
    {
        text: "collaborators can ...",
        options: [
            "make changes to the repository",
            "clone the repository",
            "create a new branch",
            "all of the above"
        ],
        answer: "4"
    },
    {
        text: "let is used to ...",
        options: [
            "declare a variable that can change",
            "declare a variable that cannot change"
        ],
        answer: "1"
    },
    {
        text: "return is used to ...",
        options: [
            "exit a loop",
            "exit a conditional statement",
            "exit a function and return a value"
        ],
        answer: "3"
    },
    {
        text: "if is used to ...",
        options: [
            "execute a block of code if a specified condition is false",
            "execute a block of code if a specified condition is true"
        ],
        answer: "2"
    },
    {
        text: "loops are used to ...",
        options: [
            "store the code for later use",
            "repeat a block of code multiple times"
        ],
        answer: "2"
    }
];

let total = 0;

questions.forEach((q, i) => {
    let promptText = `${q.text}\n`;
    q.options.forEach((opt, idx) => {
        promptText += `${idx + 1}. ${opt}\n`;
    });
    promptText += "Enter your answer (number):";
    let userAnswer = prompt(promptText);
    if (userAnswer === q.answer) {
        console.log("Correct!");
        total++;
    } else {
        console.log(`Incorrect. The correct answer is ${q.answer}.`);
    }
});

prompt(`You got ${total} out of ${questions.length} correct.`);