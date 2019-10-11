/* 
  Forked from the excellent https://github.com/lyndseybrowning/trie-prefix-tree
*/

const create = require('./create')
const append = require('./append')
const utils = require('./utils')
const config = require('./config')
const permutations = require('./permutations')

const PERMS_MIN_LEN = config.PERMS_MIN_LEN

function trie(input) {
	if (!Array.isArray(input)) {
		throw `Expected parameter Array or String, received ${typeof input}`
	}

	let trie = create(input)

	return {
		/**
		 * Get the generated raw trie object
		 */
		tree() {
			return trie
		},

		load(obj) {
			trie = obj
		},

		/**
		 * Get a string representation of the trie
		 */
		dump(spacer = 0) {
			return utils.stringify(trie, spacer)
		},

		/**
		 * Add a new word to the trie
		 */
		addWord(word) {
			if (typeof word !== 'string' || word === '') {
				throw `Expected parameter string, received ${typeof word}`
			}

			const reducer = (...params) => {
				return append(...params)
			}

			const input = word.toLowerCase().split('')
			input.reduce(reducer, trie)

			return this
		},

		/**
		 * Get a list of all sub-anagrams that can be made from the given letters
		 * @returns Array
		 */
		anagrams(letters) {
			if (typeof letters !== 'string') {
				throw `Expected string letters, received ${typeof letters}`
			}

			if (letters.length < PERMS_MIN_LEN) {
				throw `anagrams expects at least ${PERMS_MIN_LEN} letters`
			}

			return permutations(letters, trie, {
				type: 'sub-anagram'
			})
		}
	}
}

module.exports = trie
