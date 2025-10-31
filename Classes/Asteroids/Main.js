"use strict";
var Assteroids;
(function (Assteroids) {
    window.addEventListener("load", hndlLoad);
    const asteroids = [];
    function hndlLoad(_event) {
        console.log("Asteroids starting");
        const canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        Assteroids.crc2 = canvas.getContext("2d");
        Assteroids.crc2.fillStyle = "#000000ff";
        Assteroids.crc2.strokeStyle = "#ffffffff";
        Assteroids.crc2.fillRect(0, 0, Assteroids.crc2.canvas.width, Assteroids.crc2.canvas.height);
        Assteroids.createPaths();
        console.log("Asteroids paths: ", Assteroids.asteroidPaths);
        const asteroid = new Assteroids.Asteroid(1);
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
    function shootLaser(_event) {
        console.log("Shoot Laser");
        let hotspot = new Assteroids.Vector(_event.clientX - Assteroids.crc2.canvas.offsetLeft, _event.clientY - Assteroids.crc2.canvas.offsetTop);
        let asteroidHit = getAsteroidHit(hotspot);
        if (asteroidHit)
            breakAsteroid(asteroidHit);
    }
    function breakAsteroid(_asteroid) {
        if (_asteroid.size > 0.3) {
            for (let i = 0; i < 2; i++) {
                let fragment = new Assteroids.Asteroid(_asteroid.size / 2, _asteroid.position);
                fragment.velocity.add(_asteroid.velocity);
                asteroids.push(fragment);
            }
        }
        const index = asteroids.indexOf(_asteroid);
        asteroids.splice(index, 1);
    }
    function getAsteroidHit(_hotspot) {
        for (let asteroid of asteroids) {
            if (asteroid.isHit(_hotspot))
                return asteroid;
        }
        return null;
    }
    function createAsteroids(_nAsteroids) {
        console.log("Create Asteroids");
        for (let i = 0; i < _nAsteroids; i++) {
            const asteroid = new Assteroids.Asteroid(1.0);
            asteroids.push(asteroid);
        }
    }
    function update() {
        console.log("Update");
        Assteroids.crc2.fillRect(0, 0, Assteroids.crc2.canvas.width, Assteroids.crc2.canvas.height);
        for (const asteroid of asteroids) {
            asteroid.move(1 / 50);
            asteroid.draw();
        }
        // ship.draw
        // handleCollisions();
    }
    // Math
    function randomIntInRange(_min, _max) {
        return _min + Math.floor((_max - _min + 1) * Math.random());
    }
    Assteroids.randomIntInRange = randomIntInRange;
})(Assteroids || (Assteroids = {}));
//# sourceMappingURL=Main.js.map