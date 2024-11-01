import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Star, Check, ExternalLink } from 'lucide-react';
import { tools } from '../data/tools';
import { categories } from '../data/categories';

const ToolPage = () => {
  const { toolSlug } = useParams();
  const tool = tools.find(t => t.slug === toolSlug);

  if (!tool) {
    return <div>Tool not found</div>;
  }

  const category = categories.find(c => c.slug === tool.categorySlug);

  return (
    <>
      <Helmet>
        <title>{`${tool.title} Lifetime Deal | NotReccuring`}</title>
        <meta name="description" content={`Get ${tool.title} for a one-time payment. ${tool.description} Save money with this lifetime deal alternative to subscription-based software.`} />
        <meta property="og:title" content={`${tool.title} Lifetime Deal | NotReccuring`} />
        <meta property="og:description" content={`Get ${tool.title} for a one-time payment. ${tool.description}`} />
        <meta property="og:image" content={tool.image} />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link to={`/category/${category?.slug}`} className="inline-flex items-center text-indigo-600 hover:text-indigo-700 mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to {category?.title}
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <img src={tool.image} alt={tool.title} className="w-full rounded-2xl shadow-lg" />
          </div>

          <div>
            <div className="mb-6">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                {category?.title}
              </span>
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-4">{tool.title}</h1>
            
            <div className="flex items-center mb-6">
              <div className="flex items-center mr-4">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span className="ml-1 font-medium">{tool.rating}</span>
                <span className="ml-1 text-gray-500">({tool.reviews} reviews)</span>
              </div>
            </div>

            <p className="text-xl text-gray-600 mb-8">{tool.description}</p>

            <div className="bg-gray-50 rounded-xl p-6 mb-8">
              <div className="text-3xl font-bold text-gray-900 mb-2">
                ${tool.price}
                <span className="text-lg text-gray-500 font-normal ml-2">one-time payment</span>
              </div>
              <p className="text-gray-600 mb-6">Regular subscription price: ${tool.regularPrice}/month</p>
              <button className="w-full bg-indigo-600 text-white py-3 px-6 rounded-xl hover:bg-indigo-700 transition-colors flex items-center justify-center">
                <span>Get Lifetime Access</span>
                <ExternalLink className="w-4 h-4 ml-2" />
              </button>
            </div>

            <div className="space-y-4">
              {tool.features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-3 mt-1" />
                  <span className="text-gray-600">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToolPage;