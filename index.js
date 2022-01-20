class Cliente{
    nome;
    cpf;
}
const saldo1;
class ContaCorrente{
    agencia;
    _saldo = 0;

    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor){
        if(valor <= 0){
            return;
        }
        if(valor > 0){
            this._saldo += valor;
        }
    }
}

const cliente1 = new Cliente();
const cliente2 = new Cliente();

cliente1.nome = 'Ricardo';
cliente1.cpf = 12345678990;

cliente2.nome = 'Amara';
cliente2.cpf = 12345678999;

const contaCorrenteRicardo = new ContaCorrente();
const contaCorrenteAmara = new ContaCorrente();

contaCorrenteRicardo.agencia = 1001;

contaCorrenteAmara.agencia = 1001;


contaCorrenteAmara.depositar(500);
const valorSacado = contaCorrenteAmara.sacar(50);

console.log(valorSacado);

console.log(cliente1.nome, contaCorrenteRicardo);
console.log(cliente2.nome, contaCorrenteAmara);