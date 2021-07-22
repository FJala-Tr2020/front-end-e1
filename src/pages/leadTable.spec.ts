import { ILead } from './leadTable';

const mockLead:ILead = {
  city: 'Paris',
  contactName: 'M`aam',
  country: 'France',
  createDate: '07/20/2021',
  email: 'mademoiselle@mail.com',
  language: 'French',
  phone: '111122223333',
  title: 'some title'
};

describe('Name of the group', () => {
  it('should not be empty ', () => {
    expect(mockLead).not.toBe({});
  });
});
