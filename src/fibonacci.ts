import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function generateFibonacciUpTo(n: number): Array<number> {
  const fibonacciList = [0, 1];
  let nextValue = fibonacciList[0] + fibonacciList[1];

  while (nextValue <= n) {
    fibonacciList.push(nextValue);
    nextValue =
      fibonacciList[fibonacciList.length - 1] +
      fibonacciList[fibonacciList.length - 2];
  }

  return fibonacciList;
}

function isInFibonacci(n: number): boolean {
  const fibonacciList = generateFibonacciUpTo(n);
  return fibonacciList.includes(n);
}

rl.question("Digite um número: ", (answer) => {
  const num = parseInt(answer);

  if (isNaN(num)) {
    console.log("Por favor, insira um número válido.");
  } else if (isInFibonacci(num)) {
    console.log(`O número ${num} pertence à sequência de Fibonacci.`);
  } else {
    console.log(`O número ${num} não pertence à sequência de Fibonacci.`);
  }

  rl.close();
});
