import { supabase, stringToUuid, uuidToString } from './supabase';
import { Temple } from '@/types/temple';

// Fetch all temples from Supabase
export async function getAllTemples(): Promise<Temple[]> {
  const { data: templesData, error } = await supabase
    .from('temples')
    .select(`
      *,
      event_temples (
        event_id
      )
    `)
    .order('name', { ascending: true });

  if (error) {
    console.error('Error fetching temples from Supabase:', error);
    throw error;
  }

  if (!templesData || templesData.length === 0) {
    console.warn('No temples found in database');
    return [];
  }

  // Transform database records to match Temple type
  return templesData.map((temple: any) => {
    const openingHours = temple.opening_hours || {};
    const featuredEvents = temple.event_temples?.map((et: any) => uuidToString(et.event_id)) || [];

    return {
      id: uuidToString(temple.id), // Convert UUID back to string ID
      name: temple.name,
      location: temple.location || '',
      city: temple.city || '',
      state: temple.state || '',
      latitude: parseFloat(temple.latitude),
      longitude: parseFloat(temple.longitude),
      description: temple.description || undefined,
      featuredEvents: featuredEvents.length > 0 ? featuredEvents : undefined,
      openingTime: openingHours.opening_time || undefined,
      closingTime: openingHours.closing_time || undefined,
      address: undefined, // Address not in database schema
      imageUrl: undefined, // Image URL not in database schema
    };
  });
}

// Fetch a single temple by ID
export async function getTempleById(id: string): Promise<Temple | null> {
  const uuid = stringToUuid(id);
  const { data: templeData, error } = await supabase
    .from('temples')
    .select(`
      *,
      event_temples (
        event_id
      )
    `)
    .eq('id', uuid)
    .single();

  if (error) {
    console.error('Error fetching temple:', error);
    throw error;
  }

  if (!templeData) {
    return null;
  }

  const openingHours = templeData.opening_hours || {};
  const featuredEvents = templeData.event_temples?.map((et: any) => uuidToString(et.event_id)) || [];

  return {
    id: uuidToString(templeData.id),
    name: templeData.name,
    location: templeData.location || '',
    city: templeData.city || '',
    state: templeData.state || '',
    latitude: parseFloat(templeData.latitude),
    longitude: parseFloat(templeData.longitude),
    description: templeData.description || undefined,
    featuredEvents: featuredEvents.length > 0 ? featuredEvents : undefined,
    openingTime: openingHours.opening_time || undefined,
    closingTime: openingHours.closing_time || undefined,
    address: undefined,
    imageUrl: undefined,
  };
}

