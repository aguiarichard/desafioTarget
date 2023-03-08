function inverter(palavra) {
    let palavraInvertidaArray = []
    for(let i = 0; i < palavra.length; i++) {
        palavraInvertidaArray.unshift(palavra[i])
    }

    let palavraInvertida = ''
    palavraInvertidaArray.forEach(elem => {
        palavraInvertida = palavraInvertida.concat(elem)
    })

    return palavraInvertida
}

console.log(inverter('Target'))