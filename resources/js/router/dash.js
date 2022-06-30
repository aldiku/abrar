
import createRouter from '@spaceavocado/svelte-router';
import Dashboard from '../components/dashboard/Dashboard.svelte';
import BuatMateri from '../components/dashboard/BuatMateri.svelte';
import Obrolan from '../components/dashboard/Obrolan.svelte';
import Tes from '../components/dashboard/Tes.svelte';

const routes = [
    {
        path: '/dashboard',
        component: Dashboard
    },
    {
        path: '/dashboard/materi',
        component: BuatMateri
    },
    {
        path: '/dashboard/obrolan',
        component: Obrolan
    },
    {
        path: '/dashboard/tes',
        component: Tes
    }
]

const router = createRouter({
    routes,
})

export default router