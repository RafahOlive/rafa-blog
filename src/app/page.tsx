import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center min-h-[70vh]">
      <Hero />
    </div>

    // <div className="bg-red-500 flex flex-col justify-center items-center min-h-[80vh]">
    //   <div className="bg-yellow-300 w-40 h-40">Teste</div>
    // </div>
  );
}
