'use strict'

const switcher = document.querySelector('.btn-modo');

switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme')

    var className = document.body.className;
    if (className == "light-theme") {
        this.textContent = "🌗"; 
    }
    else {
        this.textContent = "🌗";
    }
});

console.log( 'current class name: ' + className);

function calcular(tipo, valor) {
    console.log(tipo, valor)

    if(tipo === 'acao') {

      if(valor === 'c'){
        document.getElementById('resultado').value = ''
      }

      if( valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.') {
        document.getElementById('resultado').value += valor
    }  
    if(valor === '=' ) {
      var valor_campo = eval(document.getElementById('resultado').value)
      document.getElementById('resultado').value = valor_campo
    }
  }
  else if (tipo === 'valor') {
      document.getElementById('resultado').value +=  valor
    }

  }    