import type { Metadata } from 'next'
import { DM_Sans, DM_Mono } from 'next/font/google'
import './globals.css'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  weight: ['300', '400', '500', '600', '700'],
})

const dmMono = DM_Mono({
  subsets: ['latin'],
  variable: '--font-dm-mono',
  weight: ['400', '500'],
})

export const metadata: Metadata = {
  title: 'Chaithanya M — Java Backend Developer',
  description: 'Java Backend Developer with 2+ years experience in Spring Boot, Microservices, Kafka, AWS. Based in Chennai, India.',
  keywords: ['Java', 'Spring Boot', 'Backend Developer', 'Microservices', 'Chennai'],
  authors: [{ name: 'Chaithanya M' }],
  openGraph: {
    title: 'Chaithanya M — Java Backend Developer',
    description: 'Java Backend Developer with 2+ years experience in Spring Boot, Microservices, Kafka, AWS.',
    type: 'website',
    url: 'https://chaithumoorpa.github.io',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${dmSans.variable} ${dmMono.variable} font-sans bg-bg text-white antialiased`}>
        {children}
      </body>
    </html>
  )
}
