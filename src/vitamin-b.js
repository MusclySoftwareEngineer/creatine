const target = document.querySelector("#vtm-b");

const content = document.createElement("div");
content.classList.add("vitamin-b-page");
content.innerHTML = `
<h2 class="vitamin-b-h21">Vitamin B</h2>





`;



if (target) {
  target.appendChild(content);
} else {
  document.body.appendChild(content);
}