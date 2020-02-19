"use strict";
class Data {
    constructor(dia, mes, ano) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const niver = new Data(26, 9, 1996);
console.log(niver);
// const casamento = new Data; // Omitindo os "()" somente se os paramns forem opcionais
class DataEspecial {
    constructor(dia, mes, ano) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const niverEspecial = new DataEspecial(27, 10, 1996);
console.log(niverEspecial);
// Classe Abstrata
class Calculo {
    constructor() {
        this.resultado = 0;
    }
    getResultado() {
        return this.resultado;
    }
}
class Soma extends Calculo {
    executar(...numbers) {
        this.resultado = numbers.reduce((x, y) => x + y);
    }
}
class Multiplar extends Calculo {
    executar(...numbers) {
        this.resultado = numbers.reduce((x, y) => x * y);
    }
}
let c1 = new Soma();
c1.executar(1, 2, 4);
console.log(c1.getResultado());
c1 = new Multiplar();
c1.executar(1, 2, 4);
console.log(c1.getResultado());
//# sourceMappingURL=classes.js.map