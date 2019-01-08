                                            // Mocha Testing
const assert = require('express');

//---------------------------------------------------------------------------------------------------------
/** package supertest helps us to make fake http request to app, its community uses variable name 'request' 
// to simulate with its work */
const request = require('supertest');
//---------------------------------------------------------------------------------------------------------

const app = require('../app');

describe('The express app', () => {
    it('it handles a GET request to /api', (done) => {
       request(app)
       .get('/api')   
       .end((err, response) => {
          assert(response.body.hi === 'there');
          done();
        });    
    });
}); 