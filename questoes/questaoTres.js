const { readFile } = require('fs');

// pegando arquivo json
readFile('./public/dados.json', 'utf8', (err, jsonString) => {
  if (err) {
    console.log("File read failed:", err)
    return
  }

  const dados = JSON.parse(jsonString)

  const getMenorValor = (elem, elemAtual) => {
    if (elemAtual.valor === 0 && elem.valor === 0) return

    if (elemAtual.valor === 0) return elem
    if (elem.valor === 0) return elemAtual

    if (elemAtual.valor < elem.valor) {
      return elemAtual
    }

    return elem
  }

  const getMaiorValor = (elem, elemAtual) => {
    if (elemAtual.valor > elem.valor) {
      return elemAtual
    }

    return elem
  }

  const tirarDiasSemFaturamento = elem => {
    return elem.valor !== 0
  }

  const getValores = elem => {
    return elem.valor
  }

  const somarValores = (elem, elemAtual) => {
    return elem + elemAtual
  }

  const getValoresAcimaDaMedia = elem => {
    return elem > mediaFaturamentoMensal
  }

  const menorValorFaturado = dados.reduce(getMenorValor)
  const maiorValorFaturado = dados.reduce(getMaiorValor)

  const todosValoresFaturados = dados.filter(tirarDiasSemFaturamento).map(getValores)

  const mediaFaturamentoMensal = todosValoresFaturados.reduce(somarValores) / todosValoresFaturados.length

  const todosValoresFaturadosAcimaDaMedia = todosValoresFaturados.filter(getValoresAcimaDaMedia)

  const numeroDeDiasFaturamentoAcimaDaMedia = todosValoresFaturadosAcimaDaMedia.length

  console.log(`Nosso menor valor faturado em um dia no mês foi de ${menorValorFaturado.valor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}`)
  console.log(`Nosso maior valor faturado em um dia no mês foi de ${maiorValorFaturado.valor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}`)
  console.log(`Tivemos ${numeroDeDiasFaturamentoAcimaDaMedia} dias de faturamento acima da média do mês: ${mediaFaturamentoMensal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}`)
})

