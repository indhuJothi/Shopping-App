export type CustomerCreateInput = {
  address?: string | null;
  age?: number | null;
  gender?: "Male" | "Female" | "Transgender" | null;
  name?: string | null;
};
