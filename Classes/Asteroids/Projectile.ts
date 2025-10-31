namespace Assteroids {

    export class Projectile extends Moveable {
        public lifetime: number = 10;

        public constructor(_position: Vector, _velocity: Vector) {
            super(_position);

            this.velocity = _velocity.copy();

        }

        public draw(): void {
            // console.log("Asteroid draw");
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.strokeRect(-1, -1, 1, 1);
            crc2.restore();
        }

        public move(_timeslice: number): void {
            super.move(_timeslice);
            this.lifetime -= _timeslice;
            if (this.lifetime < 0) {
                this.expendable = true;
            }
        }
    }



}