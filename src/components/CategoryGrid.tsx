import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import * as Icons from 'lucide-react';
import { Category } from '../types';

interface CategoryGridProps {
  categories: Category[];
}

const CategoryGrid: React.FC<CategoryGridProps> = ({ categories }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {categories.map((category) => {
        const IconComponent = Icons[category.icon as keyof typeof Icons];
        return (
          <Link
            key={category.slug}
            to={`/category/${category.slug}`}
            className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all"
          >
            <div className="relative h-48">
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center space-x-2 text-white mb-2">
                  {IconComponent && <IconComponent className="w-5 h-5" />}
                  <span className="text-sm">{category.count} tools</span>
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">{category.description}</p>
              <div className="space-y-2">
                {category.subcategories.slice(0, 3).map((sub) => (
                  <div key={sub.name} className="text-sm text-gray-600">
                    {sub.name}
                  </div>
                ))}
                {category.subcategories.length > 3 && (
                  <div className="text-sm text-gray-500">
                    +{category.subcategories.length - 3} more
                  </div>
                )}
              </div>
              <div className="mt-6 flex items-center text-indigo-600 hover:text-indigo-700">
                <span className="text-sm font-medium">View all tools</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default CategoryGrid;