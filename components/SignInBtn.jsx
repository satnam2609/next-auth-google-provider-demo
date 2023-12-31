"use client";

import Image from "next/image";
import { signIn } from "next-auth/react";

const SignInBtn = () => {
  return (
    <button
      onClick={() => signIn("google")}
      className="flex items-center gap-3 shadow-xl rounded-lg pl-3"
    >
      <Image src="/google-logo.png" height={30} width={30} />
      <span className="bg-blue-500 text-white px-4 py-3">Sign with google</span>
    </button>
  );
};

export default SignInBtn;
