import data from "./data/dados.json";

const minorValueWithRevenue = Math.min(
  ...data.filter((data) => data.valor > 0).map((item) => item.valor)
);
const minorValue = Math.min(...data.map((item) => item.valor));
const majorValue = Math.max(...data.map((item) => item.valor));
const averageValue =
  data
    .filter((data) => data.valor > 0)
    .reduce((acc, item) => acc + item.valor, 0) / data.length;
const numberOfPassAverage = data.filter(
  (data) => data.valor > averageValue
).length;

// Answers
console.log(
  "O menor (contando apenas dias com faturamento) valor é: ",
  minorValueWithRevenue.toFixed(2)
);
console.log(
  "O menor (contando todos os dias) valor é: ",
  minorValue.toFixed(2)
);
console.log("O maior valor é: ", majorValue.toFixed(2));
console.log("A média dos valores é: ", averageValue.toFixed(2));
console.log("A quantidade de valores acima da média é: ", numberOfPassAverage);
console.log(
  "O valor total é: ",
  data.reduce((acc, item) => acc + item.valor, 0).toFixed(2)
);
