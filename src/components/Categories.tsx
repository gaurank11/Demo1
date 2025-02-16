import React from 'react';
import { Home, Building, Landmark, TreePine, PaintBucket, Ruler } from 'lucide-react';

const categories = [
  { icon: Home, name: 'Residential Architecture', count: '2,345' },
  { icon: Building, name: 'Commercial Projects', count: '1,890' },
  { icon: Landmark, name: 'Interior Design', count: '3,210' },
  { icon: TreePine, name: 'Landscape Architecture', count: '1,456' },
  { icon: PaintBucket, name: 'Renovation Specialists', count: '2,678' },
  { icon: Ruler, name: 'Construction Management', count: '1,234' },
];

export function Categories() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Popular Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.name}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 cursor-pointer border border-gray-100"
              >
                <div className="flex items-center space-x-4">
                  <div className="bg-emerald-100 p-3 rounded-lg">
                    <Icon className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">{category.name}</h3>
                    <p className="text-gray-600">{category.count} professionals</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}