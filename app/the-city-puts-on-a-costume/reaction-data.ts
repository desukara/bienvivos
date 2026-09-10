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
  article: { like: 51, love: 30, wow: 15 },
  'asagaya-look-up': { like: 31, love: 20, wow: 9 },
  'asagaya-second-street': { like: 32, love: 19, wow: 15 },
  'asagaya-handmade': { like: 56, love: 35, wow: 17 },
  'asagaya-crowd': { like: 44, love: 24, wow: 16 },
  'asagaya-imagination': { like: 30, love: 24, wow: 12 },
  'asagaya-details': { like: 22, love: 13, wow: 7 },
  'arena-article': { like: 70, love: 39, wow: 22 },
  'arena-drama': { like: 49, love: 26, wow: 25 },
  'arena-return': { like: 47, love: 31, wow: 17 },
  'index-object': { like: 40, love: 22, wow: 14 },
  'index-rayures': { like: 27, love: 18, wow: 8 },
  'index-ceramics': { like: 40, love: 30, wow: 17 },
  'homepage-cover': { like: 85, love: 47, wow: 24 },
  'homepage-exhibition': { like: 50, love: 28, wow: 14 },
  'homepage-ideas': { like: 38, love: 22, wow: 17 },
  'homepage-tokyo': { like: 65, love: 38, wow: 18 },
  'homepage-index': { like: 32, love: 21, wow: 10 },
};
