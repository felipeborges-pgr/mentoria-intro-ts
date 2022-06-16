let anyEstaDeVolta: any;
anyEstaDeVolta = 3;
anyEstaDeVolta = 'teste'
anyEstaDeVolta = 5;

let stringTest: string = 'verificar';
stringTest = anyEstaDeVolta;

let unknowValor: unknown;
unknowValor = 3;
unknowValor = 'opa';
unknowValor = true;
unknowValor = 'vai sim';

let stringTest2: string = 'agora vai';
// stringTest2 = unknowValor;

if(typeof unknowValor === 'string') {
    stringTest2 = unknowValor;
}

function jogaErro(erro: string, codigo: number): never {

    throw {error: erro, code: codigo}

}

jogaErro('deu erro', 500);