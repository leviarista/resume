import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'Leví',
		lastName: 'Arista Sánchez',
		linkedin: 'https://pe.linkedin.com/in/levi-arista',
		github: 'https://github.com/leviarista',
		gitlab: 'https://gitlab.com/levi.arista',
		stackoverflow: 'https://es.stackoverflow.com/users/78168/levi-arista',
	}
});

export default app;