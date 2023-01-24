const Manager = require('../lib/Manager');

describe('Manager', () => {
    describe('Initialization', () => {
        it('Should create a new manager with name, id, email, and office number', () => {
            const name = 'Roger';
            const id = 1;
            const email = 'roger@happyjob.com';
            const officeNum = 5;

            const newEmployee = new Manager(name, id, email, officeNum);

            expect(newEmployee instanceof Manager).toBe(true);
            expect(newEmployee.name).toEqual('Roger');
            expect(newEmployee.id).toEqual(1);
            expect(newEmployee.email).toEqual('roger@happyjob.com');
            expect(newEmployee.officeNum).toEqual(5);
        });
    });
});