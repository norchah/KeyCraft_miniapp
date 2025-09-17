'use client';

import Link from "next/link";
import {TG} from "@/components/tgDebug/tg";
import {useTGMock, useTGReal} from "@/hooks/useTG";
import {useEffect} from "react";

export default function Home() {
  let tgMock = useTGMock();
  let tgReal = useTGReal();

  useEffect(() => {
    if (tgReal && typeof tgReal.disableVerticalSwipes === "function") {
      tgReal.disableVerticalSwipes();
    }
    if (tgReal && typeof tgReal.lockOrientation === "function") {
      tgReal.lockOrientation();
    }
  }, [tgReal]);

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
      <div className='max-w-screen flex flex-col gap-2'>
        {/*{tgReal && <TG tg={tgReal.platform}>platform</TG>}*/}

      </div>

    </>
  );
}