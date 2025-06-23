"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Breadcrumb() {
  const pathname = usePathname();

  const pathSegments = pathname
    .split("/")
    .filter((segment) => segment.length > 0);

  const crumbs = pathSegments.map((segment, index) => {
    const href = "/" + pathSegments.slice(0, index + 1).join("/");

    // Formata o nome (capitalize simples)
    const label = decodeURIComponent(segment)
      .replace(/-/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase());

    return { href, label };
  });

  return (
    <nav
      className="hidden 
        lg:flex items-center
        text-sm text-subtitle
        w-full h-12 
        pl-4
        bg-alt
        lg:border lg:border-gray-700"
    >
      <ol className="flex space-x-2">
        <li>
          <Link href="/" className="hover:text-white-light">
            Home
          </Link>
          <span className="mx-1">/</span>
        </li>

        {crumbs.map((crumb, index) => {
          const isLast = index === crumbs.length - 1;

          return (
            <li key={crumb.href} className="flex">
              {!isLast ? (
                <>
                  <Link href={crumb.href} className="hover:text-white-light">
                    {crumb.label}
                  </Link>
                  <span className="mx-1">/</span>
                </>
              ) : (
                <span className="text-white-light">{crumb.label}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
