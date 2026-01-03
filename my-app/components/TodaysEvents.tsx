'use client';

import { format } from 'date-fns';
import { getHinduCalendarFunFact, getHinduDayName } from '@/data/hinduFunFacts';

export default function TodaysEvents() {
  const today = new Date();
  const funFact = getHinduCalendarFunFact(today);
  const dayName = getHinduDayName(today);

  return (
    <div className="bg-white rounded-lg shadow-lg p-3">
      <div className="mb-2">
        <h3 className="text-base font-bold text-black mb-0.5">
          Today's Insight
        </h3>
        <p className="text-xs text-zinc-600">
          {format(today, 'MMM d, yyyy')}
        </p>
        <p className="text-xs text-zinc-500">
          {dayName}
        </p>
      </div>

      <div className="bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-200 rounded-lg p-2.5">
        <div className="flex items-start gap-2">
          <div className="flex-shrink-0 mt-0.5">
            <svg className="w-4 h-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <div className="flex-1">
            <h4 className="text-xs font-semibold text-zinc-900 mb-1">
              Did You Know?
            </h4>
            <p className="text-xs text-zinc-700 leading-relaxed line-clamp-4">
              {funFact}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
