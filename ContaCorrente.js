import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta{
    static numeroContasCorrentes = 0;
    constructor(agencia, cliente){
        super(agencia, cliente);
        ContaCorrente.numeroContasCorrentes += 1;
    }
}

