message = (function(spanishMessage) {
  var spanishLexicon = {
      "merry":"feliz",
      "christmas":"Navidad",
      "and":"y",
      "happy":"feliz",
      "new":"nuevo",
      "year":"año"
    }

  spanishMessage.translateToSpanish = function(userMessage){
    var userMessage = document.getElementById("translateText").value.toLowerCase();
    var separators = [' ', '\\\+', '-', '\\\(', '\\\)', '\\*', '/', ':', '\\\?', '\\\!', '\\\,', '\\\.'];
      separators.join('|');
    var messageArray = userMessage.split(new RegExp(separators.join('|'), 'g'));

    for(var i=0; i<messageArray.length; i++) {
       for(var english in spanishLexicon) {
        if (messageArray[i] === english) {
          messageArray[i] = spanishLexicon[english];
        }
      }
    }
    return messageArray.join(" ");
  }

  return spanishMessage;

})(message);


