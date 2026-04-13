let numbers = [];

while (true) {
    let num = Number(prompt("Enter a number (0 to stop):"));

    if (num === 0) {
        break;
    }
    numbers.push(num);
}
numbers.sort(function(a, b) {
    return b - a;
});
console.log("Numbers from largest to smallest:");
console.log(numbers);