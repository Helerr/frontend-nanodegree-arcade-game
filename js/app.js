// Enemies our player must avoid
var Enemy = function(x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = x;
    this.y = y;
    this.speed = speed;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.speed * dt;
    if(this.x >= 505){
      this.x = 0;
    }
    checkCollisions(this);
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function (x, y, speed){
  this.x = x;
  this.y = y;
  this.speed = speed;
  this.sprite = 'images/char-boy.png';
}
Player.prototype.update = function(){

}
Player.prototype.render = function(){
  ctx.drawImage(Resources.get(this.sprite),this.x,this.y);
}

Player.prototype.handleInput = function (key) {
  if(key == 'left') {
    player.x -= player.speed;
  } else if (key == 'up') {
    player.y -= player.speed;
  } else if (key == 'right') {
    player.x += player.speed;
  } else if (key == 'down') {
    player.y += player.speed;
  }
}
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var allEnemies = [];
var player = new Player(200, 385, 50);
var enemy = new Enemy(0, Math.random() * 180 + 50, Math.random() * 256);

allEnemies.push(enemy);


//function to check player collitions
const checkCollisions = function (aEnemy) {
  if (player.y + 130 >= aEnemy.y + 90
    && player.x + 25 <= aEnemy.x + 90
    && player.y + 75 <= aEnemy.y + 135
    && player.x + 75 >= aEnemy.x + 10) {
    console.log("collision");
    player.x = 200;
    player.y = 385;
  }

}


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
