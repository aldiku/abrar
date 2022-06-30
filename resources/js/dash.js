// require('./bootstrap');

import App from "./components/Dash.svelte";
import router from './router/dash.js';
import "bootstrap";

const app = new App({
    target: document.querySelector('#app')
})

window.app = app
export default app