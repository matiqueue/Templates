import Person from './src/example'

const person = new Person('Jan', 'Kowalski', 23)

person.printData()

person.setName('Kamil')
person.setSurname('Oswalski')
person.setAge(17)

person.printData()
