// Crear arreglo para guardar los objetos de las reservaciones
var reservations = [];

// Crear Reservacion
function createReservation(firstName, lastName, name, restaurant, phone, mail) {
    var reservation = {
        firstName,
        lastName,
        name,
        restaurant,
        phone,
        mail
    }
    return reservation;
}

// Constructor
var Reservation = function (firstName, lastName, name, restaurant, phone, mail) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.name = name;
    this.restaurant = restaurant;
    this.phone = phone;
    this.mail = mail;
}

// Guardar reservacion en Json
function saveReservation(firstName, lastName, name, restaurant, phone, mail) {
    // Estructura de control para validar la sucursal "restaurante"
    var sucursal;

    if (restaurant == 1) {
        sucursal = `Chili's parque tezontle`;
    }

    if (restaurant == 2) {
        sucursal = `Chili's parque toreo`;
    }

    if (restaurant == 3) {
        sucursal = `Chili's forum buenavista`;
    }

    var newReservation = new Reservation(firstName, lastName, name, sucursal, phone, mail);
    reservations.push(newReservation);
    console.log('Json de reservaciones', reservations)
}


// var cuerpoTabla = document.getElementsByTagName("tbody")[0];

// Mostrar informacion en tabla
function showInfo() {
    
    // var lastReservation = reservations[reservations.length-1]
    // console.log(lastReservation)
    
    // var keys=Object.keys(lastReservation)
    //         var lista = document.createElement("tr");

    //     for (var i = 0; i < keys.length; i++) {
    //         if (i===0){
    //             var celda1 = document.createElement("td");
    //         celda1.innerText = reservations.length
    //         lista.appendChild(celda1);

    //         }
    //         var celda = document.createElement("td");
    //         celda.innerText = lastReservation[keys[i]];
    //         lista.appendChild(celda);
    //     }

        // cuerpoTabla.appendChild(lista);
    
    
    document.getElementById("firstNameReservation").innerHTML = firstName;
    document.getElementById("lastNameReservation").innerHTML = lastName;
    document.getElementById("nameReservation").innerHTML = name;
    document.getElementById("restaurantReservation").innerHTML = sucursal;
    document.getElementById("phoneReservation").innerHTML = phone;
    document.getElementById("mailReservation").innerHTML = mail;
}

// Seleccionar el form
var formReservation = document.querySelector("form");

// Ejecutar el formulario con un evento submit
formReservation.addEventListener("submit", function (event) {
    event.preventDefault();
    var firstName = document.querySelector("#firstName");
    var lastName = document.querySelector("#lastName");
    var name = document.querySelector("#name");
    var restaurant = document.querySelector("#restaurant");
    var phone = document.querySelector("#phone");
    var mail = document.querySelector("#mail");


    // Guardar informacion de reservaciones en Json
    saveReservation(firstName.value, lastName.value, name.value, restaurant.value, phone.value, mail.value);

    // Mostrar informacion de la reservacion en tabla
    showInfo(firstName.value, lastName.value, name.value, restaurant.value, phone.value, mail.value);
    event.target.reset();
})