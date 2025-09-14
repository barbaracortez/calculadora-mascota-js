document.getElementById("formulario").addEventListener("submit", function (e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const edadMascota = parseFloat(document.getElementById("edad").value);

  if (nombre === "" || isNaN(edadMascota) || edadMascota < 0) {
    alert("Por favor ingresa un nombre válido y una edad mayor o igual a 0.");
    return;
  }

  const edadHumana = edadMascota * 7;
  let resultado = `Hola ${nombre}, tu mascota tiene aproximadamente ${edadHumana} años humanos.`;

  // Mensaje adicional según edad de la mascota
  if (edadMascota < 2) resultado += " ¡Es un bebé!";
  else if (edadMascota >= 10) resultado += " ¡Qué viejita adorable!";

  document.getElementById("resultado").textContent = resultado;

  console.log("resultado:", resultado);

  // Limpiar formulario
  document.getElementById("formulario").reset();
});
