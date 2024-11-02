function pertenceFibonacci(numero) {
  let primeiroNumero = 0;
  let segundoNumero = 1;
  while (primeiroNumero < numero) {
    let temp = primeiroNumero;
    primeiroNumero = segundoNumero;
    segundoNumero = temp + segundoNumero;
  }
  return primeiroNumero === numero;
}
// Insira um número
const numeroInput = 10;

if (pertenceFibonacci(numeroInput)) {
  console.log(`O número ${numeroInput} pertence à sequência de Fibonacci.`);
} else {
  console.log(`O número ${numeroInput} não pertence à sequência de Fibonacci.`);
}
