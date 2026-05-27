import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'El Bro - PA\' LAS QUE SEA',
  description: 'Crédito diferente para Colombia. Compra ahora, paga en cuotas.',
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#5a1a3d" />
      </head>
      <body>{children}</body>
    </html>
  )
}
