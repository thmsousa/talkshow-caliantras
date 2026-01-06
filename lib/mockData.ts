// lib/mockData.ts
import { Episodio, Autor } from '@/app/components/utils/types';

export const TODOS_AUTORES: Autor[] = [
    {
        id: 'a1',
        nomeCompleto: 'Pablo Costa',
        fotoUrl: '/images/mock/pablo_cover.jpg', 
        slug: 'pablo-costa',
        bio: "Convidado especializado em Literatura e Cultura."
    },
    {
        id: 'a2',
        nomeCompleto: 'Gleicielly Medeiros',
        fotoUrl: '/images/mock/gleicy_autor.jpg', 
        slug: 'gleicielly-medeiros',
        bio: "Apresentadora/Entrevistadora e entusiasta cultural."
    },
    {
        id: 'a3',
        nomeCompleto: 'Nayra',
        fotoUrl: '/images/mock/nayra.jpg', 
        slug: 'nayra',
        bio: "Apresentadora e produtora do Caliandras."
    }
];

export const TODOS_EPISODIOS: Episodio[] = [
    {
        id: '1',
        titulo: 'Autor de Espirito Ilícito',
        slug: 'espirito-ilicito-autor',
        dataLancamento: '2025-11-24T12:00:00',
        urlVideo: 'ZFValH0rauY',
        descricao: 'Saiba mais sobre o autor da obra "Espiríto Ilícitio", Pablo Costa.',
        imagemCapaUrl: '/images/mock/pablo_cover.jpg',
        autorId: 'a1' // Pablo Costa
    },
    {
        id: '2',
        titulo: 'Encontro Ilícito',
        slug: 'encontro-ilicito',
        dataLancamento: '2025-11-28T12:00:00',
        urlVideo: 'NpGOg2fvgz4',
        descricao: 'Um pequeno Vlog do encontro "Espirito Ilícito", realizado no dia 10 de outubro.',
        imagemCapaUrl: '/images/mock/cover_vlog_encontro.png',
        autorId: 'a1'
    },
    {
        id: '3',
        titulo: 'Lançamento do livro Espirito Ilícito',
        slug: 'lancamento-espirito-ilicito',
        dataLancamento: '2025-10-10T12:00:00',
        urlVideo: 'Xgoom94yiNw',
        descricao: 'Registros do lançamento do livro Espirito Ilícito, realiado no Cine Teatro IFTO, em 10 de outubro.',
        imagemCapaUrl: '/images/mock/cover_lancamento_ei.png',
        autorId: 'a1' 
    },
     {
        id: '4',
        titulo: 'Resenha de Espírito Ilícito',
        slug: 'resenha-esp-ili-gleicielly',
        dataLancamento: '2025-12-29T12:00:00',
        urlVideo: 'f0qlGFNDdEE',
        descricao: 'Resenha do livro Espírito Ilícito, por Gleicielly Medeiros.',
        imagemCapaUrl: '/images/mock/cover_resenha.png',
        autorId: 'a2' // Gleicy
    },

];

export interface Produto {
    id: string;
    titulo: string;
    preco: string;
    imagemUrl: string;
    descricao: string;
    linkCompra: string;
    categoria: 'Livro' | 'E-book' | 'Acessório';
}

export const TODOS_PRODUTOS: Produto[] = [
    {
        id: 'p1',
        titulo: 'Livro Espírito Ilícito',
        preco: 'Entre em contato',
        imagemUrl: '/images/mock/espirito_ilicito_cover.jpg',
        descricao: 'A obra física completa de Pablo Costa, explorando os limites da mente e da cultura.',
        linkCompra: 'https://www.instagram.com/calintras/',
        categoria: 'Livro'
    },
    {
        id: 'p2',
        titulo: 'E-book Espírito Ilícito',
        preco: 'R$30,00',
        imagemUrl: '/images/mock/espirito_ilicito_cover.jpg',
        descricao: 'Versão digital otimizada para Kindle e dispositivos móveis.',
        linkCompra: 'https://www.amazon.com.br/Esp%C3%ADrito-Il%C3%ADcito-Pabl-Costa-ebook/dp/B0FX1D9DYX/ref=sr_1_1?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3TQZYRJ5H5OQX&dib=eyJ2IjoiMSJ9.qvDPruSj4VphiwDeQ1ZwXz9tQ-ZpasBxhSNx_UpLLn6TaYxxM_ic44Uif1AUr2fY_VDFHB5FOIIEg31_oPhM-piVn6s0R0tHP5klRWKVt7c.EQk2nWxE_ccFeRCTr7Q7QjXgNeiQGZRvJZGzBY5u2_w&dib_tag=se&keywords=espirito+ilicito&qid=1766987259&s=books&sprefix=espirito+ilicito%2Cstripbooks%2C226&sr=1-1',
        categoria: 'E-book'
    },
    {
        id: 'p3',
        titulo: 'Marca-Páginas',
        preco: 'Entre em contato',
        imagemUrl: '/images/mock/marca_pagina.png',
        descricao: 'Camiseta oficial em algodão premium com a estampa exclusiva da temporada.',
        linkCompra: 'https://www.instagram.com/calintras/',
        categoria: 'Acessório'
    }
];
    

export const EVENTOS_CALINDRAS = [
    { 
        id: 1, 
        titulo: "Lançamento Espiríto Ilícito", 
        data: "10 de Outubro", 
        imagem: "/images/mock/eve1.jpeg" 
    },
    { 
        id: 2, 
        titulo: "Aula de Leitura Regional", 
        data: "18 de Novembro", 
        imagem: "/images/mock/eve2.jpeg" 
    },
    { 
        id: 3, titulo: "VIII Feira de Cultura ", 
        data: "24 de Novembro", 
        imagem: "/images/mock/eve3.jpeg" 
    },
    { 
        id: 4, 
        titulo: "Aula de Língua Portuguesa", 
        data: "28 de Novembro", 
        imagem: "/images/mock/eve4.jpeg" 
    },
    { 
        id: 5, 
        titulo: "Intervenções Poéticas", 
        data: "05 de Dezembro", 
        imagem: "/images/mock/eve5.jpeg" 
    },
   
    
];
