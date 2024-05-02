import { useRouter } from 'next/navigation';

export default function Contact() {
  const router = useRouter();
  router.push('/', { scroll: false });
  return <div>page</div>;
}
