export interface CardType {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

export interface TestimonialType {
  id: number;
  avatarUrl: string;
  name: string;
  quote: string;
}

export interface QuestionData {
  title: string;
  description: string;
}

export interface BlogType {
  id: number;
  imageUrl: string;
  category: string;
  title: string;
  description: string;
  authorName: string;
  authorTitle: string;
}

export interface User {
  _id: string;
  email: string;
  password?: string;
  fullname: string;
  image?: string;
  role: "user" | "admin";
  isActive: boolean;
  blogs?: string[]; // Assuming Blog _id is a string
  comments?: string[]; // Assuming Comment _id is a string
  createdAt?: string;
  updatedAt?: string;
  token?: string;
}

// Define a type for the restaurant schema
export interface Restaurant {
  _id?: string;
  name: string;
  description?: string;
  openingHours?: string;
  location?: string;
  image?: string[];
  createdAt?: string;
  updatedAt?: string;
}
