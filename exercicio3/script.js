const soma = (numero1, numero2) => {
    const somando = numero1 + numero2
    return somando
}


const subtraçao = (numero3, numero4) => {
    const subtraindo = numero3 - numero4
    return subtraindo
}


const multiplicaçao = (numero5, numero6) => {
    const multiplicando = numero5 * numero6
    return multiplicando
}


const divisao = (numero7, numero8) => {
    const dividindo = numero7 / numero8
    return dividindo
}


const imput1 = Number(prompt('Insira um número:'))
const imput2 = Number(prompt('Insira um número:'))

const operaçaoSoma = soma(imput1, imput2)
const operaçaoSubtrai = subtraçao(imput1, imput2)
const operaçaoMultiplica = multiplicaçao(imput1, imput2)
const operaçaoDivide = divisao(imput1, imput2)

console.log(operaçaoSoma)
console.log(operaçaoSubtrai)
console.log(operaçaoMultiplica)
console.log(operaçaoDivide)