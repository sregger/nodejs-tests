const expect = require('chai').expect;

const getUser = require('../index').getUser;

describe('Get User tests', () => {
    it('Get a user by username', () => {
        return getUser('octocat')
            .then(response => {
                //expect an object back
                expect(typeof response).to.equal('object');

                //Test result of name, company and location for the response
                expect(response.name).to.equal('The Octocat')
                expect(response.company).to.equal('GitHub')
                expect(response.location).to.equal('San Francisco')
            });
    });
});