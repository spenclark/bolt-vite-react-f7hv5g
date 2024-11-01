import React from 'react';
import { Link } from 'react-router-dom';
import { Tool, Category } from '../types';
import { Star } from 'lucide-react';

interface SearchResultsProps {
  tools: Tool[];
  categories: Category[];
  isVisible: boolean;
  onClose: () => void;
}

const SearchResults: React.FC<SearchResultsProps> = ({ tools, categories, isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
        onClick={onClose}
      />
      <div className="absolute top-full left-0 right-0 bg-white rounded-b-2xl shadow-xl mt-2 max-h-[70vh] overflow-y-auto z-50">
        {categories.length === 0 && tools.length === 0 ? (
          <div className="p-4 text-gray-500 text-center">No results found</div>
        ) : (
          <div className="divide-y divide-gray-100">
            {categories.length > 0 && (
              <div className="p-4">
                <h3 className="text-sm font-semibold text-gray-400 mb-3">Categories</h3>
                <div className="space-y-2">
                  {categories.map(category => (
                    <Link
                      key={category.slug}
                      to={`/category/${category.slug}`}
                      className="flex items-center p-2 hover:bg-gray-50 rounded-lg"
                      onClick={onClose}
                    >
                      <div className="w-12 h-12 rounded-lg overflow-hidden mr-4">
                        <img 
                          src={category.image} 
                          alt={category.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">{category.title}</h4>
                        <p className="text-sm text-gray-500">{category.count} tools</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
            {tools.length > 0 && (
              <div className="p-4">
                <h3 className="text-sm font-semibold text-gray-400 mb-3">Tools</h3>
                <div className="space-y-2">
                  {tools.map(tool => (
                    <Link
                      key={tool.slug}
                      to={`/tool/${tool.slug}`}
                      className="flex items-center p-2 hover:bg-gray-50 rounded-lg"
                      onClick={onClose}
                    >
                      <div className="w-12 h-12 rounded-lg overflow-hidden mr-4">
                        <img 
                          src={tool.image} 
                          alt={tool.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900">{tool.title}</h4>
                        <p className="text-sm text-gray-500 line-clamp-1">{tool.description}</p>
                      </div>
                      <div className="ml-4 flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="ml-1 text-sm text-gray-600">{tool.rating}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default SearchResults;