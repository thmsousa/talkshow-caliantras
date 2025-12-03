// app/components/utils/types.ts

export type Episodio = { 
  id: string; 
  titulo: string; 
  slug: string; 
  dataLancamento: string; 
  urlVideo: string; 
  descricao: string; 
  imagemCapaUrl: string; 
}; 

export type Autor = { 
    id: string; 
    nomeCompleto: string; 
    fotoUrl: string; 
    slug: string; 
};