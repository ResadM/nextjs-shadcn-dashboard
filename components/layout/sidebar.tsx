"use client";
import { cn } from "@/lib/utils";
import { ChevronLeft } from "lucide-react";
import SidebarNav from "./sidebar-nav";
import { useDrawer } from "@/hooks/useDrawer";

export default function SideBar() {
  const { isMinimized, toggle } = useDrawer();

  const handleToggle = () => {
    toggle();
  };
  return (
    <nav
      className={cn(
        `relative hidden md:block border-r shadow-md z-10 pt-14  duration-500 `,
        isMinimized ? "w-72" : "w-[72px]"
      )}
    >
      <ChevronLeft
        className={cn(
          "absolute -right-3 top-20 cursor-pointer rounded-full border bg-background text-3xl text-foreground",
          isMinimized && "rotate-180"
        )}
        onClick={handleToggle}
      />
      <div className="w-full flex py-6 px-4">
        <SidebarNav open={isMinimized} setOpen={() => {}} />
      </div>
    </nav>
  );
}
