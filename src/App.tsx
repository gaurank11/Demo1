import React from 'react';
import { Building2, MapPin, Phone, Award, Star, ArrowRight } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-screen">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?auto=format&fit=crop&q=80"
            className="w-full h-full object-cover"
            alt="Dubai Skyline"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Dubai's Premier<br />Property Developer
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl">
            Experience luxury living at its finest with our award-winning developments in prime locations across Dubai.
          </p>
          <div className="flex gap-4">
            <button className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition">
              Explore Properties
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <Building2 className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Luxury Properties</h3>
              <p className="text-gray-600">Discover our portfolio of premium residential and commercial properties.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <MapPin className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Prime Locations</h3>
              <p className="text-gray-600">Strategic locations in Dubai's most sought-after neighborhoods.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <Award className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Award Winning</h3>
              <p className="text-gray-600">Recognized for excellence in design and construction quality.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Properties */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Featured Properties</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80",
                title: "Luxury Villa",
                location: "Palm Jumeirah",
                price: "AED 15,000,000"
              },
              {
                image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80",
                title: "Premium Apartment",
                location: "Downtown Dubai",
                price: "AED 8,500,000"
              },
              {
                image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&q=80",
                title: "Penthouse",
                location: "Dubai Marina",
                price: "AED 12,000,000"
              }
            ].map((property, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg">
                <img 
                  src={property.image} 
                  alt={property.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
                  <p className="text-gray-600 mb-4">
                    <MapPin className="w-4 h-4 inline mr-1" />
                    {property.location}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-600 font-semibold">{property.price}</span>
                    <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1">
                      View Details
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Find Your Dream Property?</h2>
            <p className="text-gray-400 mb-8">
              Contact our team of experts today and let us help you find the perfect property in Dubai.
            </p>
            <div className="flex justify-center gap-4">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Contact Sales
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition">
                Book a Viewing
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Building2 className="w-8 h-8" />
              <span className="font-bold text-xl">Dubai Properties</span>
            </div>
            <div className="flex items-center gap-4">
              <Star className="w-6 h-6 text-yellow-400" />
              <span>Dubai's Most Trusted Developer</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;