import Home from 'src/views/home/home.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    redirect: {
      path: '/',
    },
    children: [
      {
        path: '/',
        name: 'index',
        component: () => import('../views/index/index.vue'),
      },

      {
        path: '/my',
        name: 'my',
        component: () => import('../views/my/my.vue'),
      },
    ],
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/login.vue'),
  },
  {
    path: '/image-transform',
    name: 'imageTransform',
    component: () => import('../views/image_transform/index.vue'),
  },
  {
    path: '/movie',
    name: 'movie',
    component: () => import('../views/movie/index.vue'),
  },
];

export default routes;
