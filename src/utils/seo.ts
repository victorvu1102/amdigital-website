export const siteName = 'AM Digital';
export const defaultDescription = 'AI-powered GTM operations for global brands, DTC ecommerce and tech startups—from Hanoi to the world.';

export function absoluteUrl(path: string, origin: URL) {
  return new URL(path, origin).toString();
}
