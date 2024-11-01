export interface Tool {
  title: string;
  slug: string;
  description: string;
  price: number;
  regularPrice: number;
  rating: number;
  reviews: number;
  categorySlug: string;
  image: string;
  features: string[];
}

export interface SubcategoryTool {
  name: string;
  description: string;
}

export interface Subcategory {
  name: string;
  tools: SubcategoryTool[];
}

export interface Category {
  title: string;
  slug: string;
  icon: string;
  description: string;
  subcategories: Subcategory[];
  count: number;
  image: string;
}