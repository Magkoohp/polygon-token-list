const allTokens = require('./tokens/allTokens.json')
const defaultTokens = require('./tokens/default.json')
const testnetTokens = require('./tokens/testnetTokens.json')
const allTokensTokenList = require('./metadata/allTokens.json')
const defaultTokenList = require('./metadata/default.json')
const testnetTokenList = require('./metadata/testnetTokens.json')

module.exports = function buildList () {
  const timestamp = new Date().toISOString()

  Object.assign(allTokensTokenList, { timestamp, tokens: allTokens })
  Object.assign(defaultTokenList, { timestamp, tokens: defaultTokens })
  Object.assign(testnetTokenList, { timestamp, tokens: testnetTokens })

  return { allTokensTokenList, defaultTokenList, testnetTokenList }
}