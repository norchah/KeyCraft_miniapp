'use client';

import {useEffect, useState} from 'react';
import {mocData} from '@/utils/const';

// Хук для реальных данных
export function useTGReal() {
  const [tg, setTg] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.Telegram?.WebApp) {
      setTg({...window.Telegram.WebApp, source: 'real'});
    }
  }, []);

  return tg;
}

// Хук для моковых данных
export function useTGMock() {
  const [tg] = useState({...mocData, source: 'mock'});
  return tg;
}
