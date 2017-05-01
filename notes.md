make a controller and service constructor

move functions based on what they have in them to the controller or services. Services are not usable by the end user.

controller will have public function with this.

create methods:
this.functionName = function functionName()

service will have public methods that will get passed through the new instance of the service on the controller.

var catService = new CatService()

var targetCat = getCatById(catId)
becomes
var targetCat = catService.getCats(catId)

getting the list from service
on service:
this.getCats = function getCats(){
  return catsList.slice(0, cats.length)
}
call it on controller

link controller and service on index
load external, then services, then controllers, then initialize the app.

var app = {
  controllers:{
    catController: new CatController;
  }
}

onclick="app.controllers.catController.petCat(whiskers)"

///////////////////////////////////////////////////////////////////////////////////////

function SlapGameService(){
  // PRIVATE PARTS
  function Target(name, health, slap, punch, kick, roundhouse) {
    this.name = name;
    this.health = health;
    this.attacks = {
        "slap": slap,
        "punch": punch,
        "kick": kick,
        "roundhouse": roundhouse
    };
    this.items = []
    this.hits = 0
  };
  
  var mark = new Target("Mark", 100, 5, 15, 20, 50)
  var targets = [mark, new Target("Jake", 1000000, 1, 1, 1, 1)]
  
  function getTarget(targetName){
    for (var i = 0; i < targets.length; i++) {
      var target = targets[i]
      if(target.name == targetName){
        return target
      }
    }
  }
  
  // PUBLIC PARTS
  this.attackTarget = function(targetName, attackType){
    var target = getTarget(targetName)
    var validAttack = target.attacks[attackType]
    if(validAttack){
      target.health -= validAttack
    }
  }
  
  this.getTarget = function(targetName){
    return getTarget(targetName)
  }
}


function SlapGameController(){
  
  // PRIVATE PARTS
  var slapGameService = new SlapGameService()
  
  function update(){
    var target = slapGameService.getTarget("Jake")
    
    var attackButtons = ''
    
    for(var prop in target.attacks){
        attackButtons += `
          <button type="button" onclick="gameController.attack('${target.name}', '${prop}')">${prop}</button>
        `
    }
    
    
    document.getElementById("target").innerHTML = `
      <h1>${target.name} - ${target.health}</h1>
      ${attackButtons}
    `
  }
  
  // PUBLIC PARTS
  this.attack = function(name, attackType){
    slapGameService.attackTarget(name, attackType)
    update()
  }
  // RUNS WHENEVER SLAPGAMECONTROLLER IS INSTANTIATED
  update()
  
}

var gameController = new SlapGameController()



<div id="target">
  
</div>
<button type="button" onclick="gameController.attack('Mark', 'roundhouse')">SLAP</button>





