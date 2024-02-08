<script lang="ts">
	import Drawer from '$lib/components/Drawer.svelte';
	import { elements, type Element } from '$lib/stores';
	import {v4 as uuidv4} from 'uuid';
	import ElementEditor from './ElementEditor.svelte';

	const tagNames = ['div', 'button', 'input', 'img', 'a'];
	const tagDescriptions = [
		'A generic container element. Use for anything static.',
		'A button element. Use for clickable elements',
		'An input element. Use for when you need to collect user input.',
		'An image element. Use for displaying images.',
		'An anchor element. Use for linking to other pages.'
	];
	let mouseOverTagDescription: string | null = null;

	const handleClickTag = (
		_e: MouseEvent & { currentTarget: EventTarget & HTMLButtonElement },
		tag: string
	) => {
		$elements.push({
            type: tag,
            name: null,
            id: uuidv4()
        });
		$elements = $elements;
	};

	const handleMouseEnter = (
		_e: MouseEvent & { currentTarget: EventTarget & HTMLButtonElement },
		tag: string
	) => {
		const index = tagNames.indexOf(tag);
		mouseOverTagDescription = tagDescriptions[index];
	};

	const handleMouseLeave = () => {
		mouseOverTagDescription = null;
	};

	const handleClickElement = (
		e: MouseEvent & { currentTarget: EventTarget & HTMLButtonElement },
        element: Element
	) => {
		console.log(element);
	};
</script>

<Drawer>
	<div class="top">
		<h2>Element Drawer</h2>
		<button>{'<='}</button>
	</div>
	<div class="intro">Select a tag to add to your app. This will create an element.</div>
	<div class="elements">
		{#each tagNames as tag, i}
			<button
				on:mouseenter={(e) => handleMouseEnter(e, tag)}
				on:mouseleave={handleMouseLeave}
				on:click={(e) => handleClickTag(e, tag)}>{tag}</button
			>
		{/each}
	</div>
	<div class="description">
		{#if mouseOverTagDescription}
			{mouseOverTagDescription}
		{/if}
	</div>
	{#each $elements as element}
		<button on:click={(e) => handleClickElement(e, element)} class="tag">{element.name ? element.name : element.type}</button>
        <ElementEditor id={element.id}/>
	{/each}
</Drawer>

<style>
	.top {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 16px;
	}
	h2 {
		margin-bottom: 7.11px;
	}
	.intro,
	.description {
		margin-bottom: 16px;
	}
	.description {
		height: 36px;
	}
	.elements {
		display: flex;
		flex-wrap: wrap;
		gap: 7.11px;
		margin-bottom: 16px;
	}
	.tag {
		margin-bottom: 7.11px;
		background: #333;
		border: 1px solid white;
		color: white;
		width: 100%;
	}
	.tag:hover {
		background: white;
		color: black;
		border-color: black;
	}
</style>
