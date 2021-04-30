const fs = firebase.firestore();
const dateP = Date.now();

export const addPost = (post) => fs.collection('post').add({
  publication: post,
  email: firebase.auth().currentUser.email,
  uid: firebase.auth().currentUser.uid,
  datePost: dateP,
  user: firebase.auth().currentUser.displayName,
});

export const removePost = (id) => {
  const remove = document.querySelectorAll(`.removeBtn-${id}`);
  remove.forEach((elemento) => {
    elemento.addEventListener('click', (e) => {
      e.preventDefault();
      fs.collection('post').doc(id).delete()
        .then(() => {
          console.log('Document successfully deleted!');
        })
        .catch((error) => {
          console.error('Error removing document: ', error);
        });
    });
  });
};

export const updatePost = (id) => {
  const updates = document.querySelectorAll(`.editBtn-${id}`);
  updates.forEach((elemento) => {
    elemento.addEventListener('click', (e) => {
      console.log('holi Katty');
      e.preventDefault();
      fs.collection('post').doc(id).update({
        publication: 'holi eunice',
      });
    });
  });
};
