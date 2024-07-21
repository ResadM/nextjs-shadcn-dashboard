"use client";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

type sidebarLinkProp = {
  href: string;
  isMinimized: boolean;
  icon: LucideIcon;
  text: string;
  onClick: () => void;
};

export default function SidebarLink({
  href,
  isMinimized,
  icon: Icon,
  text,
  onClick,
}: sidebarLinkProp) {
  const path = usePathname();
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <Link
            href={href}
            className={cn(
              `py-2 px-2 flex items-center gap-2 rounded-md hover:bg-accent duration-300  hover:text-accent-foreground  `,
              path == href ? "bg-accent" : "bg-transparent"
            )}
            onClick={() => {
              onClick();
            }}
          >
            <Icon className="size-6" />
            {isMinimized ? (
              <span className="font-sans text-lg font-medium truncate">
                {text}
              </span>
            ) : (
              ""
            )}
          </Link>
        </TooltipTrigger>
        <TooltipContent
          align="center"
          side="right"
          sideOffset={8}
          className={isMinimized ? "hidden" : "inline-block"}
        >
          <p>{text}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
