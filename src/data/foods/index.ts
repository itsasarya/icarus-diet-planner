import type { Food } from '@/types/food'

const modules = import.meta.glob<{ default?: Food }>('./*.ts', {
  eager: true
})

const foods: Food[] = Object.entries(modules)
  .filter(([path]) =>
    !path.endsWith('index.ts') &&
    !path.endsWith('food.types.ts')
  )
  .map(([, mod]) => mod.default)
  .filter((f): f is Food => Boolean(f))

export default foods
