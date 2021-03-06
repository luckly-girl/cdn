import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const originalPush = Router.prototype.push;
Router.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject)
    return originalPush.call(this, location, onResolve, onReject);
  return originalPush.call(this, location).catch(err => err);
};

export const constantRouterMap = [{
    path: "/",
    redirect: {
      name: "login"
    }
  },
  {
    path: "/login",
    name: "login",
    component: () => import("./views/login")
  },
  {
    path: "/regist",
    name: "regist",
    component: () => import("./views/regist")
  },
  {
    path: "/forget",
    name: "forget",
    component: () => import("./views/forget")
  }
];
export const parentRouterMap = [{
  path: "/cdn",
  name: "layout",
  component: () => import("./components/Layout"),
  children: [{
      path: "home",
      name: "home",
      component: () => import("./views/dashboard")
    },
    {
      path: "basicFacts",
      name: "basicFacts",
      component: () => import("./views/basicFacts"),
      meta: {
        showNav: true
      }
    },
    {
      path: "flowPacket",
      name: "flowPacket",
      component: () => import("./views/flowPacket"),
      meta: {
        showNav: true
      }
    },
    {
      path: "cdn",
      name: "cdn",
      component: () => import("./views/cdn"),
    },
    {
      path: "domain",
      name: "domain",
      component: () => import("./views/domain"),
      meta: {
        showNav: true
      }
    },
    {
      path: "credentials",
      name: "credentials",
      component: () => import("./views/credentials"),
      meta: {
        showNav: true
      }
    },
    {
      path: "workOrderHistory",
      name: "workOrderHistory",
      component: () => import("./views/workOrder/workOrderHistory")
    },
    {
      path: "workOrderSub",
      name: "workOrderSub",
      component: () => import("./views/workOrder/workOrderSub")
    },
    {
      path: "dataCenter",
      name: "dataCenter",
      component: () => import('./views/dataCenter'),
      meta: {
        showNav: true
      }
    },
    {
      path: "record",
      name: "record",
      component: () => import("./views/record"),
      meta: {
        showNav: true
      }
    },
    {
      path: "openWaf",
      name: "openWaf",
      component: () => import("./views/openWaf"),
      meta: {
        showNav: true
      }
    },
    {
      path: "openFirewall",
      name: "openFirewall",
      component: () => import("./views/openFirewall"),
      meta: {
        showNav: true
      }
    },
    {
      path: "domainSetUp",
      name: "domainSetUp",
      component: () => import("./views/domainSetUp"),
      meta: {
        showNav: true
      }
    },
    {
      path: "wafSet",
      name: "wafSet",
      component: () => import("./views/wafSet"),
      meta: {
        showNav: true
      }
    }
  ]
}];
export default new Router({
  mode: "history",
  routes: constantRouterMap
});

export const errorRouter = {
  path: "*",
  component: () => import("./views/error/404")
};


// export const asyncRouterMap = [
//   {
//     path: 'nodeList',
//     name: 'nodeList',
//     component: () => import('./views/nodeList'),
//     meta: { navTitle: 'CDN??????', title: '????????????' }
//   },
//   {
//     path: 'production',
//     name: 'production',
//     component: () => import('./views/production'),
//     meta: { navTitle: 'CDN??????', title: '????????????' }
//   },
//   {
//     path: 'site',
//     name: 'site',
//     component: () => import('./views/site'),
//     meta: { navTitle: 'CDN??????', title: '????????????' }
//   },
//   {
//     path: 'DNS',
//     name: 'DNS',
//     component: () => import('./views/DNS'),
//     meta: { navTitle: 'CDN??????', title: 'DNS??????' }
//   },
//   {
//     path: 'siteDetection',
//     name: 'siteDetection',
//     component: () => import('./views/siteDetection'),
//     meta: { navTitle: 'CDN??????', title: '????????????' }
//   },
//   {
//     path: 'security',
//     name: 'security',
//     component: () => import('./views/security'),S
//     meta: { navTitle: 'CDN??????', title: '????????????' }
//   },
//   {
//     path: 'transferRecord',
//     name: 'transferRecord',
//     component: () => import('./views/transferRecord'),
//     meta: { navTitle: 'CDN??????', title: '????????????' }
//   },
//   {
//     path: 'logStorageRecord',
//     name: 'logStorageRecord',
//     component: () => import('./views/logStorageRecord'),
//     meta: { navTitle: 'CDN??????', title: '??????????????????' }
//   },
//   {
//     path: 'user',
//     name: 'user',
//     component: () => import('./views/user'),
//     meta: { navTitle: '????????????', title: '????????????' }
//   },
//   {
//     path: 'role',
//     name: 'role',
//     component: () => import('./views/role'),
//     meta: { navTitle: '????????????', title: '????????????' }
//   },
//   {
//     path: 'organizationalStructure',
//     name: 'organizationalStructure',
//     component: () => import('./views/organizationalStructure'),
//     meta: { navTitle: '????????????', title: '????????????' }
//   },
//   {
//     path: 'permission',
//     name: 'permission',
//     component: () => import('./views/permission'),
//     meta: { navTitle: '????????????', title: '????????????' }
//   },
//   {
//     path: 'openLog',
//     name: 'openLog',
//     component: () => import('./views/operationLog'),
//     meta: { navTitle: '????????????', title: '????????????' }
//   },
//   {
//     path: 'personalDetails',
//     name: 'personalDetails',
//     component: () => import('./views/personalDetails'),
//     meta: { navTitle: '????????????', title: '????????????' }
//   }
// ]