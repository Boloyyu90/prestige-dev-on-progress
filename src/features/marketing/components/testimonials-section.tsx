'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { useIntersectionObserver } from '@/shared/hooks/use-intersection-observer';
import { useAnimation } from '@/shared/hooks/use-animation';
import { Card } from '@/shared/components/ui/card';
import { Button } from '@/shared/components/ui/button';
import { Badge } from '@/shared/components/ui/badge';
import { Heading, Text } from '@/shared/core/typography';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/shared/lib/utils/cn';
import { Quote, ChevronLeft, ChevronRight, Star, Play, Pause } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  position: string;
  institution: string;
  avatar: string;
  content: string;
  rating: number;
  year: string;
  badge?: string;
}

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const { ref: sectionRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.2,
    rootMargin: '50px',
  });

  const { ref: contentRef, isVisible } = useAnimation({
    threshold: 0.1
  });

  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Nurul Hidayah',
      position: 'PNS',
      institution: 'Pemerintah Nganjuk',
      avatar: '/images/avatars/nurul.png',
      content: 'Prestige Academy benar-benar mengubah cara saya belajar! Platform ini sangat mudah digunakan dan soal-soalnya mirip dengan ujian asli. Berkat Prestige Academy, saya berhasil lolos CPNS dengan skor yang memuaskan.',
      rating: 5,
      year: '2024',
      badge: 'Lulusan CPNS'
    },
    {
      id: '2',
      name: 'Jessica Halim',
      position: 'Staff Ahli',
      institution: 'Pemerintah Guangzhou',
      avatar: '/images/avatars/jessica.png',
      content: 'Sebagai fresh graduate dengan budget terbatas, Prestige Academy adalah solusi terbaik. Harganya terjangkau tapi kualitas materinya sangat tinggi. Pembahasan soalnya detail dan mudah dipahami.',
      rating: 5,
      year: '2024',
      badge: 'Fresh Graduate'
    },
    {
      id: '3',
      name: 'Darrel Simanjuntak',
      position: 'Analis Kebijakan',
      institution: 'Pemerintah Bukittinggi',
      avatar: '/images/avatars/darrel.png',
      content: 'Fitur analisis hasil di Prestige Academy luar biasa! Saya bisa melihat progress belajar saya dan tahu di bagian mana yang perlu diperbaiki. Mentornya juga sangat membantu dalam memberikan tips strategi ujian.',
      rating: 5,
      year: '2024',
      badge: 'Top Scorer'
    },
    {
      id: '4',
      name: 'Sari Dewi',
      position: 'Guru',
      institution: 'Dinas Pendidikan Surabaya',
      avatar: '/images/avatars/sari.png',
      content: 'Setelah 3 kali gagal CPNS, akhirnya dengan Prestige Academy saya berhasil! Simulasi ujiannya sangat realistis dan bank soalnya selalu update. Terima kasih Prestige Academy!',
      rating: 5,
      year: '2024',
      badge: 'Pejuang 4x'
    },
    {
      id: '5',
      name: 'Ahmad Fauzi',
      position: 'Auditor',
      institution: 'BPK RI',
      avatar: '/images/avatars/ahmad.png',
      content: 'Pelayanan customer service Prestige Academy sangat responsif. Ketika ada kendala teknis, langsung ditangani dengan baik. Platform yang profesional dengan harga yang sangat terjangkau.',
      rating: 5,
      year: '2024',
      badge: 'CS Terbaik'
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    if (!isPlaying || !isIntersecting) return;

    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPlaying, isIntersecting, testimonials.length]);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  const goToPrevious = useCallback(() => {
    setCurrentIndex(prev =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  }, [testimonials.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex(prev => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const togglePlayPause = useCallback(() => {
    setIsPlaying(prev => !prev);
  }, []);

  // Get visible testimonials for carousel
  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push({ ...testimonials[index], index });
    }
    return visible;
  };

  const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex items-center gap-1 mb-3">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={cn(
            'w-4 h-4',
            i < rating ? 'text-yellow-400 fill-current' : 'text-muted'
          )}
        />
      ))}
    </div>
  );

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-b from-muted/20 to-background" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8" ref={contentRef}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <Heading as="h2" size="display-md" align="center" className="mb-6">
              Apa kata mereka mengenai{' '}
              <span className="text-gradient-primary">Prestige Academy</span>
            </Heading>
            <Text size="lg" variant="muted" align="center" className="max-w-3xl mx-auto leading-relaxed">
              Ribuan peserta sudah merasakan manfaat belajar di Prestige Academy dan berhasil mencapai impian mereka
            </Text>

            {/* Statistics */}
            <div className="flex flex-wrap justify-center items-center gap-8 mt-8">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1 tabular-nums">
                  {isIntersecting ? '98%' : '0%'}
                </div>
                <div className="text-sm text-muted-foreground">Tingkat Kepuasan</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-secondary mb-1 tabular-nums">
                  {isIntersecting ? '5,000+' : '0'}
                </div>
                <div className="text-sm text-muted-foreground">Alumni Berhasil</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1 tabular-nums">
                  {isIntersecting ? '4.9' : '0'}
                </div>
                <div className="text-sm text-muted-foreground">Rating Rata-rata</div>
              </div>
            </div>
          </div>

          {/* Testimonials Carousel */}
          <div className="max-w-7xl mx-auto">
            <div
              className="relative"
              onMouseEnter={() => setIsPlaying(false)}
              onMouseLeave={() => setIsPlaying(true)}
            >
              {/* Navigation Controls */}
              <div className="flex justify-between items-center mb-8">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={goToPrevious}
                  className="rounded-full shadow-medium hover:shadow-large"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>

                {/* Play/Pause Control */}
                <Button
                  variant="outline"
                  onClick={togglePlayPause}
                  className="flex items-center gap-2 shadow-medium hover:shadow-large"
                  aria-label={isPlaying ? 'Pause autoplay' : 'Resume autoplay'}
                >
                  {isPlaying ? (
                    <Pause className="w-4 h-4" />
                  ) : (
                    <Play className="w-4 h-4" />
                  )}
                  <span className="text-sm">
                    {isPlaying ? 'Pause' : 'Play'}
                  </span>
                </Button>

                <Button
                  variant="outline"
                  size="icon"
                  onClick={goToNext}
                  className="rounded-full shadow-medium hover:shadow-large"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>

              {/* Testimonials Grid */}
              <div className="grid md:grid-cols-3 gap-6">
                {getVisibleTestimonials().map((testimonial, i) => (
                  <motion.div
                    key={`${testimonial.id}-${currentIndex}`}
                    className={cn(
                      'relative transition-all duration-500 transform',
                      i === 1 ? 'md:scale-105 md:z-10' : 'md:scale-95 md:opacity-75',
                      hoveredCard === testimonial.id && 'scale-105 z-20'
                    )}
                    onMouseEnter={() => setHoveredCard(testimonial.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    {/* Main Card */}
                    <Card className="overflow-hidden h-full flex flex-col shadow-medium hover:shadow-large transition-all duration-300">
                      {/* Card Header */}
                      <div className="relative p-6 pb-0">
                        {/* Badge */}
                        {testimonial.badge && (
                          <div className="absolute top-4 right-4">
                            <Badge variant="default" className="text-xs font-medium">
                              {testimonial.badge}
                            </Badge>
                          </div>
                        )}

                        {/* Avatar */}
                        <div className="w-20 h-20 mx-auto mb-4 relative">
                          <div className="w-full h-full rounded-full overflow-hidden bg-muted">
                            <Image
                              src={testimonial.avatar}
                              alt={testimonial.name}
                              width={80}
                              height={80}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          {/* Online indicator */}
                          <div className="absolute bottom-1 right-1 w-4 h-4 bg-success rounded-full border-2 border-background" />
                        </div>

                        {/* Name & Position */}
                        <div className="text-center mb-4 space-y-1">
                          <Heading as="h3" size="xs" className="font-bold text-foreground">
                            {testimonial.name}
                          </Heading>
                          <Text size="sm" className="text-primary font-medium">
                            {testimonial.position}
                          </Text>
                          <Text size="xs" variant="muted">
                            {testimonial.institution}
                          </Text>
                        </div>

                        {/* Rating */}
                        <div className="flex justify-center">
                          <StarRating rating={testimonial.rating} />
                        </div>
                      </div>

                      {/* Testimonial Content */}
                      <div className="flex-1 p-6 pt-2">
                        <div className="relative">
                          {/* Quote Icon */}
                          <Quote className="w-8 h-8 text-primary/20 mb-3" />

                          {/* Content */}
                          <blockquote className="text-muted-foreground leading-relaxed text-sm italic">
                            "{testimonial.content}"
                          </blockquote>

                          {/* Year */}
                          <div className="mt-4 text-right">
                            <span className="text-xs text-muted-foreground font-medium">
                              Alumni {testimonial.year}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Hover Effect Overlay */}
                      <div className={cn(
                        'absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 transition-opacity duration-300 pointer-events-none rounded-2xl',
                        hoveredCard === testimonial.id && 'opacity-100'
                      )} />
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Progress Indicators */}
              <div className="flex justify-center items-center gap-3 mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={cn(
                      'transition-all duration-300 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',
                      index === currentIndex
                        ? 'w-8 h-3 bg-primary'
                        : 'w-3 h-3 bg-muted hover:bg-muted-foreground/40'
                    )}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              {/* Auto-play Progress Bar */}
              <div className="mt-4 max-w-md mx-auto">
                <div className="h-1 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-100 ease-linear"
                    style={{
                      width: isPlaying ? '100%' : '0%',
                      transition: isPlaying ? 'width 5s linear' : 'width 0.1s ease',
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <Card className="p-8 shadow-medium border max-w-2xl mx-auto">
              <div className="space-y-6 text-center">
                <Heading as="h3" size="sm" className="text-foreground">
                  Siap Bergabung dengan Alumni Sukses Lainnya?
                </Heading>
                <Text variant="muted" className="text-center">
                  Dapatkan akses ke platform terbaik untuk persiapan ujian CPNS dan rasakan sendiri pengalaman belajar yang menyenangkan
                </Text>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="default" size="lg" animation="hover">
                    Mulai Sekarang
                  </Button>
                  <Button variant="outline" size="lg" animation="hover">
                    Lihat Testimoni Lainnya
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;