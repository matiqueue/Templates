class Person {
  private name: string
  private surname: string
  private age: number

  constructor(name: string, surname: string, age: number) {
    this.name = name
    this.surname = surname
    this.age = age
  }

  printData(): void {
    console.log(`${this.name} ${this.surname}, ${this.age}`)
  }

  public getName(): string {
    return this.name
  }

  public getSurname(): string {
    return this.surname
  }

  public getAge(): number {
    return this.age
  }

  public setName(name: string): void {
    this.name = name
  }

  public setSurname(surname: string): void {
    this.surname = surname
  }

  public setAge(age: number): void {
    this.age = age
  }
}
export default Person
