namespace Canvas {
  window.addEventListener("load", hndlLoad)
  interface Vector2 { x: number, y: number }
  let canvas: HTMLCanvasElement;
  let crc2: CanvasRenderingContext2D;

  // Load
  function hndlLoad() {
    canvas = document.querySelector("canvas")!;
    crc2 = canvas.getContext("2d")!;
    canvas.width = 1640;
    canvas.height = 900;

    crc2.fillStyle = "#5b39abff";
    crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

    drawTriangle();

    console.log(canvas.width);
    console.log(canvas.height);
  }

  // Draw
  function drawTriangle() {
    let pointA: Vector2 = { x: randomIntInRange(0, canvas.width), y: randomIntInRange(0, canvas.height) };
    let pointB: Vector2 = { x: randomIntInRange(0, canvas.width), y: randomIntInRange(0, canvas.height) };
    let pointC: Vector2 = { x: randomIntInRange(0, canvas.width), y: randomIntInRange(0, canvas.height) };
    let path: Path2D = new Path2D();
    console.log(pointA);


    path.moveTo(pointA.x, pointA.y);
    path.lineTo(pointB.x, pointB.y);
    path.lineTo(pointC.x, pointC.y);
    path.lineTo(pointA.x, pointA.y);
    path.closePath();

    crc2.stroke(path);
    crc2.fillStyle = "#bea341ff"
    crc2.fill(path);
  }

  // Math
  function randomIntInRange(_min: number, _max: number): number {
    return _min + Math.floor((_max - _min + 1) * Math.random());
  }
}