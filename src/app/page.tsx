import Image from "next/image";

const properties = [
  {
    name: "Smiley Creek Lodge",
    description: "A historic Idaho lodge nestled in the heart of the Sawtooth Valley. Offering rustic accommodations, dining, and access to some of Idaho's most pristine wilderness.",
    location: "Sawtooth Valley, Idaho",
    type: "Hospitality",
  },
  {
    name: "Busterback Ranch",
    description: "An iconic working ranch in the Sawtooth Valley, spanning thousands of acres of pristine Idaho landscape. A legacy property with rich history and natural beauty.",
    location: "Sawtooth Valley, Idaho", 
    type: "Ranch",
  },
  {
    name: "Sun Valley Area Holdings",
    description: "A curated portfolio of real estate investments in and around the Sun Valley area, including residential, commercial, and land holdings.",
    location: "Sun Valley Region, Idaho",
    type: "Real Estate",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Section */}
      <header className="relative bg-stone-900 text-white">
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/90 to-stone-900/70" />
        <div className="relative max-w-6xl mx-auto px-6 py-32 md:py-48">
          <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-6">
            Phantom Hill
          </h1>
          <p className="text-xl md:text-2xl font-light text-stone-300 max-w-2xl">
            Idaho Investment Portfolio
          </p>
          <div className="mt-8 h-px w-24 bg-amber-600" />
        </div>
      </header>

      {/* About Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-light text-stone-800 mb-6">
            Investing in Idaho&apos;s Future
          </h2>
          <p className="text-lg text-stone-600 leading-relaxed">
            Phantom Hill Capital is a private investment entity focused on hospitality, 
            ranch, and real estate holdings in Idaho&apos;s Sun Valley and Sawtooth Valley regions. 
            Our portfolio reflects a commitment to preserving the natural beauty and heritage 
            of central Idaho while creating lasting value.
          </p>
        </div>
      </section>

      {/* Properties Section */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-light text-stone-800 mb-12">
            Portfolio
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {properties.map((property) => (
              <div 
                key={property.name}
                className="group bg-stone-50 p-8 hover:bg-stone-100 transition-colors duration-300"
              >
                <div className="text-sm text-amber-700 font-medium mb-2">
                  {property.type}
                </div>
                <h3 className="text-2xl font-light text-stone-800 mb-4">
                  {property.name}
                </h3>
                <p className="text-stone-600 mb-4 leading-relaxed">
                  {property.description}
                </p>
                <div className="text-sm text-stone-500">
                  {property.location}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-400 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h3 className="text-white text-xl font-light mb-2">Phantom Hill</h3>
              <p className="text-sm">Sun Valley, Idaho</p>
            </div>
            <div className="mt-6 md:mt-0 text-sm">
              © {new Date().getFullYear()} Phantom Hill Capital. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
