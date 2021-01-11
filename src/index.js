let valorCuenta = 0;

const cuenta = (valor = 0) => {
    valorCuenta = valorCuenta + valor;
    return valorCuenta;       
};

let consulta = document.getElementById('consulta');
let consigna = document.getElementById('consigna');
let retira = document.getElementById('retira');

consulta.addEventListener('click', () => {
    alert(`Saldo disponible: ${cuenta()}$`);
});

consigna.addEventListener('click', () => {
    let input = Number(document.getElementById('input').value);
    if (input === 0 || isNaN(input)) {
        alert('Ingrese algun valor para consignar');
    } else {
        cuenta(input);
        alert(`Consigno ${input}$ con exito!`);
    }
});

retira.addEventListener('click', () => {
    let input = Number(document.getElementById('input').value);
    if (input === 0 || isNaN(input) || cuenta() < input) {
        alert('Ingrese un valor valido para retirar');
    } else {
        alert(`Ha retirado ${input}$ con exito!`);
        cuenta(input*(-1));
    };
});

