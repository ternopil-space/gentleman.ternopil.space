import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '../../shared/translate.pipe';
import { RoomService } from '../../feature/room/room.service';

type ContactLink = {
	label: string;
	href: string;
	description: string;
};

@Component({
	imports: [NgOptimizedImage, RouterLink, TranslatePipe],
	templateUrl: './rooms.component.html',
	styleUrl: './rooms.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoomsComponent {
	private readonly _roomService = inject(RoomService);

	protected readonly amenities = [
		'Wi-Fi in every room',
		'Individual air conditioning',
		'Cable TV',
		'Shower and hairdryer',
		'Room service',
		'Free secured parking',
		'24/7 security',
		'Restaurant and bar on-site',
		'Balcony',
		'City view',
	];

	protected readonly rooms = this._roomService.rooms;
	protected readonly isLoading = this._roomService.isLoading;
	protected readonly hasRooms = computed(() => this.rooms().length > 0);

	protected readonly contactLinks: ContactLink[] = [
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
