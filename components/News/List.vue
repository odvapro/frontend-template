<template>
	<section class="news-list">
		<div class="news-list__hero">
			<NewsHeroCard
				:title="heroNews.title"
				:source="heroNews.source"
				:description="heroNews.description"
				:date="heroNews.date"
				:image-url="heroNews.imageUrl"
			/>
		</div>
		
		<div class="news-list__items">
			<NewsCard
				v-for="(news, index) in newsItems"
				:key="news.id"
				:number="String(index + 1).padStart(2, '0')"
				:title="news.title"
				:source="news.source"
				:description="news.description"
				:points="news.points"
				:category="news.category"
				:date="news.date"
			/>
			<p>еще</p>
		</div>
	</section>
</template>

<script>
	export default {
		name: 'NewsList',
		props:
		{
			heroNews:
			{
				type: Object,
				required: true
			},
			newsItems:
			{
				type: Array,
				required: true
			}
		}
	}
</script>

<style lang="scss" scoped>
	.news-list
	{
		width: 780px;
	}
	.news-list__hero { margin-bottom: 20px; }
	.news-list__items
	{
		display: flex;
		flex-direction: column;
		gap: 20px;
	}
</style>
