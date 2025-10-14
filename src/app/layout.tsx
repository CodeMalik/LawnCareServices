// src/app/layout.tsx
import type { Metadata } from 'next'
import Script from "next/script";
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import LoadingProgress from '@/components/LoadingProgress'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Lawn Care Services - Professional Landscaping Services',
  description: 'Transform your yard into a tropical paradise with our professional landscaping services.',
  verification: {
    google: "LyprpqTSzgZqjY3rSz1aqH9LnI8ZQovLtV980g8o7h8", // 👈 Google site-verification
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-XQ7BTJ33CT"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XQ7BTJ33CT');
        `}
      </Script>
      <body className={`${inter.className} bg-white text-gray-800`}>
        <LoadingProgress />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}