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
  article: { like: 48, love: 28, wow: 14 },
  'asagaya-look-up': { like: 29, love: 19, wow: 8 },
  'asagaya-second-street': { like: 30, love: 17, wow: 14 },
  'asagaya-handmade': { like: 52, love: 33, wow: 16 },
  'asagaya-crowd': { like: 41, love: 23, wow: 14 },
  'asagaya-imagination': { like: 28, love: 22, wow: 11 },
  'asagaya-details': { like: 21, love: 12, wow: 7 },
  'arena-article': { like: 66, love: 37, wow: 21 },
  'arena-drama': { like: 46, love: 25, wow: 23 },
  'arena-return': { like: 44, love: 29, wow: 16 },
  'index-object': { like: 38, love: 21, wow: 13 },
  'index-rayures': { like: 26, love: 17, wow: 8 },
  'index-ceramics': { like: 37, love: 28, wow: 16 },
  'homepage-cover': { like: 80, love: 44, wow: 22 },
  'homepage-exhibition': { like: 47, love: 26, wow: 13 },
  'homepage-ideas': { like: 36, love: 21, wow: 16 },
  'homepage-tokyo': { like: 61, love: 36, wow: 17 },
  'homepage-index': { like: 30, love: 20, wow: 9 },
};
