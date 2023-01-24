const Intern = require('../lib/Intern');

describe('Intern', () => {
    describe('Initialization', () => {
        it('Should create a new intern with name, id, email, and school', () => {
            const name = 'Roger';
            const id = 1;
            const email = 'roger@happyjob.com';
            const school = 'University of Arizona';

            const newEmployee = new Intern(name, id, email, school);

            expect(newEmployee instanceof Intern).toBe(true);
            expect(newEmployee.name).toEqual('Roger');
            expect(newEmployee.id).toEqual(1);
            expect(newEmployee.email).toEqual('roger@happyjob.com');
            expect(newEmployee.school).toEqual('University of Arizona');
        });
    });
});