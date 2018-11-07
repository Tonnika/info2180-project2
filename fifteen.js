"use strict"; 
window.onload = function(){
	var body = document.getElementsByTagName("body");
	console.log(body);
	
	var puzzleArea = document.getElementById("puzzlearea")
	var puzzlePiece = puzzleArea.children(); 
	var count =0;
	var hoz	=0;
	var ver =0;
	for(var i=0; i<puzzlePiece.length; i++){
		puzzlePiece[i].classList.add("puzzlepiece");
		puzzlePiece[i].style.top = hor + "px"; 
		puzzlePiece[i].style.left = ver + "px";
		puzzlePiece[i].style.backgroundPosition= '-' + puzzlePiece[i].style.left + ' ' + '-' + puzzlePiece[i].style.top; 
		hor += 100; 
		count +=1;
		
		if(count%4 ==0){
			ver +=100;
			hor=0;
		}
		
		
	};
	this.style.backgroundImage="url('background.jpg');
};