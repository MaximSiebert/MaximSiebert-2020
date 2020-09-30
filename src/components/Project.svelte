<script>
	export let title = "",
	role = "",
	year = "",
	url = "";
</script>

<a href={url} class="group flex text-2xl tracking-tight border-t last:border-b border-gray-200 py-2 hover:bg-gray-100 px-4" target="_blank" rel="noopener noreferrer">
  <div class="w-10/12 ml-auto flex items-center">
    <span class="block w-4/12">{title}</span>
    <span class="text-gray-600 group-hover:text-black block w-4/12 pl-8">{role}</span>
    <span class="text-gray-600 group-hover:text-black block w-4/12 text-right ml-auto">{year}</span>
  </div>
</a>