export default interface Produto {
    id: number;
    nome: string;
    descricao: string;
    quantidade: number;
    laboratorio: string;
    preco: number;
    foto: string;
    categoria: {
      id: number;
      nome: string;
      descricao: string;
    }
}