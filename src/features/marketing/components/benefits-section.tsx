'use client';

import Image from 'next/image';
import { Heading, Text } from '@/shared/core/typography';
import { Card } from '@/shared/components/ui/card';
import { useAnimation } from '@/shared/hooks/use-animation';

interface Benefit {
  step: number;
  title: string;
  subtitle: string;
  description: string;
}

const BenefitsSection = () => {
  const { ref, isVisible } = useAnimation({ threshold: 0.1 });

  const benefits: Benefit[] = [
    {
      step: 1,
      title: "Latihan Seru Mirip",
      subtitle: "UJIAN ASLI!",
      description: "Rasakan sensasi ujian CPNS, SNBT, dan P3K tanpa perlu tegang! Soal-soal kami dibuat persis seperti ujian sungguhan, jadi kamu bisa berlatih dengan nyaman dan tidak kaget saat hari-H."
    },
    {
      step: 2,
      title: "Tahu Peluang Kelulusanmu",
      subtitle: "SEJAK AWAL!",
      description: "Gak perlu nebak-nebak! Berdasarkan hasil latihanmu, kami bisa kasih gambaran peluang kelulusanmu dengan jelas. Jadi kamu tahu harus berapa semangat lagi untuk mencapai impianmu!"
    },
    {
      step: 3,
      title: "Penjelasan yang Bikin",
      subtitle: "\"OHHHH\"!",
      description: "Dapatkan jawaban yang bikin kamu langsung paham! Bukan cuma tau jawaban benarnya apa, tapi juga \"kenapa\" dengan bahasa yang enak dibaca. Dijamin ada momen \"Ohhh, jadi begitu!\" setiap kali belajar."
    },
    {
      step: 4,
      title: "Lemari Soal yang Selalu",
      subtitle: "DIISI ULANG",
      description: "Jangan khawatir kehabisan soal! Lemari soal kami selalu penuh dengan berbagai tipe pertanyaan yang selalu diperbarui. Dari yang gampang sampai yang bikin mikir, semua ada untuk membuat belajarmu lebih seru."
    },
    {
      step: 5,
      title: "Lihat Kemajuanmu",
      subtitle: "NAIK TERUS!",
      description: "Saksikan perjalanan belajarmu melalui grafik yang colorful dan mudah dipahami melalui statistik ranking. Rasakan kegembiraan melihat garis progressmu naik terus!"
    }
  ];

  return (
    <section className="relative overflow-hidden py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(50,116,152,0.3),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(240,162,67,0.3),transparent_50%)]"></div>
        </div>

        {/* Decorative Assets */}
        <div className="absolute top-40 left-0 pointer-events-none opacity-30">
          <Image
            src="/images/backgrounds/benefit-asset-top.svg"
            alt=""
            width={150}
            height={150}
            className="object-contain animate-float"
          />
        </div>
        <div className="absolute bottom-0 right-0 pointer-events-none opacity-30">
          <Image
            src="/images/backgrounds/benefit-asset-bottom.svg"
            alt=""
            width={150}
            height={150}
            className="object-contain animate-float"
            style={{ animationDelay: '1s' }}
          />
        </div>

        <div className="relative z-10 space-y-16">
          {/* Header */}
          <div className="text-center space-y-4">
            <Heading
              as="h2"
              size="display-md"
              align="center"
              className="animate-fade-in-up"
            >
              Kenapa harus Tryout<br />
              di Prestige Academy?
            </Heading>
          </div>

          {/* Timeline */}
          <div className="max-w-5xl mx-auto" ref={ref}>
            <Card
              variant="glass"
              size="lg"
              className="relative border-primary/20 backdrop-blur-xl"
            >
              {/* Central Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-secondary to-primary opacity-30"></div>

              <div className="space-y-16 py-8">
                {benefits.map((benefit, index) => (
                  <div
                    key={benefit.step}
                    className={`relative transition-all duration-700 ${
                      isVisible
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-8'
                    }`}
                    style={{
                      transitionDelay: isVisible ? `${index * 200}ms` : '0ms'
                    }}
                  >
                    {/* Step Circle */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                      <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary text-white rounded-full flex items-center justify-center text-xl font-bold shadow-colored animate-pulse-soft">
                        {benefit.step}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                      {index % 2 === 0 ? (
                        <>
                          {/* Left Content */}
                          <div className="lg:text-right space-y-3 lg:pr-20">
                            <div className="space-y-2">
                              <Heading as="h3" size="sm" variant="default">
                                {benefit.title}
                              </Heading>
                              <Heading as="h4" size="sm" variant="secondary" className="font-extrabold">
                                {benefit.subtitle}
                              </Heading>
                            </div>
                            <Text size="sm" variant="muted" className="leading-relaxed">
                              {benefit.description}
                            </Text>
                          </div>
                          <div></div>
                        </>
                      ) : (
                        <>
                          <div></div>
                          {/* Right Content */}
                          <div className="lg:text-left space-y-3 lg:pl-20">
                            <div className="space-y-2">
                              <Heading as="h3" size="sm" variant="default">
                                {benefit.title}
                              </Heading>
                              <Heading as="h4" size="sm" variant="secondary" className="font-extrabold">
                                {benefit.subtitle}
                              </Heading>
                            </div>
                            <Text size="sm" variant="muted" className="leading-relaxed">
                              {benefit.description}
                            </Text>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;