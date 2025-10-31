namespace Assteroids {

    export class Moveable {

        public position: Vector = new Vector(0, 0);
        public velocity: Vector = new Vector(0, 0);
        public expendable: boolean = false;


        public constructor(_position?: Vector) {


            if (_position)
                this.position = _position.copy();
            else
                this.position = new Vector(0, 0);

            this.velocity = new Vector(0, 0);
        }

        public move(_timselice: number): void {

            const offset: Vector = this.velocity.copy();
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
            //console.log("Moveable move");
        }
    }
}