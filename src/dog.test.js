import Dog from './dog'

test('Dog.bark', () => {
  const testDog = new Dog('Vasya')
  expect(testDog.bark()).toBe('Wah wah, I am Vasya')
})
