let keys = {
    e : 'enter',
    i : 'imes',
    a : 'ai',
    o : 'ober',
    u : 'ufat'
  }
  
  function mostrarTexto(texto){
    let divResultado = document.getElementById('div-resultado');
    let divInicial = document.getElementById('contenido-inicial');
  
    document.getElementById('mensaje').value = texto;
    document.getElementById('resultado').innerText = texto;
    document.getElementById('texto').value = '';
  
    divResultado.removeAttribute('style');
    divInicial.setAttribute('style', 'display: none');
  }
  
  function encriptar(){
    let texto = document.getElementById('texto').value.toLowerCase();
    let newTexto = '';
    let txt;
    if(texto && texto != ' '){
  
      for(let i = 0; i < texto.length; i++){
  
        for(let ky in keys){
          if(texto[i] == ky){
            txt = keys[ky];
            break;
          }else{
            txt = texto[i];
          }
        }
        newTexto = newTexto + txt;
      }
  
      mostrarTexto(newTexto);
  
    }else{
      alert('Digíte un texto');
    }
  
  }
  
  function desencriptar(){
  
    let texto = document.getElementById('texto').value.toLowerCase();
    let newTexto = '';
    let letra;
  
    if(texto && texto != ' '){
      while (texto.length > 0){
        let contador = 0;
        for(let ky in keys){
          if(keys.hasOwnProperty(ky)){
            if(texto[0] == ky){
              if(texto.substring(0, keys[ky].length) == keys[ky]){
                //obtenemos la letra desencriptada;
                letra = ky;
                //Una vez que hemos encontrado la letra, convertimos en un nuevo texto utilizando la función de javascript (slice)
                texto = texto.slice(keys[ky].length);
  
              }else{
                letra = texto[0];
                texto = texto.slice(1);
              }
  
              contador++;
  
              break;
            }
          }
        }
  
        if(contador === 0){
          letra = texto[0];
          texto = texto.slice(1);
        }
  
        newTexto = newTexto + letra;
      }
  
      mostrarTexto(newTexto);
  
    }else{
      alert('Digíte un texto para continuar');
    }
  
  }
  
  function copyText() {
      let copyText = document.getElementById("mensaje").value;
      navigator.clipboard.writeText(copyText).then(() => {
          alert("Texto copiado al portapapeles, precione las teclas CTRL + V para pegar el texto!");
          //Posicionamos el cursor en el campo de escribir texto.
          document.getElementById("texto").focus();
      });
    }
  
  let btnEncriptar = document.getElementById('encriptar');
  let btnDesencriptar = document.getElementById('desencriptar');
  let btnCopy = document.getElementById('copy');
  
  btnEncriptar.onclick = encriptar;
  btnDesencriptar.onclick = desencriptar;
  btnCopy.onclick = copyText;