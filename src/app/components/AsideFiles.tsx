import Link from "next/link";
import { AiOutlineHome } from "react-icons/ai";
import { PiFolder, PiFile } from "react-icons/pi";

export default function AsideFiles() {
  return (
    <aside
      className="hidden 
        lg:flex lg:flex-col
        lg:flex-none
        lg:w-48
        lg:pl-6
        lg:pt-4
        bg-alt
        lg:border lg:border-gray-700
        
        text-subtitle"
    >
      <div className="flex space-x-2 mb-8">
        <Link
          href="/"
          className="w-4 h-4
           p-0.5 
           rounded-full
          bg-red-500 
           flex items-center justify-center
           hover:opacity-80"
        >
          <AiOutlineHome />
        </Link>
        <div className="w-4 h-4 rounded-full bg-gray-500"></div>
        <div className="w-4 h-4 rounded-full bg-gray-500"></div>
      </div>

      <div className="flex flex-col gap-8 flex-1">
        {/* Folder */}
        <div>
          <h2 className="text-white-light text-sm mb-2">Folder</h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/projetos"
                className="flex items-center gap-2 hover:text-white-light"
              >
                <PiFolder />
                Projetos
              </Link>
            </li>
            <li>
              <Link
                href="/artigos"
                className="flex items-center gap-2 hover:text-white-light"
              >
                <PiFolder />
                Artigos
              </Link>
            </li>
            <li>
              <Link
                href="/ferramentas"
                className="flex items-center gap-2 hover:text-white-light"
              >
                <PiFolder />
                Ferramentas
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-white-light text-sm mb-2">Files</h2>
          <Link
            href="/sobre"
            className="flex items-center gap-2 hover:text-white-light"
          >
            <PiFile />
            About
          </Link>
        </div>
      </div>
    </aside>
  );
}
