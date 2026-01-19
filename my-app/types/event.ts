export interface HinduEvent {
  id: string;
  name: string;
  description: string;
  date: Date;
  type: 'festival' | 'holiday' | 'fast' | 'ceremony';
  location?: string;
  imageUrl?: string; // Image URL for the event
  temples?: string[]; // Temple IDs that celebrate this event
}

