export type MenuType = {
  id: number;
  name: string;
  unitPrice: number;
  imageUrl: string;
  ingredients: string[];
  soldOut: boolean;
};

export type OrderType = {
  id: string;
  customer: string;
  status: string;
  priority: boolean;
  priorityPrice: number;
  orderPrice: number;
  estimatedDelivery: Date;
  cart: Cart[];
};

export type Cart = {
  pizzaId: number;
  name: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
};

export type NewOrder = {
  customer: string;
  priority: boolean;
  phone: string;
  address: string;
  cart: Cart[];
};
