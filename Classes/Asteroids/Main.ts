namespace Assteroids {

  window.addEventListener("load", hndlLoad);

  export let crc2: CanvasRenderingContext2D;
  export const linewidth: number = 2;
  const moveables: Moveable[] = [];



  function hndlLoad(_event: Event): void {
    console.log("Asteroids starting");
    const canvas: HTMLCanvasElement | null = document.querySelector("canvas");
    if (!canvas)
      return;
    crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
    crc2.fillStyle = "#000000ff";
    crc2.strokeStyle = "#ffffffff";
    crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    crc2.lineWidth = linewidth;

    createPaths();
    console.log("Asteroids paths: ", asteroidPaths);

    const asteroid: Asteroid = new Asteroid(1);
    console.log(asteroid);
    // asteroid.draw();
    // asteroid.move(1);
    createAsteroids(20);

    // createShip();

    canvas.addEventListener("mousedown", shootProjectile);
    canvas.addEventListener("mouseup", shootLaser);
    // canvas.addEventListener("keypress", handleKeypress);
    // canvas.addEventListener("mousemove", setHeading);


    window.setInterval(update, 10);
  }

  // game Mechanics

  function shootProjectile(_event: MouseEvent): void {
    const origin: Vector = new Vector(_event.clientX - crc2.canvas.offsetLeft, _event.clientY - crc2.canvas.offsetTop);
    const velocity: Vector = new Vector(0, 0);
    velocity.random(100, 100);
    const projectile: Projectile = new Projectile(origin, velocity);
    moveables.push(projectile);

  }

  function shootLaser(_event: MouseEvent): void {
    console.log("Shoot Laser");
    const hotspot: Vector = new Vector(_event.clientX - crc2.canvas.offsetLeft, _event.clientY - crc2.canvas.offsetTop);
    const asteroidHit: Asteroid | null = getAsteroidHit(hotspot);
    if (asteroidHit)
      breakAsteroid(asteroidHit);
  }

  function breakAsteroid(_asteroid: Asteroid): void {
    if (_asteroid.size > 0.3) {
      for (let i: number = 0; i < 2; i++) {
        const fragment: Asteroid = new Asteroid(_asteroid.size / 2, _asteroid.position);
        fragment.velocity.add(_asteroid.velocity);
        moveables.push(fragment);
      }
    }
    _asteroid.expendable = true;
  }

  function getAsteroidHit(_hotspot: Vector): Asteroid | null {
    for (const moveable of moveables) {
      if (moveable instanceof Asteroid && moveable.isHit(_hotspot))
        return moveable;
    }
    return null;
  }


  function createAsteroids(_nAsteroids: number): void {
    console.log("Create Asteroids");
    for (let i: number = 0; i < _nAsteroids; i++) {
      const asteroid: Asteroid = new Asteroid(1.0);
      moveables.push(asteroid);

    }
  }

  function update(): void {
    // console.log("Update");
    crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

    for (const moveable of moveables) {
      moveable.move(1 / 50);
      moveable.draw();
    }

    deleteExpandables();


    // ship.draw
    // handleCollisions();
  }

  function deleteExpandables(): void {
    for (let i: number = moveables.length - 1; i >= 0; i--) {
      if (moveables[i].expendable)
        moveables.splice(i, 1);
    }

  }


  // Math
  export function randomIntInRange(_min: number, _max: number): number {
    return _min + Math.floor((_max - _min + 1) * Math.random());
  }


}