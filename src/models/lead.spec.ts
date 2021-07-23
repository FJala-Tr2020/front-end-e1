import Lead from './lead'
describe('Lead validation', () => {
    const lead = new  Lead()
    it('Should be created an object that returns an array', () => {
        expect(lead).toBeDefined();
    });
    it('Should miData not to be resolved as null ', () => {
        expect(lead.miData()).resolves.not.toBe(null);
    });
    it('Should miData to get retrieve the array of data ', () => {
        
    expect(lead.miData()).resolves.toHaveLength(0);
    });
});