import { writable } from 'svelte/store';

export type Element = {
    id: string;
    name: string | null;
    type: string;
    };
export const elements = writable<Element[]>([]);