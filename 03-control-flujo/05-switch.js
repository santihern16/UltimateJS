let opciones = ["listar", "guardar", "cancelar"];
let opcion = opciones[2];

//opcion = "listar"

switch(opcion){
    case opciones[0]: //listar
        console.log("listando");
        break;
    case opciones[1]:
        console.log("guardando");
        break;
    case opciones[2]:
        console.log("Cancelando");
        break;
    default:
        console.log("Opcion no encontrada");
        break;
}