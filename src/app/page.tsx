'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    console.log('Redirecting to /marketing...');

    // Redirect segera tanpa delay untuk testing
    router.replace('/marketing');
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Loading...</h1>
        <p>Redirecting to marketing page...</p>
      </div>
    </div>
  );
}