import {writable} from 'svelte/store';

export const logWith = writable(localStorage.getItem('logWith') || '');
logWith.subscribe((val)=>localStorage.setItem('logWith',val));

export const ethAddress = writable(localStorage.getItem('ethAddress') || '');
ethAddress.subscribe((val)=>localStorage.setItem('ethAddress',val));