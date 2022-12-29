import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  let ret = {};

  try {
    ret = {
      photo: await uploadPhoto(),
      user: await createUser(),
    };
  } catch (err) {
    ret = {
      photo: null,
      user: null,
    };
  }

  return ret;
}
