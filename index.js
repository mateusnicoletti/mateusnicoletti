const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calcularIMC(peso, altura) {
  const imc = peso / (altura * altura);
  return imc;
}

rl.question('Digite o seu peso (em quilogramas): ', (peso) => {
  rl.question('Digite a sua altura (em metros): ', (altura) => {
    const pesoNum = parseFloat(peso);
    const alturaNum = parseFloat(altura);

    if (!isNaN(pesoNum) && !isNaN(alturaNum)) {
      const resultado = calcularIMC(pesoNum, alturaNum);
      console.log(`Seu IMC é ${resultado.toFixed(2)}`);
    } else {
      console.log('Valores de peso e altura inválidos. Certifique-se de usar números válidos.');
    }

    rl.close();
  });
});
