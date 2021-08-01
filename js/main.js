// const destinosSoñados = [];



// $(".enviarSoñado").click(() => {
//     destinosSoñados.push($(".soñado").val());
//     localStorage.setItem("destinos", JSON.stringify(destinosSoñados));
// })


// const destinos = JSON.parse(localStorage.getItem("destinos"));
// console.log(destinos)



// Javi: renombre el array vacio
const arrayVacio = [];
//JSON.stringify(localStorage.setItem('destino', destinosSoñados))
// Javi: en la linea siguiente puse bien como es. El JSON.stringify convierte un objeto en string, y eso es lo que le tenes que pasar al local storage
// vos estabas haciendo stringify de la llamada para setear item en el local storage
localStorage.setItem('destino', JSON.stringify(arrayVacio))


$(".enviarSoñado").click(() => {
    let miArray = JSON.parse(localStorage.getItem('destino'));
    miArray.push($(".soñado").val());
    // Javi: aca puse "destino" que es el array que estas manipulando en el local storage
    localStorage.setItem('destino', JSON.stringify(miArray));
    //localStorage.setItem('destinoAgregado', JSON.stringify(miArray));
    $(".soñado").val('');
    $(".gracias").toggle();
});


// let meTrajeElValue = JSON.parse(localStorage.getItem('destino')); ULTIMO A CHEQUEAR