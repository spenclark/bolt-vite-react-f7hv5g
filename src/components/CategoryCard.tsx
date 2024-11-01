import React from 'react';
import { Link } from 'react-router-dom';
import { Category } from '../types';
import * as Icons from 'lucide-react';

const CategoryCard: React.FC<Category> = ({ title, slug, icon, description, subcategories, count, image }) => {
  const IconComponent = Icons[icon as keyof typeof Icons];

  return (
    <Link
      to={`/category/${slug}`}
      className="group relative overflow-hidden rounded-2xl shadow-md transition-all hover:shadow-xl"
    >
      <div className="absolute inset-0">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
      </div>
      <div className="relative p-8 h-full min-h-[280px] flex flex-col justify-end">
        <div className="flex items-center space-x-2 text-white/80 text-sm mb-2">
          {IconComponent && <IconComponent className="w-5 h-5" />}
          <span>{count} tools</span>
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-white/90 mb-4">{description}</p>
        <div className="space-y-1">
          {subcategories.slice(0, 2).map((sub) => (
            <div key={sub.name} className="text-sm text-white/70">
              {sub.name}
            </div>
          ))}
          {subcategories.length > 2 && (
            <div className="text-sm text-white/50">
              +{subcategories.length - 2} more categories
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;