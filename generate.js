const trie = require('./trie')

const inquirer = require('inquirer')
const fs = require('fs')
const readline = require('readline')

async function getWordList(wordlist) {
	const fileStream = fs.createReadStream(`./wordlists/${wordlist}`)
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
	const questions = [
		{
			type: 'list',
			name: 'wordlist',
			message:
				'Which word list do you want to generate a trie dictionary for?',
			choices: []
		}
	]

	const files = fs.readdirSync('./wordlists', (err, files) => files)
	questions[0].choices = files

	inquirer.prompt(questions).then(async answers => {
		const words = await getWordList(answers.wordlist)
		const dictionary = trie(words)

		fs.writeFile(
			`./dictionaries/${answers.wordlist}.json`,
			dictionary.dump(),
			function(err) {
				if (err) {
					return console.log(err)
				}

				console.log('The file was saved!')
			}
		)
	})
}

main()
