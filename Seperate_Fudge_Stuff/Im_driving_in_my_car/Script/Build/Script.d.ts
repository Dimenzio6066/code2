declare namespace Script {
    import ƒ = FudgeCore;
    class CubaControl extends ƒ.ComponentScript {
        static readonly iSubclass: number;
        message: string;
        rotationSpeed: number;
        constructor();
        hndEvent: (_event: Event) => void;
        update: (_event: Event) => void;
        rotate: (_angle: number) => void;
    }
}
declare namespace Script {
}
