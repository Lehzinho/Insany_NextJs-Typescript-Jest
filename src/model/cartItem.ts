import { ProductProps } from "./products";

export interface CartItemProps extends ProductProps {
  quantity: number;
}
