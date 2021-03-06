function GameService() {

  //private

  function Target(name, health, hits, slap, punch, special, item) {
    this.name = name;
    this.health = health;
    this.hits = hits;
    this.slap = slap;
    this.punch = punch;
    this.special = special;
    this.item = item;
  }

  function MakePlayer(name, health, hits, slap, punch, special, item) {
    this.name = name;
    this.health = health;
    this.hits = hits;
    this.slap = slap;
    this.punch = punch;
    this.special = special;
    this.item = item;
  }

  var Joffrey = new Target("Joffrey", 100, 0, 1, 10, 15);
  var Player = new MakePlayer("Player", 100, 0, 1, 10, 15);
  var targets = [Joffrey];
  var players = [Player];

  function Item(name, health, attack, defense) {
    this.name = name;
    this.health = health;
    this.attack = attack;
    this.defense = defense;
  }

  function getRandomIntInclusive(min, max) {
    var min = Math.ceil(min);
    var max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  //public

  this.getPlayer = function getPlayer(playerName) {
    for (var i = 0; i < players.length; i++) {
      var player = players[i];
      if (player.name == playerName) {
        return player;
      }
    }
  }

  this.getTarget = function getTarget(targetName) {
    for (var i = 0; i < targets.length; i++) {
      var target = targets[i];
      if (target.name == targetName) {
        return target;
      }
    }
  }

  this.slapAttack = function slapAttack(target, player) {
    target.health += target.item.health;
    target.health = target.health - ((player.item.attack - target.item.defense) 
      + getRandomIntInclusive(player.slap/2, player.slap));
    target.hits++;
    return (target);
  }

  this.punchAttack = function punchAttack(target, player) {
    target.health = target.health - ((player.item.attack - target.item.defense) 
      + getRandomIntInclusive(player.punch/2, player.punch));
    target.hits++;
    return (target);
  }

  this.specialAttack = function specialAttack(target, player) {
    target.health = target.health - ((player.item.attack - target.item.defense) 
      + getRandomIntInclusive(player.special/2, player.special));
    target.hits++;
    return (target);
  }

  this.resetGame = function resetGame(target, player) {
    target.health = 100;
    player.health = 100;
    target.hits = 0;
    return (target, player);
  }

  this.determineItem = function determineItem(target) {
    var itemType = getRandomIntInclusive(0, 3);
    if (itemType == 0) {
     target.item = new Item("nothing", 0, 0, 0);
    } else if (itemType == 1) {
      target.item = new Item("Armor on", getRandomIntInclusive(0, 10), 0, getRandomIntInclusive(0, 15));
    } else if (itemType == 2) {
      target.item = new Item("a Sword", 0, getRandomIntInclusive(0, 15), getRandomIntInclusive(0, 5)
      );
    }else if(itemType == 3) {
      target.item = new Item("a Shield", getRandomIntInclusive(0, 5), 0, getRandomIntInclusive(0, 10));
    }
  }

  this.enemyAttack = function enemyAttack(target, player){
    player.health = player.health + player.item.health;
    var attackType = getRandomIntInclusive(1,3);
    if(attackType == 0){
    }else if(attackType == 1){
      player.health = 
      player.health - ((target.item.attack - player.item.defense) 
      + getRandomIntInclusive(target.slap/2, target.slap));
    }else if (attackType == 2){
      player.health = 
      player.health - ((target.item.attack - player.item.defense) 
      + getRandomIntInclusive(target.punch/2, target.punch));
    }else if(attackType == 3){
      player.health = 
      player.health - ((target.item.attack - player.item.defense) 
      + getRandomIntInclusive(target.special/2, target.special));
    }
  }

  this.getItem = function getItem(player, itemType){
    if (itemType == 0) {
     player.item = new Item("nothing", 0, 0, 0);
    } else if (itemType == 1) {
      player.item = new Item("Armor on", getRandomIntInclusive(0, 10), 0, getRandomIntInclusive(0, 15));
    } else if (itemType == 2) {
      player.item = new Item("a Sword", 0, getRandomIntInclusive(0, 15), getRandomIntInclusive(0, 5)
      );
    }else if(itemType == 3) {
      player.item = new Item("a Shield", getRandomIntInclusive(0, 5), 0, getRandomIntInclusive(0, 10));
    }
  }
}