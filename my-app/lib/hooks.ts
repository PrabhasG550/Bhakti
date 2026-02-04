import { useEffect, useState } from 'react';
import { getAllEvents, getEventById } from './db-events';
import { getAllTemples, getTempleById } from './db-temples';
import { HinduEvent } from '@/types/event';
import { Temple } from '@/types/temple';

// Hook to fetch all events from Supabase
export function useEvents() {
  const [events, setEvents] = useState<HinduEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchEvents() {
      setLoading(true);
      setError(null);
      try {
        const fetchedEvents = await getAllEvents();
        setEvents(fetchedEvents);
      } catch (err) {
        console.error('Error loading events:', err);
        setError(err instanceof Error ? err : new Error('Failed to load events'));
        setEvents([]);
      } finally {
        setLoading(false);
      }
    }
    fetchEvents();
  }, []);

  return { events, loading, error };
}

// Hook to fetch all temples from Supabase
export function useTemples() {
  const [templesData, setTemplesData] = useState<Temple[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchTemples() {
      setLoading(true);
      setError(null);
      try {
        const fetchedTemples = await getAllTemples();
        setTemplesData(fetchedTemples);
      } catch (err) {
        console.error('Error loading temples:', err);
        setError(err instanceof Error ? err : new Error('Failed to load temples'));
        setTemplesData([]);
      } finally {
        setLoading(false);
      }
    }
    fetchTemples();
  }, []);

  return { temples: templesData, loading, error };
}

