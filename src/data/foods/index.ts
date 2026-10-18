import type { Food } from '@/types/food'
import catalog from './wiki-statistics.json'

type FoodRecord = Omit<Food, 'image'> & {
  imageUrl?: string
  imageAsset?: string
}

const foods = Object.values(catalog as Record<string, FoodRecord>).map((record) => {
  const { imageUrl, ...food } = record
  return {
    ...food,
    image: imageUrl,
  }
})

export default foods
