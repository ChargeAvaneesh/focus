console.log("JavaScript Ready!");

/*JavaScript for Timer*/
var sec = 1800,
  secpass,
  countDown = setInterval(function () {
    secpass();
  }, 1000);

function secpass() {
  /*Declaring the overall minutes and the minutes and seconds remaining.*/
  var min = Math.floor(sec / 60);
  var remSec = sec % 60;

  if (remSec < 10) {
    remSec = "0" + remSec;
  }
  if (remSec == 0) {
    console.log("1 minute complete!");
  }
  if (min < 10) {
    min = "0" + min;
  }
  document.getElementById("timer").innerHTML = min + ":" + remSec;

  if (sec > 0) {
    sec = sec - 1;
  } else {
    clearInterval(countDown);

    document.getElementById("timer").innerHTML = "30 minutes complete!";
    var alarm = new Audio("Audio/Alarm.mp3");
    alarm.play()
  }
}

/*All the soundboard audio playing functions*/
function water_audio() {
  const Water_Flowing = new Audio("Audio/Water Flowing.mp3")
  Water_Flowing.play()
  Water_Flowing.loop = true
}

function fire_audio() {
  const Fire_Crackling = new Audio("Audio/Fire Crackling.mp3")
  Fire_Crackling.play()
  Fire_Crackling.loop = true
}

function leaves_audio() {
  const Leaves_Rustling = new Audio("Audio/Leaves Rustling.mp3")
  Leaves_Rustling.play()
  Leaves_Rustling.loop = true
}

function coffee_audio() {
  const Coffee_Shop = new Audio("Audio/Coffee Shop Sounds.mp3")
  Coffee_Shop.play()
  Coffee_Shop.loop = true
}

function airplane_audio() {
  const Airplane_Ambience = new Audio("Audio/Airplane Ambience.mp3")
  Airplane_Ambience.play()
  Airplane_Ambience.loop = true 
}

function rain_audio() {
  const Rain_Drizzling = new Audio("Audio/Rain.mp3")
  Rain_Drizzling.play()
  Rain_Drizzling.loop = true
}

var isPlaying = false;

function togglePlay() {
  isPlaying ? Rain_Drizzling.pause() : Rain_Drizzling.play();
};

myAudio.onplaying = function() {
  isPlaying = true;
};
myAudio.onpause = function() {
  isPlaying = false;
};