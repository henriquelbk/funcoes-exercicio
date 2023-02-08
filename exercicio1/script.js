/*function imprimeNome(nome){
    console.log(`Olá, ${nome}`)
}
*/
//imprimeNome('henrique')

/*function tabuada(numero){
    console.log(`${numero} x 1 = ${numero * 1}`)
    console.log(`${numero} x 2 = ${numero * 2}`)
    console.log(`${numero} x 3 = ${numero * 3}`)
    console.log(`${numero} x 4 = ${numero * 4}`)
    console.log(`${numero} x 5 = ${numero * 5}`)
    console.log(`${numero} x 6 = ${numero * 6}`)
    console.log(`${numero} x 7 = ${numero * 7}`)
    console.log(`${numero} x 8 = ${numero * 8}`)
    console.log(`${numero} x 9 = ${numero * 9}`)
    console.log(`${numero} x 10 = ${numero * 10}`)
}

tabuada(3)
tabuada(733)
tabuada(22)
tabuada(8)
*/


const imprimeNome = (nome) => {
    console.log(`Olá, ${nome}`)
}

imprimeNome('henrique')

const tabuada = (numero) => {
    const calculo = numero * 1
    const calculo1 = numero * 2
    const calculo2 = numero * 3
    const calculo3 = numero * 4
    const calculo4 = numero * 5
    const calculo5 = numero * 6
    const calculo6 = numero * 7
    const calculo7 = numero * 8
    const calculo8 = numero * 9
    const calculo9 = numero * 10

    console.log(
        calculo,
        calculo1,
        calculo2,
        calculo3,
        calculo4,
        calculo5,
        calculo6,
        calculo7,
        calculo8,
        calculo9)
}

tabuada(9)
tabuada(87)