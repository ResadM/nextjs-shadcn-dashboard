import { Separator } from "@/components/ui/separator";

import Link from "next/link";
import { TbHexagonLetterR } from "react-icons/tb";

export default function Home() {
  return (
    <>
      <div className="w-full h-14 flex justify-between bg-slate-100 dark:bg-slate-900 px-4 items-center z-10 fixed">
        <Link
          href={"https://github.com/ResadM"}
          target="_blank"
          className="hidden md:block"
        >
          <TbHexagonLetterR size={40} />
        </Link>

        <div className="flex gap-4 items-center">
          <Link
            href={"/signin"}
            className="font-medium font-serif hover:bg-slate-200 hover:text-accent-foreground p-2 rounded-lg "
            type="button"
          >
            Login
          </Link>
        </div>
      </div>
      <main className="flex h-[90vh]   flex-col items-center justify-center gap-4">
        <div className="flex flex-col gap-2">
          <p className="font-sans text-4xl font-bold text-blue-500 mr-2 flex gap-2 flex-col ">
            Next.js + Shadcn
            <span className="text-black  text-3xl">
              Admin Dashboard Template
            </span>
          </p>
          <p className="text-lg font-semibold">with the Next.js App Router</p>
          <p className="font-bold text-2xl self-start ">Overview</p>
          <Separator />
          <p>This is a starter template using the following stack:</p>
          <div className="pl-14">
            <ul className="list-disc font-sans font-semibold">
              <li>
                Framework -
                <Link
                  className="text-blue-600"
                  href={"https://nextjs.org/"}
                  target="_blank"
                >
                  Next.js 14
                </Link>
              </li>
              <li>
                Styling -
                <Link
                  className="text-blue-600"
                  href={"https://tailwindcss.com/"}
                  target="_blank"
                >
                  Tailwind css
                </Link>
              </li>
              <li>
                Component library -
                <Link
                  className="text-blue-600"
                  href={"https://ui.shadcn.com/"}
                  target="_blank"
                >
                  Shadcn/ui
                </Link>
              </li>
              <li>
                Authentication -
                <Link
                  className="text-blue-600"
                  href={"https://authjs.dev/"}
                  target="_blank"
                >
                  Auth,js
                </Link>
              </li>
              <li>
                Form Validation -
                <Link
                  className="text-blue-600"
                  href={"https://zod.dev/"}
                  target="_blank"
                >
                  Zod
                </Link>
              </li>
              <li>
                State Management -
                <Link
                  className="text-blue-600"
                  href={
                    "https://docs.pmnd.rs/zustand/getting-started/introduction"
                  }
                  target="_blank"
                >
                  Zustand
                </Link>
              </li>
              <li>
                Forms -
                <Link
                  className="text-blue-600"
                  href={"https://react-hook-form.com/"}
                  target="_blank"
                >
                  React Hook Form
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}
