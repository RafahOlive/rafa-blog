import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="py-2 px-4 flex justify-between bg-alt">
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
        <span className="text-sm font-medium text-gray-100">
          Rafael Ribeiro
        </span>
      </Link>

      <button className="flex items-center gap-1 bg-orange text-white px-4 py-1 rounded-full hover:bg-indigo-700 transition">
        Explorar
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4"
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
    </div>
  );
}
