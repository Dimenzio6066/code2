namespace Assteroids {

    export class Asteroid {

        public position: Vector = new Vector(0, 0);
        public velocity: Vector = new Vector(0, 0);
        public type: number = 0;
        public size: number = 0;

        public constructor(_size: number, _position?: Vector) {
            // console.log("Asteroid constructor");

            if (_position)
                this.position = _position;
            else
                this.position = new Vector(0, 0);

            this.velocity = new Vector(0, 0);
            this.velocity.random(500, 1000);

            this.type = randomIntInRange(0, 3);
            this.size = _size;
        }

        public move(_timselice: number): void {
            // console.log("Asteroid move");
            const offset: Vector = new Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timselice);
            this.position.add(offset);

            if (this.position.x < 0)
                this.position.x += crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += crc2.canvas.height;
            if (this.position.x > crc2.canvas.width)
                this.position.x -= crc2.canvas.width;
            if (this.position.y > crc2.canvas.height)
                this.position.y -= crc2.canvas.height;
        }


        public draw(): void {
            // console.log("Asteroid draw");
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.scale(this.size, this.size);
            crc2.translate(-50, -50);
            crc2.stroke(asteroidPaths[this.type]);
            crc2.restore();
        }

        public isHit(_hotspot: Vector): boolean {
            const hitsize: number = 50 * this.size;
            const difference: Vector = new Vector(_hotspot.x - this.position.x, _hotspot.y - this.position.y);
            return (Math.abs(difference.x) < hitsize && Math.abs(difference.y) < hitsize);
        }
    }



}