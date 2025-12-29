// app/components/utils/types.ts

export type Episodio = { 
  id: string; 
  titulo: string; 
  slug: string; 
  dataLancamento: string; 
  urlVideo: string; 
  descricao: string; 
  imagemCapaUrl: string; 
  autorId: String;
}; 

export type Autor = { 
    id: string; 
    nomeCompleto: string; 
    fotoUrl: string; 
    slug: string; 
    bio: String;
};

export type Produto = { 
    titulo: string; 
    preco: string; 
    imagemUrl: string; 
    descricao: string; 
    linkCompra: String;
    categoria: String;

};

