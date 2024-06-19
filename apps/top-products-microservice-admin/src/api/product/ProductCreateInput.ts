import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";

export type ProductCreateInput = {
  category?: CategoryWhereUniqueInput | null;
  company?: CompanyWhereUniqueInput | null;
  discount?: number | null;
  name?: string | null;
  price?: number | null;
  rating?: number | null;
};
