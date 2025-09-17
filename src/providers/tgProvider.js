'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { mocData } from '@/utils/const';

const TgContext = createContext({ tg: mocData, source: 'mock' });

export function TgProvider({ children }) {
  const [tg, setTg] = useState(null); // null пока не монтирован
  const [source, setSource] = useState('mock');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (window.Telegram?.WebApp) {
        setTg(window.Telegram.WebApp);
        setSource('real');
      } else {
        setTg(mocData);
        setSource('mock');
      }
    }
  }, []);

  // Пока данные не готовы, ничего не рендерим
  if (!tg) return null;

  return (
    <TgContext.Provider value={{ tg, source }}>
      {children}
    </TgContext.Provider>
  );
}

export const useTg = () => useContext(TgContext);
