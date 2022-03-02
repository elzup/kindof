import { kindof as m } from '../index'

test('correctly types', () => {
  expect(m(undefined)).toBe(`undefined`)
  expect(m(true)).toBe(`boolean`)
  expect(m(123)).toBe(`number`)
  expect(m(1000n)).toBe(`bigint`)
  expect(m('hello')).toBe(`string`)
  expect(m(Symbol('s'))).toBe(`symbol`)
  expect(m(() => 0)).toBe(`function`)
  expect(m({ a: 1 })).toBe(`object`)
  expect(m([1, 2, 3])).toBe(`array`)
  expect(m(null)).toBe(`null`)
})
