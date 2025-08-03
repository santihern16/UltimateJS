//Imprimir los numeros pares
let i = 0;
let b = 0;
while( i < 10){
    if(i % 2 == 0){
        console.log('Numero par:', i);
    }
    i++;
}

do{
    if(b % 2 == 1){
        console.log('Impares dentro del do while', b);
    }
    b++;
}while(b < 20)

console.warn("Cuidado con los loops infinitos");