import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import { PiFileDuotone } from "react-icons/pi";

export default function Artigos() {
  const pasta = path.join(process.cwd(), "content/artigos");
  const arquivos = fs.readdirSync(pasta);

  const artigos = arquivos.map((arquivo) => {
    const slug = arquivo.replace(".md", "");
    const filePath = path.join(pasta, arquivo);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(fileContent);

    return {
      slug,
      title: data.title,
      tags: data.tags,
      date: data.date,
    };
  });

  return (
    <div className="p-4">
      <h1
        className="text-xl font-bold text-center
                text-primary
                mb-2"
      >
        Artigos
      </h1>
      <p
        className="text-secondary text-center
                mb-6"
      >
        Compartilhando um pouco do meu conhecimento e experiências
      </p>

      <div className="flex flex-col gap-4">
        {artigos.map((artigo) => {
          const dataFormatada = new Date(artigo.date).toLocaleDateString(
            "pt-BR",
            {
              day: "2-digit",
              month: "long",
              year: "numeric",
            }
          );

          return (
            <Link
              key={artigo.slug}
              href={`/artigos/${artigo.slug}`}
              className="bg-alt p-4 hover:opacity-90 transition"
            >
              <div className="flex flex-row items-center gap-3 mb-2">
                <PiFileDuotone className="flex itens-start icons-orange" size={40} />
                <p className="text-tertiary">{artigo.title}</p>
              </div>

              <div className="flex items-center gap-4 text-xs text-[#ffb59b] flex-wrap">
                {artigo.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="border border-[#ffb59b] text-[#ffb59b] px-2 py-1 rounded-full text-xs"
                  >
                    {tag}
                  </span>
                ))}
                <span className="w-1 h-1 bg-[#ffb59b] rounded-full"></span>
                <p>{dataFormatada}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
