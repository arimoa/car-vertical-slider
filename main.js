const leftEl = document.querySelector(".left-section");
const rightEl = document.querySelector(".right-section");
const upBtn = document.querySelector(".up-arrow");
const downBtn = document.querySelector(".down-arrow");
const itemsLength = rightEl.querySelectorAll("div").length;
let currentItem = 0;

console.log(currentItem);
downBtn.addEventListener("click", () => {
  currentItem--;
  console.log(currentItem);
  if (currentItem < 0) {
    currentItem = itemsLength - 1;
    console.log(currentItem);
  }

  rightEl.style.top = `-${currentItem * 100}vh`;
  leftEl.style.top = `-${(itemsLength - currentItem - 1) * 100}vh`;
});
upBtn.addEventListener("click", () => {
  currentItem++;
  console.log(currentItem);
  if (currentItem == itemsLength) {
    currentItem = 0;
    console.log(currentItem);
  }
  rightEl.style.top = `-${currentItem * 100}vh`;
  leftEl.style.top = `-${(itemsLength - currentItem - 1) * 100}vh`;
});
