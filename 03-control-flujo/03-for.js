for(let i = 0; i < 50; i++){
    console.log('Dentro del for loop', i);
    if(i % 2 == 0){
        console.log('Pares dentro del for loop', i);
    }
}

//for of loop

let animales = ["Perro", "Gato", "Rana"];

for (const animal of animales) {
    console.log(animal);
}

//for in loop

let user = {
    id: 1,
    username: "santixo",
    age: 22,
};

for (let prop in user) {
    console.log(prop, user[prop]);
}

let frutas = ["banana", "manzana", "pera"];

for(index in frutas){
    console.log(index, frutas[index]);
}