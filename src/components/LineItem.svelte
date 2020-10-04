<script>
	export let firstColumn = "",
	secondColumn = "",
	thirdColumn = "",
	url = "";
</script>

<a href={url} class="transition-colors duration-100 group flex sm:text-xl text-sm tracking-tight md:py-2 py-1 hover:bg-gray-100 px-4" target="_blank" rel="noopener noreferrer">
  <div class="lg:w-10/12 w-full ml-auto flex items-center">
    <span class="block md:w-4/12 w-1/2">{firstColumn}</span>
    <span class="transition-colors duration-100 text-gray-600 group-hover:text-black md:block hidden w-4/12">{secondColumn}</span>
    <span class="transition-colors duration-100 text-gray-600 group-hover:text-black block md:w-4/12 w-1/2 lg:text-left text-right">{thirdColumn}</span>
  </div>
</a>