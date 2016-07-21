document.getElementById("submit").addEventListener("click", translate);

message = (function( ) {
  if(document.getElementById('spanish').checked) {
    message.translateToSpanish();
  }else if(document.getElementById('french').checked) {
    message.translateToFrench();
  }else {
    message.translateToSwedish();
  }
})(message);