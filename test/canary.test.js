const test = require('tape')

test('-- test/canary', (expect) => { expect.end() })

test('does not die', (expect) => {
  expect.deepEqual(true, true)
  expect.end()
})
