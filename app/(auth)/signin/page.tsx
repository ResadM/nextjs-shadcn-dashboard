import SignInForm from "@/components/forms/signin-form";
import Link from "next/link";

import { TbHexagonLetterR } from "react-icons/tb";

export default function SignIn() {
  return (
    <div className="w-full h-screen lg:grid  lg:grid-cols-2 ">
      <div className="flex flex-col">
        <div className="w-full py-4 px-4">
          <Link
            href={"https://github.com/ResadM"}
            target="_blank"
            className="flex"
          >
            <TbHexagonLetterR size={50} />
          </Link>
        </div>
        <div className="h-full w-full flex justify-center items-center">
          <SignInForm />
        </div>
      </div>

      <div className="hidden bg-muted lg:block bg-slate-600"></div>
    </div>
  );
}
