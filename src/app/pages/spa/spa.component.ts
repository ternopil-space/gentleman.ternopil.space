import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '../../shared/translate.pipe';
import { ImageComponent } from '../../components/image/image.component';

@Component({
	imports: [RouterLink, TranslatePipe, ImageComponent],
	templateUrl: './spa.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpaComponent {}
