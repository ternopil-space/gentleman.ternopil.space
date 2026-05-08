import { Injectable, signal } from '@angular/core';
import articlesData from '../../../data/articles.json';
import { Article } from './article.interface';

type RawArticle = Partial<Omit<Article, 'body'>> & {
	body?: unknown;
	[key: string]: unknown;
};

const _fallbackArticles: Article[] = _normalizeArticles(articlesData as RawArticle[]);

export const articleSlugs = _fallbackArticles.map((article) => article.slug);

@Injectable({
	providedIn: 'root',
})
export class ArticleService {
	readonly articles = signal<Article[]>(_fallbackArticles);
	readonly isLoading = signal(true);

	resolveArticles(articles: RawArticle[] | null | undefined) {
		this.articles.set(
			Array.isArray(articles) && articles.length > 0
				? _normalizeArticles(articles)
				: _fallbackArticles,
		);
		this.isLoading.set(false);
	}

	finishLoading() {
		this.isLoading.set(false);
	}

	findArticleBySlug(slug: string | null | undefined) {
		return this.articles().find((article) => article.slug === slug) ?? null;
	}
}

function _normalizeArticles(articles: RawArticle[]) {
	return articles
		.map((article, index) => _normalizeArticle(article, index))
		.filter((article): article is Article => Boolean(article));
}

function _normalizeArticle(article: RawArticle, index: number): Article | null {
	const title = _stringOrFallback(article.title ?? article['name'] ?? article['headline']);
	const summary = _stringOrFallback(
		article.summary ?? article['excerpt'] ?? article['description'],
	);

	if (!title || !summary) {
		return null;
	}

	const slugSource = article.slug ?? article['id'] ?? title;

	return {
		slug: _slugOrFallback(slugSource, index),
		title,
		summary,
		category: _stringOrFallback(article.category ?? article['tag'], 'Article'),
		publishedAt: _stringOrFallback(article.publishedAt ?? article['date']),
		body: _normalizeBody(article.body),
	};
}

function _normalizeBody(value: unknown): string[] {
	return Array.isArray(value)
		? value
				.map((paragraph) => _stringOrFallback(paragraph as string | number | null | undefined))
				.filter(Boolean)
		: [];
}

function _slugOrFallback(value: unknown, index: number): string {
	if (typeof value === 'number' && Number.isFinite(value)) {
		return `article-${value}`;
	}

	const normalized = _stringOrFallback(value)
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-+|-+$/g, '');

	return normalized || `article-${index + 1}`;
}

function _stringOrFallback(value: unknown, fallback = ''): string {
	if (typeof value === 'number' && Number.isFinite(value)) {
		return String(value);
	}

	return typeof value === 'string' && value.trim().length > 0 ? value.trim() : fallback;
}
