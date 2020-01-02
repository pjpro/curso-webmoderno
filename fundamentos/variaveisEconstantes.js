var a = 3
let b = 4  // declare preferencialmente com let

var a = 30  //  Estranho... mas funciona.
b = 40  //variáveis declaradas com let não podem ser redeclaradas
console.log(a, b)

a = 300 //não há necessidade de redeclarar
b = 400
console.log(a, b)

const c = 5 // não pode atribuir outro valor
console.log(a, b, c)
