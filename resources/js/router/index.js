import createRouter from '@spaceavocado/svelte-router';
import materiIndex from '../components/materi/index.svelte';
import MateriDetail from '../components/materi/MateriDetail.svelte';
import UnivDetail from '../components/univ/UnivDetail.svelte';
import Category from '../components/category/index.svelte';
import CategoryDetail from '../components/category/CategoryDetail.svelte';
import home from '../components/home.svelte';
import Login from '../components/Login.svelte';
import notFound from '../components/notFound.svelte';
const routes = [
    {
        path: '/',
        component: home
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/jelajah',
        component: Category
    },
    {
        path: '/materi/:slug',
        component: MateriDetail,
        props: true
    },
    {
        path: '/univ/:slug',
        component: UnivDetail,
        props: true
    },
    {
        path: '/category',
        component: Category,
    },
    {
        path: '/category/:slug',
        component: CategoryDetail,
        props: true
    },
    {
        path: 'pathMatch(.*)*',
        component: notFound
    }
]

const router = createRouter({
    routes,
})

export default router