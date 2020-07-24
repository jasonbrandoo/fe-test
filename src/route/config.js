import { Home, Register, Login } from '../components';

const webRoute = [
  {
    path: '/',
    component: Home,
    label: 'Home',
    exact: true,
    auth: true,
  },
  {
    path: '/register',
    component: Register,
    label: 'Register',
  },
  {
    path: '/Login',
    component: Login,
    label: 'Login',
  },
];

export default webRoute;
