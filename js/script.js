
let hamburgerEl =document.querySelector(".hamburger")
let navEl=document.querySelector(".main-menu")

hamburgerEl.addEventListener('click', () => {
  const isActive = hamburgerEl.classList.toggle('is-active');
  navEl.classList.toggle('main-menu-open', isActive);

  if (isActive) {
    document.body.style.overflowY = 'hidden';
  } else {
    document.body.style.overflowY = 'auto';
  }
});

let bodyShape = document.querySelector(".body-shape svg path");
let bodyShapeLength = bodyShape.getTotalLength();

if (bodyShape) {
  bodyShape.style.strokeDasharray = bodyShapeLength;
  bodyShape.style.strokeDashoffset = bodyShapeLength;

  window.addEventListener("scroll", drawShape);
  
  function drawShape() {
    var scrollpercent = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
  
    var draw = bodyShapeLength * scrollpercent;
    bodyShape.style.strokeDashoffset = bodyShapeLength - draw;
  }
}
