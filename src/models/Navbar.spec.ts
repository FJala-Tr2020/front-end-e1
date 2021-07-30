import Navbar from './navbar';
describe('Suite of test about Navbar', () => {
  const navbar = new Navbar();
  it('Should be instance of the class Navbar', () => {
    expect(navbar).toBeInstanceOf(Navbar);
  });
  it('should has a property of the records and url paths', () => {
    expect(navbar.records).not.toBe(null);
  });
});
