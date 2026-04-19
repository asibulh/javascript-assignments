const img = document.getElementById("target");
const text = document.getElementById("trigger");

// mouse over
text.onmouseover = function () {
    img.src = "module3-T3-img/picB.jpg";
};

// mouse out
text.onmouseout = function () {
    img.src = "module3-T3-img/picA.jpg";
};