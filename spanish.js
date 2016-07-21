message = (function(spanisMessage) {
  var spanishLexicon = {
      "merry":"god",
      "christmas":"jul",
      "and":"och",
      "happy":"gott",
      "new":"nytt",
      "year":"år"
    }
  var userMessage = document.getElementById("translateText").value.toLowerCase();
  var messageArray = userMessage.split(' ');
  spanishMessage.translateToSpanish = function(userMessage){
    for(var i=0; i<messageArray.length; i++) {
       for(var english in spanishLexicon) {
        if (messageArray[i] === english) {
          messageArray[i] = spanishLexicon[english];
        }
      }
    }
  }

  return spanishMessage;

})(message);


