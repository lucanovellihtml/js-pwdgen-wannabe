//CONTROLLO MAGGIORE
"use strict";

//RICHIESTA INPUT UTENTE
const name_user = prompt("Inserisci il tuo nome");
const surname_user = prompt("Inserisci il tuo cognome");
const color_user = prompt("Inserisci il tuo colore preferito");
const number_one = prompt("Inserisci il primo numero");
const number_two = prompt("Inserisci il secondo numero");


//CALCOLO NUMERO
const number_total = parseInt(number_one) / parseInt(number_two);

//VARIABILE TAG HTML
const password_insecure = document.getElementById("password_insecure").innerHTML = name_user + surname_user + color_user + number_total;

//STAMPO INPUT UTENTE
console.log(name_user + surname_user + color_user + number_total);