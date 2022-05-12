
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//><<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//><<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

let letrasClave = {
    a : 'ai',
    e : 'enter',
    i : 'imes',
    a : 'ai',
    o : 'ober',
    u : 'ufat'
  }
  
  function mostrarTexto(texto){
    let Resultado = document.getElementById('div-resultado');
    let Inicio = document.getElementById('contenido-inicial');
  
    document.getElementById('mensaje').value = texto;
    document.getElementById('resultado').innerText = texto;
    document.getElementById('texto').value = '';
  
    Resultado.removeAttribute('style');
    Inicio.setAttribute('style', 'display: none');
  }
  
  function encriptar(){
    let texto = document.getElementById('texto').value.toLowerCase();
    let newTexto = '';
    let txt;
    if(texto && texto != ' '){
  
      for(let i = 0; i < texto.length; i++){
  
        for(let ky in letrasClave){
          if(texto[i] == ky){
            txt = letrasClave [ky];
            break;
          }else{
            txt = texto[i];
          }
        }
        newTexto = newTexto + txt;
      }
 
      

      mostrarTexto(newTexto);
  
    }else{
      alert('Favor, digitar un texto');
    }
  
  }
  
  function desencriptar(){
  
    let texto = document.getElementById('texto').value.toLowerCase();
    let newTexto = '';
    let letra;
  
    if(texto && texto != ' '){
      while (texto.length > 0){
        let contador = 0;
        for(let ky in letrasClave){
          if(letrasClave .hasOwnProperty(ky)){
            if(texto[0] == ky){
              if(texto.substring(0, letrasClave [ky].length) == letrasClave [ky]){
                letra = ky;
                
                texto = texto.slice(letrasClave[ky].length);
  
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
      alert('Favor, digitar un texto');
    }
  
  }
  
  function copyText() {
      let copyText = document.getElementById("mensaje").value;
      navigator.clipboard.writeText(copyText).then(() => {
          alert("Texto copiado al portapapeles, favor presionar las teclas CTRL + V para pegar el texto.");
          document.getElementById("texto").focus();
      });
    }
  
  let botonEncriptar = document.getElementById('encriptar');
  let botonDesencriptar = document.getElementById('desencriptar');
  let botonCopyText = document.getElementById('copy');
  
  botonEncriptar.onclick = encriptar;
  botonDesencriptar.onclick = desencriptar;
  botonCopyText.onclick = copyText;




  
  // -----------------------  Función para omitir tíldes --------------


//   var omitirTildes = true;
  
//   function tildes(texto) {
//     var tildes = ["á","é","í","ó","ú"];

//     for (i=0; i < tildes.length; i++) {
//         if(texto.includes(tildes[i])){
//            alert("No se admiten tildes");
//            omitirTildes = false;
//         };
//     };

//     return omitirTildes;	
// }

  
  
  
// // ------------- Función mayusculas -------------------------------------------------------


// function mayusculas(texto) {
//     if(texto != texto.toLowerCase()){
//        alert("Solo se permiten letras minúsculas.");
//          letrasMinusc = false;
//     };
//     return letrasMinusc;
// }
