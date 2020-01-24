//-----------------------------------------------------------------------------------
//sintaxe curta dentro do javascript usando ES6
// const nome = 'x';
// const idade = 23;
// const usuario = {
//     /*nome: nome,
//     idade: idade,*/
//     nome,
//     idade,
//     empresa: 'Rocketseat',
// };
// console.log(usuario);
//------------------------------------------------------------------------
//Template Literals ES6
// const nome = 'x';
// const idade = 23;
// // console.log('Meu nome é ' + nome + ' e tenho ' + idade + ' anos' );
// console.log(`Meu nome é ${nome} e tenho ${idade} anos.`);
//---------------------------------------------------------------------

/*SPREAD -> Ele faz o papel de propagar de repassar 
as informacoes de um objeto ou array para outro objeto */
// const arr1 = [ 1, 2, 3];
// const arr2 = [ 4, 5, 6];
// const arr3 = [ ...arr1, ...arr2];
// console.log(arr3);
// const usuario1 = {
//     nome: 'x',
//     idade: 23,
//     empresa: 'Rocketseat',
// };
// const usuario2 = { ...usuario1, nome: 'Gabriel' };
// console.log(usuario2);
//-------------------------------------------------------------------------
// REST -> Ele pega o resto das propriedades
// const usuario = {
//     nome: 'x',
//     idade: 23,
//     empresa: 'Rocketseat'
// };
// const { nome, ...resto } = usuario;
// console.log(nome);
// console.log(resto);
// const arr = [1, 2, 3, 4];
// const [ a, b , ...c ] = arr;
// console.log(a);
// console.log(b);
// console.log(c);
// function soma( a, b, c ) {
//     return a + b + c;
// }
// console.log(soma(1,3,4));
// function soma(...params) {
//     return params.reduce((total, next) => total + next);
// }
// console.log(soma( 1, 3, 4 ));
// function soma( a, b, ...params) {
//     return params;
// }
//    console.log(soma( 1, 3, 4, 5, 6, 7 ));
// const usuario = {
//     nome: 'x',
//     idade: 23,
//     endereco: {
//         cidade: 'Rio do Sul',
//         estado: 'SC',
//     },
// };
// //pegar as infromacoes
// const nome = usuario.nome;
// const idade = usuario.idade;
// const cidade = usuario.endereco.cidade;
// console.log(usuario);
//Conceito de desestruturação
// const { nome, idade, endereco: {cidade} } = usuario;
// console.log(nome);
// console.log(idade);
// console.log(cidade);
// function mostraNome(usuario) {
//     console.log(usuario.nome);
// }
// mostraNome(usuario);
// function mostraNome({ nome, idade }) {
//        console.log(nome, idade);
// }
// mostraNome(usuario);
//-----------------------------------------------
// const = soma(a = 3, b = 6) => a + b;
//     console.log(soma(1));
//     console.log(soma());
// retorna NAN pq ele n sabe o q e pra somar
// function soma(a, b) {
//     return a + b;
// }
// console.log(soma(1));
// console.log(soma());
//---------------------------------------------------------------------
// const arr = [1,2,3,4,5,6];
// const newArr = arr.map(function (item) {
//         return item * 2;
// }); 
// const newArr = arr.map((item) => {
//     return item * 2;
// });
// const newArr = arr.map(item => {
//     return item * 2;
// });
//quando a funcao n retorna um corpo de funcao n usar asim
// const newArr = arr.map(item => item * 2);
//  console.log(newArr);
//n recomendado
// const test = () => {
//     return 'test';
// }
// const test = () => [1, 2, 3] /*'test'*/ /*3*/ /*N funciona { nome: 'Diego' }; Funciona ({ nome: 'Diego'})*/
// console.log(test());
//---------------------------------------------------------
// const arr = [1,2,3,4,5,6,9];
// const newArr = arr.map(function (item, index) {
//     // return item * 2;
//     return item + index;
// });
// console.log(newArr);
// const sum = arr.reduce(function (total, next) {
//     return total + next;
// });
// console.log(sum);
// const filter = arr.filter(function (item) {
//     return item % 2 === 0;
// });
// console.log(filter);
// const find = arr.find(function (item) {
//     return item === 4;
// });
// console.log(find);
//--------------------------------------------------------- 
// function test(x) {
//     let y = 2;
//     if(x > 5) {
//         let y = 47;
//         console.log(x, y);
//     }
// }
// test(10);
// const usuario = { nome: 'Diego'};
// usuario.nome = 'x';
// console.log(usuario);
// class Matematica {
//     static soma(a, b) {
//         return a+b;
//     }
// }
// console.log(Matematica.soma(1,2));
//-----------------------------------------------------------
// class List {
//     constructor() {
//         this.data = [];
//     }
//     add(data) {
//         this.data.push(data);
//         console.log(this.date);
//     }
// }
// class Todolist extends List{
//     constructor(){
//         super();
//         this.usuario = 'x';
//     }
//     mostraUsuario() {
//         console.log(this.usuario);
//     }
// }
// const Minhalista = new Todolist();
// document.getElementById('novoTodo').onclik = function() {
//     Minhalista.add();
// }
// Minhalista.mostraUsuario();
"use strict";
