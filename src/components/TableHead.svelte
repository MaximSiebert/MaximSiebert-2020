<script>
  export let sectionTitle = "",
	sectionCount = "",
	firstColumn = "",
	secondColumn = "",
	thirdColumn = "",
	border = false
</script>

<div class="px-4 py-3 flex flex-wrap uppercase text-xs tracking-wider font-medium {border && 'border-t border-gray-200'}">
  <div class="lg:w-2/12">
    {sectionTitle}
    <span class="numerator">{sectionCount}</span>
  </div>
	<div class="flex lg:w-10/12 w-1/2 ml-auto text-gray-500">
		<span class="lg:block hidden w-4/12">{firstColumn}</span>
		<span class="lg:block hidden w-4/12">{secondColumn}</span>
		<span class="block lg:w-4/12 w-full lg:text-left text-right">{thirdColumn}</span>
	</div>
</div>