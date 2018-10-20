// CREATE on click events for game to run a scenario
document.ready = function() {

  $("#obi").click(game1);
  $("#maul").click();
  $("#skywalker").click();
  $("#sidious").click();
};


//create empty objects for my character to append attributes

var myPlayer = {};
var enemyDefender= {};

//booleans to check for circumstances
var gameStart = false;
var gameOver = false;
var playerChosen = false;
var defenderChosen = false;
//var that changes images into strings
var imageObi = $("#obi").html
var imageMaul = $("#maul").html;
var imageSidious = $("#sidious").html;
var imageSkywalker = $("#skywalker")

//objects for each character
var obiwan ={
    name: "Obi-Wan",
    health:0,
    attackPower:0,
    counterAttack:0,
};
var darthmaul = {
    name:"Darth-Maul",
    health:100,
    attackPower: 10,
    counterAttack: 9,

}
var darthsidious = {
    name:"Darth Sidious",
    health:150,
    attackPower:8,
    counterAttack:20

}
var skywalker = {
    name: "Luke Skywalker",
    health: 100,
    attackPower:25,
    counterAttack:26,

}



//pass on obj properties to chosen character
function chooseCharacter (chosenCharacter){
  myPlayer.name = chosenCharacter.name;
  myPlayer.health = chosenCharacter.health;
  myPlayer.counterAttack = chosenCharacter.counterattack;
  myPlayer.attack = chosenCharacter.attack;
    
}

//pass on obj properties to defender
function chooseDefender (chooseDefender){
    enemyDefender.name
}
//make an object for attack in each function that display the "name" hp as myHP
    
    
//create scenearios where once the character is selected, and the defender is selected that we can attack.
//create a scenario where the selected
    
function game1 (){
    
    
}