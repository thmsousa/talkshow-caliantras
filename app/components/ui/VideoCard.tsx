'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Episodio } from '../utils/types';

interface VideoCardProps {
  episodio: Episodio;
}

export default function VideoCard({ episodio }: VideoCardProps) {
  return (
    <Link
      href={`/videos/${episodio.slug}`}
      className="block group bg-[var(--color-dark)] rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
    >
      <div className="relative w-full aspect-video">
        <Image
          src={episodio.imagemCapaUrl || '/placeholder-video.jpg'}
          alt={`Capa do Episódio: ${episodio.titulo}`}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />

        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          ▶️
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-bold text-white group-hover:text-[var(--color-primary)] transition-colors line-clamp-2">
          {episodio.titulo}
        </h3>

        <p className="text-sm text-gray-400 mt-1">
          Lançamento: {new Date(episodio.dataLancamento).toLocaleDateString('pt-BR')}
        </p>
      </div>
    </Link>
  );
}
