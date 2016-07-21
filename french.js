var message = (function( ) {
  var frenchLexicon = {
      "merry":"joyeux",
      "christmas":"Noël",
      "and":"et",
      "happy":"content",
      "new":"nouveau",
      "year":"an"
    }

  return {
    translateToFrench: function(userMessage){
      var userMessage = document.getElementById("translateText").value.toLowerCase();
      var separators = [' ', '\\\+', '-', '\\\(', '\\\)', '\\*', '/', ':', '\\\?', '\\\!', '\\\,', '\\\.'];
      separators.join('|');
      var messageArray = userMessage.split(new RegExp(separators.join('|'), 'g'));

      for(var i=0; i<messageArray.length; i++) {
         for(var english in frenchLexicon) {
          if (messageArray[i] === english) {
            messageArray[i] = frenchLexicon[english];
          }
        }
      }
      return messageArray.join(" ");
    }
  }
})();

