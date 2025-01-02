import { Provider as StoreProvider } from 'react-redux'
import { store } from '@/store'
import Theme from '@/provider/theme'
import { ClerkProvider } from '@clerk/clerk-react'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}

export default function Provider({ children }: { children?: React.ReactNode }) {
  return (
    <ClerkProvider 
      publishableKey={PUBLISHABLE_KEY}
      appearance={{
        baseTheme: undefined,
        variables: {
          colorPrimary: '#FFAC03'
        }
      }}
      afterSignInUrl="/memes/123456"
      afterSignUpUrl="/memes/123456"
    >
      <StoreProvider store={store}>
        <Theme>{children}</Theme>
      </StoreProvider>
    </ClerkProvider>
  )
}
