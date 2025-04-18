import Link from "next/link";
import { LiaFileSolid } from "react-icons/lia";
import { LiaFolder } from "react-icons/lia";

export default function Hero() {
  return (
    <>
      <section className="mt-20 px-4 md:px-16">
        <h2 className="text-lg font-medium text-gray-400 text-center">
          Hello, my name is
          <span className="ml-1 animate-blink">|</span>
        </h2>
        <h1 className="text-5xl font-bold text-white text-center">Rafael</h1>
        <p className="text-xl font-medium text-gray-400 text-center">
          I design and build beautiful websites that bring ideas to life.
        </p>
      </section>

      <section className="grid grid-cols-2 gap-4 px-12 py-6 max-w-md mx-auto">
        <Link href="/projects" className="group flex flex-col items-center">
          <figure className="flex flex-col items-center transition hover:scale-105 hover:opacity-90">
            <LiaFileSolid className="icons-orange" size={50} aria-hidden="true" />
            <figcaption className="mt-2 text-sm text-white group-hover:text-orange-500">
              Sobre
            </figcaption>
          </figure>
        </Link>
        <Link href="/projetos" className="group flex flex-col items-center">
          <figure className="flex flex-col items-center transition hover:scale-105 hover:opacity-90">
            <LiaFolder className="icons-orange" size={50} aria-hidden="true" />
            <figcaption className="mt-2 text-sm text-white group-hover:text-orange-500">
              Projetos
            </figcaption>
          </figure>
        </Link>
        <Link href="/projects" className="group flex flex-col items-center">
          <figure className="flex flex-col items-center transition hover:scale-105 hover:opacity-90">
            <LiaFolder className="icons-orange" size={50} aria-hidden="true" />
            <figcaption className="mt-2 text-sm text-white group-hover:text-orange-500">
              Artigos
            </figcaption>
          </figure>
        </Link>
      </section>
    </>
  );
}
