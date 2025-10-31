"use strict";
var Assteroids;
(function (Assteroids) {
    class Moveable {
        position = new Assteroids.Vector(0, 0);
        velocity = new Assteroids.Vector(0, 0);
        expendable = false;
        constructor(_position) {
            if (_position)
                this.position = _position.copy();
            else
                this.position = new Assteroids.Vector(0, 0);
            this.velocity = new Assteroids.Vector(0, 0);
        }
        move(_timselice) {
            const offset = this.velocity.copy();
            offset.scale(_timselice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += Assteroids.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += Assteroids.crc2.canvas.height;
            if (this.position.x > Assteroids.crc2.canvas.width)
                this.position.x -= Assteroids.crc2.canvas.width;
            if (this.position.y > Assteroids.crc2.canvas.height)
                this.position.y -= Assteroids.crc2.canvas.height;
        }
        draw() {
            //console.log("Moveable move");
        }
    }
    Assteroids.Moveable = Moveable;
})(Assteroids || (Assteroids = {}));
//# sourceMappingURL=Moveable.js.map