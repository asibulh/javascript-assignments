let candidateCount = Number(prompt("Enter number of candidates:"));
let candidates = [];
for (let i = 0; i < candidateCount; i++) {
    let name = prompt("Name for candidate " + (i + 1) + ":");

    candidates.push({
        name: name,
        votes: 0
    });
}
let voters = Number(prompt("Enter number of voters:"));

for (let i = 0; i < voters; i++) {
    let vote = prompt("Voter " + (i + 1) + ", enter candidate name:");

    if (vote === "") {
        continue;
    }

    for (let j = 0; j < candidates.length; j++) {
        if (candidates[j].name === vote) {
            candidates[j].votes++;
        }
    }
}
candidates.sort(function(a, b) {
    return b.votes - a.votes;
});

let winner = candidates[0];

console.log("The winner is " + winner.name + " with " + winner.votes + " votes.");
console.log("Results:");

for (let i = 0; i < candidates.length; i++) {
    console.log(candidates[i].name + ": " + candidates[i].votes + " votes");
}