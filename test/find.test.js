const { find } = require('../index')

test('banana should be in the dictionary', () => {
	expect(find('car')).toEqual(['ar', 'arc', 'car'])
})

test(`'au' should return an empty array`, () => {
	expect(find('au')).toEqual([])
})

test(`'239823' should return an empty array`, () => {
	expect(find('239823')).toEqual([])
})

test(`one letter should throw an error`, () => {
	function findOneLetter() {
		find('r')
	}

	expect(findOneLetter).toThrow('anagrams expects at least 2 letters')
})
