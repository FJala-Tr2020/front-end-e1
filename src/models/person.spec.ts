import Person from './person';

describe('Model Person', () => {
  it('should create an person model with default properties', () => {
    const modelPerson = new Person('edwin', 'encinas', null);
    expect(modelPerson).toBeDefined();
    expect(modelPerson.firstName()).toBe('edwin');
    expect(modelPerson.lastName()).toBe('encinas');
    expect(modelPerson.fullName()).toBe('edwin encinas');
    expect(modelPerson.favoriteFilms().length).toBe(0);
  });
});
