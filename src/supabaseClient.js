import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ozuufmtkxenayoqlhauh.supabase.co';
const supabaseAnonKey = 'sb_publishable_VnrtmagbZdWH_1xCsD69oA_m-Xl7eto';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);