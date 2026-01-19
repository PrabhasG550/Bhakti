'use client';

import { useState } from 'react';
import { HinduEvent } from '@/types/event';
import { format } from 'date-fns';
import { Temple } from '@/types/temple';
import { hinduEvents } from '@/data/hinduEvents';

interface EventsTabsProps {
  selectedTemple: Temple | null;
  savedEventIds: string[];
  onToggleSave: (eventId: string) => void;
  subscribedTempleIds: string[];
  onToggleSubscribe: (templeId: string) => void;
  allTemples: Temple[];
  onEventClick?: (event: HinduEvent) => void;
  onTempleClick?: (temple: Temple) => void;
}

export default function EventsTabs({ 
  selectedTemple, 
  savedEventIds, 
  onToggleSave,
  subscribedTempleIds,
  onToggleSubscribe,
  allTemples,
  onEventClick,
  onTempleClick
}: EventsTabsProps) {
  const [activeTab, setActiveTab] = useState<'saved' | 'upcoming' | 'subscribed'>('upcoming');

  // Get upcoming events
  const getUpcomingEvents = (): HinduEvent[] => {
    if (selectedTemple && selectedTemple.featuredEvents) {
      return hinduEvents
        .filter((event) => selectedTemple.featuredEvents?.includes(event.id))
        .filter((event) => new Date(event.date) >= new Date())
        .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    }
    
    // If no temple selected, show upcoming events
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    return hinduEvents
      .filter((event) => new Date(event.date) >= today)
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
      .slice(0, 10);
  };

  // Get saved events
  const getSavedEvents = (): HinduEvent[] => {
    return hinduEvents
      .filter((event) => savedEventIds.includes(event.id))
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  };

  const upcomingEvents = getUpcomingEvents();
  const savedEvents = getSavedEvents();

  // Get subscribed temples
  const getSubscribedTemples = (): Temple[] => {
    return allTemples
      .filter((temple) => subscribedTempleIds.includes(temple.id))
      .sort((a, b) => a.name.localeCompare(b.name));
  };

  const subscribedTemples = getSubscribedTemples();

  const getTypeBadgeColor = (type: HinduEvent['type']) => {
    switch (type) {
      case 'festival':
        return 'bg-blue-100 text-blue-800';
      case 'holiday':
        return 'bg-green-100 text-green-800';
      case 'fast':
        return 'bg-purple-100 text-purple-800';
      case 'ceremony':
        return 'bg-pink-100 text-pink-800';
      default:
        return 'bg-zinc-100 text-zinc-800';
    }
  };

  const renderEventCard = (event: HinduEvent) => {
    const eventDate = new Date(event.date);
    const isSaved = savedEventIds.includes(event.id);
    
    return (
      <div
        key={event.id}
        className="border border-zinc-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
        style={{
          borderLeftWidth: '4px',
          borderLeftColor: event.color || '#FF6B6B',
        }}
        onClick={() => onEventClick && onEventClick(event)}
      >
        {/* Event Image */}
        {event.imageUrl && (
          <div className="w-full h-24 overflow-hidden">
            <img
              src={event.imageUrl}
              alt={event.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
          </div>
        )}
        <div className="p-3">
          <div className="flex items-start justify-between mb-2">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-bold text-zinc-900">
                  {event.name}
                </h3>
                <span
                  className={`px-2 py-0.5 rounded-full text-xs font-semibold capitalize ${getTypeBadgeColor(event.type)}`}
                >
                  {event.type}
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm text-zinc-600">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span>{format(eventDate, 'MMMM d, yyyy')}</span>
              </div>
            </div>
            {/* Save/Unsave Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                onToggleSave(event.id);
              }}
              className="ml-2 p-1.5 hover:bg-zinc-100 rounded transition-colors"
              aria-label={isSaved ? 'Unsave event' : 'Save event'}
            >
              <svg
                className={`w-5 h-5 ${isSaved ? 'text-orange-500 fill-orange-500' : 'text-zinc-400'}`}
                fill={isSaved ? 'currentColor' : 'none'}
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                />
              </svg>
            </button>
          </div>
          <p className="text-sm text-zinc-700 line-clamp-2 mt-2">
            {event.description}
          </p>
          {event.location && (
            <div className="flex items-center gap-1 text-xs text-zinc-500 mt-2">
              <svg
                className="w-3 h-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span>{event.location}</span>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-3 h-full">
      {/* Tabs */}
      <div className="flex gap-2 mb-3 border-b border-zinc-200">
        <button
          onClick={() => setActiveTab('saved')}
          className={`px-3 py-2 font-semibold text-xs transition-colors relative ${
            activeTab === 'saved'
              ? 'text-black'
              : 'text-zinc-500 hover:text-zinc-700'
          }`}
        >
          Saved Events
          {activeTab === 'saved' && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500" />
          )}
        </button>
        <button
          onClick={() => setActiveTab('upcoming')}
          className={`px-3 py-2 font-semibold text-xs transition-colors relative ${
            activeTab === 'upcoming'
              ? 'text-black'
              : 'text-zinc-500 hover:text-zinc-700'
          }`}
        >
          Upcoming Events
          {activeTab === 'upcoming' && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500" />
          )}
        </button>
        <button
          onClick={() => setActiveTab('subscribed')}
          className={`px-3 py-2 font-semibold text-xs transition-colors relative ${
            activeTab === 'subscribed'
              ? 'text-black'
              : 'text-zinc-500 hover:text-zinc-700'
          }`}
        >
          Subscribed Temples
          {activeTab === 'subscribed' && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500" />
          )}
        </button>
      </div>

      {/* Tab Content */}
      <div className="max-h-[calc(100vh-280px)] overflow-y-auto">
        {activeTab === 'saved' ? (
          savedEvents.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-zinc-500 text-sm">
                No saved events. Save events from Upcoming Events to see them here.
              </p>
            </div>
          ) : (
            <div className="space-y-2">
              {savedEvents.map(renderEventCard)}
            </div>
          )
        ) : activeTab === 'upcoming' ? (
          upcomingEvents.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-zinc-500 text-sm">
                No upcoming events available. {selectedTemple ? `Select a different temple.` : 'Select a temple to see events.'}
              </p>
            </div>
          ) : (
            <div className="space-y-2">
              {upcomingEvents.map(renderEventCard)}
            </div>
          )
        ) : (
          subscribedTemples.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-zinc-500 text-sm">
                No subscribed temples. Subscribe to temples to see them here.
              </p>
            </div>
          ) : (
            <div className="space-y-2">
              {subscribedTemples.map((temple) => {
                const isSubscribed = subscribedTempleIds.includes(temple.id);
                const address = temple.address || `${temple.location}, ${temple.city}, ${temple.state}`;
                
                return (
                  <div
                    key={temple.id}
                    className="border border-zinc-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
                    onClick={() => onTempleClick && onTempleClick(temple)}
                  >
                    {/* Temple Image */}
                    {temple.imageUrl && (
                      <div className="w-full h-24 overflow-hidden">
                        <img
                          src={temple.imageUrl}
                          alt={temple.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            (e.target as HTMLImageElement).style.display = 'none';
                          }}
                        />
                      </div>
                    )}
                    <div className="p-3">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <h3 className="font-bold text-zinc-900 mb-1">
                            {temple.name}
                          </h3>
                          <p className="text-sm text-zinc-600 mb-1">
                            {address}
                          </p>
                          {temple.description && (
                            <p className="text-sm text-zinc-500 line-clamp-1">
                              {temple.description}
                            </p>
                          )}
                        </div>
                        {/* Unsubscribe Button */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onToggleSubscribe(temple.id);
                          }}
                          className="ml-2 p-1.5 hover:bg-zinc-100 rounded transition-colors"
                          aria-label="Unsubscribe from temple"
                        >
                          <svg
                            className="w-5 h-5 text-orange-500 fill-orange-500"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )
        )}
      </div>
    </div>
  );
}

