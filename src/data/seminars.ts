export type Seminar = {
  title: string;
  series: string;
  date: string;
  location?: string;
  url?: string;
};

// Add invited seminars here, newest first. Conference talks remain in talks.ts.
export const seminars: Seminar[] = [];
