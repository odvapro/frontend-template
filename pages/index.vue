<script setup>
	useSeoMeta({
		title      : 'MedPulse - Медицинские новости',
		description: 'Актуальные медицинские новости и исследования',
		keywords   : 'медицина, новости, исследования, здоровье',
	});

	// Данные для главной новости
	const heroNews = {
		title: 'Новое исследование: вакцина против гриппа снижает риск инсульта на 15%',
		source: 'medportal.ru',
		description: 'Учёные выявили неожиданный защитный эффект сезонной вакцинации.',
		date: '15 авг. 25г',
		imageUrl: 'https://avatars.mds.yandex.net/i?id=2dcdec5949a38788cfaf681467d01037_l-5227767-images-thumbs&n=13'
	};

	// Данные для списка новостей
	const newsItems = [
		{
			id: 1,
			title: 'Новое исследование: вакцина против гриппа снижает риск',
			source: 'medportal.ru',
			description: 'Учёные выявили неожиданный защитный эффект сезонной вакцинации.',
			points: 158,
			category: 'Кардиология',
			date: '15 авг. 25г'
		},
		{
			id: 2,
			title: 'Новое исследование: вакцина против гриппа снижает риск',
			source: 'medportal.ru',
			description: 'Учёные выявили неожиданный защитный эффект сезонной вакцинации.',
			points: 158,
			category: 'Кардиология',
			date: '15 авг. 25г'
		},
		{
			id: 3,
			title: 'Новое исследование: вакцина против гриппа снижает риск',
			source: 'medportal.ru',
			description: 'Учёные выявили неожиданный защитный эффект сезонной вакцинации.',
			points: 158,
			category: 'Кардиология',
			date: '15 авг. 25г'
		},
		{
			id: 4,
			title: 'Новое исследование: вакцина против гриппа снижает риск',
			source: 'medportal.ru',
			description: 'Учёные выявили неожиданный защитный эффект сезонной вакцинации.',
			points: 158,
			category: 'Кардиология',
			date: '15 авг. 25г'
		},
		{
			id: 5,
			title: 'Новое исследование: вакцина против гриппа снижает риск',
			source: 'medportal.ru',
			description: 'Учёные выявили неожиданный защитный эффект сезонной вакцинации.',
			points: 158,
			category: 'Кардиология',
			date: '15 авг. 25г'
		},
		{
			id: 6,
			title: 'Новое исследование: вакцина против гриппа снижает риск',
			source: 'medportal.ru',
			description: 'Учёные выявили неожиданный защитный эффект сезонной вакцинации.',
			points: 158,
			category: 'Кардиология',
			date: '15 авг. 25г'
		}
	];
</script>

<template>
	<div class="index-page container">
		<div class="index-page__main">
			<NewsList
				:hero-news="heroNews"
				:news-items="newsItems"
			/>
		</div>
		
		<div class="index-page__sidebar">
			<Sidebar />
		</div>
	</div>
</template>

<style lang='scss'>
	.index-page
	{
		display: flex;
		gap: 20px;
		margin-top: 20px;	
	}
	
	.index-page__sidebar
	{
		width: 380px;
	}
</style>