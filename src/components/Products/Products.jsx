import Image from "next/image";
import React from "react";

const Products = () => {
  return (
    <section
      id="products"
      className="py-16 px-8 bg-[url('/pattern-bg.jpg')] bg-cover bg-center text-primary"
    >
      <h2 className="text-5xl font-semibold mb-12 text-center">
        What We Offer
      </h2>
      <div className="max-w-6xl mx-auto grid gap-8 grid-cols-1 md:grid-cols-3">
        {/* Saffron Card */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative w-full h-56">
            <Image
              src="/saffron.jpg"
              alt="Saffron"
              layout="fill"
              className="object-cover"
            />
          </div>

          <div className="p-6">
            <h3 className="text-2xl font-semibold mb-2">Pure Saffron</h3>
            <p className="mb-4">
              Our saffron is handpicked to ensure the finest quality, bringing
              you the pure essence of nature.
            </p>
            <a href="/shop/saffron" className="text-yellow-600 hover:underline">
              Learn More
            </a>
          </div>
        </div>

        {/* Saffron Seeds Card */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative w-full h-56">
            <Image
              src="/saffron-seeds.jpg"
              alt="Saffron seeds"
              layout="fill"
              className="object-cover"
            />
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-semibold mb-2">Saffron Seeds</h3>
            <p className="mb-4">
              Grow your own saffron with our carefully selected saffron seeds,
              perfect for cultivation.
            </p>
            <a href="/shop/seeds" className="text-yellow-600 hover:underline">
              Learn More
            </a>
          </div>
        </div>

        {/* Flowers Card */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative w-full h-56">
            <Image
              src="/saffron-flowers.jpg"
              alt="Saffron flowers"
              layout="fill"
              className="object-cover"
            />
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-semibold mb-2">Natural Flowers</h3>
            <p className="mb-4">
              Our flowers bring beauty and freshness, perfect for any occasion
              or decoration.
            </p>
            <a href="/shop/flowers" className="text-yellow-600 hover:underline">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
