'use client';

import { format } from 'date-fns';
import { HinduEvent } from '@/types/event';

interface EventDetailModalProps {
  events: HinduEvent[];
  selectedDate: Date | null;
  isOpen: boolean;
  onClose: () => void;
  savedEventIds?: string[];
  onToggleSave?: (eventId: string) => void;
  onBack?: () => void;
  showBackButton?: boolean;
}

export default function EventDetailModal({ events, selectedDate, isOpen, onClose, savedEventIds = [], onToggleSave, onBack, showBackButton = false }: EventDetailModalProps) {
  if (!isOpen || !selectedDate || events.length === 0) return null;

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
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
        <div className="rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col pointer-events-auto" style={{ backgroundColor: '#E0CBB7' }}>
          {/* Header */}
          <div className="p-6 border-b border-zinc-300 flex items-center justify-between">
            <div className="flex items-center gap-3">
              {showBackButton && onBack && (
                <button
                  onClick={onBack}
                  className="p-2 hover:bg-white/50 rounded-lg transition-colors"
                  aria-label="Back to temple"
                >
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
              )}
              <div>
                <h2 className="text-2xl font-bold text-black">
                  Events on {format(selectedDate, 'MMMM d, yyyy')}
                </h2>
                <p className="text-sm text-black mt-1">
                  {events.length} event{events.length !== 1 ? 's' : ''} found
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/50 rounded-lg transition-colors"
              aria-label="Close"
            >
              <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {events.map((event) => (
              <div
                key={event.id}
                className="bg-white border border-zinc-300 rounded-xl p-6 hover:shadow-lg transition-shadow"
                style={{
                  borderLeftWidth: '4px',
                  borderLeftColor: event.color || '#FF6B6B',
                }}
              >
                {/* Event Image */}
                {event.imageUrl && (
                  <div className="mb-4 rounded-lg overflow-hidden">
                    <img
                      src={event.imageUrl}
                      alt={event.name}
                      className="w-full h-64 object-cover"
                      onError={(e) => {
                        // Fallback if image fails to load
                        (e.target as HTMLImageElement).style.display = 'none';
                      }}
                    />
                  </div>
                )}

                {/* Event Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-black">
                        {event.name}
                      </h3>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold capitalize ${getTypeBadgeColor(event.type)}`}
                      >
                        {event.type}
                      </span>
                    </div>
                    {event.location && (
                      <p className="text-sm text-black flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {event.location}
                      </p>
                    )}
                  </div>
                  {/* Bookmark Button */}
                  {onToggleSave && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleSave(event.id);
                      }}
                      className="ml-4 p-2 hover:bg-white/50 rounded transition-colors flex-shrink-0"
                      aria-label={savedEventIds.includes(event.id) ? 'Unsave event' : 'Save event'}
                    >
                      <svg
                        className={`w-6 h-6 ${savedEventIds.includes(event.id) ? 'text-orange-500 fill-orange-500' : 'text-zinc-600'}`}
                        fill={savedEventIds.includes(event.id) ? 'currentColor' : 'none'}
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

                {/* Description */}
                <p className="text-black mb-4 leading-relaxed">
                  {event.description}
                </p>

                {/* Significance */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-black mb-2">
                    Significance:
                  </h4>
                  <p className="text-black text-sm leading-relaxed">
                    {event.significance}
                  </p>
                </div>

                {/* Cultural Context */}
                {event.culturalContext && (
                  <div className="mb-4 p-4 bg-orange-50 rounded-lg border-l-4 border-orange-400">
                    <h4 className="text-sm font-semibold text-black mb-2 flex items-center gap-2">
                      <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                      Cultural Significance & Learning
                    </h4>
                    <p className="text-black text-sm leading-relaxed">
                      {event.culturalContext}
                    </p>
                  </div>
                )}

                {/* Traditions */}
                {event.traditions && event.traditions.length > 0 && (
                  <div>
                    <h4 className="text-sm font-semibold text-black mb-2">
                      Traditions & Practices:
                    </h4>
                    <ul className="list-disc list-inside space-y-1">
                      {event.traditions.map((tradition, index) => (
                        <li key={index} className="text-black text-sm">
                          {tradition}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

