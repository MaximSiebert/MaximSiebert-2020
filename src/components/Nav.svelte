<script>
	var time = '';
	function updateClock() {
		var now = new Date(), // current date
				hour = now.getHours(),
				minutes = now.getMinutes(),
				sep = ':',
				ampm = 'am';
		
		if (hour > 12) {
				hour -= 12;
				ampm = 'pm';
		}
				
		minutes = minutes < 10 ? '0' + minutes : minutes;
		hour = hour % 12;
		hour = hour ? hour : 12; // the hour '0' should be '12'

		// set the content of the element with the ID time to the formatted string
		time = hour + sep + minutes + ' ' + ampm;

		// call this function again in 1000ms
		setTimeout(updateClock, 1000);
	}

	updateClock(); // initial call
</script>

<nav class="px-4 py-3 flex items-center sticky top-0 w-full bg-white">
	<h1 class="w-2/12">Maxim Siebert</h1>
	<p class="w-8/12">Designer & Developer</p>
	<p class="w-2/12 ml-auto text-right">Toronto — {time}</p>
	<!-- <ul>
		<li><a aria-current="{segment === undefined ? 'page' : undefined}" href=".">home</a></li>
		<li><a aria-current="{segment === 'about' ? 'page' : undefined}" href="about">about</a></li>

		<li><a rel=prefetch aria-current="{segment === 'blog' ? 'page' : undefined}" href="blog">blog</a></li>
	</ul> -->
</nav>
