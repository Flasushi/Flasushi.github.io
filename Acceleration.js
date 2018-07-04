      // 加速度イベント
      window.addEventListener("devicemotion", accelerationEvent);

      // イベント発生
      function accelerationEvent(event) {
          // x軸
          var x = event.acceleration.x;
          // y軸
          var y = event.acceleration.y;
          // z軸
          var z = event.acceleration.z;

                  // 取得した値を表示
          xDir = document.getElementById("xDir");
          yDir = document.getElementById("yDir");
          zDir = document.getElementById("zDir");
          xDir.innerHTML = 'x=' + x;
          yDir.innerHTML = 'y=' + y;
          zDir.innerHTML = 'z=' + z;

      }