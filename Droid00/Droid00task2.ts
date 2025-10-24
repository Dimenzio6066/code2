export namespace Droid {


    interface Command {
        module: string,
        method: string,
        data: any,
    }

    let switchDirection: boolean = false

    export function getCommand(_state: object): Command {
        console.log(_state)
        switchDirection = !switchDirection
        if (switchDirection == true) {
            
            return { module: "Chassis", method: "move", data: "forward" }
        }

        else {
            
            return { module: "Chassis", method: "move", data: "left" }
        }
    }
}