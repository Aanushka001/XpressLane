import { SortOrder } from "../../util/SortOrder";

export type ProductOrderByInput = {
  categoryId?: SortOrder;
  companyId?: SortOrder;
  createdAt?: SortOrder;
  discount?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  price?: SortOrder;
  rating?: SortOrder;
  updatedAt?: SortOrder;
};
