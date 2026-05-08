import { RenderMode, ServerRoute } from '@angular/ssr';
import { articleSlugs } from './feature/article/article.service';
import { dishSlugs } from './feature/dish/dish.data';
import { roomSlugs } from './feature/room/room.service';

export const serverRoutes: ServerRoute[] = [
	{
		path: 'article/:id',
		renderMode: RenderMode.Prerender,
		async getPrerenderParams() {
			return articleSlugs.map((id) => ({ id }));
		},
	},
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
