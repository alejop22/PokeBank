let consulta = document.getElementById('consulta');
let consigna = document.getElementById('consigna');
let retira = document.getElementById('retira');
let valorCuenta = 0;

consulta.addEventListener('click', () => {
    alert(`Saldo disponible: ${cuenta()}`);
});

consigna.addEventListener('click', () => {
    let input = Number(document.getElementById('input').value);
    alert(`Consigno ${cuenta(input)} con exito!`);
});

const cuenta = (valor = 0) => {
    valorCuenta = valorCuenta + valor;
    return valorCuenta;       
};