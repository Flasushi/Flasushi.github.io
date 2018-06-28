window.addEventListener('devicemotion', deviceMotionHandler);

function deviceMotionHandler(event){

  //取得

  const x = event.acceleration.x;

  const y = event.acceleration.y;

  const z = event.acceleration.z;

  //値を表示

  xDir = document.getElementByid("xDir");

  yDir = document.getElementByid("yDir");

  zDir = document.getElementByid("zDir");

  xDir.innerHTML = 'x=' + x;

  yDir.innerHTML = 'y=' + y;

  zDir.innerHTML = 'z=' + z;
}
