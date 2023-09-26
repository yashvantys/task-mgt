const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../index');
const { expect } = chai;

chai.use(chaiHttp);

describe('Metrics Controller Tests', () => {
    it('should get task metrics', (done) => {
        chai
            .request(app)
            .get('/api/metrics')
            .end((err, res) => {
                if (err) {
                    console.error(err);
                    done(err);
                    return;
                }

                try {
                    expect(res).to.have.status(200);
                    expect(res.body).to.have.property('taskMetrics');
                    expect(res.body).to.have.property('timelineMetrics');
                    done();
                } catch (assertionError) {
                    console.error(assertionError);
                    done(assertionError);
                }
            });
    });
});