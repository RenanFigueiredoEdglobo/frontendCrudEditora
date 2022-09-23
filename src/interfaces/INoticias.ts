import IAutor from "./IAutor"

export default interface INoticias{
    id: number
    titulo: string
    conteudo: string
    autor: IAutor[]
    data_publicacao: Date
}