function printAlert() {
  //1
  alert("wazaaaaaaap");
}
function printMyName() {
  //2
  console.log("OG  ;)");
}
function changeSpanColor() {
  //3
  var span = document.getElementById("span");
  span.style.color = "red";
}
function changeH1Size() {
  //4
  var h1 = document.getElementById("changeSize");
  h1.style.fontSize = "20vh";
}
function changeH1Content() {
  //5
  var h1 = document.getElementById("changeContent");
  h1.innerText = "nice work soldier";
}
window.onload = function () {
  // var userName = prompt("please enter your name");
};
function printUserName() {
  //6
  var userName = document.getElementById("name"); //6 אתגר
  document.body.innerHTML += "<h1>" + userName.value + "</h1>";
}
function changePageByHour() {
  //7
  var myTime = new Date();
  var myhour = myTime.getHours();
  if (myhour < 12) {
    document.body.style.backgroundColor = "yellow";
    document.body.innerHTML += "<h1> Good Morning</h1>";
  } else {
    document.body.style.backgroundColor = "blue";
    document.body.innerHTML += "<h1>Good Evening";
  }
}
function changePageByAge() {
  //8
  var age = +prompt("enter age");
  var welcome = document.createElement("h1");
  welcome.onmouseover = () => {
    welcome.style.color = "green";
  };
  welcome.innerText = "Welcome";
  if (age > 18) {
    welcome.style.color = "red";
  } else {
    welcome.style.color = "blue";
  }
  document.body.appendChild(welcome);
}
// changePageByHour();
// function playLottery() {
//   var userGuess = [];
//   for (var i = 0; i < 5; i++) {
//     userGuess[i] = +prompt("enter a number");
//     var guess = document.createElement("h1");
//     guess.innerHTML = userGuess[i];
//     document.body.appendChild(guess);
//   }
//   var randomnumber = Math.floor(Math.random() * 57);
//   var rndElement = document.createElement("h1");
//   rndElement.innerHTML = "the random number: " + randomnumber;
//   document.body.appendChild(rndElement);
//   var check = false;
//   for (var i = 0; i < userGuess.length; i++) {
//     if (userGuess[i] == randomnumber) {
//       check = true;
//     }
//   }
//   if (check) {
//     document.body.innerHTML += "<h1>Sucsses</h1>";
//   } else {
//     document.body.innerHTML += "<h1>Failure</h1>";
//   }
// }
function playLottery() {
  //9,10
  var playButton = document.getElementById("startbutton");
  playButton.style.display = "none";
  var label = document.createElement("label");
  label.for = "number";
  label.innerText = "enter a number from 0 to 56:";
  document.body.appendChild(label);
  var input = document.createElement("input");
  input.id = "number";
  input.type = "number";
  input.max = 56;
  input.min = 0;
  input.onkeydown = function () {
    return false;
  };
  document.body.appendChild(input);
  var button = document.createElement("button");
  button.innerText = "press to print number";
  button.counter = 0;
  button.myValue = [];
  button.onclick = function () {
    if (button.counter < 5) {
      button.myValue[button.counter] = input.value;
      var print = document.createElement("h1");
      print.innerText = input.value;
      document.body.appendChild(print);
      button.counter++;
    }
    if (button.counter == 5) {
      var randomnumber = Math.floor(Math.random() * 57);
      var rndElement = document.createElement("h1");
      rndElement.innerHTML = "the random number: " + randomnumber;
      document.body.appendChild(rndElement);
      var check = false;
      for (var i = 0; i < button.myValue.length; i++) {
        if (button.myValue[i] == randomnumber) {
          check = true;
        }
      }
      if (check) {
        document.body.innerHTML += "<h1>Sucsses</h1>";
      } else {
        document.body.innerHTML += "<h1>Failure</h1>";
      }
    }
  };
  document.body.appendChild(button);
}

function printDate() {
  var mydate = Date();
  document.body.innerHTML += "<h1>" + mydate + "</h1>";
}
function changeColorPurple() {
  var h3 = document.getElementById("purpleChange");
  h3.style.color = "purple";
}
function changeWidth() {
  var widthchange = document.getElementById("changeWidth");
  widthchange.style.width = "20vw";
}

// var h1obj = document.createElement("h1"); //1
// h1obj.innerText = "Press me";
// h1obj.onclick = () => {
//   alert("wazzap");
// };
// document.body.appendChild(h1obj);
// var x = document.getElementById("first");
// console.log(x);
// x.onchange = function () {
//   console.log(x.value);
// };
