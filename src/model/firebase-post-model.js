export default function addPost(post) {
  const dateP = Date.now();
  return firebase.firestore().collection('post').add({
    publication: post,
    email: firebase.auth().currentUser.email,
    uid: firebase.auth().currentUser.uid,
    datePost: dateP,
  });
}
export function editPost(id) {
  const updates = document.querySelectorAll(`.editBtn-${id}`);
  updates.forEach((elemento) => {
    elemento.addEventListener('click', (e) => {
      console.log('holi Katty');
      e.preventDefault();
      firebase.firestore().collection('post').doc(id).update({
        publication: 'holi eunice',
      });
    });
  });
}
export function removePost(id) {
  const remove = document.querySelectorAll(`.removeBtn-${id}`);
  remove.forEach((elemento) => {
    elemento.addEventListener('click', (e) => {
      e.preventDefault();
      firebase.firestore().collection('post')
        .doc(id)
        .delete()
        .then(() => {
          console.log('Document successfully deleted!');
        })
        .catch((error) => {
          console.error('Error removing document: ', error);
        });
    });
  });
}
