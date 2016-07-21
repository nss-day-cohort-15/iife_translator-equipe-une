message = (function(spanishMessage) {
  var spanishLexicon = {
      "merry":"feliz",
      "christmas":"Navidad",
      "and":"y",
      "happy":"feliz",
      "new":"nuevo",
      "year":"año"
    }
  var userMessage = document.getElementById("translateText").value;
  spanishMessage.translateToSpanish = function(userMessage){
    for(var english in spanishLexicon) {
      userMessage.replaceAll("/"+english+"/gi", spanishLexicon[english]);
    }
  }

  return spanishMessage;

})(message);


