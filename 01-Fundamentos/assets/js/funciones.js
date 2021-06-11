// Funcion tradicional
function saludo(){
    console.log('funcion tradicional saludo');
}

saludo();

//Funcion tipo flecha
const saludo2 = () => console.log('funcion flecha saludo');

saludo2();

// Funcion pasando datos 
function saludo3 ( nombre ){
    console.log('Nombre: ' +  nombre);
}

saludo3( 'Diegosh' );

// Pasando argumentos (solo en funciones tradicionales)
function saludo4( nombre ){
    console.log( arguments );
    console.log('Hola ' + nombre);
}

saludo4( 'Diegosh', 40, true, 'México' );

// Mas funciones de flecha
const saludarFlecha = () => {console.log('Hola flecha')};

saludarFlecha();

// Funciones de flecha sin {} 
// *solo se deben de usar cuando tiene un solo argumento 
const saludarFlecha2 = () => console.log('Hola Flecha 2');

saludarFlecha2();

// Funciones de flecha con argumentos
const saludarFlecha3 = ( nombre ) => {console.log('Hola ' + nombre)};

saludarFlecha3('DIEGOSH');

// **** FUNCIONES CON RETURN ****
function sumar (a, b) {
    return a+b;
}

console.log(sumar (1,2));

// **** FUNCIONES CON RETURN EN FLECHA ****
const sumar2 = (a,b) => a+b;

console.log(sumar2(2,2));

// mas ejemplos
function getAleatorio() {
    return Math.random();
}

console.log(getAleatorio());

const getAleatorio2 = () => Math.random();

console.log(getAleatorio2());