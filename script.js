 
 
 
 var numero = prompt('Introduce tu numero:')
 
 
 function esPar(numero) {
    return numero % 2 === 0;
}



if (esPar(numero)) {
    console.log(numero + " es par");
} else {
    console.log(numero + " es impar");
}

//primer ejercicio



let persona = {

Nombre : prompt('Introduce tu nombre:'),
Apellido : prompt('Introduce tu apellido:'),
Edad : parseInt(prompt('Introduce tu edad:')), 
Cedula : prompt('Introduce tu cédula:'),
Nacionalidad : prompt('Introduce tu nacionalidad:'),
Profesion : prompt('Introduce tu profesión:'),
EstadoCivil : prompt('Introduce tu estado civil:'),
Hobbies : prompt('Introduce tus hobbies')
};

if (persona.Profesion === 'programador') {
    persona.LenguajeFavorito = 'JavaScript';
}

if (persona.EstadoCivil === 'soltero') {
    persona.EstadoFavorito = '¡Disfruta tu soltería!';
}


persona.NombreCompleto = persona.Nombre + ' ' + persona.Apellido;

console.log(persona)



//segundo ejercicio



 let estudiante = {

    nombre : prompt('Introduce tu nombre:'),
    edad : parseInt(prompt('Introduce tu edad:')),
    nota1 : parseInt(prompt('Introduce tu nota1:')),
    nota2 : parseInt(prompt('Introduce tu nota2:')),
    nota3 : parseInt(prompt('Introduce tu nota3:'))


};

let promedio = (estudiante.nota1 + estudiante.nota2 +estudiante.nota3) / 3;
estudiante.resultadoFinal = promedio;

if (promedio >= 10){

    if (estudiante.edad >= 18){
    console.log(estudiante.nombre + ' has aprobado por tener el promedio (' + promedio + ') y la edad (' +estudiante.edad + ') correspondientes')}
    
    else{
        console.log(estudiante.nombre + ' has reprobado a pesar de cumplir el promedio (' + promedio + ') mas no la edad (' +estudiante.edad + ') correspondientes')
   
}
}
else {

    if (estudiante.edad >= 18){
        console.log(estudiante.nombre + ' has reprobado a pesar de cumplir la edad (' + estudiante.edad + ') mas no el promedio (' +promedio + ') correspondientes')}
        
        else{
            console.log(estudiante.nombre + ' has reprobado por no cumplir la edad (' + estudiante.edad + ') ni el promedio (' +promedio + ') correspondientes')
}

}

console.log(estudiante)


//Tercer Ejercicio

