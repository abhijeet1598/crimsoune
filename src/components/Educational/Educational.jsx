import React from "react";

const Educational = () => {
  return (
    <section
      id="benefits"
      className="py-16 px-8 bg-purple-200 text-customViolet bg-[url('/pattern-bg.jpg')] bg-cover bg-center"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-semibold mb-12 text-center">
          Discover the Benefits of Saffron
        </h2>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
          {/* Pure Saffron */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-semibold mb-4">
              Pure Saffron: Nature&apos;s Golden Spice
            </h3>
            <ul className="space-y-6">
              <li>
                <strong>Premium Quality:</strong> Handpicked for intense flavor
                and aroma.
              </li>
              <li>
                <strong>Health Benefits:</strong> Supports mental health, boosts
                mood, and promotes eye and heart health.
              </li>
              <li>
                <strong>Uses:</strong> Perfect for enhancing rice, desserts, and
                teas with a rich golden hue and aroma.
              </li>
            </ul>
          </div>

          {/* Saffron Seeds */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-semibold mb-4">
              Saffron Seeds: Grow Your Own Golden Harvest
            </h3>
            <ul className="space-y-6">
              <li>
                <strong>Grow Your Own Saffron:</strong> Cultivate saffron at
                home with our high-quality seeds.
              </li>
              <li>
                <strong>Benefits of Cultivation:</strong> A rewarding experience
                and fresh spice from your garden.
              </li>
              <li>
                <strong>Cultivation Tips:</strong> Requires sunlight,
                well-drained soil, and moderate watering.
              </li>
            </ul>
          </div>

          {/* Natural Flowers */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-semibold mb-4">
              Natural Flowers: Enhance Every Space with Beauty
            </h3>
            <ul className="space-y-6">
              <li>
                <strong>Beauty & Freshness:</strong> Add natural elegance and
                fragrance to any room.
              </li>
              <li>
                <strong>Perfect for Any Occasion:</strong> Great for decoration
                or gifting, bringing positivity to any space.
              </li>
              <li>
                <strong>Caring for Flowers:</strong> Change water, trim stems,
                and keep in indirect sunlight.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Educational;
