// Fun facts about Hindu calendar days
// These can be rotated or selected based on the day

export const getHinduCalendarFunFact = (date: Date): string => {
  const day = date.getDate();
  const month = date.getMonth();
  
  // Some fun facts based on day of month
  const funFacts: { [key: string]: string } = {
    '1': "The first day of any month in the Hindu calendar is considered auspicious for starting new ventures. Many Hindus perform special prayers and make offerings on this day.",
    '3': "The number 3 holds great significance in Hinduism - representing the three main deities (Brahma, Vishnu, Shiva), the three gunas (qualities), and the three worlds. Days ending in 3 are often considered fortunate.",
    '7': "The number 7 is sacred in Hinduism, representing the seven chakras, seven worlds, and seven sages. Many Hindu rituals and festivals are observed in cycles of seven days or seven years.",
    '9': "Navratri, meaning 'nine nights', is one of the most important Hindu festivals. The number 9 represents the nine forms of Goddess Durga and is considered highly auspicious for spiritual practices.",
    '11': "Ekadashi, the 11th day of each lunar fortnight, is a sacred day for fasting and spiritual practices. Lord Vishnu is especially worshipped on these days.",
    '15': "Purnima (full moon) and Amavasya (new moon) fall on the 15th day of each lunar fortnight. These are considered highly auspicious for performing rituals and connecting with ancestors.",
    '21': "The 21st day is associated with the completion of three weeks, a significant period in many Hindu rituals and observances.",
    '27': "The number 27 is connected to the 27 Nakshatras (lunar mansions) in Hindu astronomy. Each day is associated with a specific Nakshatra that influences activities and decisions.",
  };
  
  // Get a fun fact based on day, or use a general one
  const dayKey = day.toString();
  if (funFacts[dayKey]) {
    return funFacts[dayKey];
  }
  
  // General fun facts based on day patterns
  const generalFacts = [
    "In the Hindu calendar, each day is associated with a specific deity and has unique spiritual significance. Many Hindus align their activities with these auspicious timings.",
    "The Hindu calendar combines both solar and lunar cycles, making it one of the most sophisticated calendar systems. Each day offers unique spiritual opportunities.",
    "Traditional Hindu astrology considers each day to have specific energies. Performing certain activities on their corresponding days is believed to bring greater success and spiritual progress.",
    "The Hindu calendar divides each month into two fortnights - Shukla Paksha (waxing moon) and Krishna Paksha (waning moon), each having distinct spiritual significance.",
    "Each day in the Hindu calendar is associated with one of the nine planets (Navagrahas). Worshipping the corresponding planet on its day can bring favorable results.",
    "In Hindu tradition, different days are dedicated to different deities. Monday is for Shiva, Tuesday for Hanuman, Wednesday for Vishnu, Thursday for Guru, Friday for Lakshmi, Saturday for Shani, and Sunday for Surya.",
    "The Hindu calendar includes special days called 'Vrats' (fasts) and 'Parvas' (festivals) that occur on specific dates. Observing these can bring spiritual and material benefits.",
    "Each day has a specific Tithi (lunar day) and Nakshatra (constellation), which together determine the day's spiritual quality and the best activities to perform.",
  ];
  
  // Use day number to pick a consistent fact (so it doesn't change every refresh)
  return generalFacts[day % generalFacts.length];
};

export const getHinduDayName = (date: Date): string => {
  const dayNames = [
    'Ravivaar (Sunday - Day of Sun)',
    'Somvaar (Monday - Day of Moon)',
    'Mangalvaar (Tuesday - Day of Mars)',
    'Budhvaar (Wednesday - Day of Mercury)',
    'Guruvaar (Thursday - Day of Jupiter)',
    'Shukravaar (Friday - Day of Venus)',
    'Shanivaar (Saturday - Day of Saturn)'
  ];
  return dayNames[date.getDay()];
};

