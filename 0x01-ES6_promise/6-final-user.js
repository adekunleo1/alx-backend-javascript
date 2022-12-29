import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(
  firstName,
  lastName,
  fileName,
) {
  const data = await Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]);

  const ret = [];

  for (const item of data) {
    ret.push({
      status: item.status,
      value: item.value || `Error: ${item.reason.message}`,
    });
  }

  return ret;
}
