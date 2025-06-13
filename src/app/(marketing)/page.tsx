// src/app/(marketing)/page.tsx - Versi sederhana untuk testing
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Marketing - Prestige Academy',
  description: 'Marketing page for Prestige Academy',
};

export default function MarketingPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-primary mb-4">
          Marketing Page
        </h1>
        <p className="text-lg text-muted-foreground">
          Halaman marketing berhasil dimuat!
        </p>
        <div className="mt-8 p-4 bg-green-100 text-green-800 rounded-lg">
          Jika Anda melihat halaman ini, berarti routing sudah berfungsi dengan baik.
        </div>
      </div>
    </div>
  );
}