import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Product = {
  title: string;
  brand: string;
  sku: string;
  image: string;
  callout: string;
  price: number;
  tags: string[];
};

export type ShoppingCart = {
  items: { amount: number; product: Product }[];
  count: () => number;
  total: () => number;
  addProduct: (product: Product, amount: number) => void;
  setAmount: (sku: string, setter: ((amount: number) => number) | number) => void;
  deleteItem: (sku: string) => void;
  clear: () => void;
};

const getSetterValue = <T>(setter: ((value: T) => T) | T, current: T) => {
  return setter instanceof Function ? setter(current) : setter;
};

export const shoppingCartStore = create<ShoppingCart>()(
  persist(
    (set, get) => ({
      items: [],
      count: () => get().items.reduce((acc, { amount }) => acc + amount, 0),
      total: () => get().items.reduce((acc, { amount, product }) => acc + amount * product.price, 0),
      addProduct: (product, amount = 1) => {
        const { sku } = product;
        const { items, setAmount } = get();
        const index = items.findIndex(({ product }) => product.sku === sku);
        if (index !== -1) return setAmount(sku, (prev) => prev + amount);
        set(() => ({ items: [...items, { product, amount }] }));
      },
      setAmount: (sku, setter) => {
        const { items, deleteItem } = get();
        const index = items.findIndex(({ product }) => product.sku === sku);
        if (index === -1) return;
        items[index].amount = getSetterValue(setter, items[index].amount);
        if (items[index].amount <= 0) return deleteItem(sku);
        set({ items });
      },
      deleteItem: (sku) => set(({ items }) => ({ items: items.filter(({ product }) => product.sku !== sku) })),
      clear: () => set({ items: [] }),
    }),
    { name: "shopping-cart" }
  )
);

export type ShoppingCartMenu = {
  open: boolean;
  setOpen: (setter: ((open: boolean) => boolean) | boolean) => void;
};
export const useShoppingCartMenu = create<ShoppingCartMenu>((set) => ({
  open: false,
  setOpen: (setter) => set(({ open }) => ({ open: getSetterValue(setter, open) })),
}));
