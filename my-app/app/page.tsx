'use client';

import { useState } from 'react';
import Calendar from '@/components/Calendar';
import EventDetailModal from '@/components/EventDetailModal';
import TempleSearch from '@/components/TempleSearch';
import FeaturedEvents from '@/components/FeaturedEvents';
import { HinduEvent } from '@/types/event';
import { Temple } from '@/types/temple';

export default function Home() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedEvents, setSelectedEvents] = useState<HinduEvent[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTemple, setSelectedTemple] = useState<Temple | null>(null);

  const handleDateClick = (date: Date, events: HinduEvent[]) => {
    setSelectedDate(date);
    setSelectedEvents(events);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedDate(null);
    setSelectedEvents([]);
  };

  const handleTempleSelect = (temple: Temple | null) => {
    setSelectedTemple(temple);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FAE4CF' }}>
      {/* Header */}
      <header className="backdrop-blur-md border-b border-zinc-200 absolute top-0 left-0 right-0 z-30 shadow-sm" style={{ backgroundColor: '#E0CBB7' }}>
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h1 className="text-2xl font-bold text-zinc-900">
                Bhakti
              </h1>
              <p className="text-zinc-600 text-sm mt-0.5">
                Discover festivals, holidays, and spiritual events
              </p>
            </div>
          </div>
          
          {/* Temple Search Bar */}
          <div className="w-full">
            <TempleSearch 
              onTempleSelect={handleTempleSelect} 
              selectedTemple={selectedTemple}
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-8" style={{ paddingTop: '140px' }}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Calendar - Left Side (2/3 width on large screens) */}
          <div className="lg:col-span-2">
            <Calendar onDateClick={handleDateClick} />
          </div>

          {/* Featured Events - Right Side (1/3 width on large screens) */}
          <div className="lg:col-span-1">
            <FeaturedEvents selectedTemple={selectedTemple} />
          </div>
        </div>
      </main>

      {/* Event Detail Modal */}
      <EventDetailModal
        events={selectedEvents}
        selectedDate={selectedDate}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}
