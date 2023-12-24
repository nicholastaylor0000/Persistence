<!-- src/routes/+page.svelte -->
<script lang="ts">
	import { todos } from '$lib/stores';
	import { addTodo } from '$lib/todos';

	let text = '';

	let handleClick = (e: Event) => {
		addTodo(text);
	};
</script>

<div>
	<h1>Persistence</h1>
	<input bind:value={text} />
	<button on:click={handleClick}>Add Todo</button>

	<ul>
		{#each $todos as todo}
			<li>{todo.text}</li>
		{/each}
	</ul>
</div>

<style>

</style>