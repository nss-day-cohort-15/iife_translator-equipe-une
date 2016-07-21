message = (function(germanMessage) {
  var germanLexicon = {
      "merry":"fröhlich",
      "christmas":"Weihnachten",
      "and":"und",
      "happy":"glücklich",
      "new":"neu",
      "year":"Jahr"
    }

  germanMessage.translateToGerman = function(userMessage){
    var userMessage = document.getElementById("translateText").value.toLowerCase();
    var separators = [' ', '\\\+', '-', '\\\(', '\\\)', '\\*', '/', ':', '\\\?', '\\\!', '\\\,', '\\\.'];
      separators.join('|');
    var messageArray = userMessage.split(new RegExp(separators.join('|'), 'g'));

    for(var i=0; i<messageArray.length; i++) {
       for(var english in germanLexicon) {
        if (messageArray[i] === english) {
          messageArray[i] = germanLexicon[english];
        }
      }
    }
    return messageArray.join(" ");
  }

  return germanMessage;

})(message);