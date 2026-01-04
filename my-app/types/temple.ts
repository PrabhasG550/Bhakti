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
  openingTime?: string; // e.g., "4:30 AM"
  closingTime?: string; // e.g., "9:00 PM"
  imageUrl?: string; // URL for temple image
  address?: string; // Full address string
}

