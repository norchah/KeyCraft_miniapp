'use client';

import { useEffect, useState } from "react";

export default function TgDebug() {
  const [dump, setDump] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined" && window.Telegram?.WebApp) {
      const tg = window.Telegram.WebApp;
      setDump(JSON.stringify(tg, null, 2));
    }
  }, []);

  return (
    <pre className="bg-gray-100 p-2 text-xs overflow-x-auto">
      {dump || "Loading TG..."}
    </pre>
  );
}
