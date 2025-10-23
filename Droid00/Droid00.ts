interface State {} 
enum MANIFEST {}

interface Command {
    module: string,
    method: string,
    data: string,
}

export function getCommand(_state: object): Command {
    console.log(_state)
return{module: "uwu", method: "Die Methode", data:"Lmao"}
}  