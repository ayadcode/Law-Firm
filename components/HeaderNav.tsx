'use client';
import Link from 'next/link';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { setLanguage } from '../store/slices/languageSlice';
import { FaSearch, FaChevronDown } from 'react-icons/fa';
import { useRouter } from 'next/router';

type Service = { id: number; attributes: { slug: string; title: string } };

export default function HeaderNav({ services = [] as Service[] }) {
  const { t, i18n } = useTranslation();
  const [openSearch, setOpenSearch] = useState(false);
  const [q, setQ] = useState('');
  const [showServices, setShowServices] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();

  const toggleLang = (lng: 'en' | 'ar') => {
    i18n.changeLanguage(lng);
    dispatch(setLanguage(lng));
    if (typeof document !== 'undefined') document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
    localStorage.setItem('lang', lng);
  };

  const submitSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!q) return;
    router.push(`/search?q=${encodeURIComponent(q)}`);
  };

  return (
    <header className="bg-white/5">
      <nav className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/"><a className="text-white text-xl font-bold">Ponatchi</a></Link>

          <ul className="hidden md:flex gap-6 text-sm text-white/90 items-center">
            <li><Link href="/"><a>{t('nav.home')}</a></Link></li>
            <li><Link href="/about"><a>{t('nav.about')}</a></Link></li>

            <li className="relative">
              <button onClick={() => setShowServices(s => !s)} className="flex items-center gap-1">
                {t('nav.services')} <FaChevronDown />
              </button>
              {showServices && (
                <div className="absolute left-0 mt-2 bg-primaryBrown text-white p-4 rounded shadow-lg min-w-[200px] z-50">
                  {services.map(s => (
                    <Link key={s.id} href={`/services/${s.attributes.slug}`}>
                      <a className="block py-2">{s.attributes.title}</a>
                    </Link>
                  ))}
                </div>
              )}
            </li>

            <li><Link href="/team"><a>{t('nav.team')}</a></Link></li>
            <li><Link href="/contact"><a>{t('nav.contact')}</a></Link></li>
          </ul>
        </div>

        <div className="flex items-center gap-4">
          <form onSubmit={submitSearch} className="flex items-center">
            {openSearch && (
              <input value={q} onChange={(e) => setQ(e.target.value)} placeholder={t('nav.search')} className="rounded px-3 py-2 text-sm bg-white/10 border border-white/10 text-white" />
            )}
            <button type="button" onClick={() => setOpenSearch(s => !s)} className="p-2">
              <FaSearch className="text-white" />
            </button>
          </form>

          <div className="flex items-center gap-2">
            <button onClick={() => toggleLang('en')} className="px-2 py-1 text-sm bg-white/10 rounded">EN</button>
            <button onClick={() => toggleLang('ar')} className="px-2 py-1 text-sm bg-white/10 rounded">ع</button>
          </div>

          <Link href="/book"><a className="ml-3 px-4 py-2 rounded border border-white/20 text-white">Book Appointment</a></Link>
        </div>
      </nav>
    </header>
  );
}
