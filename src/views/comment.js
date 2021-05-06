const showComment = (() => {
  const commentsShow = document.querySelectorAll('.one-cm');
  firebase.firestore().collection('comments')
    .orderBy('datePost', 'desc')
    .onSnapshot((querySnapshot) => {
      commentsShow[0].innerHTML = '';
      querySnapshot.forEach((doc) => {
        if (doc.data().postId === '5PhWzz0J0CkXgqhKhu8v') {
          commentsShow[0].innerHTML += `
                      <div class="head-cm">
                          <h5 class="name-cm">${doc.data().user}</h5>
                          <button class="btn-more" type="button">...</button>
                          <div class="btn-list hide">
                              <button class="editBtnComment-${doc.id}">Update</button>
                              <button class="removeBtnComment-${doc.id}">Delete</button>
                          </div>
                      </div>
                      <p>${doc.data().comment}</p>
                  `;
        }
      });
    });
});

export { showComment };
