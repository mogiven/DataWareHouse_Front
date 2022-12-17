const routes = [
    {
        name: 'Myspace',
        path: '/',
        meta: {keepAlive: true},
        component: () => import('@/view/Myspace.vue'),
        children:[
        {
            path: '/myspace/historyPostList',
            name: 'history',
            component: () => import('@//components/myspace/HistoryPostList.vue')
          },

          {
            path: '/myspace/myProfile',
            name: 'myProfile',
            component: () => import('@/components/myspace/MyProfile.vue')
          },


        ]

    },

];

export default routes
