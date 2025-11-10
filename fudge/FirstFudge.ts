namespace FirstFudge {
    import ƒ = FudgeCore;
    document.addEventListener("DOMContentLoaded", hndLoad);

    export let mesh: ƒ.Mesh;
    export let material: ƒ.Material;

    let sun: Body;
    let earth: Body;
    let mars: Body
    let viewport: ƒ.Viewport;

    function hndLoad(): void {
        const canvas: HTMLCanvasElement = document.querySelector("canvas")!;
        const cmpCamera: ƒ.ComponentCamera = new ƒ.ComponentCamera();
        mesh = new ƒ.MeshSphere("Sphere");
        material = new ƒ.Material("Material", ƒ.ShaderLit);

        earth = new Body("Earth", 0);
        mars = new Body("Mars", 5);

        viewport = new ƒ.Viewport();
        viewport.initialize("Viewport", earth, cmpCamera, canvas);
        viewport.initialize("Viewport", mars, cmpCamera, canvas);

        cmpCamera.mtxPivot.translateY(50);
        // cmpCamera.mtxPivot.rotateY(180);
        cmpCamera.mtxPivot.rotateX(90);



        ƒ.Loop.start();
        ƒ.Loop.addEventListener(ƒ.EVENT.LOOP_FRAME, update);
    }

    function update(): void {
        earth.update();
        mars.update();
        viewport.draw();
    }
}


