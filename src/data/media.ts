export type MediaImage = {
  src: string;
  alt: string;
  layout?: 'wide' | 'tall' | 'standard';
  visible?: boolean;
};

// Reorder, hide, or add gallery images here without touching the page layout.
export const mediaImages: MediaImage[] = [
  { src: '/images/live-full-band.jpg', alt: 'Splatter Phoenix performing live', layout: 'wide' },
  { src: '/images/band-stairs.jpg', alt: 'Splatter Phoenix group portrait in Richmond', layout: 'tall' },
  { src: '/images/live-drums.jpg', alt: 'Live drums and vocals', layout: 'standard' },
  { src: '/images/band-city.jpg', alt: 'The band exploring Richmond', layout: 'wide' },
  { src: '/images/live-guitar.jpg', alt: 'Guitar performance under stage lights', layout: 'standard' },
  { src: '/images/band-rva-wide.jpg', alt: 'Splatter Phoenix in downtown Richmond', layout: 'standard' },
];
