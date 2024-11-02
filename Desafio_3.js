const fs = require("fs");

fs.readFile("desafio_3.json", "utf8", (err, data) => {
  if (err) throw err;
  const faturamentoDiario = JSON.parse(data);

  const faturamentos = faturamentoDiario
    .filter((dia) => dia.valor > 0)
    .map((dia) => dia.valor);

  const menorFaturamentoDiario = Math.min(...faturamentos);
  const maiorFaturamentoDiario = Math.max(...faturamentos);

  const mediaMensalFaturamento =
    faturamentos.reduce((a, b) => a + b, 0) / faturamentos.length;

  const diasAcimaMedia = faturamentos.filter(
    (valor) => valor > mediaMensalFaturamento).length;

  console.log(`Menor faturamento: R$${menorFaturamentoDiario.toFixed(2)}`);
  console.log(`Maior faturamento: R$${maiorFaturamentoDiario.toFixed(2)}`);
  console.log(`Dias com faturamento acima da média: ${diasAcimaMedia}`);
});
