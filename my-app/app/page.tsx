'use client';

import { useState } from 'react';
import Calendar from '@/components/Calendar';
import EventDetailModal from '@/components/EventDetailModal';
import TempleSearch from '@/components/TempleSearch';
import FeaturedEvents from '@/components/FeaturedEvents';
import TodaysEvents from '@/components/TodaysEvents';
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
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#FAE4CF' }}>
      {/* Header */}
      <header className="backdrop-blur-md border-b border-zinc-200 relative z-30 shadow-sm flex items-center" style={{ backgroundColor: '#E0CBB7' }}>
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-1.5">
          <div className="flex items-center justify-between mb-1.5">
            <div className="text-left flex items-center gap-2">
              <img 
                src="/bhakti-logo.svg" 
                alt="Bhakti Logo" 
                width={32}
                height={32}
                className="object-contain"
              />
              <div>
                <h1 className="text-lg font-bold text-zinc-900">
                  Bhakti
                </h1>
                <p className="text-zinc-600 text-xs">
                  Discover festivals, holidays, and spiritual events
                </p>
              </div>
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
      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-1.5">
        <div className="w-full max-w-[1600px] grid grid-cols-1 lg:grid-cols-3 gap-3">
          {/* Calendar - Left Side (2/3 width on large screens) */}
          <div className="lg:col-span-2">
            <Calendar onDateClick={handleDateClick} />
          </div>

          {/* Right Column - Today's Events and Featured Events (1/3 width on large screens) */}
          <div className="lg:col-span-1 flex flex-col gap-3">
            {/* Today's Events Box */}
            <TodaysEvents />
            
            {/* Featured Events */}
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
