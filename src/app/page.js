import Image from "next/image";

export default function Home() {
  return (
    <div className="color-white p-20 max-w-[560px] min-h-[800px] bg-gray-800 flex flex-col items-center">
      <Image src="/KeyCraft_logotype.png" alt="logo" width={80} height={80} />
      <p>First miniApp</p>
    </div>
  );
}