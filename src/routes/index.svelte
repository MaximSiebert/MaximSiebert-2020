<script context="module">
	const getProject = function preload({ params, query }) {
		return this.fetch(`content/projects.json`).then(r => r.json()).then(projects => {
			return { projects };
		});
	}

	const getExperiences = function preload({ params, query }) {
		return this.fetch(`content/experiences.json`).then(r => r.json()).then(experiences => {
			return { experiences };
		});
	}

	export {getProject, getExperiences}
</script>

<script>
	import {onMount} from 'svelte'
	import Carousel from '@beyonk/svelte-carousel'

	import LineItem from '../components/LineItem.svelte';
	import TableHead from '../components/TableHead.svelte';

	export let projects;
	let experiences = [];
	let collaborators = [];
	
	onMount(async () => {

		// Projects
		const projectsContent = await fetch(`content/projects.json`)
		const projectsJson = await projectsContent.json()
		projects = projectsJson

		// Experiences
		const experiencesContent = await fetch(`content/experiences.json`)
		const experiencesJson = await experiencesContent.json()
		experiences = experiencesJson

		// Collaborators
		const collaboratorsContent = await fetch(`content/collaborators.json`)
		const collaboratorsJson = await collaboratorsContent.json()
		collaborators = collaboratorsJson

	});
	
</script>

<svelte:head>
	<title>Maxim Siebert</title>
</svelte:head>

<div class="px-4 lg:pt-48 md:pt-32 pt-20 md:pb-24 pb-12">
	<div class="lg:w-10/12 ml-auto">
		<h2 class="max-w-4xl md:text-6xl text-4xl md:mb-12 mb-6 leading-none font-medium tracking-tight">Maxim is a French Canadian Designer & Developer.</h2>
		<div class="flex flex-wrap text-gray-600 text-sm">
			<p class="lg:w-4/12 sm:w-1/2 sm:mb-0 mb-3 w-full lg:pr-16 sm:pr-8">He designs and develops modular, accessible, and performant systems which he uses to build well-crafted sites and applications. He does research, tries new things, and has honest conversations in order to find the best solutions.</p>
			<p class="lg:w-4/12 sm:w-1/2 w-full lg:pr-16 sm:pr-8">He currently leads design at <a class="text-black underline hover:no-underline" href="https://planetary.co/" target="_blank" rel="noopener noreferrer">Planetary</a> and runs a studio called  <a class="text-black underline hover:no-underline" href="https://blunt.af/" target="_blank" rel="noopener noreferrer">Blunt</a>. This site lists most of the work he's done over the years, if you'd like to collaborate with Maxim please fill up this <a class="text-black underline hover:no-underline" href="https://form.typeform.com/to/mTEtzf" target="_blank" rel="noopener noreferrer">form</a>.</p>
		</div>
	</div>
</div>

<div class="mb-3 bg-gray-100">
	<Carousel
		perPage={{ 1000: 4, 768: 2, 500: 2, 100: 2 }}
		dots={false}
		loop={true}
		threshold={1}
	>
			<img
				class="w-full h-auto"
				src="https://cdn.dribbble.com/users/203186/screenshots/2653568/disrupt.gif"
				alt="Disrupt"
			/>
			<img
				class="w-full h-auto"
				src="https://cdn.dribbble.com/users/203186/screenshots/2539744/beautiful-stores.gif"
				alt="Beautiful Stores"
			/>
			<img
				class="w-full h-auto"
				src="https://cdn.dribbble.com/users/203186/screenshots/3389462/backy.png"
				alt="Bac Ky Website"
			/>
			<img
				class="w-full h-auto"
				src="https://cdn.dribbble.com/users/203186/screenshots/4236525/five-2.gif"
				alt="Viewport Design #5"
			/>
			<img
				class="w-full h-auto"
				src="https://cdn.dribbble.com/users/203186/screenshots/3654797/curate-2.jpg"
				alt="Curate"
			/>
	</Carousel>
</div>

<TableHead
	sectionTitle="Projects"
	sectionCount={projects.length}
	firstColumn="Title"
	secondColumn="Role"
	thirdColumn="Year"
/>

<div class="w-full md:mb-20 sm:mb-12 mb-8">
	{#each projects as project}
		<LineItem
			firstColumn={project.title}
			secondColumn={project.role}
			thirdColumn={project.year}
			url={project.url}
		/>
	{/each}
</div>


<TableHead
	sectionTitle="Experience"
	firstColumn="Name"
	secondColumn="Title"
	thirdColumn="Duration"
	border
/>

<div class="w-full md:mb-20 sm:mb-12 mb-8">
	{#each experiences as experience}
		<LineItem
			firstColumn={experience.title}
			secondColumn={experience.role}
			thirdColumn={experience.date}
			url={experience.url}
		/>
	{/each}
</div>




<TableHead
	sectionTitle="Collaborators"
	border
/>
<div class="px-4">
<div class="ml-auto lg:w-10/12 w-full flex flex-wrap md:mb-20 sm:mb-12 mb-8">
	{#each collaborators as collaborator}
		<div class="lg:w-4/12 w-1/2 py-2 sm:text-xl lg:even:text-left even:text-right">
			<a href={collaborator.url} class="text-gray-600 hover:text-black">{collaborator.title}</a>
		</div>
	{/each}
</div>
</div>