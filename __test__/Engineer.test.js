const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    describe('Initialization', () => {
        it('Should create a new engineer with name, id, email, and GitHub', () => {
            const name = 'Roger';
            const id = 1;
            const email = 'roger@happyjob.com';
            const gitHub = 'RogerSmith';

            const newEmployee = new Engineer(name, id, email, gitHub);

            expect(newEmployee instanceof Engineer).toBe(true);
            expect(newEmployee.name).toEqual('Roger');
            expect(newEmployee.id).toEqual(1);
            expect(newEmployee.email).toEqual('roger@happyjob.com');
            expect(newEmployee.gitHub).toEqual('RogerSmith');
        });
    });
});