import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft } from 'lucide-react';
import { categories } from '../data/categories';

const CategoryPage = () => {
  const { categorySlug } = useParams();
  const category = categories.find(c => c.slug === categorySlug);

  if (!category) {
    return <div>Category not found</div>;
  }

  return (
    <>
      <Helmet>
        <title>{`${category.title} - Best Lifetime Deals | NotReccuring`}</title>
        <meta name="description" content={`Find the best lifetime deals on ${category.title.toLowerCase()}. One-time payment alternatives to subscription-based ${category.title.toLowerCase()}.`} />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link to="/" className="inline-flex items-center text-indigo-600 hover:text-indigo-700 mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Categories
        </Link>

        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{category.title}</h1>
          <p className="text-xl text-gray-600">{category.description}</p>
        </div>

        {category.subcategories.map((subcategory) => (
          <div key={subcategory.name} className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{subcategory.name}</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {subcategory.tools.map((tool) => (
                <div key={tool.name} className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{tool.name}</h3>
                    <p className="text-gray-600">{tool.description}</p>
                    <div className="mt-4">
                      <Link
                        to={`/tool/${tool.name.toLowerCase().replace(/\s+/g, '-')}`}
                        className="inline-flex items-center text-indigo-600 hover:text-indigo-700"
                      >
                        View Deal
                        <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CategoryPage;