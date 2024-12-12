const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let listaDeNotas = [];

// CREATE
function crear(){
    rl.question("Escribe tu nota: ", function(nota) {
        listaDeNotas.push(nota)
        console.log("Nota agregada correctamente ")
        menu();
    })
}

//READ

function listar() {
    console.log("Este es tu listado de notas ")
    for (let i=0; i < listaDeNotas.length; i++) {
        console.log(i+1, listaDeNotas[i])
    }
    menu();
}

//UPDATE

function editar(){
    rl.question("Qué nota quieres cambiar? ",  function(numero){
        rl.question("Escribe el nuevo contenido ", function(texto) {
            listaDeNotas[numero-1] = texto;
            menu();
        })
    })

}

//DELETE

function borrar(){
    rl.question("Qué nota quieres borrar?",  function(numero){
        let nuevoListadoDeNotas = []
        for (let i = 0; i<listaDeNotas.length; i++){
            if(i !== numero-1) {
                nuevoListadoDeNotas.push(listaDeNotas[i])
            }

        }

        listaDeNotas = nuevoListadoDeNotas
        console.log('Nota eliminada correctamente');
        menu();
    })
}

function menu() {
    console.log("Bienvenido a EDnotes ");
    console.log("Menú de usuario: ");
    console.log("Elige una opción: ");
    console.log("1. Crear una nota ");
    console.log("2. Ver todas las notas ");
    console.log("3. Editar una nota ");
    console.log("4. Eliminar una nota ");
    console.log("5. Cerrar el programa ");

    rl.question("Escribe el número elegido: ", function(num){
        switch(num) {
            case "1":
                crear();
                break;
            case "2":
                listar();
                break;
            case "3":
                editar();
                break;
            case "4":
                borrar();
                break;
            case "5":
                console.log("Hasta luego, gracias")
                rl.close;
                break;
            default:
                console.log("Error, opción incorrecta")
                break;
        }
    })
}

menu();