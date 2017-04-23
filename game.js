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

function slap() {
  health--;
  hits++;
  slapImage();
  setTimeout(function () { returnImage() }, 1000);
  update();
}

function punch() {
  health = health - 5;
  hits++;
  punchImage();
  setTimeout(function () { returnImage() }, 1100);
  update();
}

function special() {
  health = health - 10;
  hits++;
  specialImage();
  setTimeout(function () { returnImage() }, 5000);
  update();
}

function update() {
  if (health <= 0) {
    health = 0;
    deadImage();
  }
  document.getElementById("health").innerHTML = health;
  document.getElementById("name").innerHTML = name;
  document.getElementById("hits").innerHTML = hits;
}

function reset() {
  health = 100;
  hits = 0;
  update();
}

function returnImage() {
  document.getElementById("img").src = "https://cloud.githubusercontent.com/assets/13141320/25314450/4e7847f8-2801-11e7-85fa-8778dccc3bdb.jpg";
}
function slapImage() {
  document.getElementById("img").src = "https://cloud.githubusercontent.com/assets/13141320/25314452/4e8b41be-2801-11e7-93b8-2b9723b73f5f.gif";
}
function punchImage() {
  document.getElementById("img").src = "https://cloud.githubusercontent.com/assets/13141320/25314449/4e5f32b8-2801-11e7-8e2f-a949fe035bf9.gif";
}
function specialImage() {
  document.getElementById("img").src = "https://cloud.githubusercontent.com/assets/13141320/25314451/4e89c7b2-2801-11e7-980a-0b11d1975bd9.gif";
}
function deadImage(){
  document.getElementById("img").src = "https://cloud.githubusercontent.com/assets/13141320/25314446/47c68e1a-2801-11e7-9411-f0509814c713.gif";
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


