'use client';

import { createContext, useContext, useEffect, useState } from "react";

const TgContext = createContext(null);

export function TgProvider({children}) {
  const [tgData, setTgData] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined" && window.Telegram?.WebApp) {
      const tg = window.Telegram.WebApp;
      setTgData(tg);
    }
  }, []);

  return (
    <TgContext.Provider value={tgData}>
      {children}
    </TgContext.Provider>
  );
}

export function useTg() {
  const context = useContext(TgContext);
  if (context === undefined) {
    throw new Error("useTg must be used within a TgProvider");
  }
  return context;
}