var message = (function( ) {
  var frenchLexicon = {
      "merry":"joyeux",
      "christmas":"Noël",
      "and":"et",
      "happy":"content",
      "new":"nouveau",
      "year":"an"
    }
  var userMessage = document.getElementById("translateText").value.toLowerCase();
  var messageArray = userMessage.split(' ');

  return {
    translateToFrench: function(userMessage){
      for(var i=0; i<messageArray.length; i++) {
         for(var english in frenchLexicon) {
          if (messageArray[i] === english) {
            messageArray[i] = frenchLexicon[english];
          }
        }
      }
    }
  }
})();
