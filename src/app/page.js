import Image from "next/image";

export default function Home() {
  return (
    <div className="color-white pt-20 max-w-[560px] min-h-[800px] bg-sky-900 flex flex-col items-center">
      <Image src="/logo-free-bg.svg" alt="logo" width={80} height={80}/>
      <p>KeyCraft</p>
    </div>
  );
}