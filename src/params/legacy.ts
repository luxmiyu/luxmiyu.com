import { tools } from '$lib/tools'

export function match(value: string): boolean {
  const tool = tools.find((tool) => tool.name === value)
  if (!tool) return false

  return tool.status === 'legacy' || tool.status === 'deprecated'
}
