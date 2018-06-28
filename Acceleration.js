window.addEventListener("devicemotion", accelerationEvent);

function accelerationEvent(event){
  var x = event.acceleration.x;

  var y = event.acceleration.y;

  var z = event.acceleration.z;


  xDir = document.getElementByid("xDir");
  yDir = document.getElementByid("yDir");
  zDir = document.getElementByid("zDir");
  xDir.innerHTML = 'x=' + x;
  yDir.innerHTML = 'y=' + y;
  zDir.innerHTML = 'z=' + z;


}
