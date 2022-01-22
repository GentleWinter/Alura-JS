import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta{
    static numeroContasPoupancas = 0;
    constructor(agencia, cliente){
        super(agencia, cliente);
        ContaPoupanca.numeroContasPoupancas += 1;
    }

    sacar(valor, taxa){
        taxa = 0.2;
        super._sacar(valor, taxa);
    }

}