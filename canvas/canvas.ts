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
    drawAxis();
  }



  function drawAxis() {
    let coordinateAxes: Path2D = new Path2D();
    let axisLength: number = 200;
    coordinateAxes.moveTo(0, 0);
    coordinateAxes.lineTo(0, axisLength);
    coordinateAxes.moveTo(0, 0);
    coordinateAxes.lineTo(axisLength, 0);

    for (let i = 0; i < axisLength; i = i + 10) {
      coordinateAxes.moveTo(0, i);
      coordinateAxes.lineTo(4, i);
      coordinateAxes.moveTo(i, 0);
      coordinateAxes.lineTo(i, 4);
    }


    coordinateAxes.closePath();

    crc2.stroke(coordinateAxes);

  }




  // Math
  function randomIntInRange(_min: number, _max: number): number {
    return _min + Math.floor((_max - _min + 1) * Math.random());
  }
}