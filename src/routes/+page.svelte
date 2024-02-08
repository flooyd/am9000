<script>
	import Dom from '$lib/components/Dom.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import ElementDrawer from '$lib/components/ElementDrawer.svelte';
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true" />
	<link
		href="https://fonts.googleapis.com/css2?family=Orbitron&display=swap"
		rel="stylesheet"
	/></svelte:head
>

<Nav />
<ElementDrawer />
<Dom/>

<style>
	:global(*) {
		box-sizing: border-box;
		font-size: 16px;
        font-family: 'Open Sans', sans-serif;
	}
	:global(body, p, h1, h2, h3) {
		margin: 0px;
	}
	:global(h1) {
		font-size: 36px;
        font-family: 'Orbitron', sans-serif;
	}
	:global(h2) {
		font-size: 24px;
        font-family: 'Orbitron', sans-serif;
	}
    :global(button) {
        padding: 7.11px;
        background: #fff;
        color: black;
        border-radius: 7.11px;
        cursor: pointer;
        border: none;
    }
    :global(button:hover) {
        background: black;
        color: white;
    }
</style>
