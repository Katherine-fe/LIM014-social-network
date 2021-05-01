import { Login, eventInitLogin } from './login.js';
import { Register, eventInitRegister } from './register.js';
import { Home, eventInitHome, nameUser } from './home.js';
import Fail from './404.js';

const components = {
  login: { Login, eventInitLogin },
  register: { Register, eventInitRegister },
  home: { Home, eventInitHome, nameUser },
  fail: Fail,
};
export { components };
