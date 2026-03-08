const personaObjeto = {
    nombre: "Santiago",
    sexo: "Masculino",
    edad: 22,
    altura: 1.75,
};

let personaje = {
    nombre: "Goku",
    serie: "Dragon Ball Z",
    year: "1989",
};

let llave = 'serie';
personaje[llave] = "DBZ";
 
delete personaObjeto.altura;
console.log(personaObjeto);
console.log("Hola", personaObjeto.nombre);
console.log(personaObjeto.edad);

console.log(personaObjeto['sexo']);

personaObjeto.edad = 23;
personaObjeto['altura'] = 1.80;

delete personaObjeto.sexo;
console.log(personaObjeto); 