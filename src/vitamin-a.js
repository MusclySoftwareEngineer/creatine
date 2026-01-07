const target = document.querySelector("#vtm-a");

const content = document.createElement("div");
content.innerHTML = `
<h2 class="vitamin-a-h21">Vitamin A</h2>
<img src="./pic/Vitamin-A.jpg" alt="vitamin a source" class="vitamin-a-pic1">

<h2 class="vitamin-a-h22">Essential Information</h2>
<p class="vitamin-a-p1">Vitamin A is a fat-soluble vitamin stored in the liver, so long-term intake matters more than daily intake.
   It's essential for night vision, immune defense, and keeping your eyes, skin, and body linings healthy. You get it as retinol from
    animal foods and supplements, or as beta-carotene from colorful vegetables, which your body converts as needed. Deficiency can show
     up as night blindness and dry eyes, especially if fat absorption is poor. Too much retinol (mainly from supplements or frequent liver) can be toxic, and high doses are especially dangerous during pregnancy.
</p>

<h2 class="vitamin-a-h22">Daily intake</h2>
<img src="./pic/vitamin-A-intake.png" alt="A daily intake"
class="vitamin-a-pic2">
  





`;



if (target) {
  target.appendChild(content);
} else {
  document.body.appendChild(content);
}