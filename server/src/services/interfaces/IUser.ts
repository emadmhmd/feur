import { UserType } from '../../types';

interface IUser {
    create(user: UserType): Promise<UserType | undefined>,
    getById(id: string): Promise<UserType | undefined>,
    getByEmail(email: string): Promise<UserType | undefined>,

}
export default IUser;
