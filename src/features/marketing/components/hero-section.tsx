'use client';

import { Button } from '@/shared/components/ui/button';
import { Heading, Text } from '@/shared/core/typography';
import Link from 'next/link';
import Image from 'next/image';

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-16">
      {/* Background Assets Container - Contained within viewport */}
      <div className="absolute inset-0 z-0">

        {/* Left Asset - Positioned safely within viewport */}
        <div className="absolute bottom-0 left-0 w-[50vw] h-full hidden lg:block">
          <Image
            src="/images/backgrounds/hero-asset-left.svg"
            alt=""
            fill
            className="object-contain object-bottom opacity-90"
            priority={false}
            sizes="42vw"
          />
        </div>

        {/* Right Asset - Positioned safely within viewport */}
        <div className="absolute bottom-0 right-0 w-[50vw] h-full">
          <Image
            src="/images/backgrounds/hero-asset-right.svg"
            alt="CPNS Professional"
            fill
            className="object-contain object-bottom"
            priority
            sizes="45vw"
          />
        </div>
      </div>

      {/* Main Content Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center justify-start min-h-[calc(100vh-4rem)] py-8">
          {/* Content - Positioning sesuai Figma */}
          <div className="w-full lg:w-[55%] xl:w-[50%] space-y-8 animate-fade-in-up">
            {/* Header Text */}
            <div className="space-y-4">
              <Heading
                as="h1"
                size="display-lg"
                variant="default"
                className="leading-[1.1] tracking-tight"
              >
                <span className="block text-foreground font-bold">Langkah Awal</span>
                <span className="block text-foreground font-bold">Menuju Karir</span>
                <span className="block font-bold">
                  Impian{' '}
                  <span className="relative text-primary">
                    CPNS!
                    <div className="absolute bottom-0 left-0 w-full h-1.5 bg-secondary rounded-full animate-scale-in"></div>
                  </span>
                </span>
              </Heading>
            </div>

            {/* Description Text */}
            <div className="max-w-[90%] lg:max-w-[85%]">
              <Text
                size="md"
                className="leading-relaxed text-muted-foreground animate-fade-in-up animation-delay-200"
              >
                Prestige Academy membuka sayap menuju era cemerlangmu!
                Seperti Jalak Bali yang istimewa, kami mengubah pengetahuan
                menjadi pencerahan. Terbang tinggi bersama kami, melestarikan
                nilai berharga sambil menembus batas potensimu!
              </Text>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-400 pt-4">
              <Button
                size="xl"
                variant="secondary"
                animation="hover"
                className="font-semibold shadow-colored-secondary min-w-[200px]"
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
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold min-w-[140px]"
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