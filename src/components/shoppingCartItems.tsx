"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { Check, ChevronRight, Minus, Plus, Trash } from "lucide-react";
import { Input } from "./ui/input";
import { cn, priceString } from "@/lib/utils";
import { Separator } from "./ui/separator";
import { Card } from "./ui/card";

import { shoppingCartStore } from "@/lib/shoppingCartStore";
import { useZustand } from "@/lib/useZustand";

export const ShoppingCartItems = () => {
  const cart = useZustand(shoppingCartStore);
  return (
    <>
      <div className="flex flex-col gap-4 p-4 max-w-xl">
        <h2 className="text-xl font-bold">Winkelwagen</h2>
        <div className="flex flex-col gap-4">
          {cart?.items.map(({ product, amount }) => {
            return (
              <div key={product.sku} className={cn("flex gap-4")}>
                <div className="relative h-32 aspect-square p-4 border rounded-md shadow-sm">
                  <div className="relative h-full w-full">
                    <Image src={product.image} alt={product.title} fill className="object-contain" />
                  </div>
                </div>

                <div className="flex flex-col justify-between">
                  <div>
                    <p className="font-bold">{product.title}</p>
                    <div className="text-muted-foreground flex items-center font-semibold text-sm">
                      <Check strokeWidth={2.5} /> Direct leverbaar
                    </div>
                  </div>
                  <div className="flex justify-between items-end">
                    <div className="flex gap-4">
                      <Card className="flex rounded-md overflow-hidden shadow-sm w-fit">
                        <Button
                          size="icon"
                          variant="ghost"
                          onClick={() => cart.setAmount(product.sku, (amount) => amount - 1)}
                          disabled={amount === 1}
                          className="rounded-none border-r"
                        >
                          <Minus />
                        </Button>
                        <Input
                          type="number"
                          value={amount}
                          onChange={(e) => {
                            const value = parseFloat(e.currentTarget.value);
                            if (!isNaN(value) && value > 0) cart.setAmount(product.sku, value);
                          }}
                          className="hide-arrows w-14 rounded-none shadow-none border-0 border-r"
                        />
                        <Button
                          size="icon"
                          variant="ghost"
                          onClick={() => cart.setAmount(product.sku, (amount) => amount + 1)}
                          className="rounded-none"
                        >
                          <Plus />
                        </Button>
                      </Card>
                      <Button size="icon" variant="outline" onClick={() => cart.deleteItem(product.sku)}>
                        <Trash />
                      </Button>
                    </div>

                    <div className="flex">
                      <div className="shrink-0 py-1 px-4">
                        <p className="text-xs text-muted-foreground">stuk</p>
                        <p>{priceString(product.price)}</p>
                      </div>
                      <div>
                        <Separator orientation="vertical" />
                      </div>
                      <div className="shrink-0 py-1 px-4">
                        <p className="text-xs text-muted-foreground">totaal</p>
                        <p className="font-bold">{priceString(product.price * amount)}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex gap-2 sticky bottom-0 p-4 bg-white">
        <Button onClick={() => alert("TODO: Implementeren")} disabled={cart?.items.length === 0} variant="outline">
          details bekijken
        </Button>
        <Button
          onClick={() => alert("TODO: Implementeren")}
          disabled={cart?.items.length === 0}
          variant="secondary"
          className="font-bold text-lg gap-0"
        >
          bestellen
          <div className="text-base">
            <ChevronRight strokeWidth={3} />
          </div>
        </Button>
      </div>
    </>
  );
};
