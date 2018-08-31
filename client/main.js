// import { Meteor } from 'meteor/meteor';
// import { Vue } from 'meteor/akryum:vue';
// import { RouterFactory,nativeScollBehavior } from 'meteor/akryum:vue-router2';
//
//
//
// Meteor.startup(()=>{
//     const router = new RouterFactory({
//         mode: 'history',
//         scrollBehavior: nativeScollBehavior,
//     }).create();
//
//
//     new Vue({
//         router,
//         el:'#app',
//         render:(createElement)=>{
//             return createElement(Vue.component('router-view'));
//         }
//     });
// });

import Vue from 'vue';
import { RouterFactory,nativeScollBehavior } from 'meteor/akryum:vue-router2'
import VueRouter from 'vue-router';
import { Accounts } from 'meteor/accounts-base';

import  App from '/imports/ui/App.vue';

Accounts.ui.config({
    passwordSignupFields:'USERNAME_AND_EMAIL'
});
//
Vue.use(VueRouter);

Meteor.startup(()=>{
    // const router = new RouterFactory({
    //     mode: 'history',
    //     scrollBehavior: nativeScollBehavior,
    // }).create();

    new Vue({
       render:h => h(App),
    }).$mount('app');
})