const trie = require('./trie')
const dictionaryJSON = require('./dictionaries/dictionary.json')

const dictionary = trie([])
dictionary.load(dictionaryJSON)

const scrabble = {
	find(letters) {
		return dictionary.anagrams(letters)
	}
}

module.exports = scrabble
