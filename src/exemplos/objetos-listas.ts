enum Profissao {
    Professora, 
    Atriz, 
    Desenvolvedora,
    JogadoraDeFutebol
}

interface Pessoa {
    nome: string,
    idade: number,
    profissao?: Profissao
}

interface Estudante extends Pessoa {
    materias: string[];
}

const amanda: Pessoa = {
    nome: 'Amanda',
    idade: 23,
    profissao: Profissao.Desenvolvedora
}

const ana: Pessoa = {
    nome: 'Ana',
    idade: 23,
    profissao: Profissao.Desenvolvedora
}

const flavia: Estudante = {
    nome: 'Flávia',
    idade: 19,
    profissao: Profissao.Atriz,
    materias: ['Inglês', 'Programação']
}

const olivia: Estudante = {
    nome: 'Olívia',
    idade: 21,
    materias: ['Inglês', 'Programação']
}

function listar(lista: string[]) {
    for (const item of lista) {
        console.log('- ', item);
    }
}

listar(olivia.materias);