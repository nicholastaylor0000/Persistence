// stores.ts

import { writable } from 'svelte/store';

interface Todo {
	text: string;
}

export const todos = writable<Todo[]>([]);
