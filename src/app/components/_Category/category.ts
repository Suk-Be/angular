export interface Category {
  id: number;
  brandName: string;
  name: string;
  descriptionText?: string;
  articles: Article[];
}

export interface Article {
  id: number;
  shortDescription: string;
  price: number;
  unit: string;
  pricePerUnitText: string;
  image: string;
}
