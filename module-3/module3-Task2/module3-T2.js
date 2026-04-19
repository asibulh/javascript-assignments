let target = document.getElementById("target");

// First item
let li1 = document.createElement("li");
li1.textContent = "First item";
target.appendChild(li1);

//Second item
let li2 = document.createElement("li");
li2.textContent = "Second item";

li2.classList.add("my-item");    //Class Added

target.appendChild(li2);

// Third item
let li3 = document.createElement("li");
li3.textContent = "Third item";
target.appendChild(li3);