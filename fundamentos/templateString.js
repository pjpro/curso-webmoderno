const nome = "Rebeca"
const concatenacao = "Olá, " + nome + "!"

const template = `
Olá, 
${nome}!` // tem que ser entre crase ("`")
console.log(concatenacao,template)
console.log(`1 + 1 = ${1 + 1}`) // só interpretará o que estiver entre ${}

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)
