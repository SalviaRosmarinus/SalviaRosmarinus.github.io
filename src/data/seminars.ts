export type Seminar = {
  title: string;
  series: string;
  date: string;
  location?: string;
  url?: string;
};

// Add invited seminars here, newest first. Conference talks remain in talks.ts.
export const seminars: Seminar[] = [
  {
    title: 'Reducing Residual mass of Domain-Wall Fermions using Machine Learning',
    series: 'University of Bern seminar',
    date: '2026-10',
    location: 'Bern, Switzerland',
  },
  {
    title: 'K⁻d → πΛN reaction as a probe of hyperon-nucleon interaction',
    series: 'Seminar Theoretical Hadron Physics, University of Giessen',
    date: '2026-10-14',
    location: 'Giessen, Germany',
    url: 'https://www.uni-giessen.de/de/fbz/fb07/fachgebiete/physik/institute/theorie/inst/events/friday/talks_ws2026/yasunaga',
  },
  {
    title: 'Reducing Residual mass of Domain-Wall Fermions using Machine Learning',
    series: 'Nuclear Physics Seminar, Yukawa Institute for Theoretical Physics, Kyoto University',
    date: '2026-07-23',
    location: 'Kyoto, Japan',
    url: 'https://www.yukawa.kyoto-u.ac.jp/seminar/s53671?lang=en-GB',
  },
];
