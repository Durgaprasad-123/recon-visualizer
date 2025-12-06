// app/layout.tsx
export const metadata = {
  title: "Recon Visualizer",
  description: "Visualizing recon results",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
