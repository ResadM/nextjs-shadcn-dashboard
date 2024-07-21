import Header from "@/components/layout/header";
import SideBar from "@/components/layout/sidebar";
import { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <div className="flex h-screen overflow-hidden">
        <SideBar />
        <main className="py-20 w-full overflow-auto scroll-smooth">
          <div className="container">{children}</div>
        </main>
      </div>
    </>
  );
}
