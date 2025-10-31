"use strict";
var Assteroids;
(function (Assteroids) {
    class Asteroid extends Assteroids.Moveable {
        position = new Assteroids.Vector(0, 0);
        velocity = new Assteroids.Vector(0, 0);
        type = 0;
        size = 0;
        constructor(_size, _position) {
            super(_position);
            if (_position)
                this.position = _position.copy();
            else
                this.position = new Assteroids.Vector(0, 0);
            this.velocity = new Assteroids.Vector(0, 0);
            this.velocity.random(100, 200);
            this.type = Assteroids.randomIntInRange(0, 3);
            this.size = _size;
        }
        draw() {
            // console.log("Asteroid draw");
            Assteroids.crc2.save();
            Assteroids.crc2.translate(this.position.x, this.position.y);
            Assteroids.crc2.scale(this.size, this.size);
            Assteroids.crc2.translate(-50, -50);
            Assteroids.crc2.lineWidth = 1 / this.size;
            Assteroids.crc2.stroke(Assteroids.asteroidPaths[this.type]);
            Assteroids.crc2.restore();
        }
        isHit(_hotspot) {
            const hitsize = 50 * this.size;
            const difference = new Assteroids.Vector(_hotspot.x - this.position.x, _hotspot.y - this.position.y);
            return (Math.abs(difference.x) < hitsize && Math.abs(difference.y) < hitsize);
        }
    }
    Assteroids.Asteroid = Asteroid;
})(Assteroids || (Assteroids = {}));
//# sourceMappingURL=Asteroid.js.map