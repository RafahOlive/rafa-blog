"use client";
import Image from "next/image";
import Link from "next/link";

import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div
      className="bg-alt-smooth py-2 px-6 flex justify-between 
      lg:px-16 lg:py-2 lg:h-[9vh]"
    >
      <Link
        href="/"
        className="flex items-center gap-2 hover:opacity-80 transition"
      >
        <Image
          src="/rafa.jpg"
          alt="Foto de perfil"
          width={40}
          height={40}
          className="rounded-full object-cover border-2 border-icons-orange"
        />
        <span className="text-[18px] font-semibold text-white font-inter">
          Rafael Ribeiro
        </span>
      </Link>

      <div className="relative">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`flex items-center gap-1 px-4 py-1 rounded-full transition-all duration-300 border-2 ${
            menuOpen
              ? "bg-orange border-black text-black"
              : "bg-alt border-orange text-primary hover:bg-orange"
          }`}
        >
          Explorar
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`w-4 h-4 transform transition-transform duration-300 ${
              menuOpen ? "rotate-180" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {menuOpen && (
          <div className="mt-2 bg-alt text-white rounded-md shadow-md flex flex-col absolute z-50 w-max">
            <Link href="/artigos" className="px-4 py-2 hover:bg-orange">
              Artigos
            </Link>
            <Link href="/projetos" className="px-4 py-2 hover:bg-orange">
              Projetos
            </Link>
            <Link href="/contato" className="px-4 py-2 hover:bg-orange">
              Contato
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
