import '@/styles/globals.css'
import { standard } from '@/lib/fonts'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { SessionProvider } from 'next-auth/react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Arrímate',
  description: '',
  icons: {
    icon: '/favicon.ico'
  }
}

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  const messages = await getMessages()
  return (
    <html lang={locale} data-mode=''>
      <body
        className={`${standard.className} grid sm:place-content-center sm:grid-cols-[100%] md:grid-cols-[20rem_1fr_20rem] min-h-screen max-h-fit h-auto min-w-80 w-full bg-[#ffffff] dark:bg-[#1B1A1F] text-[#1d0f0f] dark:text-[#ecece] dtext-base`}
      >
        <SessionProvider>
          <NextIntlClientProvider messages={messages}>
            {children}
          </NextIntlClientProvider>
        </SessionProvider>
      </body>
    </html>
  )
}
