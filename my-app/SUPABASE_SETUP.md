# Supabase Setup for Bhakti Project

## Overview

The Bhakti project has been successfully connected to Supabase with the dummy data from TypeScript files migrated to the database. The site is configured to work seamlessly with fallback to dummy data if Supabase is unavailable.

## Database Schema

The Supabase database has been set up with the following tables:

1. **events** - Stores Hindu festivals and events
2. **temples** - Stores temple information
3. **event_temples** - Junction table for many-to-many relationship between events and temples
4. **users** - For future user authentication (currently unused)
5. **saved_events** - For user-saved events (currently unused)
6. **subscribed_temples** - For user temple subscriptions (currently unused)
7. **temple_admins** - For temple admin management (currently unused)

## Data Migration

All dummy data has been successfully migrated:
- ✅ 25 events from `data/hinduEvents.ts`
- ✅ 12 temples from `data/temples.ts`
- ✅ 39 event-temple relationships

The data uses deterministic UUIDs based on the original string IDs (e.g., '1' becomes '00000000-0000-0000-0000-000000000001') to maintain relationships.

## Configuration

The Supabase connection is configured in `lib/supabase.ts` with the following defaults:
- **URL**: `https://reuhqoingnkcnbhkvxoq.supabase.co`
- **Anon Key**: Configured (see `.env.local.example`)

You can override these by creating a `.env.local` file (copy from `.env.local.example`).

## Usage

### Current Implementation

The site currently uses the dummy data files directly in components for maximum compatibility. The Supabase integration is ready but not yet active in all components.

### Utility Functions

The following utility functions are available in `lib/`:

- **`lib/supabase.ts`** - Supabase client configuration and ID conversion helpers
- **`lib/db-events.ts`** - Functions to fetch events from Supabase with fallback to dummy data
- **`lib/db-temples.ts`** - Functions to fetch temples from Supabase with fallback to dummy data
- **`lib/hooks.ts`** - React hooks for fetching data (for future use)

### Example Usage

```typescript
import { getAllEvents } from '@/lib/db-events';
import { getAllTemples } from '@/lib/db-temples';

// Fetch events (with automatic fallback to dummy data)
const events = await getAllEvents();

// Fetch temples (with automatic fallback to dummy data)
const temples = await getAllTemples();
```

## Migration Path

To fully migrate components to use Supabase data:

1. **Update components** to accept data as props instead of importing directly
2. **Use the hooks** in `lib/hooks.ts` in parent components
3. **Pass data** down to child components as props

Example:
```typescript
import { useEvents, useTemples } from '@/lib/hooks';

function MyComponent() {
  const { events, loading } = useEvents();
  const { temples, loading: templesLoading } = useTemples();
  
  // Use events and temples from Supabase (with fallback)
}
```

## Schema Differences

There are some differences between the TypeScript types and the database schema:

1. **IDs**: Database uses UUIDs, TypeScript uses string IDs. Conversion functions are provided.
2. **opening_hours**: Database stores as JSONB `{"opening_time": "...", "closing_time": "..."}`, TypeScript has separate `openingTime` and `closingTime` fields.
3. **image_url**: Not stored in database (was in TypeScript data).
4. **address**: Not stored in database (was in TypeScript data).

The utility functions handle these conversions automatically.

## Notes

- **User Data**: Currently not available, so user-specific features (saved events, subscriptions) are disabled.
- **Error Handling**: All database functions have fallback to dummy data to ensure the site never breaks.
- **Performance**: Components using dummy data directly will load faster, but won't reflect database updates.

## Next Steps

1. ✅ Database schema created
2. ✅ Dummy data migrated
3. ✅ Supabase client installed
4. ✅ Utility functions created
5. ⏳ Update components to use Supabase (optional - site works as-is)
6. ⏳ Enable user authentication (when needed)
7. ⏳ Implement user features (saved events, subscriptions)

