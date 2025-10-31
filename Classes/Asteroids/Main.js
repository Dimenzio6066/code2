"use strict";
var Assteroids;
(function (Assteroids) {
    window.addEventListener("load", hndlLoad);
    Assteroids.linewidth = 2;
    const moveables = [];
    function hndlLoad(_event) {
        console.log("Asteroids starting");
        const canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        Assteroids.crc2 = canvas.getContext("2d");
        Assteroids.crc2.fillStyle = "#000000ff";
        Assteroids.crc2.strokeStyle = "#ffffffff";
        Assteroids.crc2.fillRect(0, 0, Assteroids.crc2.canvas.width, Assteroids.crc2.canvas.height);
        Assteroids.crc2.lineWidth = Assteroids.linewidth;
        Assteroids.createPaths();
        console.log("Asteroids paths: ", Assteroids.asteroidPaths);
        const asteroid = new Assteroids.Asteroid(1);
        console.log(asteroid);
        // asteroid.draw();
        // asteroid.move(1);
        createAsteroids(10);
        // createShip();
        canvas.addEventListener("mousedown", shootProjectile);
        canvas.addEventListener("mouseup", shootLaser);
        // canvas.addEventListener("keypress", handleKeypress);
        // canvas.addEventListener("mousemove", setHeading);
        window.setInterval(update, 10);
    }
    // game Mechanics
    function shootProjectile(_event) {
        const origin = new Assteroids.Vector(_event.clientX - Assteroids.crc2.canvas.offsetLeft, _event.clientY - Assteroids.crc2.canvas.offsetTop);
        const velocity = new Assteroids.Vector(0, 0);
        velocity.random(100, 100);
        const projectile = new Assteroids.Projectile(origin, velocity);
        moveables.push(projectile);
    }
    function shootLaser(_event) {
        console.log("Shoot Laser");
        const hotspot = new Assteroids.Vector(_event.clientX - Assteroids.crc2.canvas.offsetLeft, _event.clientY - Assteroids.crc2.canvas.offsetTop);
        const asteroidHit = getAsteroidHit(hotspot);
        if (asteroidHit)
            breakAsteroid(asteroidHit);
    }
    function breakAsteroid(_asteroid) {
        if (_asteroid.size > 0.3) {
            for (let i = 0; i < 2; i++) {
                const fragment = new Assteroids.Asteroid(_asteroid.size / 2, _asteroid.position);
                fragment.velocity.add(_asteroid.velocity);
                moveables.push(fragment);
            }
        }
        _asteroid.expendable = true;
    }
    function getAsteroidHit(_hotspot) {
        for (const moveable of moveables) {
            if (moveable instanceof Assteroids.Asteroid && moveable.isHit(_hotspot))
                return moveable;
        }
        return null;
    }
    function createAsteroids(_nAsteroids) {
        console.log("Create Asteroids");
        for (let i = 0; i < _nAsteroids; i++) {
            const asteroid = new Assteroids.Asteroid(1.0);
            moveables.push(asteroid);
        }
    }
    function update() {
        console.log("Update");
        Assteroids.crc2.fillRect(0, 0, Assteroids.crc2.canvas.width, Assteroids.crc2.canvas.height);
        for (const moveable of moveables) {
            moveable.move(1 / 50);
            moveable.draw();
        }
        deleteExpandables();
        // ship.draw
        // handleCollisions();
    }
    function deleteExpandables() {
        for (let i = moveables.length - 1; i >= 0; i--) {
            if (moveables[i].expendable)
                moveables.splice(i, 1);
        }
    }
    // Math
    function randomIntInRange(_min, _max) {
        return _min + Math.floor((_max - _min + 1) * Math.random());
    }
    Assteroids.randomIntInRange = randomIntInRange;
})(Assteroids || (Assteroids = {}));
//# sourceMappingURL=Main.js.map