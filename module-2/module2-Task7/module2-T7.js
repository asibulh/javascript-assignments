function rollDice(sides) {
    return Math.floor(Math.random() * sides) + 1;
}
let sides = Number(prompt("Enter number of sides:"));
document.write("<ul>");

while (true) {
    let result = rollDice(sides);
    document.write("<li>" + result + "</li>");

    if (result === sides) {
        break;
    }
}
document.write("</ul>");