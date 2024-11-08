'use client';

import { useEffect, useState } from 'react';
import { DevTools } from 'jotai-devtools';
import 'jotai-devtools/styles.css';

export const JotaiDevTools = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    setTheme(mediaQuery.matches ? 'dark' : 'light');

    const handleChange = () => {
      setTheme(mediaQuery.matches ? 'dark' : 'light');
    };

    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  return <DevTools theme={theme} position="bottom-right" />;
};
