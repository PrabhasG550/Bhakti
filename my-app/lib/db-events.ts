import { supabase, stringToUuid, uuidToString } from './supabase';
import { HinduEvent } from '@/types/event';

// Fetch all events from Supabase
export async function getAllEvents(): Promise<HinduEvent[]> {
  const { data, error } = await supabase
    .from('events')
    .select(`
      *,
      event_temples (
        temple_id
      )
    `)
    .order('date', { ascending: true });

  if (error) {
    console.error('Error fetching events from Supabase:', error);
    throw error;
  }

  if (!data || data.length === 0) {
    console.warn('No events found in database');
    return [];
  }

  // Transform database records to match HinduEvent type
  return data.map((event: any) => ({
    id: uuidToString(event.id), // Convert UUID back to string ID
    name: event.name,
    description: event.description || '',
    date: new Date(event.date),
    type: event.type as 'festival' | 'holiday' | 'fast' | 'ceremony',
    location: event.location || undefined,
    imageUrl: event.image_url || undefined,
    temples: event.event_temples?.map((et: any) => uuidToString(et.temple_id)) || [],
  }));
}

// Fetch a single event by ID
export async function getEventById(id: string): Promise<HinduEvent | null> {
  const uuid = stringToUuid(id);
  const { data, error } = await supabase
    .from('events')
    .select(`
      *,
      event_temples (
        temple_id
      )
    `)
    .eq('id', uuid)
    .single();

  if (error) {
    console.error('Error fetching event:', error);
    throw error;
  }

  if (!data) {
    return null;
  }

  return {
    id: uuidToString(data.id),
    name: data.name,
    description: data.description || '',
    date: new Date(data.date),
    type: data.type as 'festival' | 'holiday' | 'fast' | 'ceremony',
    location: data.location || undefined,
    imageUrl: data.image_url || undefined,
    temples: data.event_temples?.map((et: any) => uuidToString(et.temple_id)) || [],
  };
}

