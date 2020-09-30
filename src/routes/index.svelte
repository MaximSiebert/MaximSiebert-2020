<script context="module">
	export function preload() {
		return this.fetch(`index.json`)
			.then(r => r.json())
			.then(projects => {
				return { projects };
			})
	}
</script>

<script>
	import Project from '../components/Project.svelte';
	export let projects;
</script>

<svelte:head>
	<title>Maxim Siebert</title>
</svelte:head>

<div class="px-4 pt-40 pb-32">
	<div class="w-10/12 ml-auto">
		<h2 class="max-w-4xl text-6xl mb-12 leading-none font-medium tracking-tight">Maxim is a French Canadian Designer & Developer.</h2>
		<div class="flex text-gray-700">
			<p class="w-4/12 pr-8">He designs and develops modular, accessible, and performant systems which he uses to build well-crafted sites and applications. He does research, tries new things, and has honest conversations in order to find the best solutions.</p>
			<p class="w-4/12 pl-8">He currently leads design at <a class="text-black underline hover:no-underline" href="/">Planetary</a> and runs a studio called Blunt. This site lists most of the work he's done over the years.</p>
		</div>
	</div>
</div>

<div class="px-4 flex flex-wrap">
	<div class="w-2/12">
		<span>Projects ({projects.length})</span>
	</div>
	<div class="w-10/12 ml-auto flex mb-4">
		<span class="block w-4/12">Title</span>
		<span class="block w-4/12  pl-8">Role</span>
		<span class="block w-2/12 text-right ml-auto">Year</span>
	</div>
</div>

<div class="w-full ml-auto mb-32">
	{#each projects as project}
		<Project
			title={project.title}
			role={project.role}
			year={project.year}
			url={project.url}
		/>
	{/each}
</div>


