// import supertest from 'supertest';
// import app from '../../server';
import Env from '../../config';

const {
  POSTGRES_DATABASE,
  MONGODB_PASSWORD,
  MONGODB_DATABASE,
  SERVER_ENV,
  MONGODB_HOST,
  MONGODB_PORT,
} = Env;
// const req = supertest(app);

describe('Get endpoint', () => {
  it('First endpoint', async () => {
    // const res = await req.get('api/user/62cadcdc56d7681f78cfa41e');
    // expect(res.status).toBe(200);
    console.log(`env vars : ${MONGODB_DATABASE}| ${MONGODB_HOST}|${MONGODB_PASSWORD} | ${MONGODB_PORT}|${SERVER_ENV} |${POSTGRES_DATABASE}`);
    expect(true).toBe(true);
  });
});
