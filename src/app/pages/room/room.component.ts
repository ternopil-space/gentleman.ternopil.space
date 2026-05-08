import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TranslatePipe } from '../../shared/translate.pipe';
import { RoomService } from '../../feature/room/room.service';

@Component({
	imports: [NgOptimizedImage, RouterLink, TranslatePipe],
	templateUrl: './room.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoomComponent {
	private readonly _roomService = inject(RoomService);
	private readonly _route = inject(ActivatedRoute);
	private readonly _params = toSignal(this._route.paramMap, {
		initialValue: this._route.snapshot.paramMap,
	});

	protected readonly room = computed(() => {
		const slug = this._params().get('slug');
		return this._roomService.rooms().find((r) => r.slug === slug) ?? null;
	});

	protected readonly contactLinks = [
		{
			label: 'Call us',
			href: 'tel:+380985519900',
			description: '+38 (098) 55 19 900',
		},
		{
			label: 'Email us',
			href: 'mailto:gentleman_hotel@ukr.net',
			description: 'gentleman_hotel@ukr.net',
		},
	];
}
