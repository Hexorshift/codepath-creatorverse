import { createClient } from '@supabase/supabase-js';

const URL = 'https://wjtxtenfcrnkheywjtdx.supabase.co';
const API_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndqdHh0ZW5mY3Jua2hleXdqdGR4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjM2NTc5NzQsImV4cCI6MjAzOTIzMzk3NH0.u7Yvty1X-6OpEzOja1RD1R2Ps59h_QlWPfYSc0Ucxq8';

export const supabase = createClient(URL, API_KEY);
