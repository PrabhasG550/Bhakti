import { Temple } from '@/types/temple';

// Sample temple data with locations
export const temples: Temple[] = [
  {
    id: '1',
    name: 'Tirumala Venkateswara Temple',
    location: 'Tirumala',
    city: 'Tirupati',
    state: 'Andhra Pradesh',
    latitude: 13.6831,
    longitude: 79.3494,
    description: 'One of the richest and most visited temples in the world',
    featuredEvents: ['1', '13', '18', '19'] // Makar Sankranti, Krishna Janmashtami, Diwali, Chhath Puja
  },
  {
    id: '2',
    name: 'Kashi Vishwanath Temple',
    location: 'Varanasi',
    city: 'Varanasi',
    state: 'Uttar Pradesh',
    latitude: 25.3176,
    longitude: 83.0058,
    description: 'One of the most famous Shiva temples',
    featuredEvents: ['3', '8', '15', '20'] // Maha Shivaratri, Ganga Dussehra, Navratri, Kartik Purnima
  },
  {
    id: '3',
    name: 'Vaishno Devi Temple',
    location: 'Katra',
    city: 'Katra',
    state: 'Jammu and Kashmir',
    latitude: 33.0310,
    longitude: 74.9472,
    description: 'Famous cave temple dedicated to Goddess Vaishno Devi',
    featuredEvents: ['2', '15', '16'] // Vasant Panchami, Navratri, Dussehra
  },
  {
    id: '4',
    name: 'Golden Temple (Harmandir Sahib)',
    location: 'Amritsar',
    city: 'Amritsar',
    state: 'Punjab',
    latitude: 31.6200,
    longitude: 74.8765,
    description: 'Most prominent spiritual site of Sikhism',
    featuredEvents: ['1', '4', '12'] // Makar Sankranti, Holi, Raksha Bandhan
  },
  {
    id: '5',
    name: 'Jagannath Temple',
    location: 'Puri',
    city: 'Puri',
    state: 'Odisha',
    latitude: 19.8048,
    longitude: 85.8182,
    description: 'Famous for the annual Rath Yatra festival',
    featuredEvents: ['10', '15', '18'] // Rath Yatra, Navratri, Diwali
  },
  {
    id: '6',
    name: 'Siddhivinayak Temple',
    location: 'Prabhadevi',
    city: 'Mumbai',
    state: 'Maharashtra',
    latitude: 19.0176,
    longitude: 72.8274,
    description: 'Famous Ganesha temple in Mumbai',
    featuredEvents: ['14', '1', '18'] // Ganesh Chaturthi, Makar Sankranti, Diwali
  },
  {
    id: '7',
    name: 'Meenakshi Amman Temple',
    location: 'Madurai',
    city: 'Madurai',
    state: 'Tamil Nadu',
    latitude: 9.9196,
    longitude: 78.1194,
    description: 'Historic temple dedicated to Goddess Meenakshi',
    featuredEvents: ['3', '14', '15', '16'] // Maha Shivaratri, Ganesh Chaturthi, Navratri, Dussehra
  },
  {
    id: '8',
    name: 'ISKCON Temple',
    location: 'Vrindavan',
    city: 'Vrindavan',
    state: 'Uttar Pradesh',
    latitude: 27.5819,
    longitude: 77.6978,
    description: 'International Society for Krishna Consciousness',
    featuredEvents: ['13', '11', '18'] // Krishna Janmashtami, Guru Purnima, Diwali
  },
  {
    id: '9',
    name: 'Dwarkadhish Temple',
    location: 'Dwarka',
    city: 'Dwarka',
    state: 'Gujarat',
    latitude: 22.2403,
    longitude: 68.9686,
    description: 'Ancient temple dedicated to Lord Krishna',
    featuredEvents: ['13', '12', '18'] // Krishna Janmashtami, Raksha Bandhan, Diwali
  },
  {
    id: '10',
    name: 'Badrinath Temple',
    location: 'Badrinath',
    city: 'Badrinath',
    state: 'Uttarakhand',
    latitude: 30.7449,
    longitude: 79.4932,
    description: 'One of the Char Dham pilgrimage sites',
    featuredEvents: ['3', '11', '20'] // Maha Shivaratri, Guru Purnima, Kartik Purnima
  },
  {
    id: '11',
    name: 'Ramanathaswamy Temple',
    location: 'Rameswaram',
    city: 'Rameswaram',
    state: 'Tamil Nadu',
    latitude: 9.2881,
    longitude: 79.3174,
    description: 'One of the Char Dham pilgrimage sites',
    featuredEvents: ['3', '15', '20'] // Maha Shivaratri, Navratri, Kartik Purnima
  },
  {
    id: '12',
    name: 'Kamakhya Temple',
    location: 'Guwahati',
    city: 'Guwahati',
    state: 'Assam',
    latitude: 26.1664,
    longitude: 91.7053,
    description: 'Famous Shakti Peetha temple',
    featuredEvents: ['2', '15', '16'] // Vasant Panchami, Navratri, Dussehra
  }
];

// Calculate distance between two coordinates using Haversine formula
export function calculateDistance(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number {
  const R = 6371; // Radius of the Earth in km
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) *
      Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

// Get user's location (simplified - in production, use geolocation API)
export async function getUserLocation(): Promise<{ latitude: number; longitude: number } | null> {
  return new Promise((resolve) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          resolve({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        () => resolve(null)
      );
    } else {
      resolve(null);
    }
  });
}

// Search temples by location name
export function searchTemplesByLocation(searchQuery: string): Temple[] {
  if (!searchQuery.trim()) return [];
  
  const query = searchQuery.toLowerCase();
  return temples.filter(
    (temple) =>
      temple.name.toLowerCase().includes(query) ||
      temple.city.toLowerCase().includes(query) ||
      temple.state.toLowerCase().includes(query) ||
      temple.location.toLowerCase().includes(query)
  );
}

// Find closest temples based on coordinates
export function findClosestTemples(
  userLat: number,
  userLon: number,
  limit: number = 5
): Temple[] {
  return temples
    .map((temple) => ({
      ...temple,
      distance: calculateDistance(userLat, userLon, temple.latitude, temple.longitude),
    }))
    .sort((a, b) => a.distance - b.distance)
    .slice(0, limit)
    .map(({ distance, ...temple }) => temple);
}

