import Image from "next/image";

const properties = [
  {
    name: "Busterback Ranch",
    description: "An iconic 80-acre working ranch in the Sawtooth Valley. The 1940s-era property features a stunning main lodge, Ralph Lauren-inspired guest cabins, and sweeping views of the Sawtooth Mountains and White Cloud Wilderness.",
    location: "Sawtooth Valley, Idaho", 
    type: "Ranch",
    image: "/images/bust3.jpg",
  },
  {
    name: "Smiley Creek Lodge",
    description: "A beloved roadside landmark featuring a cafe, general store, cabins, and RV park at the gateway to the Sawtooth Wilderness. A gathering place for adventurers since the 1920s.",
    location: "Sawtooth City, Idaho",
    type: "Hospitality",
    image: "/images/smiley-creek.jpg",
  },
  {
    name: "491 Main St",
    description: "A prime commercial property in the heart of downtown Ketchum, steps from world-class dining, galleries, and the base of Sun Valley Resort. Strategic positioning in one of America's most coveted mountain towns.",
    location: "Ketchum, Idaho",
    type: "Commercial Real Estate",
    image: "/images/ketchum-downtown.jpg",
  },
  {
    name: "Hailey Airport Investments",
    description: "Aviation infrastructure holdings at Friedman Memorial Airport, the gateway to Sun Valley. Modern hangar facilities serving the region's growing private aviation community.",
    location: "Hailey, Idaho",
    type: "Aviation",
    image: "/images/hailey-airport.jpg",
  },
  {
    name: "Historic Mining Inholdings",
    description: "Private land parcels within the Sawtooth National Forest, originating from historic mining claims. These rare inholdings offer wilderness access and development potential surrounded by protected federal lands.",
    location: "Sawtooth National Forest, Idaho",
    type: "Land",
    image: "/images/mining-inholdings.jpg",
  },
  {
    name: "Ketchum Employee Housing",
    description: "Quality workforce housing in Sun Valley's core. Addressing the critical need for local employee accommodations in one of America's most desirable—and expensive—mountain communities.",
    location: "Ketchum, Idaho",
    type: "Residential",
    image: "/images/employee-housing.jpg",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Section with Background Image */}
      <header className="relative h-screen min-h-[600px]">
        <Image
          src="/images/busterback-hero.jpg"
          alt="Busterback Ranch at sunset with Sawtooth Mountains"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        <div className="relative h-full flex flex-col justify-end max-w-6xl mx-auto px-6 pb-24">
          <h1 className="text-5xl md:text-7xl font-light tracking-tight text-white mb-4">
            Phantom Hill
          </h1>
          <p className="text-xl md:text-2xl font-light text-white/90 max-w-2xl">
            Investing in Idaho
          </p>
          <div className="mt-6 h-px w-24 bg-amber-500" />
        </div>
      </header>

      {/* About Section */}
      <section className="max-w-6xl mx-auto px-6 py-24">
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
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-light text-stone-800 mb-16">
            Portfolio
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {properties.map((property) => (
              <div 
                key={property.name}
                className="group"
              >
                <div className="relative h-64 mb-6 overflow-hidden">
                  <Image
                    src={property.image}
                    alt={property.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="text-sm text-amber-700 font-medium mb-2">
                  {property.type}
                </div>
                <h3 className="text-2xl font-light text-stone-800 mb-3">
                  {property.name}
                </h3>
                <p className="text-stone-600 mb-3 leading-relaxed">
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

      {/* Owner Bio Section */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-96 overflow-hidden rounded-lg">
            <Image
              src="/images/david-tedesco.jpg"
              alt="David Tedesco"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-light text-stone-800 mb-6">
              David Tedesco
            </h2>
            <p className="text-lg text-stone-600 leading-relaxed mb-4">
              David is an entrepreneur, pilot, and outdoor enthusiast who fell in love with 
              Idaho&apos;s Sawtooth Valley over two decades ago. As founder and CEO of Outlier, 
              one of the largest private companies in the United States, he brings a long-term 
              perspective to building and preserving special places.
            </p>
            <p className="text-lg text-stone-600 leading-relaxed">
              Through Phantom Hill, David is committed to thoughtful stewardship of Idaho&apos;s 
              most iconic properties—protecting their heritage while ensuring they remain 
              vibrant parts of the community for generations to come.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-400 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h3 className="text-white text-xl font-light mb-3">Phantom Hill</h3>
              <p className="text-sm leading-relaxed">
                491 Main St<br />
                Ste 305<br />
                Ketchum, ID 83340
              </p>
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
