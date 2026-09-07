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
  article: { like: 45, love: 26, wow: 13 },
  'asagaya-look-up': { like: 27, love: 18, wow: 8 },
  'asagaya-second-street': { like: 28, love: 16, wow: 13 },
  'asagaya-handmade': { like: 48, love: 31, wow: 15 },
  'asagaya-crowd': { like: 38, love: 22, wow: 13 },
  'asagaya-imagination': { like: 26, love: 20, wow: 11 },
  'asagaya-details': { like: 20, love: 11, wow: 7 },
  'arena-article': { like: 62, love: 35, wow: 20 },
  'arena-drama': { like: 43, love: 24, wow: 22 },
  'arena-return': { like: 41, love: 27, wow: 16 },
  'index-object': { like: 35, love: 20, wow: 12 },
  'index-rayures': { like: 24, love: 16, wow: 8 },
  'index-ceramics': { like: 34, love: 26, wow: 15 },
  'homepage-cover': { like: 75, love: 41, wow: 21 },
  'homepage-exhibition': { like: 44, love: 24, wow: 13 },
  'homepage-ideas': { like: 34, love: 20, wow: 15 },
  'homepage-tokyo': { like: 57, love: 34, wow: 16 },
  'homepage-index': { like: 28, love: 19, wow: 9 },
};
