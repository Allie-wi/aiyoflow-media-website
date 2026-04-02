import type { Metadata } from 'next';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Aiyoflow Media - Creative Strategy Studio',
  description: 'Founder-led creative strategy studio blending editorial thinking, influencer strategy, and cultural insight.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}