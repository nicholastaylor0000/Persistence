// todos.ts

import { todos } from './stores';

export function addTodo(text: string) {
  todos.update(current => [...current, { text }]); 
}
