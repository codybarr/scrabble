const trie = require('./trie')

const fs = require('fs')
const readline = require('readline')

async function getWordList() {
	const fileStream = fs.createReadStream('./dictionaries/words')
	const words = []

	const rl = readline.createInterface({
		input: fileStream,
		crlfDelay: Infinity
	})

	for await (const line of rl) {
		words.push(line)
	}

	return words
}

async function main() {
	const words = await getWordList()
	const dictionary = trie(words)

	fs.writeFile('./dictionaries/dictionary.json', dictionary.dump(), function(
		err
	) {
		if (err) {
			return console.log(err)
		}

		console.log('The file was saved!')
	})
}

main()
