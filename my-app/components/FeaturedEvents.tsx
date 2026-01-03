'use client';

import { HinduEvent } from '@/types/event';
import { format } from 'date-fns';
import { Temple } from '@/types/temple';
import { hinduEvents } from '@/data/hinduEvents';

interface FeaturedEventsProps {
  selectedTemple: Temple | null;
}

export default function FeaturedEvents({ selectedTemple }: FeaturedEventsProps) {
  // Get featured events based on selected temple, or show all upcoming events if no temple selected
  const getFeaturedEvents = (): HinduEvent[] => {
    if (selectedTemple && selectedTemple.featuredEvents) {
      return hinduEvents
        .filter((event) => selectedTemple.featuredEvents?.includes(event.id))
        .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    }
    
    // If no temple selected, show upcoming events (next 5 events)
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    return hinduEvents
      .filter((event) => new Date(event.date) >= today)
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
      .slice(0, 5);
  };

  const featuredEvents = getFeaturedEvents();

  const getTypeBadgeColor = (type: HinduEvent['type']) => {
    switch (type) {
      case 'festival':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300';
      case 'holiday':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
      case 'fast':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300';
      case 'ceremony':
        return 'bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300';
      default:
        return 'bg-zinc-100 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-300';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-3 h-full">
      <div className="mb-2">
        <h2 className="text-lg font-bold text-black mb-1">
          Featured Events
        </h2>
        {selectedTemple ? (
          <p className="text-zinc-600 text-sm">
            Events at <span className="font-semibold">{selectedTemple.name}</span>
          </p>
        ) : (
          <p className="text-zinc-600 text-sm">
            Upcoming events (Select a temple to see temple-specific events)
          </p>
        )}
      </div>

      {featuredEvents.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-zinc-500 dark:text-zinc-400">
            No featured events available. Select a temple to see events.
          </p>
        </div>
      ) : (
        <div className="space-y-2 max-h-[calc(100vh-220px)] overflow-y-auto">
          {featuredEvents.map((event) => {
            const eventDate = new Date(event.date);
            const isPast = eventDate < new Date();
            
            return (
              <div
                key={event.id}
                className="border border-zinc-200 dark:border-zinc-700 rounded-xl overflow-hidden hover:shadow-md transition-shadow"
                style={{
                  borderLeftWidth: '4px',
                  borderLeftColor: event.color || '#FF6B6B',
                }}
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
                        <h3 className="font-bold text-zinc-900 dark:text-zinc-100">
                          {event.name}
                        </h3>
                        <span
                          className={`px-2 py-0.5 rounded-full text-xs font-semibold capitalize ${getTypeBadgeColor(event.type)}`}
                        >
                          {event.type}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
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
                        {isPast && (
                          <span className="px-2 py-0.5 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 rounded text-xs">
                            Past
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-zinc-700 dark:text-zinc-300 line-clamp-2 mt-2">
                    {event.description}
                  </p>
                  {event.location && (
                    <div className="flex items-center gap-1 text-xs text-zinc-500 dark:text-zinc-400 mt-2">
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
          })}
        </div>
      )}
    </div>
  );
}

