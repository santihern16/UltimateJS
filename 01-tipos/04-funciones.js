function saludar(){
    console.log("Hola mundo");
}

function suma(){
    return 2 + 2;
}

function mulitplicacion(num1, num2){
    console.log(arguments);
    return num1 * num2;
}

saludar();
console.log(suma());

let result = mulitplicacion(4, 5);
console.log(result);