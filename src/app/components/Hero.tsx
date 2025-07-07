import Link from "next/link";
import { PiFolder, PiFile } from "react-icons/pi";

export default function Hero() {
  return (
    <div
      className="h-full
      flex flex-col gap-8 items-center justify-center
      lg:flex-row lg:items-center lg:gap-32
      
      "
    >
      <section
        className="flex flex-col gap-4
        text-center 
        lg:flex-1 lg:text-left
        "
      >
        <h2 className="text-lg font-medium text-gray-400">
          Hello, my name is
          <span className="ml-1 animate-blink">|</span>
        </h2>
        <h1 className="text-5xl font-bold text-white">Rafael</h1>
        <p className="text-xl font-medium text-gray-400">
          I design and build beautiful websites that bring ideas to life.
        </p>
      </section>

      <section
        className="w-50
        grid grid-cols-2 gap-8
        lg:flex-1 lg:px-0 lg:py-0 lg:mx-0 lg:max-w-none lg:gap-10
        "
      >
        <Link href="/sobre" className="group flex flex-col items-center">
          <figure className="flex flex-col items-center transition hover:scale-105 hover:opacity-90">
            <PiFile className="icons-orange" size={50} aria-hidden="true" />
            <figcaption className="mt-2 text-sm text-white group-hover:text-orange-500">
              Sobre
            </figcaption>
          </figure>
        </Link>
        <Link href="/projetos" className="group flex flex-col items-center">
          <figure className="flex flex-col items-center transition hover:scale-105 hover:opacity-90">
            <PiFolder className="icons-orange" size={50} aria-hidden="true" />
            <figcaption className="mt-2 text-sm text-white group-hover:text-orange-500">
              Projetos
            </figcaption>
          </figure>
        </Link>
        <Link href="/artigos" className="group flex flex-col items-center">
          <figure className="flex flex-col items-center transition hover:scale-105 hover:opacity-90">
            <PiFolder className="icons-orange" size={50} aria-hidden="true" />
            <figcaption className="mt-2 text-sm text-white group-hover:text-orange-500">
              Artigos
            </figcaption>
          </figure>
        </Link>
      </section>
    </div>
  );
}
