import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ReactQueryProvider } from '@/lib/api/client/providers/ReactQueryProvider';
import { GlobalLayout } from './components/GlobalLayout';
import { JotaiDevTools } from './components/JotaiDevTools';
import './global.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Next.js Playground',
  description: 'This is a Next.js playground for testing purposes.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <JotaiDevTools />
        <GlobalLayout>
          <ReactQueryProvider>{children}</ReactQueryProvider>
        </GlobalLayout>
      </body>
    </html>
  );
}
