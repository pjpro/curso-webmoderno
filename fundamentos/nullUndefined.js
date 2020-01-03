let valor // não iniciada
console.log(valor) // undefined
// console.log(valor2) // ReferenceError: valor2 is not defined
valor = null // null (não aponta para nenhum endereço da memória)
// console.log(valor.toString()) // Erro
const produto = {}
console.log(produto.preco) // undefine (o objeto existe. preco não foi definido)
console.log(produto) // {}
produto.preco = 3.50
console.log(produto) // { preco: 3.5 }
produto.preco = undefined //evite usar undefined; use null
console.log(!!produto.preco) // false
console.log(produto) // { preco: undefined } NAO USE!
// delete produto.preco // apaga o atributo preco
produto.preco = null // false (sem preço)
console.log(!!produto.preco) // false (TESTAR SWE PREÇO ESTÁ COM VALOR)
console.log(produto) // { preco: null }

/* 
* ATRIBUIÇÃO POR VALOR - quando copio uma variável com valor primitivo (3, 5, [etc]) para outra
* ATRIBUIÇÃO POR REFERÊNCIA - ao copiar valor de um objeto para outro.
*/

