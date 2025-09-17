'use client';

import Link from "next/link";
import {useTg} from "@/providers/tgProvider";
import TG from "@/components/tgDebug/tg";

export default function Home() {
  const tg = useTg();

  return (
    <>
      <ul className="flex flex-col gap-2">
        <li className='cursor-pointer'>
          <Link href="/payments"
                className='rounded-xl bg-cyan-700 w-full h-full block p-4 hover:bg-cyan-600 active:bg-cyan-800 transition-all duration-100'>Получить
            ключ</Link>
        </li>
        <li className='cursor-pointer'>
          <Link href="/keys"
                className='text-center rounded-xl bg-cyan-700 w-full h-full block p-4 hover:bg-cyan-600 active:bg-cyan-800 transition-all duration-100'>Мои
            ключи</Link>
        </li>
      </ul>
      <TG tg={tg.initDataUnsafe}>initDataUnsafe</TG>
      <TG tg={tg.source}>source</TG>
    </>
  );
}