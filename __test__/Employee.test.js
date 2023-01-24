const Employee = require('../lib/Employee');

describe('Employee', () => {
    describe('Initialization', () => {
        it('Should create a new employee with name, id, and email', () => {
            const name = 'Roger';
            const id = 1;
            const email = 'roger@happyjob.com';

            const newEmployee = new Employee(name, id, email);

            expect(newEmployee instanceof Employee).toBe(true);
            expect(newEmployee.name).toEqual('Roger');
            expect(newEmployee.id).toEqual(1);
            expect(newEmployee.email).toEqual('roger@happyjob.com');
        });
    });
});