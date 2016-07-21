
message = (function(swedishMessage) {
  var swedishLexicon = {
      "merry":"god",
      "christmas":"jul",
      "and":"och",
      "happy":"gott",
      "new":"nytt",
      "year":"år"
    }
  var userMessage = document.getElementById("translateText").value.toLowerCase();
  var messageArray = userMessage.split(' ');
  swedishMessage.translateToSwedish = function(userMessage){
    for(var i=0; i<messageArray.length; i++) {
       for(var english in swedishLexicon) {
        if (messageArray[i] === english) {
          messageArray[i] = swedishLexicon[english];
        }
      }
    }
  }

  return swedishMessage;

})(message);



