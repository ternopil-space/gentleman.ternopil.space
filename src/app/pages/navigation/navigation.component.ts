import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateDirective } from '@wawjs/ngx-translate';
import { TranslatePipe } from '../../shared/translate.pipe';

@Component({
	imports: [RouterLink, TranslateDirective, TranslatePipe],
	templateUrl: './navigation.component.html',
	styleUrl: './navigation.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationComponent {
	protected readonly navItems = [
		{ label: 'Menu', icon: 'restaurant_menu', route: '/menu' },
		{ label: 'Favorites', icon: 'favorite', route: '/favorites' },

		{ label: 'Rooms', icon: 'hotel', route: '/rooms' },
		{ label: 'Spa', icon: 'spa', route: '/spa' },

		{ label: 'Team', icon: 'group', route: '/team' },
		{ label: 'Jobs', icon: 'work', route: '/jobs' },

		{ label: 'Articles', icon: 'article', route: '/articles' },
		{ label: 'Reviews', icon: 'rate_review', route: '/reviews' },

		{ label: 'Events', icon: 'event', route: '/events' },
		{ label: 'Quests', icon: 'explore', route: '/quests' },

		{ label: 'Sales', icon: 'sell', route: '/sales' },
		{ label: 'Products', icon: 'shopping_bag', route: '/products' },

		{ label: 'Hotel Rules', icon: 'gavel', route: '/rules' },
		{ label: 'About', icon: 'info', route: '/about' },
	];
}
