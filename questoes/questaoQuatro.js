const faturamentoPorEstado = [
  { estado: 'SP', faturamento: 6783643 },
  { estado: 'RJ', faturamento: 3667866 },
  { estado: 'MG', faturamento: 2922988 },
  { estado: 'ES', faturamento: 2716548 },
  { estado: 'Outros', faturamento: 1984953 }
]

function verificarPercentualDeFarutamentoDeCadaEstado(faturamentoPorEstado) {
  const getFaturamentos = elem => {
    return elem.faturamento
  }
  
  const getFaturamentoTotal = (total, elemAtual) => {
    return total + elemAtual
  }
  
  const faturamentoTotal = faturamentoPorEstado.map(getFaturamentos).reduce(getFaturamentoTotal)
  
  const faturamentoPorEstadoMaisPorcentagem  = faturamentoPorEstado.map(elem => {
    const percentualDeAcordoComOTotalDoMes = elem.faturamento / faturamentoTotal * 100
    
    return {...elem, porcentagem: percentualDeAcordoComOTotalDoMes}
  })
  
  console.log('--------------------------------------------------------------')
  console.log(`O faturamento total da empresa este mês foi de ${faturamentoTotal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}`)
  
  faturamentoPorEstadoMaisPorcentagem.forEach(elem => {
    console.log(`${elem.estado} ${elem.porcentagem.toFixed(2).replace('.', ',')}%`)
  })
  console.log('--------------------------------------------------------------')
}

verificarPercentualDeFarutamentoDeCadaEstado(faturamentoPorEstado)

