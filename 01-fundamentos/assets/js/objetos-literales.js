
const personaje = {
    nombre: 'Tony Stark',
    codeName: 'Iron man',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['Mark l', 'Mark V', 'Hulkbuster'],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, California'
    },
    ultimaPelicula: 'Infinit War'
}
console.log(personaje);
console.log('Nombre', personaje.nombre);
// otra forma es:
console.log('Nombre', personaje['nombre']);

console.log('Edad', personaje.edad);
console.log('Coordenadas', personaje.coords);
console.log('Latitud', personaje.coords.lat);

console.log('Trajes', personaje.trajes);
console.log('N° de trajes', personaje.trajes.length);
console.log('Ultimo traje', personaje.trajes[personaje.trajes.length-1]);

const x = 'vivo';
console.log('Vivo', personaje[x]);

console.log('Ultima pelicula', personaje.ultimaPelicula);

// Mas detalles de objetos literales

// para borrar un propiedad del objeto literal
delete personaje.edad;
console.log(personaje);

personaje.casado = true;

// para mostrar como arreglo
const entriesPares = Object.entries(personaje);
console.log(entriesPares);

// personaje = true;

// hacer bloqueo de las propiedades del objeto
Object.freeze(personaje);

personaje.dinero = 1000000000;
personaje.casado = false;
personaje.direccion.ubicacion = 'Costa Rica';

console.log(personaje);

// listado de propiedades de ese objeto
const  propiedades = Object.getOwnPropertyNames(personaje);
const  valores = Object.values(personaje);
console.log({propiedades, valores});