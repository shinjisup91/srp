import Image from "next/image";

interface CardWithImageProps {
  imageUrl: string;
  title: string;
  description: string;
}

export default function CardWithImage({ imageUrl, title, description }: CardWithImageProps) {
  return (
    <div className="bg-white dark:bg-black rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
      <div className="h-48 relative overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transform group-hover:scale-110 transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-black dark:text-white mb-3">
          {title}
        </h3>
        <p className="text-zinc-600 dark:text-zinc-400">
          {description}
        </p>
      </div>
    </div>
  );
}

