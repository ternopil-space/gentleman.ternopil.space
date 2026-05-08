import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslatePipe } from '../../shared/translate.pipe';
import { ImageComponent } from '../../components/image/image.component';

@Component({
	imports: [TranslatePipe, ImageComponent],
	templateUrl: './about.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent {}
