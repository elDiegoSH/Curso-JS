// son un objeto muy parecido a una lista de informacion, que contienen un grupo de elementos

// cuando hay llaves cuadradas [], quieredecir que es un arreglo

// const arr = new Array(10); 
// la de arriba no es la más común

// const arr =[];
// console.log(arr);

// declarar un arreglo:
let videoJuegos = ['Mario Kart', 'Contra', 'Fortnite'];
console.log( { videoJuegos } );

// para imprimir el primer valor:
console.log( videoJuegos[0] );

// arreglo con diferentes tipos de datos
let arregloCosas = [
    true,
    123,
    'Diego',
    1+2,
    function(){},
    ()=>{},
    { a: 1},
    ['X', 'Megaman', 'Zero', 'Dr. Light', [
        'Dr. willy',
        'Woodman'
    ]],
];
// console.log(arregloCosas);
// console.log(arregloCosas[0]);
// console.log(arregloCosas[2]);
// console.log(arregloCosas[7][3]);
console.log(arregloCosas[7][4][1]);