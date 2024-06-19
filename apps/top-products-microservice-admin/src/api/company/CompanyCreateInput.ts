import { ProductCreateNestedManyWithoutCompaniesInput } from "./ProductCreateNestedManyWithoutCompaniesInput";

export type CompanyCreateInput = {
  name?: string | null;
  products?: ProductCreateNestedManyWithoutCompaniesInput;
};
