"use client";

import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { Link, usePathname, useRouter } from "../i18n/navigation";
import { useLocale } from "next-intl";
import img from "../../public/image copy 8.png"
import img1 from "../../public/menu.png"
import Image from "next/image";

const Navbar = () => {
  const router = useRouter();
  const locale = useLocale();

  const pathname = usePathname();

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value as "en" | "ru";

    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <>
      <header className="p-[20px]">
      <div className="flex items-center justify-between w-[90%] m-auto">
        <Link href="/">
          <Image src={img} alt="" />
        </Link>

        <div className="flex items-center gap-[20px] text-[18px]">
          <p>О нас</p>
          <p>Карта покрытия</p>
          <p>Инфраструктура</p>
          <p>Партнеры</p>

          <Link href="/novosti">
            <p>Новости</p>
          </Link>

          <Link href="/vakansii">
            <p>Вакансии</p>
          </Link>
        </div>

        <div className="num flex items-center gap-[10px]">
          <Image src={img1} alt="" />

          <Link
            href={pathname}
            locale="ru"
            className={locale === "ru" ? "font-bold pointer-events-none" : ""}
          >
            RU
          </Link>

          <Link
            href={pathname}
            locale="en"
            className={locale === "en" ? "font-bold pointer-events-none" : ""}
          >
            EN
          </Link>

          <AnimatedThemeToggler />
        </div>
      </div>
    </header>
    </>
  );
};

export default Navbar;