let answer = confirm("Should I calculate the square root?");

if (answer) {
    let number = Number(prompt("Enter a number:"));

    if (number < 0) {
        document.write("The square root of a negative number is not defined.");
    } else {
        document.write("Square root is: " + Math.sqrt(number));
    }
} else {
    document.write("The square root is not calculated.");
}