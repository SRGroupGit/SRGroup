'use client';
import { useRouter } from 'next/navigation';

export default function commercial() {
  const router = useRouter();
  router.push('/', { scroll: false });
  return <div>page</div>;
}
