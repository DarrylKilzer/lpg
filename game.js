// let health = 100;
// let name = 'enemy';
// let hits = 0;

// function slap(){
// health--;
// hits++;
// update();
// }

// function punch(){
// health = health - 5;
// hits++;
// update();
// }

// function kick(){
// health = health - 10;
// hits++;
// update();
// }

// function update(){
//   if(health <= 0){
//     health = 0;
//   }
//   document.getElementById("health").innerHTML = health;
//   document.getElementById("name").innerHTML = name;
//   document.getElementById("hits").innerHTML = hits;
// }

// function reset(){
//   health = 100;
//   hits = 0;
//   update();
// }
// update();

let health = 100;
let name = 'enemy';
let hits = 0;

function slap(){
health--;
hits++;
slapImage();
setTimeout(function(){returnImage()},1000);
update();
}

function punch(){
health = health - 5;
hits++;
punchImage();
setTimeout(function(){returnImage()},1100);
update();
}

function special(){
health = health - 10;
hits++;
specialImage();
setTimeout(function(){returnImage()},5000);
update();
}

function update(){
  if(health <= 0){
    health = 0;
  }
  document.getElementById("health").innerHTML = health;
  document.getElementById("name").innerHTML = name;
  document.getElementById("hits").innerHTML = hits;
}

function reset(){
  health = 100;
  hits = 0;
  update();
}

function returnImage(){
  document.getElementById("img").src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQQxJCqBhpsHR4hz14DVaYg3eJUXj7vHuZD-Urna-aXzkhSfq5M"
}
function slapImage(){
  document.getElementById("img").src="https://media3.giphy.com/media/UHLtCLwRsbDFK/200.webp#2-grid1"
}
function punchImage(){
  document.getElementById("img").src="https://media0.giphy.com/media/XzD71I16QPnuU/200.webp#4-grid1"
}
function specialImage(){
  document.getElementById("img").src="https://media4.giphy.com/media/DE9UvYPmmUf0A/200.webp#41-grid1"
}

update();






























// let characters =[{
//   name: "player",
//   id: 1,
//   status: '',
//   attack: '',
//   defense: '',
//   health: 100,
//   picture: "http://unisci24.com/data_images/wlls/10/205118-character.jpg"
// },
// {
//   name: "Enemy",
//   id: 2,
//   status: '',
//   attack: '',
//   defense: '',
//   health: 100,
//   picture: "http://i530.photobucket.com/albums/dd343/bproctor0901/PeterGriffin.jpg"
// }];
// let player = characters[0];
// let enemy = characters[1];

// function update(characters) {
  
//   let = template = "";

// for(let i = 0; i < characters.length; i++){
// let character = characters[i];
// template +=

//   `


  
//   `
// }

// }

// function gameManager() {
//   enemyAttack();
//   enemyDefense();
//   calculatePlayerDamage();
//   update();
// }

// function startRound() {
//   update(characters);
//   if (playerAttack != '' && playerDefense != '') {
//     gameManager();
//   }else {
//     return;
//   }
// }

// function endRound() {
//   update();
// }

// function playerSelectAttack(attack) {
//   playerAttack = attack;
// }

// function playerSelectDefense(defense) {
//   playerDefense = defense;
// }

// function enemyAttack() {
//   let minimum = 1;
//   let maximum = 3;

//   random = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

//   if (random === 1) {
//     enemy.attack = 'punch';
//   } else if (random === 2) {
//     enemy.attack = 'kick';
//   } else if (random === 3) {
//     enemy.attack = 'combo'
//   }
// }

// function enemyDefense() {
//   let minimum = 1;
//   let maximum = 3;

//   random = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

//   if (random === 1) {
//     enemy.defense = 'blockPunch';
//   } else if (random === 2) {
//     enemy.defense = 'blockKick';
//   } else if (random === 3) {
//     enemy.defense = 'blockCombo'
//   }
// }

// function calculatePlayerDamage() {

//   if (playerAttack == 'punch' && enemyDefense == 'blockPunch') {
//     enemy.health -= 5;
//   } else if (playerAttack == 'punch') {
//     enemy.health -= 10;
//   } else if (playerAttack == 'kick' && enemyDefense == 'blockKick') {
//     enemy.health -= 10;
//   } else if (playerAttack == 'kick') {
//     enemy.health -= 20;
//   } else if (playerAttack == 'combo' && enemyDefense == 'blockCombo') {
//   } else if (playerAttack == 'combo') {
//     enemy.health -= 30;
//   }
// }


