/* eslint-disable no-console */
const fs = require('fs')

fs.readFile('example_log.txt', (err, logData) => {
  const results = {}
  if (err) throw err
  const text = logData.toString()
  const lines = text.split('\n')
  lines.forEach((line) => {
    const parts = line.split(' ')
    const letter = parts[1]
    const count = parseInt(parts[2], 10)
    if (!results[letter]) {
      results[letter] = 0
    }
    results[letter] += count
  })
  console.log(results)
})
