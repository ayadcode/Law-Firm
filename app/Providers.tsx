'use client';
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import '../lib/i18n';

export default function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lang = (localStorage.getItem('lang') as 'en'|'ar') || 'en';
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, []);

  return <Provider store={store}>{children}</Provider>;
}
