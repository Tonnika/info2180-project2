"use strict"; 
window.onload = function (){
	var body = document.getElementsByTagName("body");
	console.log(body);
	
	var puzzleArea = $("#puzzlearea");
	var puzzlePiece = puzzleArea.children(); 
	
	for(var i=0; i<puzzlePiece.length; i++){
		$(puzzlePiece[i].classList.add("puzzlepiece");
	}
};