export type OrderStatus = "pending" | "processing" | "shipped" | "delivered" | "cancelled";

export type ShippingAddress = {
  fullName: string;
  phone: string;
  street: string;
  city: string;
  province: string;
  postalCode: string;
};

export type OrderItem = {
  id: number;
  name: string;
  brand: string;
  image: string;
  price: number;
  discount: number;
  size: string;
  quantity: number;
};

export type Order = {
  id: string;
  items: OrderItem[];
  subtotal: number;
  shipping: number;
  total: number;
  status: OrderStatus;
  createdAt: string;
  shippingAddress: ShippingAddress;
  paymentMethod: "card" | "bank_transfer" | "cod";
};
