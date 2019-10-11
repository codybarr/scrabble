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

Generates a "dictionary.json" file in the `./dictionaries` directory based on the word list in the
`./dictionaries/words` file.

If you want to use a different dictionary replace the `words` file with your own.

SOWPODS is the current word list.
