// Felipe Xavier Otoni - Grupo 2

let curso = require ("./modulo/curso");
let aluno = require ("./modulo/aluno");
const { aprovadoOuReprovado } = require("./modulo/curso");

// Criando 5 Alunos

curso.addAlunos("Felipe", [7,8,9], 2);
curso.addAlunos("Edna", [10,9,9], 5);
curso.addAlunos("Rogério", [9,8,9], 0);
curso.addAlunos("Paula", [7,10,9], 2);
curso.addAlunos("Neymar Jr", [6,8,10], 4);

console.log(curso);

// Média de um aluno
console.log(curso.turma[1].media().toFixed(2));

// Média dos alunos
console.log(curso.turma.map(item => [item.nome, item.media().toFixed(2)]));

// Faltas de um aluno
console.log(curso.turma[4].qtdFaltas);

// Adicionar 1 (uma) falta para um aluno
console.log(curso.turma[2].nome, curso.turma[2].qtdFaltas);
curso.turma[2].faltas()
console.log(curso.turma[2].nome, curso.turma[2].qtdFaltas);

// Faltas de todos os alunos
console.log(curso.turma.map(item => [item.nome, item.qtdFaltas]));

// console.log(curso.aprovadoOuReprovado(0));