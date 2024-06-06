'use client';
import { store } from '@/lib/store';
import { Provider } from 'react-redux';
import { useRef } from 'react';

export default function ProviderShell({ children }) {
  const storeRef = useRef();
  if (!storeRef.current) {
    storeRef.current = store();
  }
  return <Provider store={storeRef.current}>{children}</Provider>;
}
