'use client';

import { useState } from 'react';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay, addMonths, subMonths, getDay } from 'date-fns';
import { HinduEvent } from '@/types/event';
import { getEventsForDate } from '@/data/hinduEvents';

interface CalendarProps {
  onDateClick: (date: Date, events: HinduEvent[]) => void;
}

export default function Calendar({ onDateClick }: CalendarProps) {
  const [currentDate, setCurrentDate] = useState(new Date());

  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const daysInMonth = eachDayOfInterval({ start: monthStart, end: monthEnd });
  
  // Get first day of week (0 = Sunday, 1 = Monday, etc.)
  const firstDayOfWeek = getDay(monthStart);
  
  // Create empty cells for days before month starts
  const emptyDays = Array.from({ length: firstDayOfWeek }, (_, i) => i);

  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const handlePrevMonth = () => {
    setCurrentDate(subMonths(currentDate, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(addMonths(currentDate, 1));
  };

  const handleDateClick = (date: Date) => {
    const events = getEventsForDate(date);
    onDateClick(date, events);
  };

  return (
    <div className="rounded-lg shadow-lg p-3 w-full mx-auto" style={{ backgroundColor: '#E0CBB7' }}>
      {/* Calendar Header */}
      <div className="flex items-center justify-between mb-2">
        <button
          onClick={handlePrevMonth}
          className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors"
          aria-label="Previous month"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <h2 className="text-lg font-bold text-black">
          {format(currentDate, 'MMMM yyyy')}
        </h2>
        
        <button
          onClick={handleNextMonth}
          className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors"
          aria-label="Next month"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Week Day Headers */}
      <div className="grid grid-cols-7 gap-1.5 mb-1.5">
        {weekDays.map((day) => (
          <div
            key={day}
            className="text-center text-sm font-semibold text-zinc-600 dark:text-zinc-400 py-2"
          >
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-1">
        {/* Empty cells for days before month starts */}
        {emptyDays.map((_, index) => (
          <div key={`empty-${index}`} className="aspect-square" />
        ))}

        {/* Days of the month */}
        {daysInMonth.map((day) => {
          const events = getEventsForDate(day);
          const isToday = isSameDay(day, new Date());
          const hasEvents = events.length > 0;

          return (
            <button
              key={day.toISOString()}
              onClick={() => handleDateClick(day)}
              className={`
                aspect-square p-1 rounded-lg border-2 transition-all
                hover:scale-105 hover:shadow-md
                bg-white
                ${isToday 
                  ? 'border-blue-500 font-bold' 
                  : 'border-zinc-200 hover:border-zinc-300'
                }
              `}
            >
              <div className="flex flex-col h-full">
                <span
                  className={`
                    text-sm mb-1 text-black
                    ${isToday 
                      ? 'font-bold' 
                      : ''
                    }
                  `}
                >
                  {format(day, 'd')}
                </span>
                {hasEvents && (
                  <div className="flex flex-wrap gap-1 flex-1 items-start">
                    {events.slice(0, 2).map((event) => (
                      <div
                        key={event.id}
                        className="w-full h-1.5 rounded-full"
                        style={{ backgroundColor: event.color || '#FF6B6B' }}
                        title={event.name}
                      />
                    ))}
                    {events.length > 2 && (
                      <div className="w-full h-1.5 rounded-full bg-zinc-400 dark:bg-zinc-600" title={`${events.length - 2} more events`} />
                    )}
                  </div>
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* Legend */}
      <div className="mt-2 pt-1.5 border-t border-zinc-200 dark:border-zinc-700">
        <div className="flex items-center gap-3 text-xs text-zinc-600 dark:text-zinc-400">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded border-2 border-blue-500 bg-blue-50 dark:bg-blue-900/30"></div>
            <span>Today</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 border border-zinc-200 dark:border-zinc-700"></div>
            <span>Has Events</span>
          </div>
        </div>
      </div>
    </div>
  );
}

