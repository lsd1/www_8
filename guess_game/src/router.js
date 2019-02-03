import VueRouter from 'vue-router';
import Vue from 'vue';
Vue.use(VueRouter);

import app from  './app.vue';
// path: "/game_room/:roomOwner/:grade/:amount/:srcIndex/:otherAvatar/:id",
import index from  './page/index.vue';
import createRoom from './page/create_room.vue';
import gameRoom from './page/game_room.vue';
import record from './page/record.vue';
import myPurse from './page/my_purse.vue';
import walletRecord from './page/wallet_record.vue';
import myRoom from  './page/my_room.vue';

import test from './page/test.vue';
// import myRoom from './page/myRoom.vue';
const routes = [
    {
        path: '/',
        redirect:'/index'
    },
    {
        path: '/index',
        name: 'index',
        component: index
    },
    {
        path: "/create_room",
        name: 'createRoom',
        component: createRoom
    },
    {
        path: "/game_room",
        name: 'gameRoom',
        component: gameRoom
    },
    {
        path: "/record",
        component: record
    },
    {
        path: "/myPurse",
        name: 'my_purse',
        component: myPurse
    },
    {
        path: "/walletRecord",
        component: walletRecord
    },
    {
        path: "/myRoom",
        component: myRoom
    },
    {
        path: "/test",
        component: test
    },
    // {
    //     path: "/my_room",
    //     component: myRoom
    // }
]

export default new VueRouter({
    routes
});//向外暴露路由
