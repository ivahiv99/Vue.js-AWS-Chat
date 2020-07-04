import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';
import LogIn from '../views/auth/LogIn.vue';
import SignUp from '../views/auth/SignUp.vue';
import MyProfile from '../views/MyProfile.vue';

import Chats from '../views/Chats.vue';
import ContactsList from '../views/ContactsList.vue';
import Contact from '../views/Contact.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    // redirect: '/chats',
    // component: Home,
    // children: [
    //   {
    //     path: 'chats',
    //     name: 'Chats',
    //     component: Chats
    //   }
    // ]
  },

  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: 'about' */ '../views/About.vue')
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
    component: MyProfile
  },
];

const router = new VueRouter({
  routes
});

export default router;
