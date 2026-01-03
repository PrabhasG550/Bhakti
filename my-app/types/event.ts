export interface HinduEvent {
  id: string;
  name: string;
  description: string;
  date: Date;
  type: 'festival' | 'holiday' | 'fast' | 'ceremony';
  significance: string;
  traditions?: string[];
  location?: string;
  color?: string; // For calendar display
  imageUrl?: string; // Image URL for the event
  culturalContext?: string; // Educational content about Indian culture
}

