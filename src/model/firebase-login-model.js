/* Crea usuario, el documento recibe el nombre del id */
/* export const createUser = (id, user, email, info) => firebase.firestore()
  .collection('users').doc(id).set({
    id,
    user,
    email,
    info,
  }); */

export const createUser = (userid, emailUser, userInfo, username) => firebase.firestore()
  .collection('users').doc(userid).set({
    name: username,
    email: emailUser,
    id: userid,
    info: userInfo,
  });

/* export const readUserDB = (id) => firebase.firestore().collection('users')
  .where('id', '==', id)
  .get();
 */
/* export const saveUsers = () => {
  const user = firebase.auth().currentUser;
  firebase.firestore().collection('usersgoogle').doc(user.gid).set({
    user: user.displayName,
    avatar: user.photoURL,
    gid: user.gid,
    email: user.email,
  });
};
 */
