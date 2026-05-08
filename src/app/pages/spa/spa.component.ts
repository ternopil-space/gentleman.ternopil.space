import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	imports: [],
	templateUrl: './spa.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpaComponent {}
