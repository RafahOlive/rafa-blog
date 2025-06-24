import { PiFileDuotone } from "react-icons/pi";

export default function Artigos() {
    return ( 
        <div className="p-4">
              <h1
                className="text-xl font-bold text-center
                text-title
                mb-2"
              >
                Artigos
              </h1>
              <p
                className="text-subtitle text-center
                mb-6"
              >
                Compartilhando um pouco do meu conhecimento e experiências
              </p>

                <div className='flex flex-col gap-4'>

                    <div className="bg-alt p-4">
                        <div className="flex flex-row items-center gap-3 mb-2">
                            <PiFileDuotone className='icons-orange' size={40} />
                            <p className="text-title"> Como se comportar mediante aos problemas da vida</p>
                        </div>
                        <div className="flex items-center gap-4 text-xs text-[#ffb59b]">
                            <p>Mentalidade</p>
                            <span className="w-1 h-1 bg-[#ffb59b] rounded-full"></span>
                            <p>23/06/2025</p>
                        </div>
                    </div>

                </div>

            </div>
    );
}