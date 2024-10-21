"use client";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { NavigationChevron } from "@/components/ui/navigation-menu";
import { Phone, ShoppingCart, User } from "lucide-react";
import { menuItems } from "./menuItems";
import { ShoppingCartItems } from "@/components/shoppingCartItems";
import { ShoppingCartCount } from "@/components/shoppingCartCount";
import { useEffect, useState } from "react";
import { useZustand } from "./useZustand";
import { shoppingCartStore, useShoppingCartMenu } from "./shoppingCartStore";

export const NavIconMenu = () => {
  const cartMenu = useShoppingCartMenu();

  const [menuValue, setMenuValue] = useState("");

  console.log("cartMenu", cartMenu);

  useEffect(() => {
    if (cartMenu?.open) setMenuValue("cart");
    console.log("cart?.menuOpen", cartMenu?.open);
  }, [cartMenu?.open]);

  const content = (
    <MenubarContent>
      {menuItems.map((item) => (
        <MenubarItem key={item.href} className="w-full text-left text-nowrap flex gap-4 justify-between">
          {item.title}
          <div className="text-muted-foreground">
            <NavigationChevron orientation="horizontal" />
          </div>
        </MenubarItem>
      ))}
    </MenubarContent>
  );
  return (
    <Menubar
      className="flex bg-transparent border-none"
      value={menuValue}
      onValueChange={(value) => {
        if (menuValue === value) return;

        setMenuValue(value);
        cartMenu?.setOpen(menuValue === "cart");
      }}
    >
      <MenubarMenu value="contact">
        <div className="relative hover:bg-primary-foreground/20 rounded-md">
          <MenubarTrigger className="relative flex gap-2 !text-primary-foreground !bg-transparent items-center px-3 py-1">
            <Phone className="text-4xl" />
            <div className="text-base font-bold hidden md:block">Contact</div>
          </MenubarTrigger>
          <MenubarContent className="max-w-xl mr-2 text-sm">
            <div className="p-3">
              <h3 className="font-semibold text-lg mb-1"> Sales & Advies</h3>
              <div className="grid grid-cols-2 gap-6 py-4">
                <div>
                  <h4 className="font-semibold text-md flex gap-1 items-center">Offertes</h4>
                  <p className="text-muted-foreground">U kunt offertes zelf aanvragen via de website</p>
                </div>
                <div>
                  <div className="flex justify-between">
                    <h4 className="font-semibold text-md flex gap-1 items-center">Telefoon</h4>
                  </div>
                  <p className="text-muted-foreground">+31 85 0441003</p>
                  <p className="text-muted-foreground">Tijdens kantooruren</p>
                </div>

                <div>
                  <h4 className="font-semibold text-md flex gap-1 items-center">E-mail</h4>
                  <p className="text-muted-foreground">sales@chefstore.nl</p>
                  <p className="text-muted-foreground">Wij beantwoorden u zo spoedig mogelijk</p>
                </div>
                <div>
                  <h4 className="font-semibold text-md flex gap-1 items-center">Chat</h4>
                  <p className="text-muted-foreground">
                    Chat met ons tijdens kantooruren via de knop rechtsonderin uw scherm zit
                  </p>
                </div>
              </div>
            </div>
            <MenubarSeparator />

            <div className="p-3 pt-2">
              <h3 className="font-semibold text-lg mb-1">Klantenservice</h3>

              <div className="grid grid-cols-2 gap-6 py-4">
                <div>
                  <h4 className="font-semibold text-md flex gap-1 items-center">E-mail</h4>
                  <p className="text-muted-foreground">
                    Stuur een e-mail naar service@chefstore.nl of vul een Serviceverzoek in.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-md flex gap-1 items-center">Chat</h4>
                  <p className="text-muted-foreground">
                    Chat met ons tijdens kantooruren via de knop rechtsonderin uw scherm zit
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-md flex gap-1 items-center">Telefonisch</h4>
                  <p className="text-muted-foreground">
                    U kunt ook een verzoek indienen om door ons gebeld te worden, klik daarvoor hier
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-md flex gap-1 items-center">Meer</h4>
                  <p className="text-muted-foreground">Klantenservice pagina</p>
                </div>
              </div>
            </div>
          </MenubarContent>
        </div>
      </MenubarMenu>

      <MenubarMenu value="favourites">
        <div className="relative hover:bg-primary-foreground/20 rounded-md">
          <MenubarTrigger className="relative flex gap-2 !text-primary-foreground !bg-transparent items-center px-3 py-1">
            <User className="text-4xl" />
          </MenubarTrigger>
          {content}
        </div>
      </MenubarMenu>
      <MenubarMenu value="cart">
        <div className="relative hover:bg-primary-foreground/20 rounded-md">
          <MenubarTrigger className="relative flex gap-2 !text-primary-foreground !bg-transparent items-center px-3 py-1">
            <ShoppingCart className="text-4xl" />
            <ShoppingCartCount className="absolute top-0 right-0 aspect-square h-5 rounded-full bg-secondary" />
          </MenubarTrigger>
          <MenubarContent className="overflow-scroll p-0">
            <ShoppingCartItems />
          </MenubarContent>
        </div>
      </MenubarMenu>
    </Menubar>
  );
};
