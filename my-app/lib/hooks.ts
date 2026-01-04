import { useEffect, useState } from 'react';
import { getAllEvents, getEventById } from './db-events';
import { getAllTemples, getTempleById } from './db-temples';
import { HinduEvent } from '@/types/event';
import { Temple } from '@/types/temple';
import { hinduEvents } from '@/data/hinduEvents';
import { temples } from '@/data/temples';

// Hook to fetch all events from Supabase with fallback to dummy data
export function useEvents() {
  const [events, setEvents] = useState<HinduEvent[]>(hinduEvents); // Initialize with dummy data
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchEvents() {
      setLoading(true);
      try {
        const fetchedEvents = await getAllEvents();
        setEvents(fetchedEvents);
      } catch (error) {
        console.error('Error loading events:', error);
        // Keep dummy data on error
      } finally {
        setLoading(false);
      }
    }
    fetchEvents();
  }, []);

  return { events, loading };
}

// Hook to fetch all temples from Supabase with fallback to dummy data
export function useTemples() {
  const [templesData, setTemplesData] = useState<Temple[]>(temples); // Initialize with dummy data
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchTemples() {
      setLoading(true);
      try {
        const fetchedTemples = await getAllTemples();
        setTemplesData(fetchedTemples);
      } catch (error) {
        console.error('Error loading temples:', error);
        // Keep dummy data on error
      } finally {
        setLoading(false);
      }
    }
    fetchTemples();
  }, []);

  return { temples: templesData, loading };
}

