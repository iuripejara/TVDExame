import Image from "next/image";

export default function Head() {
  return (
    <>
      <header className=" flex font-extrabold mt-7">
        <Image src="menu.svg" alt="imagem do menul" width={29} height={29} />
        <div className="flex">
          <Image
            src="taxi.svg"
            alt="imagem de um taxi"
            width={32}
            height={32}
          />
          <h1 className="flex text-zinc-100 gap-1">
            TVDE<p className="text-[#0865BC]">Aprova</p>
          </h1>
        </div>
      </header>
    </>
  );
}
