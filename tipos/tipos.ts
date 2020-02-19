// tuplas
let endereco: [string, number, number] = ['Av principal', 99, 88];
console.log(endereco);

// enums
enum Cor {
    Cinza = 4,
    Verde = 100,
    Azul = 10
}
let minhaCor: Cor = Cor.Azul;
console.log(minhaCor);


// functions
let maiorQue = function(a: number, b: number): boolean {
    return a > b;
}
console.log(maiorQue(10, 1));

function multiplica(numA: number, numB: number): number {
    return numA * numB;
}
let calculo: (n1: number, n2: number) => number;
calculo = multiplica;
console.log(calculo(1.5, 2));

// objeto
type Funcionario = {
    nome: string,
    cargo: string
};
let funcionario: Funcionario = {
    nome: 'Thales',
    cargo: 'Dev'
}; 
console.log(funcionario);

// never
function falha(msg: string): never {
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
}
produto.validarProduto();

// union types
let alturaOpcional: null | number = 12;