export interface User {
  id: string;
  email: string;
  name: string;
  role: 'TOURIST' | 'GUIDE' | 'ADMIN';
  profilePic?: string;
  bio?: string;
  languages?: string[];
  expertise?: string[];
  dailyRate?: number;
}

export interface Listing {
  id: string;
  title: string;
  description: string;
  tourFee: number;
  duration: number;
  city: string;
  category: string;
  images: string[];
  guide: User;
  averageRating?: number;
  reviewCount?: number;
}

export interface Booking {
  id: string;
  bookingDate: string;
  status: 'PENDING' | 'CONFIRMED' | 'COMPLETED' | 'CANCELLED';
  totalAmount: number;
  listing: Listing;
  tourist?: User;
  guide?: User;
}

export interface Review {
  id: string;
  rating: number;
  comment: string;
  tourist: User;
  createdAt: string;
}