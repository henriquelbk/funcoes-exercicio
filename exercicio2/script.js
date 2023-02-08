const letraA = (numero1, numero2) => {
    const soma = numero1 + numero2
    console.log(soma) 
}

letraA(3, 18)

const letraB = (numero1, numero2) => {
    const eMaior = numero1 >= numero2
    console.log(eMaior) 
}

letraB(21, 18)

const letraC = (numero1) => {
    const ePar = numero1 % 2 === 0
    console.log(ePar) 
}

letraC(8)

const letraD = (salario) => {
    const desconto = salario - (0.1 * salario)
    console.log(desconto) 
}

letraD(2100)