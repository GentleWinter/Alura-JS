export class Funcionario{
    constructor(nome, matricula, cpf, salario){
        this._nome = nome;
        this._matricula = matricula;
        this._cpf = cpf;
        this._salario = salario;
        this._bonificacao = 1;
        this._senha;
    }

    autenticar(senha){
        return senha == this._senha;
    }

    cadastrarSenha(senha){
        this._senha = senha;
    }
}