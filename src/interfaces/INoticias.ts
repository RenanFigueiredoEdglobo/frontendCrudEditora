import IAutor from "./IAutor"

export default interface INoticias{
    _id: number
    titulo: string
    conteudo: string
    autor: IAutor[]
    data_publicacao: Date
}