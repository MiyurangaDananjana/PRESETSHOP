import Image from "next/image";

interface TestimonialProps {
  name: string;
  role: string;
  image: string;
  content: string;
  rating?: number;
}

export default function Testimonial({
  name,
  role,
  image,
  content,
  rating = 5,
}: TestimonialProps) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg border border-neutral-100 hover:shadow-xl transition-shadow">
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <svg
            key={i}
            className="w-5 h-5 text-yellow-400 fill-current"
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
        ))}
      </div>

      {/* Content */}
      <p className="text-neutral-700 mb-6 italic leading-relaxed">
        &quot;{content}&quot;
      </p>

      {/* Author */}
      <div className="flex items-center gap-4">
        <div className="relative w-12 h-12 rounded-full overflow-hidden bg-neutral-100">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h4 className="font-semibold text-neutral-950">{name}</h4>
          <p className="text-sm text-neutral-500">{role}</p>
        </div>
      </div>
    </div>
  );
}
