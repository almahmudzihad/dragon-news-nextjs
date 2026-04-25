import Image from "next/image";
import user from "@/assets/user.png";
import NavItem from "./NavItem";
import Link from "next/link";

function NavBar() {
  return (
    <div className="flex justify-between container mx-auto mt-5">
      <div></div>

      <ul className="flex items-center gap-5 font-bold">
        <li><NavItem href="/">Home</NavItem></li>
        <li><NavItem href="/about-us">About</NavItem></li>
        <li><NavItem href="/career">Career</NavItem></li>
      </ul>

      <div className="flex items-center gap-3">
        <Image src={user} alt="user" height={40} width={40} className="rounded-full" />
        
        <button className="btn bg-black text-white"><Link href="/login">Login</Link></button>
      </div>
    </div>
  );
}

export default NavBar;
