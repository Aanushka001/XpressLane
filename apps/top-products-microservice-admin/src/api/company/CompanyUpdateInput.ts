import { ProductUpdateManyWithoutCompaniesInput } from "./ProductUpdateManyWithoutCompaniesInput";

export type CompanyUpdateInput = {
  name?: string | null;
  products?: ProductUpdateManyWithoutCompaniesInput;
};
