const input = document.getElementById("calculation");
const button = document.getElementById("start");
const result = document.getElementById("result");

button.onclick = function () {

    let value = input.value;
    let output;

    if (value.includes("+")) {
        let parts = value.split("+");
        output = Number(parts[0]) + Number(parts[1]);
    }
    else if (value.includes("-")) {
        let parts = value.split("-");
        output = Number(parts[0]) - Number(parts[1]);
    }
    else if (value.includes("*")) {
        let parts = value.split("*");
        output = Number(parts[0]) * Number(parts[1]);
    }
    else if (value.includes("/")) {
        let parts = value.split("/");
        output = Number(parts[0]) / Number(parts[1]);
    }
    else {
        output = "Invalid input";
    }

    result.textContent = "Result: " + output;
};