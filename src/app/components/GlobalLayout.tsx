import { ReactNode } from 'react';
import { GlobalNavigation } from './GlobalNavigation';

type GlobalLayoutProps = {
  children: ReactNode;
};

export const GlobalLayout = ({ children }: Readonly<GlobalLayoutProps>) => {
  return (
    <main className="grid grid-cols-main-layout">
      <GlobalNavigation />
      <div className="p-4 sm:p-8 h-screen overflow-y-auto">{children}</div>
    </main>
  );
};
