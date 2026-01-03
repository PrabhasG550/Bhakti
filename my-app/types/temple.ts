export interface Temple {
  id: string;
  name: string;
  location: string;
  city: string;
  state: string;
  latitude: number;
  longitude: number;
  description?: string;
  featuredEvents?: string[]; // Event IDs that are featured at this temple
}

