// CREATE on click events for game to run a scenario
document.ready = function() {

  $("#obi").click();
  $("#maul").click();
  $("#skywalker").click();
  $("#sidious").click();
};


//create empty objects for my character to append attributes

var myPlayer = {};
var enemyDefender = {};

//booleans to check for circumstances
var gameStart = false;
var gameOver = false;
var playerChosen = false;
var defenderChosen = false;
//var that changes images into strings
var imageObi = $("#obi").html;
var imageMaul = $("#maul").html;
var imageSidious = $("#sidious").html;
var imageSkywalker = $("#skywalker").html;

//objects for each character
var obiwan = {
    name: "Obi-Wan",
    health:0,
    attackPower:8,
    counterAttack:10,
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
    console.log(this)
    
}

//pass on obj properties to defender
function chooseDefender (chosenDefender){
    enemyDefender.name = chosenDefender.name;
    enemyDefender.health = chosenDefender.health;
    enemyDefender.counterAttack= chosenDefender.counterAttack;
    enemyDefender.attack = chosenDefender.attack;
}
//make an object for attack in each function that display the "name" hp as myHP
    
    
//create scenearios where once the character is selected, and the defender is selected that we can attack.
//create a scenario where the selected
    
function obiwanGame (){
    if(playerChosen && gameOver&& gameStart){
        gameStart = true;
        chooseCharacter(obiwan);
        $("#my-character").append(imageObi);
       
        //append obiwan image with stats onto my player div
        //setup on click function for attack 
        $("#attack").click(function (){
            
        })


    }
    
}

//create function for removing photos from where they are and appending them into #enemies-left

//creage function where player chosen and player

//create conditional for a game over scenario if hp is less than 0

//create conditional for a winner scenario and calculate math functions to properly add and subtract

//setup a