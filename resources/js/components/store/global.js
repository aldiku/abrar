import {writable} from 'svelte/store';

export const APP_URL = writable('process.env.APP_URL');