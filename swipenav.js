(function(){
var xStart = 0;
var yStart = 0;
var xEnd = 0
var yEnd = 0;
var swipeLength = 0;
var navboxactive = false;

document.addEventListener('touchstart', touchStart, false);
document.addEventListener('touchend',   touchEnd, false);

function dif(a, b) { 
  return Math.abs(a - b); 
}
function touchStart(){
  xStart = event.changedTouches[0].clientX;
  yStart = event.changedTouches[0].clientY;
  swipeLength = document.body.clientWidth / 4;
}
function touchEnd(){
  xEnd = event.changedTouches[0].clientX;
  yEnd = event.changedTouches[0].clientY;
  if(dif(yStart, yEnd) <= 50){
    if(dif(xStart, xEnd) >= swipeLength){
      if(navboxactive === false){
        navbox.style.opacity = 1;
        if(xStart > xEnd){
          navbox.setAttribute('class', 'fadefromright');
          navbox.innerHTML = '>';
          navbox.href = 'javascript: history.go(1);';
        }else if(xStart < xEnd){
          navbox.setAttribute('class', 'fadefromleft');
          navbox.innerHTML = '<';
          navbox.href = 'javascript: history.go(-1);';
        }
      }else{
        navbox.setAttribute('class', '');
      }
      navboxactive = !navboxactive;
    }
  }
  xStart = yStart = xEnd = yEnd = swipeLength = 0;
}
var navbox = document.createElement('a');
navbox.id = 'navbox';
navbox.onclick = function(){
  this.style.opacity = .2;
}
document.body.appendChild(navbox);
})();