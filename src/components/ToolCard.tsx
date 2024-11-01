import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { Tool } from '../types';

const ToolCard: React.FC<Tool> = ({
  title,
  slug,
  description,
  price,
  rating,
  reviews,
  categorySlug,
  image,
}) => {
  return (
    <Link 
      to={`/tool/${slug}`}
      className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
    >
      <div className="relative h-48">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white text-gray-800">
            {categorySlug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm font-medium text-gray-900">{rating}</span>
            <span className="text-sm text-gray-500">({reviews})</span>
          </div>
          <div className="text-lg font-bold text-gray-900">${price}</div>
        </div>
        <div className="mt-4 w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors text-center">
          View Deal
        </div>
      </div>
    </Link>
  );
};

export default ToolCard;