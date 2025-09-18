let C = ["C1", "C3", "C3", "C4", "C5", "C1", "C3", "C2", "C7", "C1", "C4", "C5", "C6", "C3", "C2", "C1", "C3", "C10", "C10", "C7"];
let counts = {};
console.log(C);
for (let n = 0; n < C.length; n++) {
    let item = C[n];
    if (counts[item]) {
        counts[item]++;
    } else {
        counts[item] = 1;
    }
}

console.log(counts);
let total = 0;
console.log("git init is used to ...");
console.log("1. creat a local repository 2. creat a remote repository 3. creat a new branch 4. creat a new file");
let answer1 = require("readline-sync").question("Enter your answer (1, 2, 3, or 4):");
if (answer1 === "1") {
    console.log("Correct!");
    total++;
} else {
    console.log("Incorrect. The correct answer is 1. git init is used to create a local repository.");
}
console.log("git push is used to ...");
console.log("1. upload local repository content to a remote repository 2. download remote repository content to a local repository" );
let answer2 = require("readline-sync").question("Enter your answer (1 or 2):");
if (answer2 === "1") {
    console.log("Correct!");
    total++;
} else {
    console.log("Incorrect. The correct answer is 1. git push is used to upload local repository content to a remote repository.");
}
console.log("collaborators can ...");
console.log("1. make changes to the repository 2. clone the repository 3. create a new branch 4. all of the above");
let answer3 = require("readline-sync").question("Enter your answer (1, 2, 3, or 4):");
if (answer3 === "4") {
    console.log("Correct!"); 
    total++;   
} else {
    console.log("Incorrect. The correct answer is 4. Collaborators can do all of the above.");
}
console.log("let is used to ...");
console.log("1. declare a variable that can change 2. declare a variable that cannot change");
let answer4 = require("readline-sync").question("Enter your answer (1 or 2):");
if (answer4 === "1") {
    console.log("Correct!");
    total++;
} else {
    console.log("Incorrect. The correct answer is 1. let is used to declare a variable that can change.");
}
console.log("return is used to ...");
console.log("1. exit a loop 2. exit a conditional statement 3. exit a function and return a value ");
let answer5 = require("readline-sync").question("Enter your answer (1, 2, or 3):");
if (answer5 === "3") {
    console.log("Correct!");
    total++;
} else {
    console.log("Incorrect. The correct answer is 3. return is used to exit a function and return a value.");
}
console.log("if is used to ...");
console.log("1. execute a block of code if a specified condition is false 2. execute a block of code if a specified condition is true");
let answer6 = require("readline-sync").question("Enter your answer (1 or 2):");
if (answer6 === "2") {
    console.log("Correct!");
    total++;
} else {
    console.log("Incorrect. The correct answer is 2. if is used to execute a block of code if a specified condition is true.");
}
console.log("loops are used to ...");
console.log("1. store the code for later use 2. repeat a block of code multiple times");
let answer7 = require("readline-sync").question("Enter your answer (1 or 2):");
if (answer7 === "2") {
    console.log("Correct!");
    total++;
} else {
    console.log("Incorrect. The correct answer is 2. loops are used to repeat a block of code multiple times.");
}
console.log(" saliti o jibti "+ total + "/7");
