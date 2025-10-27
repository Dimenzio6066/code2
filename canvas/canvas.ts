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

    crc2.fillStyle = "#6c0effff";
    crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

    // let maxTriangleCount: number = 300;
    // for (let i = 0; i < maxTriangleCount; i++) {
    //   // drawTriangle();
    // }

    drawAxis();

  }

  // Draw
  // function drawTriangle() {
  //   let pointA: Vector2 = { x: randomIntInRange(0, canvas.width), y: randomIntInRange(0, canvas.height) };
  //   let pointB: Vector2 = { x: randomIntInRange(0, canvas.width), y: randomIntInRange(0, canvas.height) };
  //   let pointC: Vector2 = { x: randomIntInRange(0, canvas.width), y: randomIntInRange(0, canvas.height) };
  //   let path: Path2D = new Path2D();



  //   path.moveTo(pointA.x, pointA.y);
  //   path.lineTo(pointB.x, pointB.y);
  //   path.lineTo(pointC.x, pointC.y);
  //   path.lineTo(pointA.x, pointA.y);
  //   path.closePath();

  //   crc2.stroke(path);
  //   crc2.fillStyle = "#bea34176";11
  //   crc2.fill(path);
  // }

  function drawAxis() {
    let coordinateAxes: Path2D = new Path2D();
    let axisLength: number = 200;
    coordinateAxes.moveTo(0, 0);
    coordinateAxes.lineTo(0, axisLength);
    coordinateAxes.moveTo(0, 0);
    coordinateAxes.lineTo(axisLength, 0);

    for (let i = 0; i < axisLength; i = i+ 10) {
      coordinateAxes.moveTo(0,i);
      coordinateAxes.lineTo(4,i);
      coordinateAxes.moveTo(i,0);
      coordinateAxes.lineTo(i,4);
    }


    coordinateAxes.closePath();

      crc2.stroke(coordinateAxes);

  }




  // Math
  function randomIntInRange(_min: number, _max: number): number {
    return _min + Math.floor((_max - _min + 1) * Math.random());
  }
}