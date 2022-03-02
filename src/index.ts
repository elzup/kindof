export const kindof = (v: unknown) => {
  switch (typeof v) {
    case 'undefined':
      return 'undefined'
    case 'boolean':
      return 'boolean'
    case 'number':
      return 'number'
    case 'bigint':
      return 'bigint'
    case 'string':
      return 'string'
    case 'symbol':
      return 'symbol'
    case 'function':
      return 'function'
    case 'object':
      if (v === null) return 'null'
      if (Array.isArray(v)) return 'array'
      return 'object'
    default:
      return 'unknown'
  }
}
