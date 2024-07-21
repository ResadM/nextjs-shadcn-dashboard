import Link from "next/link";
import { TbHexagonLetterR } from "react-icons/tb";
import ThemeToggle from "./theme-toggle";
import UserMenu from "./user-menu";
import MobileSidebar from "./mobile-sidebar";

export default function Header() {
  return (
    <div className="fixed left-0 right-0 top-0 z-20 border-b bg-slate-100 dark:bg-slate-900 backdrop-blur">
      <nav className="flex h-14 items-center justify-between px-4">
        <Link
          href={"https://github.com/ResadM"}
          target="_blank"
          className="hidden md:block"
        >
          <TbHexagonLetterR size={40} />
        </Link>
        <div className="block md:hidden">
          <MobileSidebar />
        </div>
        <div className="flex gap-4 items-center">
          <ThemeToggle />
          <UserMenu />
        </div>
      </nav>
    </div>
  );
}
