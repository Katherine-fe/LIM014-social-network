import {
  createUserBD, signIn, signInWithGoogle, signInWithFacebook,
  signOut, getUser,
} from '../src/controller/login.js';

const firebaseMock = require('firebase-mock');

const mockAuth = new firebaseMock.MockFirebase();

mockAuth.autoFlush();

global.firebase = firebaseMock.MockFirebaseSdk(
  () => null,
  () => mockAuth,
);

/* createUserBD */
describe('registerUserEmail', () => {
  it('Deberia poder crear un nuevo usuario', () => createUserBD('miluskapajuelo@gmail.com', '12345678')
    .then((user) => {
      expect(user.email).toBe('miluskapajuelo@gmail.com');
    }));
});

/* login */
describe('enter', () => {
  it('Deberia poder ingresar a la app', () => signIn('miluskapajuelo@gmail.com', 'katherine10$')
    .then((user) => {
      expect(user.isAnonymous).toBe(false);
    }));
});

/* google */
describe('google', () => {
  it('Deberia poder ingresar a la app', () => signInWithGoogle()
    .then((user) => {
      const providerGoogle = user.providerData[0].providerId;
      expect(providerGoogle).toBe('google.com');
    }));
});

/* facebook */
describe('facebook', () => {
  it('Deberia poder ingresar a la app', () => signInWithFacebook()
    .then((user) => {
      const providerFacebook = user.providerData[0].providerId;
      expect(providerFacebook).toBe('facebook.com');
    }));
});

/* logOut */
describe('logOut', () => {
  it('Deberia poder ingresar a la app', () => signOut()
    .then((user) => {
      expect(user).toBe(undefined);
    }));
});

/* getUser */
describe('getUser', () => {
  it('Deberia ser una función', () => {
    expect(typeof getUser).toBe('function');
  });
  it('Debería mostrar el usuario ingresado', () => {
    const userMock = {
      getUser: {
        id: 'abc01',
        displayName: 'miluskapajuelo',
      },
    };
    firebase.auth().onAuthStateChanged().currentUser = userMock.currentUser;
    const isId = () => {
      expect(getUser.id).toEqual('abc01');
    };
    getUser(isId);
  });
});
