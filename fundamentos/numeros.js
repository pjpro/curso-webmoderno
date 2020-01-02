const peso1 = 1.0
const peso2 = Number('2.0')
console.log(peso1, peso2)
console.log(Number.isInteger(peso1)) // true
console.log(Number.isInteger(peso2)) // true

const peso3 = 1.1
const peso4 = Number('2.1')
console.log(peso3, peso4)
console.log(Number.isInteger(peso3)) // false
console.log(Number.isInteger(peso4)) // false

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)
console.log(media) // 7.8709999999999996
console.log(media.toFixed(2)) // 7.87
console.log(media.toString()) // converte e string
console.log(media.toString(2)) // exibe em formato binário
console.log(media.toString(16)) // exibe em formato hexadecimal
console.log(typeof media)
console.log(typeof Number)