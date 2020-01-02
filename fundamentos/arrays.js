const valores = [ 7.7, 8.9, 6.3, 9.2 ]
console.log(valores[0], valores[3])  // 7.7 9.2
console.log(valores[4])  // undefined

//ADICIONAR VALORES
valores[4] = 10
console.log(valores) // [ 7.7, 8.9, 6.3, 9.2, 10 ]

// valores[9] = 20
// console.log(valores) // [ 7.7, 8.9, 6.3, 9.2, 10, <4 empty items>, 20 ]

console.log(valores.length) // 5 (tamanho)

valores.push({id:3}, false, null, 'teste') // adicionando valores heterogêneos
console.log(valores) // [ 7.7, 8.9, 6.3, 9.2, 10, { id: 3 }, false, null, 'teste']

//EXCLUIR VALORES
console.log(valores.pop()) // imprime excluindo o último
delete valores[0] // apaga o primeiro
console.log(valores) // 
