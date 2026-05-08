import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TranslateDirective } from '@wawjs/ngx-translate';
import { ProfileService } from '../../feature/profile/profile.service';
import { TranslatePipe } from '../../shared/translate.pipe';
import { ImageComponent } from '../../components/image/image.component';

@Component({
	imports: [TranslateDirective, TranslatePipe, ImageComponent],
	templateUrl: './team.component.html',
	styleUrl: './team.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamComponent {
	private readonly _profileService = inject(ProfileService);

	protected readonly profiles = this._profileService.profiles;
}
