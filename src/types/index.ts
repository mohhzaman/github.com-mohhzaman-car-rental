export interface Car {
  id: string;
  name: string;
  make: string;
  model: string;
  year: number;
  price: number;
  location: string;
  type: 'luxury' | 'suv' | 'sedan' | 'ev' | 'sport';
  features: string[];
  images: string[];
  rating: number;
  reviews: number;
  owner: {
    id: string;
    name: string;
    type: 'company' | 'individual';
    verified: boolean;
    rating: number;
    totalRentals: number;
    image: string;
  };
  availability: {
    available: boolean;
    nextAvailable?: string;
    instantBook: boolean;
  };
  specs: {
    horsepower: number;
    acceleration: string;
    transmission: string;
    seats: number;
  };
}

export interface SearchParams {
  location: string;
  startDate: string;
  endDate: string;
  type?: string;
  priceRange?: {
    min: number;
    max: number;
  };
  ownerType?: 'company' | 'individual' | 'all';
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  image: string;
  content: string;
  rating: number;
  date: string;
}
