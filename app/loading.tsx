import Image from "next/image";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-[#08172d]">
      <div className="flex flex-col items-center">
        <div className="animate-pulse">
          <Image
            src="/logo-app-rounded.png"
            alt="LoukPeri loading"
            width={120}
            height={120}
            className="h-24 w-24 rounded-[28px] object-contain sm:h-28 sm:w-28"
            priority
          />
        </div>

        <p className="mt-5 text-sm tracking-[0.16em] text-white/60">
          LOUKPERI
        </p>
      </div>
    </div>
  );
}