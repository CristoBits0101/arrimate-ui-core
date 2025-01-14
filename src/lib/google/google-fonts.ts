// Font configuration with Google Fonts via Next.js
import { Dancing_Script } from 'next/font/google'
import { Figtree } from 'next/font/google'
import { Shadows_Into_Light } from 'next/font/google'

// Configure Dancing_Script font
export const ds = Dancing_Script({
  display: 'swap',
  subsets: ['latin'],
  weight: ['400', '500', '700']
})

// Configure Figtree font
export const figtree = Figtree({
  display: 'swap',
  subsets: ['latin'],
  weight: ['400', '500', '700']
})

// Configure Figtree font
export const shadowsIntoLight = Shadows_Into_Light({
  display: 'swap',
  subsets: ['latin'],
  weight: ['400']
})
