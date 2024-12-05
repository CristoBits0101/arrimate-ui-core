// bcryptjs
import bcrypt from 'bcryptjs'

// modules/auth
import { getUserByEmail } from '@/modules/auth/data/user-data'
import { SignInSchema } from '@/modules/auth/schemas/index'

// next-auth
import type { NextAuthOptions } from 'next-auth'

// Providers
import Credentials from 'next-auth/providers/credentials'
import Apple from 'next-auth/providers/apple'
import Google from 'next-auth/providers/google'

// Backend code
export default {
  providers: [
    Apple({
      clientId: process.env.APPLE_CLIENT_ID,
      clientSecret: process.env.APPLE_CLIENT_SECRET
    }),
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
    Credentials({
      // Verify login
      async authorize(credentials) {
        // 1. Validate inputs
        const validatedFields = SignInSchema.safeParse(credentials)
        // 2. Validate success
        if (validatedFields.success) {
          // 3. Get data
          const { email, password } = validatedFields.data
          // 4. Get user
          const user = await getUserByEmail(email)
          // 5. Error getting
          if (!user || !user.password) return null
          // 6. Compare passwords
          const passwordsMatch = await bcrypt.compare(password, user.password)
          // 7. Authentication successful
          if (passwordsMatch) return user
        }
        // 8. Authentication failed
        return null
      }
    })
  ]
} satisfies NextAuthOptions