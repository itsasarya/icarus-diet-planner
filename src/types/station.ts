export type TechTier = 1 | 2 | 3 | 4 | 5;

export interface station {
  id: string;
  name: string;
  image: string;
  tier: TechTier;
}
