const entrada = document.getElementById("entrada");
const submit = document.getElementById("submit");
const resultado = document.getElementById("resultado");

submit.addEventListener("click", () => {
  const entradaValor = entrada.value;
  let resultadoValor = "";

  for (let i = 0; i < entradaValor.length; i++) {
    // Deslocamento de 3 posições à direita na tabela ASCII
    let letraAscii = entradaValor.charCodeAt(i);
    letraAscii += 3;

    // Tratamento para manter dentro do alfabeto ASCII
    if (letraAscii > 122) {
      letraAscii -= 26;
    } else if (letraAscii > 90 && letraAscii < 97) {
      letraAscii -= 26;
    }

    // Inversão da linha
    resultadoValor = String.fromCharCode(letraAscii) + resultadoValor;
  }

  // Deslocamento de 1 posição à esquerda para caracteres a partir da metade
  const metade = Math.floor(resultadoValor.length / 2);
  for (let i = metade; i < resultadoValor.length; i++) {
    let letraAscii = resultadoValor.charCodeAt(i);
    letraAscii -= 1;

    // Tratamento para manter dentro do alfabeto ASCII
    if (letraAscii < 97 && letraAscii > 90) {
      letraAscii += 26;
    } else if (letraAscii < 65) {
      letraAscii += 26;
    }

    resultadoValor =
      resultadoValor.substring(0, i) +
      String.fromCharCode(letraAscii) +
      resultadoValor.substring(i + 1);
  }

  resultado.value = resultadoValor;
});
