import { signIn, signInWithGoogle, signInWithFacebook } from '../controller/controller-login.js';

export default () => {
  const viewLogin = `<figure class="figure-login">
  <img src="./img/undraw_Work_time_re_hdyv.svg" alt="">
</figure>
<form action="" method="post" class="col" id="col-form">
  <div class="text-welcome">
  <figure class="img-login">
    <img class="userPic" src="./img/undraw_female_avatar_w3jk.svg" alt="userPic">
  </figure>
    <H1 class="logo">W__coding</H1>
    <p class="text-logo">¡Welcome coder!</p>
</div>
  <div class="form">
    <div class="label">
      <span class="material-icons">person</span>
      <label class="flex" for="email"><h4>Email</h4>
        <input id="email" type="text">
      </label>
    </div>
    <div class="label">
      <span class="material-icons">
        vpn_key
        </span>
      <label class="flex" for="email"><h4>Password</h4>
        <input id="password" type="password">
      </label>
    </div>
    <a href="#/Register">Are you new? sing me</a>
    <button type="submit" id="btnLogIn"><a href="#/login">Log In</a></button>
  </div>
  <div class="typeLog">
    <p>or enter with</p>
    <figure>
      <img src="./img/google-plus.svg" alt="">
      <img src="./img/facebook.svg" alt="">
    </figure>
    <button type="button" id="btn-gmail"><img src='./img/google-plus.svg'></button>
    <button type="button" id="btn-facebook"><img src='./img/facebook.svg'></button>
  </div>
</form> `;
  const element = document.createElement('main');
  element.className = 'main-login';
  element.innerHTML = viewLogin;
  const singInForm = element.querySelector('#col-form');

  singInForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const singupEmail = document.querySelector('#email').value;
    const singupPassword = document.querySelector('#password').value;
    // console.log(singupEmail, singupPassword);

    signIn(singupEmail, singupPassword)
      // eslint-disable-next-line no-unused-vars
      .then((userCredential) => {
        window.location.hash = '#/Home';
      })
      // eslint-disable-next-line no-unused-vars
      .catch((err) => {
        console.log('Usuario no registrado');
      });
  });
  // GOOGLE
  const btnGmail = element.querySelector('#btn-gmail');
  btnGmail.addEventListener('click', (e) => {
    e.preventDefault();
    signInWithGoogle()
      .then(() => {
        console.log('Usuario creado google');
        window.location.hash = '#/Home';
      })
      .catch((error) => {
        console.error(error);
      });
  });

  // FACEBOOK
  const btnFacebook = element.querySelector('#btn-facebook');
  btnFacebook.addEventListener('click', (e) => {
    e.preventDefault();
    signInWithFacebook()
      .then(() => {
        console.log('Usuario creado fb');
        window.location.hash = '#/Home';
      })
      .catch((error) => {
        console.error(error);
      });
  });
  return element;
};
