import Link from 'next/link';
import Image from 'next/image';

interface CaseCardProps {
  title: string;
  category: string;
  slug: string;
  href: string;
  image?: string;
}

export default function CaseCard({ title, category, slug, href, image }: CaseCardProps) {
  return (
    <Link href={href}>
      <div className="card-hover card overflow-hidden cursor-pointer group">
        {image && (
          <div className="relative w-full h-48 mb-4 bg-gradient-soft rounded-lg overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}
        <div className="p-4">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-sky-100 text-sky-700 rounded-full mb-3">
            {category}
          </span>
          <h3 className="text-xl font-bold text-charcoal-900 mb-2 group-hover:text-sky-500 transition-colors">
            {title}
          </h3>
          <p className="text-sm text-charcoal-800">
            Read Case Study →
          </p>
        </div>
      </div>
    </Link>
  );
}
