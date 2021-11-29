
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