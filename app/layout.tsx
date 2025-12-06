import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Recon Visualizer',
  description: 'Your project description here',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
