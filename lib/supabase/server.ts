import { createClient } from "@supabase/supabase-js"

// Helper to create a safe client (mock or real)
const createSafeClient = (url?: string, key?: string) => {
  if (!url || !key) {
    console.warn("Supabase credentials missing. Using mock client.")
    return {
      from: () => ({
        select: () => ({ eq: () => ({ single: () => ({ data: null, error: null }) }) }),
        insert: () => ({ select: () => ({ single: () => ({ data: null, error: null }) }) }),
        update: () => ({ eq: () => ({ select: () => ({ single: () => ({ data: null, error: null }) }) }) }),
        delete: () => ({ eq: () => ({ data: null, error: null }) }),
      }),
      auth: {
        getUser: () => ({ data: { user: null }, error: null }),
        getSession: () => ({ data: { session: null }, error: null }),
        signOut: () => ({ error: null }),
      }
    } as any
  }
  return createClient(url, key)
}

// Regular Supabase client
export const supabase = createSafeClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)

// Admin Supabase client
export const supabaseAdmin = createSafeClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY)

