<script>
	var time = '';
	function updateClock() {
		var now = new Date(), // current date
				hour = now.getHours(),
				minutes = now.getMinutes(),
				sep = ':',
				ampm = 'am';
		
		if (hour >= 12) {
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

<nav class="px-4 py-3 flex items-baseline top-0 w-full bg-white uppercase text-xs tracking-wider font-medium">
	<h1 class="lg:w-2/12 w-1/2">Maxim Siebert</h1>
	<div class="lg:w-10/12 w-1/2 flex flex-wrap text-gray-600">
		<div class="lg:w-4/12 w-full">
			<a class="block hover:text-black" href="mailto:maxim@hey.com">Email</a>
			<a class="block hover:text-black" href="https://twitter.com/MaximSiebert" target="_blank" rel="noopener noreferrer">Twitter</a>
		</div>
		<div class="lg:w-4/12 w-full">
			<a class="block hover:text-black" href="https://dribbble.com/MaximSiebert" target="_blank" rel="noopener noreferrer">Dribbble</a>
			<a class="block hover:text-black" href="https://www.linkedin.com/in/maximsiebert/" target="_blank" rel="noopener noreferrer">Linkedin</a>
		</div>
		<p class="lg:block hidden w-4/12">Toronto — {time}</p>
	</div>
</nav>
