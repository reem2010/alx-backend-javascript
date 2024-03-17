import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  uploadPhoto().then((val) => {
    createUser().then((value) => console.log(val.body, value.firstName, value.lastName));
  });
}
