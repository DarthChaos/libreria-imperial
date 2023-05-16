import { error, status } from "@/interfaces/global-redux";

interface shoppingCartItem {
  img: string;
  name: string;
  uPrice: number;
  tPrice: number;
}

export interface shoppingCartState {
  cart: { items: shoppingCartItem[] | []; total: number; observation?: string };
  status: status;
  error: error;
}
