'use client';

import { Badge } from '@/shared/components/ui/badge';
import { Card } from '@/shared/components/ui/card';
import { Button } from '@/shared/components/ui/button';
import { Section } from '@/shared/core/section';
import { Heading, Text } from '@/shared/core/typography';
import Image from 'next/image';

interface Package {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  price: number;
  originalPrice?: number;
  features: string[];
  popular?: boolean;
  badge?: string;
}

const PriceDisplay = ({ price, originalPrice }: { price: number; originalPrice?: number }) => (
  <div className="space-y-1">
    <div className="flex items-baseline gap-2">
      <Text size="xs" variant="muted">RP</Text>
      <Heading as="h4" size="sm" className="text-foreground">
        {price === 0 ? 'GRATIS' : price.toLocaleString('id-ID')}
      </Heading>
      {originalPrice && originalPrice > price && (
        <Text size="sm" variant="muted" className="line-through">
          {originalPrice.toLocaleString('id-ID')}
        </Text>
      )}
    </div>
    {originalPrice && originalPrice > price && (
      <Badge variant="destructive" className="text-xs">
        Hemat {Math.round(((originalPrice - price) / originalPrice) * 100)}%
      </Badge>
    )}
  </div>
);

const PackageCard = ({ pkg, index }: { pkg: Package; index: number }) => (
  <Card
    variant={pkg.popular ? "gradient" : "default"}
    animation="interactive"
    className={`relative overflow-hidden h-full transition-all duration-500 ${
      pkg.popular ? 'ring-2 ring-primary/50 shadow-colored scale-105' : ''
    }`}
    style={{ animationDelay: `${index * 200}ms` }}
  >
    {/* Popular Badge */}
    {pkg.popular && (
      <div className="absolute -right-12 top-8 z-20">
        <div className="bg-secondary text-white px-12 py-2 rotate-45 shadow-lg">
          <Text size="xs" weight="bold" className="text-center">
            🔥 POPULER
          </Text>
        </div>
      </div>
    )}

    <div className="flex flex-col h-full">
      {/* Header Banner */}
      <div className="relative h-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20"></div>
        <Image
          src="/images/illustrations/cards/banner.svg"
          alt="Package Banner"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      </div>

      <div className="flex-1 p-6 space-y-6">
        {/* Package Info */}
        <div className="space-y-3">
          <div className="flex justify-between items-start">
            <div className="space-y-1">
              <Heading as="h3" size="xs" className="text-foreground">
                {pkg.title}
              </Heading>
              <Text size="sm" weight="semibold" variant="primary">
                {pkg.subtitle}
              </Text>
            </div>
            <Badge
              variant={index === 0 ? "secondary" : "default"}
              className="font-medium"
            >
              {pkg.badge || (index === 0 ? "Gratis!" : "Premium!")}
            </Badge>
          </div>

          <Text size="sm" variant="muted" className="leading-relaxed">
            {pkg.description}
          </Text>
        </div>

        {/* Price */}
        <PriceDisplay price={pkg.price} originalPrice={pkg.originalPrice} />

        {/* Features */}
        <div className="space-y-3">
          {pkg.features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <div className="w-5 h-5 bg-primary text-white rounded-full flex items-center justify-center text-xs mt-0.5 flex-shrink-0">
                ✓
              </div>
              <Text size="sm" className="text-foreground leading-relaxed">
                {feature}
              </Text>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="pt-4">
          <Button
            className="w-full"
            variant={pkg.popular ? "secondary" : "default"}
            size="lg"
            animation="hover"
          >
            {pkg.price === 0 ? 'Coba Gratis!' : 'Pilih Paket'}
          </Button>
        </div>
      </div>
    </div>
  </Card>
);

const PackagesSection = () => {
  const packages: Package[] = [
    {
      id: "1",
      title: "Paket Gratis",
      subtitle: "Untuk Pemula",
      description: "Pengenalan TryOut SKD berisi soal-soal HOTS berdasarkan FR Peserta SKD CPNS 2024, disusun mirip dengan tes asli",
      price: 0,
      badge: "Gratis!",
      features: [
        "Akses 1 Tryout SKD",
        "Pembahasan Soal Lengkap",
        "Analisis Hasil Dasar",
        "Berlaku 30 Hari"
      ]
    },
    {
      id: "2",
      title: "Paket Premium",
      subtitle: "Rekomendasi",
      description: "Persiapan lengkap untuk TryOut SKD dengan soal-soal HOTS dan pembahasan video komprehensif",
      price: 99000,
      originalPrice: 149000,
      badge: "Terlaris!",
      popular: true,
      features: [
        "Akses 5 Tryout SKD",
        "Pembahasan Video HD",
        "Analisis Detail & Ranking",
        "Konsultasi via Chat",
        "Materi Pembelajaran Lengkap",
        "Berlaku 6 Bulan"
      ]
    },
    {
      id: "3",
      title: "Paket Ultimate",
      subtitle: "Persiapan Maksimal",
      description: "Paket terlengkap dengan semua fitur premium plus bimbingan personal dan garansi",
      price: 199000,
      originalPrice: 299000,
      badge: "Best Value!",
      features: [
        "Akses 10 Tryout SKD",
        "Pembahasan Video Premium",
        "Analisis Mendalam + AI Insights",
        "Konsultasi Pribadi 1-on-1",
        "Materi Eksklusif + Update",
        "Simulasi Wawancara",
        "Garansi Kelulusan*",
        "Berlaku 1 Tahun"
      ]
    }
  ];

  return (
    <Section
      variant="default"
      padding="xl"
      container="wide"
      className="bg-gradient-to-b from-background to-muted/30"
    >
      <div className="space-y-16">
        {/* Header */}
        <div className="text-center space-y-4 animate-fade-in-up">
          <Heading
            as="h2"
            size="display-md"
            align="center"
          >
            Pilih Paket Belajar Terbaik
          </Heading>
          <Text
            size="lg"
            align="center"
            variant="muted"
            className="max-w-2xl mx-auto"
          >
            Mulai perjalanan sukses CPNS-mu dengan paket yang sesuai kebutuhan dan budget
          </Text>
        </div>

        {/* Packages Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <PackageCard
              key={pkg.id}
              pkg={pkg}
              index={index}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center animate-fade-in-up">
          <Text size="sm" variant="muted" className="mb-4">
            *Syarat dan ketentuan berlaku. Garansi berlaku dengan ketentuan tertentu.
          </Text>
          <Button
            variant="outline"
            size="lg"
            animation="hover"
            className="border-primary text-primary hover:bg-primary hover:text-white"
          >
            Bandingkan Semua Fitur
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default PackagesSection;