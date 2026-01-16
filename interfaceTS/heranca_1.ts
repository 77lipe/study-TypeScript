interface Pessoa {
    nome: string
}

interface Funcionario extends Pessoa {
    salario: number
}

const f: Funcionario = {
    nome: "Carlos",
    salario: 3500
}