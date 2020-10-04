import content from './_images.js';

const images = JSON.stringify(content.map(image => {
	return {
		title: image.title,
		url: image.url
	};
}));

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(images);
}