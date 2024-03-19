function soma(a,b) {
  return a + b
}

function sub(a,b) {
  return a - b
}

function mult(a,b) {
  return a * b
}

function div(a,b) {
    if (b === 0) {
      return "Não é possível dividir por zero"
    }
    return a / b
}

function restoDiv(a, b) {
    if (b === 0) {
        return "Não é possível dividir por zero"
    }
    return a % b
}

function somarPar(a, b) {
    return (a + b) % 2 === 0
}

function iguais(a, b) {
    return a === b
}

let a = prompt("Insira o primeiro número:")
let b = prompt("Insira o segundo número:")

alert("Soma: " + soma(Number(a), Number(b)))
alert("Subtração: " +  sub(Number(a), Number(b)))
alert("Multiplicação: " + mult(Number(a), Number(b)))
alert("Divisão: " + div(Number(a), Number(b)))
alert("Resto da divisão: " + restoDiv(Number(a), Number(b)))
alert("A soma dos dois números é par? " + somarPar(Number(a), Number(b)))
alert("Os dois números inseridos são iguais? " + iguais(Number(a), Number(b)))

