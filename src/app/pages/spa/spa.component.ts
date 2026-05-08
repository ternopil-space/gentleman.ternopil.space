import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslatePipe } from '../../shared/translate.pipe';

@Component({
	imports: [TranslatePipe],
	templateUrl: './spa.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpaComponent {}
