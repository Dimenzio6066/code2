"use strict";
var Assteroids;
(function (Assteroids) {
    class Projectile extends Assteroids.Moveable {
        lifetime = 6;
        constructor(_position, _velocity) {
            super(_position);
            this.velocity = _velocity.copy();
        }
        draw() {
            // console.log("Asteroid draw");
            Assteroids.crc2.save();
            Assteroids.crc2.translate(this.position.x, this.position.y);
            Assteroids.crc2.strokeRect(-1, -1, 1, 1);
            Assteroids.crc2.restore();
        }
        move(_timeslice) {
            super.move(_timeslice);
            this.lifetime -= _timeslice;
            if (this.lifetime < 0) {
                this.expendable = true;
            }
        }
    }
    Assteroids.Projectile = Projectile;
})(Assteroids || (Assteroids = {}));
//# sourceMappingURL=Projectile.js.map