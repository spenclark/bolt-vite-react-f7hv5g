import React, { useState, useRef } from 'react';
import { Search } from 'lucide-react';
import { useSearch } from '../hooks/useSearch';
import { tools } from '../data/tools';
import { categories } from '../data/categories';
import SearchResults from './SearchResults';
import useClickOutside from '../hooks/useClickOutside';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [isResultsVisible, setIsResultsVisible] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const { tools: matchedTools, categories: matchedCategories } = useSearch(query, tools, categories);

  useClickOutside(searchRef, () => {
    setIsResultsVisible(false);
  });

  const handleFocus = () => {
    if (query.trim()) {
      setIsResultsVisible(true);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    setIsResultsVisible(newQuery.trim().length > 0);
  };

  const handleClose = () => {
    setIsResultsVisible(false);
  };

  return (
    <div ref={searchRef} className="relative max-w-2xl mx-auto">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          value={query}
          onChange={handleChange}
          onFocus={handleFocus}
          className="block w-full pl-10 pr-3 py-4 border border-gray-300 rounded-xl leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="Search for marketing tools, analytics software, and more..."
        />
      </div>
      <SearchResults
        tools={matchedTools}
        categories={matchedCategories}
        isVisible={isResultsVisible}
        onClose={handleClose}
      />
    </div>
  );
};

export default SearchBar;