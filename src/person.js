class person {
	constructor (name = 'Your Name', lastName = 'Last Name') {
		this.name = name;
		this.lastName = lastName;
	};

	sayHello() {
		console.log(`Hello ${this.name} ${this.lastName}!`);
	}
};

export default person;