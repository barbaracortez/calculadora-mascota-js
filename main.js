document.getElementById("formulario").addEventListener("submit", function(e){
    e.preventDefault(); 

    const nombre = document.getElementById("nombre").value.trim();
    const edadMascota = parseFloat(document.getElementById("edad").value);

    if (nombre === "" || isNaN(edadMascota) || edadMascota < 0) {
        alert("Por favor ingresa un nombre válido y una edad mayor o igual a 0.");
        return;
    }

    const edadHumana = edadMascota * 7;
    const resultado = `Hola ${nombre}, tu mascota tiene aproximadamente ${edadHumana} años humanos.`;
    
    document.getElementById("resultado").textContent = resultado;

    console.log("resultado:", resultado);
})




