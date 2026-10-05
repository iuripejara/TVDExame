export function Card() {
  return (
    <div
      className="
            relative flex justify-center mx-13 w-60 h-96 mt-20 
        "
    >
      <div
        className="
                absolute inset-0 origin-bottom-left
                bg-linear-to-b from-[#0F1A2D] from-50% to-[#315593] to-95% border-[#1D293F]
                border rounded-lg -rotate-6 w-64 h-80 mt-5
            "
      />
      <div
        className="
                        absolute inset-0 origin-bottom-left
                        bg-linear-to-b from-[#0F1A2D] from-50% to-[#315593] to-95% border-[#1D293F]
                        w-64 h-80 border rounded-lg -rotate-3 mt-2
                    "
      />
      {/* azul claro */}
      <div
        className="
                absolute inset-0 origin-bottom-left
                bg-[#1D293F] border-[#28344A] w-75 h-52 border rounded-lg
                ml-5.25 mt-3 -rotate-6
            "
      />
      <div
        className="
                absolute inset-0 
                bg-[#0F1A2D] border-[#1D293F] w-80 h-98.75 border rounded-lg
                
            "
      ></div>
    </div>
  );
}
