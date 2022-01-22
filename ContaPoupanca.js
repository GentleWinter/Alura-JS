import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta{
    static numeroContasPoupancas = 0;
    constructor(agencia, cliente){
        super(agencia, cliente);
        ContaPoupanca.numeroContasPoupancas += 1;
    }

    sacar(valor){
        let taxa = 0.2;
        const valorSacado = valor - (taxa * valor);
        if(this._saldo >= valorSacado){
            this._saldo -= valorSacado;
            return valorSacado;
        }
    }

}