const escola = "Cod3r"
console.log(escola.charAt(4)) // r
console.log(escola.charAt(4)) // '' (vazio)
console.log(escola.charCodeAt(3)) // 51
console.log(escola.indexOf("3")) // 3

console.log(escola.substring(1)) // od3r
console.log(escola.substring(0, 3)) // Cod (3 caracteres)
console.log('Escola '.concat(escola).concat("!")) // Escola Cod3r!
console.log('Escola ' + escola + "!") // Escola Cod3r!
console.log(escola.replace(3, 'e')) // Coder
console.log(escola.replace(/\d/, 'E')) // CodEr (usando "expressões regulares" substituir todos o dígitos por "E"- ver curso de regex)
console.log(escola.replace(/\w/g, 'x')) // xxxxx (usando "expressões regulares" - substituit todos por "x")
console.log('Ana,Maria,Pedro'.split(',')) // transforma string em array
