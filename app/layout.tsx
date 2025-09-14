import './globals.scss';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Providers from './Providers';

export const metadata: Metadata = {
  title: 'My Site',
  description: 'Next + Strapi + Tailwind + i18n',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" dir="ltr">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
