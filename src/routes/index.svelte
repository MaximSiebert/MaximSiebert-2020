<script context="module">
	export async function preload({ params, query }) {

		const getImages = await this.fetch(`content/images.json`);
		const images = await getImages.json();

		const getProjects = await this.fetch(`content/projects.json`);
		const projects = await getProjects.json();

		const getExperiences = await this.fetch(`content/experiences.json`);
		const experiences = await getExperiences.json();

		const getCollaborators = await this.fetch(`content/collaborators.json`);
		const collaborators = await getCollaborators.json();

		return { images, projects, experiences, collaborators }

	}
</script>

<script>
	import LineItem from '../components/LineItem.svelte';
	import TableHead from '../components/TableHead.svelte';
	
	export let images;
	export let projects;
	export let experiences;
	export let collaborators;
	
</script>

<svelte:head>
	<title>Maxim Siebert</title>
</svelte:head>

<div class="px-4 lg:pt-48 md:pt-32 pt-10 md:pb-24 pb-12">
	<div class="lg:w-10/12 ml-auto">
		<h2 class="max-w-4xl md:text-6xl text-4xl md:mb-12 mb-6 leading-none font-medium tracking-tight">Maxim is a French Canadian Designer & Developer.</h2>
		<div class="flex flex-wrap text-gray-600 text-sm">
			<p class="lg:w-4/12 sm:w-1/2 sm:mb-0 mb-3 w-full lg:pr-16 sm:pr-8">He designs and develops modular, accessible, and performant systems which he uses to build well-crafted sites and applications. He does research, tries new things, and has honest conversations in order to find the best solutions.</p>
			<p class="lg:w-4/12 sm:w-1/2 w-full lg:pr-16 sm:pr-8">He currently leads design at <a class="text-black underline hover:no-underline" href="https://planetary.co/" target="_blank" rel="noopener noreferrer">Planetary</a> and runs a studio called  <a class="text-black underline hover:no-underline" href="https://blunt.af/" target="_blank" rel="noopener noreferrer">Blunt</a>. This site lists most of the work he's done over the years, if you'd like to collaborate with Maxim please fill out this <a class="text-black underline hover:no-underline" href="https://form.typeform.com/to/mTEtzf" target="_blank" rel="noopener noreferrer">form</a>.</p>
		</div>
	</div>
</div>

<div class="mb-3 flex whitespace-no-wrap overflow-x-scroll">
	{#each images as image}
		<img
			class="w-auto lg:h-64 h-40"
			loading="lazy"
			src={image.url}
			alt={image.title}
		/>
	{/each}
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
		<div class="lg:w-4/12 w-1/2 sm:py-2 py-1 sm:text-xl text-sm lg:even:text-left even:text-right">
			<a href={collaborator.url} class="transition-colors duration-100 text-gray-600 hover:text-black" target="_blank" rel="noopener noreferrer">{collaborator.title}</a>
		</div>
	{/each}
</div>
</div>