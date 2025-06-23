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

                <div className='flex flex-col'>

                    <div className="bg-alt p-4">
                        <div className="flex flex-row items-center gap-1 mb-2">
                            <PiFileDuotone className='icons-orange' size={30} />
                            <p className="text-title"> Como se comportar mediante</p>
                        </div>
                        <div className="flex flex-row">
                            <p className="text-subtitle">Mentalidade</p>
                            <p className="text-subtitle">23/06/2025</p>
                        </div>

                    </div>

                </div>

            </div>
    );
}