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
        bio: "Apresentadora e produtora do Caliantras."
    }
];

export const TODOS_EPISODIOS: Episodio[] = [
    {
        id: '1',
        titulo: 'Ep. 1: Talkshow - Biblioteca (IFTO - Palmas)',
        slug: 'ep-1-biblioteca',
        dataLancamento: '2025-11-24T12:00:00',
        urlVideo: 'lGyrgOFSn1U',
        descricao: 'Explorando as vertentes da obra "Espiríto Ilícitio", na Biblioteca do Campus Palmas.',
        imagemCapaUrl: '/images/mock/pablo_cover.jpg'
    },
    {
        id: '2',
        titulo: 'Ep. 2: Talkshow - CEM Santa Rita de Cássia',
        slug: 'ep-2-cem-rita-de-cassia',
        dataLancamento: '2025-11-28T12:00:00',
        urlVideo: 'Rx15dflY9DA',
        descricao: 'Conversa com alunos e professores no CEM Santa Rita de Cássia.',
        imagemCapaUrl: '/images/mock/cover_cemrdc.jpg'
    },
    {
        id: '3',
        titulo: 'Ep. 3: Talkshow - Literatura Regional',
        slug: 'ep-3-literatura-regional',
        dataLancamento: '2025-11-18T12:00:00',
        urlVideo: 'dQw4w9WgXcQ',
        descricao: 'Debate sobre literatura regional e produção cultural.',
        imagemCapaUrl: '/images/mock/cover_lr.jpg'
    },
    {
        id: '4', 
        titulo: 'Ep. 4: Entrevista Exclusiva (O Mais Novo)', 
        slug: 'ep-4-entrevista-recente', 
        dataLancamento: '2025-12-05T10:00:00', 
        urlVideo: 'SEU_ID_YOUTUBE', 
        descricao: 'O vídeo mais recente e atualizado da série.',
        imagemCapaUrl: '/images/mock/pablo_cover.jpg'
    }
];