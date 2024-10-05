import Person from '../src/example'

describe('Person', () => {
  let person: Person

  beforeEach(() => {
    person = new Person('John', 'Doe', 30)
  })

  it('Should create a new person with the correct data', () => {
    expect(person.getName()).toBe('John')
    expect(person.getSurname()).toBe('Doe')
    expect(person.getAge()).toBe(30)
  })

  it('Should allow updating the name', () => {
    person.setName('Jane')
    expect(person.getName()).toBe('Jane')
  })

  it('Should allow updating the surname', () => {
    person.setSurname('Smith')
    expect(person.getSurname()).toBe('Smith')
  })

  it('Should allow updating the age', () => {
    person.setAge(35)
    expect(person.getAge()).toBe(35)
  })

  it('Should print data correctly', () => {
    const consoleSpy = jest.spyOn(console, 'log')
    person.printData()
    expect(consoleSpy).toHaveBeenCalledWith('John Doe, 30')
    consoleSpy.mockRestore()
  })
})
