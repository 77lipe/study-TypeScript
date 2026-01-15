
//TypeScript precisa especificar os TIPOS de cada variável =>


//BASICOS
let nome: string = "Felipe"

let idade: number = 25

let ativo: boolean = true // false



//ARRAYS
let NumbersArr: number[] = [1, 2, 3]

let NomesArr: Array<string> = ["Felipe", "Melissa"]



//Tupla (ondem fixa)
let usuario: [number, String]
usuario = [1, "Felipe"]



//ENUM (Valores fixos)
enum StatusPedido {
    "Concluido",
    "Em Processo",
    "Não Realizado"
}

let stts: StatusPedido = StatusPedido.Concluido



//ANY -> Bom evitar, mas se refere a uma variável que pode ser QUALQUER TIPO
let dados: any
dados = 10
dados = true

//UNKNOWN -> Melhor nesses casos
let data: unknown

if (typeof data === "string"){
    console.log(data.toUpperCase())
}



// VOID --> Funções sem retorno  ??  -> retorna somento no terminal, não necessáriamente a quem a chamou
function logar(msg: string): void {
    console.log(msg)
}



// NEVER --> Não retorna NUNCA  ??
function erro(): never {
    throw new Error("ERRO FATAL")
}