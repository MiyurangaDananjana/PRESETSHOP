import Link from "next/link";
import Image from "next/image";

interface ProductCardProps {
  id: string;
  image: string;
  name: string;
  description: string;
  price: number;
  presetCount?: number;
}

export default function ProductCard({
  id,
  image,
  name,
  description,
  price,
  presetCount = 10,
}: ProductCardProps) {
  return (
    <Link href={`/products/${id}`} className="group block">
      <div className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-neutral-100">
        {/* Image Container */}
        <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          {/* Badge */}
          <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-bold shadow-lg">
            {presetCount} Presets
          </div>

          {/* "View" button appears on hover */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="bg-white text-neutral-950 px-6 py-3 rounded-full font-bold text-sm shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              View Details →
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2 text-neutral-950 group-hover:text-primary-600 transition-colors duration-300">
            {name}
          </h3>
          <p className="text-neutral-600 text-sm mb-4 line-clamp-2 leading-relaxed">{description}</p>

          {/* Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-neutral-100">
            <div>
              <span className="text-2xl font-bold text-neutral-950">${price}</span>
              <span className="text-sm text-neutral-500 ml-1">USD</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-primary-600 font-semibold">
              <span>Buy Now</span>
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
