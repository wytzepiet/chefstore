"use client";

import { shoppingCartStore } from "@/lib/shoppingCartStore";
import { useZustand } from "@/lib/useZustand";
import React from "react";

export const ShoppingCartCount = (props: React.HTMLAttributes<HTMLDivElement>) => {
  const count = useZustand(shoppingCartStore, ({ count }) => count());
  if (!count) return null;
  return <div {...props}>{count}</div>;
};
