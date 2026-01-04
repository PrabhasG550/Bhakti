'use client';

import { useState, useEffect, useRef } from 'react';
import { Temple } from '@/types/temple';
import { searchTemplesByLocation, findClosestTemples, getUserLocation } from '@/data/temples';

interface TempleSearchProps {
  onTempleSelect: (temple: Temple | null) => void;
  selectedTemple: Temple | null;
}

export default function TempleSearch({ onTempleSelect, selectedTemple }: TempleSearchProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Temple[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (searchQuery.trim()) {
      const results = searchTemplesByLocation(searchQuery);
      setSearchResults(results);
      setShowResults(true);
    } else {
      setSearchResults([]);
      setShowResults(false);
    }
  }, [searchQuery]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowResults(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLocationClick = async () => {
    setIsLoading(true);
    try {
      const location = await getUserLocation();
      if (location) {
        const closestTemples = findClosestTemples(location.latitude, location.longitude, 5);
        setSearchResults(closestTemples);
        setShowResults(true);
      } else {
        alert('Unable to get your location. Please enter a location manually.');
      }
    } catch (error) {
      alert('Error getting location. Please enter a location manually.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleTempleSelect = (temple: Temple) => {
    setSearchQuery(temple.name);
    setShowResults(false);
    onTempleSelect(temple);
  };

  const handleClear = () => {
    setSearchQuery('');
    setShowResults(false);
    onTempleSelect(null);
  };

  return (
    <div className="relative w-full" ref={searchRef}>
      <div className="flex gap-2">
        <div className="flex-1 relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <svg
              className="h-5 w-5 text-zinc-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => searchQuery && setShowResults(true)}
            placeholder="Search for a temple or enter your city..."
            className="w-full pl-10 pr-3 py-1.5 border-2 border-zinc-300 rounded-lg bg-white text-black placeholder-zinc-400 focus:outline-none focus:border-orange-500 transition-colors text-sm"
          />
          {searchQuery && (
            <button
              onClick={handleClear}
              className="absolute inset-y-0 right-0 pr-4 flex items-center text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          )}
        </div>
        <button
          onClick={handleLocationClick}
          disabled={isLoading}
          className="px-2.5 py-1.5 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-1.5 whitespace-nowrap text-xs"
        >
          <svg
            className="h-5 w-5"
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
          {isLoading ? 'Loading...' : 'Use Location'}
        </button>
      </div>

      {/* Search Results Dropdown */}
      {showResults && searchResults.length > 0 && (
        <div className="absolute z-50 w-full mt-2 bg-white dark:bg-zinc-800 border-2 border-zinc-200 dark:border-zinc-700 rounded-lg shadow-xl max-h-96 overflow-y-auto">
          {searchResults.map((temple) => (
            <button
              key={temple.id}
              onClick={() => handleTempleSelect(temple)}
              className={`w-full text-left px-4 py-3 hover:bg-orange-50 dark:hover:bg-zinc-700 transition-colors border-b border-zinc-100 dark:border-zinc-700 last:border-b-0 ${
                selectedTemple?.id === temple.id ? 'bg-orange-100 dark:bg-orange-900/30' : ''
              }`}
            >
              <div className="font-semibold text-zinc-900 dark:text-zinc-100">
                {temple.name}
              </div>
              <div className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
                {temple.location}, {temple.city}, {temple.state}
              </div>
              {temple.description && (
                <div className="text-xs text-zinc-500 dark:text-zinc-500 mt-1 line-clamp-1">
                  {temple.description}
                </div>
              )}
            </button>
          ))}
        </div>
      )}

      {showResults && searchQuery && searchResults.length === 0 && (
        <div className="absolute z-50 w-full mt-2 bg-white dark:bg-zinc-800 border-2 border-zinc-200 dark:border-zinc-700 rounded-lg shadow-xl p-4 text-center text-zinc-600 dark:text-zinc-400">
          No temples found. Try a different search term.
        </div>
      )}
    </div>
  );
}

