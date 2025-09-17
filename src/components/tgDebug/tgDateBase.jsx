'use client';

import {useEffect, useState} from 'react';
import InitDate from "@/components/tgDebug/initDate";

export default function TgDateBase() {
  const [data, setData] = useState({})

  useEffect(() => {
    if (typeof window !== "undefined" && window.Telegram?.WebApp) {
      const tg = window.Telegram.WebApp;
      setData(tg)
    }
  }, [])

  return (
    <div className=''>
      <InitDate date={data.initData} isVisible={false}/>
      {/*и так далее по каждому пункту*/}
    </div>
  );
}