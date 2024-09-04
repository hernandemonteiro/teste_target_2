const string = "Hello, World!";

function inverso(str: string): string {
  const arrayLength = str.length;
  let text = Array.from(str);

  for (let i = 0; i < arrayLength / 2; i++) {
    const temp = str[i];
    text[i] = str[arrayLength - i - 1];
    text[arrayLength - i - 1] = temp;
  }

  return text.join("");
}

console.log(inverso(string));
