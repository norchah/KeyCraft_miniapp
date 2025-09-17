'use client';

import Link from "next/link";
import InitDateUnsafe from "@/components/tgDebug/InitDateUnsafe";
import {useTg} from "@/providers/tgProvider";

export default function Home() {
  const tg = useTg();

  return (
    <>
      <pre>{tg}</pre>
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
      <p>initDataUnsafe :{tg.initDataUnsafe}</p>
    </>
  );
}