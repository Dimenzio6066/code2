"use strict";
var FirstFudge;
(function (FirstFudge) {
    var ƒ = FudgeCore;
    document.addEventListener("DOMContentLoaded", hndLoad);
    let sun;
    let earth;
    let mars;
    let viewport;
    function hndLoad() {
        const canvas = document.querySelector("canvas");
        const cmpCamera = new ƒ.ComponentCamera();
        FirstFudge.mesh = new ƒ.MeshSphere("Sphere");
        FirstFudge.material = new ƒ.Material("Material", ƒ.ShaderLit);
        earth = new FirstFudge.Body("Earth", 0);
        mars = new FirstFudge.Body("Mars", 5);
        viewport = new ƒ.Viewport();
        viewport.initialize("Viewport", earth, cmpCamera, canvas);
        viewport.initialize("Viewport", mars, cmpCamera, canvas);
        cmpCamera.mtxPivot.translateY(50);
        // cmpCamera.mtxPivot.rotateY(180);
        cmpCamera.mtxPivot.rotateX(90);
        ƒ.Loop.start();
        ƒ.Loop.addEventListener("loopFrame" /* ƒ.EVENT.LOOP_FRAME */, update);
    }
    function update() {
        earth.update();
        mars.update();
        viewport.draw();
    }
})(FirstFudge || (FirstFudge = {}));
//# sourceMappingURL=FirstFudge.js.map