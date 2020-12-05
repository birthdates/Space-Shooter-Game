function Player(c1, c2, c3) {
  var bullets = [];
  var x;
  var y;
  var lastFired;
  var fireCooldown = 200;
  var img;
  var w = 40;

  this.setup = function () {
    x = wi / 2;
    y = he - 50;
  };

  this.move = function (am) {
    var a = x + am;
    if (a >= wi - 10 || a <= -3) {
      return;
    }
    x += am;
  };

  this.isOnFireCooldown = function () {
    return Date.now() < lastFired;
  };

  this.show = function () {
    fill(c1, c2, c3);
    image(this.img, x, y, w, w);
    for (var i = 0; i < bullets.length; i++) {
      var bullet = bullets[i];
      if (bullet.show()) {
        continue;
      }
      bullets.splice(i, 1);
    }
  };

  this.fire = function () {
    if (this.isOnFireCooldown()) return;
    lastFired = Date.now() + fireCooldown;
    var bullet = new Bullet(x + w / 2, y + 11, 15, c1, c2, c3);
    bullets.push(bullet);
    bullet.populatePossibleEnemies();
  };
  return this;
}
