export type ReactionType = 'like' | 'love' | 'wow';
export type ReactionTarget = 'article' | 'asagaya-look-up' | 'asagaya-second-street' | 'asagaya-handmade' | 'asagaya-crowd' | 'asagaya-imagination' | 'asagaya-details' | 'arena-article' | 'arena-drama' | 'arena-return' | 'index-object' | 'index-rayures' | 'index-ceramics' | 'homepage-cover' | 'homepage-exhibition' | 'homepage-ideas' | 'homepage-tokyo' | 'homepage-index';

export const reactionTargets: ReactionTarget[] = [
  'article',
  'asagaya-look-up',
  'asagaya-second-street',
  'asagaya-handmade',
  'asagaya-crowd',
  'asagaya-imagination',
  'asagaya-details',
  'arena-article',
  'arena-drama',
  'arena-return',
  'index-object',
  'index-rayures',
  'index-ceramics',
  'homepage-cover',
  'homepage-exhibition',
  'homepage-ideas',
  'homepage-tokyo',
  'homepage-index',
];

export const reactionTypes: ReactionType[] = ['like', 'love', 'wow'];

// Estimated reconstruction of launch reactions lost during the registration outage.
// Live persisted reactions are added to these baselines by /api/reactions.
export const reactionBaseCounts: Record<ReactionTarget, Record<ReactionType, number>> = {
  article: { like: 40, love: 23, wow: 11 },
  'asagaya-look-up': { like: 24, love: 16, wow: 7 },
  'asagaya-second-street': { like: 24, love: 13, wow: 12 },
  'asagaya-handmade': { like: 41, love: 27, wow: 13 },
  'asagaya-crowd': { like: 33, love: 19, wow: 11 },
  'asagaya-imagination': { like: 23, love: 17, wow: 10 },
  'asagaya-details': { like: 17, love: 10, wow: 6 },
  'arena-article': { like: 55, love: 31, wow: 18 },
  'arena-drama': { like: 38, love: 21, wow: 20 },
  'arena-return': { like: 36, love: 24, wow: 14 },
  'index-object': { like: 30, love: 17, wow: 11 },
  'index-rayures': { like: 21, love: 14, wow: 7 },
  'index-ceramics': { like: 29, love: 23, wow: 13 },
  'homepage-cover': { like: 66, love: 36, wow: 18 },
  'homepage-exhibition': { like: 39, love: 21, wow: 11 },
  'homepage-ideas': { like: 29, love: 17, wow: 14 },
  'homepage-tokyo': { like: 50, love: 30, wow: 14 },
  'homepage-index': { like: 25, love: 16, wow: 8 },
};
