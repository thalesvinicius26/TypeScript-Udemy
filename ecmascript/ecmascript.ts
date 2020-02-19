// // This com function
// // This varia de acordo com o bind
// function normalComThis() {
//     console.log(this);
// }
// const normalComThisEspecial = normalComThis.bind({ nome: 'Ana'});
// normalComThisEspecial();

// // This com arrow
// // O this nunca varia no arrow
// const arrorComThis = () => console.log(this);
// arrorComThis();
// const arrorComThisEspecial = arrorComThis.bind({ nome: 'Ana'});
// arrorComThisEspecial();


// Rest & Spread
const numbers = [1, 10, 99, -5, 200];
// Math.max(n1, n2, n3) Logo não recebe array, então usamos o operador spread '...'
// Conceito Spread
console.log(Math.max(...numbers));

const turmaA: string[] = ['João', 'Maria', 'Fernanda'];
// Conceito Spread
const turmaB: string[] = ['Fernando', 'Miguel', 'Lorena', ...turmaA];
console.log(turmaB);

// Conceito Rest
function retornaArray(...args: number[]): number[] {
    return args;
}
const numeros = retornaArray(3, 2, 4, 452, 210, 321);
console.log(numeros);
// Conceito Spread/Rest ao mesmo tempo
console.log(retornaArray(...numbers));

// Rest & Spread (tupla)
const tupla: [number, string, boolean] = [1, 'abc', false];
function tuplaParam1(a: number, b: string, c: boolean): void {
    console.log(`1) ${a} ${b} ${c}`);
}
tuplaParam1(...tupla);

function tuplaParam2(...params: [number, string, boolean]): void {
    console.log(`2) ${params[0]} ${params[1]} ${params[2]}`);
}
tuplaParam2(...tupla);


// Destructuring (array)
const caracteristicas = ['Motor Zetec 1.8', 2020];
// const motor = caracteristicas[0];
// const ano = caracteristicas[1];

const [motor, ano] = caracteristicas;
console.log(motor);
console.log(ano);


// Destructuring (objeto)
const item = {
    nome: 'SSD 480GB',
    preco: 200,
    tipo: {
        a: 'Isso ai'
    }
};
// const nome = item.nome;
// const preco = item.preco;
const {nome, preco} = item;
console.log(nome);
console.log(preco);
// OU
const {nome: n, preco: p} = item;
console.log(n);
console.log(p);


// Callback
function esperar3s(callback: (dado: string) => void) {
    setTimeout(() => {
        callback('3s depois...');
    }, 3000);
}
esperar3s((result: string) => {
    console.log(result);  
});

// Callback to Promise
function esperar3sPromise() {
    return new Promise((resolve: any) => {
        setTimeout(() => {
            resolve('3s depois promise...');
        }, 3000);
    });
}
esperar3sPromise()
    .then(dado => console.log(dado))

// Vantagem da promise é no aninhamento, exemplo abaixo
// Duas chamadas: 1- sobre o ator, 2- sobre o primeiro filme do ator
fetch('https://swapi.co/api/people/1')
    .then(res => res.json())
    .then(personagem => personagem.films)
    .then(films => fetch(films[0]))
    .then(resFilm => resFilm.json())
    .then(filme => console.log(filme.title))
    .catch(error => console.error(error));

