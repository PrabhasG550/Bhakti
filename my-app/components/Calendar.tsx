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

  // Get default color for event type (for legend)
  const getTypeColor = (type: HinduEvent['type']): string => {
    switch (type) {
      case 'festival':
        return '#FF6B6B'; // Red/Coral
      case 'holiday':
        return '#4ECDC4'; // Teal
      case 'fast':
        return '#95E1D3'; // Light Green
      case 'ceremony':
        return '#F38181'; // Pink
      default:
        return '#FF6B6B';
    }
  };

  return (
    <div className="rounded-lg shadow-lg p-2 w-full mx-auto" style={{ backgroundColor: '#E0CBB7' }}>
      {/* Calendar Header */}
      <div className="flex items-center gap-2 mb-1.5">
        <button
          onClick={handlePrevMonth}
          className="p-1 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors"
          aria-label="Previous month"
        >
          <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button
          onClick={handleNextMonth}
          className="p-1 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors"
          aria-label="Next month"
        >
          <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
        
        <h2 className="text-2xl font-bold text-black">
          {format(currentDate, 'MMMM yyyy')}
        </h2>
      </div>

      {/* Week Day Headers */}
      <div className="grid grid-cols-7 gap-1 mb-1">
        {weekDays.map((day) => (
          <div
            key={day}
            className="text-center text-xs font-semibold text-zinc-600 dark:text-zinc-400 py-1"
          >
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-0.5">
        {/* Empty cells for days before month starts */}
        {emptyDays.map((_, index) => (
          <div key={`empty-${index}`} style={{ aspectRatio: '1.15', minHeight: '0' }} />
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
                p-0.5 rounded-lg border-2 transition-all
                hover:scale-105 hover:shadow-md
                ${isToday 
                  ? 'font-bold' 
                  : 'bg-white border-zinc-200 hover:border-zinc-300'
                }
              `}
              style={isToday ? { 
                aspectRatio: '1.15',
                minHeight: '0',
                backgroundColor: '#FFF7ED',
                borderColor: '#F97316'
              } : { aspectRatio: '1.15', minHeight: '0' }}
            >
              <div className="flex flex-col h-full">
                <span
                  className={`
                    text-[10px] mb-0.5 text-black leading-tight flex-shrink-0
                    ${isToday 
                      ? 'font-bold' 
                      : ''
                    }
                  `}
                >
                  {format(day, 'd')}
                </span>
                {hasEvents && (
                  <div className="flex flex-col gap-0.5 flex-1 items-start min-h-0 overflow-hidden">
                    {events.slice(0, 2).map((event) => (
                      <div
                        key={event.id}
                        className="w-full rounded-lg relative"
                        title={event.name}
                      >
                        <div
                          className="w-full h-3.5 rounded-lg relative overflow-hidden"
                          style={{ backgroundColor: event.color || getTypeColor(event.type) }}
                        >
                          <span 
                            className="absolute inset-0 text-[8px] font-bold text-white text-center leading-tight flex items-center justify-center px-0.5"
                            style={{ 
                              textShadow: '0.5px 0.5px 1px rgba(0,0,0,0.8), -0.5px -0.5px 1px rgba(0,0,0,0.8)'
                            }}
                          >
                            {event.name.length > 10 ? event.name.substring(0, 8) + '..' : event.name}
                          </span>
                        </div>
                      </div>
                    ))}
                    {events.length > 2 && (
                      <div className="w-full">
                        <div className="w-full h-3.5 rounded-lg bg-zinc-400 dark:bg-zinc-600 relative overflow-hidden" title={`${events.length - 2} more events`}>
                          <span className="absolute inset-0 text-[8px] font-bold text-white text-center leading-tight flex items-center justify-center px-0.5">
                            +{events.length - 2}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* Legend */}
      <div className="mt-1.5 pt-1.5 border-t border-zinc-300">
        <div className="text-[10px] font-semibold text-black mb-1">Legend:</div>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-1.5 text-[10px]">
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 rounded border border-blue-500 bg-zinc-200 flex-shrink-0"></div>
            <span className="text-zinc-700">Today</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: getTypeColor('festival') }}></div>
            <span className="text-zinc-700">Festival</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: getTypeColor('holiday') }}></div>
            <span className="text-zinc-700">Holiday</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: getTypeColor('fast') }}></div>
            <span className="text-zinc-700">Fast</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: getTypeColor('ceremony') }}></div>
            <span className="text-zinc-700">Ceremony</span>
          </div>
        </div>
      </div>
    </div>
  );
}

