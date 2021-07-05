// VARIABLES

// Base de datos feak.
const inglesBD = [
  {id: 1, ingles: "want", categoria: "verbo"},
  {id: 2, ingles: "pasaporte", categoria: "sustantivo"},
  {id: 3, ingles: "better", categoria: "adjetivo"},
  {id: 4, ingles: "exact", categoria: "adverbio"},
  {id: 5, ingles: "gracias", categoria: "cortesia"},
  {id: 6, ingles: "briefcase", categoria: "sustantivo"},
  {id: 7, ingles: "mejor", categoria: "adjetivo"},
  {id: 8, ingles: "querer", categoria: "verbo"},
  {id: 9, ingles: "exacto", categoria: "adverbio"},
  {id: 10, ingles: "passport", categoria: "sustantivo"},
  {id: 11, ingles: "maletín", categoria: "sustantivo"},
  {id: 12, ingles: "thank you", categoria: "cortesia"}
];


// FUNCIONES

function voltearTarjeta(){
  this.classList.toggle('voltear');
}


function crearUI(){
  inglesBD.forEach(item => {
    // para cada elemento de mi matriz de objetos creale una ui.
    const tarjeta = document.createElement('div');
    tarjeta.classList = 'tarjeta voltear';
    tarjeta.innerHTML = `
      <div class="cara cara--frontal"></div>
      <div class="cara cara--${item.categoria}">${item.ingles}</div>
    `;

    // Evento click y voltear
    tarjeta.addEventListener('click', voltearTarjeta);
    
    // para cada ui muestra en pantalla.
    document.getElementById('contenedorDeTarjetas').appendChild(tarjeta);
  });
}


// INICIALIZACION DE FUNCIONES
crearUI();

