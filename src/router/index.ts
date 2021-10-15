import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Store from './../store/store';
import Services from '../views/Services.vue';;
import Coworkers from '../views/Coworkers.vue';
import Service from '../views/Service.vue';
import Appointments from '../views/Appointments.vue';
import Login from '../views/Login.vue';
import Message from '../views/Message.vue';
import Messages from '../views/Messages.vue';
import License from '../views/License.vue';
import NotFound from '../views/NotFound.vue';
import AppointmentsDashboard from '../views/AppointmentsDashboard.vue';
import ClientsDashboard from '../views/ClientsDashboard.vue';
import AccountSettings from '../views/AccountSettings.vue';
import CompanySettings from './../views/CompanyDetails.vue';
import Templates from '../views/Templates.vue';
import CalendarSettings from '../views/CalendarSettings.vue';
import Clients from '../views/Clients.vue';
import Client from '../views/Client.vue';
import Profile from '../views/Profile.vue';


Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'AppointmentsDashboard',
    component: AppointmentsDashboard,
  },
  {
    path: '/clients',
    name: 'ClientsDashboard',
    component: ClientsDashboard,
  },
  {
    path: '/services',
    name: 'Services',
    component: Services,
  },
  {
    path: "/service/:id",
    name: "Service",
    component: Service,
    props: (route)  => ({ id: route.params.id }),
  },
  {
    path: '/service',
    name: 'Service',
    component: Service,
  },
  {
    path: '/appointments',
    name: 'Appointments',
    component: Appointments,
  },
  {
    path: '/messages',
    name: 'Messages',
    component: Messages,
  },
  {
    path: "/message/:id",
    name: "Message",
    component: Message,
    props: (route)  => ({ id: route.params.id }),
  },
  {
    path: '/message',
    name: 'Message',
    component: Message,
  },
  {
    path: '/templates',
    name: 'Templates',
    component: Templates,
  },
  {
    path: '/settings/coworkers/all',
    name: 'Coworker',
    component: Coworkers,
  },
  {
    path: '/settings/clients/all',
    name: 'Clients',
    component: Clients,
  },
  {
    path: "/settings/client/:id",
    name: "Client",
    component: Client,
    props: (route)  => ({ id: route.params.id }),
  },
  {
    path: '/settings/client',
    name: 'Client',
    component: Client,
  },
  {
    path: "/settings/profile/:id/:phone",
    name: "Profile",
    component: Profile,
    props: (route)  => ({ id: route.params.id, phone: route.params.phone }),
  },
  {
    path: '/settings/account/setting',
    name: 'Account settings',
    component: AccountSettings,
  },
  {
    path: '/settings/account/company-details',
    name: 'Company details',
    component: CompanySettings,
  },
  {
    path: '/settings/account/calendar-settings',
    name: 'Calendar Settings',
    component: CalendarSettings,
  },
  {
    path: '/settings/account/license',
    name: 'License and plans',
    component: License,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/dev',
    name: 'Profile',
    component: Profile,
  },
  {
    path: '/calendar',
    name: 'calendar',
    component: CalendarSettings,
  },
  {
    path: "/:catchAll(.*)",
    component: NotFound,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {

  let store = new Store;
  let session = store.get('session');

  if(to.path!=='/login'){
    if (!session){
       return next({path:'/login'});
    }else{
       return next();
    } 
  }

  return next();

})

export default router
