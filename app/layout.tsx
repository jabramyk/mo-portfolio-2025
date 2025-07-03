import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Meekson',
  description: '2025 portfolio for Mohamed Datt, A.K.A MeeksonJr'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
