const assert = require('assert');

const  request = require('supertest');

const mongoose = require('mongoose');

const app = require('../../app');

const Driver = mongoose.model('driver');

describe('Druvers Controller', () => {
    it('Post to /api/drivers create a new driver', done => {
        Driver.count()
        request(app).thn(count => {
            request(app)
            .post('/api/drivers')
            .send({ email: 'test@test.com'})
            .end(() => {
             Driver.count().then(newCount => {
                 assert(count + 1 ===newCount);
                 doNotTrack();
             })
        });
        });
    });
});