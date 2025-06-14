'use client';

import Image from 'next/image';
import { Badge } from '@/shared/components/ui/badge';
import { Heading, Text } from '@/shared/core/typography';

const AboutSection = () => {
  const features = [
    '#Platform Terintegrasi',
    '#Soal Berbasis Field Report',
    '#Evaluasi Diagnostik Presisi Tinggi',
    '#Komunitas Profesional'
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24 animate-fade-in">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Announcement Banner */}
        <div className="mb-16 flex justify-center">
          <div className="inline-flex items-center rounded-full bg-white border border-gray-200 px-6 py-3 shadow-soft hover:shadow-medium transition-all duration-300">
            <Text size="sm" weight="medium" className="text-gray-800">
              Tingkatkan nilai dengan simulasi berbasis riset!
            </Text>
            <Text size="sm" weight="semibold" className="ml-2 text-primary whitespace-nowrap">
              Jadilah peserta berikutnya →
            </Text>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="lg:order-1 order-2 animate-slide-in-left">
            <div className="relative max-w-lg mx-auto lg:mx-0">
              <div className="relative">
                <Image
                  src="/images/illustrations/marketing/about-asset.svg"
                  alt="About Prestige Academy"
                  width={550}
                  height={450}
                  className="w-full h-auto animate-bounce-subtle"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:order-2 order-1 space-y-8 animate-slide-in-right">
            <div className="space-y-4">
              <Heading
                as="h2"
                size="display-md"
                className="leading-tight"
              >
                <span className="text-foreground">Tentang,</span>
                <br />
                <span className="text-primary">Prestige</span>{' '}
                <span className="text-secondary">Academy</span>
              </Heading>
            </div>

            <div className="space-y-6">
              <Text size="lg" className="leading-relaxed text-muted-foreground">
                Selamat datang di Prestige Academy, tempat di mana semangat
                belajar dan potensi berharga bertemu. Seperti Jalak Bali yang
                langka dan istimewa, kami percaya bahwa setiap individu
                memiliki keunikan, transformasi pengetahuan, dan kebebasan
                untuk terbang menuju puncak prestasi.
              </Text>

              <Text size="lg" className="leading-relaxed text-muted-foreground">
                Bersama kami, kamu akan dipersiapkan dengan materi dan tryout
                berkualitas untuk menghadapi seleksi-seleksi penting, dengan
                keseimbangan sempurna antara tradisi dan inovasi.
                Bergabunglah dan terbang lebih tinggi bersama kami!
              </Text>
            </div>

            {/* Feature Tags */}
            <div className="flex flex-wrap gap-3">
              {features.map((feature, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="bg-primary/10 text-primary border border-primary/20 px-4 py-2 text-sm font-medium animate-scale-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {feature}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;