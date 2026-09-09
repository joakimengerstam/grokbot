export type Lang = 'en' | 'sv';

/** English path → Swedish path (and reverse lookup). */
const PAIRS: [string, string][] = [
  ['/', '/sv'],
  ['/setup', '/sv/installning'],
  ['/best-practices', '/sv/best-practices'],
  ['/examples', '/sv/exempel'],
  ['/about', '/sv/om'],
  ['/news', '/sv/nyheter'],
];

const enToSv = new Map(PAIRS);
const svToEn = new Map(PAIRS.map(([en, sv]) => [sv, en]));

export function normalizePath(pathname: string): string {
  const p = pathname.replace(/\/$/, '') || '/';
  return p;
}

export function detectLang(pathname: string): Lang {
  const p = normalizePath(pathname);
  return p === '/sv' || p.startsWith('/sv/') ? 'sv' : 'en';
}

/** Equivalent page in the other language. */
export function alternatePath(pathname: string): string {
  const p = normalizePath(pathname);
  if (enToSv.has(p)) return enToSv.get(p)!;
  if (svToEn.has(p)) return svToEn.get(p)!;
  if (p.startsWith('/sv/')) {
    const rest = p.slice(3);
    return rest || '/';
  }
  return '/sv' + (p === '/' ? '' : p);
}

export const NAV_EN = [
  { href: '/', label: 'Home' },
  { href: '/setup', label: 'Setup' },
  { href: '/best-practices', label: 'Best practices' },
  { href: '/examples', label: 'Examples' },
  { href: '/news', label: 'News' },
  { href: '/about', label: 'About' },
] as const;

export const NAV_SV = [
  { href: '/sv', label: 'Hem' },
  { href: '/sv/installning', label: 'Kom igång' },
  { href: '/sv/best-practices', label: 'Best practices' },
  { href: '/sv/exempel', label: 'Exempel' },
  { href: '/sv/nyheter', label: 'Nyheter' },
  { href: '/sv/om', label: 'Om' },
] as const;

export const COPY = {
  en: {
    defaultDescription:
      "English guide to Grok Bot, xAI's app for AI coworkers with their own cloud computer, plugins, skills and routines. From Roore AB — we build the same flows for invoices, orders and email in your systems.",
    skipToContent: 'Skip to content',
    mainNav: 'Main menu',
    book15: 'Book 15 min',
    book15Roore: 'Book 15 min with Roore',
    menu: 'Menu',
    footerBlurb:
      'A guide from Roore AB, Stockholm. We build flows that prepare invoices, orders and email in your systems — you approve before anything proceeds.',
    book15Link: 'Book 15 minutes',
    disclaimer:
      'Unofficial project. Not affiliated with xAI or Cursor. Grok and Cursor are trademarks of their respective owners.',
    footerNav: 'Footer',
    ogLocale: 'en_US',
    inLanguage: 'en',
  },
  sv: {
    defaultDescription:
      'Svensk guide till Grok Bot, xAI:s app för AI-kollegor med egen molndator, plugins, skills och routines. Från Roore AB, som bygger samma flöden för fakturor, ordrar och mejl i era system.',
    skipToContent: 'Hoppa till innehåll',
    mainNav: 'Huvudmeny',
    book15: 'Boka 15 min',
    book15Roore: 'Boka 15 min med Roore',
    menu: 'Meny',
    footerBlurb:
      'En guide från Roore AB, Stockholm. Vi bygger flöden som förbereder fakturor, ordrar och mejl i era system – ni godkänner innan något går vidare.',
    book15Link: 'Boka 15 minuter',
    disclaimer:
      'Inofficiellt projekt. Ej affilierat med xAI eller Cursor. Grok och Cursor är varumärken tillhörande sina respektive ägare.',
    footerNav: 'Sidfot',
    ogLocale: 'sv_SE',
    inLanguage: 'sv-SE',
  },
} as const;
