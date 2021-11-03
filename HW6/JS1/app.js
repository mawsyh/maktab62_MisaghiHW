const boxEl = document.querySelector(".redbg");

boxEl.addEventListener("mouseover", () => {
  boxEl.classList.replace("redbg", "bluebg");
});

boxEl.addEventListener("mouseout", () => {
  boxEl.classList.replace("bluebg", "redbg");
});
