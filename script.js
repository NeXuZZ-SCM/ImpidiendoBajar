window.onscroll = function() {
  console.log("Vertical: " + window.scrollY);
  console.log("Horizontal: " + window.scrollX);

  if(window.scrollY > 250){
    $("html, body").animate({ scrollTop: 0 }, 250);
    document.getElementById('Escondido').style.visibility = 'visible';
    
  }
  if(window.scrollY <= 250){
    $("html, body").animate(null);

  }

};
function zarlanga(){
  
  var elementopadre = document.getElementById("padre");
  
  if (!document.getElementById("body")){
		alert("El elemento selecionado no existe");
	} else {
    var nodohijo = document.getElementById("body");
		var throwawayNode = elementopadre.removeChild(nodohijo);
  }
  onscroll = undefined;
}