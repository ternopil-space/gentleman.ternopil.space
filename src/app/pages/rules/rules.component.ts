import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslatePipe } from '../../shared/translate.pipe';

@Component({
	imports: [TranslatePipe],
	templateUrl: './rules.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RulesComponent {}
