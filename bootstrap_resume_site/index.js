let headings = ["Content Creation", "Information Systems", "Business", "Software Development"];
let counter = 0;
let target = document.querySelector(".navbar-brand");
let inst = setInterval(changeTime, 1500);
let bg_video = document.getElementById("change");

bg_video.muted = true;

function changeTime() {
  target.innerHTML = headings[counter];
  counter++;
  if (counter >= headings.length){
    counter = 0;
  }
}
