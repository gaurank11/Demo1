import React from 'react';

const professionals = [
  {
    name: 'Sarah Johnson',
    role: 'Lead Architect',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=500&q=80',
    projects: 48,
    rating: 4.9,
  },
  {
    name: 'Michael Chen',
    role: 'Interior Designer',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80',
    projects: 36,
    rating: 4.8,
  },
  {
    name: 'Emma Rodriguez',
    role: 'Construction Manager',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=500&q=80',
    projects: 52,
    rating: 4.9,
  },
  {
    name: 'David Kim',
    role: 'Landscape Architect',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80',
    projects: 41,
    rating: 4.7,
  },
];

export function Professionals() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Featured Professionals</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {professionals.map((professional) => (
            <div
              key={professional.name}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer border border-gray-100"
            >
              <img
                src={professional.image}
                alt={professional.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-1 text-gray-900">{professional.name}</h3>
                <p className="text-emerald-600 mb-3">{professional.role}</p>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">{professional.projects} Projects</span>
                  <span className="text-emerald-600">★ {professional.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}