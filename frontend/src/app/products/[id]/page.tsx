import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getProductById, getAllProducts } from "@/lib/data";
import BeforeAfter from "@/components/BeforeAfter";
import FAQ from "@/components/FAQ";

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

// Generate static paths for all products
export async function generateStaticParams() {
  const products = getAllProducts();
  return products.map((product) => ({
    id: product.id,
  }));
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      {/* Product Hero */}
      <section className="pt-32 pb-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Product Image */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Product Info */}
            <div>
              <div className="inline-block px-4 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
                {product.category}
              </div>
              <h1 className="heading-2 mb-4">{product.name}</h1>
              <p className="text-lg text-neutral-600 mb-6">{product.description}</p>

              {/* Price */}
              <div className="mb-8">
                <div className="flex items-baseline gap-3">
                  <span className="text-5xl font-bold">${product.price}</span>
                  <span className="text-neutral-500">one-time payment</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="btn-primary flex-1">
                  <svg className="w-5 h-5 inline mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                  Buy Now - Instant Download
                </button>
                <button className="btn-secondary">
                  <svg className="w-5 h-5 inline mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                  </svg>
                  Add to Wishlist
                </button>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-6 pt-6 border-t border-neutral-200">
                <div className="flex items-center gap-2 text-sm text-neutral-600">
                  <svg className="w-5 h-5 text-green-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  Instant Download
                </div>
                <div className="flex items-center gap-2 text-sm text-neutral-600">
                  <svg className="w-5 h-5 text-green-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  30-Day Money Back
                </div>
                <div className="flex items-center gap-2 text-sm text-neutral-600">
                  <svg className="w-5 h-5 text-green-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  Lifetime Updates
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="section-padding bg-primary-50">
        <div className="container-custom">
          <h2 className="heading-3 mb-8 text-center">What&apos;s Included</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {product.features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-neutral-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Comparison */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-3 mb-4">See the Transformation</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Drag the slider to see how {product.name} transforms your photos
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <BeforeAfter
              beforeImage={product.beforeImage}
              afterImage={product.afterImage}
              alt={`${product.name} transformation`}
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {product.faqs.length > 0 && (
        <section className="section-padding bg-primary-50">
          <div className="container-custom max-w-3xl">
            <h2 className="heading-3 mb-8 text-center">Frequently Asked Questions</h2>
            <FAQ faqs={product.faqs} />
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="section-padding bg-neutral-950 text-white">
        <div className="container-custom text-center">
          <h2 className="heading-2 mb-6">Ready to Elevate Your Photography?</h2>
          <p className="text-xl text-neutral-300 mb-8 max-w-2xl mx-auto">
            Get {product.name} now and start creating stunning images today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary text-lg px-10">
              Buy Now - ${product.price}
            </button>
            <Link href="/products" className="btn-secondary">
              Browse More Presets
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
