import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type CustomerWhereInput = {
  address?: StringNullableFilter;
  age?: IntNullableFilter;
  gender?: "Male" | "Female" | "Transgender";
  id?: StringFilter;
  name?: StringNullableFilter;
};
