module.exports = function () {
	let faker = require('faker');
	let _ = require('lodash');

	return {
		animals: _.times(20, (num) => {
			return {
				id: num,
				name: faker.name.findName(),
				species: faker.company.catchPhraseNoun(),
				gender: faker.helpers.randomize(['m', 'f']),
				age: faker.random.number(100)
			}
		}),
		zookeeper: _.times(20, (i) => {
			return {
				id: i,
				name: {
					firstName: faker.name.firstName(),
					lastName: faker.name.lastName()
				},
				salary: faker.random.number(5000, 20000)
			}
		})
	}
}