//import { Cliente } from "./Cliente.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { Gerente } from "./Funcionarios/Gerente.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("Gerson", 12235, 12345678980, 5000);
const gerente = new Gerente("Fabio", 55789, 12345678990, 3000);

diretor.cadastrarSenha("123456");

const estaLogado = SistemaAutenticacao.login(diretor, "123456");

console.log(estaLogado);