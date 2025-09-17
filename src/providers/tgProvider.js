'use client';

import {createContext, useContext, useEffect, useState} from 'react';
import {mocData} from '@/utils/const';

const TgContext = createContext(null);

export function TgProvider({children}) {
  const [tg, setTg] = useState({
    ...mocData,
    source: 'mock', // источник данных: mock или real
  });

  useEffect(() => {
    if (typeof window !== 'undefined' && window.Telegram?.WebApp) {
      const webApp = window.Telegram.WebApp;
      setTg({
        ...webApp,
        source: 'real',
      });
    }
  }, []);

  return <TgContext.Provider value={tg}>{children}</TgContext.Provider>;
}

export function useTg() {
  return useContext(TgContext);
}
