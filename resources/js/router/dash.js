
import createRouter from '@spaceavocado/svelte-router';
import Dashboard from '../components/dashboard/Dashboard.svelte';
import BuatMateri from '../components/dashboard/BuatMateri.svelte';
import BuatMateri2 from '../components/dashboard/BuatMateri2.svelte';
import BuatMateri3 from '../components/dashboard/BuatMateri3.svelte';
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
        path: '/dashboard/materi/step2',
        component: BuatMateri2
    },
    {
        path: '/dashboard/materi/step3',
        component: BuatMateri3
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