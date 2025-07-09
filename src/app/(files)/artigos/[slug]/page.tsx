import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc"
import Link from "next/link";
import Image from "next/image";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  const pasta = path.join(process.cwd(), "content/artigos");
  return fs
    .readdirSync(pasta)
    .filter((nome) => nome.endsWith(".mdx"))
    .map((nome) => ({ slug: nome.replace(".mdx", "") }));
}
 //--------------------------//
 export default async function ArtigoPage(props: Props) {
  const params = await props.params;
  const { slug } = params;
  
 //-------------------//

  const filePath = path.join(process.cwd(), "content/artigos", `${slug}.mdx`);
  if (!fs.existsSync(filePath)) notFound();

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { content, data } = matter(fileContent);

  return (
    <div className="max-w-3xl mx-auto p-6 text-white
    lg:p-12">
      <Link href="/artigos" className="text-secondary hover:underline mb-4 block md:hidden lg:hidden">
        ← Artigos
      </Link>

      <h1 className="text-3xl font-bold mb-4">{data.title}</h1>

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
            <p className="text-secondary text-xs">{data.date}</p>
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
      <article className="font-light leading-relaxed">
        <MDXRemote source = {content} />
      </article>
    </div>
  );
}
