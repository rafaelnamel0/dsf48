

function criptografar() {
  // Maneira de obter a mensagem escrita pelo usuário
  var mensagem = document.getElementById("entrada").value;

  // Desloca as letras 3 posições para a direita 
  var mensagemDeslocada = "";
  for (var i = 0; i < mensagem.length; i++) {
      var codigoAscii = mensagem.charCodeAt(i);
      if (codigoAscii >= 65 && codigoAscii <= 90) { 
          mensagemDeslocada += String.fromCharCode((codigoAscii - 65 + 3) % 26 + 65);
      } else if (codigoAscii >= 97 && codigoAscii <= 122) { 
          mensagemDeslocada += String.fromCharCode((codigoAscii - 97 + 3) % 26 + 97);
      } else { 
          mensagemDeslocada += mensagem[i];
      }
  }

  // Mensagem será invertida
  var mensagemInvertida = mensagemDeslocada.split("").reverse().join("");

  // Desloca os caracteres da metade em diante uma posição para a esquerda 
  var mensagemCriptografada = "";
  for (var i = 0; i < mensagemInvertida.length; i++) {
      var codigoAscii = mensagemInvertida.charCodeAt(i);
      if (i < mensagemInvertida.length / 2) {
          mensagemCriptografada += mensagemInvertida[i];
      } else if (codigoAscii >= 33 && codigoAscii <= 126) { // 
          mensagemCriptografada += String.fromCharCode(codigoAscii - 1);
      } else { 
          mensagemCriptografada += mensagemInvertida[i];
      }
  }

  // Produto final exibido
  document.getElementById("resultado").innerHTML =  mensagemCriptografada;
}


// Com isso, será possível criptografar a partir do clique no botão, já que a função 'criptografar' será executad
document.getElementById("submit").addEventListener("click", criptografar);