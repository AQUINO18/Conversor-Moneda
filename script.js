function convertir() {
    const cantidadSoles = parseFloat(document.getElementById('cantidadSoles').value);
    const tipoCambio = 3.82; 

    const cantidadDolares = cantidadSoles / tipoCambio;

    document.getElementById('cantidadDolares').value = cantidadDolares.toFixed(2);
}
