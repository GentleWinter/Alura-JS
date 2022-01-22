import { Cliente } from "./Cliente.js";
import { Conta } from "./Conta.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";

const cliente1 = new Cliente('Ricardo', 12345678990);
const cliente2 = new Cliente('Amara', 12345678999);
const cliente3 = new Cliente(`Rodrigo`, 14545678999)

const contaCorrenteRicardo = new ContaCorrente(1001, cliente1);
const contaCorrenteAmara = new ContaCorrente(1001, cliente2);
const contaPoupancaRodrigo = new ContaPoupanca(1003, cliente3);

contaCorrenteAmara.depositar(500);
const valorSacado = contaCorrenteAmara.sacar(50);

contaCorrenteAmara.transferir(100, contaCorrenteRicardo);

console.log(`Valor Sacado: `, valorSacado);

console.log(cliente1.nome, contaCorrenteRicardo);
console.log(cliente2.nome, contaCorrenteAmara);
console.log(cliente3.nome, contaPoupancaRodrigo);
console.log(`Numero de contas cadastradas: `,Conta.numeroDeContas);
console.log(`Numero de contas correntes: `,ContaCorrente.numeroContasCorrentes);
console.log(`Numero de contas poupancas: `,ContaPoupanca.numeroContasPoupancas);