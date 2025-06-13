// src/app/page.tsx
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    // Auto redirect ke marketing page setelah 2 detik (diperpanjang sedikit)
    const timer = setTimeout(() => {
      router.replace('/marketing');
    }, 2000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-background to-secondary/10 flex items-center justify-center relative overflow-hidden">
      <div className="relative z-10 text-center space-y-12 px-4">
        {/* Logo Section */}
        <div className="animate-fade-in-up">
          <div className="relative mx-auto mb-8">

            <div className="relative">
              <Image
                src="/images/logo/logo-prestige.svg"
                alt="Prestige Academy Logo"
                width={140}
                height={140}
                className="mx-auto animate-float filter transition-all duration-300"
                priority
              />
            </div>
          </div>

          <div className="space-y-3">
            <h1 className="text-5xl md:text-6xl font-bold text-primary tracking-tight">
              Prestige Academy
            </h1>
            <p className="text-xl text-muted-foreground font-medium max-w-md mx-auto leading-relaxed">
              Platform Tryout CASN Terpercaya
            </p>
          </div>
        </div>

        {/* Enhanced Loading Section */}
        <div className="space-y-6 animate-fade-in-up animation-delay-300">
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground animate-pulse font-medium">
              Mengalihkan ke halaman utama...
            </p>
            {/* Progress bar */}
            <div className="w-48 mx-auto bg-muted rounded-full h-2 overflow-hidden">
              <div className="h-full bg-gradient-to-r from-primary to-secondary rounded-full animate-progress"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}