import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '../../shared/translate.pipe';

@Component({
	imports: [RouterLink, TranslatePipe],
	templateUrl: './restaurant.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RestaurantComponent {}
