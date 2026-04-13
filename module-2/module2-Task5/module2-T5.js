let numbers = [];

while (true) {
    let num = Number(prompt("Enter a number:"));

    if (numbers.includes(num)) {
        alert("Number already entered!");
        break;
    }
    numbers.push(num);
}

numbers.sort(function(a, b) {
    return a - b;
});
console.log("Numbers in ascending order:");
console.log(numbers);