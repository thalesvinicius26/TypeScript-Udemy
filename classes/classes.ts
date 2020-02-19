class Data {
    // Público por padrão
    dia: number;
    mes: number;
    ano: number;

    constructor(dia: number, mes: number, ano: number) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}

const niver = new Data(26, 9, 1996);
console.log(niver);
// const casamento = new Data; // Omitindo os "()" somente se os paramns forem opcionais

class DataEspecial {

    constructor(public dia: number, public mes: number, public ano: number) {
    }
}

const niverEspecial = new DataEspecial(27, 10, 1996);
console.log(niverEspecial);


// Classe Abstrata
abstract class Calculo {
    protected resultado: number = 0;

    abstract executar(...nums: number[]): void;

    getResultado(): number {
        return this.resultado;
    }
}

class Soma extends Calculo {
    executar(...numbers: number[]): void {
        this.resultado = numbers.reduce((x, y) => x + y );
    }
}

class Multiplar extends Calculo {
    executar(...numbers: number[]): void {
        this.resultado = numbers.reduce((x, y) => x * y );
    }
}

let c1 = new Soma();
c1.executar(1, 2, 4);
console.log(c1.getResultado());

c1 = new Multiplar();
c1.executar(1, 2, 4);
console.log(c1.getResultado());