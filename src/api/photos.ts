import { Photo } from '../types/Photo';
import { client } from '../utils/fetchClient';

export const getPhotos = () => client.get<Photo[]>('');
// export const getUser = (userId: number) => get<User>(`/users/${userId}`);
