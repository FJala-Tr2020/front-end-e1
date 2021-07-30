import Navbar from './navbar';
describe('Suite of test about Navbar', () => {
  const navbar = new Navbar();
  it('Should be instance of the class Navbar', () => {
    expect(navbar).toBeInstanceOf(Navbar);
  });
});
