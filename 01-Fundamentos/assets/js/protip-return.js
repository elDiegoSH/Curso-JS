function crearPersona(nombre, apellido) {
    return {
        nombre: nombre,
        apellido: apellido
    }
}

const persona = crearPersona( 'DIEGO', 'SH');
console.log(persona);