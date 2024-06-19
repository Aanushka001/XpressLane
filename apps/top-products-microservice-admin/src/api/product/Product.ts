import { Category } from "../category/Category";
import { Company } from "../company/Company";

export type Product = {
  category?: Category | null;
  company?: Company | null;
  createdAt: Date;
  discount: number | null;
  id: string;
  name: string | null;
  price: number | null;
  rating: number | null;
  updatedAt: Date;
};
