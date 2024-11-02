const faturamentoMensal = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53,
};

let total = 0;
for (let estado in faturamentoMensal) {
  total += faturamentoMensal[estado];
}

for (let estado in faturamentoMensal) {
  const percentual = (faturamentoMensal[estado] / total) * 100;
  console.log(`${estado}: ${percentual.toFixed(2)}%`);
}
