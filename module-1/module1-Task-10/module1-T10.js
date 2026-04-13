let diceCount = Number(prompt("Enter number of dice:"));
let targetSum = Number(prompt("Enter desired sum:"));

let trials = 10000;
let success = 0;

for (let i = 0; i < trials; i++) {
    let sum = 0;

    for (let j = 0; j < diceCount; j++) {
        sum += Math.floor(Math.random() * 6) + 1;
    }

    if (sum === targetSum) {
        success++;
    }
}

let probability = (success / trials) * 100;

document.write("Probability to get sum " + targetSum +
    " with " + diceCount + " dice is " +
    probability.toFixed(2) + "%");