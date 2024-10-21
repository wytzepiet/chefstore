import { Card } from "@/components/ui/card";
import Image from "next/image";
import { menuItems } from "../lib/menuItems";
import Link from "next/link";
import { ProductCard } from "@/components/productCard";

const products = [
  {
    title: "UNIQ Chafing Dish - Zwart - 220-240V/700W - 607x402x(H)250mm",
    brand: "HENDI",
    sku: "470411",
    image: "/images/products/chafing-dish.avif",
    callout: "Elektrische Design Chafing dish",
    price: 145,
    tags: ["Chafing Dish", "Aluminium", "Glas", "PP", "RVS", "Elektrisch", "700 W"],
  },
  {
    title: "UNIQ Soepketel - Zwart - 220-240V/500W - ø366x(H)325mm",
    brand: "HENDI",
    sku: "860526",
    image: "/images/products/soepketel-zwart.avif",
    callout: "Moderne design soepketel!",
    price: 114,
    tags: ["Soepketel", "Aluminium", "Glas", "PP", "RVS", "Elektrisch", "500 W", "8 liter"],
  },
  {
    title: "UNIQ Soepketel - Groen - 220-240V/500W - ø366x(H)325mm",
    brand: "HENDI",
    sku: "860540",
    image: "/images/products/soepketel-groen.avif",
    callout: "Modern design soepketel. Upgrade uw buffet",
    price: 114,
    tags: ["Soepketel", "Aluminium", "Glas", "PP", "RVS", "Elektrisch", "500 W", "8 liter"],
  },
  {
    title: "Staafmixer Smart Pressure Draadloos - 230V/150W - ø65x(H)390mm",
    brand: "HENDI",
    sku: "221419",
    image: "/images/products/staafmixer.avif",
    callout: "Draadloze blender voor dagelijks gebruik",
    price: 75,
    tags: ["Staafmixer", "ABS", "RVS", "Elektrisch", "150 W", "Draadloos"],
  },
  {
    title: "Schepijsvitrine Curacao | 10 x 5 liter | Plus opslagruimte",
    brand: "Combisteel",
    sku: "7472.0105",
    image: "/images/products/schepijsvitrine.avif",
    callout: "Onze Keuze: prachtige schepijsvitrine met ruimte voor 10 smaken ijs",
    price: 1682,
    tags: ["Schepijsvitrine", "Elektrisch", "Statisch", "454 liter", "500 W"],
  },
];
export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-muted hidden lg:flex justify-center w-full ">
        <div className="flex justify-between w-full max-w-screen-xl p-2 text-muted-foreground font-semibold text-sm">
          {menuItems.map((item) => (
            <Link key={item.href} href={item.href} prefetch={false} className="hover:text-primary">
              {item.title}
            </Link>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4 py-4 px-2 w-full max-w-screen-xl">
        <div className="grid grid-cols-2 grid-rows-2 gap-4">
          <Card className="relative border-none overflow-hidden rounded-lg row-span-2 aspect-[613/462]">
            <Image src="/images/banner-1.avif" alt="banner-1" fill className="object-cover" />
          </Card>
          <Card className="relative border-none overflow-hidden rounded-lg">
            <Image src="/images/banner-2.avif" alt="banner-3" fill className="object-cover" />
          </Card>
          <Card className="relative border-none overflow-hidden rounded-lg">
            <Image src="/images/banner-3.avif" alt="banner-3" fill className="object-cover" />
          </Card>
        </div>
        <div className="grid grid-cols-5 gap-y-8 py-10">
          {products.map((product) => {
            return <ProductCard product={product} key={product.sku} />;
          })}
        </div>
      </div>

      <div className="relative bg-primary p-4 py-14 flex justify-center w-full">
        <div className="relative max-w-screen-xl">
          <div className="flex grid-cols-5 gap-y-8 gap-4">
            <div className="w-full flex flex-col justify-center text-primary-foreground">
              <h2 className="text-4xl font-bold text-primary-foreground/70">Chefstore</h2>
              <h2 className=" text-4xl font-bold">Favorieten</h2>
            </div>
            {products.slice(0, 4).map((product) => {
              return (
                <Card key={product.sku} className="w-full">
                  <ProductCard product={product} />
                </Card>
              );
            })}
          </div>
        </div>
      </div>
      <div className="h-screen"></div>
    </div>
  );
}
