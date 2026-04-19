const form = document.getElementById("source");
const result = document.getElementById("target");

form.onsubmit = function (event) {
    event.preventDefault();      //form reload will close
    const firstName = document.querySelector('input[name="firstname"]').value;
    const lastName = document.querySelector('input[name="lastname"]').value;

    result.textContent = "Your name is " + firstName + " " + lastName;
};