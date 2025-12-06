'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import api from '@/lib/api';
import Link from 'next/link';
import { FiStar, FiClock, FiDollarSign } from 'react-icons/fi';

export default function ExplorePage() {
  const searchParams = useSearchParams();
  const [listings, setListings] = useState([]);
  const [filters, setFilters] = useState({
    city: searchParams.get('city') || '',
    category: searchParams.get('category') || '',
    minPrice: '',
    maxPrice: '',
  });

  useEffect(() => {
    fetchListings();
  }, [filters]);

  const fetchListings = async () => {
    try {
      const response = await api.get('/listings', { params: filters });
      setListings(response.data.data);
    } catch (error) {
      console.error('Error fetching listings:', error);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Explore Tours</h1>
      
      {/* Filters */}
      <div className="grid md:grid-cols-4 gap-4 mb-8">
        <input
          type="text"
          placeholder="City"
          value={filters.city}
          onChange={(e) => setFilters({...filters, city: e.target.value})}
          className="border px-4 py-2 rounded-lg"
        />
        <input
          type="text"
          placeholder="Category"
          value={filters.category}
          onChange={(e) => setFilters({...filters, category: e.target.value})}
          className="border px-4 py-2 rounded-lg"
        />
        <input
          type="number"
          placeholder="Min Price"
          value={filters.minPrice}
          onChange={(e) => setFilters({...filters, minPrice: e.target.value})}
          className="border px-4 py-2 rounded-lg"
        />
        <input
          type="number"
          placeholder="Max Price"
          value={filters.maxPrice}
          onChange={(e) => setFilters({...filters, maxPrice: e.target.value})}
          className="border px-4 py-2 rounded-lg"
        />
      </div>

      {/* Listings Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {listings.map((listing: any) => (
          <Link
            key={listing.id}
            href={`/tours/${listing.id}`}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition"
          >
            <img
              src={listing.images[0] || 'https://via.placeholder.com/400x300'}
              alt={listing.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2">{listing.title}</h3>
              <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                {listing.description}
              </p>
              
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center">
                  <FiStar className="text-yellow-500 mr-1" />
                  <span>{listing.averageRating?.toFixed(1) || 'New'}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <FiClock className="mr-1" />
                  <span>{listing.duration}h</span>
                </div>
              </div>
              
              <div className="mt-3 flex items-center justify-between">
                <div className="flex items-center text-blue-600 font-bold">
                  <FiDollarSign />
                  <span>{listing.tourFee}</span>
                </div>
                <span className="text-sm text-gray-500">{listing.city}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}