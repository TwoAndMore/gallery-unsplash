import { Photo } from '../types/Photo';
import { client } from '../utils/fetchClient';

export const getPhotos = () => client.get<Photo[]>('');
