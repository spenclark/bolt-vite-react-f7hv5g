import React from 'react';
import { Helmet } from 'react-helmet-async';
import CategoryGrid from '../components/CategoryGrid';
import { categories } from '../data/categories';
import { featuredTools } from '../data/tools';
import ToolCard from '../components/ToolCard';
import SearchBar from '../components/SearchBar';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>NotReccuring - Find Lifetime Deals on Business Software & Marketing Tools</title>
        <meta name="description" content="Discover the best lifetime deals on marketing tools, analytics software, and business applications. Replace your expensive SaaS subscriptions with one-time purchases." />
      </Helmet>

      {/* Hero Section */}
      <section className="px-4 pt-20 pb-32 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Save Money on
            <span className="text-indigo-600"> Business Software</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
            Find lifetime deals on marketing, analytics, and business tools. Replace your expensive monthly subscriptions with one-time purchases.
          </p>
          <div className="mt-10 flex justify-center gap-x-6">
            <a href="#categories" className="rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Browse Categories
            </a>
            <a href="#featured" className="rounded-xl px-6 py-3 text-sm font-semibold text-gray-900 border border-gray-300 hover:border-gray-400">
              Today's Deals
            </a>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SearchBar />
        </div>
      </section>

      {/* Categories Grid */}
      <section id="categories" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Browse Categories</h2>
          <CategoryGrid categories={categories} />
        </div>
      </section>

      {/* Featured Tools */}
      <section id="featured" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Today's Best Deals</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredTools.map(tool => (
              <ToolCard key={tool.slug} {...tool} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;