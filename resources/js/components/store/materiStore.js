import {writable} from 'svelte/store';

export const title = writable(localStorage.getItem('title') || ''); title.subscribe((val)=>localStorage.setItem('title',val));
export const thumb = writable(localStorage.getItem('thumb') || ''); thumb.subscribe((val)=>localStorage.setItem('thumb',val));
export const description = writable(localStorage.getItem('description') || ''); description.subscribe((val)=>localStorage.setItem('description',val));
export const kelas = writable(localStorage.getItem('kelas') || ''); kelas.subscribe((val)=>localStorage.setItem('kelas',val));