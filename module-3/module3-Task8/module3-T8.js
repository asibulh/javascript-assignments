const p = document.querySelector('#start');
const u = document.querySelector('#result');

p.addEventListener('click', function() {
    const num1 = parseFloat(document.querySelector('#num1').value);
    const num2 = parseFloat(document.querySelector('#num2').value);
    const operation = document.querySelector('#operation').value;

    let calculation;

    if (operation === 'add') {
        calculation = num1 + num2;
    } else if (operation === 'sub') {
        calculation = num1 - num2;
    } else if (operation === 'multi') {
        calculation = num1 * num2;
    } else if (operation === 'div') {
        calculation = num1 / num2;
    }

    u.innerText = calculation;
});