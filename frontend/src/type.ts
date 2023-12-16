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