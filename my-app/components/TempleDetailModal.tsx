'use client';

import { format } from 'date-fns';
import { Temple } from '@/types/temple';
import { HinduEvent } from '@/types/event';
import { hinduEvents } from '@/data/hinduEvents';

interface TempleDetailModalProps {
  temple: Temple | null;
  isOpen: boolean;
  onClose: () => void;
  isSubscribed?: boolean;
  onToggleSubscribe?: (templeId: string) => void;
  savedEventIds?: string[];
  onToggleSave?: (eventId: string) => void;
  onEventClick?: (event: HinduEvent) => void;
}

export default function TempleDetailModal({ temple, isOpen, onClose, isSubscribed = false, onToggleSubscribe, savedEventIds = [], onToggleSave, onEventClick }: TempleDetailModalProps) {

  if (!isOpen || !temple) return null;

  // Get events for this temple
  const getTempleEvents = (): HinduEvent[] => {
    if (temple.featuredEvents) {
      return hinduEvents.filter((event) => temple.featuredEvents?.includes(event.id));
    }
    return [];
  };

  const templeEvents = getTempleEvents();

  // Determine if temple is currently open
  const isOpenNow = () => {
    if (!temple.openingTime || !temple.closingTime) return null;
    
    const now = new Date();
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();
    const currentTime = currentHour * 60 + currentMinute;
    
    const openMatch = temple.openingTime.match(/(\d+):(\d+)\s*(AM|PM)/i);
    if (!openMatch) return null;
    
    let openHour = parseInt(openMatch[1]);
    const openMinute = parseInt(openMatch[2]);
    const openPeriod = openMatch[3].toUpperCase();
    
    if (openPeriod === 'PM' && openHour !== 12) openHour += 12;
    if (openPeriod === 'AM' && openHour === 12) openHour = 0;
    const openTime = openHour * 60 + openMinute;
    
    const closeMatch = temple.closingTime.match(/(\d+):(\d+)\s*(AM|PM)/i);
    if (!closeMatch) return null;
    
    let closeHour = parseInt(closeMatch[1]);
    const closeMinute = parseInt(closeMatch[2]);
    const closePeriod = closeMatch[3].toUpperCase();
    
    if (closePeriod === 'PM' && closeHour !== 12) closeHour += 12;
    if (closePeriod === 'AM' && closeHour === 12) closeHour = 0;
    let closeTime = closeHour * 60 + closeMinute;
    
    if (closeTime < openTime) {
      closeTime += 24 * 60;
      if (currentTime < openTime) {
        const prevDayCurrentTime = currentTime + 24 * 60;
        return prevDayCurrentTime >= openTime && prevDayCurrentTime < closeTime;
      }
    }
    
    return currentTime >= openTime && currentTime < closeTime;
  };

  const isCurrentlyOpen = isOpenNow();
  const address = temple.address || `${temple.location}, ${temple.city}, ${temple.state}`;

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

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
        <div className="rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col pointer-events-auto" style={{ backgroundColor: '#E0CBB7' }}>
          {/* Header */}
          <div className="p-6 border-b border-zinc-300 flex items-center justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-3">
                <h2 className="text-2xl font-bold text-black">
                  {temple.name}
                </h2>
                {/* Bookmark Button */}
                {onToggleSubscribe && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleSubscribe(temple.id);
                    }}
                    className="p-2 hover:bg-white/50 rounded transition-colors"
                    aria-label={isSubscribed ? 'Unsubscribe from temple' : 'Subscribe to temple'}
                  >
                    <svg
                      className={`w-6 h-6 ${isSubscribed ? 'text-orange-500 fill-orange-500' : 'text-zinc-600'}`}
                      fill={isSubscribed ? 'currentColor' : 'none'}
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
                )}
              </div>
              <p className="text-sm text-black mt-1">
                {address}
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/50 rounded-lg transition-colors ml-4"
              aria-label="Close"
            >
              <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {/* Temple Image */}
            {temple.imageUrl && (
              <div className="w-full h-64 rounded-lg overflow-hidden">
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

            {/* Opening/Closing Hours */}
            {temple.openingTime && (
              <div className="bg-white rounded-lg p-4">
                <h3 className="text-lg font-bold text-black mb-2">Hours</h3>
                {isCurrentlyOpen !== null && (
                  <div className="flex items-center gap-2">
                    <span className={`font-bold ${isCurrentlyOpen ? 'text-green-600' : 'text-red-600'}`}>
                      {isCurrentlyOpen ? 'Open' : 'Closed'}
                    </span>
                    <span className="text-black font-bold">·</span>
                    <span className="text-black font-bold">
                      {isCurrentlyOpen ? `Closes ${temple.closingTime}` : `Opens ${temple.openingTime}`}
                    </span>
                  </div>
                )}
                <p className="text-sm text-black mt-2">
                  Open: {temple.openingTime} - Close: {temple.closingTime}
                </p>
              </div>
            )}

            {/* Description */}
            {temple.description && (
              <div className="bg-white rounded-lg p-4">
                <h3 className="text-lg font-bold text-black mb-2">About This Temple</h3>
                <p className="text-black leading-relaxed">
                  {temple.description}
                </p>
              </div>
            )}

            {/* Upcoming Events */}
            <div className="bg-white rounded-lg p-4">
              <h3 className="text-lg font-bold text-black mb-4">Upcoming Events</h3>
              
              {templeEvents.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-black">No events available for this temple.</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {templeEvents
                    .filter((event) => new Date(event.date) >= new Date())
                    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
                    .map((event) => {
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
                            <div className="w-full h-32 overflow-hidden">
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
                                  <h4 className="font-bold text-black">
                                    {event.name}
                                  </h4>
                                  <span
                                    className={`px-2 py-0.5 rounded-full text-xs font-semibold capitalize ${getTypeBadgeColor(event.type)}`}
                                  >
                                    {event.type}
                                  </span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-black">
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
                              {/* Bookmark Button */}
                              {onToggleSave && (
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    onToggleSave(event.id);
                                  }}
                                  className="ml-2 p-1.5 hover:bg-zinc-100 rounded transition-colors flex-shrink-0"
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
                              )}
                            </div>
                            <p className="text-sm text-black line-clamp-2 mt-2">
                              {event.description}
                            </p>
                            {event.location && (
                              <div className="flex items-center gap-1 text-xs text-zinc-600 mt-2">
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
                  {templeEvents.filter((event) => new Date(event.date) >= new Date()).length === 0 && (
                    <div className="text-center py-8">
                      <p className="text-black">No upcoming events for this temple.</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

