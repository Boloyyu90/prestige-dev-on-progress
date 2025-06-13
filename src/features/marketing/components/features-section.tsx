'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/shared/components/ui/button';
import { Card } from '@/shared/components/ui/card';
import { Section } from '@/shared/core/section';
import { Heading, Text } from '@/shared/core/typography';

interface Feature {
    id: string;
    title: string;
    icon: string;
}

const FeaturesSection = () => {
    const [activeFeature, setActiveFeature] = useState('simulasi');

    const features: Feature[] = [
        { id: 'simulasi', title: 'Simulasi Nyata', icon: '/images/icons/features/to-do-list.svg' },
        { id: 'statistik', title: 'Sistem Statistik', icon: '/images/icons/features/statistic.svg' },
        { id: 'peringkat', title: 'Sistem Peringkat', icon: '/images/icons/features/ranking.svg' }
    ];

    const featureContent = {
        simulasi: {
            title: 'Simulasi Ujian Mirip Asli',
            description: 'Rasakan pengalaman ujian yang sesungguhnya dengan sistem tryout yang memberikan pengalaman ujian asli',
            benefits: [
                'Materi & soal terbaru',
                'Analisis hasil otomatis',
                'Simulasi ujian real-time'
            ],
            mockup: '/images/illustrations/features/laptop-mockup-ujian.png'
        },
        statistik: {
            title: 'Sistem Statistik Lengkap',
            description: 'Pantau perkembangan belajar dengan analisis statistik yang komprehensif dan mudah dipahami',
            benefits: [
                'Grafik perkembangan detail',
                'Analisis kelemahan & kekuatan',
                'Laporan performa real-time'
            ],
            mockup: '/images/illustrations/features/laptop-mockup-ujian.png'
        },
        peringkat: {
            title: 'Sistem Peringkat Kompetitif',
            description: 'Bersaing dengan peserta lain dan lihat posisi peringkat untuk memotivasi belajar lebih baik',
            benefits: [
                'Leaderboard nasional',
                'Ranking berdasarkan kategori',
                'Kompetisi mingguan & bulanan'
            ],
            mockup: '/images/illustrations/features/laptop-mockup-ujian.png'
        }
    };

    const currentFeature = featureContent[activeFeature as keyof typeof featureContent];

    return (
      <Section
        variant="muted"
        padding="xl"
        container="wide"
        className="relative overflow-hidden"
      >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(50,116,152,0.3),transparent_50%)]"></div>
          </div>

          <div className="relative z-10 space-y-16">
              {/* Header */}
              <div className="text-center space-y-4 animate-fade-in-up">
                  <Heading
                    as="h2"
                    size="display-md"
                    align="center"
                    className="text-foreground"
                  >
                      Fitur Unggulan Prestige Academy
                  </Heading>
                  <Text
                    size="lg"
                    align="center"
                    className="text-muted-foreground max-w-3xl mx-auto"
                  >
                      Persiapkan diri dengan pengalaman terbaik berbasis riset untuk menghadapi ujian di depan mu
                  </Text>
              </div>

              {/* Feature Navigation */}
              <div className="flex justify-center">
                  <Card
                    variant="default"
                    size="sm"
                    className="p-2 shadow-medium animate-scale-in"
                  >
                      <div className="flex rounded-lg overflow-hidden">
                          {features.map((feature, index) => (
                            <button
                              key={feature.id}
                              onClick={() => setActiveFeature(feature.id)}
                              className={`relative flex items-center gap-3 px-6 py-4 transition-all duration-300 ${
                                activeFeature === feature.id
                                  ? 'bg-primary text-white shadow-colored'
                                  : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                              }`}
                            >
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                                  activeFeature === feature.id
                                    ? 'bg-white/20'
                                    : 'bg-muted'
                                }`}>
                                    <Image
                                      src={feature.icon}
                                      alt={feature.title}
                                      width={16}
                                      height={16}
                                      className={`transition-all duration-300 ${
                                        activeFeature === feature.id ? 'brightness-0 invert' : 'opacity-70'
                                      }`}
                                    />
                                </div>
                                <span className="font-medium whitespace-nowrap">{feature.title}</span>
                            </button>
                          ))}
                      </div>
                  </Card>
              </div>

              {/* Feature Content */}
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                  {/* Image */}
                  <div className="relative animate-fade-in">
                      <div className="absolute inset-0 z-0 flex items-center justify-center">
                          <Image
                            src="/images/illustrations/features/features-asset.svg"
                            alt="Background Pattern"
                            width={600}
                            height={400}
                            className="object-contain opacity-30"
                          />
                      </div>

                      <div className="relative z-10 animate-float">
                          <Image
                            src={currentFeature.mockup}
                            alt="Feature Mockup"
                            width={600}
                            height={400}
                            className="w-full h-auto transition-all duration-500"
                            priority
                          />
                      </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-8 animate-slide-in-right">
                      <div className="space-y-4">
                          <Heading
                            as="h3"
                            size="lg"
                            className="leading-tight"
                          >
                              {currentFeature.title}
                          </Heading>

                          <Text
                            size="lg"
                            className="leading-relaxed text-muted-foreground"
                          >
                              {currentFeature.description}
                          </Text>
                      </div>

                      {/* Benefits */}
                      <div className="space-y-4">
                          {currentFeature.benefits.map((benefit, index) => (
                            <div
                              key={index}
                              className="flex items-center gap-4 animate-slide-in-left"
                              style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 shadow-colored-secondary">
                                    <svg
                                      className="w-4 h-4 text-white"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                    >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth={3}
                                          d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                </div>
                                <Text weight="medium" className="text-foreground">
                                    {benefit}
                                </Text>
                            </div>
                          ))}
                      </div>

                      {/* CTA */}
                      <div className="pt-4">
                          <Button
                            size="xl"
                            variant="gradient"
                            animation="hover"
                            className="font-semibold shadow-large"
                          >
                              Pelajari Lebih Lanjut!
                          </Button>
                      </div>
                  </div>
              </div>
          </div>
      </Section>
    );
};

export default FeaturesSection;