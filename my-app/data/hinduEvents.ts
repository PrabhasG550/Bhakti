import { HinduEvent } from '@/types/event';

// Sample data for Hindu festivals and events
// In a production app, this would come from an API or database
export const hinduEvents: HinduEvent[] = [
  {
    id: '1',
    name: 'Makar Sankranti',
    description: 'A harvest festival marking the transition of the Sun into Makara (Capricorn) on its celestial path, celebrated with great enthusiasm across India. This festival signifies the end of the winter solstice and the beginning of longer, warmer days.',
    date: new Date(2025, 0, 14), // January 14, 2025
    type: 'festival',
    significance: 'Celebrates the end of winter and beginning of longer days. It symbolizes prosperity, abundance, and the agricultural cycle in Indian culture. The festival marks the sun\'s journey northward (Uttarayana), considered highly auspicious in Hindu scriptures.',
    culturalContext: 'Makar Sankranti is one of the few Hindu festivals that follows the solar calendar, making it occur on the same day every year. It reflects the deep connection between Indian culture and agriculture, as farmers celebrate the harvest season. The festival showcases regional diversity - in Punjab as Lohri, in Tamil Nadu as Pongal, and in Gujarat with kite flying, demonstrating how one festival unites diverse communities while maintaining unique local traditions.',
    traditions: ['Flying kites (symbolizing reaching for the sky)', 'Eating sesame sweets (til-gud) representing unity', 'Taking holy dips in rivers (Ganga, Godavari, Yamuna)', 'Donating to charity (annadaan)', 'Offering prayers to the Sun God'],
    location: 'Pan-India',
    color: '#FF6B6B',
    imageUrl: 'https://images.unsplash.com/photo-1519751138087-5bf79df62d5b?w=800&h=600&fit=crop'
  },
  {
    id: '2',
    name: 'Vasant Panchami',
    description: 'Festival dedicated to Goddess Saraswati, the deity of knowledge, music, arts, wisdom, and learning. Celebrated on the fifth day of spring, this festival marks the arrival of spring and the renewal of nature.',
    date: new Date(2025, 1, 2), // February 2, 2025
    type: 'festival',
    significance: 'Celebrates the arrival of spring and honors knowledge and learning. Yellow, the color of mustard flowers that bloom during this time, dominates the celebrations. In Indian culture, this day is considered highly auspicious for starting education, learning new skills, or initiating any form of academic pursuit.',
    culturalContext: 'Vasant Panchami reflects the Indian value of "Vidya" (education) as the greatest wealth. Children are often introduced to writing on this day in a ceremony called "Aksharabhyasam". The festival emphasizes that knowledge is sacred and should be pursued throughout life. This celebration of learning showcases how Indian culture has historically placed immense importance on education, arts, and intellectual pursuits, viewing them as paths to spiritual and material prosperity.',
    traditions: ['Wearing yellow clothes (color of spring and knowledge)', 'Worshipping Goddess Saraswati with books and instruments', 'Starting education for children (Vidya Arambham)', 'Flying kites', 'Offering yellow flowers and sweets'],
    location: 'Pan-India',
    color: '#FFD93D',
    imageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop'
  },
  {
    id: '3',
    name: 'Maha Shivaratri',
    description: 'The Great Night of Shiva, one of the most significant festivals in Hinduism, dedicated to Lord Shiva. Devotees observe fasting, perform night-long prayers, and engage in deep meditation to honor the cosmic dancer and destroyer of evil.',
    date: new Date(2025, 1, 26), // February 26, 2025
    type: 'festival',
    significance: 'One of the most important Hindu festivals, symbolizing overcoming darkness and ignorance. It commemorates the day when Lord Shiva performed the Tandava (cosmic dance) and is also believed to be the night when Shiva and Parvati got married. The festival represents the triumph of consciousness over ignorance.',
    culturalContext: 'Maha Shivaratri embodies the core Hindu philosophy of seeking inner transformation through devotion and self-discipline. The night-long vigil (Jagaran) represents staying awake through darkness to reach enlightenment. The worship of Shiva Linga symbolizes the formless, infinite nature of the divine. This festival teaches the importance of meditation, self-control, and spiritual discipline in Indian culture, showing how religious practices are deeply connected to personal growth and understanding the deeper truths of existence.',
    traditions: ['Fasting throughout the day and night', 'Night-long vigil and meditation (Jagaran)', 'Shiva Linga worship with milk, honey, and bilva leaves', 'Chanting "Om Namah Shivaya"', 'Offering bael leaves and fruits'],
    location: 'Pan-India',
    color: '#6C5CE7',
    imageUrl: 'https://images.unsplash.com/photo-1528164344705-47542687000d?w=800&h=600&fit=crop'
  },
  {
    id: '4',
    name: 'Holi',
    description: 'The festival of colors, one of the most vibrant and joyous celebrations in India, celebrating the victory of good over evil and the arrival of spring. Known for its exuberant display of colors, music, and community bonding.',
    date: new Date(2025, 2, 14), // March 14, 2025
    type: 'festival',
    significance: 'Marks the end of winter and the beginning of spring. Celebrates love, unity, and the triumph of good (Prahlad) over evil (Holika). The festival breaks down social barriers, as people from all walks of life come together to play with colors, symbolizing the colorful nature of life and relationships.',
    culturalContext: 'Holi represents the essence of Indian culture\'s celebration of life, unity, and the breaking of social hierarchies. The festival, with its origins in the legend of Prahlad and Holika, teaches about faith and devotion. The throwing of colors (gulal) symbolizes the shedding of ego and the celebration of equality. This festival showcases how Indian culture values community bonds, forgiveness, and starting anew. The celebration of Holi teaches children and adults alike about joy, unity, and the importance of coming together despite differences, making it a powerful cultural and social event.',
    traditions: ['Playing with colors (gulal and water)', 'Bonfires on the eve (Holika Dahan)', 'Traditional sweets like gujiya and thandai', 'Music, dance, and community gatherings', 'Visiting friends and family'],
    location: 'Pan-India',
    color: '#FF6B9D',
    imageUrl: 'https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?w=800&h=600&fit=crop'
  },
  {
    id: '5',
    name: 'Ram Navami',
    description: 'Birthday of Lord Rama, the seventh avatar of Lord Vishnu and the protagonist of the epic Ramayana. Celebrated as a day of righteousness, dharma, and moral values in Hindu culture.',
    date: new Date(2025, 3, 6), // April 6, 2025
    type: 'festival',
    significance: 'Celebrates the birth of Lord Rama, symbolizing righteousness (dharma), duty, and moral conduct. Rama is considered the ideal son, husband, brother, and king - the "Maryada Purushottam" (the best among men). The festival inspires people to follow the path of righteousness and truth.',
    culturalContext: 'Ram Navami reflects the Indian cultural emphasis on dharma (righteous duty) and the ideal of leading a virtuous life. The Ramayana, one of India\'s greatest epics, has shaped moral values and ethics in Indian society for millennia. Lord Rama\'s life teaches about sacrifice, duty, respect for parents, love for siblings, and commitment to truth. This festival is not just a religious observance but a cultural lesson in ethics and values, teaching generations about the importance of integrity, responsibility, and moral courage. The celebration of Rama\'s birth reinforces these timeless values in contemporary society.',
    traditions: ['Reading or reciting the Ramayana', 'Fasting and prayers', 'Visiting temples dedicated to Lord Rama', 'Bhajans and kirtans', 'Community readings and discourses'],
    location: 'Pan-India',
    color: '#4ECDC4',
    imageUrl: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&h=600&fit=crop'
  },
  {
    id: '6',
    name: 'Hanuman Jayanti',
    description: 'Celebrates the birth of Lord Hanuman, the monkey god known for his unwavering devotion to Lord Rama, immense strength, and selfless service. Hanuman represents devotion, courage, and loyalty in Hindu mythology.',
    date: new Date(2025, 3, 12), // April 12, 2025
    type: 'festival',
    significance: 'Honors Hanuman\'s devotion, strength, and selfless service to Lord Rama. Hanuman is revered as a symbol of strength, courage, and unwavering devotion. The festival inspires devotees to cultivate devotion, humility, and service to others.',
    culturalContext: 'Hanuman Jayanti celebrates the ideal of "Bhakti" (devotion) and "Seva" (selfless service) that are central to Indian culture. Hanuman\'s character in the Ramayana teaches about unconditional devotion, humility despite having immense powers, and the importance of serving a higher purpose. The Hanuman Chalisa, a popular hymn, is recited by millions daily, showing how this deity\'s values are integrated into daily life. This festival teaches children and adults about the virtues of loyalty, strength with humility, and the power of devotion. Hanuman represents the ideal devotee, showing that true strength comes from selfless service and unwavering faith.',
    traditions: ['Reading Hanuman Chalisa (40 verses)', 'Offering sindoor (vermilion) and laddus', 'Visiting Hanuman temples', 'Distributing prasad', 'Fasting and prayers'],
    location: 'Pan-India',
    color: '#FFA07A',
    imageUrl: 'https://images.unsplash.com/photo-1584942368913-1b9c7a66fd3b?w=800&h=600&fit=crop'
  },
  {
    id: '7',
    name: 'Akshaya Tritiya',
    description: 'An extremely auspicious day in the Hindu calendar, considered one of the most important days for new beginnings, investments, and starting new ventures. "Akshaya" means "never diminishing" in Sanskrit.',
    date: new Date(2025, 3, 30), // April 30, 2025
    type: 'festival',
    significance: 'Believed to be an eternally auspicious day when any venture begun is guaranteed success and prosperity. The day is associated with Lord Vishnu and Goddess Lakshmi. It is considered so auspicious that no "muhurat" (auspicious time) calculation is needed.',
    culturalContext: 'Akshaya Tritiya reflects the Indian cultural practice of choosing auspicious times (muhurat) for important life events. This festival demonstrates the deep connection between spirituality and material prosperity in Indian culture, showing that success is sought with divine blessings. The tradition of buying gold on this day represents the cultural value of savings and investment for future security. The festival teaches about planning, auspicious beginnings, and the belief that starting important ventures on the right day brings enduring success. It showcases how Indian culture integrates spirituality with practical life decisions.',
    traditions: ['Buying gold and precious metals (considered auspicious)', 'Starting new ventures and businesses', 'Charity and donations (daan)', 'Performing pujas for prosperity', 'Making investments'],
    location: 'Pan-India',
    color: '#FFD700',
    imageUrl: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&h=600&fit=crop'
  },
  {
    id: '8',
    name: 'Ganga Dussehra',
    description: 'Celebrates the descent of the holy river Ganga from heaven to earth. This festival honors the sacred river that has sustained Indian civilization for thousands of years and holds immense spiritual significance.',
    date: new Date(2025, 4, 7), // May 7, 2025
    type: 'festival',
    significance: 'Honors the sacred river Ganga and its spiritual cleansing powers. According to mythology, Ganga descended to earth on this day to purify the ashes of King Bhagiratha\'s ancestors. The river is considered a goddess and a source of purification and liberation (moksha).',
    culturalContext: 'Ganga Dussehra reflects the deep reverence for nature, especially rivers, in Indian culture. The Ganga is not just a river but a living entity, a goddess who sustains millions. This festival teaches about environmental consciousness, respect for natural resources, and the spiritual connection between humans and nature. The practice of taking dips in the Ganga represents the Indian belief in the purifying power of sacred waters. This celebration showcases how Indian culture has historically integrated environmental awareness with spirituality, viewing natural elements as sacred and worthy of worship and protection.',
    traditions: ['Taking dips in the Ganga (holy bath)', 'Performing Ganga aarti', 'Donating to charity', 'Worshiping the river as a goddess', 'Chanting Ganga prayers'],
    location: 'Gangetic plains, especially Haridwar, Varanasi',
    color: '#00CED1',
    imageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop'
  },
  {
    id: '9',
    name: 'Vat Savitri Vrat',
    description: 'A fasting ritual observed by married women for the longevity, well-being, and prosperity of their husbands. Based on the legendary tale of Savitri and Satyavan, this festival celebrates marital devotion and the power of a wife\'s love.',
    date: new Date(2025, 4, 28), // May 28, 2025
    type: 'fast',
    significance: 'Based on the legend of Savitri and Satyavan, symbolizing marital devotion, love, and the power of a wife\'s determination. Savitri\'s story demonstrates how a woman\'s love and intelligence can overcome even death. The festival honors the sacred bond of marriage.',
    culturalContext: 'Vat Savitri Vrat reflects the Indian cultural values of marital devotion, sacrifice, and the strength of relationships. The legend of Savitri, who brought her husband back from death through her wit and devotion, showcases the power of love and determination in Indian mythology. This festival teaches about commitment, loyalty, and the importance of family bonds. It demonstrates how Indian culture celebrates the role of women as pillars of strength in families, showing that devotion and love can overcome even the greatest obstacles. The vrat (fast) represents self-discipline and sacrifice for loved ones.',
    traditions: ['Fasting throughout the day', 'Tying threads around the banyan tree (Vat)', 'Listening to the Savitri-Satyavan story', 'Praying for husband\'s well-being and longevity', 'Worshipping the banyan tree'],
    location: 'Pan-India (especially North and West)',
    color: '#9370DB',
    imageUrl: 'https://images.unsplash.com/photo-1528164344705-47542687000d?w=800&h=600&fit=crop'
  },
  {
    id: '10',
    name: 'Rath Yatra (Puri)',
    description: 'The Chariot Festival, one of the oldest and largest religious festivals in the world, where Lord Jagannath, Balabhadra, and Subhadra are taken in grand procession in massive chariots. This festival attracts millions of devotees.',
    date: new Date(2025, 5, 29), // June 29, 2025
    type: 'festival',
    significance: 'One of the oldest and largest religious festivals in the world. The deities are taken from the Jagannath Temple to the Gundicha Temple, symbolizing their annual visit to their aunt\'s house. The festival demonstrates that God comes to the people, breaking all barriers.',
    culturalContext: 'Rath Yatra showcases the grandeur and scale of Indian religious festivals, demonstrating how spirituality brings together millions of people. The festival teaches about equality - everyone, regardless of caste, class, or background, can pull the chariots of the Lord. This reflects the democratic nature of Indian spirituality. The massive chariots (raths) are engineering marvels, showcasing traditional Indian craftsmanship. The festival represents the cultural value of community participation in religious observances and demonstrates how festivals can transcend social divisions. Rath Yatra teaches about devotion, community service, and the belief that the divine is accessible to all.',
    traditions: ['Pulling the massive chariots (raths)', 'Devotional songs and chants', 'Pilgrimage to Puri, Odisha', 'Distributing prasad to millions', 'Participating in the procession'],
    location: 'Puri, Odisha',
    color: '#FF6347',
    imageUrl: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&h=600&fit=crop'
  },
  {
    id: '11',
    name: 'Guru Purnima',
    description: 'A day to honor and express gratitude towards spiritual and academic teachers (gurus). This festival recognizes the vital role of teachers in shaping individuals and society, celebrating the teacher-student relationship.',
    date: new Date(2025, 6, 12), // July 12, 2025
    type: 'festival',
    significance: 'Dedicated to all spiritual and academic gurus who remove darkness of ignorance. The full moon (Purnima) in the month of Ashadha is dedicated to the memory of the great sage Vyasa, who compiled the Vedas. The festival emphasizes the importance of learning and respecting teachers.',
    culturalContext: 'Guru Purnima reflects the Indian cultural tradition of "Guru-Shishya Parampara" (teacher-student tradition), which has been central to Indian education for millennia. The festival teaches that a guru (teacher) is placed on a pedestal even higher than God, as they are the ones who guide us to the divine. This celebration showcases how Indian culture has historically valued education and the role of teachers. The festival emphasizes gratitude, respect for knowledge, and the recognition that learning is a lifelong process. Guru Purnima teaches children and adults alike about honoring those who impart knowledge, showing how Indian culture integrates respect for teachers into spiritual and academic life.',
    traditions: ['Honoring teachers and gurus', 'Performing puja for gurus', 'Studying scriptures and teachings', 'Reflecting on lessons learned', 'Offering gifts and respect to teachers'],
    location: 'Pan-India',
    color: '#FFA500',
    imageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop'
  },
  {
    id: '12',
    name: 'Raksha Bandhan',
    description: 'Celebrates the beautiful bond between brothers and sisters, where sisters tie a sacred thread (rakhi) on their brothers\' wrists. This festival symbolizes love, protection, and the special relationship between siblings.',
    date: new Date(2025, 7, 9), // August 9, 2025
    type: 'festival',
    significance: 'Symbolizes the protective bond between siblings and family love. The rakhi thread represents the sister\'s love and prayers for her brother\'s well-being, while the brother promises to protect and care for his sister. The festival strengthens family bonds and celebrates the unique relationship between siblings.',
    culturalContext: 'Raksha Bandhan exemplifies the Indian cultural emphasis on family relationships and the special bond between siblings. The festival teaches about mutual care, respect, and protection within families. The tradition of tying rakhi has historical significance - queens would send rakhis to neighboring kings as a gesture of seeking protection. This festival showcases how Indian culture celebrates relationships, not just through words but through symbolic rituals. Raksha Bandhan teaches children about family bonds, responsibility, and the importance of caring for siblings. The festival demonstrates how Indian culture integrates love, respect, and protection into family relationships, making it a celebration of family values.',
    traditions: ['Tying rakhi (sacred thread) on brother\'s wrist', 'Exchanging gifts', 'Sweets and celebrations', 'Brother promising protection', 'Sister praying for brother\'s well-being'],
    location: 'Pan-India',
    color: '#FF1493',
    imageUrl: 'https://images.unsplash.com/photo-1584942368913-1b9c7a66fd3b?w=800&h=600&fit=crop'
  },
  {
    id: '13',
    name: 'Krishna Janmashtami',
    description: 'Celebrates the birth of Lord Krishna, the eighth avatar of Lord Vishnu and one of the most beloved deities in Hinduism. Known for his divine play (leela), wisdom (Bhagavad Gita), and love for his devotees.',
    date: new Date(2025, 7, 17), // August 17, 2025
    type: 'festival',
    significance: 'One of the most important festivals, celebrating the divine birth of Krishna at midnight in Mathura. Krishna\'s life and teachings in the Bhagavad Gita have profoundly influenced Indian philosophy, ethics, and way of life. The festival celebrates divine love, wisdom, and the playfulness of the divine.',
    culturalContext: 'Krishna Janmashtami reflects the multifaceted nature of Indian spirituality - celebrating both the playful child (Bal Krishna) and the divine teacher (the giver of the Bhagavad Gita). Krishna\'s life teaches about love, duty (dharma), devotion, and the path to spiritual liberation. The Dahi Handi (pot-breaking) tradition represents Krishna\'s childhood as Makhan Chor (butter thief), teaching about joy and playfulness in spirituality. The Bhagavad Gita, delivered by Krishna, is one of the world\'s most influential philosophical texts, teaching about duty, detachment, and spiritual wisdom. This festival showcases how Indian culture celebrates both the playful and profound aspects of the divine, teaching that spirituality can be joyful and meaningful.',
    traditions: ['Fasting until midnight (time of Krishna\'s birth)', 'Midnight prayers and celebrations', 'Dahi Handi (pot-breaking ceremony)', 'Decorating homes and temples', 'Singing bhajans and reading Bhagavad Gita'],
    location: 'Pan-India',
    color: '#4169E1',
    imageUrl: 'https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?w=800&h=600&fit=crop'
  },
  {
    id: '14',
    name: 'Ganesh Chaturthi',
    description: 'Celebrates the birth of Lord Ganesha, the elephant-headed god of wisdom, prosperity, and the remover of obstacles. One of the most enthusiastically celebrated festivals, especially in Maharashtra, bringing communities together.',
    date: new Date(2025, 8, 7), // September 7, 2025
    type: 'festival',
    significance: 'Welcomes Ganesha and celebrates his blessings of wisdom, prosperity, and success. Ganesha is worshipped first before any new venture, as he removes obstacles. The festival symbolizes new beginnings and the importance of seeking divine blessings for success.',
    culturalContext: 'Ganesh Chaturthi showcases the Indian cultural practice of community celebration and the importance of removing obstacles before starting new ventures. The festival, popularized by Lokmanya Tilak, became a means of uniting communities during the freedom struggle. The immersion (Visarjan) of Ganesha idols teaches about the cycle of creation and dissolution. Ganesha\'s elephant head symbolizes wisdom, while his large ears represent listening, and his small eyes represent concentration. The festival teaches children and adults about seeking wisdom, overcoming obstacles, and the importance of community celebrations. This festival demonstrates how Indian culture integrates spirituality with community bonding and social unity.',
    traditions: ['Installing Ganesha idols in homes and public pandals', 'Prayers and aarti (lamp worship)', 'Visarjan (immersion) in water bodies', 'Distributing modak (sweet dumplings)', 'Community celebrations and processions'],
    location: 'Pan-India (especially Maharashtra)',
    color: '#32CD32',
    imageUrl: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&h=600&fit=crop'
  },
  {
    id: '15',
    name: 'Navratri',
    description: 'Nine nights dedicated to the worship of Goddess Durga and her various forms. This festival celebrates the divine feminine power (Shakti) and the victory of good over evil. Celebrated with fasting, prayers, and traditional dances.',
    date: new Date(2025, 9, 3), // October 3, 2025
    type: 'festival',
    significance: 'Celebrates the victory of good over evil through the power of the divine feminine. Each of the nine nights is dedicated to different forms of the Goddess. The festival culminates with Dussehra, marking the victory of Goddess Durga over the demon Mahishasura.',
    culturalContext: 'Navratri reflects the Indian cultural reverence for the divine feminine and the celebration of women\'s power. The festival teaches about the nine forms of the Goddess, each representing different aspects of strength, wisdom, and protection. The Garba and Dandiya dances from Gujarat showcase how Indian culture integrates dance, music, and spirituality. Navratri demonstrates the cultural value of fasting as a means of purification and self-discipline. The festival teaches about the balance of masculine and feminine energies in the universe and celebrates the power of the divine mother. This celebration showcases how Indian culture honors women, strength, and the triumph of good over evil, making it a powerful cultural and spiritual event.',
    traditions: ['Fasting and prayers for nine days', 'Garba and Dandiya dances (Gujarat)', 'Durga Puja with elaborate idols (Bengal)', 'Worshipping nine forms of Devi', 'Kanya Pujan (worshipping young girls as the goddess)'],
    location: 'Pan-India',
    color: '#FF69B4',
    imageUrl: 'https://images.unsplash.com/photo-1519751138087-5bf79df62d5b?w=800&h=600&fit=crop'
  },
  {
    id: '16',
    name: 'Dussehra/Vijayadashami',
    description: 'Celebrates the victory of Lord Rama over the demon king Ravana and Goddess Durga over Mahishasura. This festival symbolizes the triumph of good over evil, knowledge over ignorance, and dharma over adharma.',
    date: new Date(2025, 9, 12), // October 12, 2025
    type: 'festival',
    significance: 'Symbolizes the triumph of good over evil, knowledge over ignorance. The burning of Ravana\'s effigy represents the destruction of ego, anger, and negative qualities. The festival inspires people to overcome their inner demons and follow the path of righteousness.',
    culturalContext: 'Dussehra teaches one of the most important lessons in Indian culture - the victory of good over evil. The festival combines the celebration of two great victories: Rama\'s victory over Ravana and Durga\'s victory over Mahishasura. The burning of effigies is not just a spectacle but a symbolic act of destroying negative qualities within oneself. Rama Lila performances across India teach the Ramayana\'s moral lessons to new generations. The festival demonstrates how Indian culture uses stories and celebrations to teach moral values. Dussehra teaches children and adults about courage, righteousness, and the importance of standing up against evil. The celebration of weapons (Shastra Puja) on this day in some regions represents the readiness to fight for dharma (righteousness).',
    traditions: ['Ravana effigy burning (representing destruction of evil)', 'Rama Lila (dramatic performances of Ramayana)', 'Worshipping weapons (Shastra Puja)', 'Starting new ventures (considered auspicious)', 'Visiting temples and offering prayers'],
    location: 'Pan-India',
    color: '#DC143C',
    imageUrl: 'https://images.unsplash.com/photo-1528164344705-47542687000d?w=800&h=600&fit=crop'
  },
  {
    id: '17',
    name: 'Karva Chauth',
    description: 'A fasting ritual observed by married women for the safety, longevity, and well-being of their husbands. One of the most significant festivals for married women in North India, celebrated with great devotion and elaborate rituals.',
    date: new Date(2025, 9, 17), // October 17, 2025
    type: 'fast',
    significance: 'Demonstrates love and devotion of wives towards their husbands. The fast is observed from sunrise to moonrise without food or water. The festival strengthens marital bonds and is a celebration of love, commitment, and sacrifice in marriage.',
    culturalContext: 'Karva Chauth reflects the Indian cultural emphasis on marital relationships and the sacrifices made in marriage. The festival showcases the strength and devotion of women, who observe a difficult fast for their husbands\' well-being. The tradition of viewing the moon through a sieve and then looking at the husband represents the Indian belief in rituals that strengthen relationships. The festival teaches about commitment, sacrifice, and the importance of relationships in Indian culture. While modern interpretations focus on mutual love and respect, the festival continues to celebrate the bond between spouses. Karva Chauth demonstrates how Indian culture celebrates love and commitment through rituals, showing the importance of relationships in social and cultural life.',
    traditions: ['Day-long fast without food or water', 'Moon sighting through a sieve', 'Breaking fast after moonrise', 'Wearing bridal attire and henna', 'Listening to Karva Chauth stories', 'Receiving gifts from husband and in-laws'],
    location: 'North India',
    color: '#FF69B4',
    imageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop'
  },
  {
    id: '18',
    name: 'Diwali',
    description: 'The festival of lights, one of the most important and widely celebrated festivals in India. Diwali celebrates the return of Lord Rama to Ayodhya after 14 years of exile and the victory of light over darkness, good over evil, and knowledge over ignorance.',
    date: new Date(2025, 10, 1), // November 1, 2025
    type: 'festival',
    significance: 'One of the most important Hindu festivals, symbolizing the spiritual victory of light over darkness, good over evil, and knowledge over ignorance. The lighting of diyas (oil lamps) represents the inner light that protects from spiritual darkness. The festival marks new beginnings and the triumph of righteousness.',
    culturalContext: 'Diwali is perhaps the most significant cultural festival in India, celebrated by people of all religions and communities. The festival teaches about the victory of light over darkness, both literally and metaphorically. The tradition of lighting diyas represents the Indian value of dispelling ignorance with knowledge. The celebration of Lakshmi (goddess of wealth) alongside the spiritual aspects shows how Indian culture integrates material and spiritual prosperity. Diwali teaches children about cleanliness (deep cleaning before the festival), sharing (distributing sweets), and the importance of light (both physical and spiritual). The festival showcases how Indian culture celebrates with family, communities, and through acts of charity. Diwali\'s universal message of light, knowledge, and good over evil makes it a festival that transcends religious boundaries.',
    traditions: ['Lighting diyas (oil lamps) and candles', 'Creating Rangoli (colorful floor art)', 'Fireworks and celebrations', 'Lakshmi Puja (worshipping goddess of wealth)', 'Exchanging sweets and gifts', 'Cleaning and decorating homes', 'Wearing new clothes', 'Family gatherings and feasts'],
    location: 'Pan-India',
    color: '#FFD700',
    imageUrl: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&h=600&fit=crop'
  },
  {
    id: '19',
    name: 'Chhath Puja',
    description: 'Ancient Vedic festival dedicated to the Sun God (Surya) and Chhathi Maiya (Shashthi Devi). One of the most rigorous and significant festivals, especially in Bihar, Jharkhand, and Eastern Uttar Pradesh, celebrating the life-giving power of the sun.',
    date: new Date(2025, 10, 6), // November 6, 2025
    type: 'festival',
    significance: 'Expresses gratitude to the Sun God for sustaining life on earth. The Sun is considered the source of all energy and life. The festival involves rigorous fasting and standing in water to offer prayers to the rising and setting sun, demonstrating deep devotion and gratitude.',
    culturalContext: 'Chhath Puja reflects the ancient Indian tradition of nature worship and gratitude to natural elements. The festival demonstrates the deep connection between Indian culture and nature, viewing the sun as a divine force that sustains life. The rigorous fasting and rituals showcase the Indian value of self-discipline and devotion. The practice of standing in water for hours represents the Indian belief in the purifying and energizing power of natural elements. Chhath Puja teaches about gratitude, discipline, and the importance of respecting natural forces. The festival showcases how Indian culture has maintained ancient Vedic traditions, demonstrating the continuity of cultural practices over thousands of years. This celebration teaches about the interdependence between humans and nature.',
    traditions: ['Rising before sunrise for prayers', 'Offering prayers to the rising and setting sun', 'Rigorous fasting (Nirjala - without water)', 'Standing in water for extended periods', 'Offering fruits, sweets, and traditional foods', 'Community participation and support'],
    location: 'Bihar, Jharkhand, Eastern UP',
    color: '#FF8C00',
    imageUrl: 'https://images.unsplash.com/photo-1519751138087-5bf79df62d5b?w=800&h=600&fit=crop'
  },
  {
    id: '20',
    name: 'Kartik Purnima',
    description: 'Full moon day in the month of Kartik (October-November), considered one of the most auspicious days in the Hindu calendar. This day is associated with various deities and is marked by spiritual practices, charity, and rituals.',
    date: new Date(2025, 10, 15), // November 15, 2025
    type: 'festival',
    significance: 'Believed to be one of the most auspicious days for performing spiritual practices, charity, and rituals. The day is associated with Lord Vishnu, Lord Shiva, and the Ganga. It is believed that any good deed performed on this day yields multiplied benefits.',
    culturalContext: 'Kartik Purnima reflects the Indian cultural practice of observing auspicious times for spiritual activities. The festival teaches about the importance of timing in spiritual practices and the belief that certain periods are more conducive to spiritual growth. The practice of taking holy baths, lighting lamps, and performing charity on this day demonstrates the Indian value of combining spiritual practices with social service. The festival showcases how Indian culture integrates lunar cycles with religious observances, showing the connection between nature and spirituality. Kartik Purnima teaches about the importance of charity, spiritual practices, and the belief that good deeds done on auspicious days have greater impact. This celebration demonstrates the continuity of ancient traditions in modern times.',
    traditions: ['Taking holy baths in rivers (especially Ganga)', 'Performing puja and prayers', 'Donating to charity (daan)', 'Lighting lamps (diya)', 'Fasting and spiritual practices', 'Visiting temples'],
    location: 'Pan-India',
    color: '#9370DB',
    imageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop'
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
