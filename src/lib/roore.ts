export const ROORE_URL = 'https://roore.se';
export const ROORE_MAIL = 'joakim.engerstam@gmail.com';

/** Mailto that identifies where the lead came from. */
export const rooreMailto = (source = 'grokbot.se') =>
  `mailto:${ROORE_MAIL}?subject=${encodeURIComponent(`15 minuter – via ${source}`)}`;
