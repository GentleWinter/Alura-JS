import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta{
    static numeroContasCorrentes = 0;
    constructor(agencia, cliente){
        super(agencia, cliente);
        ContaCorrente.numeroContasCorrentes += 1;
    }

    sacar(valor){
        let taxa = 0.1;
        const valorSacado = valor - (taxa * valor);
        if(this._saldo >= valorSacado){
            this._saldo -= valorSacado;
            return valorSacado;
        }
    }

}

