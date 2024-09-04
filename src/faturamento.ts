const faturamento = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53,
};

const faturamentoTotal = Object.values(faturamento).reduce(
  (acc, item) => acc + item,
  0
);
console.log("O faturamento total foi de:", faturamentoTotal.toFixed(2));

const percentualFaturamento = Object.entries(faturamento).map(
  ([key, value]) => [key, ((value / faturamentoTotal) * 100).toFixed(2)]
);

console.log(
  "O percentual de faturamento por estado foi de:",
  percentualFaturamento
);
