import Image from "next/image";
export default function Projetos() {
  return (
    <div className="p-4">
      <h1
        className="text-xl font-bold text-center
        text-white 
        mb-2"
      >
        Projetos
      </h1>
      <p
        className="text-subtitle text-center
        mb-6"
      >
        Em breve, projetos incríveis serão compartilhados aqui!
      </p>

      <div className="flex flex-col items-center gap-4 mb-4">
        <Image
          src="/calc.png"
          alt="Calculadora"
          width={80}
          height={80}
          className="rounded-lg"
        />
        <p className="text-white">Calculadora</p>
      </div>

      <div className="flex flex-col items-center gap-4">
        <Image
          src="/ecommerce.png"
          alt="Ecommerce"
          width={80}
          height={80}
          className="rounded-lg"
        />
        <p className="text-white">Ecommerce</p>
      </div>
    </div>
  );
}
