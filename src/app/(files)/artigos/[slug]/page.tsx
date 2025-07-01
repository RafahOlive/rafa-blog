import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import Markdown from "react-markdown";
import Link from "next/link";
import Image from "next/image";

export function generateStaticParams() {
  const pasta = path.join(process.cwd(), "src/content/artigos");
  const arquivos = fs.readdirSync(pasta);

  return arquivos.map((nome) => ({
    slug: nome.replace(".md", ""),
  }));
}

export default async function ArtigoPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const filePath = path.join(
    process.cwd(),
    "src/content/artigos",
    `${slug}.md`
  );

  if (!fs.existsSync(filePath)) notFound();

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { content, data } = matter(fileContent);

  return (
    <div className="max-w-3xl mx-auto p-6 text-white">
      {/* 🔙 Voltar */}
      <Link href="/artigos" className="text-subtle hover:underline mb-4 block">
        ← Artigos
      </Link>

      {/* 🧠 Título */}
      <h1 className="text-3xl font-bold mb-4">{data.title}</h1>

      {/* 👤 Autor + 🏷️ Tag */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-3">
          <Image
            src="/rafa.jpg"
            alt="Rafael Ribeiro"
            width={40}
            height={40}
            className="rounded-full"
          />
          <div className="text-sm">
            <p className="font-semibold">Rafael Ribeiro</p>
            <p className="text-subtle text-xs">{data.date}</p>
          </div>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          {data.tags?.map((tag: string) => (
            <span
              key={tag}
              className="border border-[#ffb59b] text-[#ffb59b] text-xs px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* ✍️ Conteúdo */}
      <article className="prose prose-invert max-w-none">
        <Markdown>{content}</Markdown>
      </article>
    </div>
  );
}
