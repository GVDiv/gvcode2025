//Defini 5 objetos con nombres de superhéroes y sus atributos
const super1 = {nombre:"Spiderman"}
const super2 = {nombre:"Batman"}
const super3 = {nombre:"Superman"}
const super4 = {nombre:"Ironman"}
const super5 = {nombre:"Hulk"}

console.log(super1);

//Definir printName() para que reciba un objeto y muestre en consola ´El nombre del superhéroe es ${nombre}´
function printName(superhero) {
    console.log(`El nombre del superhéroe es ${superhero.nombre}`);
}
printName(super1);
//Definir printAllNames() para que reciba un array de objetos y muestre en consola el nombre de cada superhéroe
function printAllNames(superheroes) {
    superheroes.forEach(superhero => {
        console.log(superhero.nombre);
    });
}
printAllNames([super1, super2, super3, super4, super5]);
//Clases
class Persona {
    static cantidadDePersonas = 0;
    constructor(nombre, edad, ciudad, vida) {
        this.nombre = nombre;
        this.edad = edad;
        this.ciudad = ciudad;
        this.vida = vida || 100;
        Persona.cantidadDePersonas++;
    }
}
const gabriel = new Persona("Gabriel", 30, "Buenos Aires");
const juan = new Persona("Juan", 25, "Córdoba");
const maria = new Persona("María", 28, "Rosario");

console.log(gabriel);
console.log(juan);
console.log(maria);
console.log(`Cantidad de personas: ${Persona.cantidadDePersonas}`);
