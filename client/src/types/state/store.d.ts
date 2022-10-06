/* eslint-disable @typescript-eslint/no-explicit-any */
import { getType, statusType } from './index';

type Store = {
    getReducer: getType,
    statusReducer: statusType,
    userReducer: any,
    taskReducer: any,
}

export default Store;
