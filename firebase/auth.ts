import firebase from 'firebase';
import firebaseInit from '../firebase';

const db = firebaseInit();

const signInUser = async (
  email: string,
  password: string,
): Promise<firebase.User | null> => {
  const signedUser = await firebase
    .auth()
    .signInWithEmailAndPassword(email, password);
  const { user } = signedUser;
  return user;
};

const logOutUser = async (): Promise<void> => {
  await firebase.auth().signOut();
};

const sendResetPasswordEmail = async (email: string): Promise<void> => {
  await firebase.auth().sendPasswordResetEmail(email);
};

export default {
  logOutUser,
  sendResetPasswordEmail,
  signInUser,
};
