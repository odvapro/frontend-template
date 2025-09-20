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
		imageUrl: '/images/hero-news.jpg'
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
	<div class="index-page">
		<div class="container index-page__container">
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
	</div>
</template>

<style lang='scss'>
	.index-page
	{
		padding: 20px 0;
	}
	
	.index-page__container
	{
		display: flex;
		gap: 30px;
	}
	
	.index-page__main
	{
		flex: 1;
	}
	
	.index-page__sidebar
	{
		width: 380px;
		flex-shrink: 0;
	}
</style>