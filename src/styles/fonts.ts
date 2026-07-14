import { Inter, Sora, JetBrains_Mono } from 'next/font/google';

// Body / UI font
export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

// Display / heading font
export const sora = Sora({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-sora',
});

// Mono accent font (eyebrows, labels)
export const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['500', '600'],
  display: 'swap',
  variable: '--font-jetbrains',
});

// Combined className to apply on <html> or <body>
export const fontClass = `${inter.variable} ${sora.variable} ${jetbrainsMono.variable}`;
