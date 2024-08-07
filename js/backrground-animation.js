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
