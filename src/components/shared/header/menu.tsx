/* import { UserIcon } from "lucide-react";
//import { ShoppingCartIcon, UserIcon } from "lucide-react";
import Link from "next/link";
import CartButton from "./cart-button";
//import CartButton from "@/components/shared/header/CartButton";
export default function Menu() {
  return (
    <div className="flex justify-end">
      <nav
        className="flex gap-3
          w-full"
      >
        <Link href="/Sign in" className="header-button">
          <UserIcon className="h-8 w-8" />
          <span className="font-bold">Sign in</span>
        </Link>

        <CartButton />
      </nav>
    </div>
  );
}
 */

import { EllipsisVertical } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import CartButton from "./cart-button";
//import UserButton from "/user-button";
import UserButton from "./user-button";
import ThemeSwitcher from "./theme-switcher";
import LanguageSwitcher from "./language-switcher";
import { useTranslations } from "next-intl";

const Menu = ({ forAdmin = false }: { forAdmin?: boolean }) => {
  const t = useTranslations();
  return (
    <div className="flex justify-end">
      <nav className="md:flex gap-3 hidden w-full">
        <LanguageSwitcher />
        <ThemeSwitcher />
        <UserButton />
        {forAdmin ? null : <CartButton />}
      </nav>
      <nav className="md:hidden">
        <Sheet>
          <SheetTrigger className="align-middle header-button">
            <EllipsisVertical className="h-6 w-6" />
          </SheetTrigger>
          <SheetContent className="bg-black text-white  flex flex-col items-start  ">
            <SheetHeader className="w-full">
              <div className="flex items-center justify-between ">
                <SheetTitle className="  ">{t("Header.Site Menu")}</SheetTitle>
                <SheetDescription></SheetDescription>
              </div>
            </SheetHeader>
            <LanguageSwitcher />
            <ThemeSwitcher />
            <UserButton />
            <CartButton />
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
};

export default Menu;
