'use client';

import { Temple } from '@/types/temple';

interface TempleCardProps {
  temple: Temple;
  isSubscribed?: boolean;
  onToggleSubscribe?: (templeId: string) => void;
}

export default function TempleCard({ temple, isSubscribed = false, onToggleSubscribe }: TempleCardProps) {
  // Determine if temple is currently open
  const isOpen = () => {
    if (!temple.openingTime || !temple.closingTime) return null;
    
    const now = new Date();
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();
    const currentTime = currentHour * 60 + currentMinute; // Convert to minutes
    
    // Parse opening time (format: "4:30 AM" or "04:30 AM")
    const openMatch = temple.openingTime.match(/(\d+):(\d+)\s*(AM|PM)/i);
    if (!openMatch) return null;
    
    let openHour = parseInt(openMatch[1]);
    const openMinute = parseInt(openMatch[2]);
    const openPeriod = openMatch[3].toUpperCase();
    
    if (openPeriod === 'PM' && openHour !== 12) openHour += 12;
    if (openPeriod === 'AM' && openHour === 12) openHour = 0;
    const openTime = openHour * 60 + openMinute;
    
    // Parse closing time
    const closeMatch = temple.closingTime.match(/(\d+):(\d+)\s*(AM|PM)/i);
    if (!closeMatch) return null;
    
    let closeHour = parseInt(closeMatch[1]);
    const closeMinute = parseInt(closeMatch[2]);
    const closePeriod = closeMatch[3].toUpperCase();
    
    if (closePeriod === 'PM' && closeHour !== 12) closeHour += 12;
    if (closePeriod === 'AM' && closeHour === 12) closeHour = 0;
    let closeTime = closeHour * 60 + closeMinute;
    
    // Handle temples that close after midnight
    if (closeTime < openTime) {
      closeTime += 24 * 60; // Add 24 hours
      if (currentTime < openTime) {
        // Before opening, check if we're in the previous day's hours
        const prevDayCurrentTime = currentTime + 24 * 60;
        return prevDayCurrentTime >= openTime && prevDayCurrentTime < closeTime;
      }
    }
    
    return currentTime >= openTime && currentTime < closeTime;
  };

  const isCurrentlyOpen = isOpen();
  const address = temple.address || `${temple.location}, ${temple.city}, ${temple.state}`;

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mt-3 border border-zinc-200">
      <div className="flex gap-4">
        {/* Temple Image */}
        {temple.imageUrl && (
          <div className="flex-shrink-0">
            <img
              src={temple.imageUrl}
              alt={temple.name}
              className="w-24 h-24 rounded-lg object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
          </div>
        )}
        
        {/* Temple Information */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-lg font-bold text-black">
              {temple.name}
            </h3>
            {/* Subscribe/Unsubscribe Button */}
            {onToggleSubscribe && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onToggleSubscribe(temple.id);
                }}
                className="ml-2 p-1.5 hover:bg-zinc-100 rounded transition-colors flex-shrink-0"
                aria-label={isSubscribed ? 'Unsubscribe from temple' : 'Subscribe to temple'}
              >
                <svg
                  className={`w-5 h-5 ${isSubscribed ? 'text-orange-500 fill-orange-500' : 'text-zinc-400'}`}
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
          
          {/* Open/Close Status */}
          {temple.openingTime && (
            <div className="mb-2 flex items-center gap-1">
              {isCurrentlyOpen !== null && (
                <>
                  <span className={`font-bold ${isCurrentlyOpen ? 'text-green-600' : 'text-red-600'}`}>
                    {isCurrentlyOpen ? 'Open' : 'Closed'}
                  </span>
                  <span className="text-black font-bold">·</span>
                  <span className="text-black font-bold">
                    {isCurrentlyOpen ? `Closes ${temple.closingTime}` : `Opens ${temple.openingTime}`}
                  </span>
                </>
              )}
            </div>
          )}
          
          {/* Address */}
          <p className="text-sm text-zinc-600 mb-1">
            {address}
          </p>
          
          {/* Description (optional) */}
          {temple.description && (
            <p className="text-sm text-zinc-500 line-clamp-1">
              {temple.description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

