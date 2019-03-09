import { Category } from 'constants/categories';

export interface IItem {
  name: string;
  background: string;
  category: Category;
  description: string;
  image: any;
  maxWidth?: string;
  url: string;
}