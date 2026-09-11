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
  article: { like: 54, love: 32, wow: 16 },
  'asagaya-look-up': { like: 33, love: 21, wow: 9 },
  'asagaya-second-street': { like: 34, love: 20, wow: 16 },
  'asagaya-handmade': { like: 60, love: 37, wow: 18 },
  'asagaya-crowd': { like: 47, love: 25, wow: 17 },
  'asagaya-imagination': { like: 32, love: 25, wow: 12 },
  'asagaya-details': { like: 23, love: 14, wow: 7 },
  'arena-article': { like: 74, love: 41, wow: 23 },
  'arena-drama': { like: 52, love: 28, wow: 26 },
  'arena-return': { like: 50, love: 33, wow: 18 },
  'index-object': { like: 43, love: 24, wow: 15 },
  'index-rayures': { like: 29, love: 19, wow: 8 },
  'index-ceramics': { like: 43, love: 32, wow: 18 },
  'homepage-cover': { like: 90, love: 50, wow: 25 },
  'homepage-exhibition': { like: 53, love: 30, wow: 15 },
  'homepage-ideas': { like: 41, love: 23, wow: 18 },
  'homepage-tokyo': { like: 69, love: 40, wow: 19 },
  'homepage-index': { like: 34, love: 22, wow: 10 },
};
