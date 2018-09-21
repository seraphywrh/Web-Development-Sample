var input = prompt("Please input four user names:", "Nash Ville Vander Bilt");
var playersName = input.split(" ");
var add = document.getElementsByClassName("add");
var min = document.getElementsByClassName("min");
var score_tag = document.getElementsByClassName("score");
var players = document.getElementsByClassName("player");
var tiara = document.getElementsByTagName("img");
var scores = [0, 0, 0, 0];

for(var i = 0; i < 4; i++){
	players[i].textContent = playersName[i];
}

for(let i = 0; i < 4; i++){
	add[i].addEventListener("click", function(){
	scores[i] += 1;
	updateScores();
	});

	min[i].addEventListener("click", function(){
	scores[i] -= 1;
	updateScores();
	});
}

function updateScores(){
	for(var i = 0; i < 4; i++){
		score_tag[i].textContent = scores[i];
	}
	updateWinner();
}

function updateWinner(){
	var winner = Math.max(...scores);
	for(var i = 0; i < 4; i++){
		if(scores[i] == winner){
			tiara[i].style.opacity = "1";
		}else{
			tiara[i].style.opacity = "0";
		}
	}
}