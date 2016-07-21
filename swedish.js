message = (function(swedishMessage) {
  var swedishLexicon = {
      "merry":"god",
      "christmas":"jul",
      "and":"och",
      "happy":"gott",
      "new":"nytt",
      "year":"år"
    }

  swedishMessage.translateToSwedish = function(userMessage){
    var userMessage = document.getElementById("translateText").value.toLowerCase();
    var separators = [' ', '\\\+', '-', '\\\(', '\\\)', '\\*', '/', ':', '\\\?', '\\\!', '\\\,', '\\\.'];
    separators.join('|');
    var messageArray = userMessage.split(new RegExp(separators.join('|'), 'g'));

    for(var i=0; i<messageArray.length; i++) {
       for(var english in swedishLexicon) {
        if (messageArray[i] === english) {
          messageArray[i] = swedishLexicon[english];
        }
      }
    }
    return messageArray.join(" ");
  }

 return swedishMessage;

})(message);



