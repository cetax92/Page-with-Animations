let textTag = document.querySelector(".section1 h1");
let text = textTag.textContent;

const klickAnimacija = document.querySelector("#dugmeAnimacije");

klickAnimacija.addEventListener("click", (event) => {
  let splitedText = text.split("");
  textTag.innerHTML = "";
  for (let i = 0; i < splitedText.length; i++) {
    if (splitedText[i] == " ") {
      splitedText[i] = "&nbsp;";
    }
    textTag.innerHTML += `<span>${splitedText[i]}</span>`;
  }

  let spans = textTag.querySelectorAll("span");
  let k = 0;
  let interval = setInterval(() => {
    let singleSpan = spans[k];
    singleSpan.className = "fadeMove";

    k++;
    if (k === spans.length) {
      clearInterval(interval);
    }
  }, 100);
});

let border = document.querySelector(".border-line");
let animationWidth = 0;

let dugmeMinus = document.querySelector(".dugmeMinus");
let dugmePlus = document.querySelector(".dugmePlus");

dugmeMinus.addEventListener("click", (event) => {
  animationWidth -= 5;
  border.style.width = animationWidth + "%";
  if (animationWidth >= 100) {
    animationWidth = 100;
  }
  if (animationWidth <= 0) {
    animationWidth = 0;
  }
});
dugmePlus.addEventListener("click", (event) => {
  console.log("plus");
  animationWidth += 5;
  border.style.width = animationWidth + "%";
  if (animationWidth >= 95) {
    animationWidth = 95;
  }
  if (animationWidth <= 0) {
    animationWidth = 0;
  }
});
/*
window.onscroll = () => {
  if (this.oldScroll > this.scrollY) {
    animationWidth -= 1;
  } else {
    animationWidth += 1;
  }
  if (animationWidth >= 100) {
    animationWidth = 100;
  }
  if (animationWidth <= 0) {
    animationWidth = 0;
  }

  border.style.width = animationWidth + "%";
  this.oldScroll = this.scrollY;
  imageAnimation();
};

const imageAnimation = () => {
  let sectionForAnimation = document.querySelector(".section2 .images");
  let sectionPosition = sectionForAnimation.getBoundingClientRect().top;
  let screenPosition = window.innerHeight / 1.3;

  console.log("sectionP:" + sectionPosition);

  console.log("ScreenP:" + screenPosition);

  let leftImage = document.querySelector(".slideFromLeft");
  let rightImage = document.querySelector(".slideFromRight");

  if (sectionPosition < screenPosition) {
    leftImage.classList.add("animated");
    rightImage.classList.add("animated");
  }
};
*/
let leftImage = document.querySelector(".slideFromLeft");
let rightImage = document.querySelector(".slideFromRight");

let leftButton = document.querySelector("#container2 .fromLeft");
leftButton.addEventListener("click", (event) => {
  leftImage.classList.add("animated");
});

let rightButton = document.querySelector("#container2 .fromRight");
rightButton.addEventListener("click", (event) => {
  rightImage.classList.add("animated");
});

const imageAnimation = () => {
  let leftButton = document.querySelector("#container2 .fromLeft");
  leftButton.addEventListener("click", (event) => {});
  console.log(leftButton);
  let sectionForAnimation = document.querySelector(".section2 .images");

  let screenPosition = window.innerHeight / 1.3;
};
