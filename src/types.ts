export interface Package {
  id: string;
  title: string;
  description: string;
  price: number;
  duration: string;
  type: 'Economy' | 'Premium' | 'VIP';
  image: string;
  features: string[];
}

export interface VisaService {
  id: string;
  country: string;
  price: number;
  processingTime: string;
  image: string;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
  avatar: string;
}

export interface Tour {
  id: string;
  title: string;
  price: number;
  date: string;
  image: string;
  description: string;
}
