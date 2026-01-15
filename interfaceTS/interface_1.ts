/* 
*   Interface é um contrato que define a estrutura de um objeto.
        “Se você quer ser desse tipo, precisa ter esses campos.” 
* 
*/


//interface padrão ->
interface pessoa {
    id: number
    nome: string,
    idade: number,
    email: string
    ativo: boolean
}

// Modo de usar =>
const user: pessoa = {
    id: 1,
    nome: "Felipe",
    idade: 17,
    email: "email@123",
    ativo: true
}



// Propriedades que são opcionais, uso "?" =>
interface usuario{
    id: number,
    nome: string,
    email?: string
}

const novoUser: usuario = {
    id: 1,
    nome: "Alice"
}// sem email(opcional)



//Propriedade com somente leitura =>
interface LerUser {
    readonly id: number,
    nome: string
}



//Interface com métodos
interface Produto {
    id: number,
    nomeProduto: string,
    preco: number,
    aplicarDesconto(porcentagem: number): number
}

const produto: Produto = {
    id: 1,
    nomeProduto: "Notebook",
    preco: 1200,
    aplicarDesconto(p){
        return this.preco - (this.preco * p / 100)
    }
}