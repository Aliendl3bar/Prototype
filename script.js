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
