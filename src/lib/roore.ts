export const ROORE_URL = 'https://roore.se';
export const ROORE_MAIL = 'joakim.engerstam@roore.se';

/** Real public pages on roore.se. Do not invent paths. */
export const ROORE_PAGES = {
  home: 'https://roore.se/',
  aiMedarbetare: 'https://roore.se/ai-medarbetare/',
  mejlArenden: 'https://roore.se/mejl-arenden/',
  leverantorsfakturor: 'https://roore.se/leverantorsfakturor-fortnox/',
  orderFranMejl: 'https://roore.se/order-fran-mejl/',
  bokforing: 'https://roore.se/bokforing/',
  pilot: 'https://roore.se/pilot/',
} as const;

/** Mailto that identifies where the lead came from. */
export const rooreMailto = (source = 'grokbot.se', lang: 'en' | 'sv' = 'en') => {
  const subject =
    lang === 'sv'
      ? `15 minuter – via ${source}`
      : `15 minutes – via ${source}`;
  return `mailto:${ROORE_MAIL}?subject=${encodeURIComponent(subject)}`;
};
