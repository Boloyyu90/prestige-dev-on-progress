'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Button } from '@/shared/components/ui/button';
import { useTheme } from 'next-themes';
import { cn } from '@/shared/lib/utils/cn';

const navigation = [
  { name: 'Beranda', href: '/', active: true },
  { name: 'Tentang Kami', href: '/about' },
  { name: 'Keunggulan', href: '/features' },
  { name: 'Paket Belajar', href: '/packages' },
  { name: 'Promo', href: '/promo' },
  { name: 'FAQ', href: '/faq' },
];

export function MarketingHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const handleRegisterClick = () => {
    // Handle register navigation
    window.location.href = '/register';
  };

  const handleLoginClick = () => {
    // Handle login navigation
    window.location.href = '/login';
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo/logo-prestige.svg"
              alt="Logo"
              width={43}
              height={65}
              className="h-10 w-auto"
              priority
            />
            <div className="text-xl font-bold">
              <span className="text-primary">Prestige</span>
              <span className="text-secondary ml-1">Academy</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'relative text-sm font-medium transition-colors hover:text-primary',
                  item.active
                    ? 'text-primary'
                    : 'text-muted-foreground'
                )}
              >
                {item.name}
                {item.active && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="relative w-10 h-6 bg-muted rounded-full p-1 transition-colors hover:bg-muted/80 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              aria-label="Toggle theme"
            >
              <div className={cn(
                'w-4 h-4 bg-background rounded-full shadow-sm transition-transform flex items-center justify-center',
                theme === 'dark' ? 'translate-x-4' : 'translate-x-0'
              )}>
                {theme === 'dark' ? (
                  <Moon className="w-2.5 h-2.5 text-muted-foreground" />
                ) : (
                  <Sun className="w-2.5 h-2.5 text-yellow-500" />
                )}
              </div>
            </button>

            {/* Auth Buttons */}
            <div className="flex items-center space-x-3">
              {/* Login Button */}
              <Button
                variant="ghost"
                size="default"
                onClick={handleLoginClick}
                className="relative overflow-hidden group"
              >
                <div className="flex items-center gap-2">
                  <span>Masuk</span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="transition-transform group-hover:translate-x-1"
                  >
                    <path
                      d="M5 12h14m-7-7l7 7-7 7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </Button>

              {/* Register Button */}
              <Button
                variant="secondary"
                size="default"
                onClick={handleRegisterClick}
                className="font-semibold shadow-colored-secondary"
              >
                Daftar
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-sm">
            <div className="py-4 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'block py-3 px-4 text-base font-medium rounded-lg transition-colors',
                    item.active
                      ? 'text-primary bg-primary/10'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile Actions */}
            <div className="border-t border-border py-4 px-4 space-y-3">
              {/* Theme Toggle Mobile */}
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-muted-foreground">
                  Mode Gelap
                </span>
                <button
                  onClick={toggleTheme}
                  className="relative w-10 h-6 bg-muted rounded-full p-1 transition-colors"
                >
                  <div className={cn(
                    'w-4 h-4 bg-background rounded-full shadow-sm transition-transform flex items-center justify-center',
                    theme === 'dark' ? 'translate-x-4' : 'translate-x-0'
                  )}>
                    {theme === 'dark' ? (
                      <Moon className="w-2.5 h-2.5 text-muted-foreground" />
                    ) : (
                      <Sun className="w-2.5 h-2.5 text-yellow-500" />
                    )}
                  </div>
                </button>
              </div>

              {/* Mobile Auth Buttons */}
              <div className="space-y-2">
                <Button
                  variant="default"
                  size="lg"
                  className="w-full justify-center"
                  onClick={() => {
                    handleLoginClick();
                    setMobileMenuOpen(false);
                  }}
                >
                  <span>Masuk</span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="ml-2"
                  >
                    <path
                      d="M5 12h14m-7-7l7 7-7 7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  className="w-full font-semibold"
                  onClick={() => {
                    handleRegisterClick();
                    setMobileMenuOpen(false);
                  }}
                >
                  Daftar
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}