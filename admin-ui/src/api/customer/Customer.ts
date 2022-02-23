import { Order } from "../order/Order";

export type Customer = {
  address: string | null;
  age: number | null;
  createdAt: Date;
  gender?: "Male" | "Female" | "Transgender" | null;
  id: string;
  name: string | null;
  orders?: Array<Order>;
  updatedAt: Date;
};
