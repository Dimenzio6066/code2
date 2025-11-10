namespace FirstFudge {
  import ƒ = FudgeCore;

  export class Body extends ƒ.Node {
    public constructor(_name: string, _orbitRadius:number) {
      super(_name);
      this.addComponent(new ƒ.ComponentMesh(mesh));
      this.addComponent(new ƒ.ComponentMaterial(material));
      this.addComponent(new ƒ.ComponentTransform());

      this.mtxLocal.translateX(_orbitRadius);
    }

    public update(): void {
      const rotSpeed: number = 360 / 5;
      const angle: number = rotSpeed * ƒ.Loop.timeFrameGame / 1000;

      this.getComponent(ƒ.ComponentTransform).mtxLocal.rotateY(angle, true);
      this.getComponent(ƒ.ComponentMesh).mtxPivo.rotateY(3 * angle);
    }
  }
}