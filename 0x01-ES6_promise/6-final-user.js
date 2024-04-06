import signUp from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signUp(firstName, lastName), uploadPhoto(fileName)]).then(
    (val) => val.map((p) => ({
      status: p.status,
      value: p.value || String(p.reason),
    })),
  );
}
