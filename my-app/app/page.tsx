'use client';

import { useState } from 'react';
import Calendar from '@/components/Calendar';
import EventDetailModal from '@/components/EventDetailModal';
import { HinduEvent } from '@/types/event';

export default function Home() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedEvents, setSelectedEvents] = useState<HinduEvent[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900">
      {/* Header */}
      <header className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
                🕉️ Hindu Calendar
              </h1>
              <p className="text-zinc-600 dark:text-zinc-400 mt-1">
                Discover festivals, holidays, and spiritual events
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Calendar onDateClick={handleDateClick} />
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
