let valores = [5, 9, 4, 3, 7]

console.log(valores)

/*
console.log(valores[0]) //forma não inteligente
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])

for (let pos=0;pos < valores.length;pos++) {    //forma padrão
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/

for (let pos in valores) {  //forma simplificada
    console.log(`A posoção ${pos} tem o valor ${valores[pos]}`)
}