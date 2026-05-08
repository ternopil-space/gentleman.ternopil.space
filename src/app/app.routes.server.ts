import { RenderMode, ServerRoute } from '@angular/ssr';
import { dishSlugs } from './feature/dish/dish.data';
import { roomSlugs } from './feature/room/room.service';

export const serverRoutes: ServerRoute[] = [
	{
		path: 'dish/:slug',
		renderMode: RenderMode.Prerender,
		async getPrerenderParams() {
			return dishSlugs.map((slug) => ({ slug }));
		},
	},
	{
		path: 'rooms/:slug',
		renderMode: RenderMode.Prerender,
		async getPrerenderParams() {
			return roomSlugs.map((slug) => ({ slug }));
		},
	},
	{
		path: '**',
		renderMode: RenderMode.Prerender,
	},
];
