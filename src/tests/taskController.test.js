const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../index');
const { expect } = chai;

chai.use(chaiHttp);

describe('Task Controller Tests', () => {
    it('should create a new task', (done) => {
        chai
            .request(app)
            .post('/api/tasks')
            .send({
                title: 'Test Task',
                description: 'This is a test task',
                status: 'open',
            })
            .end((err, res) => {
                if (err) {
                    console.error(err);
                    return done(err);
                }

                try {
                    expect(res).to.have.status(201);
                    expect(res.body).to.have.property('id');
                    expect(res.body).to.have.property('message');
                    done();
                } catch (assertionError) {
                    console.error(assertionError);
                    done(assertionError);
                }
            });
    });

    it('should update an existing task', (done) => {
        chai
            .request(app)
            .put('/api/tasks/1')
            .send({
                title: 'Updated Task',
                description: 'This is an updated test task',
                status: 'completed',
            })
            .end((err, res) => {
                if (err) {
                    console.error(err);
                    return done(err);
                }
                try {
                    expect(res).to.have.status(200);
                    expect(res.body).to.have.property('message');
                    done();
                } catch (assertionError) {
                    console.error(assertionError);
                    done(assertionError);
                }
            });
    });

    it('should get all tasks', (done) => {
        chai
            .request(app)
            .get('/api/tasks')
            .end((err, res) => {
                if (err) {
                    console.error(err);
                    return done(err);
                }
                try {
                    expect(res).to.have.status(200);
                    expect(res.body).to.have.property('tasks');
                    expect(res.body.tasks).to.be.an('array');
                    done();
                } catch (assertionError) {
                    console.error(assertionError);
                    done(assertionError);
                }
            });
    });
});
