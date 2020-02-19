"use strict";
// tuplas
let endereco = ['Av principal', 99, 88];
console.log(endereco);
// enums
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 4] = "Cinza";
    Cor[Cor["Verde"] = 100] = "Verde";
    Cor[Cor["Azul"] = 10] = "Azul";
})(Cor || (Cor = {}));
let minhaCor = Cor.Azul;
console.log(minhaCor);
// functions
let maiorQue = function (a, b) {
    return a > b;
};
console.log(maiorQue(10, 1));
function multiplica(numA, numB) {
    return numA * numB;
}
let calculo;
calculo = multiplica;
console.log(calculo(1.5, 2));
let funcionario = {
    nome: 'Thales',
    cargo: 'Dev'
};
console.log(funcionario);
// never
function falha(msg) {
    // while(true) {
    //     // Loop infinito
    // }
    // Emite Error
    throw new Error(msg);
}
const produto = {
    nome: 'Sabão',
    preco: 1,
    validarProduto() {
        if (!this.nome || this.nome.trim().length === 0) {
            falha('Precisa ter um nome');
        }
        if (this.preco <= 0) {
            falha('Preço inválido!');
        }
    }
};
produto.validarProduto();
// union types
let alturaOpcional = 12;
//# sourceMappingURL=tipos.js.map