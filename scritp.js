document.getElementById('addressForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const cp = document.getElementById('cp').value;
    
    if (/^[0-9]{5}$/.test(cp)) {
        alert(`Código Postal ${cp} válido. Formulario enviado.`);
        this.reset();
    } else {
        alert('Error: El código postal debe tener exactamente 5 números.');
    }
});
