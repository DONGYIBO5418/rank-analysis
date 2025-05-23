import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

// 定义路由记录
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/Loading',
    },
    {
        path: '/Record',
        name: 'Record',
        component: () => import('@renderer/views/Record.vue'), // 懒加载
    },
    {
        path: '/Gaming',
        name: 'Gaming',
        component: () => import('@renderer/views/Gaming.vue'), // 懒加载
    },
    {
        path: '/Loading',
        name: 'Loading',
        component: () => import('@renderer/views/Loading.vue'), // 懒加载
    },
    {
        path: '/Settings',
        name: 'Settings',
        redirect: '/Settings/Automation',
        children: [
            {
                path: '/Settings/Automation',
                name: 'Automation',
                component: () => import('@renderer/views/settings/Automation.vue'), // 懒加载
            },
            {
                path: '/Settings/About',
                name: 'About',
                component: () => import('@renderer/views/settings/About.vue'), // 懒加载
            }
        ],
        component: () => import('@renderer/views/Settings.vue'), // 懒加载
    }
];

// 创建路由实例
const router = createRouter({
    history: createWebHashHistory(), // 使用 WebHashHistory 模式
    routes,
});

export function getFirstPath(currentPath:string) {
    return currentPath.split('/')[1];
}

export default router;
