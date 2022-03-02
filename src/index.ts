const directList = [
  'undefined',
  'boolean',
  'number',
  'bigint',
  'string',
  'symbol',
  'function',
]

export const kindof = (v: unknown) => {
  const tv = typeof v

  if (directList.includes(tv)) return tv
  switch (typeof v) {
    case 'object':
      if (v === null) return 'null'
      if (Array.isArray(v)) return 'array'
      return 'object'
    default:
      return 'unknown'
  }
}
