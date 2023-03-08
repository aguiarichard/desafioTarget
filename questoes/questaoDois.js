function calcularSequenciaFibonacci(num) {
  let sequenciaGerada = [0, 1]

  if (num <= 3) {
    sequenciaGerada = [0, 1, 1, 2, 3]
  } else {
    let numeroAtual

    for (let i = 2; i <= num; i++) {
      numeroAtual = sequenciaGerada[i - 2] + sequenciaGerada[i - 1]
      sequenciaGerada.push(numeroAtual)
    }
  }

  return sequenciaGerada.includes(num) ? `O número ${num} está presente na sequência de fibonacci`
    : `O número ${num} não está presente na sequência de fibonacci`
}

console.log(calcularSequenciaFibonacci(144))