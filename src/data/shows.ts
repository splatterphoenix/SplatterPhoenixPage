export type Show = {
  date: string;
  displayDate: string;
  venue: string;
  city: string;
  details?: string;
  ticketUrl?: string;
};

// Add a show to this list and it will appear automatically on /shows.
// Date format must be YYYY-MM-DD so upcoming dates sort correctly.
export const upcomingShows: Show[] = [];

export const pastShows: Show[] = [
  {
    date: '2025-09-19',
    displayDate: 'Sep 19 · 2025',
    venue: 'Another Round Bar & Grill',
    city: 'Richmond, VA',
  },
  {
    date: '2025-06-06',
    displayDate: 'Jun 06 · 2025',
    venue: 'Bandito’s',
    city: 'Richmond, VA',
  },
];
