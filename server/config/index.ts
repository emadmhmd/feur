import mongoDBConfig from './mongoDB.config';
import Env from './env.config';

const connectToDB = () => {
  mongoDBConfig();
};

export { connectToDB };

export default Env;
