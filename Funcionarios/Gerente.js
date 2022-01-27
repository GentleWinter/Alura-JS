import { Funcionario } from "./Funcionario";

export class Gerente extends Funcionario{
    constructor(nome, matricula, cpf, salario){
        super(nome, matricula, cpf, salario);
        this._bonificacao = 1.1;
    }
}