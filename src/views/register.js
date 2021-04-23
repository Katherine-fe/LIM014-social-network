import { createUserBD, signIn } from '../controller/controller-login.js';

import { createUser } from '../model/firebase-user.js';

export default () => {
  const viewLogin = `
  <form action="" class="col" id="col-form">
  <div class="text-welcome">
  <figure class="img-login">
    <img class="userPic" src="./img/undraw_female_avatar_w3jk.svg" alt="userPic">
  </figure>
    <H1 class="logo">W__coding</H1>
</div>
 <div class="form">
      <div class="label">
        <span class="material-icons">person</span>
        <label class="flex" for="email"><h4>User Name</h4>
          <input class="" type="text" id="username">
        </label>
      </div>
      <div class="label">
        <span class="material-icons">person</span>
        <label class="flex" for="email"><h4>Email</h4>
          <input class="" type="text" id="email">
        </label>
      </div>
      <div class="label">
      <span class="material-icons">person</span>
        <label class="flex" for="email"><h4>Info</h4>
          <input class="" type="text" id="info">
        </label>
      </div>
      <div class="label">
        <span class="material-icons">
          vpn_key
          </span>
        <label class="flex" for="email"><h4>Password</h4>
          <input class="" type="password" id="password">
        </label>
      </div>
      <div class="label">
        <span class="material-icons">
          vpn_key
          </span>
        <label class="flex" for="email"><h4>Confirm Password</h4>
          <input class="" type="password" id="passwordconfir">
        </label>
      </div>
      <a href="#/login">Log in</a>
      <button type="submit" id="btn-register">Register</button>
    </div>
    <div class="typeLog">
      <p>or enter with</p>
      <figure>
        <img src="./img/google-plus.svg" alt="">
        <img src="./img/facebook.svg" alt="">
      </figure>
    </div>
    </form>`;
  const element = document.createElement('div');
  element.className = 'reg-login';
  element.innerHTML = viewLogin;

  const singInForm = element.querySelector('#col-form');
  singInForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = element.querySelector('#username').value;
    const email = element.querySelector('#email').value;
    const pass = element.querySelector('#password').value;
    const passCheck = element.querySelector('#passwordconfir').value;
    const info = element.querySelector('#info').value;
    if (username === '') {
      console.log('usuario vacio');
    } else if (email === '') {
      console.log('email vacio');
    } else if (pass === '') {
      console.log('pass vacio');
    } else if (info === '') {
      console.log('info vacio');
    } else if (pass !== passCheck) {
      console.log('pass no coincide');
    } else {
      createUserBD(email, pass)
        .then((result) => { createUser(result.user.uid, username, email, info); })
        .then(() => signIn(email, pass))
        .then(() => { window.location.hash = '#/Home'; })
        .catch((err) => console.error(err));
    }
  });

  return element;
};
