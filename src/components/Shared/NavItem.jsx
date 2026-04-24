"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavItem({ href, children }) {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`transition ${
        isActive
          ? "text-blue-600 border-b-2 border-blue-600"
          : "text-gray-700 hover:text-blue-500"
      }`}
    >
      {children}
    </Link>
  );
}