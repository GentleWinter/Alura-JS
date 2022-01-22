export class Conta{
    static numeroDeContas = 0;

    set Cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }

    get cliente(){
        return this._cliente;
    }
    
    get saldo(){
        return this._saldo;
    }

    constructor(agencia, cliente){
        this.agencia = agencia;
        this._cliente = cliente;
        this._saldo = 0;
        Conta.numeroDeContas += 1;
    }

    _sacar(valor, taxa){
        taxa = 1;
        const valorSacado = valor;
        if(this._saldo >= valorSacado){
            this._saldo -= valorSacado * taxa;
            return valorSacado;
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

    transferir(valor, conta){
        const valorTransferido = this.sacar(valor);
        conta.depositar(valorTransferido);
    }
}