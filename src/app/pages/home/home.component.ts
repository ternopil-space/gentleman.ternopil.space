import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '../../shared/translate.pipe';

@Component({
	imports: [RouterLink, TranslatePipe],
	templateUrl: './home.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
	protected readonly rooms = [
		{
			label: 'Single',
			price: '990 грн',
			img: 'https://gentleman.te.ua/wp-content/uploads/2022/09/img_7716-400x400.jpg',
			href: 'https://www.gentleman.te.ua/bronyuvannya-nomeru-v-goteli/',
		},
		{
			label: 'Standard',
			price: '1 250 грн',
			img: 'https://gentleman.te.ua/wp-content/uploads/2018/10/DSC_2565-R1-c-400x400.jpg',
			href: 'https://www.gentleman.te.ua/bronyuvannya-nomeru-v-goteli/',
		},
		{
			label: 'Standard Plus',
			price: '1 350 грн',
			img: 'https://gentleman.te.ua/wp-content/uploads/2018/10/DSC_1806-R-400x400.jpg',
			href: 'https://www.gentleman.te.ua/bronyuvannya-nomeru-v-goteli/',
		},
		{
			label: 'Junior Suite',
			price: '1 650 грн',
			img: 'https://gentleman.te.ua/wp-content/uploads/2018/10/DSC_1803-R-400x400.jpg',
			href: 'https://www.gentleman.te.ua/bronyuvannya-nomeru-v-goteli/',
		},
		{
			label: 'Suite',
			price: '2 400 грн',
			img: 'https://gentleman.te.ua/wp-content/uploads/2022/09/photo_2022-09-15_07-07-41-400x400.jpg',
			href: 'https://www.gentleman.te.ua/bronyuvannya-nomeru-v-goteli/',
		},
		{
			label: 'Deluxe Suite',
			price: '2 700 грн',
			img: 'https://gentleman.te.ua/wp-content/uploads/2018/10/DSC_2596-R-400x400.jpg',
			href: 'https://www.gentleman.te.ua/bronyuvannya-nomeru-v-goteli/',
		},
	];

	protected readonly conferenceImages = [
		'https://gentleman.te.ua/wp-content/uploads/2025/09/1-2.jpg',
		'https://gentleman.te.ua/wp-content/uploads/2023/06/ci2a6077.jpg',
		'https://gentleman.te.ua/wp-content/uploads/2025/09/2-1.jpg',
		'https://gentleman.te.ua/wp-content/uploads/2023/06/ci2a6092.jpg',
		'https://gentleman.te.ua/wp-content/uploads/2023/06/ci2a6088.jpg',
	];

	protected readonly banquetImages = [
		'https://gentleman.te.ua/wp-content/uploads/2025/09/b1.jpg',
		'https://gentleman.te.ua/wp-content/uploads/2025/09/b2.jpg',
		'https://gentleman.te.ua/wp-content/uploads/2025/09/b3.jpg',
		'https://gentleman.te.ua/wp-content/uploads/2025/09/b4.jpg',
		'https://gentleman.te.ua/wp-content/uploads/2025/09/b5.jpg',
	];

	protected readonly barImages = [
		'https://gentleman.te.ua/wp-content/uploads/2018/10/DSC_2714-R.jpg',
		'https://gentleman.te.ua/wp-content/uploads/2018/10/DSC_2706-HDR-R.jpg',
		'https://gentleman.te.ua/wp-content/uploads/2018/10/DSC_2710-R-.jpg',
		'https://gentleman.te.ua/wp-content/uploads/2018/10/DSC_2697-HDR-R-.jpg',
		'https://gentleman.te.ua/wp-content/uploads/2018/10/DSC_2696-R.jpg',
		'https://gentleman.te.ua/wp-content/uploads/2018/10/DSC_2684-HDR-R2.jpg',
	];
}
