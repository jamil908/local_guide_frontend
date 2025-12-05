/* eslint-disable @next/next/no-img-element */
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FiSearch, FiMap, FiUsers, FiStar, FiHeart, FiCamera, FiCoffee } from 'react-icons/fi';

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `/explore?city=${searchQuery}`;
  };

  return (
    <div>
      {/* 1. Hero Section with Search */}
      <section className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Discover Authentic Experiences
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Connect with local experts who bring destinations to life
          </p>
          
          {/* Search Bar */}
          <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
            <div className="flex bg-white rounded-full shadow-xl overflow-hidden">
              <input
                type="text"
                placeholder="Where are you going?"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 px-6 py-4 text-gray-800 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 font-semibold transition flex items-center"
              >
                <FiSearch className="mr-2" /> Search
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* 2. How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiSearch className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">1. Find Your Guide</h3>
              <p className="text-gray-600">
                Browse local experts based on your interests and destination
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiUsers className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">2. Book Your Experience</h3>
              <p className="text-gray-600">
                Choose your date and connect with guides who match your style
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiMap className="text-purple-600" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">3. Explore Like a Local</h3>
              <p className="text-gray-600">
                Enjoy personalized tours and discover hidden gems
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Featured Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Popular Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: FiCoffee, name: 'Food & Culinary', color: 'orange' },
              { icon: FiCamera, name: 'Photography', color: 'pink' },
              { icon: FiMap, name: 'Adventure', color: 'green' },
              { icon: FiStar, name: 'History & Culture', color: 'purple' },
            ].map((cat, idx) => (
              <Link
                key={idx}
                href={`/explore?category=${cat.name}`}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition text-center group"
              >
                <cat.icon
                  className={`mx-auto mb-3 text-${cat.color}-500 group-hover:scale-110 transition`}
                  size={40}
                />
                <h3 className="font-semibold">{cat.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Featured Destinations */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Top Destinations</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { city: 'Paris', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=500', guides: 45 },
              { city: 'Tokyo', image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=500', guides: 38 },
              { city: 'New York', image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=500', guides: 52 },
            ].map((dest, idx) => (
              <Link
                key={idx}
                href={`/explore?city=${dest.city}`}
                className="relative h-64 rounded-xl overflow-hidden group"
              >
                <img
                  src={dest.image}
                  alt={dest.city}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-white text-2xl font-bold">{dest.city}</h3>
                  <p className="text-gray-200">{dest.guides} local guides</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose LocalGuide?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: FiUsers, title: 'Verified Guides', desc: 'All guides are verified and reviewed' },
              { icon: FiHeart, title: 'Personalized', desc: 'Experiences tailored to your interests' },
              { icon: FiStar, title: 'Top Rated', desc: 'Highly rated by travelers worldwide' },
              { icon: FiMap, title: 'Local Insights', desc: 'Discover hidden gems only locals know' },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="text-blue-600" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Testimonials */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">What Travelers Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Sarah M.', review: 'Amazing experience! Our guide showed us places we would never have found on our own.', rating: 5 },
              { name: 'John D.', review: 'Professional, knowledgeable, and fun. Highly recommend booking through LocalGuide!', rating: 5 },
              { name: 'Emma L.', review: 'This platform made our trip unforgettable. The local insights were invaluable.', rating: 5 },
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FiStar key={i} className="text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">{testimonial.review}</p>
                <p className="font-semibold">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CTA Section - Become a Guide */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-4">Become a Local Guide</h2>
          <p className="text-xl mb-8">
            Share your passion, meet travelers, and earn money doing what you love
          </p>
          <Link
            href="/register?role=guide"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition"
          >
            Start Guiding Today
          </Link>
        </div>
      </section>
    </div>
  );
}