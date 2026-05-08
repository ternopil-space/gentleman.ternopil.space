import { Injectable, signal } from '@angular/core';
import roomsData from '../../../data/rooms.json';
import { Room } from './room.interface';

const _fallbackRooms: Room[] = _normalizeRooms(roomsData as unknown[]);

@Injectable({
	providedIn: 'root',
})
export class RoomService {
	readonly rooms = signal<Room[]>(_fallbackRooms);
	readonly isLoading = signal(true);

	resolveRooms(rooms: Partial<Room>[] | null | undefined) {
		this.rooms.set(
			Array.isArray(rooms) && rooms.length > 0
				? _normalizeRooms(rooms as unknown[])
				: _fallbackRooms,
		);
		this.isLoading.set(false);
	}

	finishLoading() {
		this.isLoading.set(false);
	}
}

function _normalizeRooms(rooms: unknown[]) {
	return rooms
		.map((room) => _normalizeRoom(room as Record<string, unknown>))
		.filter((room): room is Room => Boolean(room));
}

function _normalizeRoom(room: Record<string, unknown> | null | undefined): Room | null {
	if (!room?.['name'] || !room['image']) {
		return null;
	}

	const amenities = Array.isArray(room['amenities'])
		? (room['amenities'] as unknown[]).filter((a): a is string => typeof a === 'string')
		: [];

	return {
		slug: typeof room['slug'] === 'string' ? room['slug'] : '',
		name: room['name'] as string,
		description: typeof room['description'] === 'string' ? room['description'] : '',
		price: typeof room['price'] === 'string' ? room['price'] : '',
		capacity: typeof room['capacity'] === 'string' ? room['capacity'] : '',
		extraPerson: typeof room['extraPerson'] === 'string' ? room['extraPerson'] : undefined,
		image: room['image'] as string,
		imageAlt:
			typeof room['imageAlt'] === 'string' ? room['imageAlt'] : (room['name'] as string),
		amenities,
	};
}
