
let a = 5;

if (a >= 10) {
    console.log('A es mayor o igual a 10');
}else{
    console.log('A es menor a 10');
}

// console.log('Fin del programa');

const hoy = new Date();

// console.log(hoy);
let dia = hoy.getDay();
console.log({dia});

if ( dia === 0){
    console.log('El día es Domingo');
}else if ( dia === 1) {
    console.log('El día es Lunes');
}else if ( dia === 2) {
    console.log('El día es Martes');
}else {
    console.log('No es Lunes, Martes o Domingo');
}


// SIN USAR IF, ELSE O SWITCH UNICAMENTE OBJETOS
dia = hoy.getDay();

// METODO 1, COMO OBJETO
const diaLetras = {
    0: 'domingo',
    1: 'lunes',
    2: 'martes',
    3: 'miercoles',
    4: 'jueves',
    5: 'viernes',
    6: 'sabado',
}

// METODO 2, COMO ARREGLO
const diaLetras2 = ['domingo', 'lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado',];

// dia de la semana
console.log(diaLetras[dia] || 'Día no válido');
console.log(diaLetras2[dia] || 'Día no válido' );