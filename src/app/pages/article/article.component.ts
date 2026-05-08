import { ChangeDetectionStrategy, Component, computed, effect, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MetaService } from '@wawjs/ngx-core';
import { TranslateService } from '@wawjs/ngx-translate';
import { ArticleService } from '../../feature/article/article.service';
import { companyProfile } from '../../feature/company/company.data';
import { LanguageService } from '../../feature/language/language.service';
import { buildAbsoluteUrl } from '../../seo/seo.utils';
import { CanonicalService } from '../../services/canonical.service';
import { TranslatePipe } from '../../shared/translate.pipe';

@Component({
	imports: [RouterLink, TranslatePipe],
	templateUrl: './article.component.html',
	styleUrl: './article.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleComponent {
	private readonly _articleService = inject(ArticleService);
	private readonly _canonicalService = inject(CanonicalService);
	private readonly _languageService = inject(LanguageService);
	private readonly _metaService = inject(MetaService);
	private readonly _route = inject(ActivatedRoute);
	private readonly _title = inject(Title);
	private readonly _translateService = inject(TranslateService);
	private readonly _params = toSignal(this._route.paramMap, {
		initialValue: this._route.snapshot.paramMap,
	});

	protected readonly article = computed(() =>
		this._articleService.findArticleBySlug(this._params().get('id')),
	);
	protected readonly body = computed(() => this.article()?.body ?? []);

	constructor() {
		effect(() => {
			this._languageService.language();
			const article = this.article();

			if (!article) {
				this._title.setTitle(`Articles | ${companyProfile.name}`);
				this._metaService.applyMeta({
					title: 'Articles',
					description: 'New posts are on the way',
					image: buildAbsoluteUrl('/logo.png'),
				});
				this._canonicalService.setCanonicalUrl('/articles');
				return;
			}

			const title = this._translateService.translate(article.title)();
			const description = this._translateService.translate(article.summary)();

			this._title.setTitle(`${title} | ${companyProfile.name}`);
			this._metaService.applyMeta({
				title,
				description,
				image: buildAbsoluteUrl('/logo.png'),
			});
			this._canonicalService.setCanonicalUrl(`/article/${article.slug}`);
		});
	}
}
