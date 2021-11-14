let juegos = ['Contra', 'Mario Kart', 'Fortnite', 'Super Mario', 'Clash of clans'];

console.log('Largo: ', juegos.length);

let primero = juegos[0];
let ultimo = juegos[juegos.length-1];

console.log(primero);
console.log(ultimo);

// para barrer todos los elementos
juegos.forEach( (elemento, indice, arr) => {
    console.log( { elemento, indice, arr } );
} );

// para añadir elementos al final del arreglo
let nuevaLongitud = juegos.push( 'FIFA' );
console.log(nuevaLongitud, juegos);
console.log(juegos.length);

// para añadir elementos al inicio del arreglo
nuevaLongitud = juegos.unshift('Fire Emblem');
console.log(nuevaLongitud, juegos);

// para borrar el elemento que esta al final del arreglo
let juegoBorrado = juegos.pop();
console.log('El juego borrado es: '+ juegoBorrado);
console.log(juegoBorrado, juegos);

// para borrar un elemento sabiendo su posicion
let pos = 1;
let borrados = juegos.splice( pos, 1);
console.log(borrados, juegos);

// para conocer la posicion de un elemento
let posIndex = juegos.indexOf('Fortnite');
console.log(posIndex);

posIndex = juegos.indexOf('Mario Kart');
console.log(posIndex);