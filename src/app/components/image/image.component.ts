import { ChangeDetectionStrategy, Component, HostListener, input, signal } from '@angular/core';
import { TranslatePipe } from '../../shared/translate.pipe';

@Component({
	selector: 'app-image',
	imports: [TranslatePipe],
	templateUrl: './image.component.html',
	styleUrl: './image.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageComponent {
	readonly src = input.required<string>();
	readonly alt = input.required<string>();
	readonly imgClass = input<string>('');
	readonly loading = input<'lazy' | 'eager'>('lazy');
	readonly width = input<number | string | undefined>(undefined);
	readonly height = input<number | string | undefined>(undefined);

	protected readonly isOpen = signal(false);

	protected open(): void {
		this.isOpen.set(true);
	}

	protected close(): void {
		this.isOpen.set(false);
	}

	@HostListener('document:keydown.escape')
	protected onEscape(): void {
		this.isOpen.set(false);
	}
}
