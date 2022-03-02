export const kindof = (v: unknown) =>
  v === null ? 'null' : Array.isArray(v) ? 'array' : typeof v
