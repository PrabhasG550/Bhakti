import { supabase, stringToUuid, uuidToString } from './supabase';
import { HinduEvent } from '@/types/event';
import { hinduEvents } from '@/data/hinduEvents';

// Fetch all events from Supabase with fallback to dummy data
export async function getAllEvents(): Promise<HinduEvent[]> {
  try {
    const { data, error } = await supabase
      .from('events')
      .select('*')
      .order('date', { ascending: true });

    if (error) {
      console.error('Error fetching events from Supabase:', error);
      // Fallback to dummy data
      return hinduEvents;
    }

    if (!data || data.length === 0) {
      // Fallback to dummy data if no data in database
      return hinduEvents;
    }

    // Transform database records to match HinduEvent type
    return data.map((event: any) => ({
      id: uuidToString(event.id), // Convert UUID back to string ID
      name: event.name,
      description: event.description,
      date: new Date(event.date),
      type: event.type as 'festival' | 'holiday' | 'fast' | 'ceremony',
      significance: event.significance || '',
      traditions: event.traditions || [],
      location: event.location || undefined,
      color: event.color || undefined,
      imageUrl: event.image_url || undefined,
      culturalContext: event.cultural_context || undefined,
    }));
  } catch (error) {
    console.error('Error fetching events:', error);
    // Fallback to dummy data on any error
    return hinduEvents;
  }
}

// Fetch a single event by ID
export async function getEventById(id: string): Promise<HinduEvent | null> {
  try {
    const uuid = stringToUuid(id);
    const { data, error } = await supabase
      .from('events')
      .select('*')
      .eq('id', uuid)
      .single();

    if (error || !data) {
      // Fallback to dummy data
      return hinduEvents.find(e => e.id === id) || null;
    }

    return {
      id: uuidToString(data.id),
      name: data.name,
      description: data.description,
      date: new Date(data.date),
      type: data.type as 'festival' | 'holiday' | 'fast' | 'ceremony',
      significance: data.significance || '',
      traditions: data.traditions || [],
      location: data.location || undefined,
      color: data.color || undefined,
      imageUrl: data.image_url || undefined,
      culturalContext: data.cultural_context || undefined,
    };
  } catch (error) {
    console.error('Error fetching event:', error);
    // Fallback to dummy data
    return hinduEvents.find(e => e.id === id) || null;
  }
}

