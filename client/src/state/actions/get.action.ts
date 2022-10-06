/* eslint-disable class-methods-use-this */
import { GETTING_TIME, GETTING_FAILED } from './action.d';

class Get {
  gettingTime = () => ({ type: GETTING_TIME });

  gettingFailed = () => ({ type: GETTING_FAILED });
}
export default new Get();
