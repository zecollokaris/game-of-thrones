//If player 1 is playing player 2 can't and vice verse
var player1_playing = true;
var player2_playing = false;

//player 1
function dice_1_clicked(){
  if (player1_playing == true) {
    var random1 = generate_random_number();
    if (random1 === 1) {
      console.log("Player 1 has reached 1 ");
      player1_playing = false;
      player2_playing = true;
    }else{
      console.log("Player 1 randomized " + random1);
    }
    document.getElementById('dice_1_result').innerHTML = random1;

  }else {
    console.error("Player 1 cannot play, until player 2 gets a 1");
  }

}



//player 2
function dice_2_clicked(){
  if (player2_playing == true) {
    var random2 =  generate_random_number();
    if (random2 === 1) {
      console.log("Player 2 has reached 1");
      player2_playing = false;
      player1_playing = true;
    }else{
      console.log("Player 2 randomized " + random2);
    }
    document.getElementById('dice_2_result').innerHTML = random2;

  }else {
    console.error("Player 2 cannot play, until player 1 gets a 1");
  }


}


function generate_random_number(){
    return Math.floor(Math.random()*6) +1 ;
}

//hold game function Player 1
function holdgame1_clicked() {
  if (player1_playing == true) {
    console.log('Player 2 turn to play')
    player1_playing = false;
    player2_playing = true;
  }
}

//hold game function Player 2
function holdgame2_clicked() {
  if (player2_playing == true) {
    console.log('player 1 turn to play')
    player1_playing = true;
    player2_playing = false;
  }
}
