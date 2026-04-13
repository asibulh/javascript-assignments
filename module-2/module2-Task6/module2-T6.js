function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}
document.write("<ul>");

while (true) {
    let result = rollDice();
    document.write("<li>" + result + "</li>");

    if (result === 6) {
        break;
    }
}
document.write("</ul>");