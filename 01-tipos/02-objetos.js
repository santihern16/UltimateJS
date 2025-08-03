const personaObjeto = {
    nombre: "Santiago",
    sexo: "Masculino",
    edad: 22,
    altura: 1.75,
};

console.log(personaObjeto);
console.log("Hola", personaObjeto.nombre);
console.log(personaObjeto.edad);

console.log(personaObjeto['sexo']);

personaObjeto.edad = 23;
personaObjeto['altura'] = 1.80;

delete personaObjeto.sexo;
console.log(personaObjeto);