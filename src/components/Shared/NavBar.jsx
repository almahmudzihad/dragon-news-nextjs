"use client";
import Image from "next/image";
import userAvatar from "@/assets/user.png";
import NavItem from "./NavItem";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";

function NavBar() {
  const { data: session, isPending } = authClient.useSession();
  const userin = session?.user;
  console.log(userin);
  return (
    <div className="flex justify-between container mx-auto mt-5">
      <div></div>

      <ul className="flex items-center gap-5 font-bold">
        <li>
          <NavItem href="/">Home</NavItem>
        </li>
        <li>
          <NavItem href="/about-us">About</NavItem>
        </li>
        <li>
          <NavItem href="/career">Career</NavItem>
        </li>
      </ul>

      { isPending ? (
        <span className="loading loading-spinner text-neutral"></span>
      ) : userin ? (
        <div className="flex items-center gap-3">
          <p className="font-bold">Hello {userin?.name}</p>
          <Image
            src={userin?.image || userAvatar}
            alt="userAvatar"
            height={40}
            width={40}
            className="rounded-full"
          />
          <button className="btn bg-black text-white" onClick={async () => await authClient.signOut()}>
            Logout
          </button>
        </div>
      ) : (
        <button className="btn bg-black text-white">
          <Link href="/login">Login</Link>
        </button>
      )}
    </div>
  );
}

export default NavBar;
