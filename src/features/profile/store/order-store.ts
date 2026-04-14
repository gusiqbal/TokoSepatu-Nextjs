import { create } from "zustand";
import { Order } from "@/src/types/IOrder";

type OrderStore = {
  orders: Order[];
  addOrder: (order: Order) => void;
  getOrderById: (id: string) => Order | undefined;
};

export const useOrderStore = create<OrderStore>((set, get) => ({
  orders: [],
  addOrder: (order) =>
    set((state) => ({ orders: [order, ...state.orders] })),
  getOrderById: (id) => get().orders.find((o) => o.id === id),
}));
