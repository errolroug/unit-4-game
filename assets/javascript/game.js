// CREATE on click events for game to run a scenario
document.ready = function(){
  $("#obi-wan").click(game.obi);
  $("#darth-maul").click(game.maul);
  $("#luke-skywalker").click(game.skywalker);
  $("#darth-sidious").click(game.sidious);
}

//create an object with methods for 4 game scenarios
var game = {


    obi: function(){},

    maul: function (){},
    
    skywalker: function(){},

    sidious: function(){},

    
}