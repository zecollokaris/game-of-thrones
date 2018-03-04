//If
var player1_playing = true;
var player2_playing = false;

//
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
//
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
    return Math.floor(Math.random()*6) +1;
}
