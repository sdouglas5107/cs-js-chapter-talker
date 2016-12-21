Date.prototype.toFormatted = () => {
    return `${this.fullYear}-${this.month + 1}-${this.day}`;
}
let app = require('../../app');
supertest = require('supertest');
let request = supertest(app);
let expect = require('chai').expect;
let User = require('../../api/user/user.model');


///////////////////////////////////////////////////////
/////////////////////////USER//////////////////////////
///////////////////////////////////////////////////////
describe('User Routes', () => {
    before(done => {
        //TODO Clear database
        User.create({ name: "Your Name", email: "email@example.com", password: "123456" })
            .then(user => {
                console.log(user)
                done();
            })
            .catch(err => {
                console.log(err)
                done();
            });
    });

    describe('Route POST /api/users', () => {
        let userDefault;

        beforeEach(() => userDefault = { name: "Your Name", email: "email@example.com", password: "123456" });

        it("Should create a new user", done => {
            request.post('/api/users', userDefault)
                .expect(201).end(done);
        });

        it("Should return 400 status code because 'name' wasn't sent", done => {
            userDefault.name = undefined;
            request.post('/api/users', userDefault)
                .expect(400).end(done);
        });

        it("Should return 400 status code because 'email' wasn't sent", done => {
            userDefault.email = undefined;
            request.post('/api/users', userDefault)
                .expect(400).end(done);
        });

        it("Should return 400 status code because 'password' wasn't sent", done => {
            userDefault.password = undefined;
            request.post('/api/users', userDefault)
                .expect(400).end(done);
        });
    });

    describe('Route POST /api/users/login', () => {
        let login = { email: "email@example.com", password: "123456" };
        it("Should authenticate a registered user", done => {
            request.post('/api/users/login', login)
                .expect(200).expect(res => expect(res.body.token).to.exist).end(done);
        });

        it("Should return 401 because 'email' is not registered", done => {
            request.post('/api/users/login', login)
                .expect(401).end(done);
        });

        it("Should return 401 because 'password' is invalid", done => {
            request.post('/api/users/login', login)
                .expect(401).end(done);
        });
    });
});

///////////////////////////////////////////////////////
/////////////////////////TALK//////////////////////////
///////////////////////////////////////////////////////
describe('Talk Routes', () => {
    before(done => {
        //TODO Clear database
        done();
    })
    describe("Route POST /api/talks", () => {
        let talk = { date: new Date().toFormatted() };

        it("Should create a new talk", done => {
            request.post('/api/talks', talk)
                .expect(201).expect(res => expect(res.body._id).to.exist).end(done);
        });

        it("Should return 400 due to 'date' invalid", done => {
            request.post('/api/talks', {})
                .expect(400).end(done);
        });
        it("Should return 401 due to unauthorized role", done => {
            request.post('/api/talks', talk)
                .expect(401).end(done);
        });
    });
});

//////////////////////////////////////////////////////
///////////////////////SUBJECT////////////////////////
//////////////////////////////////////////////////////
describe('Subject Routes', () => {
    describe("Route GET /api/subjects", () => {
        it("Should return a list of Subjects", done => {
            request.get('/api/subjects')
                .expect(200).end(done);
        })
    });

    describe("Route POST /api/subjects", () => {
        let subject;
        let token;
        before(done => {
            let user = { name: "Your Name", email: "email@example.com", password: "123456" };
            //TODO log the user in to get a valid token.
            token = "";
            done();
        });

        beforeEach(() => subject = { title: "blablabla", talk: "subject_id" });

        it("Should return 401 due not invalid authorization token", done => {
            request.post('/api/subjects', subject)
                .expect(401).expect(res => expect(res.body._id).to.exist).end(done);
        });

        it("Should create a new Subject", done => {
            request.post('/api/subjects', subject).set('Authorization', `Bearer ${token}`)
                .expect(201).expect(res => expect(res.body._id).to.exist).end(done);
        });

        it("Should return 403 due to the period of creation expired", done => {
            // TODO create one talk with 'date' today, to validade rule of expiration date
            request.post('/api/subjects', subject).set('Authorization', `Bearer ${token}`)
                .expect(403).end(done);
        });

        it("Should return 400 due to 'title' invalid", done => {
            subject.title = undefined;
            request.post('/api/subjects', talk).set('Authorization', `Bearer ${token}`)
                .expect(400).end(done);
        });

        it("Should return 400 due to 'talk' invalid", done => {
            subject.talk = undefined;
            request.post('/api/subjects', talk).set('Authorization', `Bearer ${token}`)
                .expect(400).end(done);
        });
    });
});