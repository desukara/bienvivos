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
  article: { like: 42, love: 24, wow: 12 },
  'asagaya-look-up': { like: 25, love: 17, wow: 7 },
  'asagaya-second-street': { like: 25, love: 14, wow: 12 },
  'asagaya-handmade': { like: 44, love: 29, wow: 14 },
  'asagaya-crowd': { like: 35, love: 20, wow: 12 },
  'asagaya-imagination': { like: 24, love: 18, wow: 10 },
  'asagaya-details': { like: 18, love: 10, wow: 6 },
  'arena-article': { like: 58, love: 33, wow: 19 },
  'arena-drama': { like: 40, love: 22, wow: 21 },
  'arena-return': { like: 38, love: 25, wow: 15 },
  'index-object': { like: 32, love: 18, wow: 11 },
  'index-rayures': { like: 22, love: 15, wow: 7 },
  'index-ceramics': { like: 31, love: 24, wow: 14 },
  'homepage-cover': { like: 70, love: 38, wow: 19 },
  'homepage-exhibition': { like: 41, love: 22, wow: 12 },
  'homepage-ideas': { like: 31, love: 18, wow: 14 },
  'homepage-tokyo': { like: 53, love: 32, wow: 15 },
  'homepage-index': { like: 26, love: 17, wow: 8 },
};
