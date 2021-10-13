// var movimiento = document.getElementsByClassName('pupilas')
// document.onmousemove = function () {
//     var x = Event.clientx * 100 / window.innerWidth + "%";
//     var y = Event.clienty * 100 / window.innerWidth + "%";
//     for (var i = 0; i < 2; i++) {
//         movimiento[i].style.left = x;
//         movimiento[i].style.top = y;
//         movimiento[i].style.tansform = "translate(- " + x + ",-" + y + ")"
//     }
// }

var x = 0;

// document.getElementById("demo").addEventListener("mouseover", mouseOver);
// document.getElementById("demo").addEventListener("mouseout", mouseOut);

// function mouseOver() {
//     document.getElementById("demo").style.color = "red";
// }

// function mouseOut() {
//     document.getElementById("demo").style.color = "white";
// }

function myEnterFunction() {
    document.getElementById("demo2").innerHTML = x+=1;
  }
  
