// app/_components/utils/types.ts

export interface Autor {
  id: string;
  nomeCompleto: string;
  fotoUrl: string;
  slug: string;
}

export interface Episodio {
  id: string;
  titulo: string;
  slug: string;
  dataLancamento: string;
  urlVideo: string; // Ex: ID do YouTube ou URL completa
  descricao: string;
  imagemCapaUrl: string; // Imagem para o card/thumbnail
  convidado?: Autor;
}

export interface Materia {
    id: string;
    titulo: string;
    slug: string;
    resumo: string;
    autor: string;
    imagemDestaqueUrl: string;
}