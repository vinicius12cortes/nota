function calcularNotaFinal() {
  const nota1 = parseFloat(document.getElementById("nota1").value);
  const nota2 = parseFloat(document.getElementById("nota2").value);
  const nota3 = parseFloat(document.getElementById("nota3").value);

  const notaFinal = (nota1 + nota2 + nota3) / 3;

  const resultado = document.getElementById("resultado");

  if (notaFinal >= 18) {
    resultado.innerHTML = `Sua nota final é ${notaFinal.toFixed(
      2
    )}. Você passou de ano!`;
  } else {
    resultado.innerHTML = `Sua nota final é ${notaFinal.toFixed(
      2
    )}. Você reprovou de ano.`;
  }
}
