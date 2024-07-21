"use client";
import { LayoutDashboard, Users, User, Settings, Landmark } from "lucide-react";
import SidebarLink from "./sidebar-link";
import { Dispatch, SetStateAction } from "react";

interface sidebarNavProps {
  open: boolean;
  setOpen: () => void;
}

export default function SidebarNav({ open, setOpen }: sidebarNavProps) {
  const handleClick = () => {
    setOpen();
  };
  return (
    <div className="grid items-start gap-2 w-full">
      <SidebarLink
        href="/dashboard"
        icon={LayoutDashboard}
        isMinimized={open}
        text="Dashboard"
        onClick={handleClick}
      />
      <SidebarLink
        href="/dashboard/payments"
        icon={Landmark}
        isMinimized={open}
        text="Payments"
        onClick={handleClick}
      />
      <SidebarLink
        href="/dashboard/profile"
        icon={User}
        isMinimized={open}
        text="Profile"
        onClick={handleClick}
      />
      <SidebarLink
        href="/dashboard/settings"
        icon={Settings}
        isMinimized={open}
        text="Settings"
        onClick={handleClick}
      />
    </div>
  );
}
