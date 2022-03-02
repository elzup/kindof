import { kindof as m } from '../index'

test('snapshot', () => {
  expect(m('unicorn')).toMatchSnapshot()
})
