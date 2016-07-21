document.getElementById("submit").addEventListener("click", function(evt) {
  evt.preventDefault();
  var text = document.getElementById("translatedText");
  if(document.getElementById('spanish').checked) {
    text.innerHTML = message.translateToSpanish();
    console.log("success")
  }else if(document.getElementById('french').checked) {
    text.innerHTML = message.translateToFrench();
    console.log("yay")
  }else if (document.getElementById('swedish').checked) {
    text.innerHTML = message.translateToSwedish();
    console.log("woo hoo")
  } else {
    text.innerHTML = message.translateToGerman();
    console.log("ja!")
  }
});

document.getElementById("readText").addEventListener("click", function (evt) {
  var spokenText = document.getElementById("translatedText").innerHTML;
  if(document.getElementById('spanish').checked) {
    responsiveVoice.speak(spokenText, "Spanish Female");
  }else if(document.getElementById('french').checked) {
    responsiveVoice.speak(spokenText, "French Female");
  }else if(document.getElementById('swedish').checked) {
    responsiveVoice.speak(spokenText, "Swedish Female");
  } else {
    responsiveVoice.speak(spokenText, "Deutsch Female");
  }
});

