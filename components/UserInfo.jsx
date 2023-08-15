"use client";
import { useSession } from "next-auth/react";
import SignInBtn from "./SignInBtn";
import Image from "next/image";

const UserInfo = () => {
  const { status, data: session } = useSession();

  if (status === "authenticated") {
    return (
      <div className="flex flex-col justify-center bg-[#69ddb5] rounded-xl px-5 py-4">
        <Image
          className="rounded-full"
          src={session?.user?.image}
          width={60}
          height={60}
        />

        <div>
          Name: <span className="font-bold">{session?.user?.name}</span>
        </div>
        <div>
          Email: <span className="font-bold">{session?.user?.email}</span>
        </div>
      </div>
    );
  } else {
    return <SignInBtn />;
  }
};

export default UserInfo;
