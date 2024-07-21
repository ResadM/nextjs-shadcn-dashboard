"use client";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { MenuIcon } from "lucide-react";
import SidebarNav from "./sidebar-nav";

export default function MobileSidebar() {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    console.log("clicked");
    setOpen(false);
  };
  return (
    <>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <MenuIcon />
        </SheetTrigger>
        <SheetContent side="left" className="!px-0">
          <div className="space-y-4 py-4">
            <div className="px-3 py-2">
              <div className="space-y-1">
                <SidebarNav
                  open={true}
                  setOpen={() => {
                    handleClick();
                  }}
                />
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
