// VARIABLES
const tarjetas = document.querySelectorAll('.tarjeta');

function voltearTarjeta(){
  // Comprobación en consola
  console.log('click!');
  console.log(this);

  // Agregando la clase voltear en forma toggle a tarjeta
  this.classList.toggle('voltear');
}

// EVENTOS
tarjetas.forEach(tarjeta => tarjeta.addEventListener('click', voltearTarjeta));

