import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';
import LogIn from '../views/auth/LogIn.vue';
import SignUp from '../views/auth/SignUp.vue';

import Chats from '../views/Chats.vue';
import ContactsList from '../views/ContactsList.vue';
import Contact from '../views/Contact.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: '/chats'
  },
  {
    path: '/chats',
    name: 'Chats',
    component: Chats
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: ContactsList
  },
  {
    path: '/contact/:contact',
    name: 'Contacts',
    component: Contact
  },
  {
    path: '/log-in',
    name: 'Login',
    component: LogIn
  },
  {
    path: '/sign-up',
    name: 'Sign up',
    component: SignUp
  },
  {
    path: '/my-profile',
    name: 'My Profile',
    component: () => import('../views/MyProfile.vue')
  },
];

const router = new VueRouter({
  routes
});

export default router;
