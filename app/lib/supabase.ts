import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://cxqsdhqnxltcrljzqdwb.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN4cXNkaHFueGx0Y3JsanpxZHdiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjcyNzYwNDEsImV4cCI6MjA0Mjg1MjA0MX0.8WxrZJ7dzJFO0D1yXwOp3kscnSjT-0kACFtotl6LB9k'

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})