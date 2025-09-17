'use client';

import Link from "next/link";
import {useEffect} from "react";

export default function Home() {

  useEffect(() => {
    if (typeof window !== "undefined" && window.Telegram?.WebApp) {
      const tg = window.Telegram.WebApp;
      tg.ready();
      console.log(tg.initData)
    }
  })

  return (
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
  );
}