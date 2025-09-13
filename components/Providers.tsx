// components/Providers.tsx
'use client';
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import '../lib/i18n'; // initializes i18n (react-i18next)
import { useSelector } from 'react-redux';
import type { RootState } from '../store';

type Props = { children: React.ReactNode };

// Small hook: sync document.dir to store language
function DirSync() {
  // read language from redux, fallback to localStorage
  const lang = useSelector((s: RootState) => s.language.lang);
  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);
  return null;
}

export default function Providers({ children }: Props) {
  return (
    <Provider store={store}>
      <DirSync />
      {children}
    </Provider>
  );
}
