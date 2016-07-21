document.getElementById("submit").addEventListener("click", function(evt) {
  evt.preventDefault();
  var text = document.getElementById("translatedText");
  if(document.getElementById('spanish').checked) {
    text.innerHTML = message.translateToSpanish();
    console.log("success")
  }else if(document.getElementById('french').checked) {
    text.innerHTML = message.translateToFrench();
    console.log("yay")
  }else {
    text.innerHTML = message.translateToSwedish();
    console.log("woo hoo")
  }
});