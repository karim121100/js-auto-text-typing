const text = "Welcome to my GitHub Projects";
let index = 0;

function typeText() {
  if (index < text.length) {
    document.getElementById("text").textContent += text.charAt(index);
    index++;
    setTimeout(typeText, 100);
  }
}

typeText();
