const test = require('tape')
const index = require('../views/index')

test('index should return <h1>Hello World</h1>', t => {
  t.equals(index(), '<h1>Hello World</h1>')
  t.end()
})

test('index should not return <h1>Hello World</h1>', t => {
  t.notEquals(index(), '<h2>Hello World</h2>')
  t.end()
})
