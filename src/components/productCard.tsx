"use client";
import Image from "next/image";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

import { Badge } from "./ui/badge";
import { Heart, Minus, Plus, ShoppingCart, ThumbsUp } from "lucide-react";

import Link from "next/link";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useState } from "react";
import { Product, shoppingCartStore, useShoppingCartMenu } from "@/lib/shoppingCartStore";
import { priceString } from "@/lib/utils";

import { useZustand } from "@/lib/useZustand";

export const ProductCard = ({ product }: { product: Product }) => {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [amountToCart, setAmountToCart] = useState<number | null>(1);
  const [favourite, setFavourite] = useState(false);

  const cart = useZustand(shoppingCartStore);
  const setCartOpen = useShoppingCartMenu(({ setOpen }) => setOpen);

  console.log("cart");
  return (
    <div className="relative h-full">
      <Link
        href=""
        className="flex flex-col justify-between h-full gap-2 p-4 hover:bg-muted transition-colors rounded-lg"
      >
        <div className="flex flex-col gap-1">
          <div className="px-8">
            <div className="relative w-full aspect-square">
              <Image src={product.image} alt={product.title} fill className="object-contain mix-blend-darken" />
            </div>
          </div>

          <div>
            <div className="flex gap-1 text-xs font-semibold">
              <p>{product.brand}</p>
              <p className="text-muted-foreground">{product.sku}</p>
            </div>
            <h3 className="font-bold line-clamp-2 overflow-ellipsis">{product.title}</h3>
          </div>

          <p className="text-sm text-secondary font-bold">
            <ThumbsUp className="inline-block align-top" />
            {product.callout}
          </p>

          <div className="mt-1 line-clamp-2 text-clip">
            {product.tags.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="mr-1 px-[0.4em] text-muted-foreground bg-muted-foreground/[7%] border-none"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        <p className="text-right font-bold text-3xl">{priceString(product.price)}</p>
      </Link>
      <div className="flex gap-2 absolute bottom-0 p-4">
        <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
          <PopoverTrigger asChild>
            <Button
              size="icon"
              onClick={() => {
                setCartOpen(true);
              }}
            >
              <ShoppingCart />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="flex gap-2 justify-between w-fit">
            <div className="flex gap-1">
              <Button
                size="icon"
                variant="ghost"
                onClick={() => setAmountToCart((val) => Math.max((val ?? 0) - 1, 1))}
                disabled={!amountToCart}
              >
                <Minus />
              </Button>
              <Input
                type="number"
                value={amountToCart ?? ""}
                onChange={(e) => {
                  const value = parseFloat(e.currentTarget.value);
                  setAmountToCart(isNaN(value) ? null : value);
                }}
                className="hide-arrows w-14"
              />
              <Button size="icon" variant="ghost" onClick={() => setAmountToCart((val) => (val ?? 0) + 1)}>
                <Plus />
              </Button>
            </div>
            <Button
              disabled={!amountToCart}
              onClick={() => {
                setPopoverOpen(false);
                if (amountToCart) cart?.addProduct(product, amountToCart);
                setTimeout(() => setAmountToCart(1), 200);
              }}
            >
              Toevoegen
            </Button>
          </PopoverContent>
        </Popover>

        <Button size="icon" variant="outline" className="group" onClick={() => setFavourite((val) => !val)}>
          <Heart className={favourite ? "fill-secondary stroke-secondary" : ""} />
        </Button>
      </div>
    </div>
  );
};
