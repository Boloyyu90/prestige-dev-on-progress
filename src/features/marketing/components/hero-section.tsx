'use client';

import { Button } from '@/shared/components/ui/button';
import { Heading, Text } from '@/shared/core/typography';
import Link from 'next/link';
import Image from 'next/image';

export function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] overflow-hidden py-20 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Background Assets */}
        <div className="absolute inset-0 z-0">
          {/* Left Asset - Hidden on mobile */}
          <div className="absolute bottom-0 left-0 w-[58vw] h-full -translate-x-[9%] hidden md:block">
            <Image
              src="/images/backgrounds/hero-asset-left.svg"
              alt=""
              fill
              className="object-contain opacity-90"
              priority={false}
            />
          </div>

          {/* Right Asset */}
          <div className="absolute bottom-0 right-0 w-[58vw] h-full translate-x-[9%]">
            <Image
              src="/images/backgrounds/hero-asset-right.svg"
              alt="CPNS Professional"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex items-center min-h-[calc(100vh-8rem)]">
          <div className="w-full lg:w-1/2 space-y-8 animate-fade-in-up md:-translate-y-16">
            <div className="space-y-4">
              <Heading
                as="h1"
                size="display-lg"
                variant="default"
                className="leading-tight"
              >
                <span className="block">Langkah Awal</span>
                <span className="block">Menuju Karir</span>
                <span className="block">
                  Impian{' '}
                  <span className="relative text-primary">
                    CPNS!
                    <div className="absolute bottom-0 left-0 w-full h-1.5 bg-secondary rounded-full animate-scale-in"></div>
                  </span>
                </span>
              </Heading>
            </div>

            <Text
              size="lg"
              className="max-w-[90%] leading-relaxed text-muted-foreground animate-fade-in-up animation-delay-200"
            >
              Prestige Academy membuka sayap menuju era cemerlangmu!
              Seperti Jalak Bali yang istimewa, kami mengubah pengetahuan
              menjadi pencerahan. Terbang tinggi bersama kami, melestarikan
              nilai berharga sambil menembus batas potensimu!
            </Text>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-400">
              <Button
                size="xl"
                variant="secondary"
                animation="hover"
                className="font-semibold shadow-colored-secondary"
                asChild
              >
                <Link href="/register">
                  Belajar Sekarang!
                </Link>
              </Button>

              <Button
                variant="outline"
                size="xl"
                animation="hover"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold"
                asChild
              >
                <Link href="/login">
                  Masuk
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;