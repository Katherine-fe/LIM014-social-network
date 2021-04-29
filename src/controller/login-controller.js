// Iniciar sesion con credenciales creadas
export const signIn = (email, password) => {
  const auth = firebase.auth();
  return auth.signInWithEmailAndPassword(email, password);
};

// Crear usuario
export const createUserBD = (email, password) => {
  const auth = firebase.auth();
  return auth.createUserWithEmailAndPassword(email, password);
};

// Inicia sesión con Google
export const signInWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(provider);
};

// Inicia sesión con Facebook
export const signInWithFacebook = () => {
  const provider = new firebase.auth.FacebookAuthProvider();
  return firebase.auth().signInWithPopup(provider);
};
  // Desconectar
export const signOut = () => firebase.auth().signOut();

export const verifEmail = () => {
  firebase.auth().currentUser.sendEmailVerification().then(() => {
  // Email sent.
  }).catch((error) => {
    console.log(error);
  });
};
/*
export const readCreateUserDB = (userid, emailUser, userInfo, username) => {
  readUserDB(userid)
    .then((res) => {
      if (res.empty) {
        createUser(userid, emailUser, userInfo, username);
      } else {
        res.forEach((refDoc) => {
          const user = refDoc.data();
          console.log(user);
        });
      }
    });
}; */
/* const getUser = () => firebase.auth().currentUser;

export const createUserReg = (email, password, name, info) => {
  createUserBD(email, password)
    .then((res) => {
      const user = getUser();
      user.updateProfile({
        displayName: name,
      });
      window.location.hash = '#/Home';
      createUser(res.user.uid, email, info, name);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      if (errorCode === 'auth/invalid-email' || errorCode === 'auth/weak-password') {
        throw errorMessage;
      }
    });
};
 */
