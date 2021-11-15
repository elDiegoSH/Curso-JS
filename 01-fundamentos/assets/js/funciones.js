// funcion tradicional
function saludar() {
    console.log('Hola mundo');
}

// funcion anonima
const saludar2 = function() {
    console.log('Funcion anonima');
}

// funciones con argumentos
function saludar3(nombre) {
    console.log('Hola '+ nombre);
}

const saludar4 = function(nombre) {
    console.log('hola '+ nombre);
}

// saludar();
// saludar2();
// saludar3('Diegosh');
// saludar3('Diegosh 2');

// FUNCIONES DE FLECHA
const saludarFlecha = () => {
    console.log('Funcion tipo flecha');
}
saludarFlecha();

//funcion de flecha con argumentos
const saludarFlecha2 = (nombre) => {
    console.log('Funcion '+ nombre);
}

saludarFlecha2('flecha');