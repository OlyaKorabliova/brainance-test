import { schema } from 'normalizr';


const userSchema = new schema.Entity('users');
export const usersListSchema = new schema.Array(userSchema);

const albumSchema = new schema.Entity('albums');
export const albumsListSchema = new schema.Array(albumSchema);

const photoSchema = new schema.Entity('photos');
export const photosListSchema = new schema.Array(photoSchema);