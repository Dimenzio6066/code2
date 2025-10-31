namespace Assteroids {

  window.addEventListener("load", hndlLoad);

  export let crc2: CanvasRenderingContext2D;
  const asteroids: Asteroid[] = [];

  function hndlLoad(_event: Event): void {
    console.log("Asteroids starting");
    const canvas: HTMLCanvasElement | null = document.querySelector("canvas");
    if (!canvas)
      return;
    crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
    crc2.fillStyle = "#000000ff";
    crc2.strokeStyle = "#ffffffff";
    crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

    createPaths();
    console.log("Asteroids paths: ", asteroidPaths);

    const asteroid: Asteroid = new Asteroid(1);
    console.log(asteroid);
    asteroid.draw();
    asteroid.move(1);
    createAsteroids(20);

    // createShip();

    // canvas.addEventListener("mousedown", loadLaser);
    canvas.addEventListener("mouseup", shootLaser);
    // canvas.addEventListener("keypress", handleKeypress);
    // canvas.addEventListener("mousemove", setHeading);


    window.setInterval(update, 20);
  }

  // game Mechanics
  function shootLaser(_event: MouseEvent): void {
    console.log("Shoot Laser");
    let hotspot: Vector = new Vector(_event.clientX - crc2.canvas.offsetLeft, _event.clientY - crc2.canvas.offsetTop);
    let asteroidHit: Asteroid | null = getAsteroidHit(hotspot);
    if (asteroidHit)
      breakAsteroid(asteroidHit);
  }

  function breakAsteroid(_asteroid: Asteroid): void {
    if (_asteroid.size > 0.3) {
      for (let i: number = 0; i < 2; i++) {
        let fragment: Asteroid = new Asteroid(_asteroid.size/ 2, _asteroid.position);
        fragment.velocity.add(_asteroid.velocity);
        asteroids.push(fragment);
      }
    }
const index: number = asteroids.indexOf(_asteroid);
asteroids.splice(index,1);
  }

  function getAsteroidHit(_hotspot: Vector): Asteroid | null {
    for (let asteroid of asteroids) {
      if (asteroid.isHit(_hotspot))
        return asteroid;
    }
    return null;
  }


  function createAsteroids(_nAsteroids: number): void {
    console.log("Create Asteroids");
    for (let i: number = 0; i < _nAsteroids; i++) {
      const asteroid: Asteroid = new Asteroid(1.0);
      asteroids.push(asteroid);

    }
  }

  function update(): void {
    console.log("Update");
    crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

    for (const asteroid of asteroids) {
      asteroid.move(1 / 50);
      asteroid.draw();
    }

    // ship.draw
    // handleCollisions();
  }


  // Math
  export function randomIntInRange(_min: number, _max: number): number {
    return _min + Math.floor((_max - _min + 1) * Math.random());
  }


}