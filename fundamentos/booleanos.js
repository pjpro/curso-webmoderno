let isAtivo = false
console.log(isAtivo) // false
isAtivo = true
console.log(isAtivo) // true

isAtivo = 1
console.log(!!isAtivo) // True  usando !! (not, not), transforma 1 em true
// "forçando a barra" para tranformar números em booleanos
console.log(!!3) // true
console.log(!!-1) // true
console.log(!!' ') // true
console.log(!![]) // true
console.log(!!{}) // true
console.log(!!Infinity) // true
console.log(!!(isAtivo = true)) // true
console.log(!!(isAtivo = Infinity)) // true
console.log(!!(isAtivo = 0)) // false

