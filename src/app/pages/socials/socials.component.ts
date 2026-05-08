import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslatePipe } from '../../shared/translate.pipe';
import { ImageComponent } from '../../components/image/image.component';

@Component({
	imports: [NgOptimizedImage, TranslatePipe, ImageComponent],
	templateUrl: './socials.component.html',
	styleUrl: './socials.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SocialsComponent {}
