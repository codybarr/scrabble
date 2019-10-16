const trie = require('./trie')
const dictionaryJSON = require('./dictionaries/twl06.json')

const dictionary = trie([])
dictionary.load(dictionaryJSON)

const scrabble = {
	find(letters) {
		return dictionary.anagrams(letters)
	}
}

module.exports = scrabble
