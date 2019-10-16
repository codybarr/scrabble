# @nosweat/scrabble

Simple node scrabble solver using a trie data structure.

Data structure / anagram solver algorithm is basically directly forked from the excellent https://github.com/lyndseybrowning/trie-prefix-tree

# install

`yarn add @nosweat/scrabble`

# usage

```javascript
const scrabble = require('@nosweat/scrabble')
const answers = scrabble.find('qwerty')

console.log(answers)
// ["er", "et", "qwerty", "re", "ret", "rye", "tew", ...]
```

# contribute

```
git clone https://github.com/codybarr/scrabble
```

Feel free to submit PRs if you'd like to contribute to the project.

## `yarn generate`

This command will run the `generate.js` program. It scans the `./wordlists` directory for wordlist
files, prompts for a selection, and will generate a serialized trie in json format, and save it to
the `./dictionaries/` folder.

If you would like to create a dictionary of your own you can add a new word list here.

## Current Word Lists

* **NASPA Word List / `twl06`** (USA & Canada) See https://en.wikipedia.org/wiki/NASPA_Word_List.
* **Collins Scrabble Words / `sowpods`** (Basically everywhere else) See https://en.wikipedia.org/wiki/Collins_Scrabble_Words


If you want to use a different dictionary replace the `words` file with your own. Currently the NASPA word list is used
by default.
