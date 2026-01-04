import { createClient } from '@supabase/supabase-js';

// Supabase configuration
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://reuhqoingnkcnbhkvxoq.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJldWhxb2luZ25rY25iaGt2eG9xIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njc0NzU1NjQsImV4cCI6MjA4MzA1MTU2NH0.5_VXvn-0pRKex5iDTumNopEEVwiK8gevBH8YbKEjE4s';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Helper function to convert string ID to UUID format (matches database function)
export function stringToUuid(strId: string): string {
  const padded = strId.padStart(12, '0');
  return `00000000-0000-0000-0000-${padded}`;
}

// Helper function to convert UUID back to string ID
export function uuidToString(uuid: string): string {
  const parts = uuid.split('-');
  const lastPart = parts[parts.length - 1];
  // Remove leading zeros
  return parseInt(lastPart, 16).toString();
}

