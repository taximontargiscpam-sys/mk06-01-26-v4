import { createClient } from "@supabase/supabase-js"

// Regular Supabase client with anon key (respects RLS)
export const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!)

// Admin Supabase client with service role key (bypasses RLS)
// Use this ONLY on the server side for admin operations
export const supabaseAdmin = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
  },
})
