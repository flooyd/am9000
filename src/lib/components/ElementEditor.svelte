<script lang="ts">
	import { elements, type Element } from '$lib/stores';
	import { onMount } from 'svelte';

	export let id: string;
	let element: Element | undefined = $elements.find((e) => e.id === id);
</script>

{#if element}
	<div class="editor">
		<div class="property">
			<label for="name">Name</label>
			<input type="text" id="name" bind:value={element.name} />
		</div>
	</div>
{/if}
