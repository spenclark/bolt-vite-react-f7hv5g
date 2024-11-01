import { useState, useEffect, useMemo } from 'react';
import { Tool, Category } from '../types';

interface SearchResults {
  tools: Tool[];
  categories: Category[];
}

export function useSearch(query: string, tools: Tool[], categories: Category[]): SearchResults {
  const [results, setResults] = useState<SearchResults>({ tools: [], categories: [] });

  const searchIndex = useMemo(() => {
    return {
      tools: tools.map(tool => ({
        ...tool,
        searchText: `${tool.title} ${tool.description} ${tool.categorySlug}`.toLowerCase()
      })),
      categories: categories.map(category => ({
        ...category,
        searchText: `${category.title} ${category.description} ${category.subcategories.join(' ')}`.toLowerCase()
      }))
    };
  }, [tools, categories]);

  useEffect(() => {
    if (!query.trim()) {
      setResults({ tools: [], categories: [] });
      return;
    }

    const searchTerms = query.toLowerCase().split(' ').filter(Boolean);

    const getRelevanceScore = (searchText: string): number => {
      return searchTerms.reduce((score, term) => {
        const count = (searchText.match(new RegExp(term, 'g')) || []).length;
        return score + count;
      }, 0);
    };

    const matchedTools = searchIndex.tools
      .map(tool => ({
        ...tool,
        score: getRelevanceScore(tool.searchText)
      }))
      .filter(tool => tool.score > 0)
      .sort((a, b) => b.score - a.score)
      .map(({ searchText, score, ...tool }) => tool as Tool)
      .slice(0, 5);

    const matchedCategories = searchIndex.categories
      .map(category => ({
        ...category,
        score: getRelevanceScore(category.searchText)
      }))
      .filter(category => category.score > 0)
      .sort((a, b) => b.score - a.score)
      .map(({ searchText, score, ...category }) => category as Category)
      .slice(0, 3);

    setResults({
      tools: matchedTools,
      categories: matchedCategories
    });
  }, [query, searchIndex]);

  return results;
}