import Image from "next/image";
import { Alan_Sans } from "next/font/google";

const alanSans = Alan_Sans({
  style: "normal",
  subsets: ["latin"],
  weight: "300",
});

export default function Head() {
  return (
    <>
      <header className=" flex font-extrabold mt-7 gap-2">
        <Image
          src="/menu.svg"
          alt="imagem do menul"
          width={29}
          height={29}
          className="ml-6"
        />
        <div className="flex items-center gap-1 ">
          <Image
            src="/taxi.svg"
            alt="imagem de um taxi"
            width={32}
            height={32}
            className="shrink-0"
          />
          <div
            className="flex flex-col justify-center
          "
          >
            <h1 className="flex text-zinc-100 gap-1 ">
              TVDE<span className="text-[#0865BC]">Aprova</span>
            </h1>
            <span className={`text-zinc-50 text-xs - ${alanSans.className}`}>
              Estude hoje, conduz amanhã
            </span>
          </div>
        </div>
        {/* foto de perfil */}
        <div className="ml-auto mr-6 flex justify-center">
          <Image
            src="/perfil.svg"
            alt="foto de perfil"
            width={20}
            height={20}
            className="w-10 h-10 rounded-full border border-zinc-50 object-cover p-1"
          />
        </div>
      </header>
    </>
  );
}
