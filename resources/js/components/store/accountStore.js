import {writable} from 'svelte/store';

export const logWith = writable(localStorage.getItem('logWith') || '');
logWith.subscribe((val)=>localStorage.setItem('logWith',val));

export const ethAddress = writable(localStorage.getItem('ethAddress') || '');
ethAddress.subscribe((val)=>localStorage.setItem('ethAddress',val));

export const network = writable(localStorage.getItem('network') || '');
network.subscribe((val)=>localStorage.setItem('network',val));