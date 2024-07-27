const left = document.getElementById('arrowLeft');
const right = document.getElementById('arrowRight');
const tableCurrency = document.getElementById('tableCurrency');
const tableComissions = document.getElementById('tableComissions');

// Primero agregamos el manejador de eventos para showTableCurrency
left.addEventListener("click", showTableCurrency);
// Luego agregamos el manejador de eventos para showTableComissions
right.addEventListener("click", showTableComissions);

function showTableComissions() {
    tableCurrency.style.display = "none";
    tableComissions.style.display = "block";
}

function showTableCurrency() {
    tableCurrency.style.display = "block";
    tableComissions.style.display = "none";
}
