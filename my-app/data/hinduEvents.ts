import { HinduEvent } from '@/types/event';

// Sample data for Hindu festivals and events
// In a production app, this would come from an API or database
export const hinduEvents: HinduEvent[] = [
  {
    id: '1',
    name: 'Makar Sankranti',
    description: 'A harvest festival marking the transition of the Sun into Makara (Capricorn) on its celestial path.',
    date: new Date(2025, 0, 14), // January 14, 2025
    type: 'festival',
    significance: 'Celebrates the end of winter and beginning of longer days. It symbolizes prosperity and abundance.',
    traditions: ['Flying kites', 'Eating sesame sweets', 'Taking holy dips in rivers', 'Donating to charity'],
    location: 'Pan-India',
    color: '#FF6B6B'
  },
  {
    id: '2',
    name: 'Vasant Panchami',
    description: 'Festival dedicated to Goddess Saraswati, the goddess of knowledge, music, arts, and learning.',
    date: new Date(2025, 1, 2), // February 2, 2025
    type: 'festival',
    significance: 'Celebrates the arrival of spring and honors knowledge and learning.',
    traditions: ['Wearing yellow clothes', 'Worshipping Saraswati', 'Starting education for children', 'Flying kites'],
    location: 'Pan-India',
    color: '#FFD93D'
  },
  {
    id: '3',
    name: 'Maha Shivaratri',
    description: 'The Great Night of Shiva, dedicated to Lord Shiva. Devotees observe fasting and perform prayers.',
    date: new Date(2025, 1, 26), // February 26, 2025
    type: 'festival',
    significance: 'One of the most important Hindu festivals, symbolizing overcoming darkness and ignorance.',
    traditions: ['Fasting', 'Night-long vigil', 'Shiva Linga worship', 'Chanting Om Namah Shivaya'],
    location: 'Pan-India',
    color: '#6C5CE7'
  },
  {
    id: '4',
    name: 'Holi',
    description: 'The festival of colors, celebrating the victory of good over evil and the arrival of spring.',
    date: new Date(2025, 2, 14), // March 14, 2025
    type: 'festival',
    significance: 'Marks the end of winter and the beginning of spring. Celebrates love and the triumph of good.',
    traditions: ['Playing with colors', 'Bonfires (Holika Dahan)', 'Sweets and delicacies', 'Music and dance'],
    location: 'Pan-India',
    color: '#FF6B9D'
  },
  {
    id: '5',
    name: 'Ram Navami',
    description: 'Birthday of Lord Rama, the seventh avatar of Lord Vishnu and hero of the Ramayana.',
    date: new Date(2025, 3, 6), // April 6, 2025
    type: 'festival',
    significance: 'Celebrates the birth of Lord Rama, symbolizing righteousness and dharma.',
    traditions: ['Reading Ramayana', 'Fasting', 'Visiting temples', 'Bhajans and prayers'],
    location: 'Pan-India',
    color: '#4ECDC4'
  },
  {
    id: '6',
    name: 'Hanuman Jayanti',
    description: 'Celebrates the birth of Lord Hanuman, the monkey god and devotee of Lord Rama.',
    date: new Date(2025, 3, 12), // April 12, 2025
    type: 'festival',
    significance: 'Honors Hanuman\'s devotion, strength, and selfless service to Lord Rama.',
    traditions: ['Reading Hanuman Chalisa', 'Offering sindoor', 'Visiting Hanuman temples', 'Distributing prasad'],
    location: 'Pan-India',
    color: '#FFA07A'
  },
  {
    id: '7',
    name: 'Akshaya Tritiya',
    description: 'An auspicious day for new beginnings, considered one of the most important days for Hindus.',
    date: new Date(2025, 3, 30), // April 30, 2025
    type: 'festival',
    significance: 'Believed to be an eternally auspicious day when any venture begun is guaranteed success.',
    traditions: ['Buying gold', 'Starting new ventures', 'Charity and donations', 'Performing pujas'],
    location: 'Pan-India',
    color: '#FFD700'
  },
  {
    id: '8',
    name: 'Ganga Dussehra',
    description: 'Celebrates the descent of the holy river Ganga from heaven to earth.',
    date: new Date(2025, 4, 7), // May 7, 2025
    type: 'festival',
    significance: 'Honors the sacred river Ganga and its spiritual cleansing powers.',
    traditions: ['Taking dips in Ganga', 'Performing aarti', 'Donating to charity', 'Worshiping Ganga'],
    location: 'Gangetic plains, especially Haridwar, Varanasi',
    color: '#00CED1'
  },
  {
    id: '9',
    name: 'Vat Savitri Vrat',
    description: 'A fast observed by married women for the longevity and well-being of their husbands.',
    date: new Date(2025, 4, 28), // May 28, 2025
    type: 'fast',
    significance: 'Based on the legend of Savitri and Satyavan, symbolizing marital devotion.',
    traditions: ['Fasting', 'Tying threads around banyan tree', 'Praying for husband\'s well-being'],
    location: 'Pan-India (especially North and West)',
    color: '#9370DB'
  },
  {
    id: '10',
    name: 'Rath Yatra (Puri)',
    description: 'The Chariot Festival where Lord Jagannath, Balabhadra, and Subhadra are taken in procession.',
    date: new Date(2025, 5, 29), // June 29, 2025
    type: 'festival',
    significance: 'One of the oldest and largest religious festivals in the world.',
    traditions: ['Pulling chariots', 'Devotional songs', 'Pilgrimage to Puri', 'Distributing prasad'],
    location: 'Puri, Odisha',
    color: '#FF6347'
  },
  {
    id: '11',
    name: 'Guru Purnima',
    description: 'A day to honor and express gratitude towards spiritual and academic teachers.',
    date: new Date(2025, 6, 12), // July 12, 2025
    type: 'festival',
    significance: 'Dedicated to all spiritual and academic gurus who remove darkness of ignorance.',
    traditions: ['Honoring teachers', 'Performing puja for gurus', 'Studying scriptures', 'Reflecting on teachings'],
    location: 'Pan-India',
    color: '#FFA500'
  },
  {
    id: '12',
    name: 'Raksha Bandhan',
    description: 'Celebrates the bond between brothers and sisters, where sisters tie rakhi on brothers\' wrists.',
    date: new Date(2025, 7, 9), // August 9, 2025
    type: 'festival',
    significance: 'Symbolizes the protective bond between siblings and family love.',
    traditions: ['Tying rakhi', 'Exchanging gifts', 'Sweets and celebrations', 'Promising protection'],
    location: 'Pan-India',
    color: '#FF1493'
  },
  {
    id: '13',
    name: 'Krishna Janmashtami',
    description: 'Celebrates the birth of Lord Krishna, the eighth avatar of Lord Vishnu.',
    date: new Date(2025, 7, 17), // August 17, 2025
    type: 'festival',
    significance: 'One of the most important festivals, celebrating the divine birth of Krishna.',
    traditions: ['Fasting', 'Midnight prayers', 'Dahi Handi', 'Decorating homes and temples'],
    location: 'Pan-India',
    color: '#4169E1'
  },
  {
    id: '14',
    name: 'Ganesh Chaturthi',
    description: 'Celebrates the birth of Lord Ganesha, the elephant-headed god of wisdom and prosperity.',
    date: new Date(2025, 8, 7), // September 7, 2025
    type: 'festival',
    significance: 'Welcomes Ganesha and celebrates his blessings of wisdom and prosperity.',
    traditions: ['Installing Ganesha idols', 'Prayers and aarti', 'Visarjan (immersion)', 'Distributing modak'],
    location: 'Pan-India (especially Maharashtra)',
    color: '#32CD32'
  },
  {
    id: '15',
    name: 'Navratri',
    description: 'Nine nights dedicated to the worship of Goddess Durga and her various forms.',
    date: new Date(2025, 9, 3), // October 3, 2025
    type: 'festival',
    significance: 'Celebrates the victory of good over evil through the power of the divine feminine.',
    traditions: ['Fasting', 'Garba and Dandiya', 'Durga Puja', 'Worshipping nine forms of Devi'],
    location: 'Pan-India',
    color: '#FF69B4'
  },
  {
    id: '16',
    name: 'Dussehra/Vijayadashami',
    description: 'Celebrates the victory of Lord Rama over Ravana and Goddess Durga over Mahishasura.',
    date: new Date(2025, 9, 12), // October 12, 2025
    type: 'festival',
    significance: 'Symbolizes the triumph of good over evil, knowledge over ignorance.',
    traditions: ['Ravana effigy burning', 'Rama Lila', 'Worshipping weapons', 'Starting new ventures'],
    location: 'Pan-India',
    color: '#DC143C'
  },
  {
    id: '17',
    name: 'Karva Chauth',
    description: 'A fasting ritual observed by married women for the safety and longevity of their husbands.',
    date: new Date(2025, 9, 17), // October 17, 2025
    type: 'fast',
    significance: 'Demonstrates love and devotion of wives towards their husbands.',
    traditions: ['Day-long fast', 'Moon sighting', 'Breaking fast after moonrise', 'Wearing bridal attire'],
    location: 'North India',
    color: '#FF69B4'
  },
  {
    id: '18',
    name: 'Diwali',
    description: 'The festival of lights, celebrating the return of Lord Rama to Ayodhya and victory of light over darkness.',
    date: new Date(2025, 10, 1), // November 1, 2025
    type: 'festival',
    significance: 'One of the most important Hindu festivals, symbolizing spiritual victory of light over darkness.',
    traditions: ['Lighting diyas', 'Rangoli', 'Fireworks', 'Lakshmi Puja', 'Exchanging sweets and gifts'],
    location: 'Pan-India',
    color: '#FFD700'
  },
  {
    id: '19',
    name: 'Chhath Puja',
    description: 'Ancient Vedic festival dedicated to the Sun God and Chhathi Maiya.',
    date: new Date(2025, 10, 6), // November 6, 2025
    type: 'festival',
    significance: 'Expresses gratitude to the Sun God for sustaining life on earth.',
    traditions: ['Rising before sunrise', 'Offering prayers to Sun', 'Fasting', 'Standing in water'],
    location: 'Bihar, Jharkhand, Eastern UP',
    color: '#FF8C00'
  },
  {
    id: '20',
    name: 'Kartik Purnima',
    description: 'Full moon day in the month of Kartik, considered very auspicious for spiritual practices.',
    date: new Date(2025, 10, 15), // November 15, 2025
    type: 'festival',
    significance: 'Believed to be one of the most auspicious days for performing spiritual practices and charity.',
    traditions: ['Taking holy baths', 'Performing puja', 'Donating to charity', 'Lighting lamps'],
    location: 'Pan-India',
    color: '#9370DB'
  }
];

// Helper function to get events for a specific month
export function getEventsForMonth(year: number, month: number): HinduEvent[] {
  return hinduEvents.filter(event => {
    const eventDate = new Date(event.date);
    return eventDate.getFullYear() === year && eventDate.getMonth() === month;
  });
}

// Helper function to get events for a specific date
export function getEventsForDate(date: Date): HinduEvent[] {
  return hinduEvents.filter(event => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === date.getFullYear() &&
      eventDate.getMonth() === date.getMonth() &&
      eventDate.getDate() === date.getDate()
    );
  });
}

