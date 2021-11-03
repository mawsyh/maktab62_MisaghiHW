const circleEl = document.querySelectorAll(".circle-nav");

circleEl.forEach((circle) => {
  circle.addEventListener("click", (pos) => {
    console.log(pos.clientX, pos.clientY);
  });
});
