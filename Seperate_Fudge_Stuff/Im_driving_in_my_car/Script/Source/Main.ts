namespace Script {
  import ƒ = FudgeCore;
  ƒ.Debug.info("Main Program Template running!");

  let viewport: ƒ.Viewport;
  let cuba: CubaControl;

  document.addEventListener("interactiveViewportStarted", <EventListener>start);

  function start(_event: CustomEvent): void {
    viewport = _event.detail;

    const cubaNode: ƒ.Node = viewport.getBranch().getChildByName("Cuba");
    cuba = cubaNode.getComponent(CubaControl);

    document.addEventListener("mousemove", hndMouseMove);

    ƒ.Loop.addEventListener(ƒ.EVENT.LOOP_FRAME, update);
    ƒ.Loop.start();  // start the game loop to continously draw the viewport, update the audiosystem and drive the physics i/a
  }

  function hndMouseMove(_event: MouseEvent): void {
    cuba.rotate(_event.movementX);
  }

  function update(_event: Event): void {
    // ƒ.Physics.simulate();  // if physics is included and used
    viewport.draw();
    ƒ.AudioManager.default.update();

  }
  
}

