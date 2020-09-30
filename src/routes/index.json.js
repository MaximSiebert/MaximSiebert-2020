import work from './_projects.js';
import jobs from './_experiences.js';

const projects = JSON.stringify(work.map(project => {
	return {
		title: project.title,
		role: project.role,
		year: project.year,
		url: project.url
	};
}));

const experiences = JSON.stringify(jobs.map(experience => {
	return {
		title: experience.title,
		role: experience.role,
		date: experience.date,
		url: experience.url
	};
}));

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(projects);
}