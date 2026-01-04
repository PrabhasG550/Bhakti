'use client';

import { useState } from 'react';
import Calendar from '@/components/Calendar';
import EventDetailModal from '@/components/EventDetailModal';
import TempleSearch from '@/components/TempleSearch';
import EventsTabs from '@/components/EventsTabs';
import TodaysEvents from '@/components/TodaysEvents';
import TempleDetailModal from '@/components/TempleDetailModal';
import { HinduEvent } from '@/types/event';
import { Temple } from '@/types/temple';
import { temples } from '@/data/temples';

export default function Home() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedEvents, setSelectedEvents] = useState<HinduEvent[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTemple, setSelectedTemple] = useState<Temple | null>(null);
  const [isTempleModalOpen, setIsTempleModalOpen] = useState(false);
  const [savedEventIds, setSavedEventIds] = useState<string[]>([]);
  const [subscribedTempleIds, setSubscribedTempleIds] = useState<string[]>([]);
  const [cameFromTempleModal, setCameFromTempleModal] = useState(false);

  const handleDateClick = (date: Date, events: HinduEvent[]) => {
    setSelectedDate(date);
    setSelectedEvents(events);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedDate(null);
    setSelectedEvents([]);
    setCameFromTempleModal(false);
  };

  const handleTempleSelect = (temple: Temple | null) => {
    setSelectedTemple(temple);
    if (temple) {
      setIsTempleModalOpen(true);
    }
  };

  const handleCloseTempleModal = () => {
    setIsTempleModalOpen(false);
  };

  const handleToggleSave = (eventId: string) => {
    setSavedEventIds((prev) =>
      prev.includes(eventId)
        ? prev.filter((id) => id !== eventId)
        : [...prev, eventId]
    );
  };

  const handleToggleSubscribe = (templeId: string) => {
    setSubscribedTempleIds((prev) =>
      prev.includes(templeId)
        ? prev.filter((id) => id !== templeId)
        : [...prev, templeId]
    );
  };

  const handleEventClick = (event: HinduEvent) => {
    // Close temple modal before opening event modal
    if (isTempleModalOpen) {
      setCameFromTempleModal(true);
      setIsTempleModalOpen(false);
    }
    setSelectedDate(new Date(event.date));
    setSelectedEvents([event]);
    setIsModalOpen(true);
  };

  const handleBackToTemple = () => {
    // Close event modal and reopen temple modal
    setIsModalOpen(false);
    setSelectedDate(null);
    setSelectedEvents([]);
    if (selectedTemple) {
      setIsTempleModalOpen(true);
      setCameFromTempleModal(false);
    }
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
            
            {/* Events Tabs */}
            <EventsTabs 
              selectedTemple={selectedTemple}
              savedEventIds={savedEventIds}
              onToggleSave={handleToggleSave}
              subscribedTempleIds={subscribedTempleIds}
              onToggleSubscribe={handleToggleSubscribe}
              allTemples={temples}
            />
          </div>
        </div>
      </main>

      {/* Event Detail Modal */}
      <EventDetailModal
        events={selectedEvents}
        selectedDate={selectedDate}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        savedEventIds={savedEventIds}
        onToggleSave={handleToggleSave}
        onBack={cameFromTempleModal ? handleBackToTemple : undefined}
        showBackButton={cameFromTempleModal}
      />

      {/* Temple Detail Modal */}
      <TempleDetailModal
        temple={selectedTemple}
        isOpen={isTempleModalOpen}
        onClose={handleCloseTempleModal}
        isSubscribed={selectedTemple ? subscribedTempleIds.includes(selectedTemple.id) : false}
        onToggleSubscribe={handleToggleSubscribe}
        savedEventIds={savedEventIds}
        onToggleSave={handleToggleSave}
        onEventClick={handleEventClick}
      />
    </div>
  );
}
