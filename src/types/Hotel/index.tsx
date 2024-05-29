import { ImageProduct } from "types/HardProducts";

export interface HotelCardType {
  hotels: Hotel[];
}
export interface HotelSliderType {
  hotel: Hotel;
}

export interface Hotel {
  id: number;
  title: string;
  metaTags: unknown;
  description: string;
  metaDescription: unknown;
  stars: number;
  price: string;
  overview: string;
  persons: string;
  Fully: string;
  English: string;
  metaImage: ImageProduct[];
  link: string;
}
