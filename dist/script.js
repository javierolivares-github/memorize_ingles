// VARIABLES
// Base de datos feak.
const inglesBD = [
  {"ingles": "be", "castellano": "ser o estar", "categoria": "verbo"},
  {"ingles": "have", "castellano": "haber o tener", "categoria": "verbo"},
  {"ingles": "there is", "castellano": "hay", "categoria": "verbo"},
  {"ingles": "passport", "castellano": "pasaporte", "categoria": "sustantivo"},
  {"ingles": "police", "castellano": "policía", "categoria": "sustantivo"},
  {"ingles": "customs", "castellano": "aduanua", "categoria": "sustantivo"},
  {"ingles": "good", "castellano": "bueno", "categoria": "adjetivo"},
  {"ingles": "bad", "castellano": "malo", "categoria": "adjetivo"},
  {"ingles": "ok", "castellano": "regular", "categoria": "adjetivo"},
  {"ingles": "always", "castellano": "siempre", "categoria": "adverbio"},
  {"ingles": "also", "castellano": "también", "categoria": "adverbio"},
  {"ingles": "clear", "castellano": "claro", "categoria": "adverbio"},
];
// Tarjetas 
const tarjetas = document.querySelectorAll(".tarjeta");
console.log(tarjetas)




// FUNCIONES
// Función crear tarjeta
function crearTarjeta(){
  inglesBD.forEach(item => {
    // para cada elemento de mi matriz de objetos crea una ui.
    const tarjeta = document.createElement('div');
    tarjeta.classList = 'tarjeta voltear';
    tarjeta.innerHTML = `
      <div class="cara cara--frontal"></div>
      <div class="cara cara--${item.categoria}">${item.ingles}</div>
    `;

    // para cada ui muestra en consola.
    console.log(tarjeta);


    // para cada ui muestra en pantalla.
    document.getElementById('contenedorDeTarjetas').appendChild(tarjeta);
  });
}

// Función voltear tarjeta
function voltearTarjeta(){
  // Agrega la clase voltear en forma toggle a tarjeta.
  this.classList.toggle('voltear');
}
// Función reproducir sonido.
// function reproducirSonido(){}
// Función detener sonido.
// function detenerSonido() {}



// EVENTOS
// Evento al dar click voltea la tarjeta del memorice.
// tarjetas.forEach(tarjeta => tarjeta.addEventListener('click', voltearTarjeta));
// Evento al dar click se activa el sonido.
// tarjetas.forEach(tarjeta => tarjeta.addEventListener('click', ))


// INICIALIZACION DE FUNCIONES
crearTarjeta();

