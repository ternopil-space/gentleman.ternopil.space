import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslatePipe } from '../../shared/translate.pipe';

@Component({
	imports: [TranslatePipe],
	templateUrl: './about.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent {}
