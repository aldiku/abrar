// require('./bootstrap');

import App from "./components/App.svelte";
import router from './router';
import "bootstrap";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/dist/sweetalert2.css'
window.Swal = Swal;
const toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
})
window.toast = toast;


const app = new App({
    target: document.querySelector('#app')
})

window.app = app
export default app