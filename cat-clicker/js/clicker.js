let catImg1 = document.querySelector(".cat_img1");
let clickCounter1 = document.querySelector(".numClicks1");
let catImg2 = document.querySelector(".cat_img2");
let clickCounter2 = document.querySelector(".numClicks2");

catImg1.addEventListener("click", function() {
  clickCounter1.innerHTML ++;
});
catImg2.addEventListener("click", function() {
  clickCounter2.innerHTML ++;
});
