import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return uploadPhoto().then((val) => {
    createUser().then((value) => console.log(val.body, value.firstName, value.lastName)).catch(console.log('Signup system offline'));
  }).catch(console.log('Signup system offline'));
}
