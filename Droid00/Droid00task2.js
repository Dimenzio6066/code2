export var Droid;
(function (Droid) {
    let switchDirection = false;
    function getCommand(_state) {
        console.log(_state);
        switchDirection = !switchDirection;
        if (switchDirection == true) {
            return { module: "Chassis", method: "move", data: "forward" };
        }
        else {
            return { module: "Chassis", method: "move", data: "left" };
        }
    }
    Droid.getCommand = getCommand;
})(Droid || (Droid = {}));
//# sourceMappingURL=Droid00task2.js.map