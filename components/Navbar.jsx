"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const { status } = useSession();

  return (
    <nav className="flex justify-between w-full px-4 py-3 bg-black text-white text-3xl">
      <ul className="font-mono">
        <li>GoogAuth</li>
      </ul>

      <ul className="flex justify-between text-2xl font-medium">
        <li>
          {status === "authenticated" ? (
            <button
              className="bg-white/10 hover:bg-white/20   transition-all rounded-xl px-3  py-1"
              onClick={() => signOut()}
            >
              Sign out
            </button>
          ) : (
            <button
              className="bg-white/10 hover:bg-white/20   transition-all rounded-xl px-3  py-1"
              onClick={() => signIn("google")}
            >
              Sign in
            </button>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
