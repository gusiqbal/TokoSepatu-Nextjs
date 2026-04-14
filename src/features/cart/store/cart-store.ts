import { create } from "zustand";
import { CartItem } from "@/src/types/ICart";

type CartStore = {
  items: CartItem[];
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addItem: (item: Omit<CartItem, "quantity">, quantity?: number) => void;
  removeItem: (id: number, size: string) => void;
  updateQuantity: (id: number, size: string, quantity: number) => void;
  clearCart: () => void;
  itemCount: () => number;
  subtotal: () => number;
};

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  isOpen: false,
  openCart: () => set({ isOpen: true }),
  closeCart: () => set({ isOpen: false }),

  addItem: (newItem, quantity = 1) => {
    set((state) => {
      const existing = state.items.find(
        (i) => i.id === newItem.id && i.size === newItem.size
      );
      if (existing) {
        return {
          items: state.items.map((i) =>
            i.id === newItem.id && i.size === newItem.size
              ? { ...i, quantity: i.quantity + quantity }
              : i
          ),
        };
      }
      return { items: [...state.items, { ...newItem, quantity }] };
    });
    set({ isOpen: true });
  },

  removeItem: (id, size) =>
    set((state) => ({
      items: state.items.filter((i) => !(i.id === id && i.size === size)),
    })),

  updateQuantity: (id, size, quantity) => {
    if (quantity <= 0) {
      get().removeItem(id, size);
      return;
    }
    set((state) => ({
      items: state.items.map((i) =>
        i.id === id && i.size === size ? { ...i, quantity } : i
      ),
    }));
  },

  clearCart: () => set({ items: [], isOpen: false }),

  itemCount: () => get().items.reduce((acc, i) => acc + i.quantity, 0),

  subtotal: () =>
    get().items.reduce((acc, i) => {
      const discounted =
        i.discount > 0 ? i.price - (i.price * i.discount) / 100 : i.price;
      return acc + discounted * i.quantity;
    }, 0),
}));
