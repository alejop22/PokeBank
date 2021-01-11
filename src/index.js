let valorCuenta = 0;

const cuenta = (valor = 0) => {
    valorCuenta = valorCuenta + valor;
    return valorCuenta;       
};

let consulta = document.getElementById('consulta');
let consigna = document.getElementById('consigna');
let retira = document.getElementById('retira');

consulta.addEventListener('click', () => {
    alert(`Saldo disponible: $${cuenta()}`);
});

consigna.addEventListener('click', () => {
    let input = Number(document.getElementById('input').value);
    if (input === 0 || isNaN(input)) {
        alert('Ingrese algun valor para consignar');
    } else {
        cuenta(input);
        alert(`Consigno $${input} con exito!`);
    }
});

retira.addEventListener('click', () => {
    let input = Number(document.getElementById('input').value);
    if (input === 0 || isNaN(input) || cuenta() < input) {
        alert('Ingrese un valor valido para retirar');
    } else {
        alert(`Ha retirado $${input} con exito!`);
        cuenta(input*(-1));
    };
});

//API//
const API = 'https://pokeapi.co/api/v2/pokemon/';
let buttonAPI = document.getElementById('btnAPI');

const numeroAleatorio = () => {
    return Math.floor(Math.random()*((850+1)-1)+1);
};

buttonAPI.addEventListener('click', () => {
    let img = document.getElementById('img');
    let pokeName = document.getElementById('pokeName');
    let xhttp = new XMLHttpRequest();
    xhttp.open("GET",`${API}${numeroAleatorio()}`);
    xhttp.send();

    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            let datoPokemon = JSON.parse(this.responseText);
            img.setAttribute("src",datoPokemon.sprites.front_default);
            pokeName.textContent = (datoPokemon.name);
        } else {
            pokeName.textContent = 'Error en la API';
        }
    };
});
