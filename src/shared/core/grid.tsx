// src/shared/core/section.tsx
import { cn } from '@/shared/lib/utils/cn';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  animate?: boolean;
  delay?: number;
  id?: string;
}

export function Section({ children, className, animate = true, delay = 0, id }: SectionProps) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  if (!animate) {
    return (
      <section id={id} className={cn('py-16 md:py-24 lg:py-32', className)}>
        <div className="container mx-auto px-4">
          {children}
        </div>
      </section>
    );
  }

  return (
    <motion.section
      ref={ref}
      id={id}
      className={cn('py-16 md:py-24 lg:py-32', className)}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay }}
    >
      <div className="container mx-auto px-4">
        {children}
      </div>
    </motion.section>
  );
}

// src/shared/core/grid.tsx
import { cn } from '@/shared/lib/utils/cn';

interface GridProps {
  children: React.ReactNode;
  cols?: 1 | 2 | 3 | 4 | 6;
  gap?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function Grid({ children, cols = 1, gap = 'md', className }: GridProps) {
  const colClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
    6: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-6',
  };

  const gapClasses = {
    sm: 'gap-4',
    md: 'gap-6',
    lg: 'gap-8',
  };

  return (
    <div className={cn('grid', colClasses[cols], gapClasses[gap], className)}>
      {children}
    </div>
  );
}