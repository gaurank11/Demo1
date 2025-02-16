import React from 'react';
import { Building2 } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative bg-gray-900 text-white py-24">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=2000&q=80')] opacity-20 bg-cover bg-center" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <div className="inline-block p-4 rounded-full bg-emerald-600/20 mb-6">
            <Building2 className="h-16 w-16 text-emerald-500" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Transform Your Digital Presence
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
            Connecting architects, builders, and real estate professionals with their audience through innovative digital solutions.
          </p>
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors duration-300">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}