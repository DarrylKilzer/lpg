function GameController() {

  //private

  var gameService = new GameService();
  

  function update() {
    var target = gameService.getTarget("Joffrey");
    var player = gameService.getPlayer("Player");
    
    gameService.determineItem(target);
    gameService.determineItem(player);
    if (target.health <= 0) {
      target.health = 0;
      deadImage();
    }else if(player.health <= 0) {
      player.health = 0;
    }
    var playerHealth = document.getElementById("playerHealth").innerHTML = player.health;
    var playerItem = document.getElementById("playerItem").innerHTML = player.item.name;
    var targetName = document.getElementById("name").innerHTML = target.name;
    var targetItem = document.getElementById("targetItem").innerHTML = target.item.name;
    var targetHealth = document.getElementById("health").innerHTML = target.health;
    var targetHits = document.getElementById("hits").innerHTML = target.hits;
  }

  function returnImage() {
    document.getElementById("img").src = "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQQxJCqBhpsHR4hz14DVaYg3eJUXj7vHuZD-Urna-aXzkhSfq5M";
  }
  function slapImage() {
    document.getElementById("img").src = "https://media3.giphy.com/media/UHLtCLwRsbDFK/200.webp#2-grid1";
  }
  function punchImage() {
    document.getElementById("img").src = "https://media0.giphy.com/media/XzD71I16QPnuU/200.webp#4-grid1";
  }
  function specialImage() {
    document.getElementById("img").src = "https://media4.giphy.com/media/DE9UvYPmmUf0A/200.webp#41-grid1";
  }
  function deadImage() {
    document.getElementById("img").src = "https://media3.giphy.com/media/WlKlOHTBxmAyQ/200.webp#81-grid1";
  }
  update();

  //public

  this.slap = function slap(target, player) {
    var target = gameService.getTarget("Joffrey");
    var player = gameService.getPlayer("Player");
    gameService.slapAttack(target);
    gameService.enemyAttack(target, player);
    slapImage();
    setTimeout(function () { returnImage() }, 1100);
    update();
  }

  this.punch = function punch(target, player) {
    var target = gameService.getTarget("Joffrey");
    var player = gameService.getPlayer("Player");
    gameService.punchAttack(target);
    gameService.enemyAttack(target, player);
    punchImage();
    setTimeout(function () { returnImage() }, 1200);
    update();
  }

  this.special = function special(target, player){
    var target = gameService.getTarget("Joffrey");
    var player = gameService.getPlayer("Player");
    gameService.specialAttack(target);
    gameService.enemyAttack(target, player);
    specialImage();
    setTimeout(function () { returnImage() }, 5000);
    update();
  }

  this.reset = function reset(target, player) {
    var target = gameService.getTarget("Joffrey");
    var player = gameService.getPlayer("Player");
    gameService.resetGame(target, player);
    gameService.enemyAttack(target, player);
    update();
  }
}